export interface Translations {
  // Weekday labels
  weekdays: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  // UI labels and messages
  ui: {
    schedule: string;
    loading: string;
    entityNotFound: string;
    clickToEdit: string;
    edit: string;
    cancel: string;
    save: string;
    addTimeBlock: string;
    copySchedule: string;
    pasteSchedule: string;
    undo: string;
    redo: string;
    undoShortcut: string;
    redoShortcut: string;
    toggleCompactView: string;
    toggleFullView: string;
    exportSchedule: string;
    importSchedule: string;
    exportTooltip: string;
    importTooltip: string;
    exportSuccess: string;
    importSuccess: string;
    unsavedChanges: string;
    saveAll: string;
    discard: string;
    enableDragDrop: string;
    disableDragDrop: string;
    confirmDiscardChanges: string;
  };
  // Error messages
  errors: {
    failedToChangeProfile: string;
    failedToSaveSchedule: string;
    failedToPasteSchedule: string;
    invalidSchedule: string;
    failedToExport: string;
    failedToImport: string;
    invalidImportFile: string;
    invalidImportFormat: string;
    invalidImportData: string;
  };
  // Validation warnings
  warnings: {
    title: string;
    noWarnings: string;
  };
}

const en: Translations = {
  weekdays: {
    monday: "Mo",
    tuesday: "Tu",
    wednesday: "We",
    thursday: "Th",
    friday: "Fr",
    saturday: "Sa",
    sunday: "Su",
  },
  ui: {
    schedule: "Schedule",
    loading: "Loading schedule data...",
    entityNotFound: "Entity {entity} not found",
    clickToEdit: "Click on a day to edit its schedule",
    edit: "Edit {weekday}",
    cancel: "Cancel",
    save: "Save",
    addTimeBlock: "+ Add Time Block",
    copySchedule: "Copy schedule",
    pasteSchedule: "Paste schedule",
    undo: "Undo",
    redo: "Redo",
    undoShortcut: "Undo (Ctrl+Z)",
    redoShortcut: "Redo (Ctrl+Y)",
    toggleCompactView: "Compact view",
    toggleFullView: "Full view",
    exportSchedule: "Export",
    importSchedule: "Import",
    exportTooltip: "Export schedule to JSON file",
    importTooltip: "Import schedule from JSON file",
    exportSuccess: "Schedule exported successfully",
    importSuccess: "Schedule imported successfully",
    unsavedChanges: "Unsaved changes",
    saveAll: "Save all",
    discard: "Discard",
    enableDragDrop: "Enable drag & drop mode",
    disableDragDrop: "Disable drag & drop mode",
    confirmDiscardChanges: "You have unsaved changes. Do you want to discard them?",
  },
  errors: {
    failedToChangeProfile: "Failed to change profile: {error}",
    failedToSaveSchedule: "Failed to save schedule: {error}",
    failedToPasteSchedule: "Failed to paste schedule: {error}",
    invalidSchedule: "Invalid schedule: {error}",
    failedToExport: "Failed to export schedule: {error}",
    failedToImport: "Failed to import schedule: {error}",
    invalidImportFile: "Invalid file format. Please select a JSON file.",
    invalidImportFormat: "Invalid JSON format in file.",
    invalidImportData: "Invalid schedule data: {error}",
  },
  warnings: {
    title: "Validation Warnings",
    noWarnings: "No issues detected",
  },
};

const de: Translations = {
  weekdays: {
    monday: "Mo",
    tuesday: "Di",
    wednesday: "Mi",
    thursday: "Do",
    friday: "Fr",
    saturday: "Sa",
    sunday: "So",
  },
  ui: {
    schedule: "Zeitplan",
    loading: "Zeitplandaten werden geladen...",
    entityNotFound: "Entität {entity} nicht gefunden",
    clickToEdit: "Klicken Sie auf einen Tag, um den Zeitplan zu bearbeiten",
    edit: "{weekday} bearbeiten",
    cancel: "Abbrechen",
    save: "Speichern",
    addTimeBlock: "+ Zeitblock hinzufügen",
    copySchedule: "Zeitplan kopieren",
    pasteSchedule: "Zeitplan einfügen",
    undo: "Rückgängig",
    redo: "Wiederholen",
    undoShortcut: "Rückgängig (Strg+Z)",
    redoShortcut: "Wiederholen (Strg+Y)",
    toggleCompactView: "Kompaktansicht",
    toggleFullView: "Vollansicht",
    exportSchedule: "Exportieren",
    importSchedule: "Importieren",
    exportTooltip: "Zeitplan als JSON-Datei exportieren",
    importTooltip: "Zeitplan aus JSON-Datei importieren",
    exportSuccess: "Zeitplan erfolgreich exportiert",
    importSuccess: "Zeitplan erfolgreich importiert",
    unsavedChanges: "Ungespeicherte Änderungen",
    saveAll: "Alle speichern",
    discard: "Verwerfen",
    enableDragDrop: "Drag & Drop Modus aktivieren",
    disableDragDrop: "Drag & Drop Modus deaktivieren",
    confirmDiscardChanges: "Sie haben ungespeicherte Änderungen. Möchten Sie diese verwerfen?",
  },
  errors: {
    failedToChangeProfile: "Fehler beim Wechseln des Profils: {error}",
    failedToSaveSchedule: "Fehler beim Speichern des Zeitplans: {error}",
    failedToPasteSchedule: "Fehler beim Einfügen des Zeitplans: {error}",
    invalidSchedule: "Ungültiger Zeitplan: {error}",
    failedToExport: "Fehler beim Exportieren des Zeitplans: {error}",
    failedToImport: "Fehler beim Importieren des Zeitplans: {error}",
    invalidImportFile: "Ungültiges Dateiformat. Bitte wählen Sie eine JSON-Datei.",
    invalidImportFormat: "Ungültiges JSON-Format in der Datei.",
    invalidImportData: "Ungültige Zeitplandaten: {error}",
  },
  warnings: {
    title: "Validierungswarnungen",
    noWarnings: "Keine Probleme erkannt",
  },
};

const translations: Record<string, Translations> = {
  en,
  de,
};

export type SupportedLanguage = "en" | "de";

export function getTranslations(language: string): Translations {
  // Normalize language code (e.g., "en-US" -> "en", "de-DE" -> "de")
  const lang = language.toLowerCase().split("-")[0];

  // Return specific language or fallback to English
  return translations[lang] || translations.en;
}

export function formatString(template: string, params: Record<string, string>): string {
  let result = template;
  for (const [key, value] of Object.entries(params)) {
    result = result.replace(`{${key}}`, value);
  }
  return result;
}
