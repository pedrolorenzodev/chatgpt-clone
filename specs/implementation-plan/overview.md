# Implementation Plan -- Overview

This document defines the architecture, folder structure, navigation, state management, theming, and mock data strategy for the ChatGPT mobile clone project.

---

## Folder Structure (expo-router conventions)

```
chatgpt-clone/
  app/
    _layout.tsx                          # Root layout: DrawerNavigator (sidebar)
    index.tsx                            # Redirect to (chat)
    (chat)/
      _layout.tsx                        # Stack navigator for chat screens
      index.tsx                          # Re-exports ChatScreen
      select-text.tsx                    # Re-exports SelectTextScreen (modal)
    (auth)/
      _layout.tsx                        # Stack navigator for auth flow
      welcome.tsx                        # Re-exports WelcomeScreen
      login.tsx                          # Re-exports LoginScreen
      loading.tsx                        # Re-exports LoadingTransitionScreen
    (settings)/
      _layout.tsx                        # Stack navigator for settings flow
      index.tsx                          # Re-exports SettingsMainScreen
      about.tsx                          # Re-exports AboutScreen
      licenses.tsx                       # Re-exports LicensesScreen
      general.tsx                        # Re-exports GeneralScreen
      notifications.tsx                  # Re-exports NotificationsScreen
      notifications-detail.tsx           # Re-exports NotificationsDetailScreen
      speech.tsx                         # Re-exports SpeechScreen
      data-controls.tsx                  # Re-exports DataControlsScreen
      security.tsx                       # Re-exports SecurityScreen
      security-passkeys.tsx              # Re-exports SecurityPasskeysScreen
      security-mfa.tsx                   # Re-exports SecurityMFAScreen
  src/
    components/
      BackButton/index.tsx
      PrimaryButton/index.tsx
      OutlineButton/index.tsx
      IconButton/index.tsx
      FloatingLabelInput/index.tsx
      CountrySelector/index.tsx
      OrDivider/index.tsx
      InfoCard/index.tsx
      LinkText/index.tsx
      OpenAILogo/index.tsx
      AuthFooterLinks/index.tsx
      FullScreenLoader/index.tsx
      UserAvatar/index.tsx
      ToggleSwitch/index.tsx
      RadioButton/index.tsx
      FeatureChip/index.tsx
      SuggestionButton/index.tsx
      SuggestionTextItem/index.tsx
      Popup/index.tsx
      DescriptionText/index.tsx
      SettingsHeader/index.tsx
      SettingsCardGroup/index.tsx
      SettingsRow/index.tsx
      SettingsSectionHeader/index.tsx
      SettingsModal/index.tsx
      SettingsDropdown/index.tsx
      ConfirmationModal/index.tsx
      ContextualModal/index.tsx
      ReportModal/index.tsx
      SidebarMenuItem/index.tsx
      SidebarChatItem/index.tsx
      SidebarSearchInput/index.tsx
      SidebarUserFooter/index.tsx
      SidebarOverlay/index.tsx
      ChatHeader/index.tsx
      ChatGPTButton/index.tsx
      CombinedPillButton/index.tsx
      ChatInputBar/index.tsx
      UserMessageBubble/index.tsx
      AIResponseView/index.tsx
      AILoadingIndicator/index.tsx
      ActionBar/index.tsx
      StopButton/index.tsx
      TalkButton/index.tsx
      ContextMenu/index.tsx
      AttachmentsBottomSheet/index.tsx
      SourcesBottomSheet/index.tsx
      EditWarningContainer/index.tsx
      SelectTextModal/index.tsx
      ProfileSection/index.tsx
      LicenseItem/index.tsx
      PasskeyEmptyState/index.tsx
      MemberRow/index.tsx
      ManageLinkActionRow/index.tsx
      FeedbackDropdown/index.tsx
      GroupChatHeaderPill/index.tsx
      SubScreenHeader/index.tsx
      RespondDropdown/index.tsx
      GroupChatBottomSheet/index.tsx
      ProfileBottomSheet/index.tsx
      EditProfileBottomSheet/index.tsx
      ModelSelectorModal/index.tsx
    screens/
      auth/
        welcome/index.tsx
        login/index.tsx
        login/components/                # EmailForm, PhoneForm, etc.
        loading/index.tsx
      chat/
        chat-screen/index.tsx
        chat-screen/components/          # ChatContent, EmptyState, MessageList, etc.
        select-text/index.tsx
      sidebar/
        sidebar-panel/index.tsx
        sidebar-panel/components/        # SidebarHeader, SidebarContent, etc.
      settings/
        settings-main/index.tsx
        settings-main/components/        # ProfileSection (auth), UnauthContent, etc.
        about/index.tsx
        licenses/index.tsx
        general/index.tsx
        notifications/index.tsx
        notifications-detail/index.tsx
        speech/index.tsx
        data-controls/index.tsx
        security/index.tsx
        security-passkeys/index.tsx
        security-mfa/index.tsx
    stores/
      auth.store.ts
      chat.store.ts
      sidebar.store.ts
      settings.store.ts
      ui.store.ts
    types/
      auth.types.ts
      chat.types.ts
      sidebar.types.ts
      settings.types.ts
      navigation.types.ts
      common.types.ts
    constants/
      design-tokens.ts
      mock-data/
        auth.data.ts
        chat-messages.data.ts
        sidebar.data.ts
        settings.data.ts
        licenses.data.ts
        languages.data.ts
        group-chat.data.ts
        sources.data.ts
    hooks/
      useKeyboardHeight.ts
      useAnimatedPress.ts
      useTheme.ts
    utils/
      avatar.utils.ts
      text.utils.ts
    assets/
      openai-logo.svg
      google-logo.svg
      passkey-icon.svg
```

---

## Navigation Architecture

### Root: Drawer (Sidebar)

The root navigator is a custom drawer using react-native-reanimated and react-native-gesture-handler for the sidebar. The sidebar slides in from the left with spring animation.

```
Root DrawerLayout (custom, not @react-navigation/drawer)
  |
  +-- Sidebar Panel (rendered as overlay, controlled by Zustand + reanimated)
  |
  +-- Main Content Stack
       |
       +-- (chat) Stack Group
       |    +-- index (ChatScreen)
       |    +-- select-text (modal presentation)
       |
       +-- (auth) Stack Group
       |    +-- welcome
       |    +-- login
       |    +-- loading
       |
       +-- (settings) Stack Group
            +-- index (SettingsMain)
            +-- about
            +-- licenses
            +-- general
            +-- notifications
            +-- notifications-detail
            +-- speech
            +-- data-controls
            +-- security
            +-- security-passkeys
            +-- security-mfa
```

### Navigation Details

| Transition | Type | Animation |
|---|---|---|
| Chat -> Sidebar | Custom drawer (reanimated slide + overlay) | Spring: damping 20, stiffness 200 |
| Chat -> Auth Bottom Sheet | Modal (bottom sheet via @gorhom/bottom-sheet) | Snap spring |
| Auth Bottom Sheet -> Login | Stack push | Slide left |
| Login -> Loading | Stack push | Fade |
| Loading -> Chat (auth) | Stack reset | Fade |
| Chat -> Settings | Stack push | Slide left |
| Settings -> Sub-screen | Stack push | Slide left |
| Chat -> Attachments | Bottom sheet | Snap spring |
| Chat -> Sources | Bottom sheet | Snap spring |
| Chat -> Select Text | Modal | Fade |
| Chat -> Context Menu | Overlay (absolute positioned, in chat screen) | Fade 200ms |
| Settings -> Modal (Language/Appearance/Logout) | Overlay (in settings screen) | Fade 200ms |
| Settings -> Dropdown (Accent/Language) | Overlay (in settings screen) | Fade 150ms |

### Key Decisions

1. **Sidebar is NOT a native drawer** -- it is a custom component rendered inside the root layout, using react-native-reanimated for the slide animation and react-native-gesture-handler for the swipe gesture. This gives pixel-perfect control over the animation and overlay.

2. **Bottom sheets** use @gorhom/bottom-sheet for: Auth BottomSheet (02), Attachments (03), Sources (09), Profile (19/20), Edit Profile (21), Share Feedback (36), GroupChat (13).

3. **Modals (centered dialogs)** are rendered as overlays within their parent screen using React state + reanimated fade animation. They are NOT navigation modals. This includes: Language, Appearance, Subscription, Logout, Confirmation modals, Contextual modals, Report modals.

4. **Context Menu** is an overlay within the chat screen, triggered by long-press on the user message bubble.

5. **Select Text** is an expo-router modal screen with fade presentation.

---

## State Management Strategy (Zustand)

### auth.store.ts

```typescript
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loginMode: 'email' | 'phone';
  isLoading: boolean;
  // Actions
  setAuthenticated: (auth: boolean) => void;
  setUser: (user: User | null) => void;
  setLoginMode: (mode: 'email' | 'phone') => void;
  setLoading: (loading: boolean) => void;
  login: () => void;    // Hardcoded: sets isAuthenticated=true after 3s
  logout: () => void;   // Sets isAuthenticated=false
}
```

### chat.store.ts

```typescript
interface ChatState {
  messages: ChatMessage[];
  inputText: string;
  activeChip: FeatureChipData | null;
  chatMode: 'normal' | 'search' | 'study' | 'edit' | 'image' | 'agent';
  isAILoading: boolean;
  isStreaming: boolean;
  editingMessageId: MessageId | null;
  contextMenuVisible: boolean;
  contextMenuTarget: MessageId | null;
  thumbsState: 'none' | 'up' | 'down';
  // Actions
  sendMessage: (text: string) => void;
  setInputText: (text: string) => void;
  setActiveChip: (chip: FeatureChipData | null) => void;
  setChatMode: (mode: string) => void;
  startEditing: (messageId: MessageId) => void;
  cancelEditing: () => void;
  showContextMenu: (messageId: MessageId) => void;
  hideContextMenu: () => void;
  setThumbsState: (state: 'none' | 'up' | 'down') => void;
  resetChat: () => void;
}
```

### sidebar.store.ts

```typescript
interface SidebarState {
  isOpen: boolean;
  isSearchFocused: boolean;
  searchQuery: string;
  // Actions
  open: () => void;
  close: () => void;
  toggle: () => void;
  setSearchFocused: (focused: boolean) => void;
  setSearchQuery: (query: string) => void;
}
```

### settings.store.ts

```typescript
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
  // Actions
  setLanguage: (lang: string) => void;
  setAppearance: (appearance: string) => void;
  setAccentColor: (color: string) => void;
  toggleSetting: (key: string) => void;
  setNotification: (category: string, type: string, value: boolean) => void;
}
```

### ui.store.ts

```typescript
interface UIState {
  activeModal: string | null;
  activeBottomSheet: string | null;
  keyboardHeight: number;
  // Actions
  showModal: (modalId: string) => void;
  hideModal: () => void;
  showBottomSheet: (sheetId: string) => void;
  hideBottomSheet: () => void;
  setKeyboardHeight: (height: number) => void;
}
```

---

## Shared Components List

### Tier 1: Foundation (used by 5+ screens)

| Component | Spec Reference | Usage Count |
|---|---|---|
| UserAvatar | components-inventory #13 | 10+ screens |
| PrimaryButton | components-inventory #1 | 7 screens |
| BackButton | components-inventory #3 | 15+ screens |
| IconButton | components-inventory #4 | 20+ screens |
| SettingsRow | components-inventory #39 | 15+ screens |
| SettingsCardGroup | components-inventory #38 | 10+ screens |
| SettingsHeader | components-inventory #37 | 12+ screens |
| ToggleSwitch | components-inventory #40 | 8+ screens |
| LinkText | components-inventory #15 | 6+ screens |
| DescriptionText | components-inventory #48 | 5+ screens |

### Tier 2: Feature Components (used by 2-4 screens)

| Component | Spec Reference |
|---|---|
| OutlineButton | components-inventory #2 |
| FloatingLabelInput | components-inventory #5 |
| RadioButton | components-inventory #41 |
| SettingsModal | components-inventory #42 |
| SettingsDropdown | components-inventory #43 |
| SettingsSectionHeader | components-inventory #44 |
| ChatHeader | components-inventory #19 |
| ChatInputBar | components-inventory #22 |
| FeatureChip | components-inventory #23 |
| ActionBar | components-inventory #28 |
| SuggestionButton | components-inventory #24 |
| SuggestionTextItem | components-inventory #25 |
| ContextMenu | components-inventory #32 |
| ConfirmationModal | components-inventory #50 |
| ContextualModal | components-inventory #49 |
| Popup | components-inventory #54 |
| SubScreenHeader | components-inventory #59 |
| ProfileSection | components-inventory #45 |

### Tier 3: Single-Use Components (1 screen)

| Component | Spec Reference |
|---|---|
| CountrySelector | components-inventory #6 |
| OrDivider | components-inventory #7 |
| InfoCard | components-inventory #8 |
| OpenAILogo | components-inventory #17 |
| AuthFooterLinks | components-inventory #18 |
| FullScreenLoader | components-inventory #16 |
| ChatGPTButton | components-inventory #21 |
| CombinedPillButton | components-inventory #20 |
| StopButton | components-inventory #30 |
| TalkButton | components-inventory #31 |
| AILoadingIndicator | components-inventory #29 |
| UserMessageBubble | components-inventory #26 |
| AIResponseView | components-inventory #27 |
| EditWarningContainer | components-inventory #34 |
| LicenseItem | components-inventory #46 |
| PasskeyEmptyState | components-inventory #47 |
| MemberRow | components-inventory #55 |
| ManageLinkActionRow | components-inventory #56 |
| FeedbackDropdown | components-inventory #57 |
| GroupChatHeaderPill | components-inventory #58 |
| RespondDropdown | components-inventory #60 |
| GroupChatBottomSheet | components-inventory #61 |
| ModelSelectorModal | components-inventory #62 |
| ReportModal | components-inventory #51 |
| ProfileBottomSheet | components-inventory #52 |
| EditProfileBottomSheet | components-inventory #53 |

---

## Mock Data Structure

All mock data lives in `/src/constants/mock-data/` with strongly typed exports.

### auth.data.ts
```typescript
export const MOCK_USER: User = {
  id: 'user-1' as UserId,
  name: 'Mateo Lorenzo',
  initials: 'ML',
  email: 'mateo@example.com',
  handle: '@mateolorenzo',
  avatarColor: '#7C3AED',
};
```

### chat-messages.data.ts
```typescript
export const MOCK_EMPTY_SUGGESTIONS: SuggestionButton[] = [...];
export const MOCK_EXPANDED_SUGGESTIONS: SuggestionTextItem[] = [...];
export const MOCK_SEARCH_TRENDING: SuggestionTextItem[] = [...];
export const MOCK_STUDY_ACTIVITIES: SuggestionTextItem[] = [...];
export const MOCK_USER_MESSAGE: ChatMessage = {...};
export const MOCK_AI_RESPONSE_NORMAL: ChatMessage = {...};
export const MOCK_AI_RESPONSE_SEARCH: ChatMessage = {...};  // with markdown + citations
export const MOCK_CITATIONS: Citation[] = [...];
export const MOCK_CONTEXT_MENU_ITEMS_UNAUTH: ContextMenuItem[] = [...];
export const MOCK_CONTEXT_MENU_ITEMS_AUTH: ContextMenuItem[] = [...];
```

### sidebar.data.ts
```typescript
export const MOCK_SIDEBAR_MENU_ITEMS: SidebarMenuItem[] = [...];
export const MOCK_CHAT_HISTORY: SidebarChatItem[] = [...];
export const MOCK_PROJECTS: SidebarMenuItem[] = [...];
```

### settings.data.ts
```typescript
export const MOCK_SETTINGS_UNAUTH_ROWS: SettingsRowData[] = [...];
export const MOCK_SETTINGS_AUTH_SECTIONS: SettingsSection[] = [...];
export const MOCK_ACCENT_COLORS: AccentColor[] = [...];
export const MOCK_APPEARANCE_OPTIONS: AppearanceOption[] = [...];
export const MOCK_NOTIFICATION_CATEGORIES: NotificationCategory[] = [...];
export const MOCK_SECURITY_ROWS: SecurityRow[] = [...];
export const MOCK_DATA_CONTROLS: DataControlSection[] = [...];
export const MOCK_SPEECH_SETTINGS: SpeechSetting[] = [...];
```

### languages.data.ts
```typescript
export const MOCK_APP_LANGUAGES: Language[] = [...];
export const MOCK_SPEECH_INPUT_LANGUAGES: Language[] = [...];
```

### licenses.data.ts
```typescript
export const MOCK_LICENSES: LicenseData[] = [...];
```

### group-chat.data.ts
```typescript
export const MOCK_GROUP_MEMBERS: GroupMember[] = [...];
export const MOCK_GROUP_MESSAGES: GroupMessage[] = [...];
```

### sources.data.ts
```typescript
export const MOCK_SOURCES: Source[] = [...];
```

---

## Theming System

The app is **dark mode only** (no runtime theme switching needed for visual accuracy). All design tokens are exported as TypeScript constants from a single file.

### /src/constants/design-tokens.ts

```typescript
// Colors organized by semantic usage
export const Colors = {
  bg: {
    primary: '#000000',
    sidebar: '#171717',
    sidebarOverlay: '#000000',  // + 50% opacity
    bottomSheet: '#212121',
    surface: '#2F2F2F',
    surfaceHigher: '#333333',
    modal: '#2A2A2A',
    modalDialog: '#424242',
    modalBackdrop: '#000000',   // + 50% opacity
    reportModal: '#1A1A1A',
    inputAuth: '#000000',
    buttonPrimary: '#FFFFFF',
    buttonDisabled: '#333333',
    buttonGray: '#7A7A7A',
    buttonOutline: 'transparent',
    settingsCard: '#2A2A2A',
    settingsCardUnauth: '#3A3A3A',
    termsCard: '#111111',
    avatarDefault: '#7C3AED',
    avatarProfile: '#A87FDB',
    licenseBadge: '#3A3A3A',
    chipTransparent: 'transparent',
    chipFilled: '#333333',
    talkingInput: '#3A3A3A',
    accentBlue: '#2196F3',
    popup: '#1A1A1A',
    pressSidebarItem: '#2A2A2A',
    pressOutlineButton: '#1A1A1A',
    sendDisabled: '#3A3A3A',
    sendEnabled: '#FFFFFF',
    stopButton: '#FFFFFF',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#D4D4D4',
    tertiary: '#9A9A9A',
    disabled: '#6E6E6E',
    onLight: '#000000',
    link: '#FFFFFF',
    linkFooter: '#9A9A9A',
    linkBlue: '#B0C4DE',
    linkAccent: '#7EB8E0',
    placeholder: '#6E6E6E',
    placeholderChat: '#8E8E8E',
    destructive: '#E57373',
    modalBody: '#CCCCCC',
    shimmerBase: '#6E6E6E',
    shimmerHighlight: '#9A9A9A',
    chipEdit: '#5BC5C9',
    suggestionBtn: '#9A9A9A',
    orDivider: '#6E6E6E',
  },
  border: {
    inputDefault: '#3A3A3A',
    inputFocused: '#FFFFFF',
    separator: '#2A2A2A',
    dividerOr: '#3A3A3A',
    termsCard: '#222222',
    buttonLoginBs: '#555555',
    chip: '#4A4A4A',
    editWarning: '#333333',
    suggestionButton: '#3A3A3A',
    settingsRowSeparator: 'rgba(58,58,58,0.4)',
  },
  icon: {
    primary: '#FFFFFF',
    secondary: '#9A9A9A',
    disabled: '#6E6E6E',
    destructive: '#E57373',
    chevron: '#FFFFFF',
    chevronSecondary: '#9A9A9A',
  },
  toggle: {
    trackOn: '#FFFFFF',
    thumbOn: '#000000',
    trackOff: '#4A4A4A',
    thumbOff: '#9A9A9A',
  },
  radio: {
    borderSelected: '#FFFFFF',
    fillSelected: '#FFFFFF',
    borderUnselected: '#9A9A9A',
  },
  accent: {
    selected: '#5BC5C9',
    dotDefault: '#9A9A9A',
    dotBlue: '#3B82F6',
    dotGreen: '#22C55E',
    dotYellow: '#EAB308',
    dotPink: '#EC4899',
    dotOrange: '#F97316',
    dotPurple: '#A855F7',
  },
  category: {
    brainstorm: '#F5C542',
    getAdvice: '#5BC5C9',
    code: '#8B7BF7',
    summarize: '#E8875B',
    trending: '#5B9DED',
    createImage: '#4ADE80',
    helpWrite: '#C084FC',
  },
  avatar: {
    purple: '#7C3AED',
    blueGray: '#607D8B',
    profileLg: '#A87FDB',
  },
} as const;

// Typography
export const Typography = {
  headingXl: { fontSize: 36, fontWeight: '700' as const, lineHeight: 44 },
  headingLg: { fontSize: 26, fontWeight: '700' as const, lineHeight: 34 },
  headingMd: { fontSize: 24, fontWeight: '700' as const, lineHeight: 32 },
  headingChatPrompt: { fontSize: 28, fontWeight: '700' as const, lineHeight: 36 },
  headingModal: { fontSize: 22, fontWeight: '700' as const, lineHeight: 28 },
  headingModalSm: { fontSize: 20, fontWeight: '600' as const, lineHeight: 26 },
  bodyLg: { fontSize: 17, fontWeight: '400' as const, lineHeight: 26 },
  bodyMd: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },
  bodySm: { fontSize: 15, fontWeight: '400' as const, lineHeight: 22 },
  bodyXs: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  bodyXxs: { fontSize: 13, fontWeight: '400' as const, lineHeight: 18 },
  labelBold: { fontSize: 17, fontWeight: '600' as const, lineHeight: 22 },
  labelMd: { fontSize: 16, fontWeight: '600' as const, lineHeight: 22 },
  labelSm: { fontSize: 16, fontWeight: '500' as const, lineHeight: 22 },
  labelChip: { fontSize: 14, fontWeight: '500' as const, lineHeight: 18 },
  inputText: { fontSize: 16, fontWeight: '400' as const, lineHeight: 22 },
  headerTitle: { fontSize: 19, fontWeight: '600' as const, lineHeight: 24 },
} as const;

// Spacing
export const Spacing = {
  xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24, xxxl: 32,
  screenPaddingH: 24,
  loginPaddingH: 32,
  sidebarPaddingH: 16,
  bottomSheetPaddingH: 24,
  settingsScreenPaddingH: 16,
  chatPaddingH: 16,
  iconTextGap: 16,
} as const;

// Dimensions
export const Dimensions = {
  buttonHeight: 52,
  buttonHeightWelcome: 56,
  buttonRadius: 26,
  inputHeight: 56,
  inputRadius: 8,
  chatInputHeight: 48,
  chatInputRadius: 24,
  headerHeight: 56,
  headerButtonSize: 44,
  iconButtonSize: 40,
  sidebarWidth: 0.8,  // 80% of screen width
  searchInputHeight: 44,
  sendButtonSize: 36,
  stopButtonSize: 36,
  chipHeight: 32,
  chipRadius: 16,
  bottomSheetRadius: 20,
  modalRadius: 16,
  confirmationModalRadius: 28,
  settingsCardRadius: 16,
  settingsBackButtonSize: 48,
  toggleTrackWidth: 52,
  toggleTrackHeight: 32,
  toggleThumbSize: 26,
  radioSize: 24,
  radioInnerDot: 10,
  contextMenuWidth: 240,
} as const;

// Animation tokens
export const Animations = {
  durationPress: 100,
  durationFast: 150,
  durationFloatLabel: 200,
  durationContextMenu: 200,
  durationChipEnter: 250,
  durationChipExit: 200,
  durationNormal: 300,
  durationTalkingTransition: 400,
  durationFadeOut: 500,
  durationSpinnerRotation: 1000,
  durationLoadingPulse: 1200,
  durationShimmerSweep: 1500,
  durationLoading: 3000,
  durationLoadingButton: 2000,
} as const;

// Opacity / Press States
export const Press = {
  opacityButton: 0.85,
  opacityIcon: 0.7,
  opacityLink: 0.7,
  scaleButton: 0.98,
} as const;
```

### Usage in Components

Components import tokens directly:

```typescript
import { Colors, Typography, Spacing, Dimensions } from '@/src/constants/design-tokens';
```

There is NO runtime theme provider or context. All values are static constants. This avoids unnecessary re-renders and keeps the theming system as simple as possible for a dark-mode-only app.

---

## Wave Summary

| Wave | Name | Focus | Task Count |
|---|---|---|---|
| 1 | Foundation | Types, tokens, stores, navigation skeleton | 7 |
| 2 | Shared Components | All 62 reusable components in 10 batches | 10 |
| 3 | Static Screens | Settings sub-screens, auth screens, about, licenses | 8 |
| 4 | Core Screens | Chat, sidebar, settings main | 6 |
| 5 | Interactive Features | Bottom sheets, context menus, modals, animations | 7 |
| 6 | Complex Flows | GroupChat, action bar modals, report flows | 5 |
| 7 | Polish Pass | UI Polisher reviews all screens end-to-end | 1 |

Total: 44 tasks across 7 waves.
