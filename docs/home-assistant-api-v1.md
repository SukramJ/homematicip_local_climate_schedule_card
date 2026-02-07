# Home Assistant API V1

This document describes all service calls that the HomematicIP Local Climate Schedule Card makes against Home Assistant.

Source file: `src/homematicip-local-climate-schedule-card.ts`

---

## 1. `homematicip_local.set_schedule_simple_weekday`

Saves the schedule for a single weekday using the simple format (integration v2.0.0+).

### Parameters

| Parameter             | Type                                       | Description                                                 |
| --------------------- | ------------------------------------------ | ----------------------------------------------------------- |
| `entity_id`           | `string`                                   | Climate entity ID (e.g. `climate.living_room`)              |
| `profile`             | `string`                                   | Profile name (e.g. `"P1"`)                                  |
| `weekday`             | `string`                                   | Weekday (e.g. `"MONDAY"`)                                   |
| `base_temperature`    | `number`                                   | Base temperature in °C                                      |
| `simple_weekday_list` | `Array<{starttime, endtime, temperature}>` | List of time periods that deviate from the base temperature |

### Usage in Code

| Line | Method            | Context                                   |
| ---- | ----------------- | ----------------------------------------- |
| 730  | `_saveSchedule`   | Saving after editing a single day         |
| 836  | `_applyToAllDays` | Applying a day's schedule to all weekdays |
| 1011 | `_importSchedule` | Importing a schedule in simple format     |

### Example

```yaml
service: homematicip_local.set_schedule_simple_weekday
data:
  entity_id: climate.living_room
  profile: "P1"
  weekday: "MONDAY"
  base_temperature: 18.0
  simple_weekday_list:
    - starttime: "06:00"
      endtime: "08:00"
      temperature: 21.0
    - starttime: "17:00"
      endtime: "22:00"
      temperature: 21.0
```

---

## 2. `homematicip_local.set_schedule_active_profile`

Loads the schedule data for a profile. This call does **not** activate the profile on the device — it only provides the schedule data for display purposes.

### Parameters

| Parameter   | Type     | Description                                    |
| ----------- | -------- | ---------------------------------------------- |
| `entity_id` | `string` | Climate entity ID (e.g. `climate.living_room`) |
| `profile`   | `string` | Profile name (e.g. `"P1"`)                     |

### Usage in Code

| Line | Method                 | Context                                                |
| ---- | ---------------------- | ------------------------------------------------------ |
| 603  | `_reloadScheduleData`  | Reloading data on external profile change              |
| 624  | `_handleProfileChange` | User-initiated profile switch via the profile dropdown |

### Example

```yaml
service: homematicip_local.set_schedule_active_profile
data:
  entity_id: climate.living_room
  profile: "P2"
```

---

## 3. `homematicip_local.reload_device_config`

Forces a reload of the device configuration. Used exclusively for BidCos-RF devices, which require an explicit reload after saving a new schedule. The call is executed with a 5-second delay after saving.

### Parameters

| Parameter        | Type     | Description                            |
| ---------------- | -------- | -------------------------------------- |
| `device_address` | `string` | Device address of the BidCos-RF device |

### Usage in Code

| Line | Method                | Context                                        |
| ---- | --------------------- | ---------------------------------------------- |
| 326  | `_reloadBidcosDevice` | Called after a successful save (with 5s delay) |

### Example

```yaml
service: homematicip_local.reload_device_config
data:
  device_address: "001A2B3C4D"
```
