# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Updated dependencies:
  - `eslint` 9.39.2 → 10.0.2
  - `typescript-eslint` 8.54.0 → 8.56.1
  - `rollup` 4.57.1 → 4.59.0

## [0.10.0] - 2026-02-24

### Added

- Validation guard for sensor entities without `schedule_type: "climate"`
  - Sensor entities are gracefully rejected with a localized error message
  - Guard in `_updateFromEntity` clears state for incompatible sensor entities
  - Guard in `render` displays user-friendly error in card UI
- Warning for entities without `schedule_data` attribute
  - Displays localized error message when an entity does not provide schedule data
  - Guard in `_updateFromEntity` clears state for entities without schedule data
  - Guard in `render` displays user-friendly warning in card UI

### Changed

- Extracted schedule grid and editor into shared `@hmip/schedule-ui` package for consistent UX across card and config panel
  - `<hmip-schedule-grid>`: visual 7-day timeline with color-coded temperature blocks, copy/paste, current time indicator
  - `<hmip-schedule-editor>`: edit dialog with weekday tabs, undo/redo, inline slot editing, validation warnings
- Card is now a thin wrapper around shared components (~3170 LOC → ~770 LOC)

### Technical

- Added `schedule_type` to `ScheduleEntityAttributes` type
- Added `sensorNotSupported` translation key (EN + DE) for incompatible sensor entity error
- Added `noScheduleData` translation key (EN + DE) for missing schedule data warning
- Added `@hmip/schedule-ui` workspace dependency
- Moved grid rendering, editor rendering, slot editing, undo/redo history, keyboard handling, current time tracking, and ~600 lines of CSS into shared components
- Card retains entity/profile management, service calls, import/export, and config editor
- Communication with shared components via typed CustomEvents (`weekday-click`, `save-schedule`, `editor-closed`, etc.)
- Translation bridge methods map card localization to component translation interfaces
- Removed direct dependencies: `lit/directives/repeat.js`, numerous `@hmip/schedule-core` utilities now consumed internally by schedule-ui

## [0.9.0] - 2026-02-07

**Requires Homematic(IP) Local integration >= 2.3.0 for V2 API support. Fully backward compatible with older versions (V1 API).**

### Added

- Multi-API-version support (V1 + V2) for the Homematic(IP) Local integration
  - Auto-detects API version per entity via `schedule_api_version` attribute
  - V2 uses device-based service calls (`set_schedule_weekday` with `device_address`)
  - V1 continues to use entity-based service calls (`set_schedule_simple_weekday` with `entity_id`)
  - Mixed V1/V2 entities in the same card are fully supported
- API version badge in the card header showing the detected version (v1/v2)

### Removed

- Dropped support for importing schedules in legacy 13-slot format
- Removed `set_schedule_profile_weekday` service call (only simple format is supported)
- Removed legacy format detection logic from schedule import
- Removed unused imports: `ProfileData`, `convertToBackendFormat`, `validateProfileData`

### Fixed

- Improved hint text for editing schedules
  - Changed "Click on a day to edit its schedule" to "Click on a time slot to edit the schedule"
  - Changed "Klicken Sie auf einen Tag, um den Zeitplan zu bearbeiten" to "Klicken Sie auf einen Zeitabschnitt, um den Zeitplan zu bearbeiten"
  - Previous wording was misleading as clicking on the day label (Mo, Di, ...) had no effect

### Technical

- Added `schedule_api_version` to `ScheduleEntityAttributes` type
- Added `ScheduleApiVersion` type and utility functions `getScheduleApiVersion()`, `getDeviceAddress()`
- Added `_callSetActiveProfile()` and `_callSetScheduleWeekday()` helper methods that encapsulate V1/V2 service call differences
- Refactored `_scheduleReloadDeviceConfig()` to use shared `getDeviceAddress()` utility
- All 5 direct `callService` sites replaced with API-version-aware helpers

## [0.8.0] - 2026-02-03

### Added

- Active profile indicator in profile selector dropdown
  - Shows which profile is currently active on the device with an asterisk (\*)
  - Reads from `preset_mode` entity attribute (e.g., `week_program_1` → `P1`)
  - Supports both `week_program_X` and `week_profile_X` formats
  - Visual highlighting with green color and bold font for active profile
  - Active profile updates automatically when device profile changes
  - Card automatically displays active profile when opened or entity switched
  - Profile selector allows viewing/editing other profiles without activating them on device

### Fixed

- Schedule view now updates when preset_mode changes externally (e.g., profile changed on thermostat)
  - Calls `set_schedule_active_profile` to reload schedule data when external profile change is detected
  - Previously, only the dropdown updated but the schedule display showed stale data
- Card now follows external preset_mode changes
  - Resets manual profile selection when device's active profile changes externally
  - Schedule automatically updates to show the new active profile's data
  - Active profile indicator in dropdown updates accordingly
- Fixed card layout overflow issues causing horizontal and vertical scrollbars (#81)
  - Added `overflow: hidden` to ha-card and card-content containers
  - Made header-controls responsive with `flex-wrap: wrap` and `max-width: 100%`
  - Changed entity-selector from fixed width to flexible (`flex: 1 1 auto`)
  - Added `flex-shrink: 0` to profile-selector and buttons to prevent unwanted shrinking
  - Changed schedule-container overflow from `auto` to `hidden` for cleaner layout
  - Profile-selector now has `max-width: 200px` to prevent excessive width
  - Entity-selector now has `min-width: 150px` for better flexibility

### Changed

- Card automatically displays active profile when opened, entity switched, or preset_mode changes
- Profile selector no longer activates profiles on the device when changed manually
- Manual profile selection is for viewing/editing without changing the device profile
- Entity selector now only shows HomematicIP Local climate entities (filtered by `integration: "homematicip_local"`)
- Stub config suggestion now filters for entities with `schedule_data` attribute

### Technical

- Changed `updated()` lifecycle method to `willUpdate()` for entity data synchronization
  - Ensures `_updateFromEntity()` runs before render, not after
- Added `_reloadScheduleData()` method to reload schedule data on external profile changes
  - Calls `set_schedule_active_profile` service to refresh `schedule_data` attribute
- Removed `_parsedScheduleCache` - schedule blocks are now parsed fresh on each render
- Removed `shouldUpdate()` override - let Lit handle update decisions
- Added `preset_mode` to `ScheduleEntityAttributes` interface
- Added `_activeDeviceProfile` state property to track device's active profile
- Added `_getProfileFromPresetMode()` helper method to convert `week_profile_X` to `PX` format
- Enhanced `_updateFromEntity()` to extract and use active profile from preset_mode
- Enhanced `_updateFromEntity()` to detect external profile changes and reset `_userSelectedProfile`
- Added CSS class `active-profile-option` for styling active profile in dropdown

## [0.7.0] - 2026-02-01

### Added

- Custom display names for entities in multi-entity configuration
  - Configure via `name` property in entity object: `{ entity: climate.living_room, name: "Living Room" }`
  - Displayed in entity dropdown instead of friendly_name
- Custom profile names per entity
  - Configure via `profile_names` property: `{ entity: ..., profile_names: { P1: "Comfort", P2: "Eco" } }`
  - Displayed as "P1 - Comfort", "P2 - Eco" in profile dropdown
  - Profile names are entity-specific, allowing different names for each thermostat
- Improved visual editor with expandable entity sections
  - Click on entity to expand configuration options
  - Configure display name and profile names directly in UI
  - Available profiles are automatically detected from entity attributes
- Pre-release support in release workflow
  - Supports alpha, beta, and release candidate tags (e.g., `1.0.0-beta.1`)
  - Pre-releases are automatically marked in GitHub

### Technical

- Added `EntityConfig` interface with `entity`, `name`, and `profile_names` properties
- Added `EntityConfigOrString` type for flexible entity configuration (string or object)
- Added `_getEntityId()`, `_getEntityDisplayName()`, and `_getProfileDisplayName()` helper methods
- Refactored visual editor with expandable accordion-style entity sections
- Editor preserves entity customizations when entities are reordered or removed/re-added

### Changed

- Updated dependencies:
  - `lit` 3.0.0 → 3.3.2
  - `tslib` 2.6.0 → 2.8.1
  - `typescript` 5.3.3 → 5.9.3
  - `eslint` 9.39.1 → 9.39.2
  - `typescript-eslint` 8.48.0 → 8.54.0
  - `prettier` 3.1.0 → 3.8.1
  - `rollup` 4.53.3 → 4.57.1
  - `husky` 9.0.0 → 9.1.7
  - `ts-jest` 29.1.1 → 29.4.6

## [0.6.0] - 2026-01-30

### Added

- Automatic reload of device configuration after schedule changes
  - Supports BidCos-RF, BidCos-Wired, and VirtualDevices interfaces
  - Calls `reload_device_config` service 5 seconds after save (CONFIG_PENDING doesn't work reliably)
  - Extracts `device_address` from entity `address` attribute

### Fixed

- Current time indicator (red line) now correctly aligns with the time axis
  - Previously the indicator was offset by the header height
  - Restructured schedule grid to separate headers from content area

### Technical

- Added `interface_id` and `address` to `ScheduleEntityAttributes` type
- Added `_needsManualReload()` helper method to detect devices requiring manual reload
- Added `_scheduleReloadDeviceConfig()` method to trigger delayed reload
- Restructured schedule grid HTML/CSS: headers in row 1, content wrapper with indicator in row 2

## [0.5.0] - 2026-01-18

- Skipped

## [0.4.3] - 2025-12-21

### Added

- Visual configuration editor using Home Assistant's `ha-form` component
  - Configure card directly in the UI without YAML
  - Entity picker with climate domain filter
  - All card options configurable via form
  - Consistent UI with standard Home Assistant cards
- `getConfigElement()` and `getStubConfig()` static methods for editor support

### Removed

- `time_step_minutes` configuration option (browser time input step support is unreliable)

### Changed

- Schedule data is now read from `schedule_data` attribute instead of `simple_schedule_data`
- Aligns with HomematicIP Local integration v2.0.0+ data model
- Removed `simple_schedule_data` attribute from type definitions
- Simplified codebase by removing dual-format handling (simple vs legacy)
- Export now always uses version "2.0" format
- Editor dialog now shows weekday selector tabs instead of graphical week overview
- Weekday tabs allow quick switching between days while editing
- Updated temperature color scheme to align with Home Assistant 2025.12.x climate state colors
  - Cold temperatures use HA Cool Blue (#2b9af9)
  - Warm temperatures use HA Heat Orange (#ff8100)
  - Improved gradient from blue → cyan → green → orange for better visual distinction
- Fixed base temperature block detection in editor (compare only time boundaries, not temperature)
- Increased time input field width in editor to prevent minutes being cut off (min-width: 100px)

### Removed

- Drag and drop functionality for adjusting time blocks and temperatures
- Pending changes banner and batch save mode
- Drag handles and temperature drag areas from schedule view
- Compact view mode and view toggle button
- Compact view CSS styles and translations

### Fixed

- Current time indicator (red bar) is now hidden when the edit dialog is open

### Technical

- Removed `_simpleScheduleData` property from card component
- `_scheduleData` now uses `SimpleProfileData` type directly
- Legacy format import still supported for backward compatibility with old export files
- Removed drag-related state properties (`_isDragging`, `_isDragDropMode`, `_pendingChanges`, `_dragState`)
- Removed drag-related methods (`_startDrag`, `_onDragMove`, `_endDrag`, `_savePendingChanges`, `_discardPendingChanges`)
- Added `_switchToWeekday()` method for weekday tab navigation
- Simplified time block rendering without drag handles
- Removed `_isCompactView` state property and `_toggleViewMode()` method
- Removed compact view related translations (`toggleCompactView`, `toggleFullView`, `enableDragDrop`, `disableDragDrop`)

## [0.4.2] - 2025-11-18

### Changed

- Overview now always displays all seven weekdays in the schedule grid
- Days without schedule slots now show a full-day block (00:00-24:00) with the base temperature
- Added `_getBaseTemperature()` method to extract base temperature from simple schedule data

### Fixed

- Fixed issue where days with no schedule slots were not displayed in the overview
- Ensures consistent visual layout with all weekdays always visible

## [0.4.1] - 2025-11-18

### Fixed

- Completed renaming of card references across all documentation files
- Updated package.json metadata to reflect correct card name
- Fixed remaining references to old card name in CONTRIBUTING.md, QUICKSTART.md, and info.md

## [0.4.0] - 2025-11-18

### Breaking Changes

- Card renamed from `homematicip-local-climate-scheduler-card` to `homematicip-local-climate-schedule-card` (removed 'r' from scheduler)
- Card now uses `simple_schedule_data` attribute instead of `schedule_data` (backward compatible - falls back to `schedule_data` if `simple_schedule_data` is not available)
- Service call changed from `set_schedule_profile_weekday` to `set_schedule_simple_weekday`
- New data model uses base temperature + time periods instead of 13-slot format

### Added

- Base temperature UI in editor for setting temperature of unscheduled periods
- Base temperature input field with visual temperature indicator (color-coded)
- Support for new `simple_schedule_data` data model from HomematicIP Local integration
- `SimpleSchedulePeriod`, `SimpleWeekdayData`, and `SimpleProfileData` type definitions
- Utility functions for parsing and converting simple schedule format:
  - `parseSimpleWeekdaySchedule()` - converts simple schedule to TimeBlocks
  - `timeBlocksToSimpleWeekdayData()` - converts TimeBlocks to simple schedule
  - `calculateBaseTemperature()` - intelligently determines base temperature from blocks
  - `validateSimpleWeekdayData()` - validates simple schedule data
  - `validateSimpleProfileData()` - validates complete simple profile
- Dual-format import/export support:
  - Auto-detects format when importing (simple vs legacy)
  - Exports in format matching current schedule data
  - Export files include format metadata (version 2.0 for simple, 1.0 for legacy)
- "Temperature Periods" label in editor to distinguish periods from base temperature

### Changed

- Card custom element name changed from `custom:homematicip-local-climate-scheduler-card` to `custom:homematicip-local-climate-schedule-card`
- Card file renamed from `homematicip-local-climate-scheduler-card.js` to `homematicip-local-climate-schedule-card.js`
- Card display name changed from "Homematic(IP) Local Climate Scheduler Card" to "Homematic(IP) Local Climate Schedule Card"
- Card reads `simple_schedule_data` attribute with automatic fallback to `schedule_data` for backward compatibility
- Service calls use `set_schedule_simple_weekday` with simple weekday data tuple `[base_temperature, periods[]]`
- Copy/paste operations now include base temperature
- Export format updated to version 2.0 for simple schedules, includes format field
- Editor layout reorganized with base temperature section at top, periods list below

### Technical

- Simple schedule format uses base temperature plus list of time periods (STARTTIME, ENDTIME, TEMPERATURE)
- More efficient than 13-slot format - only stores explicit temperature deviations
- Base temperature automatically calculated from most common temperature in schedule
- All existing tests (88 tests) still pass
- Maintained full backward compatibility with legacy `schedule_data` format

## [0.3.2] - 2025-11-16

### Changed

- Card file renamed from `homematic-schedule-card.ts` to `homematicip-local-climate-scheduler-card.ts`
- Frontend no longer fills weekday schedule slots to 13; backend is responsible for missing slots
- Validation accepts fewer than 13 slots and ensures the last slot (if any) ends at `24:00`
- Parsing of weekday data is resilient to null/undefined or malformed slot entries
- Conversion to backend format includes only existing numeric keys (no fill-up)
- Card parses schedules directly without any frontend normalization

### Fixed

- Card correctly handles backend responses with incomplete schedule data (no frontend fill-up)

## [0.3.1] - 2025-11-14

### Fixed

- Time input step attribute browser compatibility: `step` attribute is now properly set but may not be enforced by all browsers due to limited HTML5 time input support across different browsers (Chrome/Edge partially support it, Firefox/Safari ignore it)
- Card automatically follows the Home Assistant UI language whenever no explicit `language` option is set

### Note

- The `time_step_minutes` configuration works correctly for drag & drop operations (15-minute snapping) and internal validation, but native browser time pickers may still allow minute-precise input due to browser limitations

## [0.3.0] - 2025-11-14

### Added

- Dynamic temperature range support using `min_temp` and `max_temp` values from backend entity attributes
- Temperature validation now uses device-specific limits instead of hardcoded 5-30.5°C range
- Fallback to default range (5-30.5°C) when backend doesn't provide temperature limits
- Input field constraints dynamically adjusted based on backend temperature range
- Drag & drop temperature adjustment respects device-specific min/max values
- 6 new tests for custom temperature range validation covering boundaries and edge cases
- Dynamic temperature step support using `target_temp_step` value from backend entity attributes
- Temperature step used for input field increment/decrement and drag & drop snapping
- Fallback to default step (0.5°C) when backend doesn't provide temperature step
- Configurable time step for time selection in detail editor via `time_step_minutes` configuration option
- Time input field now uses step attribute to control minute increments (default: 15 minutes)
- Support for custom time step values (e.g., 1, 5, 10, 15, 30 minutes) in editor time picker
- Multiple entity support with a header drop-down to switch the currently edited schedule inline
- Localized weekday labels now provide both short (Mo, Di, …) and long (Montag, Dienstag, …) forms for each language

### Changed

- `validateTimeBlocks()` function now accepts optional `minTemp` and `maxTemp` parameters (defaults to 5 and 30.5)
- Temperature validation error messages now display actual min/max range (e.g., "10-28°C" instead of always "5-30.5°C")
- `ScheduleEntityAttributes` interface extended with optional `min_temp`, `max_temp`, and `target_temp_step` fields
- Editor input fields now use dynamic `min`, `max`, and `step` attributes from state instead of hardcoded values
- Drag & drop temperature snapping now uses dynamic step size from backend instead of hardcoded 0.5°C increments
- `HomematicScheduleCardConfig` interface extended with optional `time_step_minutes` field for configurable time picker step
- Time input in editor now enforces configured step size instead of allowing minute-precise inputs
- Schedule overview continues to show short weekday headers, while the detail editor now always displays the long, fully translated weekday name
- Validation warnings and error details shown in the editor/import flow now use localized translations instead of fixed English strings
- Validation logic now returns structured message keys with parameters, ensuring any new locales automatically inherit consistent error formatting
- Rollup build now runs in production mode without sourcemaps, tree-shakes side effects, and applies more aggressive terser compression to shrink the shipped bundle
- Entity and profile dropdowns are now consistently sorted alphabetically for easier selection

## [0.2.1] - 2025-11-13

### Changed

- Disabled mouse hover effects (weekday column lift animation and time block tooltips) when drag & drop mode is active to prevent visual interference with drag operations
- Removed unnecessary validation warnings from the editor: "Last block must end at 24:00" and "Gap detected between block X and Y" (backend automatically corrects these issues)

### Performance

- Optimized rendering performance with static TIME_LABELS constant
- Added CSS `will-change` properties for animated elements (current-time-indicator, weekday-column.editable, copy-btn.active, time-block.active)
- Improved browser rendering pipeline for frequently animated components

## [0.2.0] - 2025-11-13

### Added

- Loading indicator overlay with spinner during backend interactions
- 10-second timeout for loading indicator when saving or pasting schedules
- Visual feedback when data is being sent to backend via `set_schedule_profile_weekday`
- Current time indicator line displayed horizontally across all weekdays
- Real-time update of current time indicator (updates every minute)
- Red dashed line with circular marker showing the current time of day
- Active temperature block highlighting with pulsing glow effect
- Visual feedback showing which temperature block is currently active based on current time and weekday
- Automatic detection of current weekday and time to highlight the active schedule block
- Undo/redo functionality for editing actions before saving
- History stack maintaining up to 50 previous states of schedule edits
- Undo and redo buttons in the editor interface with visual feedback for enabled/disabled states
- Keyboard shortcuts: Ctrl+Z (or Cmd+Z on Mac) for undo, Ctrl+Y (or Cmd+Y/Ctrl+Shift+Z on Mac) for redo
- Automatic state saving before add, remove, and update operations on time blocks
- Comprehensive testing documentation (TESTING.md) describing feature validation procedures
- Manual test cases for undo/redo, loading state, time tracking, and active block detection
- Testing strategy documentation explaining automated and manual testing approaches
- Internationalization (i18n) support with English and German translations
- Automatic language detection from Home Assistant settings
- `language` configuration option to manually set card language (en/de)
- Translation system for all UI text: buttons, labels, error messages, and tooltips
- Localized weekday labels for different languages
- Dynamic language switching when Home Assistant language changes
- View mode toggle button to switch between full view and compact view
- Compact view mode with smaller day columns for better space utilization on smaller screens
- Reduced gaps, font sizes, and hidden copy/paste actions in compact mode
- Icon-based toggle button (⬜ for full view, ▭ for compact view) with localized tooltips
- Temperature gradient visualization option with `show_gradient` configuration setting
- Smooth gradient colors on temperature blocks based on temperature transitions between adjacent blocks
- `getTemperatureGradient()` utility function to generate CSS linear-gradient strings
- Conditional rendering: gradient mode creates smooth color transitions, solid mode keeps discrete colors
- Real-time validation warnings in the schedule editor
- Visual warning panel displaying issues with time blocks (gaps, backwards time, temperature out of range, etc.)
- `validateTimeBlocks()` utility function for real-time validation of editing state
- Automatic validation updates after any editing action (add, remove, update, undo, redo)
- Localized warning messages in English and German
- Warning panel with orange-tinted background and warning icon for visibility
- Comprehensive tests for validation function covering all warning scenarios (37 total tests)
- Mobile optimization with responsive layout and touch-friendly interface
- Responsive CSS media queries for tablets (768px), phones (480px), and landscape orientation
- Touch-optimized button sizes with 44px minimum touch targets following accessibility guidelines
- Mobile-specific layout adjustments: stacked header controls, full-width editor buttons, responsive grid spacing
- Touch event handling with `:active` states instead of `:hover` for better mobile feedback
- Optimized font sizes and spacing for smaller screens (reduced padding, adjusted font sizes)
- Landscape orientation support with adjusted heights for better space utilization
- Touch-specific pointer detection using `@media (hover: none) and (pointer: coarse)` for native touch devices
- Responsive time-block-editor grid that adapts column widths for mobile screens
- Mobile-friendly tooltips that appear on tap/active state instead of hover
- Export/Import functionality for schedule backup and sharing
- Export button to download current schedule as JSON file with metadata (profile name, export date)
- Import button to load schedule from JSON file with comprehensive validation
- `validateProfileData()` utility function to validate imported schedule structure
- Automatic validation of imported data: checks for all weekdays, valid time slots, and correct data format
- Support for importing files with or without metadata wrapper
- Visual feedback with success/error messages during export/import operations
- Loading indicator during import process with 10-second timeout
- Localized UI labels and error messages for export/import in English and German
- Export file naming includes profile name and date (e.g., `schedule-P1-2025-11-13.json`)
- Comprehensive tests for import validation (42 total tests including 5 new validateProfileData tests)
- Drag-and-drop functionality for time block boundaries with visual adjustment of start/end times
- Automatic snapping to 15-minute intervals (0, 15, 30, 45) during drag operations
- Visual drag handles on time block boundaries with hover effects
- Batch save mode: changes are not sent to backend immediately during drag operations
- Pending changes banner displayed when unsaved changes exist
- "Save all" button to commit all pending changes to backend in a single batch operation
- "Discard" button to revert all pending changes without saving
- Visual indication of blocks with pending changes (dashed outline)
- Touch support for drag-and-drop on mobile devices
- Localized UI labels for pending changes banner in English and German
- Vertical drag-and-drop on time block centers to adjust temperature values
- Drag up to decrease temperature, drag down to increase temperature
- Automatic snapping to 0.5°C increments during temperature drag operations
- Temperature constraints (5°C - 30.5°C) enforced during drag
- Visual cursor feedback (ns-resize) when hovering over temperature drag areas
- Hover effect on temperature drag areas for better discoverability
- Temperature drag integrates with batch save mode (pending changes system)
- Touch support for temperature adjustment on mobile devices
- 50 pixels of vertical movement equals 1°C temperature change
- Drag & drop mode toggle button to enable/disable drag-and-drop functionality
- Drag handles and temperature drag areas only visible when drag & drop mode is enabled
- Detail editor (click on day) is disabled when in drag & drop mode
- Confirmation dialog when exiting drag & drop mode with unsaved changes
- Users can choose to save or discard pending changes before exiting mode
- Icon-based toggle button (✋ for disabled, 🔒 for enabled) with localized tooltips
- Localized UI labels for drag & drop mode toggle in English and German
- Time axis on the left side showing hours (00:00 - 24:00)
- Enhanced tooltips on hover showing start time, end time, and temperature
- Automatic sorting of time slots by end time in ascending order
- Automatic renumbering of slot numbers after sorting (1, 2, 3, ...)
- Validation of schedule data before saving to backend
- UI constraints (min/max) for time input fields to prevent invalid entries
- Backend format conversion with integer keys for aiohomematic compatibility
- Tests for time block ordering and slot renumbering
- Tests for backend format with sequential slot numbers

### Performance

- Optimized rendering performance with schedule block caching
- Reduced redundant computations with memoized weekday label lookups
- Implemented `shouldUpdate` lifecycle optimization to prevent unnecessary re-renders
- Added parsed schedule cache with automatic invalidation on data changes
- Cached weekday label map to avoid repeated object creation
- Cached static time labels array to eliminate recreation on every render
- Added CSS `will-change` properties for animated elements (current-time-indicator, hover transforms, pulse animations)
- Optimized browser rendering pipeline for frequently animated components

### Fixed

- View now updates automatically after saving or pasting schedules
- Added explicit `_updateFromEntity()` and `requestUpdate()` calls after successful backend operations
- Ensures UI reflects latest data immediately without waiting for backend events
- Editor dialog now displays translated and properly formatted weekday names instead of raw constants (e.g., "Mi bearbeiten" instead of "WEDNESDAY bearbeiten")

### Changed

- Upgraded ESLint from 8.x to 9.x with flat config format (eslint.config.mjs)
- Updated TypeScript-ESLint packages to v8.16.0 for ESLint 9 compatibility
- Last time block is automatically corrected to end at 24:00
- Release workflow now uses tags without 'v' prefix (e.g., 0.2.0 instead of v0.2.0)
- Release workflow permissions added for GITHUB_TOKEN
- Replaced deprecated create-release action with action-gh-release@v2

### Fixed

- Time slots are now guaranteed to be in ascending chronological order
- Slot numbers are always sequential (1-13) regardless of input order
- Fixed deprecation warnings for `glob@7.2.3` and `inflight@1.0.6` by upgrading to `test-exclude@7.0.1`
- Fixed release workflow permission errors
- Schedule data now validated before transmission to prevent backend errors

### Technical

- Added `convertToBackendFormat()` function for integer key conversion
- Added `validateWeekdayData()` call before saving schedules
- Enhanced `timeBlocksToWeekdayData()` to sort and renumber slots
- Time input fields now have dynamic min/max constraints based on adjacent blocks
- Added override for `test-exclude` to use v7.0.1 (fixes deprecated dependencies)

## [0.1.0] - 2025-11-13

### Added

- Initial release
- Visual week schedule display with color-coded temperature blocks
- Interactive schedule editor with time and temperature controls
- Profile switching support
- Temperature visualization with color coding
- Responsive design for desktop and mobile
- Unit tests with Jest
- CI/CD pipeline with GitHub Actions
- HACS support
- Comprehensive documentation

### Features

- Display weekly schedule for Homematic thermostats
- Edit schedule by clicking on any day
- Add/remove time blocks
- Adjust temperatures and time ranges
- Switch between different schedule profiles
- Color-coded temperature visualization
- Integration with HomematicIP Local

### Technical

- Built with Lit web components
- TypeScript for type safety
- Rollup for bundling
- ESLint for code quality
- Jest for testing
- GitHub Actions for CI/CD

[Unreleased]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.10.0...HEAD
[0.10.0]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.9.0...0.10.0
[0.9.0]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.8.0...0.9.0
[0.8.0]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.7.0...0.8.0
[0.7.0]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.6.0...0.7.0
[0.6.0]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.5.0...0.6.0
[0.5.0]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.4.3...0.5.0
[0.4.3]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.4.2...0.4.3
[0.4.2]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.4.1...0.4.2
[0.4.1]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.4.0...0.4.1
[0.4.0]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.3.2...0.4.0
[0.3.2]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.3.1...0.3.2
[0.3.1]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.3.0...0.3.1
[0.3.0]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.2.1...0.3.0
[0.2.1]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.2.0...0.2.1
[0.2.0]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/compare/0.1.0...0.2.0
[0.1.0]: https://github.com/SukramJ/homematicip_local_climate_schedule_card/releases/tag/0.1.0
