# 01b Sidebar Search Focus -- Spec (Revision 1)

**File reference:** `/references/sidebar/01b_sidebar-search-focus.jpeg`
**Auth state:** Authenticated
**Purpose:** Expanded full-width search state of the sidebar. When the user taps the search input in the normal sidebar, the panel animates to 100% screen width, the search icon transforms to a back arrow, and the keyboard opens. Chat history items filter in real-time as the user types.

---

## Screen Overview

The sidebar has expanded to fill the entire screen width. No overlay is visible, and no chat content is visible behind. The background is the same sidebar dark gray (`#171717`). The search input is now focused with a blinking cursor, and the left icon has changed from a magnifying glass to a back arrow (ArrowLeft). The compose (SquarePen) icon remains in the top-right. Below the search input, the same sidebar sections are visible (Quick Actions, Projects, Chat History), but they will be filtered as the user types. The keyboard is open at the bottom.

---

## Key Differences from Normal Sidebar (01-sidebar-auth)

| Aspect | Normal Sidebar | Search Focus |
|---|---|---|
| Sidebar width | ~80% of screen | 100% of screen |
| Overlay visible | Yes (right side dimmed) | No |
| Search left icon | `Search` (magnifying glass) | `ArrowLeft` (back) |
| Search input state | Not focused, placeholder only | Focused, cursor blinking, editable |
| Keyboard | Closed | Open |
| Content filtering | All items shown | Items filtered by search query |
| Footer (user row) | Visible | Hidden behind keyboard / not shown |
| Overlay | Visible at 50% opacity | Gone (opacity 0) |

---

## Layout Structure

```
SafeAreaView (flex: 1, bg: #171717)
  Fixed Header (paddingHorizontal: 16)
    Row: [Search Input (focused, with back arrow, flex: 1)] [gap: 12px] [Compose IconButton]
  Scrollable Content (flex: 1)
    Section 1: Quick Actions
      "New chat" (SquarePen icon)
      "Images" (image icon)
      "Apps" (grid icon)
    Section 2: Projects (filtered)
      "Estudio" (Folder icon)
      "Paisa" (Folder icon)
      "All projects" (MoreHorizontal icon)
    Section 3: Chat History (filtered by search query)
      Chat items matching search
  Keyboard (system keyboard, open at bottom)
```

**Note:** In the screenshot, "New project" is NOT visible in the projects section during search focus. The list appears to show only existing projects (Estudio, Paisa) and "All projects". This may indicate "New project" is hidden during search mode [ESTIMATED].

---

## Element-by-Element Specification

### 1. Full-Screen Container
- **Width:** 100% of screen (animated from ~80%)
- **Background:** `#171717` (same sidebar bg throughout)
- **No overlay visible**
- **The entire screen is the sidebar content**

### 2. Search Input (Focused State)
- **Position:** Top of screen, within the fixed header row
- **Flex:** 1 (takes all width minus compose button and padding)
- **Height:** 44px [ESTIMATED]
- **Border radius:** 22px (pill shape) [ESTIMATED]
- **Background:** `#2F2F2F` (same as collapsed state)
- **Border:** none visible [ESTIMATED]
- **Padding horizontal:** 16px [ESTIMATED]
- **Content layout:** `flexDirection: 'row'`, `alignItems: 'center'`
  - **Back arrow icon** (lucide: `ArrowLeft`):
    - Size: 20px
    - Color: `#9A9A9A` [ESTIMATED]
    - Pressable: tap exits search focus mode
    - Hit area: 40x40px (generous hit target)
  - **Gap:** 10px [ESTIMATED]
  - **TextInput area:**
    - Flex: 1
    - Auto-focused (cursor visible, keyboard opens)
    - Placeholder: "Search" (shown when empty)
      - Font size: 16px
      - Color: `#9A9A9A` [ESTIMATED]
    - Input text (when typing):
      - Font size: 16px
      - Font weight: 400
      - Color: `#FFFFFF`
    - Cursor color: `#FFFFFF` [ESTIMATED]
    - Cursor: blinking, visible in screenshot at the start of the input

### 3. Compose Icon Button (SquarePen)
- **Same as normal sidebar** -- positioned at the far right of the header row
- **Icon:** SquarePen, 24px, color `#FFFFFF`
- **Press state:** Opacity 0.7
- **Action:** Close search/sidebar, create new empty ChatScreen
- **Note:** This icon animates to the right as the sidebar expands (its absolute position on screen moves to the full screen-width right edge)

### 4. Scrollable Content

Same sections as the normal sidebar, but subject to filtering:

#### Section 1: Quick Actions
- **Always visible** regardless of search query [ESTIMATED]
- Same items: "New chat", "Images", "Apps"
- Same styling as normal sidebar (see 01-sidebar-auth spec)

#### Section 2: Projects
- Items may be filtered by name if a search query is entered
- With empty query: shows all projects (Estudio, Paisa, All projects)
- **"New project"** may be hidden in search mode [ESTIMATED based on screenshot]

#### Section 3: Chat History (Filtered)
- **Filtered in real-time** as the user types
- **Filter method:** Case-insensitive substring match on chat title
- **Empty query:** Shows all chat items
- **No results:** Chat history section is empty; Quick Actions and Projects remain visible

In the screenshot (with empty search query, cursor at start):
- "Logo Claude Anthropic"
- "Imagen Clade Code"
(These appear to be different chat items than the normal sidebar view, suggesting different mock data or a different point in time)

### 5. Footer (User Row)
- **NOT visible** in search focus mode
- The keyboard covers the bottom of the screen
- The footer may still technically exist but is pushed behind/below the keyboard
- When search mode exits, the footer becomes visible again

---

## Component Breakdown

| Element | Component | Reusable? | Notes |
|---|---|---|---|
| Search input | `SidebarSearchInput` | Yes | Same component, different state (focused with back arrow) |
| Compose button | `IconButton` | Yes | Same as normal sidebar |
| Menu items | `SidebarMenuItem` | Yes | Same as normal sidebar |
| Chat items | `SidebarChatItem` | Yes | Same as normal sidebar, filtered |

---

## Dark Mode Values

Same as normal sidebar (01-sidebar-auth):

| Element | Value |
|---|---|
| Container bg | `#171717` |
| Search input bg | `#2F2F2F` |
| Back arrow icon | `#9A9A9A` [ESTIMATED] |
| Placeholder text | `#9A9A9A` [ESTIMATED] |
| Input text | `#FFFFFF` |
| Cursor | `#FFFFFF` [ESTIMATED] |
| Content items | Same as normal sidebar |

---

## Interactive States

### Back Arrow (inside search input)
| State | Effect |
|---|---|
| Normal | Color `#9A9A9A` |
| Pressed | Opacity 0.7 [ESTIMATED] |

**Action:** Exit search focus mode -- triggers the contraction animation, closes keyboard, clears search text

### Search Input
| State | Effect |
|---|---|
| Focused (empty) | Cursor blinking, placeholder visible |
| Focused (typing) | Input text visible, chat items filtering in real-time |

### Compose Icon
Same as normal sidebar.

### Content Items (menu items, chat items)
Same press states as normal sidebar.

---

## Animations

### Expansion (entering search focus)

**Trigger:** User taps the search input in the normal (collapsed) sidebar.

Five things animate simultaneously, creating a cohesive single motion:

#### 1. Sidebar Width Expansion
- **From:** ~80% of screen width
- **To:** 100% of screen width
- **Duration:** ~300ms [ESTIMATED]
- **Easing:** `Easing.bezier(0.4, 0.0, 0.2, 1.0)` (Material standard) [ESTIMATED]
- **Implementation:** Animate a shared value that controls the sidebar width (or translateX of the right edge)

#### 2. Search Input Width Expansion
- **From:** Width within the ~80% sidebar (minus compose button and padding)
- **To:** Width within the 100% screen (minus compose button and padding)
- **Duration:** Same as sidebar expansion (simultaneous)
- **Easing:** Same
- **This happens naturally** if the search input has `flex: 1` and the parent container width is animated

#### 3. Compose Icon Position
- **From:** Its position relative to the ~80% sidebar right edge
- **To:** Position relative to the 100% screen right edge
- **Duration:** Same (simultaneous)
- **Easing:** Same
- **This also happens naturally** if the compose icon is positioned relative to the animated container

#### 4. Overlay Fade Out
- **From:** opacity 0.5
- **To:** opacity 0
- **Duration:** Same (simultaneous)
- **Easing:** Same
- The overlay becomes fully transparent and eventually the view is removed or hidden

#### 5. Search Icon to Back Arrow Swap
- **The magnifying glass icon is replaced by a back arrow icon**
- **Type:** Instant swap or quick crossfade (~100ms) [ESTIMATED]
- The icon change happens at the beginning of the expansion animation

#### 6. Keyboard Opens
- The system keyboard opens naturally as the TextInput gains focus
- This is a platform-controlled animation that happens concurrently

### Contraction (exiting search focus)

**Trigger:** User taps the back arrow inside the search input.

All animations reverse simultaneously:

1. Sidebar width contracts from 100% to ~80%
2. Search input width shrinks correspondingly
3. Compose icon slides back to its ~80%-width position
4. Overlay fades back in (opacity 0 to 0.5)
5. Back arrow replaced by magnifying glass icon
6. Keyboard closes
7. **Search text is cleared** (input becomes empty)
8. TextInput loses focus

- **Duration:** ~300ms [ESTIMATED]
- **Easing:** Same as expansion
- **Important:** All geometric animations must be perfectly synchronized to feel like one cohesive motion

### Animation Implementation Notes

- Use `react-native-reanimated` shared values for width and overlay opacity
- The sidebar width shared value drives all three geometric animations:
  - Sidebar container width: directly uses the shared value
  - Search input width: implicitly via flex layout
  - Compose icon position: implicitly via flex layout
- The overlay opacity should be inversely linked:
  - When width is at 80%, overlay opacity is 0.5
  - When width is at 100%, overlay opacity is 0
  - Use `interpolate()` to map width value to opacity value
- The icon swap can be conditional rendering based on a boolean state
- Use `withTiming(targetValue, { duration: 300, easing: ... })` for the animation

---

## Search/Filter Behavior

- **Trigger:** Every keystroke in the search input (onChangeText)
- **Scope:** Filters chat history items by title
- **Method:** Case-insensitive substring match (`title.toLowerCase().includes(query.toLowerCase())`)
- **Debounce:** Not needed for local mock data (instant filtering)
- **Empty query:** Shows all items (same as normal sidebar view minus possible "New project")
- **No results:** Chat history section is empty; Quick Actions and Projects sections remain visible
- **Matching text highlight:** No bold/highlight on matching text [ESTIMATED based on screenshot]

---

## Layout Considerations

- When the keyboard is open, the available content area shrinks significantly
- The scrollable content should work within a `KeyboardAvoidingView` or the scroll container should account for keyboard height
- Use `keyboardShouldPersistTaps="handled"` so users can tap menu/chat items while the keyboard is open
- Tapping a chat item should:
  1. Close keyboard
  2. Trigger contraction animation (sidebar back to ~80%, then closes)
  3. Navigate to the selected chat
- Tapping the compose icon should:
  1. Close keyboard
  2. Close/contract sidebar
  3. Create new empty chat

---

## Edge Cases

- **Very long search query:** The input should handle overflow (text scrolls horizontally within the input)
- **Many filtered results:** FlashList handles this efficiently
- **Zero results:** Show an empty state or just the actions/projects with no chat items below
- **Rapid typing:** Filtering should keep up with typing speed (local data, so no latency concern)
