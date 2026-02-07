# Home Assistant API V2

This document describes the V2 service calls that the HomematicIP Local Climate Schedule Card makes against Home Assistant.

Source file: `src/homematicip-local-climate-schedule-card.ts`

## API Version Detection

The API version is determined by the `schedule_api_version` attribute on the climate entity:

| Attribute `schedule_api_version` | API Version |
| -------------------------------- | ----------- |
| Not present                      | V1          |
| `"v2.0"`                         | V2          |

## Changes from V1

1. **Service names**: The `_simple` suffix is removed (e.g. `set_schedule_simple_weekday` becomes `set_schedule_weekday`), and `set_schedule_active_profile` is renamed to `set_current_schedule_profile`
2. **Device-based services**: All services switch from `entity_id` to device identification via `device_id` or `device_address` (exactly one must be provided)
3. **Data format**: Remains unchanged
4. **Entity attributes**: `active_profile` is replaced by `current_schedule_profile`, and a new `device_active_profile_index` attribute (1-based integer) replaces `preset_mode` parsing for profile detection

## Device Identification

All device-based V2 services accept **either** `device_id` or `device_address` (exactly one must be provided):

| Parameter        | Type     | Description                                          |
| ---------------- | -------- | ---------------------------------------------------- |
| `device_id`      | `string` | Home Assistant device ID (UUID from device registry) |
| `device_address` | `string` | Homematic device address (e.g. `"000C9709AEF157"`)   |

The card uses `device_address`, extracted from the entity's `address` attribute (channel address format `"device_address:channel_no"`).

---

## 1. `homematicip_local.set_schedule_weekday`

Saves the schedule for a single weekday.

Replaces V1 service `set_schedule_simple_weekday`.

### Parameters

| Parameter             | Type                                       | Description                                                 |
| --------------------- | ------------------------------------------ | ----------------------------------------------------------- |
| `device_id`           | `string`                                   | HA device ID (alternative to `device_address`)              |
| `device_address`      | `string`                                   | Homematic device address (alternative to `device_id`)       |
| `profile`             | `string`                                   | Profile name (e.g. `"P1"`)                                  |
| `weekday`             | `string`                                   | Weekday (e.g. `"MONDAY"`)                                   |
| `base_temperature`    | `number`                                   | Base temperature in °C (4.5–30.5)                           |
| `simple_weekday_list` | `Array<{starttime, endtime, temperature}>` | List of time periods that deviate from the base temperature |

### Example

```yaml
service: homematicip_local.set_schedule_weekday
data:
  device_address: "000C9709AEF157"
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

## 2. `homematicip_local.set_current_schedule_profile`

Loads the schedule data for a profile. This call does **not** activate the profile on the device — it only provides the schedule data for display purposes.

Replaces V1 service `set_schedule_active_profile`.

### Parameters

| Parameter        | Type     | Description                                           |
| ---------------- | -------- | ----------------------------------------------------- |
| `device_id`      | `string` | HA device ID (alternative to `device_address`)        |
| `device_address` | `string` | Homematic device address (alternative to `device_id`) |
| `profile`        | `string` | Profile name (e.g. `"P1"`)                            |

### Example

```yaml
service: homematicip_local.set_current_schedule_profile
data:
  device_address: "000C9709AEF157"
  profile: "P2"
```

---

## 3. `homematicip_local.reload_device_config`

Forces a reload of the device configuration. Used exclusively for BidCos-RF devices, which require an explicit reload after saving a new schedule. The call is executed with a 5-second delay after saving.

Service name and parameters are unchanged from V1. Already accepted `device_id` or `device_address` in V1.

### Parameters

| Parameter        | Type     | Description                                           |
| ---------------- | -------- | ----------------------------------------------------- |
| `device_id`      | `string` | HA device ID (alternative to `device_address`)        |
| `device_address` | `string` | Homematic device address (alternative to `device_id`) |

### Example

```yaml
service: homematicip_local.reload_device_config
data:
  device_address: "000C9709AEF157"
```

---

## V1 to V2 Migration Summary

| V1 Service                    | V2 Service                     | Parameter Change                              |
| ----------------------------- | ------------------------------ | --------------------------------------------- |
| `set_schedule_simple_weekday` | `set_schedule_weekday`         | `entity_id` → `device_id` or `device_address` |
| `set_schedule_active_profile` | `set_current_schedule_profile` | `entity_id` → `device_id` or `device_address` |
| `reload_device_config`        | `reload_device_config`         | No change (already device-based)              |

### Entity Attribute Changes

| V1 Attribute         | V2 Attribute                  | Description                                         |
| -------------------- | ----------------------------- | --------------------------------------------------- |
| `active_profile`     | `current_schedule_profile`    | Currently loaded profile name (e.g. `"P1"`)         |
| `preset_mode`        | `device_active_profile_index` | 1-based integer index (e.g. `1` for P1, `2` for P2) |
| `available_profiles` | `available_profiles`          | Unchanged                                           |

## Additional V2 Services (not yet used by the card)

The integration provides additional device-based services that the card could leverage in future versions:

| Service                 | Description                                |
| ----------------------- | ------------------------------------------ |
| `get_schedule`          | Get full schedule for a device             |
| `set_schedule`          | Set full schedule for a device             |
| `get_schedule_profile`  | Get schedule data for a specific profile   |
| `get_schedule_weekday`  | Get schedule data for a specific weekday   |
| `set_schedule_profile`  | Set schedule for an entire profile at once |
| `copy_schedule`         | Copy schedule from one device to another   |
| `copy_schedule_profile` | Copy a profile within or across devices    |
