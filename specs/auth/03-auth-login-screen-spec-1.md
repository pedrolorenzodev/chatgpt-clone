# 03 Auth Login Screen -- Spec (Revision 1)

**File references:**
- Email mode: `/references/auth/03_auth-login-screen.png.jpeg`
- Phone mode: `/references/auth/03_auth-login-screen-phone-mode.png.jpeg`

**Auth state:** Unauthenticated
**Purpose:** Login/signup form with email or phone input, Continue button, Google sign-in, and mode toggle. Renders on top of the previous screen with no slide animation.

---

## Screen Overview

Full-screen dark layout on a pure black background. Top-left has a back arrow button. Below the center of the upper portion is the OpenAI "flower knot" logo, followed by a bold "Log in or sign up" heading and a secondary subtitle. The main form area has either an email text input (default mode) or a country code selector + phone number input (phone mode). Below the input is a "Continue" button (disabled by default, enabled when valid input is entered). An "OR" horizontal divider separates the primary form from two outline buttons: "Continue with Google" and "Continue with phone" (or "Continue with email" in phone mode). At the very bottom are footer links for "Terms of Use" and "Privacy Policy".

---

## Layout Structure

### Email Mode (Default)

```
SafeAreaView (flex: 1, bg: #000000)
  StatusBar (light-content)
  Header Row (position: absolute, top)
    BackButton (top-left, 12px left, 8px below safe area)
  Content (flex: 1, alignItems: center, paddingHorizontal: 32)
    Top Spacer (~80px from safe area top)
    OpenAI Logo (centered, 40x40)
    Spacer (24px)
    Heading: "Log in or sign up" (centered)
    Spacer (12px)
    Subtitle: "You'll get smarter responses..." (centered)
    Spacer (32px)
    Email Input (FloatingLabelInput, full content width)
    Spacer (20px)
    Continue Button (disabled state)
    Spacer (24px)
    OR Divider (line -- "OR" -- line)
    Spacer (24px)
    "Continue with Google" Button (outline)
    Spacer (12px)
    "Continue with phone" Button (outline)
  Footer (position: absolute, bottom: safeArea + 16px, centerX)
    "Terms of Use" . "Privacy Policy" (links)
```

### Phone Mode

```
(Same as email mode, except the input section:)
    Input Row (flexDirection: row, gap: 12px)
      CountrySelector (~110px wide)
      Phone Number Input (flex: 1, FloatingLabelInput)
    Spacer (20px)
    Continue Button (disabled state)
    ...
    "Continue with email" Button (replaces "Continue with phone")
```

---

## Element-by-Element Specification

### 1. Back Button
- **Position:** Top-left corner, overlays content
- **Top:** 8px below safe area top [ESTIMATED]
- **Left:** 16px [ESTIMATED]
- **Icon:** Arrow left (lucide: `ArrowLeft`)
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Container:**
  - Width: 40px
  - Height: 40px
  - Border radius: 20px (circular)
  - Background: transparent
- **Hit area:** 44x44px (padding around the icon)
- **Press state:** Opacity 0.7 [ESTIMATED]
- **Action:** Navigate back to previous screen (bottom sheet or whatever triggered this)

### 2. OpenAI Logo
- **Position:** Centered horizontally
- **Top:** ~80px below safe area top [ESTIMATED] (significant space above to push the logo towards center-upper)
- **Asset:** OpenAI flower/knot logo -- an interleaved circular design
- **Size:** 40x40px [ESTIMATED] -- examining the screenshot, the logo appears to be approximately 40px
- **Color:** `#FFFFFF`
- **Implementation:** Use an SVG or PNG image asset. This is NOT a lucide icon.

### 3. Heading: "Log in or sign up"
- **Position:** Centered, below logo
- **Top margin:** 24px [ESTIMATED]
- **Typography:**
  - Font size: 26px
  - Font weight: 700 (Bold)
  - Line height: 34px [ESTIMATED]
  - Letter spacing: -0.3px [ESTIMATED]
  - Color: `#FFFFFF`
  - Text align: center

### 4. Subtitle
- **Text:** "You'll get smarter responses and can upload files, images and more."
- **Position:** Centered, below heading
- **Top margin:** 12px [ESTIMATED]
- **Typography:**
  - Font size: 15px
  - Font weight: 400 (Regular)
  - Line height: 22px [ESTIMATED]
  - Color: `#9A9A9A` [ESTIMATED]
  - Text align: center
- **Max width:** ~85% of screen width [ESTIMATED] to keep text from touching edges
- **Wraps:** To ~2 lines on standard device

### 5a. Email Input (Email Mode -- Default)
- **Position:** Below subtitle
- **Top margin:** 32px [ESTIMATED]
- **Type:** `FloatingLabelInput` component
- **Dimensions:**
  - Width: 100% of content area (screen width - 64px due to 32px paddingHorizontal)
  - Height: 56px
  - Border radius: 8px [ESTIMATED]
- **Background:** `#000000` (matches screen bg -- effectively transparent)
- **Border (default/unfocused):**
  - Width: 1px
  - Color: `#3A3A3A` [ESTIMATED]
  - Style: solid
- **Border (focused):**
  - Width: 2px [ESTIMATED] -- appears noticeably thicker than the unfocused state. Could be 1.5px.
  - Color: `#FFFFFF`
- **Placeholder (unfocused):** "Email"
  - Position: Center-left of input (vertically centered, left-padded)
  - Font size: 16px
  - Font weight: 400
  - Color: `#6E6E6E` [ESTIMATED]
- **Input text (when typing):**
  - Font size: 16px
  - Font weight: 400
  - Color: `#FFFFFF`
  - Cursor color: `#FFFFFF` [ESTIMATED]
- **Padding:** 16px horizontal, 16px vertical
- **Keyboard type:** `email-address`
- **Auto capitalize:** `none`
- **Auto complete:** `email`

#### Floating Label Animation (on focus):
- The "Email" placeholder animates from its center-left position upward to the top border of the input
- **Unfocused position:** `translateY: 0`, font 16px, color `#6E6E6E`
- **Focused position:** `translateY: -28px` [ESTIMATED], font 12px, color `#FFFFFF`
- The label sits ON the top border, with a small background "patch" (same color as screen bg `#000000`) behind it that visually "cuts" the border line
- **Label background patch:** ~4px horizontal padding around the label text, bg `#000000`
- **Duration:** ~200ms [ESTIMATED]
- **Easing:** `Easing.out(Easing.ease)` [ESTIMATED]
- **On blur (empty):** Reverse animation -- label moves back down to center, reverts to 16px and `#6E6E6E`
- **On blur (with text):** Label stays in the floating position (up at 12px, white)

### 5b. Phone Input Row (Phone Mode)
- **Position:** Same vertical position as email input
- **Layout:** `flexDirection: 'row'`, `alignItems: 'center'`
- **Gap:** 12px between country selector and phone input [ESTIMATED]

#### Country Selector
- **Width:** ~110px [ESTIMATED] -- enough for flag + code + chevron
- **Height:** 56px (same as input)
- **Border radius:** 8px [ESTIMATED]
- **Border:** 1px solid `#3A3A3A` [ESTIMATED]
- **Background:** `#000000`
- **Padding horizontal:** 12px [ESTIMATED]
- **Content layout:** `flexDirection: 'row'`, `alignItems: 'center'`, `justifyContent: 'space-between'`
  - Flag emoji: standard system emoji size (e.g., Argentina flag)
  - Dial code: "+54"
    - Font size: 16px
    - Font weight: 400
    - Color: `#FFFFFF`
    - Left margin: 6px from flag [ESTIMATED]
  - Chevron: ChevronDown
    - Size: 16px [ESTIMATED]
    - Color: `#FFFFFF`
    - Left margin: 6px [ESTIMATED]
- **Press action:** Opens country picker (not implemented in clone -- static display)
- **Press feedback:** Opacity 0.85 [ESTIMATED]

#### Phone Number Input
- **Flex:** 1 (takes remaining width)
- **Height:** 56px
- **Border radius:** 8px [ESTIMATED]
- **Border:** 1px solid `#3A3A3A` [ESTIMATED]
- **Background:** `#000000`
- **Placeholder:** "Phone number"
  - Same floating label behavior as email input
- **Keyboard type:** `phone-pad`
- **Same floating label animation as email input**

### 6. Continue Button
- **Position:** Below input area
- **Top margin:** 20px [ESTIMATED]
- **Dimensions:**
  - Width: 100% of content area
  - Height: 52px
  - Border radius: 26px (pill shape)

#### Disabled State (default -- no input or invalid input)
- **Background:** `#333333` [ESTIMATED]
- **Text:** "Continue"
  - Font size: 16px
  - Font weight: 600 (SemiBold)
  - Color: `#6E6E6E` [ESTIMATED]
  - Text align: center
- **Not pressable** (disabled)

#### Enabled State (valid email/phone entered)
- **Background:** `#FFFFFF`
- **Text:** "Continue"
  - Font size: 16px
  - Font weight: 600 (SemiBold)
  - Color: `#000000`
  - Text align: center
- **Press state:** Opacity 0.85 [ESTIMATED]

#### Loading State (after pressing Continue with valid input)
- **Background:** `#FFFFFF` (stays the same)
- **Text:** "Continue" (stays in place, does NOT shift)
- **Loading spinner:** Appears to the RIGHT of the "Continue" text
  - Size: 16px [ESTIMATED]
  - Color: `#000000`
  - Gap from text: 8px [ESTIMATED]
  - Type: small ActivityIndicator or custom spinner

### 7. OR Divider
- **Position:** Below Continue button
- **Top margin:** 24px [ESTIMATED]
- **Layout:** `flexDirection: 'row'`, `alignItems: 'center'`
  - Left line: `flex: 1`, height 1px (hairline), color `#3A3A3A` [ESTIMATED]
  - "OR" text:
    - Font size: 14px
    - Font weight: 400
    - Color: `#6E6E6E` [ESTIMATED]
    - Horizontal margin: 16px (space between lines and text)
  - Right line: Same as left line

### 8. "Continue with Google" Button
- **Position:** Below OR divider
- **Top margin:** 24px [ESTIMATED]
- **Dimensions:**
  - Width: 100% of content area
  - Height: 52px
  - Border radius: 26px (pill shape)
- **Background:** `transparent`
- **Border:** 1px solid `#3A3A3A` [ESTIMATED]
- **Layout:** `flexDirection: 'row'`, `alignItems: 'center'`, `justifyContent: 'center'`
  - Google "G" multicolor icon: 20px [ESTIMATED]
  - Gap: 10px [ESTIMATED]
  - Text: "Continue with Google"
    - Font size: 16px
    - Font weight: 500 (Medium)
    - Color: `#FFFFFF`
- **Press state:** Background `#1A1A1A` [ESTIMATED]
- **Loading state (after press):**
  - Text color changes to `#6E6E6E` [ESTIMATED]
  - Spinner appears to the right of text, color `#6E6E6E` [ESTIMATED], size 16px [ESTIMATED]
- **Action:** Triggers auth flow -- shows loading, then navigates to auth/04

### 9a. "Continue with phone" Button (Email Mode)
- **Position:** Below Google button
- **Top margin:** 12px [ESTIMATED]
- **Same dimensions as Google button** (full width, 52px height, 26px border-radius)
- **Background:** `transparent`
- **Border:** 1px solid `#3A3A3A` [ESTIMATED]
- **Layout:** Row, centered
  - Phone icon (lucide: `Phone`): 20px, color `#FFFFFF`
  - Gap: 10px [ESTIMATED]
  - Text: "Continue with phone"
    - Font size: 16px
    - Font weight: 500 (Medium)
    - Color: `#FFFFFF`
- **Press state:** Background `#1A1A1A` [ESTIMATED]
- **Action:** Switches to phone mode (instant, no animation, per flow.md)

### 9b. "Continue with email" Button (Phone Mode)
- **Position:** Same as 9a
- **Same dimensions and border styling as 9a**
- **Layout:** Row, centered
  - Mail icon (lucide: `Mail`): 20px, color `#FFFFFF`
  - Gap: 10px [ESTIMATED]
  - Text: "Continue with email"
    - Same typography as 9a
- **Press state:** Background `#1A1A1A` [ESTIMATED]
- **Action:** Switches to email mode (instant, no animation)

### 10. Footer Links
- **Position:** Pinned to very bottom of screen, centered horizontally
- **Bottom:** 16px above safe area bottom [ESTIMATED]
- **Layout:** `flexDirection: 'row'`, `alignItems: 'center'`, `justifyContent: 'center'`
  - "Terms of Use"
    - Font size: 13px
    - Font weight: 400
    - Color: `#9A9A9A` [ESTIMATED]
    - Text decoration: underline
  - Separator: " . " (centered dot / middle dot character)
    - Color: `#9A9A9A` [ESTIMATED]
    - Horizontal margin: 6px [ESTIMATED]
  - "Privacy Policy"
    - Same typography as "Terms of Use"
- **Press action:** Opens external browser (no action in clone)

---

## Component Breakdown

| Element | Component | Reusable? | Notes |
|---|---|---|---|
| Back arrow | `BackButton` | Yes | Circular transparent button with ArrowLeft icon |
| OpenAI logo | `OpenAILogo` | Yes (auth-only) | SVG/PNG asset, not a lucide icon |
| Email input | `FloatingLabelInput` | Yes (auth-only) | Animated floating placeholder |
| Country selector | `CountrySelector` | Yes (auth-only) | Flag + code + chevron |
| Phone input | `FloatingLabelInput` | Yes (shared with email) | Same component, different keyboard type |
| Continue button | `PrimaryButton` | Yes | Disabled/enabled/loading variants |
| OR divider | `OrDivider` | Yes (auth-only) | Lines + centered text |
| Google button | `OutlineButton` with Google icon | Yes | Outline variant on this screen (vs solid on bottom sheet) |
| Phone/Email toggle | `OutlineButton` with icon | Yes | Same outline button, different icon/label |
| Footer links | `AuthFooterLinks` | Yes (auth-only) | Terms + dot + Privacy |

---

## Dark Mode Values

| Element | Value |
|---|---|
| Screen bg | `#000000` |
| Back button icon | `#FFFFFF` |
| Logo | `#FFFFFF` |
| Heading text | `#FFFFFF` |
| Subtitle text | `#9A9A9A` [ESTIMATED] |
| Input bg | `#000000` |
| Input border (unfocused) | `#3A3A3A` [ESTIMATED] |
| Input border (focused) | `#FFFFFF` |
| Placeholder text | `#6E6E6E` [ESTIMATED] |
| Floating label (focused) | `#FFFFFF` |
| Input text | `#FFFFFF` |
| Continue disabled bg | `#333333` [ESTIMATED] |
| Continue disabled text | `#6E6E6E` [ESTIMATED] |
| Continue enabled bg | `#FFFFFF` |
| Continue enabled text | `#000000` |
| Divider line | `#3A3A3A` [ESTIMATED] |
| Divider "OR" text | `#6E6E6E` [ESTIMATED] |
| Outline button border | `#3A3A3A` [ESTIMATED] |
| Outline button text | `#FFFFFF` |
| Footer links | `#9A9A9A` [ESTIMATED] |

---

## Interactive States Summary

### Email/Phone Input
| State | Border | Border Width | Placeholder | Label Position |
|---|---|---|---|---|
| Unfocused (empty) | `#3A3A3A` | 1px | Center-left, 16px, `#6E6E6E` | -- |
| Focused (empty) | `#FFFFFF` | 2px | Floated to top, 12px, `#FFFFFF` | Top border |
| Focused (with text) | `#FFFFFF` | 2px | Floated to top, 12px, `#FFFFFF` | Top border |
| Blur (with text) | `#3A3A3A` | 1px | Floated to top, 12px, `#FFFFFF` | Top border |

### Continue Button
| State | Background | Text Color | Spinner |
|---|---|---|---|
| Disabled | `#333333` | `#6E6E6E` | None |
| Enabled | `#FFFFFF` | `#000000` | None |
| Pressed | `#FFFFFF` at 85% opacity | `#000000` | None |
| Loading | `#FFFFFF` | `#000000` | Right of text, `#000000`, 16px |

### "Continue with Google"
| State | Background | Border | Text Color | Spinner |
|---|---|---|---|---|
| Normal | transparent | `#3A3A3A` | `#FFFFFF` | None |
| Pressed | `#1A1A1A` | `#3A3A3A` | `#FFFFFF` | None |
| Loading | transparent | `#3A3A3A` | `#6E6E6E` | Right of text, `#6E6E6E`, 16px |

### Outline Buttons (Phone/Email toggle)
| State | Background | Border | Text Color |
|---|---|---|---|
| Normal | transparent | `#3A3A3A` | `#FFFFFF` |
| Pressed | `#1A1A1A` | `#3A3A3A` | `#FFFFFF` |

### Back Button
| State | Effect |
|---|---|
| Normal | Fully opaque |
| Pressed | Opacity 0.7 |

---

## Animations

### Floating Label (Input Focus/Blur)
- **Duration:** ~200ms [ESTIMATED]
- **Easing:** `Easing.out(Easing.ease)` -- decelerates into final position
- **Properties animated simultaneously:**
  - `translateY`: 0 to -28px [ESTIMATED]
  - `fontSize`: 16 to 12 (use `scale` transform instead for better performance -- scale from 1.0 to 0.75)
  - `color`: `#6E6E6E` to `#FFFFFF` (interpolate)
- **Reverse (blur with empty input):** Same properties reversed, same duration/easing

### Mode Switch (Email to Phone, Phone to Email)
- **Duration:** 0ms (instant, per flow.md)
- **No animation** -- the input section swaps immediately

### Continue Button State Change (disabled to enabled)
- **Duration:** ~150ms [ESTIMATED]
- **Properties:** Background color interpolation from `#333333` to `#FFFFFF`, text color from `#6E6E6E` to `#000000`

### Continue Button Loading Spinner
- **Spinner fade in:** ~150ms [ESTIMATED]
- **Spinner rotation:** Continuous, standard ActivityIndicator animation

### Google Button Loading
- **Text color fade:** ~150ms from `#FFFFFF` to `#6E6E6E`
- **Spinner fade in:** ~150ms

### Screen Entry
- **Type:** Renders on top, instant (per flow.md -- "Se renderiza encima, sin animacion de slide/push")
- **No slide, no fade, no push**

### Screen Exit (to auth/04)
- **Type:** Instant navigation (no animation)

---

## Validation Logic (UI Only)

### Email Mode:
- Continue button ENABLES when email contains `@`, `.`, and at least one character after the dot
- Suggested regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Validation happens on every keystroke (onChangeText)

### Phone Mode:
- Continue button ENABLES when at least 1 digit is entered [ESTIMATED]
- Any non-empty numeric value suffices for the clone

---

## Navigation

- **Back button:** Returns to previous screen (auth/02 bottom sheet, or whatever triggered this screen)
- **Continue (valid):** Shows loading spinner, then navigates to auth/04 (loading transition)
- **Continue with Google:** Shows loading spinner on the Google button, then navigates to auth/04
- **Continue with phone/email:** Instant mode switch (stays on this screen)
- **Footer links:** No action in clone

---

## Keyboard Behavior

- Keyboard opens automatically when the email/phone input receives focus
- Keyboard type: `email-address` for email mode, `phone-pad` for phone mode
- The content should NOT scroll -- the form area is positioned to be fully visible above the keyboard
- `keyboardShouldPersistTaps="handled"` on any ScrollView to allow button taps while keyboard is open
