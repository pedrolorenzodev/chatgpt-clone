# Wave 6 -- Complex Flows

Tasks in this wave are **parallelizable** with noted dependencies. These are multi-screen flows with complex state: GroupChat, Profile sheets, and Report flows.

---

## Task 6.1: GroupChat Bottom Sheet and Empty State (Chat 13, 16)

**Description:** Build the GroupChat entry flow: the GroupChat bottom sheet (triggered from auth header AddPerson button) and the GroupChat empty screen.

**Files to create:**
- `/src/components/GroupChatBottomSheet/index.tsx`
- `/src/components/GroupChatHeaderPill/index.tsx`
- `/src/screens/chat/chat-screen/components/GroupChatEmptyState.tsx`

**Spec references:**
- `/specs/chat/group-chat-spec.md` (screens 13, 16)
- `/specs/components-inventory.md` (#61 GroupChatBottomSheet, #58 GroupChatHeaderPill)
- `/references/chat/flow.md` (Section C)

**Dependencies:** Wave 2 (PrimaryButton, UserAvatar), Wave 4 (chat screen auth), Wave 1 (group-chat.data.ts)

**Reference screenshots:**
- `references/chat/13_groupchat-bottomsheet.jpeg` (if available)
- `references/chat/16_groupchat-empty.jpeg` (if available)

**Acceptance criteria:**
1. **GroupChat BottomSheet (13):**
   - @gorhom/bottom-sheet: bg #212121, drag handle
   - Title: "Use ChatGPT together" (24px Bold white)
   - Description text (16px Regular #9A9A9A, multi-line)
   - PrimaryButton "Start group chat" (white bg, auto-width, centered)
   - Profile row: black bg #000000, 72px height, 16px radius. Contains: UserAvatar (48px) + name + subtitle + edit icon
   - "Start group chat" press: closes sheet, transitions chat to GroupChat state
2. **GroupChat Empty Screen (16):**
   - Header changes: sidebar button + GroupChatHeaderPill (SquarePen icon + user avatar 36px) on right
   - Main content: "What can I help with?" title
   - Input bar: same as normal auth input
   - GroupChat-specific: "ChatGPT" title in header area, members indicator
3. **GroupChatHeaderPill:** Pill bg #2F2F2F, radius 24px. Contains SquarePen icon (24px) and UserAvatar (36px) with 4px gap. Each independently pressable.

---

## Task 6.2: GroupChat Management Screens (Chat 17-18, 26, 28)

**Description:** Build the GroupChat management screens: Options modal, Members screen, Manage Link screen, and Customize ChatGPT screen.

**Files to create:**
- `/src/screens/chat/chat-screen/components/GroupChatOptionsModal.tsx`
- `/src/components/SubScreenHeader/index.tsx`
- `/src/components/ManageLinkActionRow/index.tsx`
- `/src/components/RespondDropdown/index.tsx`

**Note:** Members, Manage Link, and Customize ChatGPT could be separate routes or modal screens. For simplicity in a visual clone, they can be overlay screens managed by chat.store state.

**Spec references:**
- `/specs/chat/group-chat-spec.md` (screens 17, 18, 26, 26b, 28, 28b, 28c)
- `/specs/components-inventory.md` (#55 MemberRow, #56 ManageLinkActionRow, #59 SubScreenHeader, #60 RespondDropdown)

**Dependencies:** Wave 2 (ContextualModal, ConfirmationModal, MemberRow), Task 6.1 (GroupChat state), Wave 1 (group-chat.data.ts)

**Acceptance criteria:**
1. **Options Modal (17):** ContextualModal near header. Options: "Members" (with member count badge), "Rename", "Manage link", "Leave group" (destructive red), "Delete group" (destructive red).
2. **Members Screen (18):** SubScreenHeader "Members" + FlashList of MemberRow components. Each row: avatar (48px) + name + username. Tap opens ProfileBottomSheet (Task 6.3).
3. **Manage Link Screen (26):** SubScreenHeader "Manage link" + ManageLinkActionRow items: "Copy link" (Link2 icon), "Share" (Share2 icon), "Reset link" (RefreshCw icon, with loading state), "Delete link" (destructive, with loading state). Loading: row bg changes, spinner appears right.
4. **Customize ChatGPT Screen (28):** SubScreenHeader "Customize ChatGPT" + FloatingLabelInput "Name" + RespondDropdown ("Automatically" / "When mentioned") + "Invite with link" outline button + "Customize ChatGPT" outline button. Back with unsaved changes: shows ConfirmationModal "Leave without saving?"
5. **RespondDropdown:** Collapsed: bg #2A2A2A, 16px radius, shows current value + ChevronDown. Expanded: popover with 2 options, right-aligned, 60% width. Instant selection.
6. **ManageLinkActionRow:** Height 56px, padding horizontal 24px. Default: icon #9A9A9A, text white. Destructive: icon/text #E57373. Loading: bg tint + spinner.
7. Rename group: triggers a TextInput-based rename flow (inline or modal)

---

## Task 6.3: Profile and Edit Profile Bottom Sheets (Chat 19-21)

**Description:** Build the Profile bottom sheets (self and other variants) and the Edit Profile bottom sheet.

**Files to create:**
- `/src/components/ProfileBottomSheet/index.tsx`
- `/src/components/EditProfileBottomSheet/index.tsx`

**Spec references:**
- `/specs/components-inventory.md` (#52 ProfileBottomSheet, #53 EditProfileBottomSheet)
- `/specs/chat/group-chat-spec.md` (screens 19, 20, 21)

**Dependencies:** Wave 2 (UserAvatar, OutlineButton, FloatingLabelInput, PrimaryButton), Wave 1 (auth.store), @gorhom/bottom-sheet

**Acceptance criteria:**
1. **Profile BottomSheet Self (19):**
   - @gorhom/bottom-sheet: bg #212121, drag handle
   - UserAvatar 120px (centered) + name (22px, 600 weight, white, centered) + username (15px, #9A9A9A, centered)
   - OutlineButton "Edit profile" (1px border #4A4A4A, 20px radius)
   - "Edit profile" press opens EditProfileBottomSheet
2. **Profile BottomSheet Other (20):**
   - Same avatar/name/username layout
   - Separator line below
   - Destructive rows: "Remove from group" (red) + "Report" (red)
   - "Remove from group" opens ConfirmationModal (Task 6.4)
   - "Report" opens ReportModal (Task 6.4)
3. **Edit Profile BottomSheet (21):**
   - @gorhom/bottom-sheet: bg #212121, drag handle
   - UserAvatar 120px with camera overlay (36px circle, #1A1A1A bg, Camera icon 18px)
   - FloatingLabelInput "Name" (pre-filled, border radius 12px)
   - FloatingLabelInput "Username" (pre-filled, border radius 12px)
   - PrimaryButton "Save profile" (white bg, full width)
   - "Cancel" text button (16px Medium white, centered below)
   - Save updates auth.store user data

---

## Task 6.4: Confirmation and Report Flows (Chat 22-25, 29-32)

**Description:** Integrate the ConfirmationModal and ReportModal into GroupChat flows for destructive actions.

**Files to modify:**
- Integration into GroupChat management screens and Profile sheets

**Spec references:**
- `/specs/chat/group-chat-spec.md` (screens 22, 23-25, 29, 30-30c, 31, 32)
- `/specs/components-inventory.md` (#50 ConfirmationModal, #51 ReportModal)

**Dependencies:** Wave 2 (ConfirmationModal, ReportModal, Popup), Tasks 6.2, 6.3

**Acceptance criteria:**
1. **Remove Member (22):** ConfirmationModal: title "Remove [name]?", description, Cancel + "Remove" (destructive). Loading spinner 2s on confirm. Popup "Removed [name] from group" after.
2. **Report Profile (23-25):** ReportModal 3 steps:
   - Step 1: category (Spam, Abuse, Scam, Other)
   - Step 2: subcategory (varies by category)
   - Step 3: text input + Submit button
   - Submit shows loading, then Popup "Report sent"
3. **Copy Link (26b):** Popup "Copied to clipboard" (auto-dismiss 3s)
4. **Report Conversation (30-30c):** Same ReportModal flow as Report Profile but with title "Report conversation"
5. **Leave Group (31):** ConfirmationModal: "Leave group?", Cancel + "Leave" (destructive). Loading 2s. Returns to normal chat.
6. **Delete Group (32):** ConfirmationModal: "Delete group?", Cancel + "Delete" (destructive). Loading 2s. Returns to normal chat.
7. All confirmation modals have: backdrop black 50%, centered position, 28px radius, 80% width
8. Loading state in buttons: spinner right of text, text stays centered, ~2s duration

---

## Task 6.5: GroupChat Messages and Interactions (Chat 16 continued)

**Description:** Add message display and interaction in GroupChat mode: system messages, member messages, and GroupChat-specific action bar.

**Files to modify:**
- `/src/screens/chat/chat-screen/components/MessageList.tsx` (add GroupChat message variants)

**Spec references:**
- `/specs/chat/group-chat-spec.md` (message display in screen 16)
- `/references/chat/flow.md` (Section C message behavior)

**Dependencies:** Wave 4 (chat message system), Task 6.1 (GroupChat state), Wave 1 (group-chat.data.ts)

**Acceptance criteria:**
1. **System messages:** Centered gray text (15px, #9A9A9A) for join/leave events
2. **Member messages:** Distinguish sender with avatar (36px) + name label above message bubble
3. **AI response in GroupChat:** Same as normal AIResponseView but may show "Branched from" link text (#B0C4DE)
4. **GroupChat ActionBar:** Same icons as auth ActionBar but contextual to GroupChat
5. Message bubbles are left-aligned for other members, right-aligned for self
6. Other member's messages have a sender name label (14px, #9A9A9A) above the bubble
7. The message list uses the same MessageList/FlashList infrastructure but with GroupChat-specific rendering
