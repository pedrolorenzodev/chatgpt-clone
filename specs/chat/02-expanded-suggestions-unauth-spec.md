# 02 -- Expanded Suggestions (Unauth)

**Screen name:** ExpandedSuggestionsUnauth
**File reference:** `references/chat/02_tap-any-suggestion-btn_expanded-suggestions.jpg`
**Auth state:** Unauthenticated
**Description:** After tapping any suggestion button (e.g., "Code"), the input auto-fills with a prefix (e.g., "Help me") and a list of 4 suggestion text items appear above the input, each with an icon and descriptive text. The "What can I help with?" title and suggestion buttons grid disappear.

---

## Layout Structure (top to bottom)

```
SafeAreaView (bg: #000000, flex: 1)
  Header (same as 01)
  ScrollableContent (flex: 1)
    (empty space above -- title + grid are gone)
  SuggestionTextsList (above input)
    SuggestionTextItem (icon + text + divider)
    SuggestionTextItem (icon + text + divider)
    SuggestionTextItem (icon + text + divider)
    SuggestionTextItem (icon + text, no divider on last)
  InputBar (with text "Help me" filled in)
  Keyboard (open)
```

---

## Changes from Screen 01

1. **Title "What can I help with?"** -- REMOVED (hidden/faded out)
2. **Suggestion buttons grid** -- REMOVED (hidden/faded out)
3. **Suggestion texts list** -- ADDED (slides up from below)
4. **Input text** -- Auto-filled with category prefix (e.g., "Help me")
5. **Send button** -- NOW ENABLED (white background, black arrow) because text is present
6. **Mic button** -- HIDDEN when text is present in the input

---

## Suggestion Texts List

- Position: directly above the input bar
- Padding horizontal: 24px [ESTIMATED]
- Margin bottom: 12px [ESTIMATED] (space between last item and input bar)
- Animation: slide-up from below, duration ~300ms

### Individual Suggestion Text Item
- Layout: row, vertically centered
- Height: 56px [ESTIMATED]
- Padding vertical: 16px [ESTIMATED]
- Full width of parent container

#### Icon (left)
- The icon matches the category that was tapped
- Size: 22px [ESTIMATED]
- Color: #8B7BF7 (purple, matching Code category icon) [ESTIMATED]
- Margin right: 16px [ESTIMATED]
- Note: Icon color matches the parent suggestion button's icon color

#### Text (right of icon)
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #D4D4D4 [ESTIMATED]
- Number of lines: 1, ellipsis if overflow

#### Divider (between items)
- Height: 1px
- Color: #2A2A2A [ESTIMATED]
- Full width (within padding)
- Not present after the last item

### Suggestion Text Content (Code category example)
| # | Icon | Text |
|---|---|---|
| 1 | `Code` (braces) | "Help me debug my code" |
| 2 | `Code` (braces) | "Help me write a function" |
| 3 | `Code` (braces) | "Help me simplify my code" |
| 4 | `Code` (braces) | "Help me learn Python" |

Note: The content varies per category. Each category shows 4 suggestions.

---

## Input Bar Changes

### Text Input
- Value: "Help me" (auto-filled prefix based on tapped category)
- Cursor: visible at end of text
- Text color: #FFFFFF
- Font size: 16px

### Send Button (Enabled State)
- Background: #FFFFFF
- Icon: `ArrowUp` (Lucide)
- Icon color: #000000
- Size: 36px [ESTIMATED]
- Border radius: 18px
- Press feedback: opacity 0.85

### Mic Button
- HIDDEN -- disappears when input has text content

---

## Behavior

- **Tap on any suggestion text item** -> Auto-fills input with that text and sends message immediately -> navigates to screen 06
- **Modify text manually** -> User can edit the auto-filled text
- **Clear input** -> Suggestion texts remain visible; send button becomes disabled again
- **Tap send** -> Sends current input text -> navigates to screen 06

---

## Animations

### Transition from Screen 01
1. Title "What can I help with?" fades out (duration: 200ms [ESTIMATED])
2. Suggestion buttons grid fades out (duration: 200ms [ESTIMATED])
3. Suggestion text items slide up from below input (duration: 300ms [ESTIMATED])
4. Input text auto-fills (immediate)
5. Send button transitions from disabled to enabled (immediate color change)

### Easing
- Slide-up: `Easing.bezier(0.4, 0.0, 0.2, 1.0)` (standard material ease)

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| Suggestion text item | (dynamic: text content) | "button" |
