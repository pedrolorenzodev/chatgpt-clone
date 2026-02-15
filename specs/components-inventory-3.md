# Components Inventory 3 -- Chat Feature (Unauth Flow)

Reusable components identified across chat screens 01-12 (unauthenticated). Extends components-inventory.md with chat-specific components.

---

## 1. ChatHeader

**Description:** The top navigation bar shared across all chat screens. Contains a sidebar button (left), title (center), and a login button (right) for unauthenticated users. In auth mode, the right side changes to icon buttons.

**Screens used:**
- chat/01-12 (all unauth screens)
- chat/01-12 (all auth screens with different right-side content)

**Props Interface:**
```typescript
interface ChatHeaderProps {
  onSidebarPress: () => void;
  isAuthenticated: boolean;
  onLoginPress?: () => void;          // unauth only
  onAddPersonPress?: () => void;      // auth only
  onTemporaryChatPress?: () => void;  // auth only
  title?: string;                     // default "ChatGPT"
  isTitlePressable?: boolean;         // auth: true (opens attachments), unauth: false
  accessibilityLabel?: string;
}
```

**Dimensions:**
- Height: 56px [ESTIMATED]
- Padding horizontal: 16px
- Background: #000000 with subtle gradient extending downward (~20px gradient overlay)
- The gradient uses a linear gradient from #000000 (opacity 1.0) to #000000 (opacity 0.0)

**Sub-components:**
- SidebarButton (left): 44px circle, #2F2F2F bg, `Minus` icon
- Title (center): "ChatGPT", 19px, SemiBold (600), #FFFFFF
- LoginButton (right, unauth): pill, #FFFFFF bg, "Log in" text, #000000

**Variants:**
| Variant | Left | Center | Right |
|---|---|---|---|
| `unauth` | SidebarButton | "ChatGPT" (static text) | LoginButton (white pill) |
| `auth` | SidebarButton | "ChatGPT" (pressable button) | AddPerson + TemporaryChat icons |
| `hide-chat` | SidebarButton | "ChatGPT" (pressable button) | MessageCircleOff icon |
| `talking` | SidebarButton | "ChatGPT Voice" (static text) | EllipsisVertical icon |
| `select-text` | BackButton (circle) | "Select Text" (bold) | (none) |

---

## 2. ChatInputBar

**Description:** The bottom input bar for composing messages. Contains a plus button, a text input with optional chip, mic button, and send/stop button. Expands vertically when a feature chip is active. The most complex component in the chat feature.

**Screens used:**
- chat/01, 02, 04, 05, 06, 07, 08, 12 (all states)

**Props Interface:**
```typescript
interface ChatInputBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  onPlusPress: () => void;
  onMicPress: () => void;
  onStopPress?: () => void;
  placeholder?: string;              // default "Ask ChatGPT"
  isLoading?: boolean;               // shows stop button instead of send
  activeChip?: FeatureChip | null;   // active feature mode chip
  onChipDismiss?: () => void;        // dismiss chip
  isAuthenticated?: boolean;         // auth shows Talk button
  accessibilityLabel?: string;
}

interface FeatureChip {
  id: string;
  icon: string;           // lucide icon name
  iconColor: string;      // hex color
  label: string;          // "Search", "Study", "Editing message", etc.
  labelColor?: string;    // default #FFFFFF, can be teal for edit mode
}
```

**Dimensions:**
- Padding horizontal: 16px (outer)
- Padding bottom: 8px [ESTIMATED]
- Plus button: 44px circle, #2F2F2F bg
- Input field: flex 1, 48px height (single-line), #2F2F2F bg, 24px border-radius
- Send button: 36px circle inside input
- Mic button: 32px touch target inside input
- Gap between plus and input: 8px [ESTIMATED]

**States:**

| State | Send Button | Mic Button | Input Height | Chip |
|---|---|---|---|---|
| `empty` | Disabled (#3A3A3A) | Visible | 48px | None |
| `has-text` | Enabled (#FFFFFF) | Hidden | 48px+ | None |
| `loading` | Stop button (square) | Hidden/Visible | 48px | None |
| `chip-empty` | Disabled | Visible | ~80px (expanded) | Active chip shown |
| `chip-has-text` | Enabled | Hidden | ~80px+ | Active chip shown |
| `edit-mode` | Enabled | Hidden | ~100px+ | "Editing message" chip |

---

## 3. SuggestionButton

**Description:** Pill-shaped button with an icon and text, used in the suggestion grid on the empty chat screen. Each button represents a content category (Brainstorm, Get advice, Code, Summarize text).

**Screens used:**
- chat/01 (unauth empty state)
- chat/01-auth (auth empty state, different labels/icons)

**Props Interface:**
```typescript
interface SuggestionButtonProps {
  icon: string;          // lucide icon name
  iconColor: string;     // hex color
  label: string;
  onPress: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 48px [ESTIMATED]
- Padding horizontal: 18px [ESTIMATED]
- Border: 1px solid #3A3A3A [ESTIMATED]
- Border radius: 24px (pill)
- Background: transparent
- Icon size: 22px [ESTIMATED]
- Icon-text gap: 8px [ESTIMATED]
- Text: 16px, Regular (400), #9A9A9A

**Press feedback:** Background #2A2A2A [ESTIMATED]

**Unauth Variants:**
| Label | Icon | Icon Color |
|---|---|---|
| "Brainstorm" | `Lightbulb` | #F5C542 |
| "Get advice" | `Gem` | #5BC5C9 |
| "Code" | `Code` | #8B7BF7 |
| "Summarize text" | `FileText` | #E8875B |

---

## 4. SuggestionTextItem

**Description:** A row showing an icon and suggestion text, with an optional divider. Used in expanded suggestion lists (after tapping a category) and in Search/Study mode for showing trending topics or study activities.

**Screens used:**
- chat/02 (expanded suggestions)
- chat/04 (search trending topics)
- chat/05 (study suggestions)

**Props Interface:**
```typescript
interface SuggestionTextItemProps {
  icon: string;         // lucide icon name
  iconColor: string;    // hex color
  text: string;
  onPress: () => void;
  showDivider?: boolean;  // default true
  accessibilityLabel?: string;
}
```

**Dimensions:**
- Height: 52-56px [ESTIMATED]
- Padding vertical: 14-16px [ESTIMATED]
- Icon size: 22px [ESTIMATED]
- Icon-text gap: 16px [ESTIMATED]
- Text: 16px, Regular (400), #D4D4D4
- Divider: 1px, #2A2A2A

**Press feedback:** Background #1A1A1A [ESTIMATED], border-radius 8px

---

## 5. FeatureChip

**Description:** A small pill inside the input field that indicates an active feature mode (Search, Study, Editing message, etc.). Contains an icon, label text, and an X close button. Used across many features.

**Screens used:**
- chat/04 (Search chip)
- chat/05 (Study chip)
- chat/12 (Editing message chip)
- (Auth) chat/03c, 03e, and other feature modes

**Props Interface:**
```typescript
interface FeatureChipProps {
  icon: string;          // lucide icon name
  iconColor: string;     // hex color
  label: string;
  labelColor?: string;   // default #FFFFFF
  onDismiss: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 32px [ESTIMATED]
- Padding horizontal: 10px [ESTIMATED]
- Border: 1px solid #4A4A4A [ESTIMATED]
- Border radius: 16px (pill)
- Background: transparent
- Icon size: 16px [ESTIMATED]
- Icon-label gap: 6px [ESTIMATED]
- Close X size: 14px [ESTIMATED]
- Close X color: #9A9A9A [ESTIMATED]
- Label-X gap: 6px [ESTIMATED]

**Variants:**
| Mode | Icon | Icon Color | Label | Label Color |
|---|---|---|---|---|
| Search | `Globe` | #5BC5C9 | "Search" | #FFFFFF |
| Study | `GraduationCap` | #F5C542 | "Study" | #FFFFFF |
| Edit | `Pencil` | #5BC5C9 | "Editing message" | #5BC5C9 |
| Image | `Palette` | varies | "Image" | #FFFFFF |
| Research | `Telescope` | varies | "Research" | #FFFFFF |
| Agent | `SquareMousePointer` | varies | "Agent" | #FFFFFF |
| Instant | `Atom` | varies | "Instant" | #FFFFFF |
| Thinking | `Atom` | varies | "Thinking" | #FFFFFF |

**Animation:** slide-up on appear (250ms), slide-down on dismiss (200ms)

---

## 6. UserMessageBubble

**Description:** A rounded bubble containing the user's message text, right-aligned in the chat. Supports long-press to open context menu.

**Screens used:**
- chat/06, 07, 08, 10, 12

**Props Interface:**
```typescript
interface UserMessageBubbleProps {
  text: string;
  onLongPress: () => void;
  accessibilityLabel?: string;
}
```

**Dimensions:**
- Max width: 85% of screen [ESTIMATED]
- Background: #2F2F2F [ESTIMATED]
- Border radius: 20px [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Padding vertical: 12px [ESTIMATED]
- Text: 16px, Regular (400), #FFFFFF, line-height 22px

**Alignment:** flex-end (right side of screen)

**Press feedback:** slight opacity decrease (0.9) [ESTIMATED]

**Long press:** Opens ContextMenu (screen 10) with haptic feedback [ESTIMATED]

---

## 7. AIResponseView

**Description:** Renders the AI's response text. Supports plain text and rich Markdown (headers, bold, bullets, emoji, inline citation chips). Text is selectable via native long-press (not the custom context menu). Handles streaming animation.

**Screens used:**
- chat/07 (normal response)
- chat/08 (search mode with markdown + citations)
- chat/12 (visible in background during edit mode)

**Props Interface:**
```typescript
interface AIResponseViewProps {
  content: string;            // markdown content
  isStreaming?: boolean;      // animate streaming effect
  citations?: Citation[];     // inline citation data
  onCitationPress?: (citation: Citation) => void;
  accessibilityLabel?: string;
}

interface Citation {
  id: string;
  domain: string;
  faviconUrl: string;
  title: string;
  url: string;
  additionalCount?: number;  // for "+1", "+2" display
}
```

**Dimensions:**
- Margin horizontal: 16px [ESTIMATED]
- Text: 16px, Regular (400), #FFFFFF, line-height 24px
- Headers: 18px, Bold (700), #FFFFFF
- Bold: 700 weight inline
- Paragraph spacing: 16px [ESTIMATED]
- Bullet indent: 16px [ESTIMATED]
- Citation chip: 24px height, #333333 bg, 12px radius

**Selectable:** YES (native text selection on long-press, NOT custom context menu)

---

## 8. ActionBar

**Description:** A row of icon buttons appearing below the AI response after streaming completes. Unauth shows 3 icons; auth shows 6 icons. Can optionally include a "Sources" button with favicon stack.

**Screens used:**
- chat/07 (unauth, 3 icons)
- chat/08 (unauth, 3 icons + Sources)
- chat/07-auth (auth, 6 icons)
- chat/08-auth (auth, 6 icons + Sources)

**Props Interface:**
```typescript
interface ActionBarProps {
  isAuthenticated: boolean;
  showSources?: boolean;
  sources?: SourceFavicon[];      // favicon data for Sources button
  onCopy: () => void;
  onSpeak: () => void;
  onRegenerate: () => void;
  onSourcesPress?: () => void;
  // Auth-only handlers:
  onThumbsUp?: () => void;
  onThumbsDown?: () => void;
  onShare?: () => void;
  onEllipsis?: () => void;
  accessibilityLabel?: string;
}

interface SourceFavicon {
  url: string;
  alt: string;
}
```

**Layout:**
- Row, left-aligned
- Height: 36px [ESTIMATED]
- Margin left: 16px [ESTIMATED]
- Margin top: 8px [ESTIMATED]
- Gap between icons: 16px [ESTIMATED]

**Unauth Icons (3):**
| # | Icon (Lucide) | Size | Color |
|---|---|---|---|
| 1 | `Copy` | 20px | #6E6E6E |
| 2 | `Volume2` | 20px | #6E6E6E |
| 3 | `RefreshCw` | 20px | #6E6E6E |

**Auth Icons (6):** Copy, ThumbsUp, ThumbsDown, Volume2, Share2, EllipsisVertical

**Sources Button (optional):**
- Favicon stack (2-3 overlapping 20px circles) + "Sources" text (14px, Medium, #D4D4D4)
- Positioned to the right of the icon group
- Gap from last icon: 24px [ESTIMATED]

**Animation:** fade-in 300ms after streaming completes

---

## 9. AILoadingIndicator

**Description:** Shows the AI loading state: first a pulsing white circle, then a "Thinking..." or "Searching..." text with shimmer animation.

**Screens used:**
- chat/06 (loading state)

**Props Interface:**
```typescript
interface AILoadingIndicatorProps {
  mode?: 'thinking' | 'searching';   // default 'thinking'
  modelType?: 'auto' | 'instant' | 'thinking' | 'legacy';
}
```

**Phase 1: Pulsing Circle**
- Size: 20px diameter [ESTIMATED]
- Color: #FFFFFF
- Scale: oscillates 0.8 to 1.2
- Duration: ~1.2s per cycle
- Easing: ease-in-out (sinusoidal)

**Phase 2: Shimmer Text**
- Text: "Thinking..." or "Searching..."
- Font: 16px, Regular (400)
- Base color: #6E6E6E [ESTIMATED]
- Shimmer highlight: lighter sweep left-to-right
- Sweep duration: ~1.5s

**Transition:** Circle fades out -> text fades in (~100ms each)

---

## 10. StopButton

**Description:** A rounded-square button that replaces the send button during AI generation. Contains a solid square "stop" icon.

**Screens used:**
- chat/06 (during loading/streaming)

**Props Interface:**
```typescript
interface StopButtonProps {
  onPress: () => void;
  accessibilityLabel?: string;  // default "Stop generating"
}
```

**Dimensions:**
- Size: 36px [ESTIMATED]
- Background: #FFFFFF [ESTIMATED]
- Border radius: 8px [ESTIMATED]
- Icon: solid square, 14px [ESTIMATED], #000000

**Transition:** Appears IMMEDIATELY (no animation) when message is sent; reverts to send button IMMEDIATELY when streaming completes.

---

## 11. ContextMenu

**Description:** A floating card that appears on long-press of a user message bubble. Shows a timestamp and action items. Has a dimmed backdrop.

**Screens used:**
- chat/10 (unauth: 3 items)
- chat/10-auth (auth: 4 items with "Share")

**Props Interface:**
```typescript
interface ContextMenuProps {
  timestamp: string;
  items: ContextMenuItem[];
  onDismiss: () => void;
  position: { x: number; y: number };  // position near the long-pressed bubble
}

interface ContextMenuItem {
  icon: string;         // lucide icon name
  label: string;
  onPress: () => void;
}
```

**Dimensions:**
- Width: ~220px [ESTIMATED]
- Background: #2F2F2F [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Padding vertical: 8px [ESTIMATED]
- Shadow: 0 4px 12px rgba(0,0,0,0.3) [ESTIMATED]

**Timestamp:**
- Font: 13px, Regular (400), #9A9A9A
- Padding: 16px horizontal, 10px top, 8px bottom

**Menu Item:**
- Height: 48px [ESTIMATED]
- Padding horizontal: 16px
- Icon: 20px, #FFFFFF
- Text: 16px, Regular (400), #FFFFFF
- Gap: 12px

**Unauth Items:** Copy, Select Text, Edit Message
**Auth Items:** Copy, Select Text, Edit Message, Share

**Backdrop:** #000000 at 30-40% opacity [ESTIMATED]

**Animation:** fade-in 200ms, fade-out 150ms

---

## 12. AttachmentsBottomSheet

**Description:** A bottom sheet with media attachment buttons (Camera, Photos, Files) and feature items (Web search, Study and learn, Explore apps for unauth; extended list for auth). Uses @gorhom/bottom-sheet.

**Screens used:**
- chat/03 (unauth: 3 media + 3 features)
- chat/03-auth (auth: 3 media + 10 features, expandable)

**Props Interface:**
```typescript
interface AttachmentsBottomSheetProps {
  isAuthenticated: boolean;
  onClose: () => void;
  onMediaPress: (type: 'camera' | 'photos' | 'files') => void;
  onFeaturePress: (feature: AttachmentFeature) => void;
}

interface AttachmentFeature {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  isSelected?: boolean;
}
```

**Container:**
- Background: #212121 [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Drag handle: 36x4px, #4A4A4A, centered

**Media Buttons Row:**
- 3 equal-width buttons, 90px height, #333333 bg, 14px radius
- Icons: Camera, Image, Paperclip (28px, white)
- Labels: 14px, Medium (500), white

**Feature Items:**
- Icon (24px, white) + Title (16px, Medium, white) + Subtitle (14px, Regular, #9A9A9A)
- Height: 64px [ESTIMATED]

**Unauth features:** Web search, Study and learn, Explore apps
**Auth features:** Model, Create image, Deep research, Web search, Study and learn, Agent mode, Shopping research, Your Year with ChatGPT, Quizzes, Explore apps

---

## 13. EditWarningContainer

**Description:** An info banner that appears during edit message mode, warning that editing will restart the conversation.

**Screens used:**
- chat/12 (edit mode)

**Props Interface:**
```typescript
interface EditWarningContainerProps {
  message?: string;  // default "Editing this message will restart the conversation from here."
}
```

**Dimensions:**
- Margin horizontal: 16px [ESTIMATED]
- Background: #1A1A1A [ESTIMATED]
- Border: 1px solid #333333 [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Padding: 16px horizontal, 14px vertical [ESTIMATED]
- Layout: row
- Info icon: `Info` (Lucide), 20px, #9A9A9A, margin-right 12px
- Text: 14px, Regular (400), #D4D4D4, flex 1

**Animation:** fade-in 300ms on appear

---

## 14. SelectTextScreen

**Description:** A fullscreen modal that shows the user's message text in a selectable/copyable format. Has a back button and "Select Text" title.

**Screens used:**
- chat/11

**Props Interface:**
```typescript
interface SelectTextScreenProps {
  text: string;
  onBack: () => void;
}
```

**Header:**
- Back button: 40px circle, #2F2F2F bg, `ArrowLeft` icon
- Title: "Select Text", 18px, Bold (700), #FFFFFF, centered

**Content:**
- Padding: 16px
- Text: 16px, Regular (400), #FFFFFF, selectable, not editable
- Background: #000000

**Animation:** fade-in/out 200ms

---

## 15. SourcesBottomSheet

**Description:** A bottom sheet listing cited sources from search-mode AI responses. Each source has a favicon, domain, and article title. Scrollable.

**Screens used:**
- chat/09

**Props Interface:**
```typescript
interface SourcesBottomSheetProps {
  title?: string;         // default "Citations"
  sources: Source[];
  onSourcePress: (source: Source) => void;
  onClose: () => void;
}

interface Source {
  id: string;
  domain: string;
  faviconUrl: string;
  title: string;
  url: string;
}
```

**Container:**
- Background: #212121 [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Height: ~55-60% screen [ESTIMATED]
- Title: "Citations", 18px, SemiBold (600), #FFFFFF

**Source Item:**
- Favicon: 20px circle
- Domain: 14px, Regular (400), #9A9A9A
- Title: 16px, Medium (500), #FFFFFF
- Divider: 1px, #3A3A3A
- Padding vertical: 16px

---

## Cross-Screen Consistency Notes

1. **#2F2F2F is the universal "elevated surface" color** -- used for: user message bubbles, input field background, sidebar button, plus button, context menu, media buttons (brighter variant at #333333), select-text back button. This is consistent with `bg-chat-item-active` from the sidebar.

2. **Chip structure is identical** across Search, Study, Edit, and auth-mode features. Only icon, icon color, label, and label color change. This is a strong candidate for a single `FeatureChip` component.

3. **SuggestionTextItem** reuses the same layout for: category suggestions (02), trending search topics (04), and study activities (05). The only difference is icon and icon color.

4. **ActionBar** is the same component for unauth (3 icons) and search mode (3 icons + Sources). Auth adds 3 more icons. The Sources button is a conditional sub-component.

5. **Bottom sheets** (Attachments, Sources) share the same container styling: #212121 background, 20px top border radius, drag handle, backdrop at 50% opacity. Consider a shared `BottomSheetContainer` wrapper.

6. **Input bar** behavior -- the expanded state with chips uses the same visual expansion whether it's Search, Study, or Edit mode. The component should handle this generically.

7. **Font sizes confirmed consistent**: 16px for body text everywhere (messages, input, suggestions, menu items), 14px for secondary text (subtitles, citations, chip labels, warnings), 18-19px for titles.

8. **Header** is consistent across all 12 screens with the same layout, only varying the right-side content based on auth state. The sidebar button and "ChatGPT" title never change in unauth.
