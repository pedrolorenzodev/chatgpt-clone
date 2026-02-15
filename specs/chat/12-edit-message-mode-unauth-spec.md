# 12 -- Edit Message Mode (Unauth)

**Screen name:** EditMessageModeUnauth
**File reference:** `references/chat/12_edit-message-mode.jpg`
**Auth state:** Unauthenticated
**Description:** After selecting "Edit Message" from the context menu, the chat scrolls to show the last AI response with its action bar, a warning container appears below, and the input bar shows an "Editing message" chip with the original message text pre-filled. The keyboard opens automatically.

---

## Layout Structure (top to bottom)

```
SafeAreaView (bg: #000000, flex: 1)
  Header (same as 01)
  ScrollableContent (scrolled to bottom)
    (previous messages above, scrolled up)
    AIResponseText (last response visible)
    ActionBar (3 icons, same as 07)
    EditWarningContainer
  InputBarWithEditChip
    PlusButton
    InputContainer
      EditChip (pen icon + "Editing message" + close X)
      TextInput (pre-filled with original message)
    SendButton (enabled, since text is present)
  Keyboard (auto-opened)
```

---

## Changes from Normal Chat State

1. **Chat auto-scrolls** to show the end of conversation
2. **Warning container** appears below the last AI response (fade-in)
3. **Input has "Editing message" chip** (slide-up)
4. **Input text is pre-filled** with the original user message
5. **Keyboard opens** automatically
6. **Mic button** is hidden (text is present in input)

---

## Edit Warning Container

- Position: below the last AI response's action bar
- Margin horizontal: 16px [ESTIMATED]
- Margin top: 16px [ESTIMATED]
- Margin bottom: 16px [ESTIMATED]
- Background: #1A1A1A [ESTIMATED]
- Border: 1px solid #333333 [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Padding vertical: 14px [ESTIMATED]
- Layout: row, vertically centered

### Info Icon (left)
- Icon: `Info` (Lucide) -- circle with "i"
- Size: 20px [ESTIMATED]
- Color: #9A9A9A [ESTIMATED]
- Margin right: 12px [ESTIMATED]

### Warning Text
- Text: "Editing this message will restart the conversation from here."
- Font size: 14px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #D4D4D4 [ESTIMATED]
- Line height: 20px [ESTIMATED]
- Flex: 1

### Animation
- Fade-in: duration 300ms

---

## Input Bar With Edit Chip

### Input Container (expanded)
- Same expanded structure as Search mode (04)
- Background: #2F2F2F
- Border radius: 24px [ESTIMATED]
- Padding: 12px [ESTIMATED]
- Min height: ~100px [ESTIMATED] (chip + multi-line text)

### Edit Chip
- Position: top-left inside input container
- Layout: row, vertically centered
- Height: 32px [ESTIMATED]
- Background: transparent
- Border: 1px solid #4A4A4A [ESTIMATED]
- Border radius: 16px (fully rounded)
- Padding horizontal: 10px [ESTIMATED]
- Margin bottom: 4px [ESTIMATED]

#### Chip Icon
- Icon: `Pencil` (or `PenLine`, Lucide)
- Size: 16px [ESTIMATED]
- Color: #5BC5C9 (teal/cyan) [ESTIMATED] -- matches the "Editing message" text color
- Margin right: 6px [ESTIMATED]

#### Chip Text
- Text: "Editing message"
- Font size: 14px [ESTIMATED]
- Font weight: 500 (Medium)
- Color: #5BC5C9 (teal/cyan) [ESTIMATED]

#### Chip Close Button
- Icon: `X` (Lucide)
- Size: 14px [ESTIMATED]
- Color: #9A9A9A [ESTIMATED]
- Margin left: 6px [ESTIMATED]
- Tap: cancels editing, removes chip and warning container

### Pre-filled Text Input
- Below the chip
- Text: original user message (e.g., "Las palabras que mas dijo Milei en television?")
- Text color: #FFFFFF
- Font size: 16px
- Cursor: visible at end of text
- Multi-line: YES (wraps if message is long)
- The text is fully editable

### Send Button (enabled)
- Position: bottom-right of input container
- Background: #FFFFFF
- Icon: ArrowUp, #000000
- Size: 36px [ESTIMATED]
- Press feedback: opacity 0.85

### Mic Button
- HIDDEN (text is present)

---

## Animations

### Entry Sequence
1. Chat auto-scrolls to end of conversation (smooth scroll)
2. Warning container fades in (300ms)
3. Edit chip slides up inside input (250ms [ESTIMATED])
4. Input expands to accommodate chip + text
5. Text input pre-fills with original message
6. Keyboard opens

### Cancel (chip X tap)
1. Chip slides down / fades out (200ms)
2. Warning container fades out (200ms)
3. Input contracts, text clears
4. Returns to normal chat state

### Send Edited Message
1. Keyboard closes
2. Chip disappears, warning disappears
3. Conversation restarts from edited message point
4. Returns to loading state (screen 06)

---

## Behavior

- **Chip X button** -> Cancels edit, removes chip and warning, keyboard may close
- **Send button** -> Sends the edited message, restarts conversation from that point -> screen 06
- **Text editing** -> User can modify the pre-filled text freely
- **The conversation after this message point is deleted/replaced** when the edit is sent

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| Warning container | "Editing this message will restart the conversation from here" | "alert" |
| Edit chip | "Editing message mode" | "button" |
| Chip close button | "Cancel editing" | "button" |
| Send button | "Send edited message" | "button" |
