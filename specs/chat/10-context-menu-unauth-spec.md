# 10 -- Long Press Context Menu (Unauth)

**Screen name:** ContextMenuUnauth
**File reference:** `references/chat/10_longpress-user-message_context-menu.jpg`
**Auth state:** Unauthenticated
**Description:** A floating context menu that appears when the user long-presses on their own message bubble. Shows a timestamp and 3 action buttons: Copy, Select Text, Edit Message. The menu appears with a fade-in animation overlaying the chat content. The underlying chat is dimmed but still partially visible.

---

## Layout Structure

```
DimmedBackdrop (tap to dismiss)
ContextMenuCard (floating, positioned near the long-pressed message)
  Timestamp
  MenuItem: Copy (icon + text)
  MenuItem: Select Text (icon + text)
  MenuItem: Edit Message (icon + text)
```

---

## Dimmed Backdrop
- Background: #000000 at ~30-40% opacity [ESTIMATED]
- Position: absolute, covers entire screen
- Tap: dismisses context menu
- The underlying chat content (including the long-pressed message and AI response) is visible but dimmed

---

## Context Menu Card

- Position: floating, near the long-pressed message
  - Typically appears below the message bubble, offset slightly to the right
  - Approximate horizontal position: left edge around 25% of screen width [ESTIMATED]
- Background: #2F2F2F [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Padding vertical: 8px [ESTIMATED]
- Padding horizontal: 0 (items have their own padding)
- Width: ~220px [ESTIMATED]
- Shadow: subtle drop shadow (0 4px 12px rgba(0,0,0,0.3)) [ESTIMATED]
- Animation: fade-in (200ms)

### Timestamp
- Text: e.g., "Feb 4, 2026 3:12:10 PM"
- Font size: 13px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #9A9A9A [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Padding top: 10px [ESTIMATED]
- Padding bottom: 8px [ESTIMATED]

### Menu Items

Each menu item is a full-width row with icon + text.

#### Item Specs
- Height: 48px [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Layout: row, vertically centered
- Icon-text gap: 12px [ESTIMATED]

#### Icon
- Size: 20px [ESTIMATED]
- Color: #FFFFFF
- Stroke width: 1.5px [ESTIMATED]

#### Text
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #FFFFFF

#### Press Feedback
- Background: #3A3A3A [ESTIMATED]

### Menu Items Content (Unauth -- 3 items)

| # | Icon (Lucide) | Text | Action |
|---|---|---|---|
| 1 | `Copy` | "Copy" | Copies message to clipboard, closes menu |
| 2 | `FileText` (or `AlignLeft`) | "Select Text" | Opens Select Text screen (11) |
| 3 | `Pencil` (or `PenLine`) | "Edit Message" | Activates edit mode (12) |

Note: The "Copy" icon looks like two overlapping squares. The "Select Text" icon appears to be a text selection icon (small square with lines). The "Edit Message" icon is a pencil/pen.

---

## Positioning Logic

The context menu appears near the long-pressed message:
- If the message is in the upper half of the screen: menu appears BELOW the message
- If the message is in the lower half: menu appears ABOVE the message
- Horizontal: generally centered near the message bubble, but shifted to stay within screen bounds
- The user message bubble may remain visible and highlighted while the rest dims

---

## Animations

### Opening
- Fade-in: opacity 0 -> 1, duration 200ms [ESTIMATED]
- Optional slight scale: 0.95 -> 1.0 for a subtle "pop" effect [ESTIMATED]

### Closing
- Fade-out: opacity 1 -> 0, duration 150ms [ESTIMATED]

### Easing
- `Easing.bezier(0.4, 0.0, 0.2, 1.0)`

---

## Important Notes

- **Only for user messages**: Long-pressing on AI response text activates native text selection, NOT this context menu
- **Unauth has 3 items**: Copy, Select Text, Edit Message
- **Auth adds 1 more**: "Share" appears as a 4th item (see auth flow)

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| Backdrop | "Close menu" | "button" |
| Copy | "Copy message" | "button" |
| Select Text | "Select text" | "button" |
| Edit Message | "Edit message" | "button" |
