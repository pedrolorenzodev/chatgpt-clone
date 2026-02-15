# 01 Sidebar (Authenticated) -- Spec

**File reference:** `/references/sidebar/01_sidebar-auth.jpg`
**Auth state:** Authenticated
**Purpose:** Full-featured sidebar for logged-in users. Contains search, new chat, quick action shortcuts (Images, Apps), projects section, and scrollable chat history. The footer shows the user's avatar and name.

---

## Screen Overview

The sidebar slides in from the left, covering approximately 75-80% of the screen. The right side shows the current chat dimmed behind a semi-transparent overlay. The sidebar has a dark background (`#171717`). The structure is vertically divided into three zones: a fixed header (search input + new chat icon), a scrollable middle area (quick actions, projects, chat history), and a fixed footer (user avatar + name + chevron).

---

## Layout Structure

```
Container (position: absolute, full screen, flexDirection: row)
  Sidebar Panel (width: ~80%, bg: #171717)
    Fixed Header
      Row: Search Input (flex: 1) + Compose Icon Button
    Scrollable Content
      Section 1: Quick Actions
        "New chat" (icon + text)
        "Images" (icon + text)
        "Apps" (icon + text)
      Separator [ESTIMATED -- implied by visual grouping]
      Section 2: Projects
        "New project" (icon + text)
        "Paisa" (icon + text)
        "Estudio" (icon + text)
        "All projects" (icon + text)
      Section 3: Chat History
        Chat item (text only, no icon)
        Chat item
        Chat item (active -- highlighted bg)
        Chat item
        ... (scrollable)
    Fixed Footer
      User Row: Avatar + Name + Chevron
  Overlay (flex: 1, bg: #000000 at 50% opacity, Pressable)
```

---

## Element-by-Element Specification

### 1. Sidebar Panel
- **Position:** Left side, full height
- **Width:** ~80% of screen width [ESTIMATED]
- **Background:** `#171717`
- **Padding top:** Safe area top inset
- **Padding bottom:** 0 (footer handles its own safe area)

### 2. Fixed Header

#### Search Input
- **Position:** Top-left, within header row
- **Flex:** 1 (takes available width minus compose button)
- **Height:** 44px [ESTIMATED]
- **Border radius:** 22px (fully rounded / pill shape) [ESTIMATED]
- **Background:** `#2F2F2F`
- **Border:** none
- **Padding horizontal:** 16px [ESTIMATED]
- **Content layout:** Row, vertically centered
  - Search icon (lucide: `Search`): 20px, color `#9A9A9A` [ESTIMATED]
  - Gap: 10px [ESTIMATED]
  - Placeholder text: "Search"
    - Font size: 16px
    - Font weight: 400 (Regular)
    - Color: `#9A9A9A` [ESTIMATED]
- **Margin:** 16px left, 12px right [ESTIMATED]
- **Top margin:** 8px [ESTIMATED]
- **Pressable:** Tap activates search focus mode (see sidebar/01b spec)

#### Compose Icon Button (Square-Pen)
- **Position:** Right side of header row
- **Icon:** SquarePen / edit-square (lucide: `SquarePen`)
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Container:**
  - Width: 40px, Height: 40px [ESTIMATED]
  - Background: transparent
  - Border radius: 8px [ESTIMATED]
- **Right margin:** 16px [ESTIMATED]
- **Press state:** Opacity 0.7 [ESTIMATED]
- **Action:** Close sidebar, create new empty ChatScreen

### 3. Section 1: Quick Actions

Three menu items with icons, stacked vertically.

#### Header Row Layout (each item)
- **Height:** 48px [ESTIMATED]
- **Padding horizontal:** 16px
- **Layout:** Row, vertically centered
- **Icon-text gap:** 16px [ESTIMATED]

#### "New chat"
- **Icon:** SquarePen (lucide: `SquarePen`), 24px, color `#FFFFFF`
- **Text:** "New chat"
  - Font size: 16px
  - Font weight: 500 (Medium)
  - Color: `#FFFFFF`
- **Press state:** bg `#2A2A2A` [ESTIMATED]
- **Action:** Same as compose icon (new chat, close sidebar)

#### "Images"
- **Icon:** Image generation icon (appears to be a custom icon with sparkles/image -- lucide: `ImagePlus` or similar), 24px, color `#FFFFFF`
- **Text:** "Images"
  - Same typography as "New chat"
- **Press state:** bg `#2A2A2A` [ESTIMATED]
- **Action:** No action (per flow.md)

#### "Apps"
- **Icon:** Grid/apps icon (lucide: `LayoutGrid` or 4 circles/squares), 24px, color `#FFFFFF`
- **Text:** "Apps"
  - Same typography as "New chat"
- **Press state:** bg `#2A2A2A` [ESTIMATED]
- **Action:** No action (per flow.md)

### 4. Section Separator (between Quick Actions and Projects)
- **Top margin:** 8px [ESTIMATED]
- **Bottom margin:** 8px [ESTIMATED]
- **Visual:** Increased vertical spacing / subtle gap. There may be a 1px separator line or just vertical whitespace. Looking at the screenshot, the gap is implied by spacing rather than a visible line.
- **Implementation:** marginTop on the projects section provides the visual break

### 5. Section 2: Projects

#### "New project"
- **Icon:** Folder-plus or project-new icon (lucide: `FolderPlus`), 24px, color `#FFFFFF`
- **Text:** "New project"
  - Font size: 16px
  - Font weight: 500 (Medium)
  - Color: `#FFFFFF`
- **Height:** 48px [ESTIMATED]
- **Press state:** bg `#2A2A2A` [ESTIMATED]
- **Action:** No action (per flow.md)

#### Project Items ("Paisa", "Estudio")
- **Icon:** Folder icon (lucide: `Folder`), 24px, color `#FFFFFF`
- **Text:** Project name
  - Font size: 16px
  - Font weight: 400 (Regular)
  - Color: `#FFFFFF`
- **Height:** 48px [ESTIMATED]
- **Press state:** bg `#2A2A2A` [ESTIMATED]
- **Action:** No action (per flow.md)

#### "All projects"
- **Icon:** Three dots / ellipsis (lucide: `MoreHorizontal`), 24px, color `#FFFFFF`
- **Text:** "All projects"
  - Font size: 16px
  - Font weight: 400 (Regular)
  - Color: `#FFFFFF`
- **Height:** 48px [ESTIMATED]
- **Press state:** bg `#2A2A2A` [ESTIMATED]
- **Action:** No action (per flow.md)

### 6. Section 3: Chat History

A list of previous chat titles. These appear below the projects section with some visual separation.

#### Section Visual Separator
- Between projects and chat history there appears to be a subtle visual break -- possibly just spacing or a thin line at `#2A2A2A` [ESTIMATED].

#### Chat History Items
- **Layout:** Simple text rows, no icons
- **Height:** 44px per item [ESTIMATED]
- **Padding horizontal:** 16px (same as sidebar padding -- note: these items do NOT have the extra left indent that icon-bearing items have, so the text starts at the sidebar's left padding, not at the icon-text alignment of menu items)
- **Padding vertical:** 12px [ESTIMATED]
- **Typography:**
  - Font size: 15px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Color: `#D4D4D4` [ESTIMATED]
  - Number of lines: 1 (truncated with ellipsis if too long)
- **Active item (currently open chat):**
  - Background: `#2F2F2F` [ESTIMATED]
  - Border radius: 8px [ESTIMATED]
  - Text color: `#FFFFFF`
  - **Note from screenshot:** The active item ("Presidentes populares del mundo") has a subtle gray background that distinguishes it. The highlight appears to span the full width of the sidebar panel (edge to edge, not inset). Verify whether the border-radius is 8px with inset or 0px with full-bleed on device [ESTIMATED].
- **Non-active items:**
  - Background: transparent
- **Press state:** bg `#2A2A2A` [ESTIMATED]
- **Action:** Navigate to that chat (renders on top, no slide animation per flow.md)

#### Example chat items from screenshot:
1. "Presidentes populares del mundo" (this appears to be the active one -- highlighted)
2. "Presidentes populares e influyentes"
3. "Division de numeros"
4. "Presidentes populares e influyentes"
5. "Presidentes mas populares"
6. "Liberalism according to Benegas Lynch"
7. "Notificaciones Push Expo"
8. "Temperatura de hoy"

### 7. Fixed Footer

#### User Row
- **Position:** Fixed to bottom of sidebar, above safe area
- **Padding:** 16px horizontal, 12px vertical [ESTIMATED]
- **Border top:** possibly 1px `#2A2A2A` [ESTIMATED] or no border (spacing alone)
- **Layout:** Horizontal row, vertically centered
- **Full width pressable** (the entire footer row is one tap target)

##### Avatar
- **Shape:** Circle
- **Size:** 32px diameter [ESTIMATED]
- **Background:** `#7C3AED` [ESTIMATED] (purple)
- **Initials:** "ML" (for "Mateo Lorenzo")
  - Font size: 13px [ESTIMATED]
  - Font weight: 600 (SemiBold)
  - Color: `#FFFFFF`
  - Text align: center (both axes)

##### User Name
- **Text:** "Mateo Lorenzo"
- **Left margin:** 12px from avatar [ESTIMATED]
- **Typography:**
  - Font size: 16px
  - Font weight: 500 (Medium)
  - Color: `#FFFFFF`

##### Chevron
- **Icon:** ChevronDown or ChevronRight (lucide: `ChevronDown`)
  - Looking at screenshot: appears to be a small down chevron
- **Size:** 16px [ESTIMATED]
- **Color:** `#9A9A9A` [ESTIMATED]
- **Left margin:** 4px [ESTIMATED]

#### Press state:
- Background: `#2A2A2A` [ESTIMATED]
- **Action:** Navigate to Settings with SLIDE animation (push navigation)

### 8. Overlay (Right Side)
- Same as unauth sidebar overlay
- **Background:** `#000000` at 50% opacity
- **Pressable:** Closes sidebar
- **Content behind:** The active chat content is partially visible (text, headers, etc.)

---

## Component Breakdown

| Component | Reusable? | Notes |
|---|---|---|
| `SidebarPanel` | Yes | Same container as unauth sidebar, different content. |
| `SidebarSearchInput` | Yes | Pill-shaped search input with icon. Transforms on focus (see 01b spec). |
| `SidebarMenuItem` | Yes | Icon + text row. Used for New chat, Images, Apps, projects, etc. Variants: with icon types (SquarePen, ImagePlus, LayoutGrid, Folder, FolderPlus, MoreHorizontal). |
| `SidebarChatItem` | Yes | Text-only row for chat history. Active variant has highlighted bg. |
| `SidebarUserFooter` | Yes | Avatar circle + name + chevron. Full-width pressable. |
| `UserAvatar` | Yes | Circle with initials. Color could be derived from user name hash. |
| `SidebarOverlay` | Yes | Same as unauth sidebar. |
| `IconButton` | Yes | Compose/new-chat icon button in header. |

---

## Dark Mode Values

- Sidebar bg: `#171717`
- Search input bg: `#2F2F2F`
- Search placeholder: `#9A9A9A`
- Menu items: icon `#FFFFFF`, text `#FFFFFF`
- Chat items: text `#D4D4D4`, active bg `#2F2F2F`, active text `#FFFFFF`
- Footer: avatar bg `#7C3AED`, name `#FFFFFF`, chevron `#9A9A9A`
- Overlay: `#000000` at 50% opacity
- Press bg: `#2A2A2A`
- Separator: `#2A2A2A` (if visible)

---

## Interactive States

### Search Input
- **Normal:** bg `#2F2F2F`, placeholder visible, search icon visible
- **Pressed/Focused:** Triggers expansion to full-screen search mode (see 01b spec)

### Menu Items (New chat, Images, Apps, projects)
- **Normal:** transparent bg
- **Pressed:** bg `#2A2A2A` [ESTIMATED], border-radius 8px [ESTIMATED]

### Chat History Items
- **Normal (inactive):** transparent bg, text `#D4D4D4`
- **Active (current chat):** bg `#2F2F2F`, border-radius 8px, text `#FFFFFF`
- **Pressed (inactive):** bg `#2A2A2A`

### User Footer Row
- **Normal:** transparent bg
- **Pressed:** bg `#2A2A2A` [ESTIMATED]

### Compose Icon
- **Normal:** full opacity
- **Pressed:** opacity 0.7 [ESTIMATED]

---

## Animations

### Sidebar Open/Close
- Same as unauth sidebar (slide from left, ~300ms, ease-in-out)
- Overlay fades in/out simultaneously

### Scroll
- Standard scroll behavior within the middle section
- Header and footer remain fixed (not affected by scroll)
- Scroll indicator: default thin bar, color auto (system default)

### Chat Item Selection
- **On tap:** Immediate background highlight, then sidebar closes with slide-out animation
- The selected chat renders "on top" with no push/slide animation (per flow.md)

### Keyboard
- Closes automatically when sidebar opens (per flow.md)

---

## Scroll Behavior Details

- **Scrollable area:** Everything between the fixed header and fixed footer
- **Content:** Quick Actions + Projects + Chat History
- **Scroll direction:** Vertical only
- **Overscroll:** Standard platform bounce/glow
- **If chat history is very long:** The list scrolls, and the last visible item may be partially clipped
- **Performance:** Use FlashList for the chat history items (per CLAUDE.md rules)
- **Estimated item size:** 44px [ESTIMATED]

---

## Data Structure Notes (for mock data)

The sidebar needs the following mock data:
1. Quick action items (static): New chat, Images, Apps
2. Projects list: Array of { id, name } -- e.g., [{name: "Paisa"}, {name: "Estudio"}]
3. Chat history: Array of { id, title, isActive } -- 8-15 items with Spanish/English titles
4. User info: { name: "Mateo Lorenzo", initials: "ML", avatarColor: "#7C3AED" }
