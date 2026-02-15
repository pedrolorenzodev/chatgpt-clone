# 08 -- AI Response Search Mode (Unauth)

**Screen name:** AIResponseSearchModeUnauth
**File reference:** `references/chat/08_ai-response-search-mode.jpg`
**Auth state:** Unauthenticated
**Description:** The AI response in search mode. Compared to the normal response (07), this includes rich Markdown formatting (headers, bullets, bold text), inline citation chips linked to sources, and a "Sources" button in the action bar that shows source favicons.

---

## Layout Structure (top to bottom)

```
SafeAreaView (bg: #000000, flex: 1)
  Header (same as 01)
  ScrollableContent (flex: 1, scrollable)
    (previous messages above, scrolled up)
    AIResponseRichText (left-aligned)
      Markdown paragraphs
      Bold text
      Bullet lists
      Citation chips (inline)
      Headers with emoji
    ActionBar (3 icons + Sources button)
  InputBar (same as 07)
```

---

## AI Response Rich Text

- Same positioning and margins as screen 07
- Margin left: 16px [ESTIMATED]
- Margin right: 16px [ESTIMATED]

### Markdown Rendering

#### Paragraphs
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #FFFFFF
- Line height: 24px [ESTIMATED]
- Paragraph spacing (between paragraphs): 16px [ESTIMATED]

#### Headers (H2/H3)
- Preceded by emoji icon
- Font size: 18px [ESTIMATED]
- Font weight: 700 (Bold)
- Color: #FFFFFF
- Margin top: 24px [ESTIMATED]
- Margin bottom: 8px [ESTIMATED]

#### Bold Text
- Font weight: 700 (Bold)
- Color: #FFFFFF
- Used inline within paragraphs

#### Bullet Lists
- Bullet character: solid circle (or using standard markdown bullet)
- Bullet color: #FFFFFF
- Indent left: 16px [ESTIMATED]
- Bullet-to-text gap: 8px [ESTIMATED]
- Item spacing: 8px [ESTIMATED]

### Citation Chips (Inline)
- Appear at the end of sentences/paragraphs
- Shape: pill/capsule
- Height: 24px [ESTIMATED]
- Background: #333333 [ESTIMATED]
- Border radius: 12px (fully rounded)
- Padding horizontal: 8px [ESTIMATED]
- Margin left: 4px [ESTIMATED] (from preceding text)
- Display: inline (flows with text)

#### Citation Chip Content
- Favicon: 14px [ESTIMATED], circular
- Text: domain name (e.g., "Wikipedia", "Ambito")
- Font size: 12px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #D4D4D4 [ESTIMATED]
- Gap favicon-to-text: 4px [ESTIMATED]

#### Multi-source Citation Chip
- When multiple sources are cited: shows "+1", "+2" etc
- E.g., "latamjournalismreview.org +1"
- The "+N" text indicates additional sources

#### Citation Chip Behavior
- Tap: opens Sources BottomSheet (screen 09)

---

## Action Bar (Search Mode -- UNAUTH)

- Same base as screen 07 (3 icons: copy, speaker, regenerate)
- PLUS: Sources button on the right

### Layout
- Row, vertically centered
- Left group: copy, speaker, regenerate (same as 07)
- Right group: Sources button (separated by gap)
- Gap between left icons: 16px [ESTIMATED]
- Gap between regenerate and Sources: 24px [ESTIMATED]

### Sources Button
- Layout: row, vertically centered
- Height: 32px [ESTIMATED]
- Background: transparent
- Gap between favicons and text: 8px [ESTIMATED]

#### Favicon Stack
- Shows 2-3 small circular favicon images overlapping
- Each favicon: 20px diameter [ESTIMATED]
- Border: 2px solid #000000 (to create separation between overlapping icons) [ESTIMATED]
- Overlap offset: -8px horizontal between each [ESTIMATED]
- Favicons represent the most prominent sources cited

#### "Sources" Text
- Text: "Sources"
- Font size: 14px [ESTIMATED]
- Font weight: 500 (Medium)
- Color: #D4D4D4 [ESTIMATED]
- Margin left: 4px [ESTIMATED] (from favicon stack)

### Sources Button Behavior
- Tap: opens Sources BottomSheet (screen 09)

---

## Loading Text for Search Mode
- During loading (screen 06 state), the shimmer text shows "Searching..." instead of "Thinking..."
- Same shimmer animation specs

---

## Animations
- Same streaming animation as 07
- Action bar fade-in (300ms) after streaming completes
- Sources button appears as part of action bar fade-in

---

## Behavior
- **Copy, Speaker, Regenerate** -> Same as 07
- **Sources button** -> Opens Sources BottomSheet (screen 09)
- **Citation chip tap** -> Opens Sources BottomSheet (screen 09)

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| Citation chip | (dynamic: source name) | "link" |
| Sources button | "View sources" | "button" |
| (others same as 07) | | |
