# Design Tokens 4 -- Chat Auth Screens (New Tokens)

New design tokens discovered in the authenticated chat screens that are NOT present in previous design-tokens files (design-tokens.md). All values extracted from dark mode screenshots.

---

## Colors

### Backgrounds (New)

| Token | Hex | Usage |
|---|---|---|
| `bg-user-bubble` | `#2F2F2F` [ESTIMATED] | User message bubble background |
| `bg-chip` | `#333333` [ESTIMATED] | Feature mode chip background (Search, Image, Instant, etc.) |
| `bg-media-card` | `#333333` [ESTIMATED] | Camera/Photos/Files card background in Attachments BottomSheet |
| `bg-modal-floating` | `#2A2A2A` [ESTIMATED] | Floating modal background (Model selector, context menu, ellipsis modal) |
| `bg-talking-input` | `#3A3A3A` [ESTIMATED] | Narrower text input background in Talking Chat state |
| `bg-end-button` | `#2196F3` [ESTIMATED] | Blue "End" button and Mic button in Talking Chat state |
| `bg-mic-talking` | `#2196F3` [ESTIMATED] | Blue microphone button in Talking Chat state |
| `bg-profile-row` | `#000000` | Profile row background in GroupChat BottomSheet |
| `bg-stop-button` | `#FFFFFF` | Stop button during AI generation |
| `bg-groupchat-button` | `#FFFFFF` | "Start group chat" button |

### Text Colors (New)

| Token | Hex | Usage |
|---|---|---|
| `text-shimmer-base` | `#6E6E6E` [ESTIMATED] | Base color for "Thinking..."/"Searching..." shimmer text |
| `text-shimmer-highlight` | `#9A9A9A` [ESTIMATED] | Highlight sweep color for shimmer effect |
| `text-voice-suffix` | `#9A9A9A` [ESTIMATED] | "Voice" suffix in "ChatGPT Voice" header text |
| `text-privacy-notice` | `#9A9A9A` [ESTIMATED] | Privacy notice text in Hide Chat state |
| `text-suggestion-item` | `#9A9A9A` [ESTIMATED] | Suggestion text items below input (expanded suggestions) |
| `text-timestamp` | `#6E6E6E` [ESTIMATED] | Timestamp text in context menu modals |
| `text-feature-subtitle` | `#9A9A9A` [ESTIMATED] | Subtitle text in Attachments BottomSheet feature items |
| `text-citation` | `#9A9A9A` [ESTIMATED] | Citation chip text in AI responses |

### Accent Colors (New)

| Token | Hex | Usage |
|---|---|---|
| `accent-selected` | `#5BC5C9` [ESTIMATED] | Selected item highlight in Attachments BottomSheet (icon, title, subtitle, check) |
| `accent-blue` | `#2196F3` [ESTIMATED] | Blue accent for Talking Chat buttons (End, Mic) |
| `accent-chip-icon` | `#5BC5C9` [ESTIMATED] | Feature chip icon color (Search, Image, Research, etc.) |

### Suggestion Button Icon Colors (New)

| Token | Hex | Usage |
|---|---|---|
| `icon-create-image` | `#4ADE80` [ESTIMATED] | Green icon for "Create image" suggestion |
| `icon-brainstorm` | `#F5C542` [ESTIMATED] | Yellow/amber icon for "Brainstorm" suggestion |
| `icon-help-write` | `#C084FC` [ESTIMATED] | Purple/lavender icon for "Help me write" suggestion |
| `icon-get-advice` | `#5BC5C9` [ESTIMATED] | Teal/cyan icon for "Get advice" suggestion |
| `icon-code` | `#8B7BF7` [ESTIMATED] | Purple icon for "Code" suggestion (unauth) |
| `icon-summarize` | `#E8875B` [ESTIMATED] | Orange icon for "Summarize text" suggestion |

### Action Bar Colors (New)

| Token | Hex | Usage |
|---|---|---|
| `icon-action-bar` | `#9A9A9A` [ESTIMATED] | Default color for action bar icons (copy, thumbs, volume, share, ellipsis) |
| `icon-action-bar-active` | `#FFFFFF` | Filled/active state for thumbs-up or thumbs-down after tap |

### Border Colors (New)

| Token | Hex | Usage |
|---|---|---|
| `border-suggestion-button` | `#3A3A3A` [ESTIMATED] | Border for suggestion pill buttons |
| `border-table-cell` | `#3A3A3A` [ESTIMATED] | Table cell divider in markdown AI responses |

---

## Typography (New)

| Token | Size (px) | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `heading-talking` | 32 [ESTIMATED] | 600 (SemiBold) | 40px [ESTIMATED] | 0 | "Start talking" title in Talking Chat state |
| `heading-prompt` | 28 [ESTIMATED] | 700 (Bold) | 36px [ESTIMATED] | 0 | "What can I help with?" prompt title |
| `heading-groupchat` | 24 [ESTIMATED] | 700 (Bold) | 30px [ESTIMATED] | 0 | "Use ChatGPT together" title |
| `heading-response` | 22 [ESTIMATED] | 700 (Bold) | 28px [ESTIMATED] | 0 | AI response section headings (markdown H2/H3) |
| `body-response` | 16 [ESTIMATED] | 400 (Regular) | 24px [ESTIMATED] | 0 | AI response body text |
| `body-response-bold` | 16 [ESTIMATED] | 700 (Bold) | 24px [ESTIMATED] | 0 | Bold text within AI responses |
| `label-chip` | 14 [ESTIMATED] | 500 (Medium) | 18px [ESTIMATED] | 0 | Chip label text (Search, Image, Instant, etc.) |
| `label-feature-title` | 17 [ESTIMATED] | 500 (Medium) | 22px [ESTIMATED] | 0 | Feature item title in Attachments BottomSheet |
| `label-feature-subtitle` | 14 [ESTIMATED] | 400 (Regular) | 18px [ESTIMATED] | 0 | Feature item subtitle in Attachments BottomSheet |
| `label-media-card` | 14 [ESTIMATED] | 500 (Medium) | 18px [ESTIMATED] | 0 | Camera/Photos/Files card label text |
| `label-model-title` | 14 [ESTIMATED] | 400 (Regular) | 18px [ESTIMATED] | 0 | "GPT-5.2" model selector title |
| `label-model-option` | 17 [ESTIMATED] | 500 (Medium) | 22px [ESTIMATED] | 0 | Model option name (Auto, Instant, Thinking) |
| `label-model-desc` | 14 [ESTIMATED] | 400 (Regular) | 18px [ESTIMATED] | 0 | Model option description |
| `label-end-button` | 16 [ESTIMATED] | 600 (SemiBold) | 22px [ESTIMATED] | 0 | "End" button text in Talking Chat |
| `label-sources` | 14 [ESTIMATED] | 500 (Medium) | 18px [ESTIMATED] | 0 | "Sources" label in action bar |
| `body-privacy` | 16 [ESTIMATED] | 400 (Regular) | 24px [ESTIMATED] | 0 | Privacy notice text in Hide Chat state |
| `body-groupchat-desc` | 16 [ESTIMATED] | 400 (Regular) | 22px [ESTIMATED] | 0 | Description text in GroupChat BottomSheet |
| `label-table-header` | 15 [ESTIMATED] | 700 (Bold) | 20px [ESTIMATED] | 0 | Table header text in AI responses |
| `label-table-cell` | 15 [ESTIMATED] | 400 (Regular) | 20px [ESTIMATED] | 0 | Table cell text in AI responses |
| `label-citation` | 12 [ESTIMATED] | 400 (Regular) | 16px [ESTIMATED] | 0 | Inline citation chip text |
| `label-timestamp` | 13 [ESTIMATED] | 400 (Regular) | 18px [ESTIMATED] | 0 | Timestamp in context menu |

---

## Spacing (New)

| Token | Value (px) | Usage |
|---|---|---|
| `chip-padding-h` | 10 [ESTIMATED] | Horizontal padding inside feature chips |
| `chip-icon-gap` | 6 [ESTIMATED] | Gap between chip icon, text, and close X |
| `chip-input-gap` | 8 [ESTIMATED] | Vertical gap between chip row and text input row |
| `action-bar-gap` | 16 [ESTIMATED] | Gap between action bar icons |
| `action-bar-margin-top` | 12 [ESTIMATED] | Top margin of action bar below response |
| `bubble-padding-h` | 14 [ESTIMATED] | Horizontal padding inside user message bubble |
| `bubble-padding-v` | 12 [ESTIMATED] | Vertical padding inside user message bubble |
| `bubble-margin-right` | 16 [ESTIMATED] | Right margin of user message bubble |
| `feature-item-padding-h` | 24 [ESTIMATED] | Horizontal padding of feature list items |
| `feature-item-padding-v` | 16 [ESTIMATED] | Vertical padding of feature list items |
| `feature-icon-text-gap` | 16 [ESTIMATED] | Gap between icon and text in feature items |
| `media-card-gap` | 10 [ESTIMATED] | Gap between Camera/Photos/Files cards |
| `media-card-icon-text-gap` | 8 [ESTIMATED] | Gap between icon and text inside media cards |
| `modal-padding-h` | 16 [ESTIMATED] | Horizontal padding inside floating modals |
| `context-menu-item-height` | 48 [ESTIMATED] | Height of each menu item in context menus |
| `header-group-gap` | 8 [ESTIMATED] | Gap between buttons in header left/right groups |
| `header-icon-gap-combined` | 16 [ESTIMATED] | Gap between icons inside combined pill container |
| `prompt-margin-bottom` | 24 [ESTIMATED] | Bottom margin of prompt title above suggestion buttons |
| `suggestion-button-gap-h` | 10 [ESTIMATED] | Horizontal gap between suggestion buttons |
| `suggestion-button-gap-v` | 12 [ESTIMATED] | Vertical gap between suggestion button rows |
| `suggestion-text-row-height` | 56 [ESTIMATED] | Height of expanded suggestion text rows |

---

## Dimensions (New)

| Token | Value | Usage |
|---|---|---|
| `chip-height` | 32px [ESTIMATED] | Feature chip height |
| `chip-border-radius` | 16px | Feature chip corner radius (half of height) |
| `chip-icon-size` | 16px [ESTIMATED] | Icon size inside chips |
| `chip-close-size` | 14px [ESTIMATED] | Close X icon size inside chips |
| `input-expanded-height` | 88px [ESTIMATED] | Input container height when chip is present |
| `user-bubble-border-radius` | 20px [ESTIMATED] | User message bubble corner radius |
| `user-bubble-max-width` | 75% [ESTIMATED] | Maximum width of user message bubble |
| `media-card-height` | 100px [ESTIMATED] | Camera/Photos/Files card height |
| `media-card-border-radius` | 16px [ESTIMATED] | Media card corner radius |
| `media-card-icon-size` | 28px [ESTIMATED] | Icon size inside media cards |
| `modal-border-radius` | 16px [ESTIMATED] | Floating modal corner radius |
| `modal-width-model` | 70% [ESTIMATED] | Model selector modal width as % of screen |
| `modal-width-context` | 240px [ESTIMATED] | Context menu modal width |
| `action-bar-icon-size` | 20px [ESTIMATED] | Action bar icon size |
| `suggestion-button-height` | 48px [ESTIMATED] | Suggestion pill button height |
| `suggestion-button-radius` | 24px [ESTIMATED] | Suggestion button border radius |
| `suggestion-icon-size` | 22px [ESTIMATED] | Icon size inside suggestion buttons |
| `combined-pill-height` | 44px [ESTIMATED] | Height of combined icon pill container in header |
| `combined-pill-radius` | 22px [ESTIMATED] | Border radius of combined pill |
| `combined-pill-padding-h` | 14px [ESTIMATED] | Horizontal padding of combined pill |
| `talking-input-width` | 40% [ESTIMATED] | Width of text input in Talking Chat state |
| `end-button-width` | 90px [ESTIMATED] | Width of "End" pill button |
| `loading-circle-size` | 16px [ESTIMATED] | AI loading pulsing circle diameter |
| `favicon-size` | 18px [ESTIMATED] | Source favicon size in Sources row |
| `citation-chip-height` | 22px [ESTIMATED] | Inline citation chip height |
| `citation-chip-radius` | 11px [ESTIMATED] | Citation chip border radius |
| `profile-avatar-lg` | 44px [ESTIMATED] | Profile avatar size in GroupChat BottomSheet |
| `profile-row-height` | 72px [ESTIMATED] | Profile row height in GroupChat BottomSheet |
| `profile-row-radius` | 16px [ESTIMATED] | Profile row border radius |
| `groupchat-button-width` | 220px [ESTIMATED] | "Start group chat" button width |
| `groupchat-button-height` | 48px [ESTIMATED] | "Start group chat" button height |
| `drag-handle-width` | 40px [ESTIMATED] | Bottom sheet drag handle width |
| `drag-handle-height` | 4px [ESTIMATED] | Bottom sheet drag handle height |

---

## Shadows (New)

| Token | Value | Usage |
|---|---|---|
| `shadow-floating-modal` | `0 4px 16px rgba(0,0,0,0.4)` [ESTIMATED] | Shadow for floating modals (model selector, context menu) |
| `shadow-context-menu` | `0 4px 16px rgba(0,0,0,0.5)` [ESTIMATED] | Shadow for context menu modal |

---

## Animation Tokens (New)

| Token | Value | Usage |
|---|---|---|
| `duration-shimmer-cycle` | 1500ms [ESTIMATED] | Duration of one shimmer sweep cycle |
| `duration-loading-pulse` | 1200ms [ESTIMATED] | Duration of AI loading circle pulse cycle |
| `duration-fade-action-bar` | 300ms | Fade-in of action bar after AI response completes |
| `duration-chip-slide` | 250ms [ESTIMATED] | Chip slide-up/slide-down animation |
| `duration-talking-loading` | 2000ms | Hardcoded loading before Talking Chat transition |
| `duration-talking-transition` | 400ms [ESTIMATED] | Talking Chat state transition (content fade + input contraction) |
| `duration-hide-chat-transition` | 300ms [ESTIMATED] | Hide Chat state fade transitions |
| `duration-context-menu` | 200ms [ESTIMATED] | Context menu fade-in/fade-out |
| `duration-groupchat-loading` | 3000ms | Hardcoded loading for "Start group chat" button |
| `spring-input-contraction` | `{ damping: 25, stiffness: 150 }` [ESTIMATED] | Spring config for Talking Chat input width contraction |
| `easing-premium` | `Easing.bezier(0.25, 0.1, 0.25, 1.0)` [ESTIMATED] | Premium smooth easing for Talking Chat transitions |

---

## Notes

- All [ESTIMATED] values should be verified on-device by the UI Polisher.
- The `accent-selected` color (#5BC5C9) is used consistently across selected items in Attachments BottomSheet AND chip icons in the input bar.
- The `accent-blue` color (#2196F3) is only used in the Talking Chat state. Verify this is the exact Material Blue 500 or a custom shade.
- The shimmer animation tokens are critical for the "Thinking..."/"Searching..." effect -- this is one of the most visible animations in the app.
- The combined pill container in the header (AddPerson+Bubble, Compose+Ellipsis) uses the same `bg-header-button` (#2F2F2F) already defined in design-tokens.md.
- User message bubble background (`#2F2F2F`) matches `bg-header-button` and `bg-search-input` from existing tokens. Consider aliasing.
