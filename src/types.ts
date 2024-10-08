// Cutom card helpers:
import { ActionConfig, LovelaceCardConfig, Themes, HomeAssistant, Theme } from 'custom-card-helpers';
import { HassEntity } from 'home-assistant-js-websocket';

export interface ModeSpecificTheme {
  light: Partial<Theme>;
  dark: Partial<Theme>;
}

export interface ExtendedTheme extends Theme {
  modes?: ModeSpecificTheme;
}

export interface ExtendedThemes extends Themes {
  darkMode: boolean;
  themes: {
    [key: string]: ExtendedTheme;
  };
}

/**
 * HomeAssistantExtended extends the existing HomeAssistant interface with additional properties.
 */

export type HomeAssistantExtended = HomeAssistant & {
  themes: ExtendedThemes;
  formatEntityState: (stateObj: HassEntity) => string;
  formatAttributeName: (entityId: string, attribute: string) => string;
  formatEntityAttributeValue: (entityId: string, attribute: string) => string;
};

/**
 * Configuration interface for the Vehicle Card.
 */

export interface Services {
  auxheat: boolean;
  charge: boolean;
  doorsLock: boolean;
  engine: boolean;
  preheat: boolean;
  sendRoute: boolean;
  sigPos: boolean;
  sunroof: boolean;
  windows: boolean;
}

export interface VehicleImage {
  url: string;
  title: string;
}

export interface VehicleImagesList extends VehicleCardConfig {
  images?: VehicleImage[];
}

export interface ThemesConfig {
  theme: string;
  mode: 'system' | 'dark' | 'light';
}

export interface MapPopupConfig {
  hours_to_show: number;
  default_zoom: number;
  theme_mode?: 'dark' | 'light' | 'auto';
}

export interface VehicleCardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;
  name?: string;
  device_tracker?: string;
  google_api_key?: string;
  selected_language?: string | null;
  model_name: string;
  map_popup_config: MapPopupConfig;
  selected_theme: ThemesConfig;
  services: Services;
  vehicle_card?: LovelaceCardConfig[];
  trip_card?: LovelaceCardConfig[];
  eco_card?: LovelaceCardConfig[];
  tyre_card?: LovelaceCardConfig[];
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

export interface ShowOptions extends VehicleCardConfig {
  show_slides: boolean;
  show_map: boolean;
  show_buttons: boolean;
  show_background: boolean;
  enable_map_popup: boolean;
  enable_services_control: boolean;
  show_error_notify: boolean;
}

export interface VehicleEntities {
  [key: string]: VehicleEntity;
}

export type VehicleEntity = {
  entity_id: string;
  original_name: string;
  device_id?: string;
  unique_id?: string;
  translation_key?: string;
  disabled_by?: string | null;
  hidden_by?: string | null;
};

export type EntityConfig = {
  key: string;
  name?: string;
  icon?: string;
  unit?: string;
  state?: string;
  active?: boolean;
};

export interface EcoData {
  bonusRange: number;
  acceleration: number;
  constant: number;
  freeWheel: number;
}

export interface CardTypeConfig {
  type: string;
  name: string;
  icon: string;
  config: string;
  editor: string;
}

// Default configuration for the Vehicle Card.
export const defaultConfig: Partial<VehicleCardConfig> = {
  type: 'custom:vehicle-info-card',
  name: 'Mercedes Vehicle Card',
  entity: '',
  model_name: '',
  show_slides: false,
  show_map: false,
  show_buttons: true,
  show_background: true,
  enable_map_popup: false,
  enable_services_control: false,
  show_error_notify: false,
  services: {
    auxheat: false,
    charge: false,
    doorsLock: false,
    engine: false,
    preheat: false,
    sendRoute: false,
    sigPos: false,
    sunroof: false,
    windows: false,
  },
};
