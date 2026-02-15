/**
 * Mock settings data — rows, sections, accent colors, appearance
 */

import type {
  SettingsRowData,
  SettingsSection,
  AccentColor,
  AppearanceOption,
  NotificationCategory,
  SecurityRow,
  DataControlSection,
  SpeechSetting,
} from '@/src/types/settings.types';

/** Settings rows for unauthenticated users */
export const MOCK_SETTINGS_UNAUTH_ROWS: SettingsRowData[] = [
  {
    id: 'data-controls',
    icon: 'Shield',
    title: 'Data controls',
    rightElement: 'chevron-right',
  },
  {
    id: 'language',
    icon: 'Globe',
    title: 'Language',
    subtitle: 'System default',
    rightElement: 'chevron-down',
  },
  {
    id: 'about',
    icon: 'Info',
    title: 'About',
    rightElement: 'chevron-right',
  },
];

/** Settings sections for authenticated users */
export const MOCK_SETTINGS_AUTH_SECTIONS: SettingsSection[] = [
  {
    key: 'my-chatgpt',
    label: 'My ChatGPT',
    rows: [
      { id: 'personalization', icon: 'User', title: 'Personalization', rightElement: 'chevron-right' },
      { id: 'apps', icon: 'LayoutGrid', title: 'Apps', rightElement: 'chevron-right' },
    ],
  },
  {
    key: 'account',
    label: 'Account',
    rows: [
      { id: 'workspace', title: 'Workspace', subtitle: 'Personal', rightElement: 'chevron-right' },
      { id: 'subscription', title: 'Subscription', subtitle: 'Free', rightElement: 'chevron-right' },
      { id: 'parental-controls', title: 'Parental controls', rightElement: 'chevron-right' },
      { id: 'email', title: 'Email', subtitle: 'mateo@example.com', rightElement: 'none' },
      { id: 'phone', title: 'Phone number', statusText: 'Add', rightElement: 'status' },
    ],
  },
  {
    key: 'appearance',
    label: 'Appearance',
    rows: [
      { id: 'appearance', title: 'Appearance', subtitle: 'System', rightElement: 'chevron-down' },
      { id: 'accent-color', title: 'Accent color', rightElement: 'chevron-down' },
    ],
  },
  {
    key: 'app',
    label: 'App',
    rows: [
      { id: 'general', icon: 'Settings', title: 'General', rightElement: 'chevron-right' },
      { id: 'notifications', icon: 'Bell', title: 'Notifications', rightElement: 'chevron-right' },
      { id: 'speech', icon: 'Mic', title: 'Voice', rightElement: 'chevron-right' },
      { id: 'data-controls-auth', icon: 'Shield', title: 'Data controls', rightElement: 'chevron-right' },
      { id: 'security', icon: 'Lock', title: 'Security', rightElement: 'chevron-right' },
      { id: 'about', icon: 'Info', title: 'About', rightElement: 'chevron-right' },
    ],
  },
];

/** Accent color options */
export const MOCK_ACCENT_COLORS: AccentColor[] = [
  { id: 'default', label: 'Default', color: '#9A9A9A' },
  { id: 'blue', label: 'Blue', color: '#3B82F6' },
  { id: 'green', label: 'Green', color: '#22C55E' },
  { id: 'yellow', label: 'Yellow', color: '#EAB308' },
  { id: 'pink', label: 'Pink', color: '#EC4899' },
  { id: 'orange', label: 'Orange', color: '#F97316' },
  { id: 'purple', label: 'Purple', color: '#A855F7' },
];

/** Appearance options */
export const MOCK_APPEARANCE_OPTIONS: AppearanceOption[] = [
  { id: 'system', label: 'System', value: 'system' },
  { id: 'light', label: 'Light', value: 'light' },
  { id: 'dark', label: 'Dark', value: 'dark' },
];

/** Notification categories */
export const MOCK_NOTIFICATION_CATEGORIES: NotificationCategory[] = [
  { id: 'responses', name: 'Responses', status: 'On', pushEnabled: true, emailEnabled: true },
  { id: 'group-chats', name: 'Group chats', status: 'On', pushEnabled: true, emailEnabled: true },
  { id: 'tasks', name: 'Tasks', status: 'On', pushEnabled: true, emailEnabled: true },
  { id: 'projects', name: 'Projects', status: 'On', pushEnabled: true, emailEnabled: true },
  { id: 'recommendations', name: 'Recommendations', status: 'On', pushEnabled: true, emailEnabled: true },
  { id: 'usage', name: 'Usage', status: 'On', pushEnabled: true, emailEnabled: true },
];

/** Security settings rows */
export const MOCK_SECURITY_ROWS: SecurityRow[] = [
  { id: 'passkeys', title: 'Passkeys', rightElement: 'chevron-right', navigateTo: 'security-passkeys' },
  { id: 'mfa', title: 'Multi-factor authentication', rightElement: 'chevron-right', navigateTo: 'security-mfa' },
];

/** Data control sections */
export const MOCK_DATA_CONTROLS: DataControlSection[] = [
  {
    label: 'Model training',
    rows: [
      {
        id: 'improve-model',
        title: 'Improve the model for everyone',
        rightElement: 'toggle',
        toggleValue: true,
        storeKey: 'improveModel',
      },
    ],
    description: 'Allow your content to be used to train our models, which makes ChatGPT better for everyone.',
    descriptionLink: 'Learn more',
  },
  {
    label: 'Audio',
    rows: [
      {
        id: 'audio-recordings',
        title: 'Include audio recordings',
        rightElement: 'toggle',
        toggleValue: false,
        storeKey: 'includeAudioRecordings',
      },
      {
        id: 'video-recordings',
        title: 'Include video recordings',
        rightElement: 'toggle',
        toggleValue: false,
        storeKey: 'includeVideoRecordings',
      },
    ],
  },
];

/** Speech settings */
export const MOCK_SPEECH_SETTINGS: SpeechSetting[] = [
  { id: 'input-language', title: 'Input language', subtitle: 'Auto-Detect', rightElement: 'chevron-down' },
  { id: 'voice', title: 'Voice', subtitle: 'Sol', rightElement: 'chevron-right' },
  {
    id: 'separate-mode',
    title: 'Separate mode',
    subtitle: 'Show voice as a separate mode',
    rightElement: 'toggle',
    toggleValue: false,
    storeKey: 'separateMode',
  },
  {
    id: 'background-conversations',
    title: 'Background conversations',
    rightElement: 'toggle',
    toggleValue: true,
    storeKey: 'backgroundConversations',
  },
  {
    id: 'default-assistant',
    title: 'Use as default assistant',
    rightElement: 'toggle',
    toggleValue: false,
    storeKey: 'useAsDefaultAssistant',
  },
];
