/**
 * Settings store — manages all toggle states, selections, and preferences
 */

import { create } from 'zustand';
import type { NotificationSetting } from '@/src/types/settings.types';

interface SettingsState {
  language: string;
  appearance: 'system' | 'light' | 'dark';
  accentColor: string;
  showLegacyModels: boolean;
  improveModel: boolean;
  includeAudioRecordings: boolean;
  includeVideoRecordings: boolean;
  backgroundConversations: boolean;
  separateMode: boolean;
  speechInputLanguage: string;
  useAsDefaultAssistant: boolean;
  notifications: Record<string, NotificationSetting>;
}

interface SettingsActions {
  setLanguage: (lang: string) => void;
  setAppearance: (appearance: 'system' | 'light' | 'dark') => void;
  setAccentColor: (color: string) => void;
  toggleSetting: (key: keyof SettingsState) => void;
  setNotification: (category: string, type: 'push' | 'email', value: boolean) => void;
  setSpeechInputLanguage: (lang: string) => void;
}

type SettingsStore = SettingsState & SettingsActions;

export const useSettingsStore = create<SettingsStore>()((set) => ({
  // State — sensible defaults
  language: 'system',
  appearance: 'system',
  accentColor: 'default',
  showLegacyModels: false,
  improveModel: true,
  includeAudioRecordings: false,
  includeVideoRecordings: false,
  backgroundConversations: true,
  separateMode: false,
  speechInputLanguage: 'auto',
  useAsDefaultAssistant: false,
  notifications: {
    responses: { push: true, email: true },
    'group-chats': { push: true, email: true },
    tasks: { push: true, email: true },
    projects: { push: true, email: true },
    recommendations: { push: true, email: true },
    usage: { push: true, email: true },
  },

  // Actions
  setLanguage: (lang: string) => set({ language: lang }),

  setAppearance: (appearance) => set({ appearance }),

  setAccentColor: (color: string) => set({ accentColor: color }),

  toggleSetting: (key) =>
    set((state) => {
      const currentValue = state[key];
      if (typeof currentValue === 'boolean') {
        return { [key]: !currentValue } as Partial<SettingsState>;
      }
      return {};
    }),

  setNotification: (category: string, type: 'push' | 'email', value: boolean) =>
    set((state) => ({
      notifications: {
        ...state.notifications,
        [category]: {
          ...state.notifications[category],
          [type]: value,
        },
      },
    })),

  setSpeechInputLanguage: (lang: string) => set({ speechInputLanguage: lang }),
}));
