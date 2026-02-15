# 06 -- Message Sent / AI Loading (Unauth)

**Screen name:** MessageSentAILoadingUnauth
**File reference:** `references/chat/06_message-sent_ai-loading.jpg`
**Auth state:** Unauthenticated
**Description:** After the user sends a message, the keyboard closes, the user's message appears as a bubble on the right, and a white pulsing circle loading indicator appears on the left side indicating the AI is processing. The send button is replaced by a stop button. After the pulsing circle, a "Thinking..." shimmer text appears.

---

## Layout Structure (top to bottom)

```
SafeAreaView (bg: #000000, flex: 1)
  Header (same as 01)
  ScrollableContent (flex: 1)
    UserMessageBubble (right-aligned)
    AILoadingIndicator (left-aligned)
  InputBar (reset state)
    PlusButton
    TextInput "Ask ChatGPT" (empty, placeholder visible)
    MicButton
    StopButton (replaces SendButton)
```

---

## Changes from Previous State

1. **Keyboard** -- CLOSED
2. **Input** -- Emptied, placeholder "Ask ChatGPT" restored
3. **Send button** -- Replaced by Stop button (IMMEDIATE, no animation)
4. **Content area** -- User message bubble + AI loading indicator
5. **Suggestion texts / chips** -- REMOVED

---

## User Message Bubble

- Position: right-aligned
- Alignment: flex-end
- Max width: 85% of screen width [ESTIMATED]
- Background: #2F2F2F [ESTIMATED]
- Border radius: 20px [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Padding vertical: 12px [ESTIMATED]
- Margin right: 16px [ESTIMATED]
- Margin top: 16px [ESTIMATED] (below header)
- Margin bottom: 24px [ESTIMATED]

### Message Text
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #FFFFFF
- Line height: 22px [ESTIMATED]

---

## AI Loading Indicator

- Position: left-aligned, below user message
- Margin left: 16px [ESTIMATED]

### Phase 1: Pulsing Circle
- Shape: circle
- Size: 20px diameter [ESTIMATED]
- Background: #FFFFFF
- Animation: "breathing" / scale pulsing
  - Scale oscillates between 0.8 and 1.2 [ESTIMATED]
  - Cycle duration: ~1.2 seconds
  - Easing: ease-in-out (sinusoidal feel)
  - Loop: continuous until Phase 2 begins

### Phase 2: "Thinking..." Shimmer Text
- Replaces the pulsing circle
- Text: "Thinking..." (or "Searching..." in Search mode)
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Base color: #6E6E6E [ESTIMATED]
- Shimmer highlight color: #FFFFFF at reduced opacity [ESTIMATED]
- Shimmer animation: gradient sweeps left-to-right continuously
  - Duration per sweep: ~1.5s [ESTIMATED]
  - Loop: continuous until AI response begins streaming
- Implementation: Use `react-native-reanimated` with a linear gradient mask that translates horizontally

### Transition Phase 1 -> Phase 2
- Circle fades out (100ms [ESTIMATED])
- "Thinking..." fades in (100ms [ESTIMATED])
- Duration of Phase 1: approximately 1-2 seconds before transitioning

---

## Input Bar (Reset State)

### Text Input
- Value: empty
- Placeholder: "Ask ChatGPT"
- Keyboard: closed

### Stop Button (replaces Send Button)
- Shape: rounded square
- Size: 36px [ESTIMATED]
- Background: #FFFFFF [ESTIMATED]
- Border radius: 8px [ESTIMATED]
- Icon: square/stop (a solid square centered)
- Icon size: 14px [ESTIMATED]
- Icon color: #000000
- Transition from Send: IMMEDIATE (no animation)
- Tap: stops AI generation, reverts to Send button

### Mic Button
- Visible (input is empty)
- Same specs as screen 01

---

## Animations

### Message Send Sequence
1. Keyboard slides down (system animation)
2. Input text clears, placeholder appears (immediate)
3. Send button -> Stop button (immediate, no transition)
4. User message bubble appears (can slide in from bottom or just appear)
5. AI loading indicator appears below (slight delay, ~100ms)

### AI Loading Animation
1. White circle pulses (breathing scale animation)
2. After ~1-2s, transitions to "Thinking..." shimmer text
3. Shimmer continues until AI response starts streaming

---

## Behavior

- **Stop button** -> Stops AI generation, clears loading indicator, reverts Stop to Send button
- **Plus button** -> Still opens Attachments BottomSheet
- **Mic button** -> Still opens Auth BottomSheet (unauth)

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| User message bubble | (dynamic: message content) | "text" |
| AI loading indicator | "AI is thinking" | "progressbar" |
| Stop button | "Stop generating" | "button" |
