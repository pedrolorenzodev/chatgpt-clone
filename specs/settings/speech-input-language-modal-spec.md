# Speech Input Language Dropdown Modal Spec

**Screen name:** Speech Input Language Dropdown
**File reference:** `references/settings/01i_speech-input-language-modal.jpg`
**Auth state:** Authenticated
**Type:** Dropdown/popover anchored to the "Input language" row (same pattern as Accent Color modal)
**Entry animation:** FADE in
**Exit animation:** FADE out

---

## Backdrop
- **Background:** Transparent -- NO visible opacity overlay
- **Behavior:** Tap dismisses modal
- **Note:** Same as Accent Color modal -- no dimming

---

## Trigger State Change
- ChevronDown on "Input language" row **rotates to ChevronUp**

---

## Dropdown Container
- **Background:** `#424242` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]
- **Width:** ~55% of screen width [ESTIMATED]
- **Position:** Anchored below the "Input language" row, right-aligned
- **Shadow:** `0 4px 16px rgba(0,0,0,0.5)` [ESTIMATED]
- **Padding vertical:** 8px [ESTIMATED]
- **Max height:** ~60% of screen [ESTIMATED] -- scrollable
- **Scrollable:** Yes (long list of languages)

---

## Dropdown Items

### Item Layout
- **Height:** 48px [ESTIMATED]
- **Padding horizontal:** 20px [ESTIMATED]
- **Alignment:** Row, vertically centered

**Text (left):**
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: `#FFFFFF`

**Checkmark (right, only for selected item):**
- Icon: Check (lucide)
- Size: 20px [ESTIMATED]
- Color: `#FFFFFF`
- Margin left: auto

### Language Options (visible in screenshot)
1. **Auto-Detect** (selected -- shows checkmark)
2. Arabic
3. Bosnian
4. Bulgarian
5. Catalan
6. Chinese
7. Croatian
8. Czech
9. Danish
10. Dutch
... (continues scrolling)

---

## Interaction Notes
- Selecting any language immediately closes the modal
- No "OK" button -- selection is instant (same pattern as Accent Color)
- Backdrop tap closes without changing
- List scrolls within the dropdown container
- Same visual pattern as the Accent Color dropdown but with text-only items (no color dots)
