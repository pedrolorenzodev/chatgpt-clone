# Accent Color Modal Spec

**Screen name:** Accent Color Dropdown Modal
**File reference:** `references/settings/01f_accent-color-modal.jpg`
**Auth state:** Authenticated
**Type:** Dropdown/popover anchored to the "Accent color" row (NOT a centered dialog)
**Entry animation:** FADE in
**Exit animation:** FADE out

---

## Backdrop
- **Background:** Transparent -- NO visible opacity overlay
- **Behavior:** Tap dismisses modal
- **Note:** This differs from other modals; the backdrop has NO dimming effect

---

## Trigger State Change
- When this modal is open, the ChevronDown icon on the "Accent color" row **rotates to ChevronUp**
- The rotation is part of the FADE animation

---

## Dropdown Container
- **Background:** `#424242` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]
- **Width:** ~55% of screen width [ESTIMATED] -- anchored to the right side
- **Position:** Anchored below the "Accent color" row, right-aligned
- **Shadow:** `0 4px 16px rgba(0,0,0,0.5)` [ESTIMATED]
- **Padding vertical:** 12px [ESTIMATED]
- **Padding horizontal:** 0 (items have their own padding)

---

## Dropdown Items

Each item is a row with a colored dot + text label, and optionally a checkmark.

### Item Layout
- **Height:** 48px [ESTIMATED]
- **Padding horizontal:** 20px [ESTIMATED]
- **Alignment:** Row, vertically centered

**Color dot (left):**
- **Size:** 16px diameter [ESTIMATED]
- **Border radius:** 8px (circular)
- **Margin right:** 12px [ESTIMATED]

**Text (center):**
- **Font size:** 16px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#FFFFFF`

**Checkmark (right, only for selected item):**
- **Icon:** Check (lucide)
- **Size:** 20px [ESTIMATED]
- **Color:** `#FFFFFF`
- **Margin left:** auto (pushed to right)

### Color Options

| Label | Dot Color | Badge |
|---|---|---|
| Default | `#9A9A9A` [ESTIMATED] -- gray | (selected: shows checkmark) |
| Blue | `#3B82F6` [ESTIMATED] -- bright blue | |
| Green | `#22C55E` [ESTIMATED] -- bright green | |
| Yellow | `#EAB308` [ESTIMATED] -- golden yellow | |
| Pink | `#EC4899` [ESTIMATED] -- hot pink | |
| Orange | `#F97316` [ESTIMATED] -- bright orange | |
| Purple | `#A855F7` [ESTIMATED] -- purple | "Plus" badge |

### "Plus" Badge (on Purple option)
- **Text:** "Plus"
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Position:** To the right of "Purple" text, separated by a middle dot
- **Display:** "Purple  ·  Plus"

---

## Interaction Notes
- Selecting any color immediately closes the modal
- No "OK" button -- selection is instant
- Backdrop tap closes without changing
- The dropdown appears to float to the right side, overlapping the settings list behind it
