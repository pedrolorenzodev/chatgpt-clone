# 02 Auth Bottom Sheet -- Spec (Revision 1)

**File reference:** `/references/auth/02_auth-bottomsheet.jpg`
**Auth state:** Unauthenticated
**Purpose:** Modal bottom sheet prompting unauthenticated users to sign up or log in. Appears over the ChatScreen with a dimmed backdrop. Triggered from multiple entry points.

---

## Screen Overview

A bottom sheet slides up from the bottom edge of the screen, covering roughly the lower 40% of the viewport. Behind it, the ChatScreen (unauthenticated) is visible but dimmed through a semi-transparent black overlay. The bottom sheet contains: an "X" close button (top-right), a centered multi-line title, and three full-width stacked buttons -- "Continue with Google" (white/solid), "Sign up" (gray), and "Log in" (outline/transparent with border). The sheet has rounded top corners and a dark gray background.

---

## Triggers (Entry Points)

Per flow.md, this bottom sheet can be opened from:
1. Tap "Log in" button in the ChatScreen header (top-right)
2. Tap Camera/Photos/Files/Explore apps in Attachments BottomSheet
3. Tap microphone button (when unauthenticated)

---

## Layout Structure

```
Modal Container (position: absolute, full screen)
  Backdrop Overlay (position: absolute, full screen, bg: rgba(0,0,0,0.5))
    Pressable: tap to close
  BottomSheet (position: absolute, bottom: 0, width: 100%)
    Container (bg: #212121, borderTopLeftRadius: 20, borderTopRightRadius: 20)
      Close Button Row
        X icon (right-aligned)
      Content (paddingHorizontal: 24, alignItems: center)
        Title: "Sign up or log in to analyze images and files for free"
        Spacer (32px)
        "Continue with Google" Button (white, solid)
        Spacer (12px)
        "Sign up" Button (gray)
        Spacer (12px)
        "Log in" Button (outline)
      Bottom padding (safe area + 16px)
```

---

## Element-by-Element Specification

### 1. Backdrop Overlay
- **Position:** Absolute, fills entire screen (underneath the sheet)
- **Background:** `#000000` at 50% opacity (`rgba(0, 0, 0, 0.5)`)
- **Behavior:** Pressable -- tapping closes the bottom sheet
- **Z-index:** Below the bottom sheet container
- **Animation:** Fades in from 0 to 0.5 opacity simultaneously with sheet slide-up

### 2. Bottom Sheet Container
- **Position:** Absolute, anchored to bottom of screen
- **Width:** 100% screen width
- **Background:** `#212121` [ESTIMATED] -- dark gray, distinctly lighter than `#000000` but darker than `#2F2F2F`
- **Border radius:**
  - Top-left: 20px [ESTIMATED]
  - Top-right: 20px [ESTIMATED]
  - Bottom-left: 0
  - Bottom-right: 0
- **Padding top:** 16px [ESTIMATED]
- **Padding bottom:** safe area bottom + 20px [ESTIMATED]
- **Padding horizontal:** 24px
- **Shadow:** `0 -4px 20px rgba(0, 0, 0, 0.5)` [ESTIMATED] -- subtle upward shadow
- **Height:** Auto (wraps content). Approximately 400-420px [ESTIMATED] based on content

### 3. Close Button (X)
- **Position:** Top-right of the sheet content area
- **Alignment:** Right-aligned within the sheet's horizontal padding (so it sits at `right: 24px` within the sheet)
- **Top offset:** 16px from the top of the sheet container [ESTIMATED]
- **Icon:** X / Close (lucide: `X`)
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Icon stroke width:** 2px [ESTIMATED]
- **Touchable area:** 44x44px (accessibility minimum)
- **Press feedback:** Opacity 0.7 [ESTIMATED]
- **Action:** Closes bottom sheet (slide down + fade out backdrop)
- **NOTE:** The close button is on its own row at the top-right. The title text begins below it.

### 4. Title Text
- **Text:** "Sign up or log in to analyze images and files for free"
- **Position:** Below close button row, centered
- **Top margin:** 12px below the close button [ESTIMATED]
- **Typography:**
  - Font size: 24px [ESTIMATED]
  - Font weight: 700 (Bold) [ESTIMATED] -- the text appears bold in the screenshot
  - Line height: 32px [ESTIMATED]
  - Color: `#FFFFFF`
  - Text align: center
- **Max width:** Sheet width - 48px (24px padding each side)
- **Wrapping:** Text wraps to approximately 3 lines

### 5. "Continue with Google" Button
- **Position:** Below title
- **Top margin:** 32px below title [ESTIMATED]
- **Dimensions:**
  - Width: 100% of content area (sheet width - 48px)
  - Height: 52px
  - Border radius: 26px (pill shape)
- **Background:** `#FFFFFF`
- **Layout:** `flexDirection: 'row'`, `alignItems: 'center'`, `justifyContent: 'center'`
  - Google "G" multicolor icon: 20px [ESTIMATED]
    - Standard 4-color Google logo (blue, red, yellow, green)
    - This is an image/SVG asset, not a lucide icon
  - Gap: 10px [ESTIMATED]
  - Text: "Continue with Google"
    - Font size: 16px
    - Font weight: 600 (SemiBold)
    - Color: `#000000`
- **Press state:** Opacity 0.85 [ESTIMATED]
- **Action:** Navigate to auth/03 (login screen)

### 6. "Sign up" Button
- **Position:** Below Google button
- **Top margin:** 12px [ESTIMATED]
- **Dimensions:**
  - Width: 100% of content area
  - Height: 52px
  - Border radius: 26px (pill shape)
- **Background:** `#7A7A7A` [ESTIMATED] -- medium gray. Looking carefully at the screenshot, this gray appears slightly darker than the typical `#8E8E8E`. The button is clearly a solid gray, not outline.
- **Border:** None
- **Text:** "Sign up"
  - Font size: 16px
  - Font weight: 600 (SemiBold)
  - Color: `#FFFFFF`
  - Text align: center
- **Press state:** Opacity 0.85 [ESTIMATED]
- **Action:** Navigate to auth/03 (login screen)

### 7. "Log in" Button
- **Position:** Below Sign up button
- **Top margin:** 12px [ESTIMATED]
- **Dimensions:**
  - Width: 100% of content area
  - Height: 52px
  - Border radius: 26px (pill shape)
- **Background:** `transparent`
- **Border:** 1px solid `#555555` [ESTIMATED] -- examining the screenshot, the border appears slightly lighter than the typical `#3A3A3A`. It is clearly visible against the `#212121` sheet background.
- **Text:** "Log in"
  - Font size: 16px
  - Font weight: 600 (SemiBold)
  - Color: `#FFFFFF`
  - Text align: center
- **Press state:** Background `#2A2A2A` [ESTIMATED], border color unchanged
- **Action:** Navigate to auth/03 (login screen)

---

## Visible Background Content (Behind Bottom Sheet)

The ChatScreen (unauthenticated) is partially visible behind the overlay:
- **Header bar:** sidebar toggle button (left), "ChatGPT" title (center), "Log in" button (right)
- **Main area:** "What can I help with?" text centered, suggestion chips grid visible
- **The suggestion chips** ("Surprise me", "Make a plan", "Summarize text", "Analyze images") are partially visible, cut off by the bottom sheet
- **All background content is NOT interactive** while the sheet is open

---

## Component Breakdown

| Element | Component | Reusable? | Notes |
|---|---|---|---|
| Backdrop | `SidebarOverlay` or dedicated `BottomSheetBackdrop` | Yes | Same pattern as sidebar overlay |
| Sheet container | `@gorhom/bottom-sheet` | Yes | Use the library, not custom implementation |
| Close X | `IconButton` | Yes | Same icon button used elsewhere |
| Google button | `GoogleButton` / `PrimaryButton` with icon | Yes | Solid white variant; reused on login screen as outline variant |
| Sign up button | `PrimaryButton` variant `gray` | Yes | Same component, gray background variant |
| Log in button | `OutlineButton` | Yes | Same outline button pattern used on login screen |

---

## Dark Mode Values

| Element | Value |
|---|---|
| Backdrop | `#000000` at 50% opacity |
| Sheet bg | `#212121` [ESTIMATED] |
| Close icon | `#FFFFFF` |
| Title text | `#FFFFFF` |
| Google button bg | `#FFFFFF` |
| Google button text | `#000000` |
| Sign up button bg | `#7A7A7A` [ESTIMATED] |
| Sign up button text | `#FFFFFF` |
| Log in button bg | `transparent` |
| Log in button border | `#555555` [ESTIMATED] |
| Log in button text | `#FFFFFF` |

---

## Interactive States

### Bottom Sheet
- **Cannot be dismissed by swiping down** (per flow.md -- this is critical)
- **Closes via:** X button tap OR backdrop tap
- When it appears, the keyboard (if open) should be dismissed

### Buttons

| Button | Normal | Pressed |
|---|---|---|
| Continue with Google | bg `#FFFFFF` | opacity 0.85 |
| Sign up | bg `#7A7A7A` | opacity 0.85 |
| Log in | transparent, border `#555555` | bg `#2A2A2A` |
| Close (X) | opacity 1.0 | opacity 0.7 |

---

## Animations

### Bottom Sheet Entry
- **Type:** Slide up from below the screen bottom
- **Duration:** ~300ms
- **Easing:** `Easing.bezier(0.4, 0.0, 0.2, 1.0)` (Material standard ease-in-out)
- **Properties:**
  - Sheet: `translateY` from `sheetHeight` to `0`
  - Backdrop: opacity from `0` to `0.5`
- **Simultaneous:** Backdrop fade and sheet slide happen together

### Bottom Sheet Exit
- **Type:** Slide down + fade out backdrop
- **Duration:** ~300ms
- **Easing:** Same as entry
- **Properties:**
  - Sheet: `translateY` from `0` to `sheetHeight`
  - Backdrop: opacity from `0.5` to `0`
- **Triggered by:** X button tap or backdrop tap

### Navigation to Login Screen (auth/03)
- **Type:** Renders on top (no slide/push animation, per flow.md)
- **Triggered by:** "Sign up" or "Log in" button tap
- The bottom sheet should close/hide before or simultaneously with the login screen appearing

---

## Implementation Notes

1. Use `@gorhom/bottom-sheet` per CLAUDE.md rules
2. Set `enablePanDownToClose={false}` to prevent swipe-to-dismiss
3. The bottom sheet should use `backdropComponent` with the overlay style
4. The sheet's `snapPoints` should be set to the auto-calculated content height
5. When navigating to auth/03, consider whether the sheet should animate closed or just unmount
