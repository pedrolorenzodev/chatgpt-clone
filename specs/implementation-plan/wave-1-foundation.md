# Wave 1 -- Foundation

All tasks in this wave are **sequential** (each depends on the previous). This wave establishes the project skeleton: types, design tokens, stores, mock data, and the navigation structure.

---

## Task 1.1: Project Setup and Design Tokens

**Description:** Initialize the Expo project (if not already initialized), install all required dependencies, configure TypeScript strict mode, set up path aliases, and create the design tokens file.

**Files to create:**
- `/src/constants/design-tokens.ts`

**Files to configure/verify:**
- `tsconfig.json` (strict mode, path alias @/src)
- `app.json` or `app.config.ts` (expo config)
- `package.json` (verify all dependencies)
- `babel.config.js` (reanimated plugin, path alias)

**Dependencies to install:**
```
expo-router @gorhom/bottom-sheet react-native-reanimated react-native-gesture-handler
zustand react-native-mmkv lucide-react-native expo-image @shopify/flash-list
react-native-safe-area-context react-native-screens expo-status-bar
```

**Spec references:**
- `/specs/design-tokens.md` (full token reference)
- `/CLAUDE.md` (stack requirements, path aliases)

**Acceptance criteria:**
1. Project builds and runs without errors
2. TypeScript strict mode is enabled
3. Path alias `@/src/...` resolves correctly
4. `design-tokens.ts` exports `Colors`, `Typography`, `Spacing`, `Dimensions`, `Animations`, `Press` as typed constants
5. All color, typography, spacing, dimension, animation, and press state tokens from design-tokens.md are included
6. No `any` types anywhere
7. File is under 250 lines (split into sub-modules if needed: `colors.ts`, `typography.ts`, `spacing.ts`, `dimensions.ts`, `animations.ts` -- all re-exported from `design-tokens.ts`)

---

## Task 1.2: Type Definitions

**Description:** Create all TypeScript type definitions and branded ID types used throughout the app.

**Files to create:**
- `/src/types/common.types.ts` -- Branded ID types (UserId, ChatId, MessageId, GroupId), utility types
- `/src/types/auth.types.ts` -- User, LoginMode, AuthState types
- `/src/types/chat.types.ts` -- ChatMessage, FeatureChipData, Citation, Source, ContextMenuItem, SuggestionItem, FeatureType, ChatMode
- `/src/types/sidebar.types.ts` -- SidebarMenuItem, SidebarChatItem, SidebarSection
- `/src/types/settings.types.ts` -- SettingsRowData, SettingsSection, AccentColor, AppearanceOption, Language, LicenseData, NotificationCategory, NotificationSetting, SecurityRow, DataControlSection, SpeechSetting
- `/src/types/navigation.types.ts` -- Route names enum, navigation params types
- `/src/types/group-chat.types.ts` -- GroupMember, GroupMessage, GroupChatState, ReportCategory

**Spec references:**
- `/specs/components-inventory.md` (all TypeScript interfaces)
- `/specs/chat/group-chat-spec.md` (GroupChat types)
- `/specs/settings/` (all settings types)
- `/CLAUDE.md` (TypeScript rules, branded types)

**Dependencies:** Task 1.1

**Acceptance criteria:**
1. All branded types use the `Brand<T, B>` pattern: `type UserId = string & { __brand: 'UserId' }`
2. Every interface used in components-inventory.md is defined
3. No `any` types
4. All types have JSDoc comments describing their usage
5. Each file is under 250 lines
6. Exports are named (no default exports for type files)

---

## Task 1.3: Mock Data

**Description:** Create all hardcoded mock data used throughout the app. This is the "backend" -- every piece of data the app displays comes from these files.

**Files to create:**
- `/src/constants/mock-data/auth.data.ts`
- `/src/constants/mock-data/chat-messages.data.ts`
- `/src/constants/mock-data/sidebar.data.ts`
- `/src/constants/mock-data/settings.data.ts`
- `/src/constants/mock-data/licenses.data.ts`
- `/src/constants/mock-data/languages.data.ts`
- `/src/constants/mock-data/group-chat.data.ts`
- `/src/constants/mock-data/sources.data.ts`

**Spec references:**
- `/specs/chat/01-new-chat-empty-unauth-spec.md` (suggestion buttons)
- `/specs/chat/02-expanded-suggestions-unauth-spec.md` (expanded suggestions)
- `/specs/chat/04-search-mode-unauth-spec.md` (trending topics)
- `/specs/chat/05-study-mode-unauth-spec.md` (study activities)
- `/specs/chat/07-ai-response-complete-unauth-spec.md` (AI response content)
- `/specs/chat/08-ai-response-search-mode-unauth-spec.md` (markdown + citations)
- `/specs/chat/09-sources-bottomsheet-unauth-spec.md` (sources list)
- `/specs/chat/10-context-menu-unauth-spec.md` (context menu items)
- `/specs/chat/group-chat-spec.md` (group members, messages)
- `/specs/settings/licenses-screen-spec.md` (license data)
- `/specs/settings/language-modal-spec.md` (language list)
- `/specs/settings/notifications-screen-spec.md` (notification categories)
- `/specs/sidebar/01-sidebar-auth-spec.md` (chat history, menu items)

**Dependencies:** Task 1.2

**Acceptance criteria:**
1. All data is fully typed using types from Task 1.2
2. Mock data matches the content visible in reference screenshots
3. Chat messages include at least: one user message, one AI response (normal), one AI response (search mode with markdown and citations)
4. Sidebar data includes: menu items (New chat, Images, Apps, New project), projects, and at least 10 chat history items grouped by "Today", "Yesterday", "Previous 7 Days"
5. Settings data covers all rows for both auth and unauth variants
6. License data has at least 7 entries matching the screenshot
7. Language data has at least 20 languages
8. Source/citation data has at least 5 entries
9. Each file is under 250 lines (split large data sets)

---

## Task 1.4: Zustand Stores

**Description:** Create all Zustand stores with typed state and actions. Stores manage the app's global state -- all data is mock/hardcoded but state transitions are real.

**Files to create:**
- `/src/stores/auth.store.ts`
- `/src/stores/chat.store.ts`
- `/src/stores/sidebar.store.ts`
- `/src/stores/settings.store.ts`
- `/src/stores/ui.store.ts`

**Spec references:**
- `/specs/implementation-plan/overview.md` (store interfaces)
- `/references/auth/flow.md` (auth state machine)
- `/references/chat/flow.md` (chat state machine)
- `/references/sidebar/flow.md` (sidebar state machine)
- `/references/settings/flow.md` (settings state machine)

**Dependencies:** Tasks 1.2, 1.3

**Acceptance criteria:**
1. Each store uses `create<StoreType>()` from zustand
2. All state and actions match the interfaces defined in overview.md
3. auth.store: `login()` simulates a 3s delay then sets isAuthenticated=true and loads MOCK_USER. `logout()` resets to unauthenticated.
4. chat.store: `sendMessage()` adds user message, sets isAILoading=true, then after a simulated delay adds the mock AI response and sets isAILoading=false.
5. sidebar.store: manages open/close state and search query
6. settings.store: manages all toggle states, selected language, appearance, accent color. Initialized with sensible defaults from mock data.
7. ui.store: manages active modal/bottom sheet IDs for preventing multiple overlays
8. No `any` types. All stores are fully typed.
9. Each file is under 250 lines

---

## Task 1.5: Utility Hooks

**Description:** Create custom hooks used across the app for keyboard handling, animated press feedback, and theme access.

**Files to create:**
- `/src/hooks/useKeyboardHeight.ts` -- Returns animated keyboard height using react-native-reanimated
- `/src/hooks/useAnimatedPress.ts` -- Returns animated style for Pressable press feedback (opacity, scale)
- `/src/hooks/useTheme.ts` -- Simple hook that returns the design tokens (just re-exports, no context)

**Spec references:**
- `/specs/design-tokens.md` (press states section)
- `/specs/components-inventory.md` (press feedback patterns)
- `/CLAUDE.md` (animation rules: reanimated only)

**Dependencies:** Task 1.1

**Acceptance criteria:**
1. `useKeyboardHeight` uses `Keyboard` events from react-native and drives a reanimated shared value
2. `useAnimatedPress` accepts `{ opacity?: number, scale?: number }` config and returns `{ animatedStyle, onPressIn, onPressOut }` -- uses `useSharedValue`, `useAnimatedStyle`, and `withTiming`
3. `useTheme` returns `{ Colors, Typography, Spacing, Dimensions, Animations, Press }` (thin wrapper for future extensibility)
4. All hooks use proper TypeScript generics and return types
5. All animations run on UI thread (worklets)

---

## Task 1.6: Navigation Skeleton (Routes and Layouts)

**Description:** Create all route files and layout files for expo-router. Routes re-export from screen placeholders. Layouts configure the stack/drawer/modal navigation. Screen content is placeholder (empty view with screen name text).

**Files to create:**
- `/app/_layout.tsx` -- Root layout with drawer-style sidebar integration
- `/app/index.tsx` -- Redirect to (chat)
- `/app/(chat)/_layout.tsx` -- Stack with modal config for select-text
- `/app/(chat)/index.tsx` -- Re-export ChatScreen placeholder
- `/app/(chat)/select-text.tsx` -- Re-export SelectTextScreen placeholder
- `/app/(auth)/_layout.tsx` -- Stack for auth flow
- `/app/(auth)/welcome.tsx`
- `/app/(auth)/login.tsx`
- `/app/(auth)/loading.tsx`
- `/app/(settings)/_layout.tsx` -- Stack for settings
- `/app/(settings)/index.tsx`
- `/app/(settings)/about.tsx`
- `/app/(settings)/licenses.tsx`
- `/app/(settings)/general.tsx`
- `/app/(settings)/notifications.tsx`
- `/app/(settings)/notifications-detail.tsx`
- `/app/(settings)/speech.tsx`
- `/app/(settings)/data-controls.tsx`
- `/app/(settings)/security.tsx`
- `/app/(settings)/security-passkeys.tsx`
- `/app/(settings)/security-mfa.tsx`
- Placeholder screen files in `/src/screens/` for each route (minimal component with screen name text)

**Spec references:**
- `/specs/implementation-plan/overview.md` (navigation architecture)
- `/references/auth/flow.md` (auth navigation)
- `/references/chat/flow.md` (chat navigation)
- `/references/settings/flow.md` (settings navigation)
- `/CLAUDE.md` (expo-router conventions, file structure)

**Dependencies:** Task 1.1

**Acceptance criteria:**
1. All route files in `app/` only re-export from `@/src/screens/`
2. All `_layout.tsx` files configure the correct navigator type (Stack) with proper screen options
3. (auth) stack screens use `headerShown: false` (custom headers)
4. (settings) stack screens use `headerShown: false` (custom SettingsHeader component)
5. (chat) stack has modal presentation for select-text route
6. Root layout integrates the sidebar as an overlay (placeholder for now -- just renders main content)
7. App starts and navigates to the chat screen by default
8. All routes are navigable (even if screens show just placeholder text)
9. Status bar is configured: light content, transparent background
10. Safe area is handled in root layout

---

## Task 1.7: Sidebar Shell

**Description:** Create the sidebar drawer mechanism in the root layout. This is a custom animated drawer using react-native-reanimated and react-native-gesture-handler, NOT @react-navigation/drawer.

**Files to create:**
- `/src/components/SidebarOverlay/index.tsx`
- `/src/screens/sidebar/sidebar-panel/index.tsx` (placeholder content)
- Update `/app/_layout.tsx` to integrate the custom drawer

**Spec references:**
- `/specs/components-inventory.md` (#14 SidebarOverlay)
- `/specs/sidebar/01-sidebar-unauth-spec.md` (sidebar dimensions: ~80% width, bg #171717)
- `/references/sidebar/flow.md` (open/close behavior, gestures)
- `/specs/design-tokens.md` (sidebar tokens, spring config)

**Dependencies:** Tasks 1.1, 1.4, 1.5

**Acceptance criteria:**
1. Sidebar slides in from the left with spring animation (damping: 20, stiffness: 200)
2. SidebarOverlay renders a semi-transparent black overlay (50% opacity) that animates in sync
3. Tapping the overlay closes the sidebar
4. Sidebar width is 80% of screen width
5. Sidebar background is #171717
6. The sidebar state (open/close) is managed by the sidebar Zustand store
7. Swipe gesture from left edge opens the sidebar (PanGestureHandler)
8. The main content is visible behind the overlay (not pushed)
9. Sidebar panel shows placeholder content for now
10. Animation runs on UI thread (worklets only)
