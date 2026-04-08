# HomematicIP Local Climate Schedule Card

> **This card is now included with the [HomematicIP Local](https://github.com/SukramJ/homematicip_local) integration and no longer requires separate installation.**
>
> Starting with HomematicIP Local **v2.6.0**, the climate schedule card is automatically registered when the integration loads. You can remove this HACS resource from your Lovelace configuration.
>
> If both the HACS version and the integration-bundled version are loaded, the integration version detects the conflict and defers to the HACS version — no errors will occur. A console warning provides removal instructions.

---

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A custom Lovelace card for Home Assistant to display and edit Homematic thermostat schedules with the HomematicIP Local integration.

![HomematicIP Local Climate Schedule Card](logo.png)

## Migration

1. Update the HomematicIP Local integration to the latest version
2. Clear your browser cache (Ctrl+F5)
3. The card continues to work — the integration-bundled version is identical
4. Remove this HACS resource when ready: **HACS** → **Frontend** → remove **HomematicIP Local Climate Schedule Card**

No dashboard YAML changes are needed — the card element name (`homematicip-local-climate-schedule-card`) remains the same.

## Features

- Visual week schedule display with color-coded temperature blocks
- Interactive editor for schedule time slots
- Profile switching with active profile indicator
- Copy/paste and import/export schedules
- Undo/redo support
- Multi-entity support
- Custom profile names
- English and German
- Visual configuration via UI editor

## Configuration

```yaml
type: custom:homematicip-local-climate-schedule-card
entities:
  - entity: climate.living_room
    name: "Living Room"
    profile_names:
      P1: "Comfort"
      P2: "Eco"
  - climate.bedroom
```

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

## Requirements

- Home Assistant 2026.3.0 or newer
- [HomematicIP Local](https://github.com/sukramj/homematicip_local) integration

## Development

Development happens in the [homematicip-local-frontend](https://github.com/SukramJ/homematicip-local-frontend) monorepo.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues and questions, please use the [GitHub Issues](https://github.com/SukramJ/homematicip-local-frontend/issues) page.
