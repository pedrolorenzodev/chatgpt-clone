# Wave 2 -- Shared Components

All tasks in this wave are **parallelizable** (no dependencies between them). Each task creates a batch of related shared components. Every component must follow the specs in `components-inventory.md` and use tokens from `design-tokens.ts`.

Every component in this wave:
- Uses `StyleSheet.create()` exclusively (no inline styles)
- Uses `Pressable` for interactive elements (never TouchableOpacity)
- Uses `react-native-reanimated` for any animations
- Has an `accessibilityLabel` and `accessibilityRole` on interactive elements
- Is under 250 lines per file
- Has a default export at the bottom
- Implements the exact `Props Interface` from components-inventory.md

---

## Task 2.1: Button Components

**Description:** Create all button variants: PrimaryButton, OutlineButton, BackButton, IconButton.

**Files to create:**
- `/src/components/PrimaryButton/index.tsx`
- `/src/components/OutlineButton/index.tsx`
- `/src/components/BackButton/index.tsx`
- `/src/components/IconButton/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` -- Components #1, #2, #3, #4

**Dependencies:** Wave 1 (design tokens, types, hooks)

**Acceptance criteria:**
1. **PrimaryButton:** Supports `default`, `disabled`, `gray` variants. Loading state shows spinner right of text (16px, color matches text). Press feedback: opacity 0.85, scale 0.98. Height 52px (56px for welcome variant via prop). Full-width by default. Optional left icon.
2. **OutlineButton:** Transparent background, 1px border (configurable color). Press feedback: background tint #1A1A1A. Optional left icon. Loading state for Google button variant.
3. **BackButton:** Three variants: `transparent` (40px, no bg), `filled-dark` (48px, #3A3A3A bg), `filled-surface` (48px, #2F2F2F bg). All show ArrowLeft icon 24px white. Press opacity 0.7.
4. **IconButton:** Configurable size, iconSize, iconColor, backgroundColor, borderRadius. Press opacity 0.7. Default: 40px container, 24px icon, transparent bg.
5. All press feedback uses `useAnimatedPress` hook or equivalent reanimated implementation
6. All buttons use `Pressable` from react-native

---

## Task 2.2: Input Components

**Description:** Create text input components with floating label animation, country selector, and OR divider.

**Files to create:**
- `/src/components/FloatingLabelInput/index.tsx`
- `/src/components/CountrySelector/index.tsx`
- `/src/components/OrDivider/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` -- Components #5, #6, #7

**Dependencies:** Wave 1 (design tokens, hooks)

**Acceptance criteria:**
1. **FloatingLabelInput:** Animated floating label that moves from center (16px, #6E6E6E) to top border (12px, #FFFFFF) on focus. Background patch masks the border behind the floated label. Border transitions from 1px #3A3A3A (unfocused) to 2px #FFFFFF (focused). Animation duration 200ms, easing decelerate. On blur with text: label stays floated. On blur empty: label animates back.
2. **CountrySelector:** Shows flag emoji + dial code + ChevronDown. Static display (no-op on press in clone). Width ~110px, height 56px, border 1px #3A3A3A, radius 8px.
3. **OrDivider:** "OR" text centered between two horizontal lines. Lines: flex 1, 1px, #3A3A3A. Text: 14px, #6E6E6E, 16px horizontal margin.
4. FloatingLabelInput uses react-native-reanimated for the label position and size animation (useSharedValue, useAnimatedStyle, withTiming)

---

## Task 2.3: Auth-Specific Components

**Description:** Create components unique to the auth flow.

**Files to create:**
- `/src/components/OpenAILogo/index.tsx`
- `/src/components/AuthFooterLinks/index.tsx`
- `/src/components/FullScreenLoader/index.tsx`
- `/src/components/InfoCard/index.tsx`
- `/src/components/LinkText/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` -- Components #17, #18, #16, #8, #15

**Dependencies:** Wave 1 (design tokens)

**Acceptance criteria:**
1. **OpenAILogo:** Renders the OpenAI logo SVG/image at configurable size (default 40px) and color (default #FFFFFF). Uses `expo-image` for rendering.
2. **AuthFooterLinks:** "Terms of Use . Privacy Policy" centered row. Font 13px, underlined, #9A9A9A. Position absolute bottom, centered.
3. **FullScreenLoader:** Black screen (#000000) with centered white spinner (~36px). Calls `onComplete` after configurable duration (default 3000ms). Non-interactive. Spinner rotates continuously using react-native-reanimated.
4. **InfoCard:** Row layout: icon (26px, left) + text block (title 17px SemiBold + description 15px Regular #9A9A9A + optional underlined link). Icon-text gap 20px.
5. **LinkText:** Underlined tappable text. Configurable color (default #FFFFFF) and fontSize (default 15). Press opacity 0.7.

---

## Task 2.4: Avatar and Profile Components

**Description:** Create avatar, profile section, and member row components.

**Files to create:**
- `/src/components/UserAvatar/index.tsx`
- `/src/components/ProfileSection/index.tsx`
- `/src/components/MemberRow/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` -- Components #13, #45, #55

**Dependencies:** Wave 1 (design tokens, types)

**Acceptance criteria:**
1. **UserAvatar:** Circular avatar with centered initials. Configurable size (32, 36, 48, 96, 120) and backgroundColor. Font size scales with avatar size per the mapping in components-inventory (32->13px, 36->14px, 48->18px, 96->36px, 120->40px). Text color always #FFFFFF, SemiBold weight.
2. **ProfileSection:** Centered column: UserAvatar (96px) + name (24px SemiBold) + handle (15px #9A9A9A) + "Edit profile" outline pill button. Spacing matches spec.
3. **MemberRow:** Row: UserAvatar (48px) + name/username column. Height 72px. Press feedback: background #1A1A1A.

---

## Task 2.5: Settings Components (Part 1 - Core)

**Description:** Create the core settings UI components used across all settings screens.

**Files to create:**
- `/src/components/SettingsHeader/index.tsx`
- `/src/components/SettingsCardGroup/index.tsx`
- `/src/components/SettingsRow/index.tsx`
- `/src/components/SettingsSectionHeader/index.tsx`
- `/src/components/DescriptionText/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` -- Components #37, #38, #39, #44, #48

**Dependencies:** Wave 1 (design tokens, types), Task 2.1 (BackButton)

**Acceptance criteria:**
1. **SettingsHeader:** Fixed header: BackButton (filled-dark, 48px) + centered title (20px SemiBold white). Background #000000. Height ~72px with padding.
2. **SettingsCardGroup:** Rounded container bg #2A2A2A, radius 16px, overflow hidden. Renders children (SettingsRow components).
3. **SettingsRow:** 11 variants (A through K) per components-inventory spec. Supports: icon (left, 24px), title, subtitle, right elements (toggle/chevron-right/chevron-down/status text/none). Separator between rows: 1px rgba(58,58,58,0.4). Height: 52px (single-line) or 64px (with subtitle). Press opacity 0.85.
4. **SettingsSectionHeader:** Three variants: `default` (14px, #9A9A9A), `white` (14px, #FFFFFF), `caps` (13px, #9A9A9A, uppercase, letterSpacing 1). Margin top 24px, margin bottom 10px.
5. **DescriptionText:** 14px Regular #9A9A9A, lineHeight 20px. Optional underlined "Learn more" link (same color). Margin top 12px, padding horizontal 16px.

---

## Task 2.6: Settings Components (Part 2 - Modals and Controls)

**Description:** Create settings modal, dropdown, toggle switch, and radio button components.

**Files to create:**
- `/src/components/ToggleSwitch/index.tsx`
- `/src/components/RadioButton/index.tsx`
- `/src/components/SettingsModal/index.tsx`
- `/src/components/SettingsDropdown/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` -- Components #40, #41, #42, #43

**Dependencies:** Wave 1 (design tokens, hooks)

**Acceptance criteria:**
1. **ToggleSwitch:** Custom component (not RN Switch). Track 52x32px, thumb 26px. ON: white track, black thumb. OFF: #4A4A4A track, #9A9A9A thumb. Thumb slides with 200ms animation (react-native-reanimated spring or timing).
2. **RadioButton:** 24px circle. Selected: 2px white border + 10px white filled inner dot. Unselected: 2px #9A9A9A border, no dot.
3. **SettingsModal:** Centered AlertDialog-style modal. Three variants: `info` (body + OK), `radio-list` (title + radio list + OK), `confirm` (title + body + Cancel/Action). Container: #424242 bg, 28px radius, 85% width, 24px padding. Backdrop: black 50% opacity, tap dismisses. Fade animation 200ms.
4. **SettingsDropdown:** Floating popover anchored below trigger. Container: #424242, 16px radius, 55% width, shadow. No backdrop dimming (transparent backdrop, tap dismisses). Items: 48px height, 16px text, checkmark on selected. Scrollable if items exceed container. Fade animation 150ms.

---

## Task 2.7: Chat Header and Input Components

**Description:** Create the chat screen header (all variants) and input bar components.

**Files to create:**
- `/src/components/ChatHeader/index.tsx`
- `/src/components/ChatGPTButton/index.tsx`
- `/src/components/CombinedPillButton/index.tsx`
- `/src/components/ChatInputBar/index.tsx`
- `/src/components/FeatureChip/index.tsx`
- `/src/components/StopButton/index.tsx`
- `/src/components/TalkButton/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` -- Components #19, #21, #20, #22, #23, #30, #31
- `/specs/chat/01-new-chat-empty-unauth-spec.md` (header layout, input bar)
- `/specs/chat/auth-screen-spec.md` (auth header variants)

**Dependencies:** Wave 1 (design tokens, types, stores), Task 2.1 (IconButton, BackButton)

**Acceptance criteria:**
1. **ChatHeader:** 6 variants: `unauth` (sidebar btn + "ChatGPT" text + "Log in" pill), `auth-empty` (sidebar btn + ChatGPTButton + CombinedPill[AddPerson+Bubble]), `auth-in-chat` (sidebar btn + ChatGPTButton + CombinedPill[Compose+Ellipsis]), `auth-hide-chat`, `auth-talking`, `select-text`. Height 56px, bg #000000, horizontal padding 16px.
2. **ChatGPTButton:** Pill bg #2F2F2F, radius 22px, "ChatGPT" 19px SemiBold white. Press opacity 0.7.
3. **CombinedPillButton:** Pill bg #2F2F2F, radius 22px, two icons 22px white, 16px gap. Each icon independently pressable with opacity 0.7.
4. **ChatInputBar:** Plus button (44px, #2F2F2F) + input field (flex 1, 48px, #2F2F2F, radius 24px). Manages states: empty, has-text, loading, chip, edit-mode. Send button: 36px circle, disabled (#3A3A3A) or enabled (#FFFFFF). Mic button visible when empty (unauth). Expands vertically when chip is active.
5. **FeatureChip:** Pill 32px height. Icon (16px) + label (14px Medium) + close X (14px, #9A9A9A). Unauth: border 1px #4A4A4A, transparent bg. Auth: #333333 bg, no border. 10+ variants by mode. Slide-up animation 250ms on enter, slide-down 200ms on exit.
6. **StopButton:** 36px white circle, square icon 14px black. Press opacity 0.85.
7. **TalkButton:** 36px white circle, waveform icon 20px black. Press opacity 0.85.

---

## Task 2.8: Chat Content Components

**Description:** Create components for rendering chat messages, AI responses, action bar, and suggestions.

**Files to create:**
- `/src/components/UserMessageBubble/index.tsx`
- `/src/components/AIResponseView/index.tsx`
- `/src/components/AILoadingIndicator/index.tsx`
- `/src/components/ActionBar/index.tsx`
- `/src/components/SuggestionButton/index.tsx`
- `/src/components/SuggestionTextItem/index.tsx`
- `/src/components/EditWarningContainer/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` -- Components #26, #27, #29, #28, #24, #25, #34
- `/specs/chat/07-ai-response-complete-unauth-spec.md` (AI response layout)
- `/specs/chat/08-ai-response-search-mode-unauth-spec.md` (markdown + citations)
- `/specs/chat/streaming-text.md` (streaming animation)

**Dependencies:** Wave 1 (design tokens, types), Task 2.1 (IconButton)

**Acceptance criteria:**
1. **UserMessageBubble:** Right-aligned, max 75% width, bg #2F2F2F, radius 20px, padding 14x12. Text 16px white. Long-press triggers callback.
2. **AIResponseView:** Renders markdown content (headers, bold, bullets, tables, inline citation chips). Text 16px white. Citation chips: 22px height, #333333 bg, 11px radius. Supports streaming prop (future use).
3. **AILoadingIndicator:** Phase 1: pulsing circle 16px white (scale 0.8-1.2, 1.2s cycle). Phase 2: "Thinking..." or "Searching..." shimmer text (base #6E6E6E, highlight sweep #9A9A9A, 1.5s). Transition: circle fades out, text fades in.
4. **ActionBar:** Unauth: 3 icons (Copy, Volume2, RefreshCw). Auth: 6 icons (Copy, ThumbsUp, ThumbsDown, Volume2, Share2, EllipsisVertical). All icons 20px #9A9A9A, 16px gap. Optional "Sources" button with favicon stack. Fade-in 300ms.
5. **SuggestionButton:** Pill outline: 1px #3A3A3A border, 24px radius, 48px height. Icon (22px, colored) + text (16px, #9A9A9A). 6 variants by category.
6. **SuggestionTextItem:** Row: icon (20px, colored) + text (16px, #9A9A9A). Height 56px, optional separator.
7. **EditWarningContainer:** Info banner: bg #1A1A1A, border 1px #333333, radius 12px. Info icon (20px, #9A9A9A) + text (14px, #D4D4D4). Fade-in 300ms.

---

## Task 2.9: Sidebar Components

**Description:** Create all sidebar sub-components.

**Files to create:**
- `/src/components/SidebarMenuItem/index.tsx`
- `/src/components/SidebarChatItem/index.tsx`
- `/src/components/SidebarSearchInput/index.tsx`
- `/src/components/SidebarUserFooter/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` -- Components #9, #10, #11, #12
- `/specs/sidebar/01-sidebar-auth-spec.md`
- `/specs/sidebar/01b-sidebar-search-focus-spec.md`

**Dependencies:** Wave 1 (design tokens, types, stores), Task 2.4 (UserAvatar)

**Acceptance criteria:**
1. **SidebarMenuItem:** Row 48px: icon (24px white) + label (16px, weight varies: 500 for actions, 400 for projects). Press feedback: bg #2A2A2A, radius 8px. Padding horizontal 16px, gap 16px.
2. **SidebarChatItem:** Row 44px: text only (15px, 1 line, ellipsis). Inactive: transparent bg, #D4D4D4. Active: #2F2F2F bg, #FFFFFF text, 8px radius. Press: #2A2A2A bg.
3. **SidebarSearchInput:** Pill 44px, bg #2F2F2F, radius 22px. Collapsed: Search icon 20px #9A9A9A + "Search" placeholder (non-editable, acts as Pressable). Expanded: ArrowLeft icon + active TextInput, auto-focused, cursor visible.
4. **SidebarUserFooter:** Row: UserAvatar (32px) + name (16px Medium) + ChevronDown (16px, #9A9A9A). Press: bg #2A2A2A. Padding 16px horizontal, 14px vertical.

---

## Task 2.10: Modal and Overlay Components

**Description:** Create all shared modal, bottom sheet wrapper, context menu, popup, and confirmation components.

**Files to create:**
- `/src/components/ContextMenu/index.tsx`
- `/src/components/ContextualModal/index.tsx`
- `/src/components/ConfirmationModal/index.tsx`
- `/src/components/ReportModal/index.tsx`
- `/src/components/Popup/index.tsx`
- `/src/components/LicenseItem/index.tsx`
- `/src/components/PasskeyEmptyState/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` -- Components #32, #49, #50, #51, #54, #46, #47
- `/specs/chat/10-context-menu-unauth-spec.md`

**Dependencies:** Wave 1 (design tokens, types, hooks), Task 2.1 (PrimaryButton, IconButton)

**Acceptance criteria:**
1. **ContextMenu:** Floating card, 240px width, #2A2A2A bg (auth) / #2F2F2F (unauth), 16px radius. Timestamp (13px, #6E6E6E) + menu items (48px height, icon 20px + text 16px). Backdrop: black 30-40% opacity. Fade 200ms in, 150ms out.
2. **ContextualModal:** Floating modal near trigger element. 240-300px width, #2A2A2A bg, 16px radius. Option rows: 44-52px height, icon + label + optional subtitle + optional chevron. Destructive variant: #E57373 text and icon. Transparent backdrop. Fade animation.
3. **ConfirmationModal:** Centered modal, #2A2A2A bg, 28px radius, 80% width. Title (22px, 600 weight) + optional description (15px, #9A9A9A) + button row (right-aligned, 24px gap). Destructive confirm: #E57373. Loading state: spinner 2s. Backdrop: black 50%.
4. **ReportModal:** 3-step modal. #1A1A1A bg, 20px radius, 90% width. Step 1: category list. Step 2: subcategory list. Step 3: textarea + submit button. Submit disabled: #333333 bg. Submit enabled: #FFFFFF bg.
5. **Popup:** Toast at bottom. #1A1A1A bg, 12px radius. Text (15px white) + close X (20px #9A9A9A). Slide-up + fade 200ms. Auto-dismiss 3s.
6. **LicenseItem:** Row 1: name (18px Bold, truncated) + version (16px Regular). Row 2: author (14px, #9A9A9A). Row 3: badge pill (#3A3A3A bg, 13px Medium, 14px radius). Separator 1px #2A2A2A.
7. **PasskeyEmptyState:** Centered: icon (48px) + title "Add a passkey" (22px Bold) + description (16px #9A9A9A) + PrimaryButton ("Create a passkey").
