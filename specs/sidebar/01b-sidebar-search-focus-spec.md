# 01b Sidebar Search Focus -- Spec

**File reference:** `/references/sidebar/01b_sidebar-search-focus.jpeg`
**Auth state:** Authenticated
**Purpose:** Expanded search state of the sidebar. When the user taps the search input, the sidebar expands to full screen width, the search icon becomes a back arrow, and the keyboard opens. Chat history items are filtered in real-time as the user types.

---

## Screen Overview

The sidebar has expanded to occupy the full screen width (no overlay visible, no chat content behind). The search input is now active with a text cursor, the left icon has changed from a magnifying glass to a back arrow, and the compose (SquarePen) icon remains in the top-right corner. Below the search input, the same sidebar content (quick actions, projects, chat history) is shown, but these will be filtered as the user types. The keyboard is open at the bottom.

---

## Layout Structure

```
SafeAreaView (flex: 1, bg: #171717)
  Fixed Header
    Row: Search Input (with back arrow, flex: 1) + Compose Icon Button
  Scrollable Content
    Section 1: Quick Actions (same as normal sidebar)
      "New chat"
      "Images"
      "Apps"
    Section 2: Projects (same as normal sidebar)
      "Estudio"
      "Paisa"
      "All projects"
    Section 3: Chat History (filtered)
      Chat items matching search query
  Keyboard (system keyboard, open)
```

---

## Key Differences from Normal Sidebar (01-sidebar-auth)

| Aspect | Normal Sidebar | Search Focus |
|---|---|---|
| Width | ~80% of screen | 100% of screen |
| Overlay visible | Yes (right side) | No (full width) |
| Search icon | Magnifying glass (Search) | Back arrow (ArrowLeft) |
| Search input | Placeholder shown, not focused | Focused, cursor visible, editable |
| Keyboard | Closed | Open |
| Content | All items shown | Items filtered by search query |
| Footer (user row) | Visible | Hidden (keyboard covers it, or not shown in search mode) |

---

## Element-by-Element Specification

### 1. Full-Screen Container
- **Width:** 100% of screen
- **Background:** `#171717` (same sidebar bg)
- **No overlay** on the right side

### 2. Search Input (Focused State)
- **Position:** Top of screen, within header row
- **Flex:** 1 (takes available width minus compose button)
- **Height:** 44px [ESTIMATED]
- **Border radius:** 22px (pill shape) [ESTIMATED]
- **Background:** `#2F2F2F`
- **Border:** none (or possibly 1px solid `#4A4A4A` [ESTIMATED] when focused -- subtle)
- **Padding horizontal:** 16px [ESTIMATED]
- **Content layout:** Row, vertically centered
  - **Back arrow icon** (lucide: `ArrowLeft`): 20px, color `#9A9A9A` [ESTIMATED]
    - Pressable: Tap exits search focus mode
    - Hit area: 40x40px
  - Gap: 10px [ESTIMATED]
  - **Text input area:** flex 1
    - Placeholder: "Search" (visible when empty)
      - Font size: 16px
      - Color: `#9A9A9A` [ESTIMATED]
    - Input text (when typing):
      - Font size: 16px
      - Color: `#FFFFFF`
    - Cursor color: `#FFFFFF` [ESTIMATED]
    - Cursor visible (blinking)
- **Margin left:** 16px [ESTIMATED]
- **Margin right:** 12px [ESTIMATED]

### 3. Compose Icon Button (SquarePen)
- **Same as normal sidebar** -- positioned at top-right
- **Icon:** SquarePen, 24px, color `#FFFFFF`
- **Action:** Close sidebar, create new chat
- **Note:** This icon smoothly animates to the new top-right position as the sidebar expands

### 4. Content Area (below header)
- **Same content as normal sidebar** sections, but:
  - Filtered based on search input text
  - Real-time filtering as user types
  - **Quick Actions (New chat, Images, Apps):** Always visible regardless of search query [ESTIMATED]
  - **Projects:** Filtered by name match [ESTIMATED]
  - **Chat History:** Filtered by title match (case-insensitive substring)
- **When no matches:** Show empty state or just the quick actions [ESTIMATED]

### 5. Chat History Items (in search mode)
- Same styling as normal sidebar chat items
- **Text matching:** The matching portion of the text may not be highlighted (no bold/highlight seen in screenshot) [ESTIMATED]
- Items that match the search query appear in the list; non-matching items are hidden
- Example from screenshot (no active search text entered yet):
  - "Logo Claude Anthropic"
  - "Imagen Clade Code"

### 6. Footer (User Row)
- **NOT visible in search focus mode** -- the keyboard covers the bottom area
- The footer may still exist but is simply behind the keyboard
- When keyboard dismisses (on back arrow tap), the sidebar contracts back and footer becomes visible again

---

## Component Breakdown

| Component | Reusable? | Notes |
|---|---|---|
| `SidebarSearchInput` | Yes | Same component as normal sidebar, but with focus/expanded state variant. |
| `SidebarMenuItem` | Yes | Same as normal sidebar. |
| `SidebarChatItem` | Yes | Same as normal sidebar, but in a filtered list. |

---

## Dark Mode Values

Same as normal sidebar (01-sidebar-auth):
- Container bg: `#171717`
- Search input bg: `#2F2F2F`
- Arrow icon: `#9A9A9A`
- Placeholder text: `#9A9A9A`
- Input text: `#FFFFFF`
- Content items: same as normal sidebar

---

## Interactive States

### Back Arrow (in search input)
- **Normal:** color `#9A9A9A`
- **Pressed:** opacity 0.7 [ESTIMATED]
- **Action:** Exit search focus mode, contract sidebar back to normal width, close keyboard

### Search Input
- **Focused (active):** Cursor blinking, keyboard open
- **Typing:** Real-time filtering of chat history items

### Compose Icon
- Same as normal sidebar

### Content Items
- Same press states as normal sidebar

---

## Animations

### Expansion (entering search focus)
Three simultaneous animations, triggered when user taps the search input in normal sidebar mode:

1. **Sidebar width expansion:**
   - From: ~80% screen width
   - To: 100% screen width
   - Duration: ~300ms [ESTIMATED]
   - Easing: `Easing.bezier(0.4, 0.0, 0.2, 1.0)` [ESTIMATED]

2. **Compose icon position:**
   - From: Its position relative to sidebar right edge (at ~80% width)
   - To: Full screen right edge position
   - Duration: Same as sidebar expansion (simultaneous)
   - Easing: Same

3. **Search input width expansion:**
   - From: Width within ~80% sidebar (minus compose button and padding)
   - To: Width within 100% screen (minus compose button and padding)
   - Duration: Same (simultaneous)
   - Easing: Same

4. **Overlay fade out:**
   - From: opacity 0.5
   - To: opacity 0
   - Duration: Same (simultaneous)
   - Easing: Same

5. **Search icon to back arrow:**
   - The magnifying glass icon is replaced by a back arrow icon
   - This could be a crossfade or instant swap
   - Duration: instant or ~150ms crossfade [ESTIMATED]

6. **Keyboard:**
   - Opens naturally (platform animation)
   - Triggered after the search input gains focus

### Contraction (exiting search focus)
All animations reverse simultaneously:

1. Sidebar width contracts from 100% to ~80%
2. Compose icon slides back to its original position
3. Search input shrinks in width
4. Overlay fades back in (opacity 0 to 0.5)
5. Back arrow replaced by search icon
6. Keyboard closes
7. Search text is cleared (input becomes empty)

- **Duration:** ~300ms [ESTIMATED]
- **Easing:** Same as expansion
- **Triggered by:** Tapping the back arrow inside the search input

### Important Animation Notes
- All three geometric animations (sidebar width, input width, compose icon position) must run simultaneously and in sync -- they should feel like ONE cohesive motion
- The animation should be smooth and fluid, using `react-native-reanimated` shared values
- The sidebar width change should use `useAnimatedStyle` with a shared value for width
- The overlay opacity should also be a shared value, inversely linked to the sidebar width expansion

---

## Search/Filter Behavior

- **Trigger:** Text change in the search input
- **Scope:** Filters chat history items (Section 3) by title
- **Method:** Case-insensitive substring match
- **Debounce:** None needed for local mock data (instant filter)
- **Empty query:** Show all items (same as normal sidebar view)
- **No results:** Show only Quick Actions and Projects sections; chat history area is empty
- **Performance:** Use FlashList for the filtered list, re-render on filter change

---

## Layout Considerations

- When the keyboard is open, the visible content area shrinks
- The scrollable area should be inside a `KeyboardAvoidingView` or use `keyboardShouldPersistTaps="handled"`
- The user should be able to scroll through filtered results while keyboard is open
- Tapping a chat item should close the keyboard, close the sidebar, and navigate to that chat
