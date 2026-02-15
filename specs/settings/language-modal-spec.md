# Language Modal Spec

**Screen name:** Language Modal (App language)
**File reference:** `references/settings/02_tap-language_language-modal.jpg`
**Auth state:** Both (shared between unauth settings/01 and auth general/01d)
**Type:** Centered floating modal (NOT BottomSheet)
**Entry animation:** Fade-in with slight scale-up
**Exit animation:** Fade-out

---

## Backdrop
- **Background:** `#000000` at ~50% opacity [ESTIMATED]
- **Behavior:** Tap dismisses modal without changing selection
- **Covers:** Entire screen behind the modal

---

## Modal Container
- **Background:** `#3A3A3A` [ESTIMATED] -- consistent medium-dark gray
- **Border radius:** 28px [ESTIMATED]
- **Width:** ~85% of screen width [ESTIMATED]
- **Max height:** ~60% of screen height [ESTIMATED]
- **Position:** Centered vertically and horizontally
- **Shadow:** Subtle elevation shadow, `0 8px 32px rgba(0,0,0,0.6)` [ESTIMATED]
- **Padding top:** 24px [ESTIMATED]
- **Padding bottom:** 16px [ESTIMATED]
- **Padding horizontal:** 0px (content has its own padding)

---

## Modal Content (top to bottom)

### 1. Title
- **Text:** "App language"
- **Font size:** 22px [ESTIMATED]
- **Font weight:** 700 (Bold)
- **Color:** `#FFFFFF`
- **Padding horizontal:** 24px [ESTIMATED]
- **Margin bottom:** 16px [ESTIMATED]

### 2. Language List (scrollable)
- **Layout:** Vertical list, scrollable if content exceeds container
- **Padding horizontal:** 8px [ESTIMATED] (for radio button hit area)

#### Language Item (repeated)
- **Layout:** Row with radio button + text
- **Height:** 56px [ESTIMATED]
- **Padding horizontal:** 24px [ESTIMATED]
- **Alignment:** Center-aligned vertically

**Radio button (left):**
- **Size:** 24px [ESTIMATED]
- **Border:** 2px solid `#9A9A9A` [ESTIMATED] (unselected)
- **Border radius:** 12px (circular)
- **Fill (selected):** White outer ring + inner filled dot
  - Outer ring: 2px solid `#FFFFFF`
  - Inner dot: 10px diameter, `#FFFFFF` fill
- **Fill (unselected):** Empty circle, 2px solid `#9A9A9A`
- **Margin right:** 16px [ESTIMATED]

**Language name (text):**
- **Font size:** 16px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#FFFFFF`

#### Visible languages in screenshot:
1. System default (selected -- filled radio)
2. (Amharic script)
3. (Arabic script)
4. (Bulgarian)
5. (Bengali script)
6. bosanski

### 3. Separator
- **Type:** Horizontal line
- **Color:** `#4A4A4A` at ~40% opacity [ESTIMATED]
- **Height:** 1px
- **Margin top:** 8px [ESTIMATED]

### 4. OK Button
- **Text:** "OK"
- **Font size:** 16px [ESTIMATED]
- **Font weight:** 600 (SemiBold)
- **Color:** `#FFFFFF`
- **Alignment:** Right-aligned within modal
- **Padding:** 16px horizontal, 12px vertical [ESTIMATED]
- **Margin right:** 16px [ESTIMATED]
- **Background:** Transparent (text button)
- **Press feedback:** Slight opacity reduction
- **Behavior:** Confirms selection and closes modal

---

## Interaction Notes
- Tapping a language selects it (fills the radio button)
- Tapping "OK" confirms and closes
- Tapping backdrop closes without changing selection
- List scrolls if more items than visible area
