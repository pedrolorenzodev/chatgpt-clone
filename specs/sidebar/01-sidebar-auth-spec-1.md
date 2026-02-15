# 01 Sidebar (Authenticated) -- Spec (Revision 1)

**File reference:** `/references/sidebar/01_sidebar-auth.jpg`
**Auth state:** Authenticated
**Purpose:** Full-featured sidebar for logged-in users. Contains a search input, new chat compose button, quick action shortcuts (Images, Apps), projects section, scrollable chat history, and a user footer with avatar and name.

---

## Screen Overview

The sidebar slides in from the left, covering approximately 75-80% of the screen width. The right side shows the current chat dimmed behind a semi-transparent overlay. The sidebar has a dark background (`#171717`). The screen is organized into three vertical zones:

1. **Fixed header:** Search input (pill-shaped, gray bg) + compose icon button (SquarePen), pinned at the top
2. **Scrollable middle:** Quick actions (New chat, Images, Apps), Projects section (New project, individual projects, All projects), and Chat history (list of previous chat titles)
3. **Fixed footer:** User avatar + name + down chevron, pinned at the bottom

The currently active chat is highlighted with a subtle gray background in the chat history list.

---

## Layout Structure

```
Container (position: absolute, full screen, flexDirection: row)
  Sidebar Panel (width: ~80%, bg: #171717, flex: 1)
    SafeArea Top
    Fixed Header (paddingHorizontal: 16)
      Row: [Search Input (flex: 1)] [gap: 12px] [Compose IconButton]
    Scrollable Content (flex: 1)
      Section 1: Quick Actions
        SidebarMenuItem: "New chat" (SquarePen icon)
        SidebarMenuItem: "Images" (image-generation icon)
        SidebarMenuItem: "Apps" (grid icon)
      Visual Separator / Spacer (16px gap)
      Section 2: Projects
        SidebarMenuItem: "New project" (FolderPlus icon)
        SidebarMenuItem: "Paisa" (Folder icon)
        SidebarMenuItem: "Estudio" (Folder icon)
        SidebarMenuItem: "All projects" (MoreHorizontal icon)
      Visual Separator / Spacer
      Section 3: Chat History (FlashList)
        SidebarChatItem: "Presidentes populares del mundo" (active)
        SidebarChatItem: "Presidentes populares e influyentes"
        SidebarChatItem: "Division de numeros"
        SidebarChatItem: "Presidentes populares e influyentes"
        SidebarChatItem: "Presidentes mas populares"
        SidebarChatItem: "Liberalism according to Benegas Lynch"
        SidebarChatItem: "Notificaciones Push Expo"
        SidebarChatItem: "Temperatura de hoy"
        ... (scrollable)
    Fixed Footer (paddingHorizontal: 16)
      UserRow: [Avatar (circle, purple)] [Name: "Mateo Lorenzo"] [ChevronDown]
    SafeArea Bottom
  Overlay (flex: 1, bg: rgba(0,0,0,0.5), Pressable)
```

---

## Element-by-Element Specification

### 1. Sidebar Panel
- **Position:** Left side, full height
- **Width:** ~80% of screen width [ESTIMATED]
- **Background:** `#171717`
- **Padding top:** Safe area top
- **Padding bottom:** 0 (footer handles its own padding)

### 2. Fixed Header

The header is positioned at the very top of the sidebar, below the safe area. It is NOT part of the scroll area -- it stays fixed.

#### Header Row
- **Layout:** `flexDirection: 'row'`, `alignItems: 'center'`
- **Padding horizontal:** 16px [ESTIMATED]
- **Padding vertical:** 8px [ESTIMATED]
- **Height:** ~60px total (44px input + vertical padding) [ESTIMATED]

#### Search Input (collapsed / non-focused)
- **Flex:** 1 (takes remaining width after compose button)
- **Height:** 44px [ESTIMATED]
- **Border radius:** 22px (fully rounded pill) [ESTIMATED]
- **Background:** `#2F2F2F`
- **Border:** none
- **Padding horizontal:** 16px [ESTIMATED]
- **Content layout:** `flexDirection: 'row'`, `alignItems: 'center'`
  - **Search icon** (lucide: `Search`): 20px, color `#9A9A9A` [ESTIMATED]
  - **Gap:** 10px [ESTIMATED]
  - **Placeholder text:** "Search"
    - Font size: 16px
    - Font weight: 400 (Regular)
    - Color: `#9A9A9A` [ESTIMATED]
- **Behavior:** In collapsed state, this is a Pressable (NOT an active TextInput). Tapping it triggers the search focus expansion animation (see spec 01b).

#### Compose Icon Button (SquarePen)
- **Position:** Right side of header row
- **Left margin:** 12px from search input [ESTIMATED]
- **Icon:** SquarePen (lucide: `SquarePen`)
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Container:**
  - Width: 40px [ESTIMATED]
  - Height: 40px [ESTIMATED]
  - Background: transparent
  - Border radius: 8px [ESTIMATED]
- **Press state:** Opacity 0.7 [ESTIMATED]
- **Action:** Close sidebar, create new empty ChatScreen

### 3. Section 1: Quick Actions

Three menu items with icons, stacked vertically. This is the first section in the scrollable area.

#### Common properties for all quick action items:
- **Height:** 48px per row [ESTIMATED]
- **Padding horizontal:** 16px
- **Layout:** `flexDirection: 'row'`, `alignItems: 'center'`
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Icon-to-text gap:** 16px [ESTIMATED]
- **Press state:** bg `#2A2A2A` [ESTIMATED] with border-radius 8px [ESTIMATED]

#### "New chat"
- **Icon:** SquarePen (lucide: `SquarePen`)
- **Text:** "New chat"
  - Font size: 16px
  - Font weight: 500 (Medium)
  - Color: `#FFFFFF`
- **Action:** Same as compose icon (creates new chat, closes sidebar)

#### "Images"
- **Icon:** Image generation icon -- appears to be a stylized image/photo icon with sparkles or artistic flourish. Best match: custom asset or lucide `ImagePlus`. Looking at the screenshot closely, it resembles a square image icon with a small wave/sparkle element.
  - Use lucide `Image` or a custom SVG [ESTIMATED]
- **Text:** "Images"
  - Same typography as "New chat"
- **Action:** No action (per flow.md)

#### "Apps"
- **Icon:** Grid of 4 circles/dots (lucide: `LayoutGrid` or a custom 2x2 grid icon). The screenshot shows what appears to be 4 small circles arranged in a 2x2 grid.
  - Use lucide `LayoutGrid` [ESTIMATED]
- **Text:** "Apps"
  - Same typography as "New chat"
- **Action:** No action (per flow.md)

### 4. Section Separator (Quick Actions to Projects)
- **Type:** Vertical spacing -- examining the screenshot, the separation between "Apps" and "New project" is notably larger than the spacing between items within a section
- **Gap:** ~16px [ESTIMATED] additional vertical space
- **No visible line** -- just whitespace separation [ESTIMATED]

### 5. Section 2: Projects

#### "New project"
- **Icon:** Folder with a plus/create indicator (lucide: `FolderPlus`)
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Text:** "New project"
  - Font size: 16px
  - Font weight: 500 (Medium)
  - Color: `#FFFFFF`
- **Height:** 48px [ESTIMATED]
- **Press state:** bg `#2A2A2A` [ESTIMATED]
- **Action:** No action (per flow.md)

#### Project Items ("Paisa", "Estudio")
- **Icon:** Folder icon (lucide: `Folder`)
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Text:** Project name (e.g., "Paisa", "Estudio")
  - Font size: 16px
  - Font weight: 400 (Regular) -- note: project names use regular weight, not medium
  - Color: `#FFFFFF`
- **Height:** 48px [ESTIMATED]
- **Press state:** bg `#2A2A2A` [ESTIMATED]
- **Action:** No action (per flow.md)

#### "All projects"
- **Icon:** Three horizontal dots (lucide: `MoreHorizontal`)
  - Note: Looking at the screenshot, the icon for "All projects" appears to be three dots (ellipsis). This is a `MoreHorizontal` icon.
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Text:** "All projects"
  - Font size: 16px
  - Font weight: 400 (Regular)
  - Color: `#FFFFFF`
- **Height:** 48px [ESTIMATED]
- **Press state:** bg `#2A2A2A` [ESTIMATED]
- **Action:** No action (per flow.md)

### 6. Section Separator (Projects to Chat History)
- **Type:** Subtle visual break -- there may be a thin line or just increased spacing
- **Gap or line color:** `#2A2A2A` if a line, or just ~12px vertical gap [ESTIMATED]

### 7. Section 3: Chat History

A scrollable list of previous chat conversation titles. These are text-only items (no icons).

#### Chat History Item (general)
- **Layout:** Simple text row, no icon
- **Height:** 44px per item [ESTIMATED]
- **Padding horizontal:** 16px (left-aligned to sidebar padding, NOT indented to icon-text alignment)
- **Padding vertical:** 12px [ESTIMATED]
- **Typography:**
  - Font size: 15px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Color: `#D4D4D4` [ESTIMATED] -- slightly dimmer than pure white
  - Number of lines: 1
  - Ellipsize mode: tail (truncate with "..." if text is too long)

#### Active Chat Item (currently open chat)
- **Background:** `#2F2F2F` [ESTIMATED] -- a subtle gray highlight
- **Border radius:** 8px [ESTIMATED]
- **Text color:** `#FFFFFF` (brighter than inactive items)
- **The highlight spans the full item width** within the sidebar padding area
- In the screenshot, "Presidentes populares del mundo" appears to be the active/highlighted item

#### Inactive Chat Items
- **Background:** transparent
- **Text color:** `#D4D4D4` [ESTIMATED]

#### Press state (inactive items):
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 8px [ESTIMATED]

#### Example chat items from screenshot:
1. "Presidentes populares del mundo" **(active -- highlighted bg)**
2. "Presidentes populares e influyentes"
3. "Division de numeros"
4. "Presidentes populares e influyentes"
5. "Presidentes mas populares"
6. "Liberalism according to Benegas Lynch"
7. "Notificaciones Push Expo"
8. "Temperatura de hoy"

### 8. Fixed Footer

The footer is pinned to the bottom of the sidebar, NOT part of the scroll area.

#### User Row
- **Layout:** `flexDirection: 'row'`, `alignItems: 'center'`
- **Width:** 100% of sidebar panel
- **Padding horizontal:** 16px [ESTIMATED]
- **Padding vertical:** 14px [ESTIMATED]
- **Entire row is pressable** (one big tap target)
- **Border top:** None visible [ESTIMATED] -- the footer appears to have just spacing separation from the scroll content

##### Avatar Circle
- **Shape:** Perfect circle
- **Size:** 32px diameter [ESTIMATED]
- **Background:** `#7C3AED` [ESTIMATED] (purple)
- **Initials:** "ML" (derived from "Mateo Lorenzo")
  - Font size: 13px [ESTIMATED]
  - Font weight: 600 (SemiBold)
  - Color: `#FFFFFF`
  - Text align: center (both horizontally and vertically)
  - Text transform: uppercase

##### User Name
- **Text:** "Mateo Lorenzo"
- **Left margin:** 12px from avatar [ESTIMATED]
- **Typography:**
  - Font size: 16px
  - Font weight: 500 (Medium)
  - Color: `#FFFFFF`
- **Flex:** 1 (takes available space, will truncate if too long)
- **Number of lines:** 1

##### Chevron
- **Icon:** Down chevron (lucide: `ChevronDown`)
- **Size:** 16px [ESTIMATED]
- **Color:** `#9A9A9A` [ESTIMATED]
- **Left margin:** 4px [ESTIMATED]

#### Footer Press State:
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 8px [ESTIMATED]
- **Action:** Navigate to Settings screen with SLIDE (push) animation

### 9. Overlay (Right Side)
- **Position:** Fills remaining screen space right of the sidebar
- **Flex:** 1
- **Background:** `#000000` at 50% opacity
- **Pressable:** Tap closes sidebar
- **No visual press feedback**
- **Content behind:** The active ChatScreen is partially visible -- text, headers, rendered markdown, etc. are faintly visible through the overlay

---

## Component Breakdown

| Element | Component | Reusable? | Notes |
|---|---|---|---|
| Sidebar panel | `SidebarPanel` | Yes | Same container as unauth sidebar |
| Search input | `SidebarSearchInput` | Yes | Has collapsed/expanded states (see 01b spec) |
| Compose button | `IconButton` | Yes | Generic icon-only button |
| Menu items | `SidebarMenuItem` | Yes | Icon + text row with multiple icon variants |
| Chat items | `SidebarChatItem` | Yes | Text-only row with active/inactive states |
| User footer | `SidebarUserFooter` | Yes | Avatar + name + chevron row |
| Avatar | `UserAvatar` | Yes | Circle with initials and color |
| Overlay | `SidebarOverlay` | Yes | Same as unauth sidebar |

---

## Dark Mode Values

| Element | Value |
|---|---|
| Sidebar bg | `#171717` |
| Search input bg | `#2F2F2F` |
| Search icon | `#9A9A9A` [ESTIMATED] |
| Search placeholder | `#9A9A9A` [ESTIMATED] |
| Compose icon | `#FFFFFF` |
| Menu item icon | `#FFFFFF` |
| Menu item text | `#FFFFFF` |
| Chat item text (inactive) | `#D4D4D4` [ESTIMATED] |
| Chat item text (active) | `#FFFFFF` |
| Chat item bg (active) | `#2F2F2F` [ESTIMATED] |
| Chat item bg (pressed) | `#2A2A2A` [ESTIMATED] |
| Menu item bg (pressed) | `#2A2A2A` [ESTIMATED] |
| Avatar bg | `#7C3AED` [ESTIMATED] |
| Avatar initials | `#FFFFFF` |
| User name | `#FFFFFF` |
| Chevron | `#9A9A9A` [ESTIMATED] |
| Overlay | `#000000` at 50% opacity |
| Section separator | `#2A2A2A` [ESTIMATED] (if line) or spacing only |

---

## Interactive States

### Search Input (collapsed)
| State | Effect |
|---|---|
| Normal | bg `#2F2F2F`, search icon + placeholder visible |
| Pressed | Triggers expansion to full-screen search (01b spec) |

### Menu Items (New chat, Images, Apps, projects)
| State | Background | Border Radius |
|---|---|---|
| Normal | transparent | -- |
| Pressed | `#2A2A2A` | 8px |

### Chat History Items
| State | Background | Text Color | Border Radius |
|---|---|---|---|
| Inactive | transparent | `#D4D4D4` | -- |
| Active (current chat) | `#2F2F2F` | `#FFFFFF` | 8px |
| Pressed (inactive) | `#2A2A2A` | `#D4D4D4` | 8px |

### User Footer Row
| State | Background |
|---|---|
| Normal | transparent |
| Pressed | `#2A2A2A` |

### Compose Icon
| State | Opacity |
|---|---|
| Normal | 1.0 |
| Pressed | 0.7 |

---

## Animations

### Sidebar Open/Close
- Same as unauth sidebar:
  - Slide from left, ~300ms, ease-in-out
  - Overlay fades in/out simultaneously
  - Keyboard closes automatically on open

### Scroll Behavior
- Standard vertical scroll within the middle section
- Header and footer remain fixed (NOT affected by scroll)
- Scroll indicator: default thin bar, color determined by system
- Overscroll: standard platform bounce (iOS) or glow (Android)

### Chat Item Selection
1. User taps a chat item in the history
2. The item shows press highlight (`#2A2A2A`)
3. Sidebar closes with standard slide-out animation
4. The selected chat renders on the main screen (no push/slide -- renders on top, per flow.md)

---

## Scroll Behavior Details

- **Scrollable area:** The region between the fixed header and fixed footer
- **Sections in scroll:** Quick Actions + Projects + Chat History
- **Scroll direction:** Vertical only
- **If chat history is very long:** The entire scrollable area scrolls, including Quick Actions and Projects scrolling off the top
- **Performance:** Use `FlashList` for the chat history portion. Quick Actions and Projects can be rendered as `ListHeaderComponent` or as regular Views above the FlashList.
- **Estimated item size for FlashList:** 44px [ESTIMATED]

---

## Mock Data Requirements

The sidebar needs the following hardcoded mock data:

1. **Quick actions:** Static array of 3 items: [{icon: "SquarePen", label: "New chat"}, {icon: "Image", label: "Images"}, {icon: "LayoutGrid", label: "Apps"}]
2. **Projects:** Array of {id, name}: [{name: "Paisa"}, {name: "Estudio"}]
3. **Chat history:** Array of {id, title, isActive}: 8-15 items with Spanish/English titles matching the screenshot
4. **User info:** {name: "Mateo Lorenzo", initials: "ML", avatarColor: "#7C3AED"}
