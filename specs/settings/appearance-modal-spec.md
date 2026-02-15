# Appearance Modal Spec

**Screen name:** Appearance Modal
**File reference:** `references/settings/01e_appearance-modal.jpg`
**Auth state:** Authenticated
**Type:** Centered floating modal (Android AlertDialog style)
**Entry animation:** FADE in
**Exit animation:** FADE out

---

## Backdrop
- **Background:** `#000000` at ~50% opacity [ESTIMATED]
- **Behavior:** Tap dismisses modal
- **Covers:** Entire screen

---

## Modal Container
- **Background:** `#424242` [ESTIMATED] -- same as other modals
- **Border radius:** 28px [ESTIMATED]
- **Width:** ~85% of screen width [ESTIMATED]
- **Position:** Centered vertically and horizontally
- **Padding top:** 24px [ESTIMATED]
- **Padding bottom:** 16px [ESTIMATED]
- **Padding horizontal:** 0 (content has its own padding)
- **Shadow:** `0 8px 32px rgba(0,0,0,0.6)` [ESTIMATED]

---

## Modal Content (top to bottom)

### 1. Title
- **Text:** "Appearance"
- **Font size:** 22px [ESTIMATED]
- **Font weight:** 700 (Bold)
- **Color:** `#FFFFFF`
- **Padding horizontal:** 24px [ESTIMATED]
- **Margin bottom:** 8px [ESTIMATED]

### 2. Radio Button List

#### Option: "System (Default)"
- **Layout:** Row with radio button + text
- **Height:** 52px [ESTIMATED]
- **Padding horizontal:** 24px [ESTIMATED]
- **State:** Selected (filled radio)

**Radio button:**
- Size: 24px
- Outer ring: 2px solid `#FFFFFF`
- Inner dot: 10px diameter, `#FFFFFF` fill
- Margin right: 16px

**Text:** "System (Default)"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

#### Option: "Light"
- **State:** Unselected

**Radio button:**
- Outer ring: 2px solid `#9A9A9A`
- No inner dot
- Margin right: 16px

**Text:** "Light"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

#### Option: "Dark"
- **State:** Unselected

**Radio button:**
- Same as Light (unselected)

**Text:** "Dark"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

### 3. OK Button
- **Alignment:** Right-aligned within modal
- **Text:** "OK"
- **Font size:** 16px [ESTIMATED]
- **Font weight:** 600 (SemiBold)
- **Color:** `#FFFFFF`
- **Margin top:** 8px [ESTIMATED]
- **Margin right:** 24px [ESTIMATED]
- **Padding:** 8px horizontal, 12px vertical [ESTIMATED]
- **Background:** Transparent
- **Press feedback:** Opacity 0.7
- **Behavior:** Confirms selection and closes modal

---

## Interaction Notes
- Tapping a radio option selects it (fills the dot)
- Only one option can be selected at a time
- "OK" confirms and closes
- Backdrop tap also closes
- This is the same modal pattern as the Language modal but without scrolling
