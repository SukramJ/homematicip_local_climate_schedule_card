# CLAUDE.md - AI Development Guide

This document provides comprehensive context for AI assistants working with the HomematicIP Local Climate Schedule Card codebase.

## Project Overview

**Name**: HomematicIP Local Climate Schedule Card
**Type**: Custom Lovelace Card for Home Assistant
**Version**: 0.9.0
**License**: MIT
**Primary Language**: TypeScript
**Framework**: Lit (Web Components)

### Purpose

A custom Lovelace card that displays and allows editing of weekly thermostat schedules for HomematicIP devices using the HomematicIP Local integration in Home Assistant.

## Project Structure

```
homematicip_local_climate_schedule_card/
├── src/                                    # Source code
│   ├── homematicip-local-climate-schedule-card.ts  # Main card component
│   ├── editor.ts                           # Visual config editor component
│   ├── types.ts                            # TypeScript type definitions
│   ├── utils.ts                            # Utility functions
│   ├── localization.ts                     # i18n/translation support
│   └── *.test.ts                           # Jest unit tests
├── dist/                                   # Build output (generated)
├── jest/                                   # Jest configuration
├── package.json                            # Dependencies and scripts
├── tsconfig.json                           # TypeScript configuration
├── rollup.config.mjs                       # Build configuration
├── jest.config.js                          # Test configuration
├── eslint.config.mjs                       # Linting configuration
└── README.md                               # User documentation
```

## Core Technologies

- **Lit 3.0**: Web Components framework for building the UI
- **TypeScript 5.9**: Type-safe JavaScript
- **Rollup**: Module bundler
- **Jest**: Testing framework with ts-jest
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **Husky**: Git hooks management
- **lint-staged**: Pre-commit hook automation

## Key Components

### Main Card Component (`src/homematicip-local-climate-schedule-card.ts`)

The primary Lit custom element that:

- Extends `LitElement`
- Implements Home Assistant's custom card interface
- Manages state for schedule viewing and editing
- Renders the week view, profile selector, and edit dialogs
- Handles Home Assistant service calls

### Config Editor (`src/editor.ts`)

Visual configuration editor component that:

- Extends `LitElement` as `HomematicScheduleCardEditor`
- Provides entity selection (filtered to `climate` domain, `homematicip_local` integration)
- Per-entity configuration (custom name, profile name overrides)
- Card-level options via `ha-form` schema (name, toggles, hour format)
- Registered as `homematicip-local-climate-schedule-card-editor`

### Type Definitions (`src/types.ts`)

Core TypeScript interfaces including:

- `HomeAssistant`: Minimal HA interface with `states`, `callService`, `callWS`, `language`
- `HomematicScheduleCardConfig`: Card configuration options
- `EntityConfig`, `EntityConfigOrString`: Per-entity configuration
- `ScheduleEntityAttributes`: Climate entity attributes from HA
- `HassEntity`: Single HA entity state
- Schedule data structures: `SimpleWeekdayData`, `SimpleSchedulePeriod`, `SimpleProfileData`
- Legacy format types: `ScheduleSlot`, `WeekdayData`, `BackendWeekdayData`, `ProfileData`
- Constants: `WEEKDAYS`, `WEEKDAY_LABELS`, `WEEKDAY_LABELS_DE`

### Utilities (`src/utils.ts`)

Helper functions and types including:

- `TimeBlock` interface: Internal representation of schedule blocks
- `ValidationMessage`, `ValidationMessageKey`: Validation result types
- Temperature color mapping and gradient rendering
- Time formatting (12h/24h) and conversion
- Schedule data parsing, conversion, and manipulation
- Block merging, gap filling, and insertion with splitting
- Validation logic for time blocks and schedule data

### Localization (`src/localization.ts`)

Translation system that:

- Supports explicit `language` config or auto-detection from Home Assistant settings
- Provides German and English translations
- Includes day names (short/long), UI labels, error messages, and validation messages
- API: `getTranslations(language)` returns `Translations` object, `formatString(template, params)` for parameterized strings

## Schedule Data Model (Simple Format)

The card uses the **Simple Format** introduced in HomematicIP Local integration v2.0.0+. This format is more efficient than the legacy 13-slot format.

### Data Structure

```typescript
interface SimpleWeekdayData {
  base_temperature: number; // Default temperature for uncovered time periods
  periods: SimpleSchedulePeriod[]; // Temperature deviations from base
}

interface SimpleSchedulePeriod {
  starttime: string; // Format: "HH:MM"
  endtime: string; // Format: "HH:MM"
  temperature: number; // Temperature in °C
}
```

### Base Temperature

The **base temperature** is the default temperature that applies to all time periods not explicitly covered by a period entry.

**How it's determined:**

1. **From backend**: When reading schedule data, `base_temperature` comes directly from the entity's `schedule_data` attribute
2. **When editing**: If the user creates a new schedule, the base temperature is calculated as the temperature that covers the most total time in a day

**Calculation algorithm** (`calculateBaseTemperature`):

```
1. For each time block, calculate its duration (endMinutes - startMinutes)
2. Sum up total minutes for each unique temperature
3. The temperature with the most total minutes becomes the base temperature
4. Default: 20.0°C if no blocks exist
```

**Example:**

```
Blocks: 06:00-08:00 @ 22°C, 08:00-18:00 @ 20°C, 18:00-22:00 @ 22°C
Duration: 22°C = 6 hours, 20°C = 10 hours
→ Base temperature = 20°C (most time coverage)
```

### Block Merging

The card automatically **merges consecutive time blocks** with the same temperature to simplify the schedule display and reduce data sent to the backend.

**Merging algorithm** (`mergeConsecutiveBlocks`):

```
1. Sort blocks by start time
2. For each pair of adjacent blocks:
   - If block A ends exactly when block B starts (A.endTime == B.startTime)
   - AND both have the same temperature
   → Merge into single block: A.startTime to B.endTime
3. Re-assign slot numbers (1, 2, 3, ...)
```

**Example:**

```
Before merging:
  Block 1: 06:00-08:00 @ 22°C
  Block 2: 08:00-10:00 @ 22°C  ← Same temp, consecutive
  Block 3: 10:00-18:00 @ 20°C

After merging:
  Block 1: 06:00-10:00 @ 22°C  ← Merged
  Block 2: 10:00-18:00 @ 20°C
```

### Display vs. Storage

**Display (Card UI):**

- Shows the full 24-hour day as continuous blocks
- Gaps between periods are filled with base temperature blocks (visually)
- Uses `fillGapsWithBaseTemperature()` for display purposes only

**Storage (Backend):**

- Only stores periods that **differ from base temperature**
- Gaps are implicitly filled with `base_temperature`
- More efficient storage: 3 periods instead of 13 slots

**Example:**

```
Backend data:
  base_temperature: 18°C
  periods: [{06:00-22:00, 21°C}]

Card displays:
  00:00-06:00 @ 18°C (base, implicit)
  06:00-22:00 @ 21°C (explicit period)
  22:00-24:00 @ 18°C (base, implicit)
```

### Service Call Format

When saving, the card calls `homematicip_local.set_schedule_simple_weekday`:

```yaml
service: homematicip_local.set_schedule_simple_weekday
data:
  entity_id: climate.living_room
  profile: P1
  weekday: MONDAY
  base_temperature: 18.0
  simple_weekday_list:
    - starttime: "06:00"
      endtime: "08:00"
      temperature: 21.0
    - starttime: "17:00"
      endtime: "22:00"
      temperature: 21.0
```

## Development Workflow

### Initial Setup

```bash
npm install
```

### Build Commands

```bash
npm run build          # Production build + copy to Home Assistant
npm run build:dev      # Build only (no copy to Home Assistant)
npm run watch          # Development mode with auto-rebuild
npm run serve          # Alias for watch
```

### Testing

```bash
npm test               # Run all tests
npm run test:watch     # Watch mode for TDD
npm run test:coverage  # Generate coverage report
```

### Code Quality

```bash
npm run lint           # Check for linting errors
npm run lint:fix       # Auto-fix linting issues
npm run type-check     # TypeScript validation
npm run format         # Format code with Prettier
npm run format:check   # Check formatting without changes
npm run validate       # Run all checks + build
```

### Pre-commit Hooks

Husky automatically runs on commit:

1. **lint-staged**: ESLint + Prettier on staged `.ts` files, plus related Jest tests
2. **Type check**: Full TypeScript validation (`npm run type-check`)
3. **Tests**: All unit tests (`npm test`)
4. **Build**: Production build (`npm run build`)

To bypass (emergency only):

```bash
git commit --no-verify -m "message"
```

See `PRE_COMMIT_HOOKS.md` for detailed documentation.

## Integration with Home Assistant

### Required Integration

This card requires the **HomematicIP Local** integration:

- GitHub: https://github.com/sukramj/homematicip_local
- Provides climate entities with schedule attributes
- Exposes necessary service calls

### Service Calls Used

1. **`homematicip_local.set_schedule_simple_weekday`**
   - Updates schedule for a specific day using simple format (v2.0.0+)
   - Parameters: `entity_id`, `profile`, `weekday`, `base_temperature`, `simple_weekday_list`

2. **`homematicip_local.set_schedule_active_profile`**
   - Loads profile data for viewing (does not activate on device)
   - Parameters: `entity_id`, `profile`

3. **`homematicip_local.set_schedule_profile_weekday`**
   - Legacy fallback for older integration versions
   - Parameters: `entity_id`, `profile`, `weekday`, `weekday_data`

4. **`homematicip_local.reload_device_config`**
   - Force reload for BidCos-RF devices after saving
   - Parameters: `device_address`

### Entity Attributes Expected

Climate entities should expose:

- `available_profiles`: Available profile names
- `active_profile`: Currently active profile
- `preset_mode`: Current mode (patterns: `week_program_X` or `week_profile_X`)
- `schedule_data`: Week schedule with base temperature and time periods per day (v2.0.0+ format)
- `friendly_name`: Display name
- `min_temp`: Minimum allowed temperature
- `max_temp`: Maximum allowed temperature
- `target_temp_step`: Temperature increment step
- `interface_id`: Device interface ID
- `address`: Device address (used for BidCos-RF reload)

## Card Configuration

### Minimal Configuration

```yaml
type: custom:homematicip-local-climate-schedule-card
entity: climate.living_room
```

### Multi-Entity Configuration

```yaml
type: custom:homematicip-local-climate-schedule-card
entities:
  - climate.living_room
  - climate.bedroom
  - climate.office
```

### Advanced Entity Configuration

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
  - climate.office # Simple string format still supported
```

### All Options

| Option                  | Type              | Default        | Description                       |
| ----------------------- | ----------------- | -------------- | --------------------------------- |
| `entity`                | string            | —              | Single entity ID (legacy)         |
| `entities`              | string[] or array | —              | Multiple entities with dropdown   |
| `name`                  | string            | Entity name    | Custom card title                 |
| `profile`               | string            | Active profile | Force specific profile            |
| `show_profile_selector` | boolean           | `true`         | Show profile dropdown             |
| `editable`              | boolean           | `true`         | Enable editing                    |
| `show_temperature`      | boolean           | `true`         | Show temps on blocks              |
| `show_gradient`         | boolean           | `false`        | Show color gradient between temps |
| `temperature_unit`      | string            | `°C`           | Temperature unit                  |
| `hour_format`           | string            | `24`           | `12` or `24` hour format          |
| `language`              | string            | Auto-detect    | Force language (`en` or `de`)     |

#### Entity Object Options

| Option          | Type             | Description                                  |
| --------------- | ---------------- | -------------------------------------------- |
| `entity`        | string           | Climate entity ID (required)                 |
| `name`          | string           | Custom display name for entity dropdown      |
| `profile_names` | Record\<string\> | Custom profile names (e.g., `P1: "Comfort"`) |

## Common Development Tasks

### Adding a New Feature

1. Implement in `src/homematicip-local-climate-schedule-card.ts`
2. Add types to `src/types.ts` if needed
3. Create tests in corresponding `.test.ts` file
4. Update `README.md` if user-facing
5. Run `npm run validate` before committing

### Modifying Schedule Logic

1. Check `src/utils.ts` for helper functions
2. Update `TimeBlock` (in `utils.ts`) or schedule types (in `types.ts`) if data structure changes
3. Ensure backward compatibility with existing schedules
4. Add unit tests for edge cases

### Changing Translations

1. Edit `src/localization.ts`
2. Add keys to both `de` and `en` objects
3. Use translations via `getTranslations(language)` and `formatString(template, params)`
4. Test with different Home Assistant language settings

### Updating Styles

Styles are defined using Lit's `css` tagged template literals in the main component:

- Use CSS custom properties for theming
- Follow Home Assistant's design patterns
- Test in both light and dark themes

## Testing Guidelines

### Unit Test Structure

```typescript
describe('ComponentName', () => {
  it('should do something specific', () => {
    // Arrange
    const input = ...;

    // Act
    const result = functionToTest(input);

    // Assert
    expect(result).toBe(expected);
  });
});
```

### Coverage Goals

- Aim for >80% code coverage
- Focus on business logic and data transformations
- Mock Home Assistant dependencies where appropriate

### Running Specific Tests

```bash
npm test -- utils.test.ts              # Single file
npm test -- --testNamePattern="pattern"  # By name
```

## Build Process

### Rollup Configuration (`rollup.config.mjs`)

The build pipeline:

1. **TypeScript compilation**: `.ts` → `.js` with type checking
2. **Module resolution**: Bundles dependencies
3. **Terser minification**: Optimizes for production
4. **Output**: Single `dist/homematicip-local-climate-schedule-card.js`

### Build Outputs

- `dist/homematicip-local-climate-schedule-card.js`: Production bundle
- `dist/*.d.ts`: TypeScript declarations (if enabled)
- `dist/*.map`: Source maps

## HACS Integration

HACS (Home Assistant Community Store) compatibility:

- **Type**: Lovelace (frontend plugin)
- **Configuration**: `hacs.json`
- **Assets**: Icons and logos in repository root
- **Info**: `info.md` for HACS plugin page

## Troubleshooting Common Issues

### Build Errors

- **"Cannot find module"**: Run `npm install`
- **TypeScript errors**: Check `tsconfig.json` and type imports
- **Rollup errors**: Verify all imports are valid

### Test Failures

- **Import errors**: Ensure Jest is configured for TypeScript (ts-jest)
- **DOM not available**: Use `jest-environment-jsdom`
- **Timeout**: Increase timeout in test config

### Runtime Issues

- **Card not loading**: Check browser console for import errors
- **Entity not found**: Verify entity ID and integration status
- **Service call fails**: Check Home Assistant logs and service parameters

## Best Practices

### Code Style

- Use TypeScript strict mode
- Follow ESLint rules (configured in `eslint.config.mjs`)
- Use Prettier for consistent formatting
- Prefer `const` over `let`, avoid `var`
- Use meaningful variable names

### Component Development

- Keep components small and focused
- Use Lit reactive properties with `@property()` decorator
- Leverage Lit's lifecycle methods appropriately
- Handle errors gracefully with user feedback

### State Management

- Use Lit's reactive properties for internal state
- Store configuration in `_config` property
- Update Home Assistant state via service calls
- Avoid direct DOM manipulation

### Accessibility

- Use semantic HTML elements
- Provide appropriate ARIA labels
- Ensure keyboard navigation works
- Test with screen readers when possible

## Version Control

### Branch Strategy

- `main`: Stable releases
- Feature branches: `feature/description`
- Bug fixes: `fix/description`

### Commit Messages

Follow conventional commits:

```
type(scope): description

feat(schedule): add support for half-hour intervals
fix(editor): prevent duplicate time blocks
docs(readme): update installation instructions
```

### Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create git tag: `git tag -a v0.9.0 -m "Release 0.9.0"`
4. Push tag: `git push origin v0.9.0`
5. GitHub releases automatically built

## Useful Resources

### Documentation

- [Lit Documentation](https://lit.dev/)
- [Home Assistant Custom Cards](https://developers.home-assistant.io/docs/frontend/custom-ui/lovelace-custom-card/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/)

### Related Projects

- [HomematicIP Local Integration](https://github.com/sukramj/homematicip_local)
- [Custom Card Helpers](https://github.com/custom-cards/custom-card-helpers)
- [Lovelace UI](https://www.home-assistant.io/lovelace/)

## Getting Help

### Project Documentation

- `README.md`: User-facing documentation
- `CONTRIBUTING.md`: Contribution guidelines
- `QUICKSTART.md`: Quick start guide
- `TESTING.md`: Testing documentation
- `PRE_COMMIT_HOOKS.md`: Git hooks documentation

### When Stuck

1. Check existing tests for usage examples
2. Review Home Assistant developer docs
3. Search GitHub issues for similar problems
4. Test changes in a live Home Assistant instance

## Notes for AI Assistants

When working with this codebase:

1. **Always run tests** after making changes: `npm test`
2. **Type-check** before committing: `npm run type-check`
3. **Follow existing patterns** in the codebase for consistency
4. **Update tests** when modifying functionality
5. **Consider backward compatibility** when changing config options
6. **Document user-facing changes** in README.md
7. **Use the pre-commit hooks** to ensure quality
8. **Test with actual Home Assistant** when possible for integration testing

### Quick Commands Reference

```bash
# Development
npm run watch              # Auto-rebuild on changes

# Quality checks (before committing)
npm run validate           # Run all checks + build

# Testing specific features
npm test -- --watch        # TDD mode
npm test -- utils.test     # Test specific file

# Fix issues
npm run lint:fix           # Auto-fix linting
npm run format             # Auto-format code
```
