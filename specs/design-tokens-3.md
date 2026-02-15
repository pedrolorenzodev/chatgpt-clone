# Design Tokens 3 -- Chat Feature (Unauth Flow)

Extracted from chat screenshots 01-12 (unauthenticated). These tokens extend the existing design-tokens.md with chat-specific values.

---

## NEW Colors (not in design-tokens.md)

### Chat Backgrounds

| Token | Hex | Usage |
|---|---|---|
| `bg-user-bubble` | `#2F2F2F` [ESTIMATED] | User message bubble background |
| `bg-input-field` | `#2F2F2F` [ESTIMATED] | Chat text input field background (same as user bubble) |
| `bg-context-menu` | `#2F2F2F` [ESTIMATED] | Context menu card background (same shade) |
| `bg-edit-warning` | `#1A1A1A` [ESTIMATED] | Edit warning container background |
| `bg-media-button` | `#333333` [ESTIMATED] | Camera/Photos/Files media button background |
| `bg-citation-chip` | `#333333` [ESTIMATED] | Inline citation chip background |
| `bg-chip-transparent` | `transparent` | Feature mode chip background (Search, Study, Edit) |

### Chat Text Colors

| Token | Hex | Usage |
|---|---|---|
| `text-ai-response` | `#FFFFFF` | AI response text (body) |
| `text-ai-bold` | `#FFFFFF` | Bold text in AI markdown responses |
| `text-ai-header` | `#FFFFFF` | H2/H3 headers in AI markdown responses |
| `text-suggestion-item` | `#D4D4D4` [ESTIMATED] | Suggestion text item text color |
| `text-citation-domain` | `#D4D4D4` [ESTIMATED] | Source domain name in citation chips |
| `text-sources-label` | `#D4D4D4` [ESTIMATED] | "Sources" label in action bar |
| `text-sources-domain` | `#9A9A9A` [ESTIMATED] | Domain name in Sources BottomSheet |
| `text-timestamp` | `#9A9A9A` [ESTIMATED] | Timestamp in context menu |
| `text-warning` | `#D4D4D4` [ESTIMATED] | Edit warning text |
| `text-chip-search` | `#FFFFFF` | "Search" chip text |
| `text-chip-study` | `#FFFFFF` | "Study" chip text |
| `text-chip-edit` | `#5BC5C9` [ESTIMATED] | "Editing message" chip text (teal/cyan) |
| `text-shimmer-base` | `#6E6E6E` [ESTIMATED] | "Thinking..." / "Searching..." base text color |

### Suggestion Button Colors

| Token | Hex | Usage |
|---|---|---|
| `suggestion-btn-text` | `#9A9A9A` [ESTIMATED] | Suggestion button text on empty chat |
| `suggestion-btn-border` | `#3A3A3A` [ESTIMATED] | Suggestion button border |

### Feature Category Icon Colors

| Token | Hex | Usage |
|---|---|---|
| `icon-brainstorm` | `#F5C542` [ESTIMATED] | Lightbulb icon (yellow/amber) |
| `icon-get-advice` | `#5BC5C9` [ESTIMATED] | Gem/diamond icon (teal/cyan) |
| `icon-code` | `#8B7BF7` [ESTIMATED] | Code braces icon (purple) |
| `icon-summarize` | `#E8875B` [ESTIMATED] | Document icon (orange) |
| `icon-trending` | `#5B9DED` [ESTIMATED] | TrendingUp icon (blue) in search suggestions |
| `icon-study` | `#F5C542` [ESTIMATED] | GraduationCap icon (yellow/amber) for study chip |
| `icon-edit-chip` | `#5BC5C9` [ESTIMATED] | Pencil icon in edit chip (teal/cyan) |
| `icon-search-chip` | `#5BC5C9` [ESTIMATED] | Globe icon in search chip (teal/cyan) |

### Action Bar Colors

| Token | Hex | Usage |
|---|---|---|
| `icon-action-bar` | `#6E6E6E` [ESTIMATED] | Copy, Speaker, Regenerate icon color |
| `icon-action-bar-active` | `#FFFFFF` | Active/pressed action bar icon |

### Loading/Stop Button

| Token | Hex | Usage |
|---|---|---|
| `bg-stop-button` | `#FFFFFF` [ESTIMATED] | Stop button background |
| `icon-stop-button` | `#000000` | Stop square icon color |
| `bg-loading-circle` | `#FFFFFF` | AI loading pulsing circle |

### Input / Send Button States

| Token | Hex | Usage |
|---|---|---|
| `bg-send-disabled` | `#3A3A3A` [ESTIMATED] | Send button background when disabled |
| `bg-send-enabled` | `#FFFFFF` | Send button background when enabled |
| `icon-send-disabled` | `#6E6E6E` [ESTIMATED] | Send arrow when disabled |
| `icon-send-enabled` | `#000000` | Send arrow when enabled |
| `icon-mic` | `#8E8E8E` [ESTIMATED] | Microphone icon color |
| `text-input-placeholder` | `#8E8E8E` [ESTIMATED] | "Ask ChatGPT" placeholder |

### Chip Border

| Token | Hex | Usage |
|---|---|---|
| `border-chip` | `#4A4A4A` [ESTIMATED] | Feature mode chip border |
| `border-edit-warning` | `#333333` [ESTIMATED] | Edit warning container border |

---

## NEW Typography Tokens

| Token | Size (px) | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `chat-prompt-title` | 28 [ESTIMATED] | 700 (Bold) | 34px [ESTIMATED] | -0.3px [ESTIMATED] | "What can I help with?" title |
| `chat-message-body` | 16 | 400 (Regular) | 24px [ESTIMATED] | 0 | User message text, AI response body |
| `chat-ai-header` | 18 [ESTIMATED] | 700 (Bold) | 24px [ESTIMATED] | 0 | Markdown H2/H3 in AI response |
| `chat-ai-bold` | 16 | 700 (Bold) | 24px [ESTIMATED] | 0 | Bold inline text in AI response |
| `chat-suggestion-btn` | 16 [ESTIMATED] | 400 (Regular) | 22px [ESTIMATED] | 0 | Suggestion button text |
| `chat-suggestion-item` | 16 [ESTIMATED] | 400 (Regular) | 22px [ESTIMATED] | 0 | Suggestion text item text |
| `chat-chip-text` | 14 [ESTIMATED] | 500 (Medium) | 18px [ESTIMATED] | 0 | Chip label text (Search, Study, Editing) |
| `chat-citation-text` | 12 [ESTIMATED] | 400 (Regular) | 16px [ESTIMATED] | 0 | Citation chip domain text |
| `chat-sources-label` | 14 [ESTIMATED] | 500 (Medium) | 18px [ESTIMATED] | 0 | "Sources" text in action bar |
| `chat-timestamp` | 13 [ESTIMATED] | 400 (Regular) | 18px [ESTIMATED] | 0 | Timestamp in context menu |
| `chat-warning-text` | 14 [ESTIMATED] | 400 (Regular) | 20px [ESTIMATED] | 0 | Edit warning text |
| `chat-context-menu-item` | 16 [ESTIMATED] | 400 (Regular) | 22px [ESTIMATED] | 0 | Context menu item text |
| `chat-select-text-title` | 18 [ESTIMATED] | 700 (Bold) | 24px [ESTIMATED] | 0 | "Select Text" screen title |
| `chat-sources-title` | 18 [ESTIMATED] | 600 (SemiBold) | 24px [ESTIMATED] | 0 | "Citations" bottom sheet title |
| `chat-source-domain` | 14 [ESTIMATED] | 400 (Regular) | 20px [ESTIMATED] | 0 | Domain name in sources list |
| `chat-source-title` | 16 [ESTIMATED] | 500 (Medium) | 22px [ESTIMATED] | 0 | Article title in sources list |
| `chat-media-btn-text` | 14 [ESTIMATED] | 500 (Medium) | 18px [ESTIMATED] | 0 | Camera/Photos/Files label |
| `chat-feature-title` | 16 [ESTIMATED] | 500 (Medium) | 22px [ESTIMATED] | 0 | Feature item title in attachments sheet |
| `chat-feature-subtitle` | 14 [ESTIMATED] | 400 (Regular) | 20px [ESTIMATED] | 0 | Feature item subtitle in attachments sheet |
| `chat-shimmer-text` | 16 [ESTIMATED] | 400 (Regular) | 22px [ESTIMATED] | 0 | "Thinking..." / "Searching..." shimmer |

---

## NEW Spacing Tokens

| Token | Value (px) | Usage |
|---|---|---|
| `chat-padding-h` | 16 | Horizontal padding for chat content area |
| `chat-message-margin-h` | 16 [ESTIMATED] | Left/right margin for messages and AI text |
| `chat-bubble-padding-h` | 16 [ESTIMATED] | Horizontal padding inside user message bubble |
| `chat-bubble-padding-v` | 12 [ESTIMATED] | Vertical padding inside user message bubble |
| `chat-action-bar-gap` | 16 [ESTIMATED] | Gap between action bar icon buttons |
| `chat-action-bar-margin-top` | 8 [ESTIMATED] | Margin top of action bar from AI text |
| `chat-suggestion-gap-h` | 10 [ESTIMATED] | Horizontal gap between suggestion buttons |
| `chat-suggestion-gap-v` | 12 [ESTIMATED] | Vertical gap between suggestion button rows |
| `chat-suggestion-item-height` | 52-56 [ESTIMATED] | Height per suggestion text item |
| `chat-chip-padding-h` | 10 [ESTIMATED] | Horizontal padding inside feature chips |
| `chat-chip-height` | 32 [ESTIMATED] | Height of feature mode chips |
| `chat-input-expanded-min-h` | 80 [ESTIMATED] | Min height of expanded input (with chip) |
| `chat-media-btn-gap` | 12 [ESTIMATED] | Gap between media buttons in attachments sheet |
| `chat-feature-item-height` | 64 [ESTIMATED] | Height per feature item in attachments sheet |
| `chat-warning-padding` | 16 [ESTIMATED] | Padding inside edit warning container |
| `chat-prompt-title-mb` | 24 [ESTIMATED] | Margin bottom of "What can I help with?" |

---

## NEW Dimension Tokens

| Token | Value | Usage |
|---|---|---|
| `chat-bubble-radius` | 20px [ESTIMATED] | User message bubble border radius |
| `chat-bubble-max-width` | 85% [ESTIMATED] | Max width of user message bubble (% of screen) |
| `chat-input-height` | 48px [ESTIMATED] | Single-line input field height |
| `chat-input-radius` | 24px [ESTIMATED] | Input field border radius (fully rounded) |
| `chat-plus-btn-size` | 44px [ESTIMATED] | Plus button diameter |
| `chat-send-btn-size` | 36px [ESTIMATED] | Send/Stop button diameter |
| `chat-send-btn-radius` | 18px [ESTIMATED] | Send button border radius (circular) |
| `chat-stop-btn-radius` | 8px [ESTIMATED] | Stop button border radius (rounded square) |
| `chat-stop-icon-size` | 14px [ESTIMATED] | Stop square icon size |
| `chat-action-icon-size` | 20px [ESTIMATED] | Action bar icon size |
| `chat-action-touch-size` | 36px [ESTIMATED] | Action bar icon touch target |
| `chat-suggestion-btn-height` | 48px [ESTIMATED] | Suggestion button height |
| `chat-suggestion-btn-radius` | 24px [ESTIMATED] | Suggestion button border radius |
| `chat-suggestion-icon-size` | 22px [ESTIMATED] | Icon size in suggestion buttons |
| `chat-chip-radius` | 16px [ESTIMATED] | Feature chip border radius |
| `chat-chip-icon-size` | 16px [ESTIMATED] | Icon size inside chips |
| `chat-chip-close-size` | 14px [ESTIMATED] | Close X icon size in chips |
| `chat-context-menu-width` | 220px [ESTIMATED] | Context menu card width |
| `chat-context-menu-radius` | 16px [ESTIMATED] | Context menu border radius |
| `chat-context-menu-item-h` | 48px [ESTIMATED] | Context menu item height |
| `chat-media-btn-height` | 90px [ESTIMATED] | Media button height (Camera/Photos/Files) |
| `chat-media-btn-radius` | 14px [ESTIMATED] | Media button border radius |
| `chat-media-icon-size` | 28px [ESTIMATED] | Media button icon size |
| `chat-loading-circle-size` | 20px [ESTIMATED] | AI loading pulsing circle diameter |
| `chat-edit-warning-radius` | 12px [ESTIMATED] | Edit warning container border radius |
| `chat-citation-chip-height` | 24px [ESTIMATED] | Inline citation chip height |
| `chat-citation-chip-radius` | 12px [ESTIMATED] | Citation chip border radius |
| `chat-favicon-size` | 20px [ESTIMATED] | Favicon size in sources list |
| `chat-source-favicon-stack-overlap` | -8px [ESTIMATED] | Horizontal overlap between stacked favicons |

---

## NEW Animation Tokens

| Token | Value | Usage |
|---|---|---|
| `duration-chip-enter` | 250ms [ESTIMATED] | Chip slide-up into input |
| `duration-chip-exit` | 200ms [ESTIMATED] | Chip slide-down out of input |
| `duration-suggestions-enter` | 300ms [ESTIMATED] | Suggestion texts slide-up |
| `duration-suggestions-exit` | 200ms [ESTIMATED] | Suggestion texts slide-down |
| `duration-action-bar-fade` | 300ms | Action bar fade-in after streaming |
| `duration-context-menu-enter` | 200ms [ESTIMATED] | Context menu fade-in |
| `duration-context-menu-exit` | 150ms [ESTIMATED] | Context menu fade-out |
| `duration-select-text-enter` | 200ms [ESTIMATED] | Select Text screen fade-in |
| `duration-warning-fade` | 300ms | Edit warning container fade-in |
| `duration-loading-pulse` | 1200ms [ESTIMATED] | One cycle of AI loading circle pulsing |
| `duration-shimmer-sweep` | 1500ms [ESTIMATED] | One sweep of shimmer highlight |
| `loading-pulse-scale-min` | 0.8 [ESTIMATED] | Minimum scale of pulsing circle |
| `loading-pulse-scale-max` | 1.2 [ESTIMATED] | Maximum scale of pulsing circle |

---

## Consistency Cross-References

### Shared with Existing Tokens (confirmed same values)
- `bg-primary` (#000000) -- used as chat screen background
- `bg-bottomsheet` (#212121) -- used for Attachments BottomSheet and Sources BottomSheet
- `bg-header-button` (#2F2F2F) -- used for sidebar button in chat header
- `text-primary` (#FFFFFF) -- used for header title, button text, message text
- `text-secondary` (#9A9A9A) -- used for timestamps, domain names
- `border-separator` (#2A2A2A) -- used for dividers between suggestion items
- `bottomsheet-border-radius` (20px) -- used for all bottom sheets
- `icon-primary` (#FFFFFF) -- used for header icons, media button icons
- `easing-standard` -- used for all chat animations

### Potential Inconsistencies Flagged
1. The input field background appears to be `#2F2F2F` (same as `bg-search-input` from sidebar), but the existing token `bg-input` is `#000000` for the login screen input. These are intentionally different contexts -- chat input uses a visible dark gray background while auth input uses black with a border. No action needed.
2. The `bg-user-bubble` value of `#2F2F2F` is the same as `bg-chat-item-active` in the sidebar. This appears intentional -- a consistent "elevated surface" color.
