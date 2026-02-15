# 03 Auth Login Screen -- Spec

**File references:**
- Email mode: `/references/auth/03_auth-login-screen.png.jpeg`
- Phone mode: `/references/auth/03_auth-login-screen-phone-mode.png.jpeg`

**Auth state:** Unauthenticated
**Purpose:** Login/signup form with email or phone input, Continue button, Google sign-in, and mode toggle. Renders on top of the previous screen (no slide animation).

---

## Screen Overview

Full-screen dark layout. At the top-left is a back arrow button. Below that, the OpenAI logo is centered, followed by "Log in or sign up" heading and a subtitle. The main form area contains either an Email text input (email mode) or a country selector + phone number input (phone mode). Below the input is a disabled "Continue" button (enables when input is valid). An "OR" divider separates the form from "Continue with Google" and "Continue with phone/email" outline buttons. At the very bottom are "Terms of Use" and "Privacy Policy" links.

---

## Layout Structure

### Email Mode (Default)
```
SafeAreaView (flex: 1, bg: #000000)
  StatusBar (light-content)
  Header
    BackButton (top-left)
  Content (flex: 1, alignItems: center, paddingHorizontal: 32)
    OpenAI Logo (centered)
    Heading: "Log in or sign up"
    Subtitle: "You'll get smarter responses and can upload files, images and more."
    Email Input (full width)
    Continue Button (disabled)
    OR Divider
    "Continue with Google" Button
    "Continue with phone" Button
  Footer (bottom, paddingBottom: safe area + 16)
    "Terms of Use" dot "Privacy Policy" (centered links)
```

### Phone Mode
```
(Same structure, except:)
    Input Row:
      Country Selector (flag + code + chevron)
      Phone Number Input (remaining width)
    Continue Button (disabled)
    OR Divider
    "Continue with Google" Button
    "Continue with email" Button  (replaces "Continue with phone")
```

---

## Element-by-Element Specification

### 1. Back Button
- **Position:** Top-left corner
- **Top:** 8px below safe area top [ESTIMATED]
- **Left:** 12px [ESTIMATED]
- **Icon:** Arrow left (lucide: `ArrowLeft`)
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Container:**
  - Width: 40px, Height: 40px
  - Border radius: 20px (circular)
  - Background: transparent
- **Hit area:** 44x44px
- **Press state:** Opacity 0.7 [ESTIMATED]
- **Action:** Navigate back to previous screen

### 2. OpenAI Logo
- **Position:** Centered horizontally
- **Top margin:** 56px below back button [ESTIMATED]
- **Asset:** OpenAI flower/knot logo
- **Size:** 40x40px [ESTIMATED]
- **Color:** `#FFFFFF`
- **Note:** This is the OpenAI "flower" logo, not text. Use an SVG or image asset.

### 3. Heading: "Log in or sign up"
- **Position:** Centered horizontally, below logo
- **Top margin:** 24px below logo [ESTIMATED]
- **Typography:**
  - Font size: 26px
  - Font weight: 700 (Bold)
  - Line height: 32px [ESTIMATED]
  - Color: `#FFFFFF`
  - Text align: center

### 4. Subtitle
- **Text:** "You'll get smarter responses and can upload files, images and more."
- **Position:** Centered horizontally, below heading
- **Top margin:** 12px below heading [ESTIMATED]
- **Typography:**
  - Font size: 15px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Line height: 22px [ESTIMATED]
  - Color: `#9A9A9A` [ESTIMATED]
  - Text align: center
- **Max width:** ~80% of screen width [ESTIMATED]

### 5a. Email Input (Email Mode)
- **Position:** Below subtitle
- **Top margin:** 32px below subtitle [ESTIMATED]
- **Dimensions:**
  - Width: 100% of content area (screen - 64px, i.e., 32px padding each side)
  - Height: 56px
  - Border radius: 8px [ESTIMATED]
- **Background:** `#000000` (same as screen bg -- transparent feel)
- **Border:**
  - Default: 1px solid `#3A3A3A` [ESTIMATED]
  - Focused: 1.5px solid `#FFFFFF`
- **Placeholder:** "Email"
  - Font size: 16px
  - Font weight: 400
  - Color: `#6E6E6E` [ESTIMATED]
- **Input text:**
  - Font size: 16px
  - Font weight: 400
  - Color: `#FFFFFF`
- **Padding:** 16px horizontal, 16px vertical
- **Floating label animation (on focus):**
  - Placeholder "Email" animates from center-left of input to top-left border area
  - Shrinks from 16px to 12px font size
  - Color changes from `#6E6E6E` to `#FFFFFF`
  - Positioned to "cut" the top border visually (background behind label masks border)
  - Duration: ~200ms [ESTIMATED], easing: ease-out
  - On blur (empty): reverses animation

### 5b. Phone Input Row (Phone Mode)
- **Position:** Same as email input
- **Layout:** Horizontal row with gap

#### Country Selector
- **Width:** ~110px [ESTIMATED]
- **Height:** 56px
- **Border radius:** 8px [ESTIMATED]
- **Border:** 1px solid `#3A3A3A` [ESTIMATED]
- **Background:** `#000000`
- **Content layout:** Row, vertically centered
  - Flag emoji: country flag (e.g., Argentina flag)
  - Country code: "+54"
    - Font size: 16px
    - Font weight: 400
    - Color: `#FFFFFF`
  - Chevron down icon
    - Size: 16px [ESTIMATED]
    - Color: `#FFFFFF`
- **Padding:** 12px horizontal [ESTIMATED]
- **Gap between elements:** 6px [ESTIMATED]
- **Press action:** Opens country picker (not implemented in clone -- static display)

#### Phone Number Input
- **Flex:** 1 (takes remaining width)
- **Height:** 56px
- **Border radius:** 8px [ESTIMATED]
- **Border:** 1px solid `#3A3A3A` [ESTIMATED]
- **Background:** `#000000`
- **Placeholder:** "Phone number"
  - Font size: 16px
  - Color: `#6E6E6E` [ESTIMATED]
- **Input text:**
  - Font size: 16px
  - Color: `#FFFFFF`
- **Keyboard type:** phone-pad
- **Same floating label animation as email input**
- **Gap between selector and input:** 12px [ESTIMATED]

### 6. Continue Button
- **Position:** Below input
- **Top margin:** 20px [ESTIMATED]
- **Dimensions:**
  - Width: 100% of content area
  - Height: 52px
  - Border radius: 26px (pill shape)

#### Disabled State (default)
- **Background:** `#333333` [ESTIMATED]
- **Text:** "Continue"
  - Font size: 16px
  - Font weight: 600 (SemiBold)
  - Color: `#6E6E6E` [ESTIMATED]
  - Text align: center

#### Enabled State (valid email entered)
- **Background:** `#FFFFFF`
- **Text:** "Continue"
  - Font size: 16px
  - Font weight: 600 (SemiBold)
  - Color: `#000000`
  - Text align: center
- **Press state:** Opacity 0.85 [ESTIMATED]

#### Loading State (after pressing Continue)
- **Background:** `#FFFFFF`
- **Text:** "Continue" (stays in place, does not shift)
- **Loading indicator:** Small spinner appears to the right of "Continue" text
  - Size: 16px [ESTIMATED]
  - Color: `#000000`
  - Gap from text: 8px [ESTIMATED]

### 7. OR Divider
- **Position:** Below Continue button
- **Top margin:** 24px [ESTIMATED]
- **Layout:** Horizontal row
  - Left line: flex 1, height 1px, color `#3A3A3A` [ESTIMATED]
  - Text: "OR"
    - Font size: 14px
    - Font weight: 400
    - Color: `#6E6E6E` [ESTIMATED]
    - Horizontal padding: 16px
  - Right line: flex 1, height 1px, color `#3A3A3A` [ESTIMATED]

### 8. "Continue with Google" Button
- **Position:** Below OR divider
- **Top margin:** 24px [ESTIMATED]
- **Dimensions:**
  - Width: 100% of content area
  - Height: 52px
  - Border radius: 26px (pill shape)
- **Background:** `transparent`
- **Border:** 1px solid `#3A3A3A` [ESTIMATED]
- **Layout:** Row, centered
  - Google "G" multicolor icon: 20px [ESTIMATED]
  - Gap: 10px [ESTIMATED]
  - Text: "Continue with Google"
    - Font size: 16px
    - Font weight: 500 (Medium)
    - Color: `#FFFFFF`
- **Press state:** Background `#1A1A1A` [ESTIMATED]
- **Loading state (on press):**
  - Text color changes to `#6E6E6E` [ESTIMATED]
  - Spinner appears next to text, color `#6E6E6E` [ESTIMATED]

### 9a. "Continue with phone" Button (Email Mode)
- **Position:** Below Google button
- **Top margin:** 12px [ESTIMATED]
- **Dimensions:** Same as Google button
- **Background:** `transparent`
- **Border:** 1px solid `#3A3A3A` [ESTIMATED]
- **Layout:** Row, centered
  - Phone icon (lucide: `Phone`): 20px [ESTIMATED], color `#FFFFFF`
  - Gap: 10px [ESTIMATED]
  - Text: "Continue with phone"
    - Font size: 16px
    - Font weight: 500 (Medium)
    - Color: `#FFFFFF`
- **Press state:** Background `#1A1A1A` [ESTIMATED]
- **Action:** Switches to Phone mode (instant, no animation)

### 9b. "Continue with email" Button (Phone Mode)
- **Position:** Same as 9a
- **Same dimensions and styling**
- **Layout:** Row, centered
  - Mail icon (lucide: `Mail`): 20px [ESTIMATED], color `#FFFFFF`
  - Gap: 10px [ESTIMATED]
  - Text: "Continue with email"
    - Same typography as 9a
- **Action:** Switches to Email mode (instant, no animation)

### 10. Footer Links
- **Position:** Bottom of screen, centered
- **Bottom margin:** 16px from safe area bottom [ESTIMATED]
- **Layout:** Horizontal row, centered
  - "Terms of Use" (link)
    - Font size: 13px
    - Font weight: 400
    - Color: `#9A9A9A` [ESTIMATED]
    - Text decoration: underline
  - Dot separator: " . " (middle dot)
    - Color: `#9A9A9A` [ESTIMATED]
    - Horizontal margin: 4px [ESTIMATED]
  - "Privacy Policy" (link)
    - Same typography as Terms of Use
- **Press action:** Opens external browser (no action in clone)

---

## Component Breakdown

| Component | Reusable? | Notes |
|---|---|---|
| `BackButton` | Yes | Top-left back arrow. Reused throughout the app. |
| `FloatingLabelInput` | Yes (auth-specific) | Input with floating placeholder animation. Used for email and phone. |
| `CountrySelector` | Yes (auth-specific) | Flag + country code + chevron dropdown. |
| `PrimaryButton` | Yes | Full-width pill button with disabled/enabled/loading states. |
| `OrDivider` | Yes (auth-specific) | "OR" text with horizontal lines. |
| `GoogleButton` | Yes | Outline button with Google icon. Also appears on bottom sheet. |
| `OutlineButton` | Yes | Generic outline pill button with icon + text. |
| `FooterLinks` | Yes (auth-specific) | Terms + Privacy links at bottom. |
| `OpenAILogo` | Yes | Centered logo asset. |

---

## Dark Mode Values

- Screen bg: `#000000`
- Input bg: `#000000`, border: `#3A3A3A`, focused border: `#FFFFFF`
- Disabled button: bg `#333333`, text `#6E6E6E`
- Enabled button: bg `#FFFFFF`, text `#000000`
- Outline buttons: bg transparent, border `#3A3A3A`, text `#FFFFFF`
- Divider lines: `#3A3A3A`
- Footer links: `#9A9A9A`
- All text: `#FFFFFF` (primary), `#9A9A9A` (secondary), `#6E6E6E` (tertiary/disabled)

---

## Interactive States

### Email/Phone Input
- **Default:** Border `#3A3A3A`, placeholder `#6E6E6E`
- **Focused:** Border `#FFFFFF` (1.5px width), floating label animates up, label turns white
- **Focused with text:** Same as focused, floating label stays up
- **Blur with text:** Border returns to `#3A3A3A`, floating label stays up (font 12px)
- **Blur empty:** Floating label animates back to placeholder position

### Continue Button
- **Disabled:** bg `#333333`, text `#6E6E6E`, not pressable
- **Enabled:** bg `#FFFFFF`, text `#000000`
- **Pressed:** bg `#FFFFFF` opacity 0.85
- **Loading:** bg `#FFFFFF`, text `#000000`, spinner appears right of text

### "Continue with Google"
- **Normal:** transparent bg, white border and text
- **Pressed:** slight bg tint `#1A1A1A`
- **Loading:** text turns gray, spinner appears

### Outline Buttons (Phone/Email toggle)
- **Normal:** transparent bg, border `#3A3A3A`, white text
- **Pressed:** bg `#1A1A1A`

### Back Button
- **Normal:** transparent bg
- **Pressed:** opacity 0.7

---

## Animations

### Floating Label (Input Focus)
- **Duration:** ~200ms [ESTIMATED]
- **Easing:** `Easing.out(Easing.ease)` [ESTIMATED]
- **Properties animated:**
  - `translateY`: from 0 (center of input) to ~-28px (top border) [ESTIMATED]
  - `fontSize`: from 16px to 12px
  - `color`: from `#6E6E6E` to `#FFFFFF`
- **Reverse on blur (empty input):** Same duration, easing

### Mode Switch (Email <-> Phone)
- **Duration:** 0ms (instant, per flow.md)
- **Effect:** Input area swaps immediately

### Continue Button Loading
- **Spinner fade in:** ~150ms [ESTIMATED]
- **Spinner type:** ActivityIndicator (small, circular)

### Screen Entry
- **Type:** Renders on top (no slide/push per flow.md)
- **Effect:** Instant appear

### Screen Exit (to auth/04 loading)
- **Type:** Instant navigation (no slide per flow.md)

---

## Validation Logic (UI only)

### Email validation:
- Continue button enables when email contains `@`, `.`, and at least one character after the dot
- Simple regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### Phone validation:
- Continue button enables when phone number has at least 1 digit [ESTIMATED]
- (In the clone, any non-empty value could suffice)
