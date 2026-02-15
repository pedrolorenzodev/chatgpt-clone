# 01 -- New Chat Empty (Unauth)

**Screen name:** NewChatEmptyUnauth
**File reference:** `references/chat/01_new-chat-empty-unauth.jpg`
**Auth state:** Unauthenticated
**Description:** The main landing screen for unauthenticated users. Shows the header, a centered prompt title, four suggestion buttons, and the input bar at the bottom. The keyboard opens automatically on entry.

---

## Layout Structure (top to bottom)

```
SafeAreaView (bg: #000000, flex: 1)
  StatusBar (Android system, light-content)
  Header
    SidebarButton (left)
    Title "ChatGPT" (center)
    LoginButton (right)
  ScrollableContent (flex: 1, centered vertically)
    PromptTitle "What can I help with?"
    SuggestionButtonsGrid
      Row 1: [Brainstorm] [Get advice] [Code]
      Row 2: [Summarize text] (centered)
  InputBar
    PlusButton (left)
    TextInput "Ask ChatGPT"
    MicButton
    SendButton (right)
  Keyboard (auto-opened)
```

---

## Element Specifications

### Status Bar
- Style: light-content (white text/icons)
- Background: transparent (blends with #000000)

### Header
- Height: 56px [ESTIMATED]
- Padding horizontal: 16px
- Padding top: 8px below safe area [ESTIMATED]
- Background: #000000 (with subtle gradient overlay extending down -- see global-notes.md)
- Alignment: row, space-between, vertically centered
- The gradient/shadow is not visible when background is pure black but becomes visible when colored content scrolls behind it

#### Sidebar Button (top-left)
- Shape: circle
- Size: 44px diameter [ESTIMATED]
- Background: #2F2F2F
- Icon: horizontal line (minus icon -- Lucide `Minus`)
- Icon size: 24px [ESTIMATED]
- Icon color: #FFFFFF
- Icon stroke width: 2px [ESTIMATED]
- Border radius: 22px (circular)
- Press feedback: opacity 0.7

#### Title "ChatGPT" (center)
- Text: "ChatGPT"
- Font size: 19px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: #FFFFFF
- Letter spacing: 0
- Position: centered horizontally in header
- Note: In unauth mode this is plain text, NOT a button

#### Login Button (top-right)
- Shape: pill/rounded rectangle
- Width: auto (content-based), approximately 80px [ESTIMATED]
- Height: 40px [ESTIMATED]
- Background: #FFFFFF
- Border radius: 20px (fully rounded)
- Text: "Log in"
- Text color: #000000
- Font size: 16px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Padding horizontal: 20px [ESTIMATED]
- Press feedback: opacity 0.85

### Scrollable Content Area
- Flex: 1
- Content is vertically centered when no messages
- Padding horizontal: 24px

#### Prompt Title
- Text: "What can I help with?"
- Font size: 28px [ESTIMATED]
- Font weight: 700 (Bold)
- Color: #FFFFFF
- Text align: center
- Margin bottom: 24px [ESTIMATED]

#### Suggestion Buttons Grid
- Layout: flex-wrap row, centered
- Gap between buttons: 10px horizontal, 12px vertical [ESTIMATED]

##### Individual Suggestion Button
- Shape: pill/capsule
- Height: 48px [ESTIMATED]
- Padding horizontal: 18px [ESTIMATED]
- Padding vertical: 12px [ESTIMATED]
- Background: transparent
- Border: 1px solid #3A3A3A [ESTIMATED]
- Border radius: 24px (fully rounded)
- Layout: row, icon + text, gap 8px
- Press feedback: background #2A2A2A [ESTIMATED]

##### Button Variants (icon + text):
| Button | Icon (Lucide) | Icon Color | Text |
|---|---|---|---|
| Brainstorm | `Lightbulb` | #F5C542 (yellow/amber) [ESTIMATED] | "Brainstorm" |
| Get advice | `Gem` (or box-like icon) | #5BC5C9 (teal/cyan) [ESTIMATED] | "Get advice" |
| Code | `Code` (curly braces `{..}`) | #8B7BF7 (purple) [ESTIMATED] | "Code" |
| Summarize text | `FileText` (or `AlignLeft`) | #E8875B (orange) [ESTIMATED] | "Summarize text" |

- Icon size: 22px [ESTIMATED]
- Text font size: 16px [ESTIMATED]
- Text font weight: 400 (Regular)
- Text color: #9A9A9A [ESTIMATED]

### Input Bar
- Position: bottom of screen, above keyboard
- Background: #000000
- Padding horizontal: 16px
- Padding bottom: 8px [ESTIMATED]
- Layout: row, vertically centered

#### Plus Button (left of input)
- Shape: circle
- Size: 44px [ESTIMATED]
- Background: #2F2F2F
- Icon: `Plus` (Lucide)
- Icon size: 22px [ESTIMATED]
- Icon color: #FFFFFF
- Border radius: 22px
- Margin right: 8px [ESTIMATED]
- Press feedback: opacity 0.7

#### Text Input Field
- Flex: 1
- Height: 48px [ESTIMATED]
- Background: #2F2F2F
- Border radius: 24px (fully rounded) [ESTIMATED]
- Padding horizontal: 16px
- Padding right: 88px [ESTIMATED] (space for mic + send buttons)
- Placeholder: "Ask ChatGPT"
- Placeholder color: #8E8E8E [ESTIMATED]
- Text color: #FFFFFF
- Font size: 16px
- Font weight: 400
- Cursor color: #FFFFFF
- Note: The mic and send buttons are inside the input container, right-aligned

#### Mic Button (inside input, right side)
- Shape: circle (no visible background)
- Size: 32px touch target [ESTIMATED]
- Icon: `Mic` (Lucide)
- Icon size: 22px [ESTIMATED]
- Icon color: #8E8E8E [ESTIMATED]
- Position: right of text, inside input field
- Margin right: 8px [ESTIMATED] (from send button)
- Press feedback: opacity 0.7
- Behavior (unauth): Opens Auth BottomSheet

#### Send Button (inside input, far right)
- Shape: circle
- Size: 36px [ESTIMATED]
- Background (disabled): #3A3A3A [ESTIMATED]
- Background (enabled): #FFFFFF
- Icon: `ArrowUp` (Lucide)
- Icon size: 20px [ESTIMATED]
- Icon color (disabled): #6E6E6E [ESTIMATED]
- Icon color (enabled): #000000
- Border radius: 18px (circular)
- Margin right: 6px [ESTIMATED] (inside input padding)
- State: disabled when input is empty, enabled when text present
- Press feedback: opacity 0.85 (when enabled)

---

## States

### Default (Empty)
- Input is empty
- Placeholder "Ask ChatGPT" visible
- Send button disabled (dark gray)
- Keyboard auto-opens on screen entry

### Text Entered
- Placeholder hidden
- Send button becomes white with black arrow
- Mic button may hide or remain (see screenshot 02 -- mic disappears when text is entered)

---

## Animations

### Entry Animation
- Standard navigation (slide from right or immediate depending on source)
- Keyboard slides up automatically with smooth animation

### Header Gradient
- A subtle gradient from #000000 to transparent extending ~20px below header
- Only visible when content scrolls behind the header

---

## Accessibility

| Element | accessibilityLabel | accessibilityRole |
|---|---|---|
| Sidebar button | "Open sidebar" | "button" |
| Login button | "Log in" | "button" |
| Brainstorm button | "Brainstorm" | "button" |
| Get advice button | "Get advice" | "button" |
| Code button | "Code" | "button" |
| Summarize text button | "Summarize text" | "button" |
| Plus button | "Add attachment" | "button" |
| Text input | "Ask ChatGPT" | "none" (TextInput) |
| Mic button | "Voice input" | "button" |
| Send button | "Send message" | "button" |

---

## Navigation

- **Sidebar button** -> Opens sidebar (slide-in from left)
- **Login button** -> Opens Auth BottomSheet (auth/02)
- **Suggestion buttons** -> Autocompletes input, expands suggestions (see 02 spec)
- **Plus button** -> Opens Attachments BottomSheet (see 03 spec)
- **Send button** -> Sends message (see 06 spec)
- **Mic button** -> Opens Auth BottomSheet (unauth)
