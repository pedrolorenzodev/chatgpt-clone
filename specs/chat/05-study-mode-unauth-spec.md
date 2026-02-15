# 05 -- Study Mode (Unauth)

**Screen name:** StudyModeUnauth
**File reference:** `references/chat/05_tap-study-and-learn_study-mode.jpg`
**Auth state:** Unauthenticated
**Description:** After selecting "Study and learn" from the Attachments BottomSheet, a "Study" chip appears inside the input field. The placeholder changes to "Study and learn" and 3 study-related suggestion items appear above the input. The keyboard opens. This follows the same Feature Mode pattern as Search mode (04) with content differences.

---

## Layout Structure (top to bottom)

```
SafeAreaView (bg: #000000, flex: 1)
  Header (same as 01)
  ScrollableContent (flex: 1, empty)
  SuggestionTextsList (above input -- 3 items)
    SuggestionItem (icon + text + divider)
    SuggestionItem (icon + text + divider)
    SuggestionItem (icon + text, no divider)
  InputBarWithChip
    PlusButton
    InputContainer
      StudyChip (icon + "Study" + close X)
      TextInput "Study and learn"
      MicButton
      SendButton
  Keyboard
```

---

## Differences from Search Mode (04)

| Aspect | Search Mode (04) | Study Mode (05) |
|---|---|---|
| Chip text | "Search" | "Study" |
| Chip icon | Globe (teal) | GraduationCap/BookOpen (yellow) |
| Placeholder | "Search the web" | "Study and learn" |
| Suggestion count | 4 items | 3 items |
| Suggestion icons | TrendingUp (blue) | Various (white/gray) |
| Suggestion content | Trending topics | Study activities |

---

## Study Chip
- Same structure as Search chip (see 04 spec)
- Icon: `GraduationCap` or `BookOpen` (Lucide)
- Icon color: #F5C542 (yellow/amber) [ESTIMATED]
- Text: "Study"
- Close X: same as 04

---

## Suggestion Texts List (Study Items)

### 3 Study Suggestion Items

| # | Icon (Lucide) | Icon Color | Text |
|---|---|---|---|
| 1 | `Pencil` (or `PenLine`) | #FFFFFF [ESTIMATED] | "Help me with my homework" |
| 2 | `MessageCircle` (speech bubble) | #FFFFFF [ESTIMATED] | "Explain a topic to me" |
| 3 | `SlidersHorizontal` (or `ListChecks`) | #FFFFFF [ESTIMATED] | "Create a practice quiz" |

### Item Specs
- Same layout as 04 suggestion items
- Height: 52px [ESTIMATED]
- Icon size: 22px [ESTIMATED]
- Icon margin right: 16px [ESTIMATED]
- Text font size: 16px [ESTIMATED]
- Text color: #D4D4D4 [ESTIMATED]
- Divider: 1px #2A2A2A [ESTIMATED]

---

## Animations
- Identical to Search mode (04) -- see that spec for details
- Chip: "Study" in Lucide icon
- Slide-up on activation, slide-down on deactivation

---

## Behavior
- **Tap on study suggestion** -> Auto-fills input and sends message -> screen 06 -> screen 07
- **Type text + tap send** -> Sends study query -> screen 06 -> screen 07
- **Tap chip X** -> Deactivates study mode, returns to screen 01 state

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| Study chip | "Study mode active" | "button" |
| Chip close button | "Remove study mode" | "button" |
| Study suggestion item | (dynamic: text content) | "button" |
