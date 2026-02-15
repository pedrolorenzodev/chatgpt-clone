# 01 Welcome Screen -- Spec (Revision 1)

**File reference:** `/references/auth/01_welcome-screen.jpg`
**Auth state:** Unauthenticated
**Purpose:** First screen shown on fresh install. Introduces ChatGPT, lists disclaimers, and provides a single "Continue" CTA to enter the app as an unauthenticated user.

---

## Screen Overview

Full-screen dark layout. The screen has a pure black background (`#000000`). Content is arranged vertically: a large bold title at the top, a multi-line subtitle description, two informational cards (icon + text) separated by a horizontal divider, a legal disclaimer card near the bottom, and a full-width pill-shaped "Continue" button pinned at the bottom edge. The screen does NOT scroll; all content fits within the viewport. No header bar is present.

---

## Layout Structure

```
SafeAreaView (flex: 1, bg: #000000)
  StatusBar (style: light-content, bg: #000000)
  Content Container (flex: 1, paddingHorizontal: 24)
    Top Spacer (~16px below safe area)
    Title: "Welcome to ChatGPT"
    Subtitle: "This official app is free, syncs your history across..."
    Spacer (~32px)
    InfoCard 1: magnifying glass icon + "ChatGPT can be inaccurate" + description
    Separator Line (full content width, 1px)
    Spacer (~24px)
    InfoCard 2: lock icon + "Don't share sensitive info" + description + link
    Flex Spacer (pushes bottom content down)
  Bottom Pinned Section (paddingHorizontal: 24)
    Terms Card (rounded card with legal text)
    Spacer (16px)
    Continue Button ("Continue")
    Bottom Safe Area padding (~24px)
```

---

## Element-by-Element Specification

### 1. Status Bar
- Style: `light-content` (white icons/text)
- Background blends with screen: `#000000`
- Standard system status bar (time, battery, signal, etc.)

### 2. Title: "Welcome to ChatGPT"
- **Text:** "Welcome to ChatGPT"
- **Position:** Top of content, left-aligned
- **Top margin:** ~16px below safe area top [ESTIMATED]
- **Typography:**
  - Font size: 36px
  - Font weight: 700 (Bold)
  - Line height: 44px [ESTIMATED]
  - Letter spacing: -0.5px [ESTIMATED]
  - Color: `#FFFFFF`
  - Text align: left
- **Horizontal padding:** 24px (from screen edges)
- **Number of lines:** Wraps to 2 lines on narrow devices; the word "ChatGPT" starts on line 1 after "to" and continues

### 3. Subtitle
- **Text:** "This official app is free, syncs your history across devices, and brings you the latest model improvements from OpenAI."
- **Position:** Below title
- **Top margin:** 16px [ESTIMATED]
- **Typography:**
  - Font size: 17px
  - Font weight: 400 (Regular)
  - Line height: 26px [ESTIMATED]
  - Letter spacing: 0
  - Color: `#B4B4B4` [ESTIMATED] -- off-white but clearly readable; slightly brighter than secondary text. Not pure white.
- **Horizontal padding:** 24px (inherits from parent)
- **Max lines:** Wraps naturally; ~3 lines on standard device width

### 4. InfoCard 1 -- "ChatGPT can be inaccurate"
- **Position:** Below subtitle
- **Top margin:** 36px [ESTIMATED]
- **Layout:** Horizontal `flexDirection: 'row'`, `alignItems: 'flex-start'`
- **Icon (left):**
  - Type: Magnifying glass (lucide: `Search`)
  - Size: 26px [ESTIMATED]
  - Color: `#FFFFFF`
  - Stroke width: 1.5
  - Vertically aligned to the top of the title text (flex-start)
  - The icon appears slightly larger than the typical 24px -- closer to 26-28px [ESTIMATED]
- **Text container (right):**
  - Left margin: 20px from icon [ESTIMATED]
  - Flex: 1 (takes remaining width)
  - **Title:** "ChatGPT can be inaccurate"
    - Font size: 17px
    - Font weight: 600 (SemiBold)
    - Line height: 22px [ESTIMATED]
    - Color: `#FFFFFF`
  - **Description:** "ChatGPT may provide inaccurate information about people, places, or facts."
    - Font size: 15px
    - Font weight: 400 (Regular)
    - Line height: 22px [ESTIMATED]
    - Color: `#9A9A9A` [ESTIMATED]
    - Top margin: 4px

### 5. Separator Line
- **Position:** Below InfoCard 1
- **Top margin:** 28px [ESTIMATED]
- **Bottom margin:** 28px [ESTIMATED]
- **Dimensions:**
  - Width: 100% of content area (screen width - 48px)
  - Height: 1px (hairline)
- **Color:** `#2A2A2A` [ESTIMATED] -- very subtle dark gray line
- **Note:** The separator is clearly visible in the screenshot between the two info cards

### 6. InfoCard 2 -- "Don't share sensitive info"
- **Position:** Below separator (with the bottom margin already providing spacing)
- **Layout:** Same as InfoCard 1 -- horizontal row
- **Icon (left):**
  - Type: Lock icon with a small shield shape (lucide: `Lock` -- looking at the screenshot it is a padlock icon, not a shield)
  - Size: 26px [ESTIMATED]
  - Color: `#FFFFFF`
  - Stroke width: 1.5
- **Text container (right):**
  - Same spacing as InfoCard 1
  - **Title:** "Don't share sensitive info"
    - Same typography as InfoCard 1 title
  - **Description line 1:** "Chats may be reviewed and used for training."
    - Same typography as InfoCard 1 description
  - **Link (inline or next line):** "Learn about your choices."
    - Appears to start on a new line directly below the description
    - Font size: 15px
    - Font weight: 400 (Regular)
    - Color: `#FFFFFF`
    - Text decoration: underline
    - The period is NOT underlined (part of normal text)
    - Pressable (no action in clone)
    - Top margin: 0px (continues as part of the text block; the link text wraps inline with the description)

### 7. Terms / Disclaimer Card
- **Position:** Near bottom of screen, above Continue button
- **Bottom margin:** 16px above Continue button [ESTIMATED]
- **Dimensions:**
  - Width: 100% of content area (screen width - 48px)
  - Padding horizontal: 20px [ESTIMATED]
  - Padding vertical: 20px [ESTIMATED]
  - Border radius: 16px [ESTIMATED] -- the card has clearly rounded corners visible in the screenshot
  - Background: `#111111` [ESTIMATED] -- extremely subtle dark card; barely distinguishable from the black background. Could also be `#0D0D0D` or similar very dark value.
  - Border: 1px solid `#222222` [ESTIMATED] -- there appears to be a very faint border around the card
- **Text:** "By continuing, you agree to our Terms and have read our Privacy Policy."
  - Font size: 15px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Line height: 22px [ESTIMATED]
  - Color: `#9A9A9A` [ESTIMATED]
  - Text align: left
- **Inline links:**
  - **"Terms"** -- underlined, color `#FFFFFF` [ESTIMATED], pressable (no action)
  - **"Privacy Policy"** -- underlined, color `#FFFFFF` [ESTIMATED], pressable (no action)
  - These are rendered inline within the text using attributed/rich text

### 8. Continue Button
- **Position:** Pinned to bottom of screen
- **Bottom margin:** ~24px above bottom safe area [ESTIMATED]
- **Top margin:** 16px below terms card [ESTIMATED]
- **Dimensions:**
  - Width: screen width - 48px (24px margin each side)
  - Height: 56px [ESTIMATED] -- looking at the screenshot, the button appears slightly taller than 52px
  - Border radius: 28px [ESTIMATED] (half of height, fully rounded pill shape)
- **Background:** `#FFFFFF`
- **Text:** "Continue"
  - Font size: 17px [ESTIMATED]
  - Font weight: 600 (SemiBold)
  - Color: `#000000`
  - Text align: center
- **Shadow:** None visible
- **Press state:**
  - Opacity: 0.85 [ESTIMATED]
  - Slight scale: 0.98 [ESTIMATED]
  - Duration: 100ms [ESTIMATED]
- **Action:** Navigate to ChatScreen (unauthenticated)

---

## Component Breakdown

| Element | Component | Reusable? | Notes |
|---|---|---|---|
| InfoCard 1 & 2 | `InfoCard` | Yes | Icon + title + description. Could be used in onboarding or settings. |
| Continue Button | `PrimaryButton` | Yes | Same pill button used on bottom sheet, login, sidebar. |
| "Terms" / "Privacy Policy" links | `LinkText` | Yes | Inline underlined link. Used in multiple auth screens. |
| Terms card | `TermsCard` | Possibly | Only appears here; but the card container pattern could be reused. |

---

## Dark Mode Values (Primary)

All values below are dark mode. No light mode variant exists.

| Element | Value |
|---|---|
| Screen background | `#000000` |
| Title text | `#FFFFFF` |
| Subtitle text | `#B4B4B4` [ESTIMATED] |
| InfoCard title | `#FFFFFF` |
| InfoCard description | `#9A9A9A` [ESTIMATED] |
| InfoCard icon | `#FFFFFF` |
| Separator | `#2A2A2A` [ESTIMATED] |
| Link text | `#FFFFFF` (underlined) |
| Terms card bg | `#111111` [ESTIMATED] |
| Terms card border | `#222222` [ESTIMATED] |
| Terms card text | `#9A9A9A` [ESTIMATED] |
| Button bg | `#FFFFFF` |
| Button text | `#000000` |

---

## Interactive States

### Continue Button
| State | Background | Text Color | Other |
|---|---|---|---|
| Normal | `#FFFFFF` | `#000000` | -- |
| Pressed | `#FFFFFF` at ~85% opacity | `#000000` | Scale 0.98 [ESTIMATED] |
| Disabled | N/A | N/A | Always enabled on this screen |

### Link Text (Terms, Privacy Policy, Learn about your choices)
| State | Color | Other |
|---|---|---|
| Normal | `#FFFFFF` (underlined) | -- |
| Pressed | `#FFFFFF` at ~70% opacity | -- |

---

## Animations

- **Screen entry:** None (this is the very first screen of the app)
- **Screen exit:** Standard navigation transition to ChatScreen. Per flow.md, the "Continue" button navigates to the chat screen.
- **No scroll animations** -- content is static and fits the viewport
- **Button press:** Quick opacity/scale feedback (~100-150ms)

---

## Accessibility

- `accessibilityLabel="Continue to ChatGPT"` on the Continue button
- `accessibilityRole="button"` on Continue
- `accessibilityRole="link"` on Terms, Privacy Policy, Learn about your choices
- All text should be readable by screen readers in the correct order (top to bottom)
