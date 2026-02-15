# Wave 5 -- Interactive Features

Tasks in this wave are **mostly parallelizable** with noted exceptions. These are features requiring complex interactions: bottom sheets, modals, animations, and gesture-driven behavior.

---

## Task 5.1: Attachments Bottom Sheet (Chat 03)

**Description:** Build the Attachments BottomSheet that opens from the Plus button (unauth) or ChatGPTButton (auth). Shows media buttons and feature mode items.

**Files to create:**
- `/src/components/AttachmentsBottomSheet/index.tsx`
- `/src/components/AttachmentsBottomSheet/components/MediaButtonsRow.tsx`
- `/src/components/AttachmentsBottomSheet/components/FeatureList.tsx`

**Spec references:**
- `/specs/chat/03-attachments-bottomsheet-unauth-spec.md`
- `/specs/components-inventory.md` (#33 AttachmentsBottomSheet)

**Dependencies:** Wave 2 (FeatureChip data types), Wave 1 (chat.store, ui.store), @gorhom/bottom-sheet

**Reference screenshots:**
- `references/chat/03_attachments-bottomsheet.jpeg`

**Acceptance criteria:**
1. @gorhom/bottom-sheet with bg #212121, top radius 20px, drag handle 36x4px #4A4A4A
2. Backdrop: black 50% opacity, tap dismisses
3. **Media Buttons Row:** 3 equal-width cards: Camera (Camera icon), Photos (Image icon), Files (Paperclip icon). Each: 100px height, #333333 bg, 16px radius, icon 28px white + label 14px Medium white. 12px gap between cards.
4. **Feature Items (unauth):** 3 items: Web search, Study and learn, Explore apps. Each: icon (24px) + title (17px Medium white) + subtitle (14px Regular #9A9A9A). Height 72px, padding horizontal 24px.
5. **Feature Items (auth):** 10 items: Model, Create image, Deep research, Web search, Study and learn, Agent mode, Shopping research, Your Year with ChatGPT, Quizzes, Explore apps.
6. Selected feature: icon/title/subtitle turn #5BC5C9, check icon appears right
7. Selecting a feature: closes bottom sheet + activates FeatureChip in ChatInputBar + updates chat.store.chatMode
8. Initial height: ~55% screen. Expandable to ~100% on swipe up (auth only, since 10 items)
9. "Model" item: has chevron-right, navigates to ModelSelectorModal (Task 5.2)

---

## Task 5.2: Model Selector Modal

**Description:** Build the floating modal for selecting the AI model, triggered from the Attachments BottomSheet "Model" item.

**Files to create:**
- `/src/components/ModelSelectorModal/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` (#62 ModelSelectorModal)

**Dependencies:** Wave 1 (chat.store), Task 5.1 (trigger from Attachments)

**Acceptance criteria:**
1. Floating modal: #2A2A2A bg, 16px radius, ~70% width, shadow
2. Title: "GPT-5.2" (14px, #6E6E6E)
3. Options: Auto (default), Instant, Thinking. Each ~60px height.
   - Option name: 17px Medium white
   - Option subtitle: 14px Regular #9A9A9A (e.g., "Best for most tasks")
   - Selected: check icon 20px white, right-aligned
4. "Legacy models" row at bottom (ChevronRight, navigates nowhere in clone)
5. Selecting an option updates chat.store and closes the modal
6. Transparent backdrop, tap dismisses
7. Fade animation 200ms

---

## Task 5.3: Sources Bottom Sheet (Chat 09)

**Description:** Build the Sources (Citations) bottom sheet that opens from the "Sources" button in the ActionBar.

**Files to create:**
- `/src/components/SourcesBottomSheet/index.tsx`

**Spec references:**
- `/specs/chat/09-sources-bottomsheet-unauth-spec.md`
- `/specs/components-inventory.md` (#36 SourcesBottomSheet)

**Dependencies:** Wave 1 (sources.data.ts), @gorhom/bottom-sheet

**Reference screenshot:** `references/chat/09_sources-bottomsheet.jpeg`

**Acceptance criteria:**
1. @gorhom/bottom-sheet: bg #212121, top radius 20px, drag handle
2. Title: "Citations" (18px SemiBold white)
3. Source items from MOCK_SOURCES: favicon (18-20px circle) + domain (14px #9A9A9A) + title (16px Medium white)
4. Divider between items: 1px #3A3A3A
5. Items are pressable (no-op in clone)
6. Height: ~55-60% screen
7. Backdrop: black 50%, tap dismisses

---

## Task 5.4: Settings Modals

**Description:** Integrate all settings modals into the settings screens: Language, Appearance, Subscription, Logout, Accent Color dropdown, Speech Input Language dropdown.

**Files to create:**
- No new component files (SettingsModal, SettingsDropdown already exist from Wave 2)
- Integrate modals into existing settings screens by adding state and rendering SettingsModal/SettingsDropdown overlays

**Files to modify:**
- `/src/screens/settings/settings-main/index.tsx` (add Language, Appearance, Subscription, Logout modals, Accent Color dropdown)
- `/src/screens/settings/general/index.tsx` (add Language modal trigger)
- `/src/screens/settings/speech/index.tsx` (add Speech Input Language dropdown)

**Spec references:**
- `/specs/settings/language-modal-spec.md`
- `/specs/settings/appearance-modal-spec.md`
- `/specs/settings/subscription-modal-spec.md`
- `/specs/settings/logout-modal-spec.md`
- `/specs/settings/accent-color-modal-spec.md`
- `/specs/settings/speech-input-language-modal-spec.md`

**Dependencies:** Wave 2 (SettingsModal, SettingsDropdown, RadioButton), Wave 3 (settings screens), Wave 1 (settings.store, languages.data.ts)

**Reference screenshots:**
- `references/settings/02_tap-language_language-modal.jpg`
- `references/settings/01e_appearance-modal.jpg`
- `references/settings/01c_subscription-modal.jpg`
- `references/settings/01g_logout-modal.jpg`
- `references/settings/01f_accent-color-modal.jpg`
- `references/settings/01i_speech-input-language-modal.jpg`

**Acceptance criteria:**
1. **Language Modal:** SettingsModal variant "radio-list". Title "App language". Scrollable radio list from MOCK_APP_LANGUAGES. "System default" selected by default. OK button confirms. Backdrop dismisses without changing.
2. **Appearance Modal:** SettingsModal variant "radio-list". Title "Appearance". 3 options: System (Default) [selected], Light, Dark. OK confirms.
3. **Subscription Modal:** SettingsModal variant "info". Body text about subscription. OK button only. No title.
4. **Logout Modal:** SettingsModal variant "confirm". Title "Log out?". Body: "You'll need to sign back in...". Cancel + "Log out" buttons. "Log out" is no-op in clone (would call auth.store.logout).
5. **Accent Color Dropdown:** SettingsDropdown anchored below "Accent color" row. 7 options with color dots: Default (gray), Blue, Green, Yellow, Pink, Orange, Purple (with "Plus" badge). Checkmark on selected. No backdrop dimming. ChevronDown rotates to ChevronUp when open. Instant selection (no OK button).
6. **Speech Input Language Dropdown:** SettingsDropdown. Scrollable language list. Checkmark on selected ("Auto-Detect" default). Instant selection.
7. All modals use fade animation per design tokens
8. Modal state managed locally in each screen (useState), NOT in global store

---

## Task 5.5: Action Bar Modals (Chat 33-36)

**Description:** Build the action bar contextual modals: Ellipsis modal, Retry modal, Switch Model modal, and Share Feedback bottom sheet.

**Files to create:**
- `/src/components/AttachmentsBottomSheet/components/ModelSelectorTrigger.tsx` (if needed)
- `/src/screens/chat/chat-screen/components/ActionBarModals.tsx`
- `/src/screens/chat/chat-screen/components/ShareFeedbackSheet.tsx`

**Spec references:**
- `/specs/chat/action-bar-spec.md` (screens 33, 34, 35, 36, 36b)
- `/specs/components-inventory.md` (#49 ContextualModal, #57 FeedbackDropdown)

**Dependencies:** Wave 2 (ContextualModal, Popup), Wave 4 (chat screen with ActionBar), Wave 1 (chat.store)

**Reference screenshots:**
- `references/chat/33_action-bar-ellipsis-modal.jpg` (if available)
- `references/chat/34_action-bar-retry-modal.jpg`
- `references/chat/35_action-bar-switch-model-modal.jpg`
- `references/chat/36_action-bar-share-feedback.jpg`

**Acceptance criteria:**
1. **Ellipsis Modal (33):** ContextualModal near ellipsis icon. Options: "Share", "Retry" (with ChevronRight, opens Retry modal), "View in ChatGPT" (with ChevronRight). Transparent backdrop.
2. **Retry Modal (34):** ContextualModal replacing ellipsis modal. Options: "Use Auto" (checkmark if selected), "Use Instant", "Use Thinking". Title "Retry with:" in gray text.
3. **Switch Model Modal (35):** Same structure as Retry but for general model switching: "Use Auto", "Use Instant", "Use Thinking". Section title "GPT-5.2" in gray.
4. **Share Feedback Sheet (36):** Bottom sheet opened when ThumbsDown is pressed. Title "Share Feedback" (20px SemiBold). FeedbackDropdown ("What went wrong?") with options (Harmful, Not true, Unhelpful, Code errors, Other). Textarea "Share details" (16px, 160px height, border #4A4A4A). "Learn more" link. Submit button: disabled (#333333) until category selected. Enabled: white bg. Popup "Thank you for your feedback" on submit.
5. ThumbsUp press: icon fills white, ThumbsDown disappears
6. ThumbsDown press: icon fills white, ThumbsUp disappears, opens Share Feedback sheet
7. Copy press: shows Popup "Copied to clipboard" (auto-dismiss 3s)

---

## Task 5.6: Talking Chat State (Auth, Chat 14-15)

**Description:** Build the Talking Chat state that activates when the auth user presses the TalkButton. Includes loading animation, header change, input contraction, and "Start talking" display.

**Files to create:**
- `/src/screens/chat/chat-screen/components/TalkingChatView.tsx`

**Spec references:**
- `/specs/chat/auth-screen-spec.md` (screens 14, 15)
- `/references/chat/flow.md` (Section B, screens 14-15)

**Dependencies:** Wave 2 (TalkButton, ChatHeader auth-talking and auth-hide-chat variants), Wave 4 (chat screen), Wave 1 (chat.store)

**Acceptance criteria:**
1. **TalkButton press sequence:**
   - Button expands horizontally showing loading indicator + "Cancel" text
   - Duration: 2 seconds (hardcoded)
   - After 2s: transition to Talking Chat state
2. **Talking Chat transition (400ms):**
   - Chat content fades out
   - Input field contracts to ~40% width (spring animation: damping 25, stiffness 150)
   - "End" pill button (blue #2196F3, "End" text) appears left of contracted input
   - Camera button appears right of input
   - Header changes to: sidebar button + "ChatGPT Voice" text (with "Voice" in #9A9A9A) + EllipsisVertical
3. **"Start talking" state:**
   - Large centered text "Start talking" (32px SemiBold white)
   - Subtitle text below
   - Contracted input bar at bottom
4. **"End" button press:** Returns to normal chat state (reverse transition 400ms)
5. **Hide chat toggle (14):** MessageCircleOff icon in header toggles chat history visibility. Shows popup notification when toggled.
6. All animations use react-native-reanimated (UI thread)

---

## Task 5.7: Streaming Text Animation

**Description:** Implement the word-by-word streaming animation for AI responses.

**Files to modify:**
- `/src/components/AIResponseView/index.tsx` (add streaming mode)
- `/src/components/AILoadingIndicator/index.tsx` (verify transition to response)

**Spec references:**
- `/specs/chat/streaming-text.md`

**Dependencies:** Wave 2 (AIResponseView, AILoadingIndicator), Wave 4 (chat message flow)

**Acceptance criteria:**
1. When `isStreaming` prop is true, text appears word-by-word (not character-by-character)
2. Words appear at a rate of ~30-50ms per word (configurable via constant)
3. A blinking cursor (vertical bar) appears at the end of the visible text during streaming
4. Cursor blink rate: ~530ms on/off cycle
5. When streaming completes: cursor disappears, ActionBar fades in (300ms delay)
6. Markdown formatting (bold, headers, bullets) is applied as text streams (not after)
7. Tables appear row-by-row as streaming reaches them
8. Citation chips appear inline as streaming reaches them
9. Scroll view auto-scrolls to keep the latest streamed text visible
10. Animation runs on UI thread (reanimated worklets for cursor blink; text additions can be on JS thread with proper batching)
