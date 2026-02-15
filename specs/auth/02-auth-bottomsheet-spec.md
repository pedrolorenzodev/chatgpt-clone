# 02 Auth Bottom Sheet -- Spec

**File reference:** `/references/auth/02_auth-bottomsheet.jpg`
**Auth state:** Unauthenticated
**Purpose:** Modal bottom sheet prompting unauthenticated users to sign up or log in. Triggered from multiple entry points (header "Log in" button, attachment actions, microphone tap).

---

## Screen Overview

A bottom sheet overlays the current screen (ChatScreen unauth visible behind). The bottom sheet slides up from the bottom with a dark backdrop. It contains a title, "Continue with Google" button, "Sign up" button, and "Log in" button. An "X" close icon sits in the top-right area of the bottom sheet. The chat screen behind is partially visible with a dimmed overlay.

---

## Layout Structure

```
Backdrop Overlay (position: absolute, full screen)
  bg: #000000 at 50% opacity
  Pressable: tap to close

BottomSheet (animated, slides up from bottom)
  Container (bg: #212121, borderTopLeftRadius: 20, borderTopRightRadius: 20)
    Close Button (X icon, top-right)
    Content (paddingHorizontal: 24)
      Title Text: "Sign up or log in to analyze images and files for free"
      Spacer
      Button: "Continue with Google"
      Button: "Sign up"
      Button: "Log in"
    Bottom Safe Area padding
```

---

## Element-by-Element Specification

### 1. Backdrop Overlay
- **Position:** Absolute, covers entire screen
- **Background:** `#000000` at 50% opacity (`rgba(0, 0, 0, 0.5)`)
- **Behavior:** Pressable -- tap closes the bottom sheet
- **Z-index:** Below the bottom sheet

### 2. Bottom Sheet Container
- **Position:** Anchored to bottom of screen
- **Width:** 100% screen width
- **Background:** `#212121` [ESTIMATED] -- very dark gray, not pure black, not as bright as #2F2F2F
- **Border radius:** Top-left and top-right: 20px [ESTIMATED], bottom: 0
- **Padding top:** 20px [ESTIMATED]
- **Padding bottom:** safe area bottom + 24px [ESTIMATED]
- **Padding horizontal:** 24px
- **Shadow:** `0 -4px 20px rgba(0, 0, 0, 0.5)` [ESTIMATED]
- **Animation:** Slide up from off-screen bottom, ~300ms, ease-in-out
- **Height:** Auto (wraps content). Approximately 40% of screen height [ESTIMATED]

### 3. Close Button (X)
- **Position:** Top-right of bottom sheet, positioned ABOVE and to the right of the title
- **Top:** 16px from sheet top edge [ESTIMATED]
- **Right:** 24px from right edge [ESTIMATED] (aligned with content padding)
- **Icon:** X / Close (lucide: `X`)
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Icon stroke width:** 2px [ESTIMATED]
- **Hit area:** 44x44px (accessibility minimum)
- **Press feedback:** Opacity 0.7 [ESTIMATED]
- **Action:** Closes bottom sheet (slide down + fade backdrop)
- **Note:** In the screenshot, the X button is clearly right-aligned at the top of the sheet content, sitting on its own row before the title text begins

### 4. Title Text
- **Text:** "Sign up or log in to analyze images and files for free"
- **Position:** Below close button area, left-aligned
- **Top margin:** 16px below close button [ESTIMATED]
- **Typography:**
  - Font size: 24px
  - Font weight: 600 (SemiBold)
  - Line height: 32px [ESTIMATED]
  - Color: `#FFFFFF`
  - Text align: center
- **Max width:** Full sheet width minus 48px padding
- **Note:** The text is center-aligned and wraps to multiple lines

### 5. "Continue with Google" Button
- **Position:** Below title
- **Top margin:** 32px below title [ESTIMATED]
- **Dimensions:**
  - Width: 100% of content area (sheet width - 48px)
  - Height: 52px
  - Border radius: 26px (pill shape)
- **Background:** `#FFFFFF`
- **Layout:** Row, center-aligned
  - Google "G" icon (multicolor): 20px, left of text
  - Gap between icon and text: 10px [ESTIMATED]
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
- **Background:** `#8E8E8E` [ESTIMATED] -- medium gray, distinctly different from white
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
- **Border:** 1px solid `#5A5A5A` [ESTIMATED]
- **Text:** "Log in"
  - Font size: 16px
  - Font weight: 600 (SemiBold)
  - Color: `#FFFFFF`
  - Text align: center
- **Press state:** Background becomes `#2A2A2A` [ESTIMATED], opacity 0.9
- **Action:** Navigate to auth/03 (login screen)

---

## Visible Background Content (Behind Bottom Sheet)

The screenshot shows the ChatScreen (unauth) partially visible behind the bottom sheet and overlay:
- Header with sidebar button (left), "ChatGPT" title (center), "Log in" button (right)
- "What can I help with?" greeting text
- Suggestion chips grid (partially visible, cut off by bottom sheet)
- This content is NOT interactive while the bottom sheet is open

---

## Component Breakdown

| Component | Reusable? | Notes |
|---|---|---|
| `BottomSheet` | Yes | Generic animated bottom sheet with backdrop. Use @gorhom/bottom-sheet. |
| `GoogleButton` | Yes | "Continue with Google" with G icon. Reused on auth/03 login screen. |
| `PrimaryButton` | Yes | Same pill button as welcome screen. |
| `OutlineButton` | Yes | Transparent with border. |
| `IconButton` | Yes | Close X button. Reused in multiple places. |

---

## Dark Mode Values

- Backdrop: `#000000` at 50% opacity
- Sheet bg: `#212121`
- Button Google: bg `#FFFFFF`, text `#000000`
- Button Sign up: bg `#8E8E8E`, text `#FFFFFF`
- Button Log in: bg `transparent`, border `#5A5A5A`, text `#FFFFFF`
- Title: `#FFFFFF`
- Close icon: `#FFFFFF`

---

## Interactive States

### Bottom Sheet
- **Opening:** Slide up from bottom, 300ms, ease-in-out. Backdrop fades in simultaneously.
- **Closing:** Slide down, 300ms, ease-in-out. Backdrop fades out.
- **Cannot be dismissed by swiping down** (per flow.md). Only close via X button or backdrop tap.

### "Continue with Google" Button
- **Normal:** bg `#FFFFFF`
- **Pressed:** bg `#FFFFFF` with opacity 0.85 [ESTIMATED]

### "Sign up" Button
- **Normal:** bg `#8E8E8E`
- **Pressed:** bg `#8E8E8E` with opacity 0.85 [ESTIMATED]

### "Log in" Button
- **Normal:** transparent bg, border visible
- **Pressed:** bg `#2A2A2A` [ESTIMATED]

### Close (X) Button
- **Normal:** Fully opaque
- **Pressed:** Opacity 0.7 [ESTIMATED]

---

## Animations

### Bottom Sheet Entry
- **Type:** Slide up + fade in backdrop
- **Duration:** ~300ms
- **Easing:** `Easing.bezier(0.4, 0.0, 0.2, 1.0)` (standard ease-in-out) [ESTIMATED]
- **Backdrop:** Opacity 0 to 0.5, simultaneous with slide

### Bottom Sheet Exit
- **Type:** Slide down + fade out backdrop
- **Duration:** ~300ms
- **Easing:** Same as entry
- **Triggered by:** X button tap or backdrop tap
- **Keyboard:** Closes automatically when sheet appears (per flow.md)

### Navigation to Login Screen
- **Type:** Renders on top (no slide/push animation per flow.md)
- **Triggered by:** "Sign up" or "Log in" button tap
