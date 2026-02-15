# Log Out Modal Spec

**Screen name:** Log Out Confirmation Modal
**File reference:** `references/settings/01g_logout-modal.jpg`
**Auth state:** Authenticated
**Type:** Centered floating modal (Android AlertDialog style)
**Entry animation:** FADE in
**Exit animation:** FADE out

---

## Backdrop
- **Background:** `#000000` at ~50% opacity [ESTIMATED]
- **Behavior:** Tap dismisses modal (same as Cancel)
- **Covers:** Entire screen

---

## Modal Container
- **Background:** `#424242` [ESTIMATED]
- **Border radius:** 28px [ESTIMATED]
- **Width:** ~85% of screen width [ESTIMATED]
- **Position:** Centered vertically and horizontally
- **Padding:** 24px [ESTIMATED]
- **Shadow:** `0 8px 32px rgba(0,0,0,0.6)` [ESTIMATED]

---

## Modal Content (top to bottom)

### 1. Title
- **Text:** "Log out?"
- **Font size:** 22px [ESTIMATED]
- **Font weight:** 700 (Bold)
- **Color:** `#FFFFFF`
- **Margin bottom:** 16px [ESTIMATED]

### 2. Body Text
- **Text:** "You'll need to sign back in to keep using ChatGPT."
- **Font size:** 16px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#CCCCCC` [ESTIMATED] -- slightly dimmer than pure white
- **Line height:** 24px [ESTIMATED]

### 3. Action Buttons Row
- **Margin top:** 24px [ESTIMATED]
- **Layout:** Row, right-aligned
- **Gap between buttons:** 24px [ESTIMATED]

#### "Cancel" Button
- **Text:** "Cancel"
- **Font size:** 16px [ESTIMATED]
- **Font weight:** 600 (SemiBold)
- **Color:** `#FFFFFF`
- **Background:** Transparent
- **Padding:** 8px [ESTIMATED]
- **Press feedback:** Opacity 0.7
- **Behavior:** Closes modal, no action

#### "Log out" Button
- **Text:** "Log out"
- **Font size:** 16px [ESTIMATED]
- **Font weight:** 600 (SemiBold)
- **Color:** `#FFFFFF`
- **Background:** Transparent
- **Padding:** 8px [ESTIMATED]
- **Press feedback:** Opacity 0.7
- **Behavior:** No-op in clone (would log out user)

---

## Notes
- This is a standard Android AlertDialog-style modal with Title + Body + Two text buttons
- Buttons are right-aligned in a row (Cancel left, Log out right)
- Neither button has a background or border -- they are text-only
- Same modal container styling as Subscription and Appearance modals
