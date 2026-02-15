/**
 * Settings types — Rows, sections, modals, toggles
 */

/** Right-side element type for settings rows */
export type SettingsRightElement =
  | 'toggle'
  | 'chevron-down'
  | 'chevron-right'
  | 'status'
  | 'none';

/** Settings row data */
export interface SettingsRowData {
  /** Unique row identifier */
  id: string;
  /** Lucide icon name (optional) */
  icon?: string;
  /** Icon color (default white, red for destructive) */
  iconColor?: string;
  /** Row title */
  title: string;
  /** Title color override (default white) */
  titleColor?: string;
  /** Optional subtitle below title */
  subtitle?: string;
  /** Right-side element type */
  rightElement: SettingsRightElement;
  /** Toggle value (when rightElement is 'toggle') */
  toggleValue?: boolean;
  /** Status text (when rightElement is 'status') */
  statusText?: string;
  /** Store key this row controls */
  storeKey?: string;
}

/** Settings section grouping rows */
export interface SettingsSection {
  /** Section key identifier */
  key: string;
  /** Section header label */
  label: string;
  /** Rows in this section */
  rows: SettingsRowData[];
}

/** Accent color option */
export interface AccentColor {
  /** Color identifier */
  id: string;
  /** Display label */
  label: string;
  /** Hex color value */
  color: string;
}

/** Appearance option */
export interface AppearanceOption {
  /** Option identifier */
  id: string;
  /** Display label */
  label: string;
  /** Appearance value */
  value: 'system' | 'light' | 'dark';
}

/** Language option */
export interface Language {
  /** Language code (e.g., 'en', 'es') */
  code: string;
  /** Display name */
  name: string;
  /** Native name */
  nativeName: string;
}

/** License data for open source libraries */
export interface LicenseData {
  /** Library name */
  libraryName: string;
  /** Library version */
  version: string;
  /** Author name */
  author: string;
  /** License type */
  licenseType: string;
}

/** Notification category */
export interface NotificationCategory {
  /** Category identifier */
  id: string;
  /** Category display name */
  name: string;
  /** Current status text */
  status: string;
  /** Push notification enabled */
  pushEnabled: boolean;
  /** Email notification enabled */
  emailEnabled: boolean;
}

/** Individual notification setting */
export interface NotificationSetting {
  /** Push notification enabled */
  push: boolean;
  /** Email notification enabled */
  email: boolean;
}

/** Security row data */
export interface SecurityRow {
  /** Row identifier */
  id: string;
  /** Row title */
  title: string;
  /** Row subtitle */
  subtitle?: string;
  /** Right element type */
  rightElement: SettingsRightElement;
  /** Status text */
  statusText?: string;
  /** Navigation target */
  navigateTo?: string;
}

/** Data control section */
export interface DataControlSection {
  /** Section label */
  label: string;
  /** Rows in this section */
  rows: SettingsRowData[];
  /** Description text below section */
  description?: string;
  /** Link text in description */
  descriptionLink?: string;
}

/** Speech setting */
export interface SpeechSetting {
  /** Setting identifier */
  id: string;
  /** Setting title */
  title: string;
  /** Setting subtitle */
  subtitle?: string;
  /** Right element type */
  rightElement: SettingsRightElement;
  /** Toggle value */
  toggleValue?: boolean;
  /** Store key */
  storeKey?: string;
}
