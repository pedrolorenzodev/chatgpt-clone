# 09 -- Sources BottomSheet (Unauth)

**Screen name:** SourcesBottomSheetUnauth
**File reference:** `references/chat/09_sources-bottomsheet.jpg`
**Auth state:** Unauthenticated
**Description:** A bottom sheet showing the list of cited sources from the AI's search-mode response. Each source shows a favicon, domain name, and article title. The list is scrollable. The sheet appears over the existing chat content with a dark backdrop.

---

## Layout Structure

```
Backdrop (semi-transparent)
BottomSheet (slide-up, takes ~55-60% of screen height)
  DragHandle
  Title "Citations"
  SourcesList (scrollable)
    SourceItem (favicon + domain + title + divider)
    SourceItem (favicon + domain + title + divider)
    SourceItem (favicon + domain + title)
    ... (more items)
```

---

## Backdrop
- Background: #000000 at 50% opacity
- Tap: dismisses bottom sheet

---

## BottomSheet Container
- Background: #212121 [ESTIMATED]
- Border radius (top-left, top-right): 20px [ESTIMATED]
- Height: approximately 55-60% of screen [ESTIMATED]
- Padding top: 12px [ESTIMATED]
- Padding horizontal: 20px [ESTIMATED]
- Animation entry: slide-up, 300ms
- Animation exit: slide-down, 250ms
- Dismissible by: tap backdrop, swipe down

### Drag Handle
- Width: 36px [ESTIMATED]
- Height: 4px [ESTIMATED]
- Background: #4A4A4A [ESTIMATED]
- Border radius: 2px
- Centered horizontally
- Margin bottom: 16px [ESTIMATED]

### Title
- Text: "Citations"
- Font size: 18px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: #FFFFFF
- Margin bottom: 16px [ESTIMATED]

---

## Sources List

- Scrollable (FlashList recommended)
- Padding bottom: safe area bottom [ESTIMATED]

### Individual Source Item
- Layout: column
- Padding vertical: 16px [ESTIMATED]

#### Favicon + Domain Row
- Layout: row, vertically centered
- Margin bottom: 6px [ESTIMATED]

##### Favicon
- Shape: circle
- Size: 20px [ESTIMATED]
- Border radius: 10px
- Margin right: 8px [ESTIMATED]
- Content: website favicon image (loaded from URL or bundled asset)

##### Domain Name
- Font size: 14px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #9A9A9A [ESTIMATED]

#### Article Title
- Font size: 16px [ESTIMATED]
- Font weight: 500 (Medium)
- Color: #FFFFFF
- Line height: 22px [ESTIMATED]
- Number of lines: 3 max (ellipsis) [ESTIMATED]

#### Divider (between items)
- Height: 1px
- Color: #3A3A3A [ESTIMATED]
- Margin top: 0 (at bottom of item padding)

### Example Source Items (from screenshot)

| Favicon | Domain | Title |
|---|---|---|
| (C logo) | cronista.com | "Que dijo MILEI: cuales fueron las palabras que mas repitio en su discurso - El Cronista" |
| (DP logo) | diariopanorama.com | "Una por una: cuales fueron las palabras que mas uso Javier Milei en su discurso - Diario Panorama" |
| (A logo) | Ambito | "Debate presidencial: cuales fueron las palabras mas usadas por Massa y Javier Milei" |

### Source Item Press Feedback
- Background: #2A2A2A [ESTIMATED]
- Border radius: 8px [ESTIMATED]

### Source Item Behavior
- Tap: opens URL in external browser

---

## Animations

### Opening
1. Backdrop fades in (0 -> 0.5 opacity, 300ms)
2. Bottom sheet slides up (300ms, standard easing)

### Closing
1. Bottom sheet slides down (250ms)
2. Backdrop fades out (250ms)

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| Sources bottom sheet | "Citations" | "none" |
| Source item | (dynamic: "Open [title] from [domain]") | "link" |
| Backdrop | "Close citations" | "button" |
