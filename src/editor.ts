import { LitElement, html, css, nothing, TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import type {
  HomeAssistant,
  HomematicScheduleCardConfig,
  EntityConfigOrString,
  EntityConfig,
} from "./types";

// Schema type for ha-form
interface HaFormSchema {
  name: string;
  selector: Record<string, unknown>;
  required?: boolean;
  default?: unknown;
}

// Fire event helper
const fireEvent = (node: HTMLElement, type: string, detail?: Record<string, unknown>): void => {
  const event = new CustomEvent(type, {
    bubbles: true,
    composed: true,
    detail,
  });
  node.dispatchEvent(event);
};

export class HomematicScheduleCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: HomematicScheduleCardConfig;
  @state() private _expandedEntity: string | null = null;

  // Schema for entity selection only
  private static readonly ENTITY_SCHEMA: HaFormSchema[] = [
    {
      name: "entities",
      required: true,
      selector: { entity: { domain: "climate", multiple: true } },
    },
  ];

  // Schema for other options
  private static readonly OPTIONS_SCHEMA: HaFormSchema[] = [
    {
      name: "name",
      selector: { text: {} },
    },
    {
      name: "show_profile_selector",
      selector: { boolean: {} },
      default: true,
    },
    {
      name: "editable",
      selector: { boolean: {} },
      default: true,
    },
    {
      name: "show_temperature",
      selector: { boolean: {} },
      default: true,
    },
    {
      name: "show_gradient",
      selector: { boolean: {} },
      default: false,
    },
    {
      name: "hour_format",
      selector: {
        select: {
          options: [
            { value: "24", label: "24h" },
            { value: "12", label: "12h (AM/PM)" },
          ],
        },
      },
      default: "24",
    },
  ];

  public setConfig(config: HomematicScheduleCardConfig): void {
    this._config = config;
  }

  private _getEntityId(entityConfig: EntityConfigOrString): string {
    return typeof entityConfig === "string" ? entityConfig : entityConfig.entity;
  }

  private _getEntityName(entityConfig: EntityConfigOrString): string {
    return typeof entityConfig === "string" ? "" : entityConfig.name || "";
  }

  private _getEntityProfileNames(entityConfig: EntityConfigOrString): Record<string, string> {
    return typeof entityConfig === "string" ? {} : entityConfig.profile_names || {};
  }

  private _getEntityIds(): string[] {
    if (!this._config?.entities) return [];
    return this._config.entities.map((e) => this._getEntityId(e));
  }

  private _getAvailableProfiles(entityId: string): string[] {
    const entity = this.hass?.states?.[entityId];
    if (!entity?.attributes?.available_profiles) return [];
    return [...entity.attributes.available_profiles].sort();
  }

  protected render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    // Prepare data for entity selector (needs string array)
    const entityData = {
      entities: this._getEntityIds(),
    };

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${entityData}
        .schema=${HomematicScheduleCardEditor.ENTITY_SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._entitiesChanged}
      ></ha-form>

      ${this._renderEntityConfig()}

      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${HomematicScheduleCardEditor.OPTIONS_SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._optionsChanged}
      ></ha-form>
    `;
  }

  private _renderEntityConfig(): TemplateResult {
    const entities = this._config?.entities || [];
    if (entities.length === 0) {
      return html``;
    }

    return html`
      <div class="entity-config">
        <div class="section-header">Entity Configuration</div>
        ${entities.map((entityConfig, index) => {
          const entityId = this._getEntityId(entityConfig);
          const customName = this._getEntityName(entityConfig);
          const profileNames = this._getEntityProfileNames(entityConfig);
          const friendlyName = this.hass?.states?.[entityId]?.attributes.friendly_name || entityId;
          const availableProfiles = this._getAvailableProfiles(entityId);
          const isExpanded = this._expandedEntity === entityId;

          return html`
            <div class="entity-section">
              <div class="entity-header" @click=${() => this._toggleEntity(entityId)}>
                <span class="expand-icon">${isExpanded ? "▼" : "▶"}</span>
                <span class="entity-title" title=${entityId}>${friendlyName}</span>
              </div>

              ${isExpanded
                ? html`
                    <div class="entity-details">
                      <div class="config-row">
                        <label>Display Name</label>
                        <input
                          type="text"
                          .value=${customName}
                          placeholder=${friendlyName}
                          @input=${(e: Event) => this._entityNameChanged(index, e)}
                        />
                      </div>

                      ${availableProfiles.length > 0
                        ? html`
                            <div class="profile-names-section">
                              <div class="profile-names-header">Profile Names</div>
                              ${availableProfiles.map(
                                (profile) => html`
                                  <div class="config-row profile-row">
                                    <label>${profile}</label>
                                    <input
                                      type="text"
                                      .value=${profileNames[profile] || ""}
                                      placeholder=${profile}
                                      @input=${(e: Event) =>
                                        this._profileNameChanged(index, profile, e)}
                                    />
                                  </div>
                                `,
                              )}
                            </div>
                          `
                        : html`
                            <div class="no-profiles">No profiles available for this entity</div>
                          `}
                    </div>
                  `
                : ""}
            </div>
          `;
        })}
      </div>
    `;
  }

  private _toggleEntity(entityId: string): void {
    this._expandedEntity = this._expandedEntity === entityId ? null : entityId;
  }

  private _computeLabel = (schema: HaFormSchema): string => {
    const labels: Record<string, string> = {
      entities: "Entities",
      name: "Card Name (optional)",
      show_profile_selector: "Show profile selector",
      editable: "Allow editing",
      show_temperature: "Show temperature values",
      show_gradient: "Show color gradient",
      hour_format: "Time format",
    };
    return labels[schema.name] || schema.name;
  };

  private _entitiesChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    const newEntityIds = (ev.detail.value?.entities || []) as string[];

    // Preserve existing config (name, profile_names) for entities that are still selected
    const newEntities: EntityConfigOrString[] = newEntityIds.map((entityId) => {
      const existingConfig = this._config?.entities?.find((e) => this._getEntityId(e) === entityId);
      if (existingConfig && typeof existingConfig !== "string") {
        // Preserve existing EntityConfig
        const hasCustomizations =
          existingConfig.name || Object.keys(existingConfig.profile_names || {}).length > 0;
        if (hasCustomizations) {
          return { ...existingConfig, entity: entityId };
        }
      }
      return entityId;
    });

    const config = {
      ...this._config,
      entities: newEntities,
    };
    fireEvent(this, "config-changed", { config });
  }

  private _getOrCreateEntityConfig(entities: EntityConfigOrString[], index: number): EntityConfig {
    const current = entities[index];
    if (typeof current === "string") {
      return { entity: current };
    }
    return { ...current };
  }

  private _simplifyEntityConfig(config: EntityConfig): EntityConfigOrString {
    const hasName = !!config.name;
    const hasProfileNames = Object.keys(config.profile_names || {}).length > 0;
    if (!hasName && !hasProfileNames) {
      return config.entity;
    }
    return config;
  }

  private _entityNameChanged(index: number, ev: Event): void {
    const input = ev.target as HTMLInputElement;
    const newName = input.value.trim();
    const entities = [...(this._config?.entities || [])];

    if (index >= entities.length) return;

    const entityConfig = this._getOrCreateEntityConfig(entities, index);
    if (newName) {
      entityConfig.name = newName;
    } else {
      delete entityConfig.name;
    }
    entities[index] = this._simplifyEntityConfig(entityConfig);

    const config = {
      ...this._config,
      entities,
    };
    fireEvent(this, "config-changed", { config });
  }

  private _profileNameChanged(index: number, profile: string, ev: Event): void {
    const input = ev.target as HTMLInputElement;
    const newName = input.value.trim();
    const entities = [...(this._config?.entities || [])];

    if (index >= entities.length) return;

    const entityConfig = this._getOrCreateEntityConfig(entities, index);
    if (!entityConfig.profile_names) {
      entityConfig.profile_names = {};
    }

    if (newName) {
      entityConfig.profile_names[profile] = newName;
    } else {
      delete entityConfig.profile_names[profile];
    }

    // Clean up empty profile_names object
    if (Object.keys(entityConfig.profile_names).length === 0) {
      delete entityConfig.profile_names;
    }

    entities[index] = this._simplifyEntityConfig(entityConfig);

    const config = {
      ...this._config,
      entities,
    };
    fireEvent(this, "config-changed", { config });
  }

  private _optionsChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    const newOptions = ev.detail.value as Partial<HomematicScheduleCardConfig>;

    // Merge options with existing config, preserving entities
    const config = {
      ...this._config,
      ...newOptions,
      entities: this._config.entities, // Keep existing entities
    };
    fireEvent(this, "config-changed", { config });
  }

  static styles = css`
    ha-form {
      display: block;
    }

    .entity-config {
      margin: 16px 0;
      padding: 12px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
    }

    .section-header {
      font-weight: 500;
      margin-bottom: 12px;
      color: var(--primary-text-color);
    }

    .entity-section {
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      margin-bottom: 8px;
      overflow: hidden;
    }

    .entity-section:last-child {
      margin-bottom: 0;
    }

    .entity-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      cursor: pointer;
      background: var(--secondary-background-color, #f5f5f5);
      user-select: none;
    }

    .entity-header:hover {
      background: var(--primary-color-light, #e3f2fd);
    }

    .expand-icon {
      font-size: 10px;
      color: var(--secondary-text-color);
      width: 12px;
    }

    .entity-title {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      color: var(--primary-text-color);
    }

    .entity-details {
      padding: 12px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .config-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .config-row:last-child {
      margin-bottom: 0;
    }

    .config-row label {
      min-width: 100px;
      color: var(--secondary-text-color);
      font-size: 14px;
    }

    .config-row input {
      flex: 1;
      min-width: 0;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      font-size: 14px;
      background: var(--input-fill-color, var(--secondary-background-color));
      color: var(--primary-text-color);
    }

    .config-row input:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .config-row input::placeholder {
      color: var(--secondary-text-color);
      opacity: 0.7;
    }

    .profile-names-section {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .profile-names-header {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
    }

    .profile-row label {
      min-width: 60px;
      font-family: monospace;
    }

    .no-profiles {
      font-size: 13px;
      color: var(--secondary-text-color);
      font-style: italic;
      margin-top: 8px;
    }
  `;
}

// Register custom element
customElements.define(
  "homematicip-local-climate-schedule-card-editor",
  HomematicScheduleCardEditor,
);

declare global {
  interface HTMLElementTagNameMap {
    "homematicip-local-climate-schedule-card-editor": HomematicScheduleCardEditor;
  }
}
