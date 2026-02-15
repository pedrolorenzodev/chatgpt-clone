# 07 -- AI Response Complete (Unauth)

**Screen name:** AIResponseCompleteUnauth
**File reference:** `references/chat/07_ai-response-complete.jpg`
**Auth state:** Unauthenticated
**Description:** The AI has finished generating its response. The full response text is visible below the user's message bubble. An action bar with 3 icons (copy, speaker, regenerate) appears below the response text. The stop button has reverted to the send button. The keyboard is closed.

---

## Layout Structure (top to bottom)

```
SafeAreaView (bg: #000000, flex: 1)
  Header (same as 01)
  ScrollableContent (flex: 1, scrollable)
    UserMessageBubble (right-aligned)
    AIResponseText (left-aligned, full width)
    ActionBar (3 icons, left-aligned)
  InputBar
    PlusButton
    TextInput "Ask ChatGPT"
    MicButton
    SendButton (disabled, back from stop)
```

---

## User Message Bubble
- Same specs as screen 06
- Right-aligned, background #2F2F2F, rounded

---

## AI Response Text

- Position: left-aligned, below user message
- Margin left: 16px [ESTIMATED]
- Margin right: 16px [ESTIMATED]
- Margin top: 24px [ESTIMATED] (below user bubble)
- Margin bottom: 12px [ESTIMATED] (above action bar)

### Text Content
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #FFFFFF
- Line height: 24px [ESTIMATED]
- Selectable: YES (long press activates native text selection, NOT the context menu -- context menu is only for user message bubbles)

### Markdown Support (Normal Mode)
- In standard (non-search) mode, response text is relatively plain
- Supports: emoji rendering, basic paragraph breaks
- Does NOT use rich markdown headers/bullets in this mode (that's search mode, screen 08)

### Streaming Animation
- Text appears word-by-word or token-by-token (streaming effect)
- Each new word/token fades in rapidly
- The scroll view auto-scrolls to keep the latest content visible
- This is documented as a CRITICAL animation -- see `specs/animations/streaming-text.md`

---

## Action Bar (UNAUTH -- 3 icons)

- Position: left-aligned, below AI response text
- Layout: row
- Height: 36px [ESTIMATED]
- Margin left: 16px [ESTIMATED]
- Margin top: 8px [ESTIMATED]
- Gap between icons: 16px [ESTIMATED]
- Animation: fade-in 300ms after streaming completes

### Icon Buttons (left to right)

| # | Icon (Lucide) | Size | Color | Action |
|---|---|---|---|---|
| 1 | `Copy` | 20px [ESTIMATED] | #6E6E6E [ESTIMATED] | Copies response to clipboard |
| 2 | `Volume2` | 20px [ESTIMATED] | #6E6E6E [ESTIMATED] | Reads response aloud (TTS) |
| 3 | `RefreshCw` | 20px [ESTIMATED] | #6E6E6E [ESTIMATED] | Regenerates response -> back to 06 |

### Icon Button Specs
- Touch target: 36x36px [ESTIMATED]
- Background: transparent
- Press feedback: opacity 0.5 [ESTIMATED]
- Icon stroke width: 1.5px [ESTIMATED]

---

## Input Bar
- Same as screen 01 (reset state)
- Keyboard is CLOSED
- Send button is disabled (reverted from stop button)
- Transition: Stop -> Send is IMMEDIATE (no animation)

---

## Animations

### Streaming to Complete Transition
1. Text streams in token-by-token (see streaming-text animation spec)
2. When streaming completes:
   - Stop button -> Send button (IMMEDIATE)
   - Action bar fades in (300ms, ease-in)

### Action Bar Fade-in
- Opacity: 0 -> 1
- Duration: 300ms
- Easing: `Easing.bezier(0.4, 0.0, 0.2, 1.0)`

---

## Scroll Behavior
- During streaming: auto-scrolls to keep latest content visible
- After completion: user can freely scroll up and down
- Long content: extends beyond one screen, fully scrollable

---

## Behavior

- **Copy icon** -> Copies full AI response text to clipboard (no visible feedback in unauth)
- **Speaker icon** -> Initiates text-to-speech playback of the response
- **Regenerate icon** -> Deletes current response, returns to loading state (screen 06)
- **Long press on user message bubble** -> Opens context menu (screen 10)
- **Long press on AI response text** -> Activates native text selection (NOT context menu)

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| AI response text | (dynamic: response content) | "text" |
| Copy button | "Copy response" | "button" |
| Speaker button | "Read aloud" | "button" |
| Regenerate button | "Regenerate response" | "button" |
