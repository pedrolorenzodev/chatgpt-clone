# 01 Sidebar (Unauthenticated) -- Spec

**File reference:** `/references/sidebar/01_sidebar-open-unauth.jpg`
**Auth state:** Unauthenticated
**Purpose:** Minimal sidebar shown to users who have not logged in. Contains "New chat" action, links to Terms/Privacy/Settings, and a CTA to log in or sign up.

---

## Screen Overview

The sidebar slides in from the left covering approximately 80% of the screen width. The right portion shows the dimmed ChatScreen beneath a semi-transparent overlay. The sidebar has a very dark background (not pure black -- distinct from the main screen). The content is minimal: a "New chat" item with icon at the top, a thin separator, then "Terms", "Privacy", and "Settings" links stacked vertically. At the bottom is a descriptive text and a full-width "Log in or sign up" button.

---

## Layout Structure

```
Container (position: absolute, full screen, flexDirection: row)
  Sidebar Panel (width: ~80%, bg: #171717)
    SafeArea Top
    Header Section
      New Chat Row (icon + text)
    Separator Line
    Menu Links
      "Terms" (text only, no icon)
      "Privacy" (text only, no icon)
      "Settings" (text only, no icon)
    Spacer (flex: 1)
    Footer Section
      Description Text
      "Log in or sign up" Button
    SafeArea Bottom
  Overlay (flex: 1, bg: #000000 at 50% opacity, Pressable)
```

---

## Element-by-Element Specification

### 1. Sidebar Panel
- **Position:** Left side, full height
- **Width:** ~80% of screen width (~320px on a 400px wide device) [ESTIMATED]
- **Background:** `#171717`
- **Padding top:** Safe area top inset + 8px [ESTIMATED]
- **Padding bottom:** Safe area bottom inset
- **Padding horizontal:** 16px

### 2. "New chat" Row
- **Position:** Top of sidebar content
- **Top padding:** 16px below safe area [ESTIMATED]
- **Layout:** Horizontal row, vertically centered
- **Icon:**
  - Type: Edit/compose icon (lucide: `SquarePen`)
  - Size: 24px
  - Color: `#FFFFFF`
- **Text:** "New chat"
  - Font size: 17px [ESTIMATED]
  - Font weight: 600 (SemiBold)
  - Color: `#FFFFFF`
  - Left margin: 16px from icon [ESTIMATED]
- **Full row pressable:**
  - Height: 48px [ESTIMATED]
  - Press state: opacity 0.7 [ESTIMATED]
- **Action:** Creates new chat, closes sidebar, navigates to empty ChatScreen

### 3. Separator Line
- **Position:** Below "New chat" row
- **Top margin:** 8px [ESTIMATED]
- **Dimensions:**
  - Width: 100% of sidebar content area
  - Height: 1px
- **Color:** `#2A2A2A` [ESTIMATED]

### 4. Menu Links

Three text-only menu items stacked vertically. No icons.

#### "Terms"
- **Top margin:** 16px below separator [ESTIMATED]
- **Typography:**
  - Font size: 16px
  - Font weight: 400 (Regular)
  - Color: `#D4D4D4` [ESTIMATED]
- **Pressable row:**
  - Height: 48px [ESTIMATED]
  - Vertical center aligned
  - Press state: opacity 0.7 [ESTIMATED]
- **Action:** Opens external browser (no action in clone)

#### "Privacy"
- **Top margin:** 0px (part of the list, spaced by row height)
- **Same typography as "Terms"**
- **Action:** Opens external browser (no action in clone)

#### "Settings"
- **Same typography and styling as "Terms"**
- **Action:** Navigate to Settings screen with push navigation

### 5. Footer Description Text
- **Position:** Bottom of sidebar, above the button
- **Bottom margin:** 16px above button [ESTIMATED]
- **Text:** "Save your chat history, share chats, and personalize your experience."
- **Typography:**
  - Font size: 15px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Line height: 22px [ESTIMATED]
  - Color: `#9A9A9A` [ESTIMATED]

### 6. "Log in or sign up" Button
- **Position:** Bottom of sidebar, above safe area
- **Bottom margin:** 16px from safe area bottom [ESTIMATED]
- **Dimensions:**
  - Width: 100% of sidebar content area (sidebar width - 32px padding)
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
- **Position:** Right side of screen, fills remaining space
- **Background:** `#000000` at 50% opacity
- **Pressable:** Tap closes sidebar
- **Content behind:** The ChatScreen is visible but dimmed. The sidebar button in the header, suggestion chips, etc., are faintly visible.

---

## Component Breakdown

| Component | Reusable? | Notes |
|---|---|---|
| `SidebarPanel` | Yes | The sidebar container with background and safe area handling. |
| `SidebarMenuItem` | Yes | Row with optional icon + text. Reused in auth sidebar too. |
| `PrimaryButton` | Yes | Same pill button as welcome screen and bottom sheet. |
| `SidebarOverlay` | Yes | Semi-transparent backdrop that closes sidebar on tap. |

---

## Dark Mode Values

- Sidebar bg: `#171717`
- Overlay: `#000000` at 50% opacity
- Separator: `#2A2A2A`
- Text primary: `#FFFFFF`
- Text secondary: `#D4D4D4`
- Text tertiary: `#9A9A9A`
- Button: bg `#FFFFFF`, text `#000000`

---

## Interactive States

### "New chat" Row
- **Normal:** White icon + text
- **Pressed:** Opacity 0.7 [ESTIMATED]

### Menu Links (Terms, Privacy, Settings)
- **Normal:** `#D4D4D4` text
- **Pressed:** Opacity 0.7 [ESTIMATED]

### "Log in or sign up" Button
- **Normal:** bg `#FFFFFF`, text `#000000`
- **Pressed:** Opacity 0.85 [ESTIMATED]

### Overlay
- **Pressable:** Closes sidebar on tap
- **No visual feedback on press** (the overlay itself does not change appearance)

---

## Animations

### Sidebar Open
- **Type:** Slide in from left
- **Duration:** ~300ms
- **Easing:** `Easing.bezier(0.4, 0.0, 0.2, 1.0)` (ease-in-out)
- **Properties:**
  - Sidebar panel: `translateX` from `-sidebarWidth` to `0`
  - Overlay: opacity from 0 to 0.5
- **Triggered by:** Swipe right on ChatScreen or tap sidebar button in header

### Sidebar Close
- **Type:** Slide out to left
- **Duration:** ~300ms
- **Easing:** Same as open
- **Properties:**
  - Sidebar panel: `translateX` from `0` to `-sidebarWidth`
  - Overlay: opacity from 0.5 to 0
- **Triggered by:** Tap overlay or swipe left

### Keyboard Behavior
- Keyboard automatically closes when sidebar opens (per flow.md)
