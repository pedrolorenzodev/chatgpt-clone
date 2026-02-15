# Components Inventory 4 -- Chat Auth Screens (New Components)

New reusable components discovered in the authenticated chat screens that are NOT in previous components-inventory files (components-inventory.md). Each entry describes the component, its variants, props, visual specs, and where it appears.

---

## 1. ChatHeader

**Description:** The top header bar for the chat screen. Has multiple distinct configurations depending on auth state, chat state, and whether messages are present.

**Screens used:**
- chat/01 Auth (empty chat)
- chat/01 Unauth (empty chat)
- chat/06 Auth (in-chat, message sent)
- chat/08 Auth (in-chat, response complete)
- chat/14 Auth (hide chat state)
- chat/15 Auth (talking chat state)

**Variants:**

| Variant | Left Side | Right Side |
|---|---|---|
| `unauth` | SidebarButton | "ChatGPT" centered text + "Log in" pill |
| `auth-empty` | SidebarButton + ChatGPTButton pill | CombinedPill(AddPerson + Bubble) |
| `auth-in-chat` | SidebarButton + ChatGPTButton pill | CombinedPill(Compose + Ellipsis) |
| `auth-hide-chat` | SidebarButton + ChatGPTButton pill | MessageCircleOff single circle |
| `auth-talking` | SidebarButton + "ChatGPT Voice" text | EllipsisVertical single circle |

**Props Interface:**
```typescript
interface ChatHeaderProps {
  variant: 'unauth' | 'auth-empty' | 'auth-in-chat' | 'auth-hide-chat' | 'auth-talking';
  onSidebarPress: () => void;
  onChatGPTPress?: () => void;       // auth variants only
  onLoginPress?: () => void;          // unauth only
  onAddPersonPress?: () => void;      // auth-empty only
  onBubblePress?: () => void;         // auth-empty only
  onComposePress?: () => void;        // auth-in-chat only
  onEllipsisPress?: () => void;       // auth-in-chat, auth-talking
  onHideChatToggle?: () => void;      // auth-hide-chat only
}
```

**Dimensions:**
- Height: 56px [ESTIMATED]
- Padding horizontal: 16px
- Padding top: 8px below safe area [ESTIMATED]
- Background: #000000 with gradient overlay

---

## 2. CombinedPillButton

**Description:** A pill-shaped container holding two icon buttons side by side. Used in the auth header for grouping related actions.

**Screens used:**
- chat/01 Auth (AddPerson + Bubble icons)
- chat/06-08 Auth (Compose + Ellipsis icons)

**Props Interface:**
```typescript
interface CombinedPillButtonProps {
  leftIcon: string;          // lucide icon name
  rightIcon: string;         // lucide icon name
  onLeftPress: () => void;
  onRightPress: () => void;
  leftAccessibilityLabel: string;
  rightAccessibilityLabel: string;
}
```

**Dimensions:**
- Height: 44px [ESTIMATED]
- Border radius: 22px (fully rounded)
- Background: #2F2F2F
- Padding horizontal: 14px [ESTIMATED]
- Gap between icons: 16px [ESTIMATED]

**Icon specs:**
- Size: 22px [ESTIMATED]
- Color: #FFFFFF
- Press feedback per icon: opacity 0.7

---

## 3. ChatGPTButton (Header Pill)

**Description:** Pill-shaped "ChatGPT" button in the auth header. Different from the unauth centered text -- this is a tappable button with a dark background.

**Screens used:**
- chat/01 Auth (all auth states except talking)
- chat/03 Auth (triggers Attachments BottomSheet)

**Props Interface:**
```typescript
interface ChatGPTButtonProps {
  onPress: () => void;
  accessibilityLabel?: string;  // defaults to "ChatGPT menu"
}
```

**Dimensions:**
- Width: auto (content-based), ~120px [ESTIMATED]
- Height: 44px [ESTIMATED]
- Background: #2F2F2F
- Border radius: 22px
- Padding horizontal: 18px [ESTIMATED]

**Typography:**
- Text: "ChatGPT"
- Font size: 19px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: #FFFFFF

**Press feedback:** opacity 0.7

---

## 4. FeatureChip

**Description:** A small pill-shaped chip that appears in the input bar when a feature mode is activated (Search, Image, Instant, etc.). Contains an icon, label text, and a close X button.

**Screens used:**
- chat/03c (Instant chip)
- chat/03e (Image chip)
- chat/04 (Search chip -- unauth & auth)
- chat/05 (Study chip -- unauth & auth)
- chat/06 Auth (Search chip during loading)
- chat/12 (Editing message chip)
- All other feature modes from Attachments BottomSheet

**Props Interface:**
```typescript
interface FeatureChipProps {
  icon: string;              // lucide icon name
  label: string;             // chip text
  iconColor?: string;        // defaults to #5BC5C9
  onClose: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 32px [ESTIMATED]
- Background: #333333 [ESTIMATED]
- Border radius: 16px
- Padding horizontal: 10px [ESTIMATED]

**Content layout:** Row, vertically centered
- Icon: 16px [ESTIMATED], color varies by variant
- Label: font 14px, weight 500, color #FFFFFF
- Close icon: `X`, 14px, #9A9A9A [ESTIMATED]
- Gap: 6px between all elements [ESTIMATED]

**Animation:**
- Slide-up on mount (250ms [ESTIMATED])
- Slide-down on unmount (250ms [ESTIMATED])
- Easing: standard ease-out

**Variants:**

| Feature | label | icon | iconColor |
|---|---|---|---|
| Search | "Search" | `Globe` | #5BC5C9 |
| Study | "Study" | `BookOpen` | #5BC5C9 |
| Image | "Image" | `Palette` | #5BC5C9 |
| Research | "Research" | `Telescope` | #5BC5C9 |
| Agent | "Agent" | `SquareMousePointer` | #5BC5C9 |
| Shopping | "Shopping research" | `ShoppingBag` | #5BC5C9 |
| Year | "Your Year with ChatGPT" | `CirclePlay` | #5BC5C9 |
| Quizzes | "Quizzes" | `SquareStack` | #5BC5C9 |
| Instant | "Instant" | `Atom` | #FFFFFF |
| Thinking | "Thinking" | `Atom` | #FFFFFF |
| Editing | "Editing message" | `Pencil` | #FFFFFF |

---

## 5. ChatInputBar

**Description:** The bottom input bar for the chat screen. Highly versatile component with multiple states: empty, text-entered, chip mode, loading mode, and talking mode.

**Screens used:**
- chat/01 Auth and Unauth (all states)
- chat/03c-03e (chip mode)
- chat/04-05 (chip mode)
- chat/06 (loading mode)
- chat/07-08 (post-response)
- chat/14 (hide chat)
- chat/15 (talking mode)
- chat/12 (editing mode)

**Props Interface:**
```typescript
interface ChatInputBarProps {
  isAuth: boolean;
  mode: 'normal' | 'chip' | 'loading' | 'talking';
  chip?: FeatureChipProps;             // when mode is 'chip'
  placeholder?: string;                // defaults to "Ask ChatGPT"
  value: string;
  onChangeText: (text: string) => void;
  onPlusPress: () => void;
  onMicPress: () => void;
  onSendPress: () => void;
  onTalkPress?: () => void;            // auth only
  onStopPress?: () => void;            // loading mode only
  onEndPress?: () => void;             // talking mode only
  onCameraPress?: () => void;          // talking mode only
  onChipClose?: () => void;            // chip mode only
}
```

**Dimensions:**
- Padding horizontal: 16px
- Padding bottom: 8px [ESTIMATED]
- Background: #000000

**Sub-elements vary by mode -- see auth-screen-spec.md for full details per state.**

---

## 6. UserMessageBubble

**Description:** Right-aligned message bubble for user-sent messages.

**Screens used:**
- chat/06 (message sent)
- chat/07 (response complete)
- chat/08 (response search mode)
- chat/10 (long press context menu)

**Props Interface:**
```typescript
interface UserMessageBubbleProps {
  text: string;
  onLongPress: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Max width: ~75% of screen width [ESTIMATED]
- Background: #2F2F2F [ESTIMATED]
- Border radius: 20px [ESTIMATED]
- Padding horizontal: 14px [ESTIMATED]
- Padding vertical: 12px [ESTIMATED]
- Alignment: right (flex-end)
- Margin right: 16px [ESTIMATED]

**Typography:**
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: #FFFFFF
- Line height: 24px [ESTIMATED]

**Press feedback:** None on normal press; long press triggers context menu with haptic feedback

---

## 7. AILoadingIndicator

**Description:** Two-phase loading indicator for AI response. Phase 1 is a pulsing white circle. Phase 2 is shimmer text ("Thinking..." or "Searching...").

**Screens used:**
- chat/06 Unauth and Auth

**Props Interface:**
```typescript
interface AILoadingIndicatorProps {
  mode: 'normal' | 'search';      // determines text: "Thinking..." vs "Searching..."
  modelVariant?: 'auto' | 'instant' | 'thinking' | 'gpt51-instant' | 'gpt51-thinking' | 'gpt4o';
}
```

**Phase 1 -- Pulsing Circle:**
- Diameter: 16px [ESTIMATED]
- Color: #FFFFFF
- Animation: scale pulse from 1.0 to 1.2, duration ~1.2s per cycle, continuous
- Position: left-aligned, 24px from left edge [ESTIMATED]

**Phase 2 -- Shimmer Text:**
- Text: "Thinking..." or "Searching..."
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Base color: #6E6E6E [ESTIMATED]
- Shimmer highlight color: #9A9A9A [ESTIMATED]
- Animation: gradient sweep left-to-right, ~1.5s per cycle, continuous loop
- Position: same as Phase 1 (replaces circle)

**Model Variations:**
- Auto: standard shimmer duration
- Instant: NO shimmer (skip directly to response)
- Thinking: shimmer ~3s longer than normal
- GPT-5.1 Instant: NO shimmer, NO loading circle
- GPT-5.1 Thinking: shimmer ~10s longer than normal
- GPT-4o: skip loading circle, start directly with shimmer

---

## 8. ActionBar

**Description:** Horizontal row of icon buttons below an AI response. Has two variants: unauth (3 icons) and auth (6 icons). In search mode, includes a Sources button on the right.

**Screens used:**
- chat/07 Unauth (3 icons)
- chat/07 Auth (6 icons)
- chat/08 Unauth (3 icons + Sources)
- chat/08 Auth (6 icons + Sources)

**Props Interface:**
```typescript
interface ActionBarProps {
  variant: 'unauth' | 'auth';
  showSources?: boolean;            // when search mode response
  sources?: SourceItem[];           // favicon URLs + labels
  onCopyPress: () => void;
  onThumbsUpPress?: () => void;     // auth only
  onThumbsDownPress?: () => void;   // auth only
  onSpeakerPress: () => void;
  onSharePress?: () => void;        // auth only
  onEllipsisPress?: () => void;     // auth only
  onRegeneratePress?: () => void;   // unauth only
  onSourcesPress?: () => void;      // search mode only
}
```

**Layout:**
- Horizontal row
- Margin left: 24px [ESTIMATED]
- Margin top: 12px [ESTIMATED]
- Gap between icons: 16px [ESTIMATED]

**Icons (Unauth -- 3):**

| # | Icon (Lucide) | Size | Color |
|---|---|---|---|
| 1 | `Copy` | 20px | #9A9A9A |
| 2 | `Volume2` | 20px | #9A9A9A |
| 3 | `RefreshCw` | 20px | #9A9A9A |

**Icons (Auth -- 6):**

| # | Icon (Lucide) | Size | Color |
|---|---|---|---|
| 1 | `Copy` | 20px | #9A9A9A |
| 2 | `ThumbsUp` | 20px | #9A9A9A |
| 3 | `ThumbsDown` | 20px | #9A9A9A |
| 4 | `Volume2` | 20px | #9A9A9A |
| 5 | `Share2` | 20px | #9A9A9A |
| 6 | `EllipsisVertical` | 20px | #9A9A9A |

**Press feedback per icon:** opacity 0.7

**ThumbsUp active state:**
- Icon changes to filled variant
- Color: #FFFFFF
- ThumbsDown icon disappears from the bar

**ThumbsDown active state:**
- Icon changes to filled variant
- Color: #FFFFFF
- ThumbsUp icon disappears from the bar
- Opens Share Feedback BottomSheet (chat/36)

**Sources Button (search mode):**
- Position: right side of action bar, separated by flexible space
- Layout: row -- stacked favicon circles + "Sources" text
- Favicon size: 18px [ESTIMATED], circular
- Favicons overlap with ~6px offset [ESTIMATED]
- Text: "Sources", font 14px, weight 500, color #FFFFFF
- Gap between favicons and text: 8px [ESTIMATED]

**Animation:**
- Action bar appears with fade-in (300ms) after AI response streaming completes

---

## 9. ContextMenu (Long Press)

**Description:** Floating modal that appears on long-press of user message bubble. Shows a timestamp and action items.

**Screens used:**
- chat/10 Unauth (3 items)
- chat/10 Auth (4 items)

**Props Interface:**
```typescript
interface ContextMenuProps {
  variant: 'unauth' | 'auth';
  timestamp: string;              // formatted date string
  position: { x: number; y: number }; // anchor position
  onCopyPress: () => void;
  onSelectTextPress: () => void;
  onEditMessagePress: () => void;
  onSharePress?: () => void;      // auth only
  onDismiss: () => void;
}
```

**Container:**
- Background: #2A2A2A [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Width: ~240px [ESTIMATED]
- Shadow: `0 4px 16px rgba(0,0,0,0.5)` [ESTIMATED]
- Animation: fade-in/fade-out

**Timestamp:**
- Font size: 13px [ESTIMATED]
- Font weight: 400
- Color: #6E6E6E [ESTIMATED]
- Padding: 14px horizontal, 12px top, 8px bottom [ESTIMATED]

**Menu items:**
- Height: 48px each [ESTIMATED]
- Padding horizontal: 14px [ESTIMATED]
- Icon: 22px [ESTIMATED], #FFFFFF
- Gap: 12px between icon and text [ESTIMATED]
- Text: font 16px, weight 400, color #FFFFFF
- Press feedback: background #333333 [ESTIMATED]

**Items (Unauth):** Copy, Select Text, Edit Message
**Items (Auth):** Copy, Select Text, Edit Message, Share

---

## 10. AttachmentsBottomSheet

**Description:** Multi-feature bottom sheet with media buttons (Camera/Photos/Files) and a list of feature actions. Has unauth (3 items) and auth (10 items) variants.

**Screens used:**
- chat/03 Unauth (3 feature items)
- chat/03 Auth (10 feature items)

**Props Interface:**
```typescript
interface AttachmentsBottomSheetProps {
  isAuth: boolean;
  onClose: () => void;
  onCameraPress: () => void;
  onPhotosPress: () => void;
  onFilesPress: () => void;
  onFeaturePress: (feature: FeatureType) => void;
  selectedFeature?: FeatureType;    // shows selected state (check icon, blue color)
}

type FeatureType =
  | 'model'
  | 'create-image'
  | 'deep-research'
  | 'web-search'
  | 'study-and-learn'
  | 'agent-mode'
  | 'shopping-research'
  | 'your-year'
  | 'quizzes'
  | 'explore-apps';
```

**Container:**
- Background: #212121 [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Initial height: ~55% screen [ESTIMATED]
- Expandable to ~100% on swipe up
- Backdrop: #000000 at 50%

**Media cards:** 3 equal-width rounded cards, 100px height, bg #333333, 16px radius
**Feature items:** 72px height, icon + title + subtitle, padding horizontal 24px
**Selected state:** icon/title/subtitle turn #5BC5C9, check icon appears right

---

## 11. ModelSelectorModal

**Description:** Floating modal for selecting AI model. Appears anchored above the "Model" row in the Attachments BottomSheet.

**Screens used:**
- chat/03b (model selector)

**Props Interface:**
```typescript
interface ModelSelectorModalProps {
  selectedModel: 'auto' | 'instant' | 'thinking';
  onSelectModel: (model: string) => void;
  onLegacyModelsPress: () => void;
  onDismiss: () => void;
}
```

**Container:**
- Background: #2A2A2A [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Width: ~70% of screen [ESTIMATED]
- Shadow: `0 4px 16px rgba(0,0,0,0.4)` [ESTIMATED]

**Title:** "GPT-5.2", font 14px, weight 400, color #6E6E6E

**Options:**
- Each row: ~60px height, 16px padding horizontal
- Selected: check icon (20px, #FFFFFF) on left + title + subtitle
- Unselected: indented title + subtitle (no icon)
- Title: font 17px, weight 500, color #FFFFFF
- Subtitle: font 14px, weight 400, color #9A9A9A

---

## 12. SuggestionButton

**Description:** Pill-shaped suggestion button with icon and text. Used in the empty chat state for quick actions.

**Screens used:**
- chat/01 Unauth (Brainstorm, Get advice, Code, Summarize text)
- chat/01 Auth (Create image, Brainstorm, Help me write, Get advice)
- chat/03c, 03e (visible in background with different suggestion sets)

**Props Interface:**
```typescript
interface SuggestionButtonProps {
  icon: string;          // lucide icon name
  iconColor: string;     // color hex
  label: string;
  onPress: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 48px [ESTIMATED]
- Padding horizontal: 18px [ESTIMATED]
- Background: transparent
- Border: 1px solid #3A3A3A [ESTIMATED]
- Border radius: 24px
- Layout: row, icon + text, gap 8px

**Icon:** 22px [ESTIMATED], color varies
**Text:** font 16px, weight 400, color #9A9A9A [ESTIMATED]
**Press feedback:** background #2A2A2A [ESTIMATED]

---

## 13. SuggestionTextItem

**Description:** An expanded suggestion text row with an icon and descriptive text, appearing below the input when a suggestion button is tapped.

**Screens used:**
- chat/02 Unauth and Auth (expanded suggestions)
- chat/04 (search mode trending topics)
- chat/05 (study mode suggestions)

**Props Interface:**
```typescript
interface SuggestionTextItemProps {
  icon: string;          // lucide icon name
  iconColor: string;
  text: string;
  onPress: () => void;
  showSeparator: boolean;  // show bottom separator
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 56px [ESTIMATED]
- Padding horizontal: 24px
- Icon: left, 20px [ESTIMATED], color matches category
- Text: font 16px, weight 400, color #9A9A9A [ESTIMATED]
- Gap between icon and text: 16px [ESTIMATED]
- Separator: 1px, #2A2A2A [ESTIMATED], left margin ~64px [ESTIMATED]
- Press feedback: opacity 0.7

---

## 14. GroupChatBottomSheet

**Description:** Bottom sheet for initiating a group chat. Shows title, description, CTA button, and user profile row.

**Screens used:**
- chat/13

**Props Interface:**
```typescript
interface GroupChatBottomSheetProps {
  userName: string;
  userInitials: string;
  userAvatarColor: string;
  profileSubtitle: string;
  onStartGroupChat: () => void;
  onProfilePress: () => void;
  onClose: () => void;
}
```

**Unique sub-elements:**
- "Start group chat" button: white pill, auto-width, centered
- Profile row: black bg, 72px height, avatar + name + subtitle + edit icon, rounded 16px

---

## 15. StopButton

**Description:** Circular white button with a square stop icon. Replaces Send/Talk during AI generation.

**Screens used:**
- chat/06 Auth and Unauth (during AI loading)

**Props Interface:**
```typescript
interface StopButtonProps {
  onPress: () => void;
  accessibilityLabel?: string;  // defaults to "Stop generation"
}
```

**Dimensions:**
- Size: 36px [ESTIMATED]
- Background: #FFFFFF
- Border radius: 18px (circular)
- Icon: filled square, 14px [ESTIMATED], color #000000

**Press feedback:** opacity 0.85

**Note:** Appears IMMEDIATELY when message is sent (no animation). Disappears immediately when generation stops or completes, replaced by Send or Talk button.

---

## 16. TalkButton

**Description:** Circular white button with audio waveform icon. Appears in auth input bar when no text is entered (replaces the disabled Send button from unauth).

**Screens used:**
- chat/01 Auth (empty input)
- chat/14 Auth (hide chat, empty input)

**Props Interface:**
```typescript
interface TalkButtonProps {
  onPress: () => void;
  accessibilityLabel?: string;  // defaults to "Start voice conversation"
}
```

**Dimensions:**
- Size: 36px [ESTIMATED]
- Background: #FFFFFF
- Border radius: 18px (circular)
- Icon: `AudioLines` (Lucide) or similar waveform icon, 20px [ESTIMATED], #000000

**Press feedback:** opacity 0.85

**Loading animation (on press):**
1. Button expands horizontally to the left (smooth animation)
2. Shows loading indicator (left) + "Cancel" text (right) in dark colors
3. Duration: 2 seconds
4. After 2s: transitions to Talking Chat state

---

## Cross-Screen Consistency Notes

1. **FeatureChip** is the single most reused new component -- appears in 10+ variations across chip types.
2. **ChatHeader** must handle 5 distinct variants. Consider implementing as a single component with conditional rendering based on variant prop.
3. **CombinedPillButton** appears in exactly 2 header variants (auth-empty, auth-in-chat) with different icon pairs each time.
4. **ActionBar** icons are consistently 20px and #9A9A9A across all instances. The gap of 16px between them is consistent.
5. **UserMessageBubble** background (#2F2F2F) matches the chat input background and header button background. This is intentional -- it creates visual cohesion.
6. **SuggestionButton** border color (#3A3A3A) matches input border and modal separator colors.
7. **AttachmentsBottomSheet** background (#212121) matches the auth bottom sheet background from design-tokens.md (`bg-bottomsheet`).
8. The **StopButton** and **TalkButton** share the same dimensions (36px circle, white bg, 18px radius) but different icons. Could be composed from a shared base component.
9. **ContextMenu** and **ModelSelectorModal** share the same floating modal pattern (bg #2A2A2A, radius 16px, shadow). Consider a shared FloatingModal wrapper.
10. All **BottomSheet** components (Attachments, GroupChat, Sources, Share Feedback) share the same drag handle spec (40px x 4px, #4A4A4A, centered).
