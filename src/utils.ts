import { WeekdayData, ScheduleSlot, BackendWeekdayData } from "./types";

// Re-export types for use in this module
export type { ScheduleSlot, BackendWeekdayData };

/**
 * Convert time string (HH:MM) to minutes
 */
export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

/**
 * Convert minutes to time string (HH:MM)
 */
export function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
}

/**
 * Parse weekday schedule data into time blocks
 */
export interface TimeBlock {
  startTime: string;
  startMinutes: number;
  endTime: string;
  endMinutes: number;
  temperature: number;
  slot: number;
}

export function parseWeekdaySchedule(weekdayData: WeekdayData): TimeBlock[] {
  const blocks: TimeBlock[] = [];
  let previousEndTime = "00:00";
  let previousEndMinutes = 0;

  // Sort slots by slot number
  const sortedSlots = Object.entries(weekdayData)
    .map(([slot, data]) => ({ slot: parseInt(slot), data }))
    .sort((a, b) => a.slot - b.slot);

  for (const { slot, data } of sortedSlots) {
    const endTime = data.ENDTIME;
    const endMinutes = timeToMinutes(endTime);

    // Skip if this is the same as previous end time (unused slot)
    if (endMinutes > previousEndMinutes && endMinutes <= 1440) {
      blocks.push({
        startTime: previousEndTime,
        startMinutes: previousEndMinutes,
        endTime: endTime,
        endMinutes: endMinutes,
        temperature: data.TEMPERATURE,
        slot: slot,
      });

      previousEndTime = endTime;
      previousEndMinutes = endMinutes;
    }

    // Stop at 24:00
    if (endMinutes >= 1440) {
      break;
    }
  }

  return blocks;
}

/**
 * Convert time blocks back to weekday data format
 * Ensures blocks are sorted by time and slot numbers are sequential before converting
 */
export function timeBlocksToWeekdayData(blocks: TimeBlock[]): WeekdayData {
  const weekdayData: WeekdayData = {};

  // Sort blocks by end time to ensure ascending order
  const sortedBlocks = [...blocks].sort((a, b) => a.endMinutes - b.endMinutes);

  // Renumber slots sequentially after sorting (1, 2, 3, ...)
  const renumberedBlocks = sortedBlocks.map((block, index) => ({
    ...block,
    slot: index + 1,
  }));

  // Ensure the last block ends at 24:00
  if (renumberedBlocks.length > 0) {
    const lastBlock = renumberedBlocks[renumberedBlocks.length - 1];
    if (lastBlock.endMinutes !== 1440) {
      renumberedBlocks[renumberedBlocks.length - 1] = {
        ...lastBlock,
        endTime: "24:00",
        endMinutes: 1440,
      };
    }
  }

  // Fill in all 13 slots
  for (let i = 1; i <= 13; i++) {
    const block = renumberedBlocks[i - 1];
    if (block) {
      weekdayData[i.toString()] = {
        ENDTIME: block.endTime,
        TEMPERATURE: block.temperature,
      };
    } else {
      // Fill unused slots with 24:00
      weekdayData[i.toString()] = {
        ENDTIME: "24:00",
        TEMPERATURE: 16.0,
      };
    }
  }

  return weekdayData;
}

/**
 * Convert WeekdayData to backend format with integer keys
 * Backend (aiohomematic) expects dict[int, dict[str, str|float]]
 */
export function convertToBackendFormat(weekdayData: WeekdayData): BackendWeekdayData {
  const backendData: BackendWeekdayData = {};

  for (let i = 1; i <= 13; i++) {
    const slot = weekdayData[i.toString()];
    if (slot) {
      // Convert string key to integer key for backend
      backendData[i] = {
        ENDTIME: slot.ENDTIME,
        TEMPERATURE: slot.TEMPERATURE,
      };
    }
  }

  return backendData;
}

/**
 * Validate time blocks in the editor
 * Returns array of warning messages (empty if valid)
 */
export function validateTimeBlocks(blocks: TimeBlock[]): string[] {
  const warnings: string[] = [];

  if (blocks.length === 0) {
    warnings.push("At least one time block is required");
    return warnings;
  }

  // Check for time overlaps and gaps
  for (let i = 0; i < blocks.length - 1; i++) {
    const currentBlock = blocks[i];
    const nextBlock = blocks[i + 1];

    // Check if blocks are connected (no gaps)
    if (currentBlock.endMinutes !== nextBlock.startMinutes) {
      warnings.push(`Gap detected between block ${i + 1} and ${i + 2}`);
    }

    // Check for backwards time
    if (currentBlock.endMinutes < currentBlock.startMinutes) {
      warnings.push(`Block ${i + 1}: End time is before start time`);
    }

    // Check if end time equals start time (zero duration)
    if (currentBlock.endMinutes === currentBlock.startMinutes) {
      warnings.push(`Block ${i + 1}: Block has zero duration`);
    }
  }

  // Check last block
  const lastBlock = blocks[blocks.length - 1];
  if (lastBlock.endMinutes !== 1440) {
    warnings.push("Last block must end at 24:00");
  }

  if (lastBlock.endMinutes < lastBlock.startMinutes) {
    warnings.push(`Block ${blocks.length}: End time is before start time`);
  }

  // Check for invalid time values
  blocks.forEach((block, index) => {
    if (block.startMinutes < 0 || block.startMinutes > 1440) {
      warnings.push(`Block ${index + 1}: Invalid start time`);
    }
    if (block.endMinutes < 0 || block.endMinutes > 1440) {
      warnings.push(`Block ${index + 1}: Invalid end time`);
    }
    if (block.temperature < 5 || block.temperature > 30.5) {
      warnings.push(`Block ${index + 1}: Temperature out of range (5-30.5°C)`);
    }
  });

  return warnings;
}

/**
 * Validate schedule data
 */
export function validateWeekdayData(weekdayData: WeekdayData): string | null {
  const slots = Object.keys(weekdayData);

  // Must have exactly 13 slots
  if (slots.length !== 13) {
    return `Invalid number of slots: ${slots.length} (expected 13)`;
  }

  // Validate that all keys are numeric strings
  for (const key of slots) {
    const num = parseInt(key, 10);
    if (isNaN(num) || num < 1 || num > 13 || key !== num.toString()) {
      return `Invalid slot key: ${key} (must be integer 1-13)`;
    }
  }

  let previousEndMinutes = 0;

  for (let i = 1; i <= 13; i++) {
    const slot = weekdayData[i.toString()];

    if (!slot) {
      return `Missing slot ${i}`;
    }

    if (!slot.ENDTIME || slot.TEMPERATURE === undefined) {
      return `Slot ${i} missing ENDTIME or TEMPERATURE`;
    }

    const endMinutes = timeToMinutes(slot.ENDTIME);

    if (endMinutes < previousEndMinutes) {
      return `Slot ${i} time goes backwards: ${slot.ENDTIME}`;
    }

    if (endMinutes > 1440) {
      return `Slot ${i} time exceeds 24:00: ${slot.ENDTIME}`;
    }

    previousEndMinutes = endMinutes;
  }

  // Last slot must be 24:00
  if (weekdayData["13"].ENDTIME !== "24:00") {
    return `Last slot must end at 24:00`;
  }

  return null;
}

/**
 * Get temperature color based on value
 */
export function getTemperatureColor(temperature: number): string {
  if (temperature < 12) return "#3498db"; // Cold - Blue
  if (temperature < 16) return "#5dade2"; // Cool - Light Blue
  if (temperature < 18) return "#58d68d"; // Mild - Green
  if (temperature < 20) return "#f39c12"; // Warm - Orange
  if (temperature < 22) return "#e67e22"; // Warmer - Dark Orange
  return "#e74c3c"; // Hot - Red
}

/**
 * Get gradient background for a temperature block based on adjacent blocks
 * @param currentTemp Current block temperature
 * @param prevTemp Previous block temperature (null if first block)
 * @param nextTemp Next block temperature (null if last block)
 * @returns CSS gradient string or solid color
 */
export function getTemperatureGradient(
  currentTemp: number,
  prevTemp: number | null,
  nextTemp: number | null,
): string {
  const currentColor = getTemperatureColor(currentTemp);

  // If no adjacent blocks, use solid color
  if (prevTemp === null && nextTemp === null) {
    return currentColor;
  }

  // If only one adjacent block, create gradient from that direction
  if (prevTemp !== null && nextTemp === null) {
    const prevColor = getTemperatureColor(prevTemp);
    return `linear-gradient(to bottom, ${prevColor}, ${currentColor})`;
  }

  if (prevTemp === null && nextTemp !== null) {
    const nextColor = getTemperatureColor(nextTemp);
    return `linear-gradient(to bottom, ${currentColor}, ${nextColor})`;
  }

  // Both adjacent blocks exist - create gradient from prev through current to next
  if (prevTemp !== null && nextTemp !== null) {
    const prevColor = getTemperatureColor(prevTemp);
    const nextColor = getTemperatureColor(nextTemp);
    return `linear-gradient(to bottom, ${prevColor}, ${currentColor} 50%, ${nextColor})`;
  }

  return currentColor;
}

/**
 * Round time to nearest 15 minutes
 */
export function roundTimeToQuarter(minutes: number): number {
  return Math.round(minutes / 15) * 15;
}

/**
 * Format temperature for display
 */
export function formatTemperature(temperature: number, unit: string = "°C"): string {
  return `${temperature.toFixed(1)}${unit}`;
}

/**
 * Validate imported ProfileData structure
 * Returns error message if invalid, null if valid
 */
export function validateProfileData(data: unknown): string | null {
  if (!data || typeof data !== "object") {
    return "Schedule data must be an object";
  }

  const profileData = data as Record<string, unknown>;
  const validWeekdays = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  // Check if all required weekdays are present
  for (const weekday of validWeekdays) {
    if (!(weekday in profileData)) {
      return `Missing weekday: ${weekday}`;
    }

    const weekdayData = profileData[weekday];
    if (!weekdayData || typeof weekdayData !== "object") {
      return `Invalid data for ${weekday}`;
    }

    // Validate weekday data structure
    const error = validateWeekdayData(weekdayData as WeekdayData);
    if (error) {
      return `${weekday}: ${error}`;
    }
  }

  return null;
}
