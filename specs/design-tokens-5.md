# Design Tokens 5 -- GroupChat & Action Bar Features

New tokens discovered from screenshots 13, 16-36b. Only tokens NOT already in design-tokens.md are listed here.

---

## Colors

### Backgrounds

| Token | Hex | Usage |
|---|---|---|
| `bg-modal` | `#2A2A2A` [ESTIMATED] | Floating modals (Options, Ellipsis, Retry, Switch Model, Confirmation modals) |
| `bg-report-modal` | `#1A1A1A` [ESTIMATED] | Report Profile/Conversation modal (darker than standard modals) |
| `bg-card` | `#2A2A2A` [ESTIMATED] | Rounded card containers (Customize ChatGPT textarea, Respond row) |
| `bg-popup` | `#1A1A1A` [ESTIMATED] | Toast/Popup notifications at bottom of screen |
| `bg-loading-row` | `#2A2A2A` [ESTIMATED] | Row background when loading indicator is active (Reset button) |
| `bg-loading-row-destructive` | `#2A1A1A` [ESTIMATED] | Row background when destructive loading is active (Delete button) -- dark red tint |
| `bg-profile-row` | `#000000` | Profile row in GroupChat BottomSheet |
| `bg-dropdown-option-pressed` | `#3A3A3A` [ESTIMATED] | Pressed state of dropdown option rows |

### Text Colors

| Token | Hex | Usage |
|---|---|---|
| `text-destructive` | `#E57373` [ESTIMATED] | Destructive action text (Delete, Leave, Remove, Report in modals) |
| `text-link-blue` | `#B0C4DE` [ESTIMATED] | Link-style text (URLs, "Branched from" link, GroupChat action buttons) |
| `text-link-accent` | `#7EB8E0` [ESTIMATED] | "Learn more" link in Share Feedback BottomSheet |
| `text-timestamp` | `#9A9A9A` [ESTIMATED] | Timestamp text in Ellipsis Modal |
| `text-subtitle-modal` | `#6E6E6E` [ESTIMATED] | Subtitle/version text in Switch Model Modal ("GPT-5.2") |

### Icons

| Token | Hex | Usage |
|---|---|---|
| `icon-destructive` | `#E57373` [ESTIMATED] | Destructive action icons (Delete, Leave, Remove, Report) |
| `icon-action-bar` | `#9A9A9A` [ESTIMATED] | Action Bar icon buttons (copy, thumbs, speaker, share, ellipsis) |
| `icon-action-bar-active` | `#FFFFFF` | Action Bar icon when activated (thumbs-up/down filled state) |
| `icon-modal-option` | `#9A9A9A` [ESTIMATED] | Icons in modal option rows |
| `icon-chevron-modal` | `#9A9A9A` [ESTIMATED] | Chevron icons in modal rows |

### Avatar Colors

| Token | Hex | Usage |
|---|---|---|
| `avatar-purple` | `#7C3AED` [ESTIMATED] | User avatar "ML" (consistent with sidebar token) |
| `avatar-blue-gray` | `#607D8B` [ESTIMATED] | User avatar "PL" (blue-gray) |

### Interactive States

| Token | Hex | Usage |
|---|---|---|
| `press-bg-modal-option` | `#3A3A3A` [ESTIMATED] | Pressed state for modal option rows |
| `text-selection-highlight` | `#4A6FA5` [ESTIMATED] | Text selection/highlight color in inputs (Rename Group modal) |

---

## Typography

| Token | Size (px) | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `heading-modal` | 20 | 600 (SemiBold) | 26px [ESTIMATED] | 0 | Modal titles (Share Feedback, Report Profile/Conversation) |
| `heading-confirmation` | 22 | 600 (SemiBold) | 28px [ESTIMATED] | -0.2px [ESTIMATED] | Confirmation modal titles (Remove, Leave, Delete) |
| `heading-bottomsheet-lg` | 24 | 700 (Bold) | 30px [ESTIMATED] | 0 | Large BottomSheet titles ("Use ChatGPT together") |
| `body-profile-name` | 22 | 600 (SemiBold) | 28px [ESTIMATED] | 0 | Profile BottomSheet large name |
| `body-avatar-initials-lg` | 40 | 600 (SemiBold) | 40px | 0 | Large avatar initials (120px avatar) |
| `body-avatar-initials-md` | 18 | 600 (SemiBold) | 18px | 0 | Medium avatar initials (48px avatar) |
| `body-avatar-initials-sm` | 14 | 600 (SemiBold) | 14px | 0 | Small avatar initials (36px avatar in header) |
| `body-modal-option` | 16 | 400 (Regular) | 22px [ESTIMATED] | 0 | Modal option row text |
| `body-modal-description` | 13 | 400 (Regular) | 18px [ESTIMATED] | 0 | Model descriptions, timestamps, disclaimer text |
| `body-system-message` | 15 | 400 (Regular) | 20px [ESTIMATED] | 0 | System messages in GroupChat |
| `label-action-button` | 15 | 500 (Medium) | 20px [ESTIMATED] | 0 | GroupChat action buttons ("Customize ChatGPT", "Invite with link") |
| `label-popup` | 15 | 400 (Regular) | 20px [ESTIMATED] | 0 | Popup notification text |
| `label-modal-title-sm` | 14 | 400 (Regular) | 20px [ESTIMATED] | 0 | Modal section subtitles ("New group chat" in Options Modal) |
| `label-sources` | 14 | 500 (Medium) | 20px [ESTIMATED] | 0 | "Sources" text in Action Bar |
| `label-branched` | 14 | 400 (Regular) | 20px [ESTIMATED] | 0 | "Branched from" text |

---

## Spacing

| Token | Value (px) | Usage |
|---|---|---|
| `modal-padding` | 24 | Internal padding of confirmation modals |
| `modal-button-gap` | 24 | Gap between Cancel and Destructive buttons in confirmation modals |
| `modal-option-height` | 44-48 | Height of option rows in contextual modals (varies slightly) |
| `modal-option-padding-h` | 16 | Horizontal padding of modal option rows |
| `popup-margin-h` | 16 | Horizontal margin of popup notifications from screen edge |
| `popup-padding` | 16 | Internal padding of popup notifications |
| `member-row-height` | 72 | Height of member rows in Members Screen |
| `member-avatar-size` | 48 | Avatar size in Members Screen rows |
| `profile-avatar-lg` | 120 | Large avatar in Profile BottomSheets |
| `action-bar-icon-gap` | 8 | Gap between Action Bar icons |
| `action-bar-margin-top` | 8 | Space between AI response text and Action Bar |
| `gc-button-padding-v` | 10 | Vertical padding of GroupChat action buttons |
| `gc-button-padding-h` | 20 | Horizontal padding of GroupChat action buttons |
| `gc-button-radius` | 20 | Border radius of GroupChat action buttons |

---

## Dimensions

| Token | Value | Usage |
|---|---|---|
| `modal-border-radius` | 16px [ESTIMATED] | Floating modal corner radius |
| `confirmation-modal-radius` | 28px [ESTIMATED] | Confirmation dialog corner radius (Remove, Leave, Delete) |
| `confirmation-modal-width` | 80% [ESTIMATED] | Width of confirmation modals relative to screen |
| `contextual-modal-width` | 240-300px [ESTIMATED] | Width of contextual menus (Ellipsis, Retry, Switch Model) |
| `action-bar-icon-size` | 20px [ESTIMATED] | Icon size in Action Bar |
| `action-bar-icon-container` | 32px [ESTIMATED] | Touch target for Action Bar icons |
| `report-modal-width` | 90% [ESTIMATED] | Width of Report Profile/Conversation modal |
| `source-favicon-size` | 20px [ESTIMATED] | Source favicon icon size in Action Bar |
| `source-favicon-overlap` | -4px [ESTIMATED] | Negative margin for overlapping favicons |
| `groupchat-header-avatar` | 36px [ESTIMATED] | Avatar size in GroupChat header |
| `groupchat-header-pill` | auto [ESTIMATED] | SquarePen + Avatar combined pill container |
| `manage-link-action-height` | 56px [ESTIMATED] | Height of action rows in Manage Link screen |
| `drag-handle-width` | 36px [ESTIMATED] | Width of BottomSheet drag handle |
| `drag-handle-height` | 4px [ESTIMATED] | Height of BottomSheet drag handle |
| `camera-overlay-size` | 36px [ESTIMATED] | Camera icon overlay on avatar in Edit Profile |
| `dropdown-caret-size` | 16px [ESTIMATED] | Size of dropdown triangle/caret icon |
| `feedback-textarea-height` | 160px [ESTIMATED] | Height of "Share details" textarea |
| `report-textarea-height` | 120px [ESTIMATED] | Height of report details textarea |

---

## Shadows / Elevation

| Token | Value | Usage |
|---|---|---|
| `shadow-modal` | `0 4px 16px rgba(0,0,0,0.4)` [ESTIMATED] | Floating contextual modals (Ellipsis, Retry, Switch Model, Options) |
| `shadow-confirmation` | `0 8px 32px rgba(0,0,0,0.5)` [ESTIMATED] | Centered confirmation modals (Remove, Leave, Delete) |

---

## Animation Tokens

| Token | Value | Usage |
|---|---|---|
| `duration-action-bar-appear` | 300ms | Action Bar fade-in after AI response completes |
| `duration-modal-expand` | 200ms [ESTIMATED] | Modal expansion animation (Legacy models toggle) |
| `duration-chevron-rotate` | 200ms [ESTIMATED] | Chevron rotation animation in expandable sections |
| `duration-loading-button` | 2000ms | Loading indicator duration for button actions (Reset, Delete, Save, Leave) |
| `duration-groupchat-loading` | 3000ms | "Start group chat" button loading duration |
| `spring-modal` | `{ damping: 20, stiffness: 250 }` [ESTIMATED] | Modal appear/dismiss spring config |

---

## Notes

- The `text-destructive` and `icon-destructive` color `#E57373` appears consistently across all destructive actions. It is a muted/soft red, not a bright red. The UI Polisher should verify this exact shade.
- `text-link-blue` (`#B0C4DE`) is used for link-style text elements that are not traditional hyperlinks -- GroupChat buttons and the branched-from link. This is a steel-blue/light-blue tone.
- All modal backgrounds use `#2A2A2A` consistently, which is slightly different from the bottomsheet background of `#212121`. The Report modal uses an even darker `#1A1A1A`. The UI Polisher should verify whether `#2A2A2A` and `#212121` are actually distinct or the same.
- The Action Bar icons use `#9A9A9A` which matches `icon-secondary` from the existing tokens. This is intentional -- these are secondary-importance icons.
- Avatar colors vary per user and should be assigned from a predefined palette. The two observed colors are purple (`#7C3AED`) and blue-gray (`#607D8B`).
