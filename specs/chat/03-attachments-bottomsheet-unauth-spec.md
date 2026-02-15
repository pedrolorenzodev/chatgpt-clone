# 03 -- Attachments BottomSheet (Unauth)

**Screen name:** AttachmentsBottomSheetUnauth
**File reference:** `references/chat/03_tap-plus-btn_attachments-bottomsheet.jpg`
**Auth state:** Unauthenticated
**Description:** A bottom sheet that slides up when the user taps the "+" button left of the input. It shows a row of media attachment buttons (Camera, Photos, Files) at the top, a separator, and a list of feature items (Web search, Study and learn, Explore apps). A semi-transparent backdrop covers the rest of the screen.

---

## Layout Structure

```
Backdrop (semi-transparent overlay)
BottomSheet (slide-up from bottom)
  DragHandle (top center)
  MediaButtonsRow
    [Camera] [Photos] [Files]
  Separator
  FeatureItemsList
    WebSearch (icon + title + subtitle)
    StudyAndLearn (icon + title + subtitle)
    ExploreApps (icon + title only)
```

---

## Backdrop
- Background: #000000 at 50% opacity
- Position: absolute, covers entire screen
- Tap: dismisses bottom sheet
- Animation: fade in 300ms on open, fade out 300ms on close

---

## BottomSheet Container
- Background: #212121 [ESTIMATED]
- Border radius (top-left, top-right): 20px [ESTIMATED]
- Padding top: 12px [ESTIMATED]
- Padding horizontal: 20px [ESTIMATED]
- Padding bottom: 36px [ESTIMATED] (safe area bottom)
- Animation entry: slide-up from bottom, duration 300ms
- Animation exit: slide-down, duration 250ms
- Dismissible by: tap backdrop or swipe down

### Drag Handle
- Width: 36px [ESTIMATED]
- Height: 4px [ESTIMATED]
- Background: #4A4A4A [ESTIMATED]
- Border radius: 2px
- Position: centered horizontally
- Margin bottom: 16px [ESTIMATED]

---

## Media Buttons Row

- Layout: row, evenly spaced
- Padding horizontal: 12px [ESTIMATED]
- Margin bottom: 20px [ESTIMATED]
- Gap between buttons: 12px [ESTIMATED]

### Individual Media Button
- Shape: rounded rectangle
- Width: flex 1 (equal thirds)
- Height: 90px [ESTIMATED]
- Background: #333333 [ESTIMATED]
- Border radius: 14px [ESTIMATED]
- Layout: column, centered
- Gap between icon and text: 8px [ESTIMATED]

#### Icon
- Size: 28px [ESTIMATED]
- Color: #FFFFFF
- Stroke width: 1.5px [ESTIMATED]

#### Text
- Font size: 14px [ESTIMATED]
- Font weight: 500 (Medium)
- Color: #FFFFFF

### Media Button Variants

| Button | Icon (Lucide) | Text |
|---|---|---|
| Camera | `Camera` | "Camera" |
| Photos | `Image` | "Photos" |
| Files | `Paperclip` | "Files" |

### Press Feedback
- Background changes to #3F3F3F [ESTIMATED]
- Opacity: 0.85

### Behavior (Unauth)
- **Camera** -> Closes bottom sheet, opens Auth BottomSheet
- **Photos** -> Closes bottom sheet, opens Auth BottomSheet
- **Files** -> Closes bottom sheet, opens Auth BottomSheet

---

## Separator
- Height: 1px
- Color: #3A3A3A [ESTIMATED]
- Margin horizontal: 0 (full width within padding)
- Margin vertical: 4px top, 8px bottom [ESTIMATED]

---

## Feature Items List

### Individual Feature Item
- Layout: row, vertically centered
- Height: 64px [ESTIMATED]
- Padding vertical: 14px [ESTIMATED]

#### Icon (left)
- Size: 24px [ESTIMATED]
- Color: #FFFFFF
- Margin right: 16px [ESTIMATED]

#### Text Block (right of icon)
- Layout: column

##### Title
- Font size: 16px [ESTIMATED]
- Font weight: 500 (Medium)
- Color: #FFFFFF

##### Subtitle (if present)
- Font size: 14px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #9A9A9A [ESTIMATED]
- Margin top: 2px [ESTIMATED]

### Feature Items Content (Unauth -- 3 items)

| # | Icon (Lucide) | Title | Subtitle | Behavior |
|---|---|---|---|---|
| 1 | `Globe` (web icon) | "Web search" | "Find real-time news and info" | Closes sheet -> activates Search mode (04) |
| 2 | `BookOpen` (graduation cap) | "Study and learn" | "Learn a new concept" | Closes sheet -> activates Study mode (05) |
| 3 | `LayoutGrid` | "Explore apps" | (none) | Closes sheet -> opens Auth BottomSheet |

Note: The "Web search" icon appears to use a globe with latitude/longitude lines, similar to `Globe` from Lucide. Per global-notes.md, "web" from MaterialCommunityIcons may be more accurate.

Note: "Study and learn" icon shows what appears to be an open book with a graduation cap. The closest Lucide match is `GraduationCap` or `BookOpen`. The screenshot shows something like a book with a mortarboard -- use `GraduationCap` as primary, with `BookOpen` as fallback.

### Press Feedback
- Background: #2A2A2A [ESTIMATED]
- Border radius: 8px [ESTIMATED]

---

## Keyboard Behavior
- The keyboard closes when the bottom sheet opens
- The keyboard reopens when the bottom sheet closes (if focus was on input)

---

## Animations

### Opening
1. Backdrop fades in (0 to 0.5 opacity, 300ms)
2. Bottom sheet slides up from offscreen (300ms, easing: standard)
3. Keyboard slides down simultaneously

### Closing
1. Bottom sheet slides down (250ms)
2. Backdrop fades out (250ms)
3. Keyboard slides up if input was focused

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| Backdrop | "Close attachments" | "button" |
| Drag handle | "Drag to resize" | "adjustable" |
| Camera | "Take a photo" | "button" |
| Photos | "Choose from photos" | "button" |
| Files | "Choose a file" | "button" |
| Web search | "Web search" | "button" |
| Study and learn | "Study and learn" | "button" |
| Explore apps | "Explore apps" | "button" |
