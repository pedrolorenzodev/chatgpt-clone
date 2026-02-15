# Wave 7 -- Polish Pass

This wave is a single comprehensive task where the UI Polisher reviews all screens against reference screenshots and the TypeScript Specialist audits all type safety.

---

## Task 7.1: UI Polish and TypeScript Audit

**Description:** End-to-end review of every screen in the app. The UI Polisher compares each screen against its reference screenshot and identifies pixel-level discrepancies. The TypeScript Specialist audits all types, interfaces, and generic usage.

**Process:**

### Phase A: UI Polisher Review

For each screen, the UI Polisher must:

1. Open the screen in the app (Android emulator)
2. Open the reference screenshot side-by-side
3. Compare every visual element:
   - Background colors match
   - Text sizes, weights, and colors match
   - Spacing (padding, margin, gaps) match
   - Border radius values match
   - Icon sizes and colors match
   - Press feedback behavior matches
   - Animation timing and easing match
   - Scroll behavior matches
4. Document discrepancies as a checklist
5. Fix each discrepancy by adjusting StyleSheet values

**Screens to review (in order):**

| # | Screen | Reference |
|---|---|---|
| 1 | Welcome (01) | `references/auth/01_welcome-screen.jpeg` |
| 2 | Auth BottomSheet (02) | `references/auth/02_auth-bottomsheet.jpeg` |
| 3 | Login -- email (03) | `references/auth/03_auth-login-screen.jpeg` |
| 4 | Login -- phone (03) | `references/auth/03_auth-login-screen-phone.jpeg` |
| 5 | Loading Transition (04) | `references/auth/04_auth-loading-transition.jpeg` |
| 6 | Chat Empty -- unauth (01) | `references/chat/01_new-chat-empty-unauth.jpeg` |
| 7 | Expanded Suggestions (02) | `references/chat/02_expanded-suggestions.jpeg` |
| 8 | Attachments BottomSheet (03) | `references/chat/03_attachments-bottomsheet.jpeg` |
| 9 | Search Mode (04) | `references/chat/04_search-mode.jpeg` |
| 10 | Study Mode (05) | `references/chat/05_study-mode.jpeg` |
| 11 | Message Sent + AI Loading (06) | `references/chat/06_message-sent-ai-loading.jpeg` |
| 12 | AI Response Complete (07) | `references/chat/07_ai-response-complete.jpeg` |
| 13 | AI Response Search Mode (08) | `references/chat/08_ai-response-search-mode.jpeg` |
| 14 | Sources BottomSheet (09) | `references/chat/09_sources-bottomsheet.jpeg` |
| 15 | Context Menu (10) | `references/chat/10_context-menu.jpeg` |
| 16 | Select Text (11) | `references/chat/11_select-text-screen.jpeg` |
| 17 | Edit Message Mode (12) | `references/chat/12_edit-message-mode.jpg` |
| 18 | Sidebar -- unauth | `references/sidebar/01_sidebar-unauth.jpeg` |
| 19 | Sidebar -- auth | `references/sidebar/01_sidebar-auth.jpeg` |
| 20 | Sidebar -- search focus | `references/sidebar/01b_sidebar-search-focus.jpeg` |
| 21 | Settings Main -- unauth | `references/settings/01_settings-main-unauth.jpg` |
| 22 | Settings Main -- auth | `references/settings/01_settings-main-auth.jpg` |
| 23 | Language Modal | `references/settings/02_tap-language_language-modal.jpg` |
| 24 | About Screen | `references/settings/03_tap-about_about-screen.jpg` |
| 25 | Licenses Screen | `references/settings/04_tap-licenses_licenses-screen.jpg` |
| 26 | General Screen | `references/settings/01d_general-screen.jpg` |
| 27 | Appearance Modal | `references/settings/01e_appearance-modal.jpg` |
| 28 | Accent Color Dropdown | `references/settings/01f_accent-color-modal.jpg` |
| 29 | Logout Modal | `references/settings/01g_logout-modal.jpg` |
| 30 | Notifications | `references/settings/01h_notifications-screen.jpg` |
| 31 | Notifications Detail | `references/settings/01h_notifications-usage-screen.jpg` |
| 32 | Speech | `references/settings/01i_speech-screen.jpg` |
| 33 | Speech Input Language | `references/settings/01i_speech-input-language-modal.jpg` |
| 34 | Data Controls | `references/settings/01j_data-controls-screen.jpg` |
| 35 | Security | `references/settings/01k_security-screen.jpg` |
| 36 | Security Passkeys | `references/settings/01k_security-passkeys-screen.jpg` |
| 37 | Security MFA | `references/settings/01k_security-authenticator-screen.jpg` |
| 38+ | All remaining auth/GroupChat screens | Respective reference images |

### Phase B: TypeScript Specialist Audit

1. Run `npx tsc --noEmit` -- must produce zero errors
2. Verify no `any` types anywhere in the codebase
3. Verify all function parameters and return values are typed
4. Verify all component props use interfaces (not inline types)
5. Verify branded types (UserId, ChatId, MessageId) are used consistently
6. Verify all mock data is typed with explicit interfaces
7. Verify all useState generics are specified when type cannot be inferred
8. Check for proper use of `unknown` with type guards instead of `any`
9. Ensure all imports use the `@/src/...` path alias
10. Ensure no barrel exports

**Acceptance criteria:**
1. Every screen matches its reference screenshot within reasonable tolerance (color values +/- 5 hex units, spacing +/- 2px)
2. All animations play at the correct duration and easing
3. All press feedback matches the spec (correct opacity, scale, background tint)
4. TypeScript compiles with zero errors in strict mode
5. No `any` types in the entire codebase
6. All files are under 250 lines
7. All interactive elements have accessibilityLabel and accessibilityRole
8. App runs without warnings or errors on Android emulator
