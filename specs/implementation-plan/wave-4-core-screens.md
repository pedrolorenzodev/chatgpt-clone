# Wave 4 -- Core Screens

All tasks in this wave are **parallelizable** (no dependencies between them within the wave). These are the primary interactive screens: chat (unauth), sidebar content, and the auth bottom sheet integration.

---

## Task 4.1: Chat Screen -- Empty State (Unauth, Chat 01)

**Description:** Build the empty chat screen for unauthenticated users. This is the main landing screen after the welcome flow. Shows the prompt title, suggestion buttons, and the input bar.

**Files to create:**
- `/src/screens/chat/chat-screen/index.tsx`
- `/src/screens/chat/chat-screen/components/EmptyState.tsx`
- `/src/screens/chat/chat-screen/components/SuggestionGrid.tsx`
- `/app/(chat)/index.tsx` (update re-export)

**Spec references:**
- `/specs/chat/01-new-chat-empty-unauth-spec.md`
- `/specs/chat/02-expanded-suggestions-unauth-spec.md`
- `/references/chat/flow.md` (Section A, screens 01-02)

**Dependencies:** Wave 2 (ChatHeader unauth variant, ChatInputBar, SuggestionButton, SuggestionTextItem), Wave 1 (chat.store, sidebar.store)

**Reference screenshots:**
- `references/chat/01_new-chat-empty-unauth.jpeg`
- `references/chat/02_expanded-suggestions.jpeg`

**Acceptance criteria:**
1. SafeAreaView #000000 background
2. ChatHeader variant "unauth": sidebar button (opens sidebar), "ChatGPT" centered, "Log in" pill button (opens auth bottom sheet)
3. Main content (centered vertically):
   - "What can I help with?" title (28px Bold, centered), margin-bottom 24px
   - SuggestionGrid: 2x2 grid of SuggestionButton components (Brainstorm, Get advice, Code, Summarize text) with correct icons and colors
4. ChatInputBar at bottom: "Ask ChatGPT" placeholder, Plus button, disabled Send button, Mic button visible
5. Tapping a suggestion button fills the input with the suggestion text
6. Tapping the suggestion grid area shows expanded suggestions (screen 02): FlashList of SuggestionTextItem components (6+ items with category icons), scrollable, with separators
7. Sidebar button triggers sidebar.store.open()
8. "Log in" button triggers auth bottom sheet
9. Expanded suggestions list slides up from below, replacing the suggestion grid (300ms animation)

---

## Task 4.2: Chat Screen -- Messages State (Unauth, Chat 06-08)

**Description:** Build the chat screen states for message sent, AI loading, and AI response (both normal and search mode).

**Files to create:**
- `/src/screens/chat/chat-screen/components/MessageList.tsx`
- `/src/screens/chat/chat-screen/components/ChatContent.tsx`

**Spec references:**
- `/specs/chat/06-message-sent-ai-loading-unauth-spec.md`
- `/specs/chat/07-ai-response-complete-unauth-spec.md`
- `/specs/chat/08-ai-response-search-mode-unauth-spec.md`
- `/specs/chat/streaming-text.md`

**Dependencies:** Wave 2 (UserMessageBubble, AIResponseView, AILoadingIndicator, ActionBar, ChatInputBar), Task 4.1 (ChatScreen shell), Wave 1 (chat.store)

**Reference screenshots:**
- `references/chat/06_message-sent-ai-loading.jpeg`
- `references/chat/07_ai-response-complete.jpeg`
- `references/chat/08_ai-response-search-mode.jpeg`

**Acceptance criteria:**
1. When user sends a message via ChatInputBar:
   - UserMessageBubble appears right-aligned
   - Input clears, keyboard closes
   - Chat scrolls to bottom
   - AILoadingIndicator appears (pulsing circle then shimmer text)
2. After simulated AI loading (via chat.store mock):
   - AILoadingIndicator disappears
   - AIResponseView renders with mock AI response content
   - ActionBar fades in (300ms) below the response
3. Normal response (07): plain text AI response with ActionBar (3 icons)
4. Search mode response (08): markdown response with headers, bold text, bullet points, tables, inline citation chips. ActionBar (3 icons) + Sources button with favicon stack
5. MessageList scrolls properly with multiple messages
6. Send button becomes StopButton during AI loading
7. After response completes, Send button returns to disabled state
8. "Sources" button press is wired (functionality added in Wave 5)
9. The ChatHeader remains in "unauth" variant throughout

---

## Task 4.3: Chat Screen -- Feature Modes (Unauth, Chat 04-05)

**Description:** Build the Search and Study mode states of the chat screen, including chip activation and mode-specific suggestion lists.

**Files to create:**
- `/src/screens/chat/chat-screen/components/SearchModeSuggestions.tsx`
- `/src/screens/chat/chat-screen/components/StudyModeSuggestions.tsx`

**Spec references:**
- `/specs/chat/04-search-mode-unauth-spec.md`
- `/specs/chat/05-study-mode-unauth-spec.md`

**Dependencies:** Wave 2 (FeatureChip, SuggestionTextItem, ChatInputBar), Task 4.1 (ChatScreen shell), Wave 1 (chat.store)

**Reference screenshots:**
- `references/chat/04_search-mode.jpeg`
- `references/chat/05_study-mode.jpeg`

**Acceptance criteria:**
1. **Search Mode (04):**
   - Activated when Search chip is selected (from Attachments BottomSheet, built in Wave 5)
   - For now: chat.store.setChatMode('search') can be triggered by a dev shortcut or button
   - FeatureChip appears in input: Globe icon (#5BC5C9) + "Search" label. Slide-up animation 250ms.
   - Title changes to "What do you want to search for?" (28px Bold)
   - Trending topics list: SuggestionTextItem components with TrendingUp icon (#5B9DED)
   - Keyboard opens automatically
   - Close chip (X) returns to normal state
2. **Study Mode (05):**
   - Activated similarly with chat mode 'study'
   - FeatureChip: GraduationCap icon + "Study" label
   - Title changes to "What do you want to study?" (28px Bold)
   - Activity suggestions list: SuggestionTextItem components with book/notepad icons
   - Close chip returns to normal state
3. Chip enter animation: slide-up 250ms. Exit: slide-down 200ms.
4. Input bar expands vertically to accommodate chip (~80px height)
5. Title and suggestions change based on active mode, with smooth fade transition

---

## Task 4.4: Sidebar Panel Content

**Description:** Build the full sidebar panel content for both unauth and auth states. Replace the placeholder from Wave 1 Task 1.7.

**Files to create:**
- `/src/screens/sidebar/sidebar-panel/index.tsx` (replace placeholder)
- `/src/screens/sidebar/sidebar-panel/components/SidebarHeader.tsx`
- `/src/screens/sidebar/sidebar-panel/components/SidebarMenuSection.tsx`
- `/src/screens/sidebar/sidebar-panel/components/SidebarChatHistory.tsx`
- `/src/screens/sidebar/sidebar-panel/components/SidebarSearchFocusView.tsx`

**Spec references:**
- `/specs/sidebar/01-sidebar-unauth-spec.md`
- `/specs/sidebar/01-sidebar-auth-spec.md`
- `/specs/sidebar/01b-sidebar-search-focus-spec.md`
- `/references/sidebar/flow.md`

**Dependencies:** Wave 2 (SidebarMenuItem, SidebarChatItem, SidebarSearchInput, SidebarUserFooter, PrimaryButton), Wave 1 (sidebar.store, auth.store, mock-data/sidebar.data.ts)

**Reference screenshots:**
- `references/sidebar/01_sidebar-unauth.jpeg`
- `references/sidebar/01_sidebar-auth.jpeg`
- `references/sidebar/01b_sidebar-search-focus.jpeg`

**Acceptance criteria:**
1. **Unauth variant:**
   - Header row: SidebarMenuItem "New chat" (SquarePen icon) + compose icon button
   - Empty content area (no chat history)
   - Bottom: PrimaryButton "Log in or sign up" (full width, navigates to auth bottom sheet)
   - Background: #171717
2. **Auth variant:**
   - Header: SidebarSearchInput (collapsed) + compose icon button (SquarePen)
   - Quick Actions: "New chat" (SquarePen), "Images" (Image icon), "Apps" (LayoutGrid)
   - Projects section: "New project" (FolderPlus) + project items (Folder) + "All projects" (MoreHorizontal)
   - Chat History: section headers ("Today", "Yesterday", "Previous 7 Days") + SidebarChatItem components
   - Footer: SidebarUserFooter (avatar, name, chevron). Tap navigates to Settings.
3. **Search Focus (01b):**
   - When SidebarSearchInput is focused: 3 simultaneous animations: (a) compose button slides right + fades out, (b) search input expands to fill width, (c) left icon changes from Search to ArrowLeft
   - Shows filtered chat history (or "No results" state)
   - ArrowLeft in search input returns to normal sidebar state
4. Chat items use FlashList with sticky section headers
5. Each section header: "Today", "Yesterday", "Previous 7 Days" in 13px gray text
6. Active chat item has #2F2F2F background

---

## Task 4.5: Chat Screen -- Context Menu and Edit Mode (Unauth, Chat 10-12)

**Description:** Build the context menu (long-press on user message), select text screen, and edit message mode.

**Files to create:**
- `/src/screens/chat/select-text/index.tsx`
- `/app/(chat)/select-text.tsx` (update re-export)

**Note:** ContextMenu and EditWarningContainer are already built as shared components in Wave 2. This task integrates them into the chat screen.

**Spec references:**
- `/specs/chat/10-context-menu-unauth-spec.md`
- `/specs/chat/11-select-text-screen-unauth-spec.md`
- `/specs/chat/12-edit-message-mode-unauth-spec.md`

**Dependencies:** Wave 2 (ContextMenu, EditWarningContainer, FeatureChip), Task 4.2 (MessageList with UserMessageBubble), Wave 1 (chat.store)

**Reference screenshots:**
- `references/chat/10_context-menu.jpeg`
- `references/chat/11_select-text-screen.jpeg`
- `references/chat/12_edit-message-mode.jpg`

**Acceptance criteria:**
1. **Context Menu (10):**
   - Long-press on UserMessageBubble triggers ContextMenu overlay
   - Positioned near the pressed bubble
   - Shows timestamp + 3 items: Copy, Select Text, Edit Message
   - Backdrop (black 30-40%) tap dismisses
   - "Copy" copies text to clipboard (no-op visual only)
   - "Select Text" navigates to Select Text screen
   - "Edit Message" activates edit mode
2. **Select Text Screen (11):**
   - Modal presentation (fade animation 200ms)
   - Header: BackButton (filled-surface, #2F2F2F) + "Select Text" title (18px Bold, centered)
   - Content: user message text, selectable (native text selection enabled), not editable
   - Back button dismisses modal
3. **Edit Mode (12):**
   - Chat auto-scrolls to show last AI response
   - EditWarningContainer fades in (300ms) below last AI response
   - Input bar: "Editing message" chip (Pencil icon #5BC5C9, "Editing message" in #5BC5C9, close X)
   - Input text pre-filled with original user message
   - Keyboard opens automatically
   - Send button enabled (text is present)
   - Chip X button: cancels edit, removes chip and warning, clears input
   - Send: simulates re-sending (same as normal send flow)

---

## Task 4.6: Chat Screen -- Auth Variants

**Description:** Add auth-specific chat screen behavior: different header, different empty state suggestions, talk button, and auth context menu variant.

**Files to create:**
- `/src/screens/chat/chat-screen/components/AuthEmptyState.tsx`

**Note:** This task modifies the existing chat screen to support auth state, not a new screen.

**Spec references:**
- `/specs/chat/auth-screen-spec.md` (auth variants of screens 01, 02, 03, 06, 08, 10, 13, 14, 15)
- `/references/chat/flow.md` (Section B: Auth screens)

**Dependencies:** Wave 2 (ChatHeader auth variants, TalkButton, CombinedPillButton, ChatGPTButton), Tasks 4.1-4.5 (existing chat screen)

**Reference screenshots:**
- `references/chat/01_new-chat-empty-auth.jpeg` (if available, from auth-screen-spec)

**Acceptance criteria:**
1. ChatScreen reads auth.store.isAuthenticated to determine behavior:
   - **Auth header:** sidebar button + ChatGPTButton pill + CombinedPillButton (AddPerson + Bubble icons when empty, Compose + Ellipsis when in chat)
   - **Auth empty state:** Different suggestion buttons: "Create image" (Image, green), "Brainstorm" (Lightbulb, yellow), "Help me write" (Pencil, purple), "Get advice" (Gem, teal)
   - **Auth input bar:** TalkButton (white circle, waveform icon) replaces disabled Send button when input is empty
   - **Auth context menu:** 4 items instead of 3 (adds "Share")
2. Auth expanded suggestions show different items than unauth
3. Feature chips in auth mode: filled background #333333, no border (different from unauth transparent+border)
4. All other chat behavior (messages, AI loading, responses) remains the same
5. The auth variant does NOT implement: Talking Chat (14-15), GroupChat (16+), or Action Bar modals (33+). Those are in Wave 5/6.
