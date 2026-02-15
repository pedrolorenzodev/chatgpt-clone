# 01 Welcome Screen -- Spec

**File reference:** `/references/auth/01_welcome-screen.jpg`
**Auth state:** Unauthenticated
**Purpose:** First screen shown on fresh install. Introduces ChatGPT, lists disclaimers, and provides a single "Continue" CTA to enter the app as an unauthenticated user.

---

## Screen Overview

Full-screen dark layout with a large title at the top, two informational cards in the middle, a legal disclaimer card near the bottom, and a full-width "Continue" button pinned to the bottom. The screen does NOT scroll -- all content fits within the viewport.

---

## Layout Structure

```
SafeAreaView (flex: 1, bg: #000000)
  StatusBar (light-content)
  ScrollView / Main Content (flex: 1, paddingHorizontal: 24)
    Title Block
      Text: "Welcome to ChatGPT"
    Subtitle Block
      Text: "This official app is free, syncs your history across devices, ..."
    Info Card 1 (icon + text block)
      Icon: magnifying glass (Search icon)
      Text block:
        Title: "ChatGPT can be inaccurate"
        Description: "ChatGPT may provide inaccurate information ..."
    Separator Line
    Info Card 2 (icon + text block)
      Icon: lock/shield
      Text block:
        Title: "Don't share sensitive info"
        Description: "Chats may be reviewed and used for training."
        Link: "Learn about your choices."
  Bottom Pinned Section (paddingHorizontal: 24)
    Terms Card
      Text: "By continuing, you agree to our Terms and have read our Privacy Policy."
    Continue Button
      Text: "Continue"
```

---

## Element-by-Element Specification

### 1. Status Bar Area
- Standard Android/iOS status bar
- Style: light-content (white text/icons on dark bg)
- Background: `#000000`

### 2. Title: "Welcome to ChatGPT"
- **Position:** Top of content area, left-aligned
- **Top margin:** ~60px from top of safe area [ESTIMATED]
- **Typography:**
  - Font size: 36px
  - Font weight: 700 (Bold)
  - Line height: 42px [ESTIMATED]
  - Letter spacing: -0.5px [ESTIMATED]
  - Color: `#FFFFFF`
- **Padding left:** 24px (screen padding)

### 3. Subtitle Text
- **Text:** "This official app is free, syncs your history across devices, and brings you the latest model improvements from OpenAI."
- **Position:** Below title
- **Top margin:** 12px below title [ESTIMATED]
- **Typography:**
  - Font size: 17px
  - Font weight: 400 (Regular)
  - Line height: 24px [ESTIMATED]
  - Color: `#D4D4D4` [ESTIMATED] -- slightly off-white, not pure white
- **Max width:** Full width minus 48px (24px padding each side)

### 4. Info Card 1 -- "ChatGPT can be inaccurate"
- **Position:** Below subtitle
- **Top margin:** 32px below subtitle [ESTIMATED]
- **Layout:** Horizontal row (icon left, text block right)
- **Icon:**
  - Type: Magnifying glass (lucide: `Search`)
  - Size: 28px [ESTIMATED]
  - Color: `#FFFFFF`
  - Stroke width: 1.5px [ESTIMATED]
  - Left-aligned with screen padding
  - Vertically aligned to top of text block
- **Text block:**
  - Left margin: 16px from icon [ESTIMATED]
  - **Title:** "ChatGPT can be inaccurate"
    - Font size: 17px
    - Font weight: 600 (SemiBold)
    - Color: `#FFFFFF`
    - Line height: 22px [ESTIMATED]
  - **Description:** "ChatGPT may provide inaccurate information about people, places, or facts."
    - Font size: 15px [ESTIMATED]
    - Font weight: 400 (Regular)
    - Color: `#9A9A9A` [ESTIMATED]
    - Line height: 21px [ESTIMATED]
    - Top margin: 4px below title

### 5. Separator Line
- **Position:** Below Info Card 1
- **Top margin:** 24px [ESTIMATED]
- **Dimensions:**
  - Width: full content width (screen width - 48px padding)
  - Height: 1px
  - Left/right: 24px padding
- **Color:** `#2A2A2A` [ESTIMATED]

### 6. Info Card 2 -- "Don't share sensitive info"
- **Position:** Below separator
- **Top margin:** 24px [ESTIMATED]
- **Layout:** Same as Info Card 1 (horizontal row)
- **Icon:**
  - Type: Lock/Shield icon (lucide: `ShieldCheck` or `Lock`)
  - Size: 28px [ESTIMATED]
  - Color: `#FFFFFF`
  - Stroke width: 1.5px [ESTIMATED]
- **Text block:**
  - Same spacing as Card 1
  - **Title:** "Don't share sensitive info"
    - Same typography as Card 1 title
  - **Description:** "Chats may be reviewed and used for training."
    - Same typography as Card 1 description
  - **Link:** "Learn about your choices."
    - Same font as description
    - Color: `#FFFFFF`
    - Text decoration: underline
    - Top margin: 0px (inline with description or on next line)
    - Pressable with no navigation in clone

### 7. Terms Card / Disclaimer Box
- **Position:** Pinned near bottom, above Continue button
- **Bottom margin:** 16px above Continue button [ESTIMATED]
- **Dimensions:**
  - Width: full content width (screen width - 48px)
  - Padding: 16px horizontal, 16px vertical [ESTIMATED]
  - Border radius: 12px [ESTIMATED]
  - Background: `#141414` [ESTIMATED] -- very subtle dark card, barely visible
  - Border: 1px solid `#2A2A2A` [ESTIMATED]
- **Text:** "By continuing, you agree to our Terms and have read our Privacy Policy."
  - Font size: 14px
  - Font weight: 400 (Regular)
  - Line height: 20px [ESTIMATED]
  - Color: `#9A9A9A` [ESTIMATED]
  - Text align: left
- **Links within text:**
  - "Terms" -- underlined, color `#FFFFFF` [ESTIMATED], tappable (no action in clone)
  - "Privacy Policy" -- underlined, color `#FFFFFF` [ESTIMATED], tappable (no action in clone)

### 8. Continue Button
- **Position:** Bottom of screen, full width
- **Bottom margin:** 24px from bottom safe area [ESTIMATED]
- **Dimensions:**
  - Width: screen width - 48px (24px margin each side)
  - Height: 52px
  - Border radius: 26px (fully rounded / pill shape)
- **Background:** `#FFFFFF`
- **Text:** "Continue"
  - Font size: 16px
  - Font weight: 600 (SemiBold)
  - Color: `#000000`
  - Text align: center
- **Press state:**
  - Opacity: 0.85 [ESTIMATED] on press
- **Action:** Navigate to ChatScreen (unauth)

---

## Component Breakdown

| Component | Reusable? | Notes |
|---|---|---|
| `InfoCard` | Yes | Icon + title + description layout. Used twice on this screen. Could also be used in settings. |
| `PrimaryButton` | Yes | Full-width pill button. Same pattern on bottom sheet and login screen. |
| `LinkText` | Yes | Underlined text link. Used for Terms, Privacy Policy, Learn about your choices. |

---

## Dark Mode Values (Primary)

All values above are dark mode. This screen has no light mode variant.

- Screen background: `#000000`
- Text: `#FFFFFF` (primary), `#D4D4D4` (subtitle), `#9A9A9A` (secondary)
- Separator: `#2A2A2A`
- Terms card bg: `#141414`
- Button: white bg `#FFFFFF`, black text `#000000`

---

## Interactive States

### Continue Button
- **Normal:** bg `#FFFFFF`, text `#000000`
- **Pressed:** bg `#FFFFFF` with opacity 0.85 [ESTIMATED], slight scale down 0.98 [ESTIMATED]
- **Disabled:** N/A (always enabled on this screen)

### Link Text (Terms, Privacy Policy, Learn about your choices)
- **Normal:** underlined, white or secondary color
- **Pressed:** opacity 0.7 [ESTIMATED]

---

## Animations

- **Screen entry:** None (this is the initial screen)
- **Screen exit:** Standard push navigation to ChatScreen
- **No scroll animations** -- content is static
- **Button press:** Quick opacity/scale feedback (~150ms)
