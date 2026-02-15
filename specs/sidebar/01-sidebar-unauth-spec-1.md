# 01 Sidebar (Unauthenticated) -- Spec (Revision 1)

**File reference:** `/references/sidebar/01_sidebar-open-unauth.jpg`
**Auth state:** Unauthenticated
**Purpose:** Minimal sidebar for users who have not logged in. Contains a "New chat" action, links to Terms/Privacy/Settings, and a CTA to log in or sign up at the bottom.

---

## Screen Overview

The sidebar slides in from the left, covering approximately 80% of the screen width. The right portion shows the ChatScreen (unauthenticated) dimmed behind a semi-transparent black overlay. The sidebar panel has a very dark gray background (`#171717`), distinctly different from the pure black main screen. Content is minimal and vertically arranged: a "New chat" item with edit icon at the top, followed by a thin horizontal separator, then three plain text links ("Terms", "Privacy", "Settings") stacked vertically. At the very bottom is descriptive text and a white "Log in or sign up" pill button.

---

## Layout Structure

```
Container (position: absolute, full screen, flexDirection: row, zIndex: above everything)
  Sidebar Panel (width: ~80% of screen, bg: #171717)
    SafeArea Top padding
    Header Section (paddingHorizontal: 16)
      "New chat" Row (icon: SquarePen + text)
    Separator Line (full width within padding)
    Menu Links Section (paddingHorizontal: 16)
      "Terms" (text only)
      "Privacy" (text only)
      "Settings" (text only)
    Flex Spacer (flex: 1, pushes footer to bottom)
    Footer Section (paddingHorizontal: 16)
      Description Text
      "Log in or sign up" Button
    SafeArea Bottom padding
  Overlay (flex: 1, bg: rgba(0,0,0,0.5), Pressable)
```

---

## Element-by-Element Specification

### 1. Sidebar Panel
- **Position:** Left side of screen, full height
- **Width:** ~80% of screen width [ESTIMATED] -- approximately 320px on a 400px-wide device. Examining the screenshot, the sidebar leaves roughly 20% of the screen visible on the right.
- **Background:** `#171717`
- **Padding top:** Safe area top + 12px [ESTIMATED]
- **Padding bottom:** Safe area bottom
- **Padding horizontal:** 16px

### 2. "New chat" Row
- **Position:** First item at the top of the sidebar content
- **Top padding:** 8px from top of content area [ESTIMATED]
- **Layout:** `flexDirection: 'row'`, `alignItems: 'center'`
- **Height:** 48px [ESTIMATED]
- **Icon:**
  - Type: Compose/edit icon (lucide: `SquarePen`)
  - Size: 24px
  - Color: `#FFFFFF`
- **Text:** "New chat"
  - Font size: 17px [ESTIMATED] -- appears slightly larger than the menu links below
  - Font weight: 600 (SemiBold)
  - Color: `#FFFFFF`
  - Left margin: 16px from icon [ESTIMATED]
- **Full row is pressable:**
  - Press feedback: opacity 0.7 [ESTIMATED]
  - Border radius: 8px [ESTIMATED] on press highlight
- **Action:** Creates new chat, closes sidebar, navigates to empty ChatScreen

### 3. Separator Line
- **Position:** Below "New chat" row
- **Top margin:** 8px [ESTIMATED]
- **Dimensions:**
  - Width: 100% of sidebar content area (panel width - 32px padding)
  - Height: 1px (hairline)
- **Color:** `#2A2A2A` [ESTIMATED] -- visible in screenshot as a subtle dark line

### 4. Menu Links

Three text-only items stacked vertically. No icons. Each is a simple text row.

#### General properties for all three:
- **Height per item:** ~52px [ESTIMATED] -- examining the screenshot, there is generous vertical spacing between items
- **Padding vertical:** ~16px per item [ESTIMATED]
- **Typography:**
  - Font size: 16px
  - Font weight: 400 (Regular)
  - Color: `#D4D4D4` [ESTIMATED] -- slightly dimmer than pure white
- **Pressable:** Full width of sidebar content
  - Press feedback: opacity 0.7 [ESTIMATED]

#### "Terms"
- **Top margin:** 12px below separator [ESTIMATED]
- **Text:** "Terms"
- **Action:** Opens external browser (no action in clone)

#### "Privacy"
- **Text:** "Privacy"
- **Action:** Opens external browser (no action in clone)

#### "Settings"
- **Text:** "Settings"
- **Action:** Navigate to Settings screen with push navigation

### 5. Footer Description Text
- **Position:** Bottom area of sidebar, above the button
- **Bottom margin:** 16px above button [ESTIMATED]
- **Text:** "Save your chat history, share chats, and personalize your experience."
- **Typography:**
  - Font size: 15px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Line height: 22px [ESTIMATED]
  - Color: `#9A9A9A` [ESTIMATED]
- **Max lines:** Wraps naturally (~2 lines)

### 6. "Log in or sign up" Button
- **Position:** Bottom of sidebar, above safe area bottom
- **Bottom margin:** 16px above safe area bottom [ESTIMATED]
- **Top margin:** 16px below description text [ESTIMATED]
- **Dimensions:**
  - Width: 100% of sidebar content area (panel width - 32px padding)
  - Height: 52px
  - Border radius: 26px (pill shape)
- **Background:** `#FFFFFF`
- **Text:** "Log in or sign up"
  - Font size: 16px
  - Font weight: 600 (SemiBold)
  - Color: `#000000`
  - Text align: center
- **Press state:** Opacity 0.85 [ESTIMATED]
- **Action:** Opens Auth BottomSheet (auth/02)

### 7. Overlay (Right Side)
- **Position:** Fills the remaining screen space to the right of the sidebar panel
- **Flex:** 1
- **Background:** `#000000` at 50% opacity (`rgba(0, 0, 0, 0.5)`)
- **Pressable:** Tapping closes the sidebar
- **No visual press feedback** on the overlay itself
- **Content behind:** The ChatScreen is faintly visible -- header buttons, content, etc., all dimmed

---

## Component Breakdown

| Element | Component | Reusable? | Notes |
|---|---|---|---|
| Sidebar panel | `SidebarPanel` | Yes | Container with bg, safe area, and padding. Shared with auth sidebar. |
| "New chat" row | `SidebarMenuItem` | Yes | Icon + text row. Same component used in auth sidebar. |
| Menu links | `SidebarTextLink` or simple Pressable text | Semi-reusable | Text-only rows, simpler than icon+text items |
| CTA button | `PrimaryButton` | Yes | Same pill button used across the app |
| Overlay | `SidebarOverlay` | Yes | Same overlay used in auth sidebar |

---

## Dark Mode Values

| Element | Value |
|---|---|
| Sidebar bg | `#171717` |
| Overlay | `#000000` at 50% opacity |
| "New chat" icon | `#FFFFFF` |
| "New chat" text | `#FFFFFF` |
| Separator | `#2A2A2A` [ESTIMATED] |
| Menu link text | `#D4D4D4` [ESTIMATED] |
| Description text | `#9A9A9A` [ESTIMATED] |
| Button bg | `#FFFFFF` |
| Button text | `#000000` |

---

## Interactive States

### "New chat" Row
| State | Effect |
|---|---|
| Normal | Icon + text at full opacity |
| Pressed | Opacity 0.7 |

### Menu Links (Terms, Privacy, Settings)
| State | Effect |
|---|---|
| Normal | Text `#D4D4D4` |
| Pressed | Opacity 0.7 |

### "Log in or sign up" Button
| State | Background | Text |
|---|---|---|
| Normal | `#FFFFFF` | `#000000` |
| Pressed | `#FFFFFF` at 85% opacity | `#000000` |

### Overlay
| State | Effect |
|---|---|
| Normal | Semi-transparent |
| Pressed | No visual change (triggers sidebar close) |

---

## Animations

### Sidebar Open
- **Type:** Slide in from left
- **Duration:** ~300ms
- **Easing:** `Easing.bezier(0.4, 0.0, 0.2, 1.0)` (standard ease-in-out)
- **Properties animated simultaneously:**
  - Sidebar panel: `translateX` from `-sidebarWidth` to `0`
  - Overlay: opacity from `0` to `0.5`
- **Triggers:**
  - Swipe right on ChatScreen
  - Tap sidebar toggle button in ChatScreen header

### Sidebar Close
- **Type:** Slide out to left
- **Duration:** ~300ms
- **Easing:** Same as open
- **Properties (reversed):**
  - Sidebar panel: `translateX` from `0` to `-sidebarWidth`
  - Overlay: opacity from `0.5` to `0`
- **Triggers:**
  - Tap overlay (right side)
  - Swipe left on the sidebar

### Keyboard
- Keyboard closes automatically when sidebar opens (per flow.md)

---

## Gesture Handling

- **Swipe right** on ChatScreen opens sidebar (recognized by gesture handler)
- **Swipe left** on the sidebar panel closes it
- The gesture should feel natural, with the sidebar following the finger during the swipe (interactive gesture, not just trigger-based)
- Use `react-native-gesture-handler` `PanGestureHandler` or similar
- Minimum velocity/distance threshold for gesture to complete vs. snap back
