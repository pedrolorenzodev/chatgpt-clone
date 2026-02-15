# 11 -- Select Text Screen (Unauth)

**Screen name:** SelectTextScreenUnauth
**File reference:** `references/chat/11_select-text-screen.jpeg`
**Auth state:** Unauthenticated
**Description:** A fullscreen modal that displays the user's message text in a selectable read-only format. The user can select and copy text using native OS text selection gestures. Has a back button and "Select Text" title in the header.

---

## Layout Structure

```
SafeAreaView (bg: #000000, flex: 1)
  Header
    BackButton (left)
    Title "Select Text" (center)
  Content (flex: 1)
    SelectableText (user's message)
```

---

## Screen Type
- Fullscreen modal (NOT a navigation push)
- Overlays the entire screen
- Animation: fade-in on entry, fade-out on exit

---

## Header

- Height: 56px [ESTIMATED]
- Background: #000000
- Padding horizontal: 16px [ESTIMATED]
- Layout: row, vertically centered

### Back Button (left)
- Shape: circle
- Size: 40px [ESTIMATED]
- Background: #2F2F2F [ESTIMATED]
- Icon: `ArrowLeft` (Lucide)
- Icon size: 22px [ESTIMATED]
- Icon color: #FFFFFF
- Border radius: 20px
- Press feedback: opacity 0.7
- Action: closes modal, returns to chat

### Title "Select Text" (center)
- Text: "Select Text"
- Font size: 18px [ESTIMATED]
- Font weight: 700 (Bold)
- Color: #FFFFFF
- Position: centered horizontally in header

---

## Content Area

- Flex: 1
- Padding horizontal: 16px [ESTIMATED]
- Padding top: 16px [ESTIMATED]

### Selectable Text
- Text: the user's message content (read-only)
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #FFFFFF
- Line height: 24px [ESTIMATED]
- Selectable: YES (native text selection enabled)
- Editable: NO
- The text supports native long-press to select, drag handles to adjust selection, and copy action via system context menu

---

## Animations

### Entry
- Fade-in: opacity 0 -> 1
- Duration: 200ms [ESTIMATED]
- Overlays entire screen (covers chat underneath)

### Exit (back button)
- Fade-out: opacity 1 -> 0
- Duration: 200ms [ESTIMATED]
- Returns to chat (screen 07 or 08)

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| Back button | "Go back" | "button" |
| Title | "Select Text" | "header" |
| Selectable text | (dynamic: message content) | "text" |
