# Chat Auth Screens -- Comprehensive UI Specification

This document covers ALL authenticated chat screens and the differences from their unauthenticated counterparts. Screens are organized by their reference screenshot number.

---

## 01 -- New Chat Empty (Auth)

**Screen name:** NewChatEmptyAuth
**File reference:** `references/chat/01_new-chat-empty-auth.jpg`
**Auth state:** Authenticated
**Description:** The main landing screen for authenticated users. Shows a header with "ChatGPT" pill button, two action icons (Add Person + Bubble), centered prompt title with different suggestion buttons vs unauth, and a modified input bar with a Talk button replacing Send.

---

### Layout Structure (top to bottom)

```
SafeAreaView (bg: #000000, flex: 1)
  StatusBar (Android system, light-content)
  Header
    SidebarButton (left)
    ChatGPTButton (left, adjacent to sidebar) -- pill-shaped, tappable
    [spacer]
    AddPersonButton (right)
    BubbleButton (right)
  ScrollableContent (flex: 1, centered vertically)
    PromptTitle "What can I help with?"
    SuggestionButtonsGrid (2x2)
      Row 1: [Create image] [Brainstorm]
      Row 2: [Help me write] [Get advice]
  InputBar
    PlusButton (left)
    TextInput "Ask ChatGPT"
    MicButton
    TalkButton (right, inside input)
  Keyboard (auto-opened)
```

---

### Element Specifications

#### Header

- Height: 56px [ESTIMATED]
- Padding horizontal: 16px
- Padding top: 8px below safe area [ESTIMATED]
- Background: #000000 (with subtle gradient overlay extending down -- see global-notes.md)
- Alignment: row, vertically centered
- Left group: SidebarButton + ChatGPTButton with 8px gap [ESTIMATED]
- Right group: AddPersonButton + BubbleButton with 8px gap [ESTIMATED]

##### Sidebar Button (top-left)

- Identical to unauth -- see `01-new-chat-empty-unauth-spec.md`
- Shape: circle
- Size: 44px diameter [ESTIMATED]
- Background: #2F2F2F
- Icon: `Minus` (Lucide) -- horizontal line
- Icon size: 24px [ESTIMATED]
- Icon color: #FFFFFF
- Border radius: 22px
- Press feedback: opacity 0.7

##### ChatGPT Button (left, next to sidebar button)

- Shape: pill / rounded rectangle
- Width: auto (content-based), approximately 120px [ESTIMATED]
- Height: 44px [ESTIMATED]
- Background: #2F2F2F
- Border radius: 22px (fully rounded)
- Text: "ChatGPT"
- Text color: #FFFFFF
- Font size: 19px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Padding horizontal: 18px [ESTIMATED]
- Press feedback: opacity 0.7
- **CRITICAL DIFFERENCE from unauth:** This is a tappable button (not plain centered text). On tap, closes keyboard and opens Attachments BottomSheet (chat/03 auth).

##### Add Person Button (top-right)

- Shape: oval / pill, shared container with BubbleButton
- Both icons appear to sit inside a single combined pill-shaped container
- Combined container background: #2F2F2F [ESTIMATED]
- Combined container height: 44px [ESTIMATED]
- Combined container border radius: 22px
- Combined container padding horizontal: 14px [ESTIMATED]
- Gap between icons inside container: 16px [ESTIMATED]
- Icon: `UserPlus` (Lucide) -- person with plus sign
- Icon size: 22px [ESTIMATED]
- Icon color: #FFFFFF
- Press feedback: opacity 0.7
- Action: Opens GroupChat BottomSheet (chat/13)

##### Bubble Button (top-right, inside combined pill)

- Icon: Custom icon resembling a viewfinder/scanner -- circular with corner markers (Lucide `ScanLine` or `Scan`)
- Icon size: 22px [ESTIMATED]
- Icon color: #FFFFFF
- Press feedback: opacity 0.7
- Action: Activates "Hide Chat" state (chat/14)

#### Scrollable Content Area

- Flex: 1
- Content vertically centered when no messages
- Padding horizontal: 24px

##### Prompt Title

- Text: "What can I help with?"
- Font size: 28px [ESTIMATED]
- Font weight: 700 (Bold)
- Color: #FFFFFF
- Text align: center
- Margin bottom: 24px [ESTIMATED]
- **Same as unauth**

##### Suggestion Buttons Grid (Auth variant)

- Layout: 2 columns, 2 rows -- flex-wrap row, centered
- Gap between buttons: 10px horizontal, 12px vertical [ESTIMATED]

##### Button Variants (Auth -- different from unauth):

| Button | Icon (Lucide) | Icon Color | Text |
|---|---|---|---|
| Create image | `ImagePlus` (or similar palette icon) | #4ADE80 (green) [ESTIMATED] | "Create image" |
| Brainstorm | `Lightbulb` | #F5C542 (yellow/amber) [ESTIMATED] | "Brainstorm" |
| Help me write | `PenLine` (or editing lines icon) | #C084FC (purple/lavender) [ESTIMATED] | "Help me write" |
| Get advice | `GraduationCap` (or gem-like icon) | #5BC5C9 (teal/cyan) [ESTIMATED] | "Get advice" |

- Individual button specs identical to unauth: pill shape, 48px height, 1px solid #3A3A3A border, border-radius 24px, transparent bg
- Icon size: 22px [ESTIMATED]
- Text font size: 16px [ESTIMATED]
- Text font weight: 400 (Regular)
- Text color: #9A9A9A [ESTIMATED]
- Press feedback: background #2A2A2A [ESTIMATED]

#### Input Bar

- Position: bottom of screen, above keyboard
- Background: #000000
- Padding horizontal: 16px
- Padding bottom: 8px [ESTIMATED]
- Layout: row, vertically centered

##### Plus Button (left of input)

- Identical to unauth -- circle, 44px, bg #2F2F2F, `Plus` icon, 22px, #FFFFFF

##### Text Input Field

- Flex: 1
- Height: 48px [ESTIMATED]
- Background: #2F2F2F
- Border radius: 24px (fully rounded) [ESTIMATED]
- Padding horizontal: 16px
- Placeholder: "Ask ChatGPT"
- Placeholder color: #8E8E8E [ESTIMATED]
- Text color: #FFFFFF
- Font size: 16px
- Font weight: 400

##### Mic Button (inside input, right side)

- Same as unauth visually: `Mic` icon, 22px, #8E8E8E
- **DIFFERENCE:** In auth mode, mic button is FUNCTIONAL (not blocked by auth sheet)

##### Talk Button (inside input, far right) -- AUTH ONLY

- **Replaces Send button from unauth** in empty state
- Shape: circle
- Size: 36px [ESTIMATED]
- Background: #FFFFFF
- Icon: Audio waveform bars (Lucide `AudioLines` or similar)
- Icon size: 20px [ESTIMATED]
- Icon color: #000000
- Border radius: 18px (circular)
- Margin right: 6px [ESTIMATED]
- Press feedback: opacity 0.85
- Action: Activates TalkingChat state (chat/15) after 2s loading animation

##### Send Button (replaces Talk button when text entered)

- Appears only when text is present in input (Talk button disappears)
- Shape: circle
- Size: 36px [ESTIMATED]
- Background: #FFFFFF
- Icon: `ArrowUp` (Lucide)
- Icon size: 20px [ESTIMATED]
- Icon color: #000000
- Border radius: 18px (circular)

---

### Key Differences from Unauth (01)

| Aspect | Unauth | Auth |
|---|---|---|
| Header "ChatGPT" | Plain text, centered | Pill button, left-aligned, tappable |
| Header right | "Log in" pill (white bg) | AddPerson + Bubble icons in combined pill (dark bg) |
| Suggestion buttons | Brainstorm, Get advice, Code, Summarize text | Create image, Brainstorm, Help me write, Get advice |
| Send button (empty) | Disabled gray send arrow | White Talk button (waveform icon) |
| Mic button action | Opens Auth BottomSheet | Functional microphone |

---

## 02 -- Suggestion Buttons Expanded (Auth)

**Screen name:** SuggestionButtonsExpandedAuth
**File reference:** `references/chat/02_suggestion-buttons-expanded-auth.jpg`
**Auth state:** Authenticated
**Description:** After tapping any suggestion button, the input auto-fills and 4 suggestion text items appear below with icons. Functionally identical to unauth version.

---

### Layout Structure

```
SafeAreaView (bg: #000000, flex: 1)
  Header (same as 01 auth)
  ScrollableContent
    [empty space]
    SuggestionTextsList
      SuggestionTextItem (icon + text) x4
      Separator lines between items
  InputBar
    PlusButton
    TextInput (auto-filled with suggestion category text)
    SendButton (enabled, white)
  Keyboard
```

---

### Suggestion Text Items

- Layout: vertical list, each row is icon + text
- Icon position: left
- Icon size: 20px [ESTIMATED]
- Icon color: #E8875B (orange, matches the suggestion button category color) [ESTIMATED]
- Text font size: 16px [ESTIMATED]
- Text font weight: 400 (Regular)
- Text color: #9A9A9A [ESTIMATED]
- Row height: ~56px [ESTIMATED]
- Padding horizontal: 24px (matches screen padding)
- Separator: 1px line, #2A2A2A [ESTIMATED], spans full width with left margin ~64px [ESTIMATED]
- Press feedback: opacity 0.7 [ESTIMATED]

### Differences from Unauth (02)

- Header shows auth layout (ChatGPT pill + icons) instead of unauth layout
- Suggestion icons and content may differ based on which button was tapped
- No other functional differences

---

## 03 -- Attachments BottomSheet (Auth)

**Screen name:** AttachmentsBottomSheetAuth
**File reference:** `references/chat/03_attachments-bottomsheet-auth.jpg`
**Auth state:** Authenticated
**Description:** Full-featured attachments bottom sheet with Camera/Photos/Files header row and 10 feature items (vs 3 in unauth). Opened by tapping "ChatGPT" button or "+" button.

---

### Layout Structure

```
BottomSheet (bg: #212121, slide-up from bottom)
  DragHandle (center, top)
  MediaRow (Camera, Photos, Files)
  Separator
  FeatureList (scrollable / expandable)
    1. Model (Auto)
    2. Create image
    3. Deep research
    4. Web search
    5. Study and learn
    6. Agent mode
    7. Shopping research
    8. Your Year with ChatGPT
    9. Quizzes
    10. Explore apps
```

---

### Element Specifications

#### BottomSheet Container

- Background: #212121 [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Initial height: ~55% of screen height [ESTIMATED] (shows header + first 4 items)
- Expandable to ~100% screen height on swipe up
- Backdrop: #000000 at 50% opacity

#### Drag Handle

- Width: 40px [ESTIMATED]
- Height: 4px [ESTIMATED]
- Background: #4A4A4A [ESTIMATED]
- Border radius: 2px
- Margin top: 12px [ESTIMATED]
- Centered horizontally

#### Media Row (Camera / Photos / Files)

- Layout: horizontal row, 3 equal-width cards
- Padding horizontal: 16px [ESTIMATED]
- Padding top: 16px [ESTIMATED]
- Gap between cards: 10px [ESTIMATED]

##### Individual Media Card

- Shape: rounded rectangle
- Width: ~(screen-width - 32 - 20) / 3 [ESTIMATED]
- Height: 100px [ESTIMATED]
- Background: #333333 [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Layout: vertical, centered
- Icon: top, size 28px [ESTIMATED], color #FFFFFF
- Text: bottom, below icon
- Text font size: 14px [ESTIMATED]
- Text font weight: 500 (Medium)
- Text color: #FFFFFF
- Gap between icon and text: 8px [ESTIMATED]
- Press feedback: opacity 0.7

| Card | Icon (Lucide) |
|---|---|
| Camera | `Camera` |
| Photos | `Image` |
| Files | `Paperclip` |

#### Separator

- Height: 1px
- Color: #3A3A3A [ESTIMATED]
- Margin horizontal: 16px [ESTIMATED]
- Margin vertical: 16px [ESTIMATED]

#### Feature List Items

- Each item is a row with icon + title + subtitle
- Height per item: ~72px [ESTIMATED]
- Padding horizontal: 24px [ESTIMATED]
- Padding vertical: 16px [ESTIMATED]

##### Item Layout

```
Row (vertically centered)
  Icon (left, 28px container)
  TextBlock (margin-left 16px)
    Title
    Subtitle (below title)
  [optional: Check icon on right when selected]
```

##### Typography

- Title font size: 17px [ESTIMATED]
- Title font weight: 500 (Medium)
- Title color: #FFFFFF
- Subtitle font size: 14px [ESTIMATED]
- Subtitle font weight: 400 (Regular)
- Subtitle color: #9A9A9A [ESTIMATED]
- Line spacing between title and subtitle: 4px [ESTIMATED]

##### Feature Items (complete list):

| # | Title | Subtitle | Icon (Lucide) | Icon Color |
|---|---|---|---|---|
| 1 | Model | Auto | `Atom` (or similar interlocking shape) | #FFFFFF |
| 2 | Create image | Visualize anything | `Palette` (or link-like icon) | #FFFFFF |
| 3 | Deep research | Get a detailed report | `Telescope` (or compass variant) | #FFFFFF |
| 4 | Web search | Find real-time news and info | `Globe` (MaterialCommunityIcons `web`) | #FFFFFF |
| 5 | Study and learn | Learn a new concept | `BookOpen` | #FFFFFF |
| 6 | Agent mode | Get work done for you | `SquareMousePointer` | #FFFFFF |
| 7 | Shopping research | Get an in-depth guide | `ShoppingBag` (or `Briefcase`) | #FFFFFF |
| 8 | Your Year with ChatGPT | View a summary of your year with ChatGPT. | `CirclePlay` | #FFFFFF |
| 9 | Quizzes | Create quizzes to test your knowledge | `SquareStack` (or `Layers`) | #FFFFFF |
| 10 | Explore apps | (no subtitle) | `LayoutGrid` | #FFFFFF |

##### Press Feedback

- Background: #2A2A2A [ESTIMATED]
- Duration: 150ms

##### Selected State (e.g., Create image selected -- chat/03d)

- Icon color changes to: #5BC5C9 (light blue/cyan) [ESTIMATED]
- Title color changes to: #5BC5C9 [ESTIMATED]
- Subtitle color changes to: #5BC5C9 [ESTIMATED]
- Check icon appears at far right: `Check` (Lucide), 24px, #5BC5C9 [ESTIMATED]

---

### Differences from Unauth (03)

| Aspect | Unauth | Auth |
|---|---|---|
| Number of items | 3 (Web search, Study and learn, Explore apps) | 10 items (full list above) |
| Camera/Photos/Files | Open Auth BottomSheet | Open native selectors (functional) |
| Explore apps | Opens Auth BottomSheet | No functionality (no-op) |

---

## 03b -- Model Selector Modal

**Screen name:** ModelSelectorModal
**File reference:** `references/chat/03b_model-selector-modal.jpg`
**Auth state:** Authenticated
**Description:** Floating modal that appears above the "Model" row in the Attachments BottomSheet. Shows model options (Auto, Instant, Thinking, Legacy models).

---

### Layout Structure

```
Modal (floating, positioned above "Model" row)
  Title "GPT-5.2"
  Separator
  OptionRow "Auto" (selected, with check icon)
  OptionRow "Instant"
  OptionRow "Thinking"
  Separator
  OptionRow "Legacy models" (with chevron-right)
```

---

### Element Specifications

#### Modal Container

- Background: #2A2A2A [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Width: ~70% of screen width [ESTIMATED]
- Position: floating, anchored above the "Model" row
- Shadow: subtle dark shadow -- `0 4px 16px rgba(0,0,0,0.4)` [ESTIMATED]
- Padding: 0 (items have their own padding)

#### Title "GPT-5.2"

- Text: "GPT-5.2"
- Font size: 14px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #6E6E6E [ESTIMATED]
- Padding: 16px horizontal, 14px top, 8px bottom [ESTIMATED]

#### Separator

- Height: 1px
- Color: #3A3A3A [ESTIMATED]
- Full width

#### Option Rows

- Height: ~60px [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Padding vertical: 12px [ESTIMATED]
- Layout: row, vertically centered

##### Selected Option ("Auto")

- Check icon on left: `Check` (Lucide), 20px, #FFFFFF
- Gap: 12px between icon and text
- Title: "Auto" -- font 17px, weight 500, color #FFFFFF
- Subtitle: "Decides how long to think" -- font 14px, weight 400, color #9A9A9A

##### Unselected Options

- No icon on left (text starts at left edge with padding for alignment with check icon: 32px left indent [ESTIMATED])
- Title: font 17px, weight 500, color #FFFFFF
- Subtitle: font 14px, weight 400, color #9A9A9A

##### "Legacy models" Row

- Chevron icon on left: `ChevronRight` (Lucide), 20px, #FFFFFF [ESTIMATED]
- Text: "Legacy models" -- font 17px, weight 500, color #FFFFFF
- No subtitle
- On tap: expands modal to show legacy model options

#### Press Feedback

- Background: #333333 [ESTIMATED]

---

## 03c -- Model Instant Chip

**Screen name:** ModelInstantChip
**File reference:** `references/chat/03c_model-instant-chip.jpg`
**Auth state:** Authenticated
**Description:** Chat screen with an "Instant" chip in the input bar after selecting the Instant model. Suggestion buttons change to a new set.

---

### Chip in Input

- Position: above the text input line, inside the input container
- The input container expands vertically to accommodate the chip row + input row
- Chip row padding: 12px left, 12px top [ESTIMATED]

#### Chip Element

- Shape: pill
- Height: 32px [ESTIMATED]
- Background: #333333 [ESTIMATED]
- Border radius: 16px
- Padding horizontal: 10px [ESTIMATED]
- Layout: row, centered vertically
- Icon: `Atom` (Lucide), 16px, #FFFFFF [ESTIMATED]
- Text: "Instant"
- Text font size: 14px [ESTIMATED]
- Text font weight: 500 (Medium)
- Text color: #FFFFFF
- Close icon: `X` (Lucide), 14px, #9A9A9A [ESTIMATED]
- Gap: 6px between elements [ESTIMATED]
- Close icon press feedback: opacity 0.7

### Input Container (expanded state)

- Height: ~88px [ESTIMATED] (chip row ~32px + gap ~8px + input row ~48px)
- Background: #2F2F2F
- Border radius: 24px [ESTIMATED]
- The input text line stays at the bottom with placeholder "Ask ChatGPT"

### Note on Suggestion Buttons

When a chip is active, the suggestion buttons change. In the "Instant" screenshot, visible buttons are:
- "Create image" (green icon)
- "Summarize text" (orange icon)
- "Make a plan" (yellow icon)
- "Analyze images" (blue icon)

These appear to be variant suggestions that rotate randomly and are NOT fixed per chip type.

---

## 03d -- Create Image Selected (in BottomSheet)

**Screen name:** CreateImageSelected
**File reference:** `references/chat/03d_create-image-selected.jpg`
**Auth state:** Authenticated
**Description:** The Attachments BottomSheet with "Create image" in its selected state -- icon, title, and subtitle turn cyan/blue, and a check mark appears on the right.

---

### Selected Item Appearance

- Icon color: #5BC5C9 (light blue/cyan) [ESTIMATED]
- Title color: #5BC5C9 [ESTIMATED]
- Subtitle color: #5BC5C9 [ESTIMATED]
- Check icon: `Check` (Lucide), positioned at far right of the row
- Check icon size: 24px [ESTIMATED]
- Check icon color: #5BC5C9 [ESTIMATED]
- All other items remain in default state (white icon, white title, gray subtitle)

### Behavior

- BottomSheet closes automatically after selection
- Chip "Image" appears in input with `Palette` icon
- Placeholder changes to "Create image"

---

## 03e -- Create Image Chip

**Screen name:** CreateImageChip
**File reference:** `references/chat/03e_create-image-chip.jpg`
**Auth state:** Authenticated
**Description:** Chat screen with "Image" chip in the input after selecting "Create image". Input placeholder changes to "Create image".

---

### Chip Element

- Same chip spec as 03c (Instant), but with different icon and text:
- Icon: `Palette` (or link-like icon matching "Create image" in bottomsheet), 16px, #5BC5C9 (cyan) [ESTIMATED]
- Text: "Image"
- Text font size: 14px [ESTIMATED]
- Text font weight: 500 (Medium)
- Text color: #FFFFFF
- Close icon: `X`, 14px, #9A9A9A
- Background: #333333 [ESTIMATED]

### Input Placeholder

- Changed to: "Create image"
- Placeholder color: #8E8E8E [ESTIMATED]

### Suggestion Buttons (with Image chip active)

Buttons visible in screenshot:
- "Create image" (green icon)
- "Analyze data" (blue chart icon)
- "Summarize text" (orange icon)
- "Surprise me" (orange gift icon)

---

## 06 -- Message Sent, AI Loading (Auth)

**Screen name:** MessageSentAILoadingAuth
**File reference:** `references/chat/06_message-sent-ai-loading-auth.jpg`
**Auth state:** Authenticated
**Description:** After sending a message, shows user bubble on right, "Searching..." shimmer text on left, and a stop button. Header changes to show compose and ellipsis icons.

---

### Layout Structure

```
SafeAreaView (bg: #000000)
  Header (in-chat variant)
    SidebarButton (left)
    ChatGPTButton (left)
    [spacer]
    ComposeButton (right)
    EllipsisButton (right)
  ChatContent (scrollable)
    UserMessageBubble (right-aligned)
    AILoadingIndicator (left-aligned)
      "Searching..." shimmer text
  InputBar (with chip)
    PlusButton
    TextInput (placeholder: "Ask ChatGPT")
    MicButton
    StopButton (replaces Send/Talk)
```

---

### Header (In-Chat Variant -- Auth)

When a message has been sent, the header changes:
- Left side: SidebarButton + ChatGPTButton (same as empty state)
- Right side: ComposeButton + EllipsisButton (replaces AddPerson + Bubble)

##### Compose Button (right)

- Icon: `SquarePen` (Lucide) -- square with pen
- Icon size: 22px [ESTIMATED]
- Icon color: #FFFFFF
- Container size: 44px [ESTIMATED]
- Background: transparent (no pill background in the combined container)
- Press feedback: opacity 0.7

##### Ellipsis Button (right)

- Icon: `EllipsisVertical` (Lucide) -- three vertical dots
- Icon size: 22px [ESTIMATED]
- Icon color: #FFFFFF
- Container size: 44px [ESTIMATED]
- Background: #2F2F2F (dark pill)
- Border radius: 22px
- Press feedback: opacity 0.7
- Note: In the screenshot, compose and ellipsis appear to be inside a shared pill container similar to the AddPerson+Bubble container from the empty state

#### User Message Bubble

- Position: right-aligned
- Background: #2F2F2F [ESTIMATED]
- Border radius: 20px [ESTIMATED]
- Padding: 14px horizontal, 12px vertical [ESTIMATED]
- Max width: ~75% of screen width [ESTIMATED]
- Text color: #FFFFFF
- Text font size: 16px [ESTIMATED]
- Text font weight: 400 (Regular)
- Line height: 24px [ESTIMATED]
- Margin right: 16px [ESTIMATED]
- Margin top: 16px below header [ESTIMATED]

#### AI Loading Indicator -- "Searching..." / "Thinking..."

- Position: left-aligned, below user bubble
- Margin left: 24px [ESTIMATED]
- Margin top: 24px below user bubble [ESTIMATED]

##### Phase 1: Pulsing Circle

- White circle, diameter ~16px [ESTIMATED]
- Pulsing animation: scale from 1.0 to 1.2, duration ~1.2s, continuous loop
- Color: #FFFFFF

##### Phase 2: Shimmer Text

- Text: "Searching..." (in search mode) or "Thinking..." (normal mode)
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Base color: #6E6E6E [ESTIMATED]
- Shimmer highlight color: #9A9A9A [ESTIMATED]
- Shimmer animation: gradient sweeps left-to-right in continuous loop
- Shimmer duration per cycle: ~1.5s [ESTIMATED]

#### Stop Button (in input, replaces Send/Talk)

- Shape: circle
- Size: 36px [ESTIMATED]
- Background: #FFFFFF
- Icon: `Square` (Lucide) -- filled square / stop icon
- Icon size: 14px [ESTIMATED]
- Icon color: #000000
- Border radius: 18px (circular)
- Appears IMMEDIATELY when message is sent (no animation transition)
- Press feedback: opacity 0.85

#### Input Bar with Search Chip

When in search mode, the input bar contains:
- Chip "Search" with globe icon and X close -- same chip pattern as 03c/03e
- Chip icon: `Globe`, 16px, #5BC5C9 [ESTIMATED]
- Chip text: "Search"
- Placeholder below chip: "Ask ChatGPT"

---

## 08 -- AI Response Search Mode (Auth)

**Screen name:** AIResponseSearchModeAuth
**File reference:** `references/chat/08_ai-response-search-mode-auth.jpg`
**Auth state:** Authenticated
**Description:** Complete AI response with rich markdown, table content, citation chips, and the full auth Action Bar (6 icons).

---

### Layout Structure

```
SafeAreaView (bg: #000000)
  Header (in-chat variant, same as 06 auth)
  ChatContent (scrollable)
    [scrolled content above]
    ResponseContent (markdown)
      Heading with emoji prefix
      Table
      Body paragraphs with bold text
    ActionBar (6 icons)
    SourcesRow (citation icons + "Sources" label)
  InputBar (with Search chip)
    PlusButton
    TextInput "Ask ChatGPT"
    MicButton
    TalkButton
```

---

### Response Content (Markdown)

#### Heading

- Text: varies (e.g., emoji + heading text)
- Font size: 22px [ESTIMATED]
- Font weight: 700 (Bold)
- Color: #FFFFFF
- Margin bottom: 16px [ESTIMATED]

#### Table

- Header row: bold text
- Cell dividers: 1px #3A3A3A [ESTIMATED]
- Cell padding: 12px [ESTIMATED]
- Header font weight: 700 (Bold)
- Body font weight: 400 (Regular)
- Text color: #FFFFFF
- Font size: 15px [ESTIMATED]

#### Body Text

- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #FFFFFF
- Line height: 24px [ESTIMATED]
- Bold text: font weight 700
- Paragraph spacing: 16px [ESTIMATED]

#### Citation Chips (inline)

- Small rounded pills inline with text
- Background: #333333 [ESTIMATED]
- Height: 22px [ESTIMATED]
- Border radius: 11px
- Padding horizontal: 8px [ESTIMATED]
- Text font size: 12px [ESTIMATED]
- Text color: #9A9A9A [ESTIMATED]

### Action Bar (Auth -- 6 icons)

- Position: below AI response text
- Layout: horizontal row
- Left group: 6 icon buttons
- Right group: Sources button (only in search mode)
- Margin top: 12px [ESTIMATED]
- Margin left: 24px [ESTIMATED]
- Gap between icons: 16px [ESTIMATED]

#### Action Bar Icons (left to right):

| # | Icon (Lucide) | Size | Color | Action |
|---|---|---|---|---|
| 1 | `Copy` | 20px | #9A9A9A | Copy response to clipboard |
| 2 | `ThumbsUp` | 20px | #9A9A9A | Positive feedback (turns filled white) |
| 3 | `ThumbsDown` | 20px | #9A9A9A | Negative feedback (opens Share Feedback sheet) |
| 4 | `Volume2` | 20px | #9A9A9A | Read aloud |
| 5 | `Share2` | 20px | #9A9A9A | Native share sheet |
| 6 | `EllipsisVertical` | 20px | #9A9A9A | Opens Ellipsis Modal (chat/33) |

- All icons: outline style
- Press feedback: opacity 0.7

#### Sources Button (search mode only)

- Position: right side of action bar, after a gap
- Layout: row -- favicon icons + "Sources" text
- Favicon icons: small circular images, ~18px diameter [ESTIMATED]
- Favicons overlap slightly (stacked)
- Text: "Sources"
- Text font size: 14px [ESTIMATED]
- Text font weight: 500 (Medium)
- Text color: #FFFFFF
- Tappable: opens Sources BottomSheet (chat/09)

### Differences from Unauth Action Bar

| Aspect | Unauth (3 icons) | Auth (6 icons) |
|---|---|---|
| Icons | Copy, Volume, Regenerate | Copy, ThumbsUp, ThumbsDown, Volume2, Share2, EllipsisVertical |
| Sources | Sources button present | Sources button present (search mode) |

---

## 10 -- Long Press Context Menu (Auth)

**Screen name:** LongPressContextMenuAuth
**File reference:** `references/chat/10_long-press-context-menu-auth.jpg`
**Auth state:** Authenticated
**Description:** Context menu appearing on long-press of user message bubble. Shows 4 options (unauth has 3). Adds "Share" option.

---

### Layout Structure

```
Modal (floating, positioned near the long-pressed message)
  Timestamp text
  MenuItem "Copy" (icon + text)
  MenuItem "Select Text" (icon + text)
  MenuItem "Edit Message" (icon + text)
  MenuItem "Share" (icon + text) -- AUTH ONLY
```

---

### Element Specifications

#### Modal Container

- Background: #2A2A2A [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Width: ~240px [ESTIMATED]
- Shadow: `0 4px 16px rgba(0,0,0,0.5)` [ESTIMATED]
- Position: floating near the user message bubble
- Animation: fade-in on entry, fade-out on exit

#### Timestamp

- Text: e.g., "Feb 5, 2026 6:29:02 PM"
- Font size: 13px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #6E6E6E [ESTIMATED]
- Padding: 14px horizontal, 12px top, 8px bottom [ESTIMATED]

#### Menu Items

- Height: 48px per item [ESTIMATED]
- Padding horizontal: 14px [ESTIMATED]
- Layout: row, vertically centered
- Icon: left, 22px [ESTIMATED]
- Icon color: #FFFFFF
- Gap: 12px between icon and text [ESTIMATED]
- Text font size: 16px [ESTIMATED]
- Text font weight: 400 (Regular)
- Text color: #FFFFFF
- Press feedback: background #333333 [ESTIMATED]

| Item | Icon (Lucide) | Text |
|---|---|---|
| Copy | `Copy` | "Copy" |
| Select Text | `TextSelect` (or `FileText`) | "Select Text" |
| Edit Message | `Pencil` | "Edit Message" |
| Share | `Share2` | "Share" |

#### Differences from Unauth

- Unauth: 3 items (Copy, Select Text, Edit Message)
- Auth: 4 items (adds "Share" at the bottom)

---

## 13 -- GroupChat BottomSheet

**Screen name:** GroupChatBottomSheet
**File reference:** `references/chat/13_groupchat-bottomsheet.jpg`
**Auth state:** Authenticated
**Description:** Bottom sheet for starting a group chat. Shows title, description, "Start group chat" button, and user profile section at the bottom.

---

### Layout Structure

```
BottomSheet (bg: #212121, slide-up)
  DragHandle
  Title "Use ChatGPT together"
  Description text
  "Start group chat" button
  [spacer]
  ProfileRow (user avatar + name + edit icon)
```

---

### Element Specifications

#### BottomSheet Container

- Background: #212121 [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Height: ~45% of screen [ESTIMATED]
- Backdrop: #000000 at 50% opacity

#### Drag Handle

- Same as other bottom sheets: 40px wide, 4px tall, #4A4A4A, centered

#### Title

- Text: "Use ChatGPT together"
- Font size: 24px [ESTIMATED]
- Font weight: 700 (Bold)
- Color: #FFFFFF
- Text align: center
- Margin top: 24px [ESTIMATED]

#### Description

- Text: "Add people to your chats to plan, share ideas, and get creative."
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #9A9A9A [ESTIMATED]
- Text align: center
- Margin top: 16px [ESTIMATED]
- Padding horizontal: 32px [ESTIMATED]
- Line height: 22px [ESTIMATED]

#### "Start group chat" Button

- Shape: pill
- Width: auto (content-based), approximately 220px [ESTIMATED]
- Height: 48px [ESTIMATED]
- Background: #FFFFFF
- Border radius: 24px
- Text: "Start group chat"
- Text color: #000000
- Font size: 16px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Centered horizontally
- Margin top: 24px [ESTIMATED]
- Press feedback: opacity 0.85
- Loading state: text turns gray + spinner appears to the right of text

#### Profile Row (bottom)

- Position: bottom of bottom sheet
- Background: #000000 [ESTIMATED]
- Height: 72px [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Layout: row, vertically centered
- Border radius: 16px [ESTIMATED]
- Margin: 16px horizontal, 16px bottom [ESTIMATED]

##### Profile Avatar

- Shape: circle
- Size: 44px [ESTIMATED]
- Background: #7C3AED (purple, same as sidebar avatar) [ESTIMATED]
- Initials: "ML" (or user's initials)
- Initials font size: 16px [ESTIMATED]
- Initials font weight: 600 (SemiBold)
- Initials color: #FFFFFF

##### Profile Name

- Text: "Mateo Lorenzo" (user's name)
- Font size: 16px [ESTIMATED]
- Font weight: 500 (Medium)
- Color: #FFFFFF
- Margin left: 12px [ESTIMATED]

##### Profile Subtitle

- Text: "Choose a username and photo"
- Font size: 14px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #9A9A9A [ESTIMATED]
- Below name, 2px gap [ESTIMATED]

##### Edit Icon (right)

- Icon: `Pencil` (Lucide)
- Icon size: 20px [ESTIMATED]
- Icon color: #9A9A9A [ESTIMATED]
- Position: far right
- Press feedback: opacity 0.7

---

## 14 -- Hide Chat State

**Screen name:** HideChatState
**File reference:** `references/chat/14_hide-chat-state.jpg`
**Auth state:** Authenticated
**Description:** The temporary/hidden chat state. Header shows only the sidebar button, ChatGPT pill, and a single "message-circle-off" icon. Central content shows privacy notice text. Input placeholder changes to "Temporary chat".

---

### Layout Structure

```
SafeAreaView (bg: #000000, flex: 1)
  Header
    SidebarButton (left)
    ChatGPTButton (left)
    [spacer]
    HideChatIcon (right) -- single icon, not in combined pill
  ScrollableContent (centered)
    PrivacyText (centered paragraph)
  InputBar
    PlusButton
    TextInput "Temporary chat"
    MicButton
    TalkButton
```

---

### Element Specifications

#### Header Changes from Normal Auth

- Right side: only ONE icon instead of two
- No combined pill container -- single circular button
- Icon: `MessageCircleOff` (Lucide) -- message bubble with a line through it
- Container: circular, 44px [ESTIMATED]
- Background: #2F2F2F [ESTIMATED]
- Icon size: 22px [ESTIMATED]
- Icon color: #FFFFFF
- Border radius: 22px
- Press feedback: opacity 0.7
- Action: Toggles BACK to normal chat state

#### Privacy Text (center content)

- Text: "This chat won't appear in your chat history, and won't be used to train our models. For safety, we may keep a copy of this chat for up to 30 days."
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #9A9A9A [ESTIMATED]
- Text align: center
- Padding horizontal: 40px [ESTIMATED]
- Line height: 24px [ESTIMATED]
- Vertically centered in the content area

#### Input Bar Changes

- Placeholder text changes to: "Temporary chat"
- All other elements remain the same (Plus, Mic, Talk buttons)

---

### Animations

#### Entry Animation (Normal -> Hide)

All 3 changes happen simultaneously:
1. Header: AddPerson icon disappears, Bubble icon transforms to MessageCircleOff icon, sliding from the AddPerson position to the Bubble position
2. Content: "What can I help with?" + suggestion buttons fade-out, privacy text fades-in
3. Input: placeholder text changes from "Ask ChatGPT" to "Temporary chat"

#### Exit Animation (Hide -> Normal)

Same animations in reverse.

---

## 15 -- Talking Chat State

**Screen name:** TalkingChatState
**File reference:** `references/chat/15_talking-chat-state.jpg`
**Auth state:** Authenticated
**Description:** Voice conversation mode. Header shows "ChatGPT Voice" text + ellipsis icon. Center shows "Start talking". Input bar is dramatically different: narrower text input + camera + mic + "End" button.

---

### Layout Structure

```
SafeAreaView (bg: #000000, flex: 1)
  Header
    SidebarButton (left)
    "ChatGPT Voice" text (left, replaces ChatGPT button)
    [spacer]
    EllipsisButton (right)
  ScrollableContent (centered)
    "Start talking" title
  InputBar (talking variant)
    PlusButton
    TextInput "Type" (narrow)
    CameraButton
    MicButton
    EndButton (blue pill)
```

---

### Element Specifications

#### Header (Talking State)

- Left side: SidebarButton (unchanged)
- Text: "ChatGPT" in white + " Voice" in gray
  - "ChatGPT" -- font 19px, weight 600, color #FFFFFF
  - " Voice" -- font 19px, weight 400, color #9A9A9A [ESTIMATED]
  - Text appears without pill background (plain text, not a button)
- Right side: single EllipsisVertical icon
  - Container: 44px, bg #2F2F2F, border-radius 22px
  - Icon: `EllipsisVertical`, 22px, #FFFFFF

#### Center Content

- Text: "Start talking"
- Font size: 32px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: #FFFFFF
- Text align: center
- Vertically centered

#### Input Bar (Talking Variant)

**CRITICAL:** The input bar is significantly different in this state.

Layout: `[+] [TextInput] [Camera] [Mic] [End]`

- The TextInput is NARROWER than normal to accommodate the extra buttons
- All elements are in a single row

##### Plus Button

- Same as normal: circle, 44px, bg #2F2F2F, `Plus` icon

##### Text Input (narrow)

- Width: ~40% of available space [ESTIMATED] -- significantly narrower
- Height: 48px [ESTIMATED]
- Background: #3A3A3A [ESTIMATED]
- Border radius: 24px
- Placeholder: "Type"
- Placeholder color: #8E8E8E [ESTIMATED]
- Font size: 16px

##### Camera Button

- Shape: circle
- Size: 44px [ESTIMATED]
- Background: #3A3A3A [ESTIMATED]
- Icon: `Video` (Lucide) -- camera/video icon
- Icon size: 22px [ESTIMATED]
- Icon color: #FFFFFF
- Border radius: 22px

##### Mic Button

- Shape: circle
- Size: 44px [ESTIMATED]
- Background: #2196F3 (blue) [ESTIMATED]
- Icon: `Mic` (Lucide)
- Icon size: 22px [ESTIMATED]
- Icon color: #FFFFFF
- Border radius: 22px

##### End Button

- Shape: pill
- Width: auto (~90px) [ESTIMATED]
- Height: 44px [ESTIMATED]
- Background: #2196F3 (blue) [ESTIMATED]
- Border radius: 22px
- Layout: row, centered
- Icon: `Grip` (Lucide) or dots pattern -- 4 dots/bars icon
- Icon size: 18px [ESTIMATED]
- Icon color: #FFFFFF
- Text: "End"
- Text font size: 16px [ESTIMATED]
- Text font weight: 600 (SemiBold)
- Text color: #FFFFFF
- Gap between icon and text: 6px [ESTIMATED]
- Press feedback: opacity 0.85
- Action: Returns to normal ChatScreen (chat/01 auth) with reverse animations

---

### Animations

#### Loading Animation (before transition, 2 seconds)

1. Mic icon in normal input bar disappears
2. Talk button expands horizontally to the left (smooth)
3. Expanded Talk button shows: loading indicator (left) + "Cancel" text (right), both in dark color
4. Duration: 2 seconds hardcoded

#### Transition Animation (after 2s loading)

All happen simultaneously:
1. Header: ChatGPT button fades out, "ChatGPT Voice" text fades in. AddPerson + Bubble icons disappear, EllipsisVertical appears.
2. Content: "What can I help with?" + suggestion buttons fade out, "Start talking" fades in
3. Input: TextInput width contracts VERY SMOOTHLY from full width to narrow width. Camera, Mic, End buttons appear in the freed space.

**CRITICAL:** Input contraction animation must be extremely smooth and fluid. This is a premium transition.

#### Exit Animation

All above animations in reverse. Input expands back to full width smoothly.

---

## Common Auth Header Component Summary

The auth header has several distinct states. Here is a consolidated reference:

### Header States

| State | Left | Center | Right |
|---|---|---|---|
| Empty Chat (Auth) | SidebarBtn + ChatGPT pill | -- | AddPerson + Bubble (combined pill) |
| In-Chat (Auth) | SidebarBtn + ChatGPT pill | -- | Compose + Ellipsis (combined pill) |
| Hide Chat | SidebarBtn + ChatGPT pill | -- | MessageCircleOff (single circle) |
| Talking Chat | SidebarBtn + "ChatGPT Voice" text | -- | EllipsisVertical (single circle) |
| Unauth (any) | SidebarBtn | "ChatGPT" centered text | "Log in" white pill |

---

## Input Bar Component Summary

The input bar also has several states:

### Input Bar States

| State | Left | Input | Inside-Right | Far-Right |
|---|---|---|---|---|
| Auth Empty | Plus circle | "Ask ChatGPT" full-width | Mic | Talk (white circle, waveform) |
| Auth Text Entered | Plus circle | Text, full-width | -- | Send (white circle, arrow) |
| Auth with Chip | Plus circle | Chip row + text row | Mic | Talk or Send |
| Auth Loading | Plus circle | "Ask ChatGPT" + chip | Mic | Stop (white circle, square) |
| Talking State | Plus circle | "Type" narrow | Camera, Mic (blue) | End (blue pill) |
| Unauth Empty | Plus circle | "Ask ChatGPT" full-width | Mic | Send (gray, disabled) |
| Unauth Text | Plus circle | Text, full-width | -- | Send (white, enabled) |

---

## Feature Chip Component (Reusable)

All feature chips follow the same pattern. Only icon, text, and icon color vary.

### Chip Variants

| Feature | Chip Text | Chip Icon (Lucide) | Icon Color |
|---|---|---|---|
| Search | "Search" | `Globe` | #5BC5C9 [ESTIMATED] |
| Study | "Study" | `BookOpen` | #5BC5C9 [ESTIMATED] |
| Image | "Image" | `Palette` (or link icon) | #5BC5C9 [ESTIMATED] |
| Research | "Research" | `Telescope` | #5BC5C9 [ESTIMATED] |
| Agent | "Agent" | `SquareMousePointer` | #5BC5C9 [ESTIMATED] |
| Shopping research | "Shopping research" | `ShoppingBag` | #5BC5C9 [ESTIMATED] |
| Your Year with ChatGPT | "Your Year with ChatGPT" | `CirclePlay` | #5BC5C9 [ESTIMATED] |
| Quizzes | "Quizzes" | `SquareStack` | #5BC5C9 [ESTIMATED] |
| Instant | "Instant" | `Atom` | #FFFFFF |
| Thinking | "Thinking" | `Atom` | #FFFFFF |
| Editing message | "Editing message" | `Pencil` | #FFFFFF [ESTIMATED] |

### Common Chip Specs

- Height: 32px [ESTIMATED]
- Background: #333333 [ESTIMATED]
- Border radius: 16px
- Padding horizontal: 10px [ESTIMATED]
- Icon size: 16px [ESTIMATED]
- Text font size: 14px [ESTIMATED]
- Text font weight: 500 (Medium)
- Text color: #FFFFFF
- Close icon: `X`, 14px, #9A9A9A [ESTIMATED]
- Gap between elements: 6px [ESTIMATED]
- Animation: slide-up on activate, slide-down on deactivate
