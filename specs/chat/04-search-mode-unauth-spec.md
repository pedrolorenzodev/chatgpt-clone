# 04 -- Search Mode (Unauth)

**Screen name:** SearchModeUnauth
**File reference:** `references/chat/04_tap-web-search_search-mode.jpg`
**Auth state:** Unauthenticated
**Description:** After selecting "Web search" from the Attachments BottomSheet, a "Search" chip appears inside the input field. The input placeholder changes to "Search the web" and trending topic suggestions appear above the input. The keyboard opens.

---

## Layout Structure (top to bottom)

```
SafeAreaView (bg: #000000, flex: 1)
  Header (same as 01)
  ScrollableContent (flex: 1, empty)
  SuggestionTextsList (above input)
    TrendingItem (trending icon + text + divider)
    TrendingItem (trending icon + text + divider)
    TrendingItem (trending icon + text + divider)
    TrendingItem (trending icon + text, no divider)
  InputBarWithChip
    PlusButton
    InputContainer
      SearchChip (icon + "Search" + close X)
      TextInput "Search the web"
      MicButton
      SendButton
  Keyboard
```

---

## Changes from Screen 01

1. **Title and suggestion buttons** -- REMOVED
2. **Input has a chip** -- "Search" chip with globe icon and X button
3. **Placeholder** -- Changed to "Search the web"
4. **Suggestion texts** -- 4 trending topic items with trend-line icons
5. **Keyboard** -- Open

---

## Suggestion Texts List (Trending Topics)

- Position: directly above the input bar
- Padding horizontal: 24px [ESTIMATED]
- Margin bottom: 8px [ESTIMATED]
- Animation: slide-up from below

### Individual Trending Item
- Layout: row, vertically centered
- Height: 52px [ESTIMATED]
- Padding vertical: 14px [ESTIMATED]

#### Trending Icon (left)
- Icon: `TrendingUp` (Lucide) -- chart line going up
- Size: 22px [ESTIMATED]
- Color: #5B9DED (blue) [ESTIMATED]
- Margin right: 16px [ESTIMATED]

#### Text
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #D4D4D4 [ESTIMATED]
- Number of lines: 1

#### Divider
- Height: 1px
- Color: #2A2A2A [ESTIMATED]
- Present between items, not after last

### Example Trending Content
| # | Text |
|---|---|
| 1 | "Savannah Guthrie" |
| 2 | "savannah guthrie's mother missing" |
| 3 | "nancy guthrie" |
| 4 | "westminster dog show 2026" |

---

## Input Bar With Chip

The input container expands vertically to accommodate the chip above the text input line.

### Input Container (expanded)
- Background: #2F2F2F
- Border radius: 24px [ESTIMATED]
- Flex: 1
- Padding horizontal: 12px [ESTIMATED]
- Padding vertical: 8px [ESTIMATED]
- Min height: 80px [ESTIMATED] (expanded to hold chip + text)

### Search Chip
- Position: top-left inside input container
- Layout: row, vertically centered
- Height: 32px [ESTIMATED]
- Background: transparent
- Border: 1px solid #4A4A4A [ESTIMATED]
- Border radius: 16px (fully rounded)
- Padding horizontal: 10px [ESTIMATED]
- Margin bottom: 4px [ESTIMATED]

#### Chip Icon (left)
- Icon: `Globe` (Lucide) -- or web icon (MaterialCommunityIcons)
- Size: 16px [ESTIMATED]
- Color: #5BC5C9 (teal/cyan) [ESTIMATED]
- Margin right: 6px [ESTIMATED]

#### Chip Text
- Text: "Search"
- Font size: 14px [ESTIMATED]
- Font weight: 500 (Medium)
- Color: #FFFFFF

#### Chip Close Button (right)
- Icon: `X` (Lucide)
- Size: 14px [ESTIMATED]
- Color: #9A9A9A [ESTIMATED]
- Margin left: 6px [ESTIMATED]
- Tap: removes chip, deactivates search mode with slide-down animation

### Text Input Line
- Below chip
- Placeholder: "Search the web"
- Placeholder color: #8E8E8E [ESTIMATED]
- Text color: #FFFFFF
- Font size: 16px

### Mic and Send Buttons
- Position: bottom-right of input container
- Same specs as screen 01
- Send button: disabled (empty input)

---

## Animations

### Activation (from Attachments BottomSheet closing)
1. Bottom sheet closes (slide-down)
2. Search chip slides up inside input (duration: 250ms [ESTIMATED])
3. Input expands vertically to accommodate chip
4. Suggestion texts slide up below content area (duration: 300ms)
5. Keyboard opens

### Deactivation (chip X tapped)
1. Chip slides down and fades out (duration: 200ms [ESTIMATED])
2. Input contracts back to single-line height
3. Suggestion texts slide down (duration: 200ms)
4. Placeholder reverts to "Ask ChatGPT"
5. Returns to Screen 01 state (but title/suggestion buttons reappear)

### Easing
- Slide animations: `Easing.bezier(0.4, 0.0, 0.2, 1.0)`

---

## Behavior

- **Tap on trending item** -> Auto-fills input and sends message -> screen 06
- **Type text + tap send** -> Sends search query -> screen 06 -> screen 08
- **Tap chip X** -> Deactivates search mode

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| Search chip | "Search mode active" | "button" |
| Chip close button | "Remove search mode" | "button" |
| Trending item | (dynamic: text content) | "button" |
