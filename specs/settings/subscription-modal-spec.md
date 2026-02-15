# Subscription Modal Spec

**Screen name:** Subscription Modal
**File reference:** `references/settings/01c_subscription-modal.jpg`
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
- **Background:** `#424242` [ESTIMATED] -- medium gray, slightly lighter than settings cards
- **Border radius:** 28px [ESTIMATED]
- **Width:** ~85% of screen width [ESTIMATED]
- **Position:** Centered vertically and horizontally
- **Padding:** 24px [ESTIMATED]
- **Shadow:** Subtle elevation, `0 8px 32px rgba(0,0,0,0.6)` [ESTIMATED]

---

## Modal Content (top to bottom)

### 1. Body Text
- **Text:** "You can't make changes to your subscription inside this app, because you purchased this subscription on another platform."
- **Font size:** 16px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#FFFFFF`
- **Line height:** 24px [ESTIMATED]

### 2. OK Button
- **Margin top:** 24px [ESTIMATED]
- **Text:** "OK"
- **Font size:** 16px [ESTIMATED]
- **Font weight:** 600 (SemiBold)
- **Color:** `#FFFFFF`
- **Alignment:** Right-aligned within modal
- **Background:** Transparent (text-only button)
- **Padding:** 8px horizontal, 8px vertical [ESTIMATED]
- **Press feedback:** Opacity 0.7 [ESTIMATED]
- **Behavior:** Closes modal

---

## Notes
- This modal has NO title -- only body text and an OK button
- Same modal style as the Appearance and Language modals but simpler
