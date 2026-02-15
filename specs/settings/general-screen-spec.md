# General Screen Spec

**Screen name:** General
**File reference:** `references/settings/01d_general-screen.jpg`
**Auth state:** Authenticated
**Entry animation:** SLIDE (push)
**Exit animation:** SLIDE (pop) with back button

---

## Layout Structure (top to bottom)

### 1. Header
- **Background:** `#000000`
- **Same pattern as all settings sub-screens**

#### 1a. Back Button
- Container: 48x48px circle, bg `#3A3A3A`, ArrowLeft 24px white

#### 1b. Title
- **Text:** "General"
- Font size: 20px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: `#FFFFFF`
- Position: Centered horizontally

### 2. Content Area
- **Background:** `#000000`
- **Padding horizontal:** 16px
- **Padding top:** 8px [ESTIMATED]

### 3. Card Group
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

#### Row 1: "Show legacy models"
- **Layout:** Row with icon + text + toggle switch
- **Height:** ~52px [ESTIMATED]
- **Border bottom:** 1px separator
- **Border radius:** 16px top

**Icon (left):**
- Icon: Custom icon -- appears as interlocking circles/Venn diagram
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`
- Margin right: 16px

**Text:**
- "Show legacy models"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

**Toggle switch (right):**
- **State:** OFF (in screenshot)
- **Track color (off):** `#4A4A4A` [ESTIMATED]
- **Thumb color (off):** `#9A9A9A` [ESTIMATED]
- Track width: 52px, height: 32px, border radius: 16px
- Thumb diameter: 26px

#### Row 2: "Language"
- **Layout:** Row with icon + text block
- **Height:** ~64px [ESTIMATED]
- **Border radius:** 0 top, 16px bottom

**Icon (left):**
- Icon: Globe (lucide)
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`
- Margin right: 16px

**Text block:**
- **Title:** "Language"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Subtitle:** "English"
  - Font size: 14px, Weight: 400, Color: `#9A9A9A`

**Press behavior:** Opens Language modal (same as unauth settings/02)

---

## Notes
- Very minimal screen with only 2 settings
- Uses the same card styling as other settings screens
- Toggle on this screen controls visibility of legacy AI models
