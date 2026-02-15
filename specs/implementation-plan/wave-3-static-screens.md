# Wave 3 -- Static Screens

All tasks in this wave are **parallelizable**. These are screens with minimal interactivity (no complex animations or state machines) that can be built using the shared components from Wave 2.

---

## Task 3.1: Welcome Screen (Auth 01)

**Description:** Build the welcome screen -- the first screen unauthenticated users see. Full-screen layout with title, subtitle, info cards, terms card, and Continue button.

**Files to create:**
- `/src/screens/auth/welcome/index.tsx`
- `/app/(auth)/welcome.tsx` (re-export)

**Spec references:**
- `/specs/auth/01-welcome-screen-spec.md`
- `/references/auth/flow.md`

**Dependencies:** Wave 2 (PrimaryButton, InfoCard, LinkText)

**Reference screenshot:** `references/auth/01_welcome-screen.jpeg`

**Acceptance criteria:**
1. SafeAreaView with #000000 background, flex 1
2. ScrollView content:
   - "ChatGPT" subtitle label (14px, gray, centered)
   - "Welcome to ChatGPT" heading (36px Bold, centered)
   - Subtitle text (17px, #B4B4B4, centered, multi-line)
   - Two InfoCard components: "ChatGPT can be inaccurate..." and "Don't share sensitive info..."
   - Terms/privacy card: #111111 bg, border 1px #222222, radius 16px, containing descriptive text with underlined links (Terms, Privacy Policy, Learn about your choices)
3. Bottom section: PrimaryButton "Continue" (height 56px). Press triggers navigation to Chat screen (unauth)
4. Spacing matches spec: screen padding 24px horizontal, 36px gap between subtitle and first card
5. No back navigation (this is the root of auth flow)

---

## Task 3.2: Login Screen (Auth 03)

**Description:** Build the login screen with email/phone toggle, floating label inputs, buttons, and OpenAI logo.

**Files to create:**
- `/src/screens/auth/login/index.tsx`
- `/src/screens/auth/login/components/EmailForm.tsx`
- `/src/screens/auth/login/components/PhoneForm.tsx`
- `/app/(auth)/login.tsx` (re-export)

**Spec references:**
- `/specs/auth/03-auth-login-screen-spec.md`
- `/references/auth/flow.md`

**Dependencies:** Wave 2 (FloatingLabelInput, PrimaryButton, OutlineButton, BackButton, OrDivider, OpenAILogo, AuthFooterLinks, CountrySelector)

**Reference screenshot:** `references/auth/03_auth-login-screen.jpeg`

**Acceptance criteria:**
1. Header: BackButton (transparent variant) top-left. OpenAI logo centered. "Log in or sign up" heading (26px Bold centered) with subtitle.
2. Email mode (default): FloatingLabelInput ("Email") + PrimaryButton "Continue" (disabled until text entered, loading state on press) + OrDivider + OutlineButton "Continue with Google" (with Google icon) + OutlineButton "Continue with phone"
3. Phone mode: CountrySelector + FloatingLabelInput ("Phone number", keyboardType numeric) + PrimaryButton "Continue" + OrDivider + OutlineButton "Continue with Google" + OutlineButton "Continue with email"
4. Mode toggle is instant (no animation) between email and phone views
5. AuthFooterLinks at bottom: "Terms of Use . Privacy Policy"
6. All buttons use correct press feedback
7. PrimaryButton loading state: spinner appears right of "Continue" text for 2s, then navigates to Loading screen (auth/04)
8. Horizontal padding: 32px for the form area

---

## Task 3.3: Auth Loading Transition (Auth 04)

**Description:** Build the loading transition screen that appears after login.

**Files to create:**
- `/src/screens/auth/loading/index.tsx`
- `/app/(auth)/loading.tsx` (re-export)

**Spec references:**
- `/specs/auth/04-auth-loading-transition-spec.md`
- `/references/auth/flow.md`

**Dependencies:** Wave 2 (FullScreenLoader), Wave 1 (auth.store)

**Reference screenshot:** `references/auth/04_auth-loading-transition.jpeg`

**Acceptance criteria:**
1. Uses FullScreenLoader component (black screen, centered white spinner)
2. Duration: 3 seconds (hardcoded via MOCK_LOADING_DURATION constant)
3. After 3 seconds: calls `auth.store.login()` to set authenticated state, then navigates to Chat screen (auth mode)
4. Non-interactive: no buttons, no back gesture, no status bar interaction
5. Fade-out animation (500ms) on exit to chat screen
6. Spinner rotation: continuous, 1000ms per rotation, linear easing (exception to no-linear rule per design-tokens)

---

## Task 3.4: Settings Main Screen (Both Auth States)

**Description:** Build the settings main screen for both unauthenticated and authenticated states.

**Files to create:**
- `/src/screens/settings/settings-main/index.tsx`
- `/src/screens/settings/settings-main/components/UnauthSettingsContent.tsx`
- `/src/screens/settings/settings-main/components/AuthSettingsContent.tsx`
- `/app/(settings)/index.tsx` (re-export)

**Spec references:**
- `/specs/settings/settings-main-unauth-spec.md`
- `/specs/settings/settings-main-auth-spec.md`
- `/references/settings/flow.md`

**Dependencies:** Wave 2 (SettingsHeader, SettingsCardGroup, SettingsRow, SettingsSectionHeader, ProfileSection, ToggleSwitch, DescriptionText), Wave 1 (auth.store, settings.store)

**Reference screenshots:**
- `references/settings/01_settings-main-unauth.jpg`
- `references/settings/01_settings-main-auth.jpg`

**Acceptance criteria:**
1. Reads `isAuthenticated` from auth.store to determine which content to show
2. **Unauth variant:** SettingsHeader "Settings" + one card group with: Data controls row (with toggle), Language row (with subtitle "English"), About row (with chevron). Each row correctly typed.
3. **Auth variant:** SettingsHeader "Settings" + scrollable content:
   - ProfileSection (avatar, name, handle, edit button)
   - "My ChatGPT" section header + card (subscription row)
   - "Account" section header + card (email, My plan, Devices, Sign-out red text)
   - "App" section header + card (Appearance with color dot subtitle, Accent color with chevron-down, Settings list with 6+ rows)
4. Navigation: rows with chevrons navigate to sub-screens via router.push()
5. "Log out" row: red text #E57373, triggers Logout modal (handled in Wave 5)
6. All toggle switches use ToggleSwitch component connected to settings.store
7. Description text appears below the "Data controls" card (unauth): "Allow your content..."

---

## Task 3.5: About Screen (Both Auth States)

**Description:** Build the About screen (identical for auth and unauth).

**Files to create:**
- `/src/screens/settings/about/index.tsx`
- `/app/(settings)/about.tsx` (re-export)

**Spec references:**
- `/specs/settings/about-screen-unauth-spec.md`
- `/specs/settings/about-screen-auth-spec.md`

**Dependencies:** Wave 2 (SettingsHeader, SettingsCardGroup, SettingsRow)

**Reference screenshots:**
- `references/settings/03_tap-about_about-screen.jpg`
- `references/settings/01l_about-screen-auth.jpg`

**Acceptance criteria:**
1. SettingsHeader with title "About" and back navigation
2. Single card group with 5 rows:
   - "Help center" (HelpCircle icon)
   - "Terms of use" (FileText icon)
   - "Privacy policy" (Users icon)
   - "Licenses" (FileStack icon) -- navigates to Licenses screen
   - "ChatGPT for Android" (Circle icon) -- title + subtitle "1.2026.027 (30)" in #9A9A9A
3. All rows except "Licenses" and "ChatGPT for Android" are no-op (would open browser)
4. "ChatGPT for Android" row is non-interactive (version info only)
5. Card background: #3A3A3A (unauth) or #2A2A2A (auth) -- determined by auth state

---

## Task 3.6: Licenses Screen

**Description:** Build the Open Source Licenses screen.

**Files to create:**
- `/src/screens/settings/licenses/index.tsx`
- `/app/(settings)/licenses.tsx` (re-export)

**Spec references:**
- `/specs/settings/licenses-screen-spec.md`

**Dependencies:** Wave 2 (LicenseItem), Wave 1 (licenses.data.ts)

**Reference screenshots:**
- `references/settings/04_tap-licenses_licenses-screen.jpg`
- `references/settings/01l_about-licenses-screen.jpg`

**Acceptance criteria:**
1. Header: simpler back button (transparent, no dark circle bg) + "Open source licenses" title (18px SemiBold, left-aligned after back button, NOT centered)
2. FlashList of LicenseItem components using MOCK_LICENSES data
3. Each LicenseItem shows: library name (bold, truncated), version (right-aligned), author (gray), license badge (pill)
4. Separator between items: 1px #2A2A2A
5. List scrolls smoothly through all items
6. Padding horizontal 16px
7. Items are pressable but perform no action

---

## Task 3.7: Settings Sub-Screens (Simple)

**Description:** Build the simpler settings sub-screens that follow a standard pattern: header + card group(s) + optional description.

**Files to create:**
- `/src/screens/settings/general/index.tsx`
- `/src/screens/settings/notifications/index.tsx`
- `/src/screens/settings/notifications-detail/index.tsx`
- `/src/screens/settings/speech/index.tsx`
- `/src/screens/settings/data-controls/index.tsx`
- `/src/screens/settings/security/index.tsx`
- `/src/screens/settings/security-passkeys/index.tsx`
- `/src/screens/settings/security-mfa/index.tsx`
- `/app/(settings)/general.tsx` (re-export)
- `/app/(settings)/notifications.tsx` (re-export)
- `/app/(settings)/notifications-detail.tsx` (re-export)
- `/app/(settings)/speech.tsx` (re-export)
- `/app/(settings)/data-controls.tsx` (re-export)
- `/app/(settings)/security.tsx` (re-export)
- `/app/(settings)/security-passkeys.tsx` (re-export)
- `/app/(settings)/security-mfa.tsx` (re-export)

**Spec references:**
- `/specs/settings/general-screen-spec.md`
- `/specs/settings/notifications-screen-spec.md`
- `/specs/settings/notifications-detail-screen-spec.md`
- `/specs/settings/speech-screen-spec.md`
- `/specs/settings/data-controls-screen-spec.md`
- `/specs/settings/security-screen-spec.md`
- `/specs/settings/security-passkeys-screen-spec.md`
- `/specs/settings/security-mfa-screens-spec.md`

**Dependencies:** Wave 2 (SettingsHeader, SettingsCardGroup, SettingsRow, SettingsSectionHeader, ToggleSwitch, DescriptionText, PasskeyEmptyState), Wave 1 (settings.store)

**Reference screenshots:**
- `references/settings/01d_general-screen.jpg`
- `references/settings/01h_notifications-screen.jpg`
- `references/settings/01h_notifications-usage-screen.jpg`
- `references/settings/01i_speech-screen.jpg`
- `references/settings/01j_data-controls-screen.jpg`
- `references/settings/01k_security-screen.jpg`
- `references/settings/01k_security-passkeys-screen.jpg`
- `references/settings/01k_security-authenticator-screen.jpg`

**Acceptance criteria:**
1. **General:** SettingsHeader "General" + card with "Show legacy models" toggle + "Language" row (subtitle "English", opens Language modal). 2 rows only.
2. **Notifications:** SettingsHeader "Notifications" + card with 6 rows (Responses, Group chats, Tasks, Projects, Recommendations, Usage). Each shows status "On" right-aligned. Each navigates to notifications-detail.
3. **Notifications Detail:** Parameterized screen. SettingsHeader (dynamic title) + "Where you'll be notified" label + card with Push/Email toggles (variant-dependent) + description text. Uses route params to determine which variant.
4. **Speech:** SettingsHeader "Speech" + single card group with 6 rows: Input language (subtitle, chevron-down, opens dropdown), description text row (embedded in card), Voice (subtitle "Cove", non-interactive), Separate mode toggle, Background conversations toggle (multi-line subtitle), Use as default assistant toggle (multi-line subtitle).
5. **Data Controls:** SettingsHeader "Data controls" + scrollable: "Improve the model" toggle card + description + "Export Data" card + "Delete OpenAI account" card (red text) + "Voice" section (2 toggles) + description + "Chat history" section (3 rows, "Clear chat history" in red).
6. **Security:** SettingsHeader "Security" + "Passkeys" card (text + "Add" status + chevron-right) + "MULTI-FACTOR AUTHENTICATION (MFA)" caps section header + card (3 rows: Authenticator app, Push notifications, Text message, each with "Off" status + chevron-right).
7. **Security Passkeys:** PasskeyEmptyState component centered on screen.
8. **Security MFA:** 3 parameterized variants (Authenticator app, Push notifications, Text message). Each: SettingsHeader + CAPS section label + toggle card + description text.
9. All toggle states are connected to settings.store
10. Each file is under 250 lines (split into components if needed)

---

## Task 3.8: Auth Bottom Sheet (Auth 02)

**Description:** Build the auth bottom sheet that appears from multiple entry points (sidebar "Log in" button, header "Log in" button, etc.).

**Files to create:**
- `/src/screens/auth/welcome/components/AuthBottomSheet.tsx`

**Note:** This is a bottom sheet rendered within the context that triggers it, NOT a separate route.

**Spec references:**
- `/specs/auth/02-auth-bottomsheet-spec.md`
- `/references/auth/flow.md`

**Dependencies:** Wave 2 (PrimaryButton, OutlineButton, IconButton), Wave 1 (ui.store), @gorhom/bottom-sheet

**Reference screenshot:** `references/auth/02_auth-bottomsheet.jpeg`

**Acceptance criteria:**
1. Uses @gorhom/bottom-sheet with dark background (#212121), top radius 20px, drag handle 36x4px #4A4A4A
2. Backdrop: black 50% opacity, tap dismisses
3. Content layout:
   - Close X button (top-right, 24px, white)
   - "Welcome to ChatGPT" title (24px Bold, centered)
   - Subtitle text (multi-line, centered)
   - PrimaryButton "Continue with Google" (white bg, with Google icon)
   - PrimaryButton "Sign up" (gray variant #7A7A7A, white text)
   - OutlineButton "Log in" (border #555555)
4. Button gap: 12px between stacked buttons
5. Horizontal padding: 24px
6. Bottom sheet snaps to ~50% height, not full screen
7. Close button press and backdrop tap both dismiss the sheet
