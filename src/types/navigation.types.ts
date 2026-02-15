/**
 * Navigation types — Route names and parameter types
 */

/** Route name constants for type-safe navigation */
export const Routes = {
  // Chat group
  CHAT: '/(chat)',
  CHAT_INDEX: '/(chat)/',
  SELECT_TEXT: '/(chat)/select-text',

  // Auth group
  AUTH: '/(auth)',
  WELCOME: '/(auth)/welcome',
  LOGIN: '/(auth)/login',
  LOADING: '/(auth)/loading',

  // Settings group
  SETTINGS: '/(settings)',
  SETTINGS_INDEX: '/(settings)/',
  SETTINGS_ABOUT: '/(settings)/about',
  SETTINGS_LICENSES: '/(settings)/licenses',
  SETTINGS_GENERAL: '/(settings)/general',
  SETTINGS_NOTIFICATIONS: '/(settings)/notifications',
  SETTINGS_NOTIFICATIONS_DETAIL: '/(settings)/notifications-detail',
  SETTINGS_SPEECH: '/(settings)/speech',
  SETTINGS_DATA_CONTROLS: '/(settings)/data-controls',
  SETTINGS_SECURITY: '/(settings)/security',
  SETTINGS_SECURITY_PASSKEYS: '/(settings)/security-passkeys',
  SETTINGS_SECURITY_MFA: '/(settings)/security-mfa',
} as const;

/** Type for all route paths */
export type RoutePath = (typeof Routes)[keyof typeof Routes];

/** Parameters for notification detail screen */
export interface NotificationsDetailParams {
  /** Notification category ID */
  categoryId: string;
  /** Category display name */
  categoryName: string;
}

/** Parameters for select text screen */
export interface SelectTextParams {
  /** Message text to display */
  text: string;
}
