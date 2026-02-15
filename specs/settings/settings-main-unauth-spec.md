# Settings Main -- Unauth Spec

**Screen name:** Settings Main (Unauthenticated)
**File reference:** `references/settings/01_settings-main-unauth.jpg`
**Auth state:** Unauthenticated
**Entry animation:** Push navigation (slide right to left)
**Exit animation:** Pop navigation (slide left to right)

---

## Layout Structure (top to bottom)

### 1. Status Bar
- System status bar (Android)
- Background: `#000000`

### 2. Header
- **Background:** `#000000`
- **Padding top:** 12px below safe area [ESTIMATED]
- **Padding horizontal:** 16px
- **Padding bottom:** 12px [ESTIMATED]
- **Layout:** Row, center-aligned vertically

#### 2a. Back Button
- **Position:** Left-aligned
- **Container:** 48x48px circle [ESTIMATED]
- **Background:** `#3A3A3A` [ESTIMATED]
- **Border radius:** 24px (circular)
- **Icon:** ArrowLeft (lucide)
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Press feedback:** Opacity 0.7

#### 2b. Title
- **Text:** "Settings"
- **Font size:** 20px [ESTIMATED]
- **Font weight:** 600 (SemiBold)
- **Color:** `#FFFFFF`
- **Position:** Centered horizontally in the header (not relative to back button)
- **Letter spacing:** 0

### 3. Content Area
- **Background:** `#000000`
- **Padding horizontal:** 16px
- **Scrollable:** Yes (though content fits in one viewport for unauth)

---

### 4. Section: "Data controls"

#### 4a. Section Header
- **Text:** "Data controls"
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Margin top:** 8px [ESTIMATED]
- **Margin bottom:** 10px [ESTIMATED]
- **Padding left:** 0px (aligned to screen padding)

#### 4b. Settings Card Group (rounded container)
- **Background:** `#3A3A3A` [ESTIMATED] -- appears as a medium dark gray card
- **Border radius:** 16px [ESTIMATED] (top-left, top-right for first item; bottom-left, bottom-right for last item)
- **Margin top:** 0px
- **Note:** This is a single grouped card with rounded corners at the top and bottom

#### 4b-i. "Improve the model for everyone" Row
- **Layout:** Row with icon, text block, and toggle
- **Height:** Auto (multi-line description)
- **Padding vertical:** 16px [ESTIMATED]
- **Padding horizontal:** 16px [ESTIMATED]
- **Background:** `#3A3A3A` [ESTIMATED]
- **Border radius:** 16px top-left, 16px top-right, 16px bottom-left, 16px bottom-right (only item in this sub-group)

**Icon (left):**
- Icon: Resembles a "layers" or "model" icon (square with inner lines) -- use `Layers` or a custom icon
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`
- Margin right: 16px [ESTIMATED]

**Text block (center):**
- **Title:** "Improve the model for everyone"
  - Font size: 16px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Color: `#FFFFFF`
  - Line height: 22px [ESTIMATED]
- **Description:** "Allow your content to be used to improve our models for you and other users. We take steps to protect your privacy. Learn more"
  - Font size: 14px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Color: `#9A9A9A` [ESTIMATED]
  - Line height: 20px [ESTIMATED]
  - Margin top: 4px [ESTIMATED]
- **"Learn more" link:**
  - Color: `#9A9A9A` [ESTIMATED]
  - Text decoration: underline
  - Inline with description text

**Toggle switch (right):**
- **State:** ON
- **Track width:** 52px [ESTIMATED]
- **Track height:** 32px [ESTIMATED]
- **Track border radius:** 16px (pill)
- **Track color (on):** `#FFFFFF`
- **Thumb diameter:** 26px [ESTIMATED]
- **Thumb color (on):** `#000000`
- **Thumb position (on):** Right-aligned within track
- **Track color (off):** `#4A4A4A` [ESTIMATED]
- **Thumb color (off):** `#9A9A9A` [ESTIMATED]
- **Alignment:** Center-right, vertically centered with title text

---

### 5. Section: "App"

#### 5a. Section Header
- **Text:** "App"
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Margin top:** 24px [ESTIMATED]
- **Margin bottom:** 10px [ESTIMATED]

#### 5b. Settings Card Group
- **Background:** `#3A3A3A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED] (rounded on outer corners only)

#### 5b-i. "Language" Row
- **Layout:** Row with icon + text block
- **Height:** ~64px [ESTIMATED] (two-line row)
- **Padding vertical:** 14px [ESTIMATED]
- **Padding horizontal:** 16px [ESTIMATED]
- **Border bottom:** 1px solid `#4A4A4A` at ~20% opacity [ESTIMATED] (separator between items)
- **Background:** `#3A3A3A` [ESTIMATED]
- **Border radius:** 16px top-left, 16px top-right, 0 bottom (first item in group)

**Icon (left):**
- Icon: Globe (lucide)
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`
- Margin right: 16px [ESTIMATED]

**Text block:**
- **Title:** "Language"
  - Font size: 16px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Color: `#FFFFFF`
- **Subtitle:** "English"
  - Font size: 14px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Color: `#9A9A9A` [ESTIMATED]
  - Margin top: 2px [ESTIMATED]

**Press behavior:** Opens Language modal (02)

#### 5b-ii. "About" Row
- **Layout:** Row with icon + text
- **Height:** ~52px [ESTIMATED] (single-line row)
- **Padding vertical:** 14px [ESTIMATED]
- **Padding horizontal:** 16px [ESTIMATED]
- **Background:** `#3A3A3A` [ESTIMATED]
- **Border radius:** 0 top, 16px bottom-left, 16px bottom-right (last item in group)

**Icon (left):**
- Icon: Info (lucide) -- circle with "i"
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`
- Margin right: 16px [ESTIMATED]

**Text:**
- **Title:** "About"
  - Font size: 16px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Color: `#FFFFFF`

**Press behavior:** Push navigation to About screen (03)

---

## Overall Spacing Summary
- Screen horizontal padding: 16px
- Section gap (between "Data controls" and "App"): ~24px
- Card internal padding: 16px all sides
- Card border radius: 16px
- Item separator within card: 1px line at reduced opacity
- Row height (single-line): ~52px
- Row height (with subtitle): ~64px
- Row height (with description): auto-height
