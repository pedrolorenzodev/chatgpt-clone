# Action Bar Feature -- Full UI Specification

Covers the Action Bar component itself (visible in chat/07, chat/08 auth screenshots) and its modal sub-flows: screenshots 33 through 36b. Auth state: authenticated (6 icons) and unauthenticated (3 icons) variants.

---

## Table of Contents

1. Action Bar Component (Auth + Unauth variants)
2. Ellipsis Modal (chat/33)
3. Branched State (chat/33b)
4. Retry Modal (chat/34)
5. Switch Model Modal (chat/35)
6. Switch Model Expanded (chat/35b)
7. Share Feedback BottomSheet (chat/36)
8. Share Feedback Dropdown Expanded (chat/36b)

---

## 1. Action Bar Component

**Visible in:** chat/07 (unauth), chat/07 auth, chat/08 auth
**Position:** Below the AI response text, above the input bar

### Layout Structure

```
Action Bar Row
  Left Section (icon buttons)
    [Copy] [ThumbsUp] [ThumbsDown] [Speaker] [Share] [Ellipsis]
  Right Section (sources, if search mode)
    Source Favicon Icons
    "Sources" text button
```

### Container
- Layout: Row, space-between (left icons vs right sources)
- Height: 40px [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Margin top: 8px [ESTIMATED] from AI response text
- Full width

### Unauth Variant (3 icons)
Icons left to right:
1. **Copy** -- lucide `copy`
2. **Speaker** -- lucide `volume-2`
3. **Regenerate** -- lucide `refresh-cw`

### Auth Variant (6 icons)
Icons left to right:
1. **Copy** -- lucide `copy`
2. **ThumbsUp** -- lucide `thumbs-up`
3. **ThumbsDown** -- lucide `thumbs-down`
4. **Speaker** -- lucide `volume-2`
5. **Share** -- lucide `share-2`
6. **Ellipsis** -- lucide `ellipsis-vertical`

### Icon Button Styling
- Icon size: 20px [ESTIMATED]
- Color: `#9A9A9A` [ESTIMATED]
- Container: 32px x 32px [ESTIMATED] (touch target)
- Gap between icons: 8px [ESTIMATED]
- Press feedback: opacity 0.7

### Sources Section (Search Mode only)
- Visible when response contains citations
- Layout: Row (favicon icons + "Sources" text)
- Positioned: right-aligned in Action Bar

#### Source Favicon Icons
- Size: 20px [ESTIMATED] each
- Border radius: 4px [ESTIMATED]
- Gap between icons: -4px (overlapping) [ESTIMATED]
- Display: up to 3-4 favicons
- Each favicon is a small site icon (S, W, live, etc.)

#### "Sources" Text
- Text: "Sources"
- Font size: 14px [ESTIMATED]
- Font weight: 500
- Color: `#9A9A9A` [ESTIMATED]
- Margin left: 8px [ESTIMATED]
- Tap action: Opens Sources BottomSheet (chat/09)

### State Changes

#### ThumbsUp Pressed
- Icon changes from outline to filled
- Color changes from `#9A9A9A` to `#FFFFFF`
- ThumbsDown icon disappears (removed from row)
- Shows popup: "Thank you for your feedback!"

#### ThumbsDown Pressed
- Icon changes from outline to filled
- Color changes from `#9A9A9A` to `#FFFFFF`
- ThumbsUp icon disappears (removed from row)
- Opens Share Feedback BottomSheet (chat/36)
- After closing BottomSheet: shows popup "Thank you for your feedback!"

### Animation
- Appears with fade-in (300ms) when AI response streaming completes
- Easing: `easing-standard`

---

## 2. Ellipsis Modal (chat/33)

**File:** `references/chat/33_ellipsis-modal.jpg`
**Access:** Tap ellipsis-vertical icon in Action Bar
**Animation:** Fade in / Fade out

### Layout Structure

```
Modal Container (anchored bottom-right, near ellipsis icon)
  Timestamp text
  Separator
  Option Row: Retry (icon + text + chevron-right)
  Option Row: Branch in new chat (icon + text)
```

### Modal Container
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Padding vertical: 12px [ESTIMATED]
- Width: ~240px [ESTIMATED]
- Position: anchored near the ellipsis icon, bottom-right area of screen
- Shadow: `0 4px 16px rgba(0,0,0,0.4)` [ESTIMATED]

### Timestamp
- Text: "Feb 5, 2026 6:29:28 PM"
- Font size: 13px [ESTIMATED]
- Font weight: 400
- Color: `#9A9A9A` [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Padding bottom: 8px [ESTIMATED]

### Separator
- Height: 1px
- Color: `#3A3A3A` [ESTIMATED]
- Full width of modal

### Option Row: Retry
- Layout: Row (icon + text + chevron-right at far right)
- Height: 44px [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Icon: lucide `refresh-cw`
- Icon size: 20px
- Icon color: `#9A9A9A` [ESTIMATED]
- Text: "Retry"
- Font size: 16px
- Font weight: 400
- Color: `#FFFFFF`
- Gap between icon and text: 12px [ESTIMATED]
- Chevron: lucide `chevron-right`, 16px, color `#9A9A9A` [ESTIMATED]
- Tap action: Closes this modal, opens Retry Modal (chat/34)

### Option Row: Branch in new chat
- Layout: Row (icon + text)
- Same dimensions as Retry row
- Icon: lucide `git-branch` (or `split`)
- Text: "Branch in new chat"
- No chevron
- Tap action: Closes modal, shows branched state (chat/33b)

### Backdrop
- Transparent (no visible overlay)
- Tap anywhere outside dismisses

---

## 3. Branched State (chat/33b)

**File:** `references/chat/33b_branched-state.jpg`
**Access:** Tap "Branch in new chat" from Ellipsis Modal

### Layout Change
- A text line appears between the Action Bar and the Input Bar
- Text: "Branched from [Chat Name]"
  - "Branched from " -- font 14px [ESTIMATED], weight 400, color `#9A9A9A`
  - "[Chat Name]" -- font 14px [ESTIMATED], weight 400, color `#B0C4DE` [ESTIMATED], underlined (link)
- Padding horizontal: 16px [ESTIMATED]
- Margin vertical: 8px [ESTIMATED]
- Text align: center
- Tap on link text: navigates to the source chat

### No other visual changes to the screen

---

## 4. Retry Modal (chat/34)

**File:** `references/chat/34_retry-modal.jpg`
**Access:** Tap "Retry" from Ellipsis Modal
**Animation:** Fade in (simultaneous with Ellipsis Modal fade-out)

### Layout Structure

```
Modal Container (anchored bottom-right area)
  Header Row: "Retry" + chevron-down
  Separator
  Option Row: Switch model (icon + text + subtitle)
  Option Row: Try again (icon + text)
  Option Row: Search the web / Remove web results (icon + text)
```

### Modal Container
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Padding vertical: 12px [ESTIMATED]
- Width: ~260px [ESTIMATED]
- Position: bottom-right area, near Action Bar
- Shadow: `0 4px 16px rgba(0,0,0,0.4)` [ESTIMATED]

### Header Row: "Retry"
- Layout: Row (text + chevron-down)
- Text: "Retry"
- Font size: 16px [ESTIMATED]
- Font weight: 500
- Color: `#FFFFFF`
- Chevron: lucide `chevron-down`, 20px, color `#9A9A9A` [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Height: 44px [ESTIMATED]
- Tap action: Closes this modal, re-opens Ellipsis Modal (chat/33)

### Separator
- Height: 1px
- Color: `#3A3A3A` [ESTIMATED]

### Option Row: Switch model
- Icon: lucide `shuffle` (or similar crossing arrows icon)
- Icon size: 20px
- Icon color: `#9A9A9A` [ESTIMATED]
- Layout: two-line text block
  - Title: "Switch model", font 16px, weight 400, color `#FFFFFF`
  - Subtitle: "Auto", font 13px [ESTIMATED], weight 400, color `#9A9A9A`
- Gap between icon and text: 12px [ESTIMATED]
- Padding horizontal: 16px
- Height: 52px [ESTIMATED]
- Tap action: Opens Switch Model Modal (chat/35)

### Option Row: Try again
- Icon: lucide `refresh-cw`
- Text: "Try again"
- Font size: 16px, weight 400, color `#FFFFFF`
- Standard option row dimensions
- Tap action: Closes modal, regenerates response in current mode

### Option Row: Search the web / Remove web results
- Icon: lucide `globe` (earth icon)
- Text: "Search the web" (or "Remove web results" if already in search mode)
- Font size: 16px, weight 400, color `#FFFFFF`
- Tap action (Search the web): Closes modal, regenerates in SEARCH mode
- Tap action (Remove web results): Closes modal, regenerates in normal mode

### Backdrop
- Transparent
- Tap dismisses

---

## 5. Switch Model Modal (chat/35)

**File:** `references/chat/35_switch-model-modal.jpg`
**Access:** Tap "Switch model" from Retry Modal
**Animation:** Fade in

### Layout Structure

```
Modal Container
  Header Row: "Switch model" + chevron-down
  Separator
  Subtitle: "GPT-5.2"
  Separator
  Option: Instant (title + description)
  Option: Thinking (title + description)
  Separator
  Expandable: Legacy models (text + chevron-right)
```

### Modal Container
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Width: ~300px [ESTIMATED]
- Position: bottom-left area of screen (anchored near Action Bar)
- Shadow: `0 4px 16px rgba(0,0,0,0.4)` [ESTIMATED]

### Header Row: "Switch model"
- Text: "Switch model"
- Font size: 16px
- Font weight: 500
- Color: `#FFFFFF`
- Chevron: lucide `chevron-down`, 20px, color `#9A9A9A`
- Padding horizontal: 16px
- Height: 44px [ESTIMATED]
- Tap action: Closes this modal, re-opens Retry Modal (chat/34)

### Subtitle: "GPT-5.2"
- Text: "GPT-5.2"
- Font size: 13px [ESTIMATED]
- Font weight: 400
- Color: `#6E6E6E` [ESTIMATED]
- Padding horizontal: 16px
- Padding vertical: 8px [ESTIMATED]

### Separators
- Height: 1px
- Color: `#3A3A3A` [ESTIMATED]
- Full width

### Model Option Rows
- Height: 52px [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Layout: Column (title + description)

#### "Instant"
- Title: "Instant", font 16px, weight 400, color `#FFFFFF`
- Description: "Answers right away", font 13px [ESTIMATED], weight 400, color `#9A9A9A`
- Gap: 2px [ESTIMATED]

#### "Thinking"
- Title: "Thinking", font 16px, weight 400, color `#FFFFFF`
- Description: "Thinks longer for better answers", font 13px [ESTIMATED], weight 400, color `#9A9A9A`

### Expandable: "Legacy models"
- Layout: Row (chevron + text)
- Icon: lucide `chevron-right` (collapsed), `chevron-down` (expanded)
- Icon size: 20px [ESTIMATED]
- Icon color: `#9A9A9A` [ESTIMATED]
- Text: "Legacy models"
- Font size: 16px
- Font weight: 400
- Color: `#FFFFFF`
- Gap: 8px [ESTIMATED]
- Padding horizontal: 16px
- Height: 44px [ESTIMATED]
- Tap action: Expands modal to show legacy models (chat/35b)

---

## 6. Switch Model Expanded (chat/35b)

**File:** `references/chat/35b_switch-model-expanded.jpg`
**Access:** Tap "Legacy models" in Switch Model Modal

### Changes from collapsed state:
- "Legacy models" chevron rotates from right to down
- Modal expands upward to accommodate new items
- New model options appear below "Legacy models"

### Additional Model Options (below Legacy models)

#### "GPT-5.1 Instant"
- Title only: "GPT-5.1 Instant"
- Font size: 16px, weight 400, color `#FFFFFF`
- Height: 44px [ESTIMATED]
- Padding horizontal: 32px [ESTIMATED] (indented under Legacy models)

#### "GPT-5.1 Thinking"
- Title only: "GPT-5.1 Thinking"
- Same styling as above

#### "GPT-4o" (with check icon + subtitle)
- Layout: Row with check icon on left
- Check icon: lucide `check`, 20px, color `#FFFFFF`
- Title: "GPT-4o", font 16px, weight 400, color `#FFFFFF`
- Subtitle: "Leaving on February 13", font 13px [ESTIMATED], weight 400, color `#9A9A9A`
- This is the currently selected legacy model (check indicates selection)
- Padding horizontal: 16px

### Selection Behavior
- Tapping any model (even already selected): closes modal, deletes AI response, regenerates with that model
- Selected model shows check icon
- Selection persists across modal open/close

### Animation
- Modal expands upward smoothly (~200ms)
- Chevron rotation: 90deg animation (~200ms)

---

## 7. Share Feedback BottomSheet (chat/36)

**File:** `references/chat/36_share-feedback-bottomsheet.jpg`
**Access:** Tap thumbs-down icon in Action Bar
**Animation:** Slide-up from bottom

### Layout Structure

```
BottomSheet Container
  Drag Handle
  Title: "Share Feedback"
  Dropdown: "Issue"
  TextArea: "Share details (optional)"
  Disclaimer Text
  "Submit" Button
```

### BottomSheet Container
- Background: `#212121` [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Backdrop: `#000000` at 50% opacity
- Height: ~55% of screen [ESTIMATED]
- Padding horizontal: 24px [ESTIMATED]

### Drag Handle
- Width: 36px, Height: 4px, radius 2px, color `#666666` [ESTIMATED]
- Margin top: 12px, centered

### Title: "Share Feedback"
- Font size: 20px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: `#FFFFFF`
- Text align: center
- Margin top: 16px [ESTIMATED]

### Dropdown: "Issue"
- Border: 1px solid `#4A4A4A` [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Background: transparent
- Height: 56px [ESTIMATED]
- Padding horizontal: 16px
- Margin top: 24px [ESTIMATED]
- Layout: Row (text + dropdown icon)
- Placeholder: "Issue", font 16px, weight 400, color `#9A9A9A`
- Dropdown icon: triangle/caret pointing down, 16px [ESTIMATED], color `#9A9A9A`

#### Dropdown Collapsed State
- Shows placeholder "Issue" with down-caret on right
- Tapping opens the dropdown

#### Dropdown Focused/Open State (chat/36b)
- "Issue" label floats to top-left border (same floating label animation as auth inputs)
- Floating label: font 12px, color `#FFFFFF`
- Border color changes to `#FFFFFF`
- Placeholder changes to: "Select an issue"
- Caret rotates to point up
- Options list appears directly below the dropdown field

### Dropdown Options List (chat/36b)
- Background: same as BottomSheet (no separate container visible)
- Options stack vertically
- Each option:
  - Height: 48px [ESTIMATED]
  - Padding horizontal: 24px [ESTIMATED]
  - Text: font 16px, weight 400, color `#FFFFFF`
  - Press feedback: background `#3A3A3A` [ESTIMATED]

#### Options (in order):
1. Incorrect or incomplete
2. Not what I asked for
3. Slow or buggy
4. Style or tone
5. Safety or legal concern (with chevron-right, `#9A9A9A`)
6. Other

### TextArea: "Share details (optional)"
- Border: 1px solid `#4A4A4A` [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Background: transparent
- Placeholder: "Share details (optional)"
- Placeholder color: `#9A9A9A`
- Font size: 16px
- Color: `#FFFFFF`
- Height: ~160px [ESTIMATED] (multiline)
- Padding: 16px
- Margin top: 16px [ESTIMATED]

### Disclaimer Text
- Text: "Your conversation will be included with your feedback to help improve ChatGPT. Learn more"
- Font size: 13px [ESTIMATED]
- Font weight: 400
- Color: `#9A9A9A`
- "Learn more" is a link:
  - Color: `#7EB8E0` [ESTIMATED] -- blue tint
  - No underline (or subtle underline)
  - No functional action in clone
- Line height: 18px [ESTIMATED]
- Margin top: 12px [ESTIMATED]

### "Submit" Button
- Position: bottom of BottomSheet
- Width: 100% minus horizontal padding
- Height: 52px [ESTIMATED]
- Border radius: 26px (pill)
- Margin top: auto (pushed to bottom)
- Margin bottom: 16px [ESTIMATED] above safe area

#### Disabled State (default -- no issue selected)
- Background: `#333333` [ESTIMATED]
- Text: "Submit", color `#6E6E6E` [ESTIMATED]
- Font size: 16px, weight 600

#### Enabled State (issue selected from dropdown)
- Background: `#FFFFFF`
- Text: "Submit", color `#000000`

**Important:** Writing text in "Share details" without selecting an issue does NOT enable Submit. Only selecting a dropdown option enables it.

### Post-Submit/Close Behavior
- Shows popup: "Thank you for your feedback!"
- Uses global Popup component

---

## 8. Action Bar -- Additional Behaviors

### Speaker Button Press
- Opens a "Speaking Pop-up" (different from standard popup)
- Appears with fade-in
- Contains:
  - Timer counter (showing elapsed time)
  - Play/Pause button
  - Close "x" icon
- Only closes via the "x" icon (not auto-dismiss)
- Background: dark container, similar styling to other modals

### Share Button Press
- Opens native system Share sheet
- No custom UI needed (platform native)

### Copy Button Press
- Copies the AI response text to clipboard
- No visible feedback (silent action)

---

## Shared Modal Positioning Pattern

All Action Bar modals (Ellipsis, Retry, Switch Model) share this positioning:
- Anchored near the bottom-right of the screen, close to the Action Bar
- They appear directly above or near the triggering icon
- Right-aligned (not centered on screen)
- Not fullscreen overlays -- they are floating contextual menus

### Modal Chain Navigation
```
Action Bar -> Ellipsis (chat/33)
  -> Retry row -> Retry Modal (chat/34)
    -> "Retry" header -> back to Ellipsis (chat/33)
    -> Switch model -> Switch Model Modal (chat/35)
      -> "Switch model" header -> back to Retry (chat/34)
      -> Legacy models -> Expanded (chat/35b)
    -> Try again -> regenerate
    -> Search the web -> regenerate in search mode
  -> Branch in new chat -> branched state (chat/33b)
```

Each transition uses fade-in/fade-out simultaneously (one fades out as the other fades in).

---

## Platform Notes (Android)

- Modals appear to use elevation/shadow consistent with Material Design
- The dropdown in Share Feedback BottomSheet uses custom UI, not native Android Spinner
- Confirmation modals resemble native AlertDialog styling but are custom-rendered
- Bottom sheets use standard @gorhom/bottom-sheet patterns
- All contextual menus (Ellipsis, Retry, Switch Model) are custom floating menus, not Android PopupMenu
