# HomematicIP Local Climate Schedule Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A custom Lovelace card for Home Assistant to display and edit Homematic thermostat schedules with the HomematicIP Local integration.

![HomematicIP Local Climate Schedule Card](logo.png)

## Features

- 📅 **Visual Week Schedule Display**: See your entire week at a glance with color-coded temperature blocks
- ✏️ **Interactive Editor**: Click any time slot to edit the schedule with intuitive time and temperature controls
- 🎨 **Temperature Visualization**: Color-coded blocks aligned with Home Assistant climate state colors
- 🔄 **Profile Switching**: Easy dropdown to switch between different schedule profiles for viewing/editing
- ✅ **Active Profile Indicator**: See which profile is currently active on the device (marked with \*)
- 📋 **Copy & Paste**: Copy a day's schedule and paste it to other weekdays
- 📤 **Import/Export**: Backup and share schedules as JSON files
- ↩️ **Undo/Redo**: Full undo/redo support with keyboard shortcuts (Ctrl+Z / Ctrl+Y)
- 🔌 **Multi-API Support**: Auto-detects and supports both V1 and V2 API (HomematicIP Local >= 2.3.0)
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices with touch-optimized controls
- 🌍 **Localization**: English and German UI with automatic language detection
- ⚙️ **Visual Configuration**: Configure the card directly in the UI - no YAML required

## Installation

### HACS (Recommended)

1. Make sure [HACS](https://hacs.xyz/) is installed
2. In HACS, go to "Frontend"
3. Click the three-dot menu and select "Custom repositories"
4. Add this repository URL: `https://github.com/SukramJ/homematicip_local_climate_schedule_card`
5. Select category "Lovelace"
6. Click "Install"
7. Restart Home Assistant

### Manual Installation

1. Download the `homematicip-local-climate-schedule-card.js` file from the latest release
2. Copy it to your `config/www` folder
3. Add the resource to your Lovelace dashboard:
   - Go to Settings → Dashboards → Resources
   - Click "Add Resource"
   - URL: `/local/homematicip-local-climate-schedule-card.js`
   - Resource type: JavaScript Module

## Device Support

This card supports all HomematicIP thermostats and Homematic devices with schedule support and more than one profile. HM-CC-RT-DN is only supported via thermostat group.

## Configuration

### Basic Configuration

```yaml
type: custom:homematicip-local-climate-schedule-card
entity: climate.your_thermostat
```

### Multiple Entities

Define `entities` instead of `entity` to switch between multiple thermostats via the header dropdown:

```yaml
type: custom:homematicip-local-climate-schedule-card
entities:
  - climate.living_room
  - climate.bedroom
  - climate.office
```

When only one entity is provided, the dropdown is hidden and the card shows the friendly name instead.

### Custom Entity Names and Profile Names

You can define custom display names for each entity and custom names for profiles:

```yaml
type: custom:homematicip-local-climate-schedule-card
entities:
  - entity: climate.living_room
    name: "Living Room"
    profile_names:
      P1: "Comfort"
      P2: "Eco"
      P3: "Night"
  - entity: climate.bedroom
    name: "Bedroom"
    profile_names:
      P1: "Normal"
      P2: "Away"
  - climate.office # Without custom name - uses friendly_name
```

- **Entity name**: Displayed in the entity dropdown instead of the friendly_name
- **Profile names**: Displayed as "P1 - Comfort", "P2 - Eco", etc. in the profile dropdown

These settings can also be configured via the visual editor by clicking on an entity to expand its configuration.

### Full Configuration

```yaml
type: custom:homematicip-local-climate-schedule-card
entities:
  - climate.living_room_thermostat
name: Living Room Schedule
show_profile_selector: true
editable: true
show_temperature: true
temperature_unit: "°C"
hour_format: "24"
```

### Configuration Options

| Option                  | Type              | Default        | Description                              |
| ----------------------- | ----------------- | -------------- | ---------------------------------------- |
| `entity`                | string            | —              | Single climate entity (legacy)           |
| `entities`              | string[] or array | —              | List of climate entities                 |
| `name`                  | string            | Entity name    | Custom name for the card header          |
| `profile`               | string            | Active profile | Force display of a specific profile      |
| `show_profile_selector` | boolean           | `true`         | Show/hide the profile selector dropdown  |
| `editable`              | boolean           | `true`         | Enable/disable schedule editing          |
| `show_temperature`      | boolean           | `true`         | Show/hide temperature values on blocks   |
| `show_gradient`         | boolean           | `false`        | Show color gradient between temperatures |
| `temperature_unit`      | string            | `°C`           | Temperature unit to display              |
| `hour_format`           | string            | `24`           | Time format: `12` or `24` hour           |
| `language`              | string            | Auto-detect    | Force language: `en` or `de`             |

#### Entity Configuration

Each entity in the `entities` array can be either a simple string or an object:

| Option          | Type             | Description                                       |
| --------------- | ---------------- | ------------------------------------------------- |
| `entity`        | string           | Climate entity ID (required)                      |
| `name`          | string           | Custom display name for the entity dropdown       |
| `profile_names` | Record\<string\> | Custom names for profiles (e.g., `P1: "Comfort"`) |

## Usage

### Viewing Schedules

The card displays your week schedule with color-coded temperature blocks aligned with Home Assistant climate state colors:

- 🔵 **Blue** (< 10°C): Cold (HA Cool Blue)
- 💙 **Light Blue** (10-14°C): Cool
- 🩵 **Cyan** (14-17°C): Mild Cool
- 💚 **Green** (17-19°C): Comfort Low
- 🟢 **Light Green** (19-21°C): Comfort
- 🟠 **Light Orange** (21-23°C): Warm
- 🟠 **Orange** (23-25°C): Warmer (HA Heat Orange)
- 🔴 **Deep Orange** (≥ 25°C): Hot

Hover over any block to see the exact time range and temperature.

### Active Profile Indicator

The card automatically detects which profile is currently active on your thermostat device and marks it with an asterisk (\*) in the profile selector dropdown. This helps you quickly identify which schedule is actually running on the device.

- The active profile is read from the `preset_mode` attribute of the climate entity
- The asterisk (\*) appears before the profile name (e.g., `*P1` or `*P1 - Comfort`)
- The profile selector is used only for viewing/editing different profiles, not for activating them
- If the device profile changes, the card updates the indicator automatically

### Editing Schedules

1. Click on any time slot in the week view
2. The editor opens showing all time slots for that day
3. Modify times and temperatures as needed
4. Add new time blocks with the "+ Add Time Block" button
5. Remove unwanted blocks with the trash icon
6. Use undo/redo (Ctrl+Z / Ctrl+Y) to revert or re-apply changes
7. Click "Save" to apply changes to your thermostat

### Copy & Paste

Click the copy icon on a weekday to copy its schedule, then paste it onto other weekdays. This is useful for applying the same schedule to multiple days.

### Import & Export

- **Export**: Download the current schedule as a JSON file for backup or sharing
- **Import**: Load a previously exported schedule from a JSON file

### Profile Switching

If your thermostat supports multiple profiles (P1, P2, P3, etc.), use the dropdown in the card header to switch between them. The profile selector is for viewing and editing only — it does not activate the profile on the device.

### Understanding the Schedule Format

The card uses the **Simple Format** from HomematicIP Local v2.0.0+, which consists of a **base temperature** and **temperature periods**.

#### Base Temperature

The base temperature is the default temperature that applies to all times not covered by an explicit period. Think of it as the "background" temperature for the day.

**Example:** If your base temperature is 18°C and you have one period from 06:00-22:00 at 21°C:

- 00:00-06:00: 18°C (base temperature)
- 06:00-22:00: 21°C (explicit period)
- 22:00-24:00: 18°C (base temperature)

When you edit a schedule, the base temperature is shown at the top of the editor. You can adjust it to change the default temperature for all uncovered time periods.

#### Automatic Block Merging

The card automatically merges consecutive time blocks with the same temperature. This keeps your schedule clean and efficient.

**Example:**

- If you have 06:00-08:00 at 22°C followed by 08:00-10:00 at 22°C
- The card will display and save this as a single block: 06:00-10:00 at 22°C

This merging happens automatically when you save your schedule.

#### Efficient Storage

Only temperature periods that **differ from the base temperature** are stored. This means:

- A simple schedule with one heating period uses only 1-2 entries
- The thermostat fills gaps automatically with the base temperature

## Requirements

- Home Assistant 2026.4.0 or newer
- [HomematicIP Local](https://github.com/sukramj/homematicip_local) integration v2.0.0+ installed and configured
- HomematicIP or Homematic thermostat device with schedule support (e.g., HmIP-eTRV, HmIP-BWTH, HM-CC-RT-DN)

## Compatibility

This card is specifically designed for the **HomematicIP Local** integration and requires:

- Climate entities with `schedule_data` attribute
- V2 API (integration >= 2.3.0): `homematicip_local.set_schedule_weekday` (device-based)
- V1 API (integration >= 2.0.0): `homematicip_local.set_schedule_simple_weekday` (entity-based)
- Profile management: `homematicip_local.set_schedule_active_profile`

The card auto-detects the API version per entity and supports mixed V1/V2 setups.

## Troubleshooting

### Card not appearing

1. Clear your browser cache (Ctrl+F5)
2. Check that the resource is properly added to Lovelace
3. Verify the file is accessible at `/local/homematicip-local-climate-schedule-card.js`

### Entity not found

1. Make sure your climate entity ID is correct
2. Verify the entity has schedule attributes from HomematicIP Local integration
3. Check Home Assistant logs for errors

### Changes not saving

1. Check Home Assistant logs for service call errors
2. Ensure your CCU/thermostat is reachable
3. Verify you have proper permissions — the card shows a dedicated error message for insufficient permissions

### Sensor entity not supported

The card only works with climate entities that have `schedule_type: "climate"`. Sensor entities are not supported and will show an error message.

## Development

Development of this card happens in the [homematicip-local-frontend](https://github.com/SukramJ/homematicip-local-frontend) monorepo. This repository is used for HACS distribution only.

Contributions are welcome! Please submit Pull Requests to the monorepo.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues and questions, please use the [GitHub Issues](https://github.com/SukramJ/homematicip_local_climate_schedule_card/issues) page.
