# Design Tokens -- Consolidated Reference (Merged)

All values extracted from ChatGPT mobile app screenshots (dark mode). These are the canonical values for the entire project. Every spec file references tokens from this document.

Sources merged: design-tokens-1.md through design-tokens-5.md.

---

## Colors

### Backgrounds

| Token | Hex | Opacity | Usage | Confidence |
|---|---|---|---|---|
| `bg-primary` | `#000000` | 100% | Main screen background (welcome, login, loading, chat, settings) | Exact |
| `bg-sidebar` | `#171717` | 100% | Sidebar panel background (both auth and unauth) | Exact |
| `bg-sidebar-overlay` | `#000000` | 50% | Semi-transparent overlay right of sidebar | Exact |
| `bg-bottomsheet` | `#212121` | 100% | Auth bottom sheet, Attachments BottomSheet, Sources BottomSheet | [ESTIMATED] |
| `bg-surface` | `#2F2F2F` | 100% | Elevated surface color: user message bubble, chat input field, search input, sidebar active item, header buttons, context menu, select-text back button. Universal "raised element" on dark bg | [ESTIMATED] |
| `bg-surface-higher` | `#333333` | 100% | Higher elevation: media buttons (Camera/Photos/Files), citation chips, feature chip bg (auth), disabled send button bg | [ESTIMATED] |
| `bg-modal` | `#2A2A2A` | 100% | Floating modals (Options, Ellipsis, Retry, Switch Model, context menu auth, Confirmation modals, card containers) | [ESTIMATED] |
| `bg-modal-dialog` | `#424242` | 100% | Centered AlertDialog-style modals (Language, Appearance, Log out, Subscription info), dropdown popovers (Accent Color, Input Language) | [ESTIMATED] |
| `bg-modal-backdrop` | `#000000` | 50% | Semi-transparent backdrop behind centered modals and bottom sheets | Exact |
| `bg-report-modal` | `#1A1A1A` | 100% | Report Profile/Conversation modal, popup/toast notifications, edit warning container | [ESTIMATED] |
| `bg-input-auth` | `#000000` | 100% | Text input field background on login screen (matches screen bg) | Exact |
| `bg-button-primary` | `#FFFFFF` | 100% | Primary CTA buttons (Continue, Log in or sign up, Start group chat, Stop button, Send enabled) | Exact |
| `bg-button-disabled` | `#333333` | 100% | Disabled Continue button, disabled send button | [ESTIMATED] |
| `bg-button-gray` | `#7A7A7A` | 100% | "Sign up" button on bottom sheet | [ESTIMATED] |
| `bg-button-outline` | `transparent` | -- | Outline buttons (Google, phone/email toggle on login, Log in on bottom sheet) | Exact |
| `bg-settings-card` | `#2A2A2A` | 100% | Settings card/group background (auth screens) | [ESTIMATED] |
| `bg-settings-card-unauth` | `#3A3A3A` | 100% | Settings card/group background (unauth screens) -- may be same as bg-settings-card at different rendering; verify on device | [ESTIMATED] |
| `bg-terms-card` | `#111111` | 100% | Terms/privacy card on welcome screen | [ESTIMATED] |
| `bg-avatar-default` | `#7C3AED` | 100% | Default user avatar circle (purple) | [ESTIMATED] |
| `bg-avatar-profile` | `#A87FDB` | 100% | Large profile avatar background (purple/lilac, settings) | [ESTIMATED] |
| `bg-license-badge` | `#3A3A3A` | 100% | License type badge pill background | [ESTIMATED] |
| `bg-chip-transparent` | `transparent` | -- | Feature mode chip background (unauth: Search, Study, Edit) | Exact |
| `bg-chip-filled` | `#333333` | 100% | Feature mode chip background (auth: Search, Image, Instant, etc.) | [ESTIMATED] |
| `bg-talking-input` | `#3A3A3A` | 100% | Narrower text input background in Talking Chat state | [ESTIMATED] |
| `bg-accent-blue` | `#2196F3` | 100% | Blue "End" button and Mic button in Talking Chat state | [ESTIMATED] |
| `bg-profile-row` | `#000000` | 100% | Profile row background in GroupChat BottomSheet | Exact |
| `bg-popup` | `#1A1A1A` | 100% | Toast/Popup notifications at bottom of screen | [ESTIMATED] |
| `bg-loading-row` | `#2A2A2A` | 100% | Row background when loading indicator is active | [ESTIMATED] |
| `bg-loading-row-destructive` | `#2A1A1A` | 100% | Row background for destructive loading (dark red tint) | [ESTIMATED] |
| `bg-dropdown-option-pressed` | `#3A3A3A` | 100% | Pressed state of dropdown option rows | [ESTIMATED] |
| `bg-press-sidebar-item` | `#2A2A2A` | 100% | Press highlight on sidebar items | [ESTIMATED] |
| `bg-press-outline-button` | `#1A1A1A` | 100% | Press tint on outline buttons | [ESTIMATED] |

### Text Colors

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `text-primary` | `#FFFFFF` | Headings, primary content, button labels on dark bg, AI response text, header titles, modal titles, chip text | Exact |
| `text-secondary` | `#D4D4D4` | Sidebar chat items (inactive), suggestion item text, citation domain names, "Sources" label, edit warning text | [ESTIMATED] |
| `text-tertiary` | `#9A9A9A` | Subtitles, descriptions, section headers, status labels, timestamps (context menu, modals), source domains, placeholder-adjacent text, feature subtitles, privacy notice, link-footer, "Learn more" underlined links | [ESTIMATED] |
| `text-disabled` | `#6E6E6E` | Disabled button text, OR divider, input placeholder, shimmer base text, timestamp text (in some modals), model version subtitle | [ESTIMATED] |
| `text-on-light` | `#000000` | Text on white/light buttons (Continue, send arrow enabled, stop icon, toggle thumb on) | Exact |
| `text-link` | `#FFFFFF` | Underlined link text in content (Terms, Privacy, Learn about...) | Exact |
| `text-link-footer` | `#9A9A9A` | Footer links on login screen (Terms of Use, Privacy Policy) | [ESTIMATED] |
| `text-link-blue` | `#B0C4DE` | Link-style text (URLs, "Branched from" link, GroupChat action buttons) | [ESTIMATED] |
| `text-link-accent` | `#7EB8E0` | "Learn more" link in Share Feedback BottomSheet | [ESTIMATED] |
| `text-placeholder` | `#6E6E6E` | Input placeholder text (auth login, unfocused) | [ESTIMATED] |
| `text-input-placeholder-chat` | `#8E8E8E` | "Ask ChatGPT" placeholder in chat input (slightly brighter than auth) | [ESTIMATED] |
| `text-floating-label` | `#FFFFFF` | Floating label on focused input | Exact |
| `text-sidebar-item` | `#FFFFFF` | Sidebar menu item text (actions, projects) | Exact |
| `text-sidebar-chat-active` | `#FFFFFF` | Sidebar chat history item text (active) | Exact |
| `text-or-divider` | `#6E6E6E` | "OR" text in the login screen divider | [ESTIMATED] |
| `text-destructive` | `#E57373` | Destructive action text (Log out, Delete, Remove, Report, Leave, Clear history) | [ESTIMATED] |
| `text-modal-body` | `#CCCCCC` | Modal body text in AlertDialog-style modals (slightly dimmer than pure white) | [ESTIMATED] |
| `text-shimmer-base` | `#6E6E6E` | "Thinking..." / "Searching..." base text color | [ESTIMATED] |
| `text-shimmer-highlight` | `#9A9A9A` | Highlight sweep color for shimmer effect | [ESTIMATED] |
| `text-chip-edit` | `#5BC5C9` | "Editing message" chip text (teal/cyan) | [ESTIMATED] |
| `text-suggestion-btn` | `#9A9A9A` | Suggestion button text on empty chat | [ESTIMATED] |
| `text-voice-suffix` | `#9A9A9A` | "Voice" suffix in "ChatGPT Voice" header text | [ESTIMATED] |
| `text-selection-highlight` | `#4A6FA5` | Text selection/highlight color in inputs | [ESTIMATED] |

### Borders

| Token | Hex | Width | Usage | Confidence |
|---|---|---|---|---|
| `border-input-default` | `#3A3A3A` | 1px | Input field border (unfocused), outline button borders | [ESTIMATED] |
| `border-input-focused` | `#FFFFFF` | 2px | Input field border (focused) | [ESTIMATED] width |
| `border-separator` | `#2A2A2A` | 1px | Horizontal separators/dividers (sidebar, welcome screen, suggestion items, sources list) | [ESTIMATED] |
| `border-divider-or` | `#3A3A3A` | 1px | "OR" divider lines on login screen | [ESTIMATED] |
| `border-terms-card` | `#222222` | 1px | Terms card border on welcome screen | [ESTIMATED] |
| `border-button-login-bs` | `#555555` | 1px | "Log in" button border on bottom sheet (lighter) | [ESTIMATED] |
| `border-chip` | `#4A4A4A` | 1px | Feature mode chip border (unauth) | [ESTIMATED] |
| `border-edit-warning` | `#333333` | 1px | Edit warning container border | [ESTIMATED] |
| `border-suggestion-button` | `#3A3A3A` | 1px | Border for suggestion pill buttons | [ESTIMATED] |
| `border-table-cell` | `#3A3A3A` | 1px | Table cell divider in markdown AI responses | [ESTIMATED] |
| `border-settings-row-separator` | `#3A3A3A` at ~40% opacity | 1px | Separator between settings card rows | [ESTIMATED] |

### Icons

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `icon-primary` | `#FFFFFF` | Primary icons (back arrow, compose, sidebar menu items, media button icons, header icons) | Exact |
| `icon-secondary` | `#9A9A9A` | Search icon, chevrons, back arrow in search, action bar icons (copy, thumbs, speaker, share, ellipsis), modal option icons | [ESTIMATED] |
| `icon-disabled` | `#6E6E6E` | Send arrow disabled, mic icon | [ESTIMATED] |
| `icon-destructive` | `#E57373` | Destructive action icons (Delete, Leave, Remove, Report, Log out) | [ESTIMATED] |
| `icon-chevron` | `#FFFFFF` | Chevron icons in settings navigation rows | Exact |
| `icon-chevron-secondary` | `#9A9A9A` | Secondary chevrons (Security rows, modal rows) | [ESTIMATED] |
| `icon-action-bar-active` | `#FFFFFF` | Active/filled action bar icon (thumbs-up/down after tap) | Exact |

### Feature Category Icon Colors

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `icon-brainstorm` | `#F5C542` | Lightbulb icon (yellow/amber) | [ESTIMATED] |
| `icon-get-advice` | `#5BC5C9` | Gem/diamond icon (teal/cyan) | [ESTIMATED] |
| `icon-code` | `#8B7BF7` | Code braces icon (purple) | [ESTIMATED] |
| `icon-summarize` | `#E8875B` | Document icon (orange) | [ESTIMATED] |
| `icon-trending` | `#5B9DED` | TrendingUp icon (blue) in search suggestions | [ESTIMATED] |
| `icon-create-image` | `#4ADE80` | Green icon for "Create image" suggestion | [ESTIMATED] |
| `icon-help-write` | `#C084FC` | Purple/lavender icon for "Help me write" suggestion | [ESTIMATED] |
| `accent-selected` | `#5BC5C9` | Selected item highlight in Attachments BottomSheet, chip icons | [ESTIMATED] |

### Toggle Switch Colors

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `toggle-track-on` | `#FFFFFF` | Toggle switch track when ON | Exact |
| `toggle-thumb-on` | `#000000` | Toggle switch thumb when ON | Exact |
| `toggle-track-off` | `#4A4A4A` | Toggle switch track when OFF | [ESTIMATED] |
| `toggle-thumb-off` | `#9A9A9A` | Toggle switch thumb when OFF | [ESTIMATED] |

### Radio Button Colors

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `radio-border-selected` | `#FFFFFF` | Radio button outer ring when selected | Exact |
| `radio-fill-selected` | `#FFFFFF` | Radio button inner dot when selected | Exact |
| `radio-border-unselected` | `#9A9A9A` | Radio button ring when unselected | [ESTIMATED] |

### Accent Color Dots (Settings)

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `accent-dot-default` | `#9A9A9A` | Default accent color dot (gray) | [ESTIMATED] |
| `accent-dot-blue` | `#3B82F6` | Blue accent color dot | [ESTIMATED] |
| `accent-dot-green` | `#22C55E` | Green accent color dot | [ESTIMATED] |
| `accent-dot-yellow` | `#EAB308` | Yellow accent color dot | [ESTIMATED] |
| `accent-dot-pink` | `#EC4899` | Pink accent color dot | [ESTIMATED] |
| `accent-dot-orange` | `#F97316` | Orange accent color dot | [ESTIMATED] |
| `accent-dot-purple` | `#A855F7` | Purple accent color dot | [ESTIMATED] |

### Avatar Colors

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `avatar-purple` | `#7C3AED` | User avatar "ML" (default purple) | [ESTIMATED] |
| `avatar-blue-gray` | `#607D8B` | User avatar "PL" (blue-gray) | [ESTIMATED] |
| `avatar-profile-lg` | `#A87FDB` | Large profile avatar (settings, purple/lilac) | [ESTIMATED] |

### Loading / Feedback

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `spinner-color-light` | `#FFFFFF` | Loading spinner on auth loading screen, AI loading pulsing circle | Exact |
| `spinner-inline-dark` | `#000000` | Inline spinner inside Continue button (on white bg) | Exact |
| `spinner-inline-muted` | `#6E6E6E` | Inline spinner on Google button loading state | [ESTIMATED] |

### Send / Stop Button States

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `bg-send-disabled` | `#3A3A3A` | Send button background when disabled | [ESTIMATED] |
| `bg-send-enabled` | `#FFFFFF` | Send button background when enabled | Exact |
| `icon-send-disabled` | `#6E6E6E` | Send arrow icon when disabled | [ESTIMATED] |
| `icon-send-enabled` | `#000000` | Send arrow icon when enabled | Exact |
| `bg-stop-button` | `#FFFFFF` | Stop button background during AI generation | Exact |
| `icon-stop-button` | `#000000` | Stop square icon color | Exact |

---

## Typography

The app uses system fonts throughout: San Francisco on iOS, Roboto on Android. No custom font families.

### Headings

| Token | Size (px) | Weight | Line Height | Letter Spacing | Usage | Confidence |
|---|---|---|---|---|---|---|
| `heading-xl` | 36 | 700 (Bold) | 44px | -0.5px | "Welcome to ChatGPT" title | [ESTIMATED] LH, LS |
| `heading-lg` | 26 | 700 (Bold) | 34px | -0.3px | "Log in or sign up" on login screen | [ESTIMATED] LH, LS |
| `heading-md` | 24 | 700 (Bold) | 32px | 0 | Bottom sheet title, "Use ChatGPT together" GroupChat title | [ESTIMATED] |
| `heading-chat-prompt` | 28 | 700 (Bold) | 36px | -0.3px | "What can I help with?" title | [ESTIMATED] |
| `heading-talking` | 32 | 600 (SemiBold) | 40px | 0 | "Start talking" title in Talking Chat state | [ESTIMATED] |
| `heading-response` | 18 | 700 (Bold) | 24px | 0 | AI response section headings (markdown H2/H3) | [ESTIMATED] |
| `heading-modal` | 22 | 700 (Bold) | 28px | 0 | Modal dialog titles ("App language", "Appearance", "Log out?", confirmation modals) | [ESTIMATED] |
| `heading-modal-sm` | 20 | 600 (SemiBold) | 26px | 0 | Smaller modal titles (Share Feedback, Report Profile, settings screen headers) | [ESTIMATED] |

### Body Text

| Token | Size (px) | Weight | Line Height | Letter Spacing | Usage | Confidence |
|---|---|---|---|---|---|---|
| `body-lg` | 17 | 400 (Regular) | 26px | 0 | Welcome subtitle text | [ESTIMATED] LH |
| `body-md` | 16 | 400 (Regular) | 24px | 0 | General body text, AI response body, user message text, input text, modal body text, suggestion button text, chat context menu items, modal option text, dropdown items, GroupChat description | [ESTIMATED] LH |
| `body-sm` | 15 | 400 (Regular) | 22px | 0 | Login subtitle, InfoCard descriptions, sidebar chat items, system messages in GroupChat, popup notification text, profile handle | [ESTIMATED] |
| `body-xs` | 14 | 400 (Regular) | 20px | 0 | "OR" divider text, description text below settings cards, settings row subtitle, source domain names, citation domain text, chip labels, warning text, license author, branched-from text | [ESTIMATED] |
| `body-xxs` | 13 | 400 (Regular) | 18px | 0 | Footer links (Terms of Use, Privacy Policy), timestamps, model descriptions, disclaimer text, avatar initials (default size) | [ESTIMATED] |

### Labels

| Token | Size (px) | Weight | Line Height | Letter Spacing | Usage | Confidence |
|---|---|---|---|---|---|---|
| `label-bold` | 17 | 600 (SemiBold) | 22px | 0 | InfoCard titles, "New chat" label in sidebar, feature item title in Attachments BottomSheet | [ESTIMATED] |
| `label-md` | 16 | 600 (SemiBold) | 22px | 0 | Button labels (Continue, Sign up, Log in, Log in or sign up), modal action buttons, "End" button text | [ESTIMATED] |
| `label-sm` | 16 | 500 (Medium) | 22px | 0 | Sidebar menu item labels, outline button text, member row name, settings row title | [ESTIMATED] |
| `label-chip` | 14 | 500 (Medium) | 18px | 0 | Chip label text (Search, Study, Editing, Image), "Sources" text in action bar, camera/photos/files labels, settings edit profile text, license badge text | [ESTIMATED] |
| `label-model-option` | 17 | 500 (Medium) | 22px | 0 | Model option name in selector (Auto, Instant, Thinking) | [ESTIMATED] |
| `label-action-button` | 15 | 500 (Medium) | 20px | 0 | GroupChat action buttons ("Customize ChatGPT", "Invite with link") | [ESTIMATED] |

### Input / Specialized

| Token | Size (px) | Weight | Line Height | Letter Spacing | Usage | Confidence |
|---|---|---|---|---|---|---|
| `input-text` | 16 | 400 (Regular) | 22px | 0 | Text input value, sidebar search, chat input | [ESTIMATED] |
| `input-placeholder` | 16 | 400 (Regular) | 22px | 0 | Input placeholder (unfocused) | [ESTIMATED] |
| `input-label-float` | 12 | 400 (Regular) | 16px | 0 | Floating label (focused) | [ESTIMATED] |
| `header-title` | 19 | 600 (SemiBold) | 24px | 0 | "ChatGPT" header title in chat screen | [ESTIMATED] |
| `header-button-text` | 16 | 500 (Medium) | 22px | 0 | "Log in" header button text | [ESTIMATED] |
| `sidebar-user-name` | 16 | 500 (Medium) | 22px | 0 | User name in sidebar footer | [ESTIMATED] |
| `sidebar-chat-item` | 15 | 400 (Regular) | 20px | 0 | Chat history item text in sidebar | [ESTIMATED] |
| `avatar-initials` | 13 | 600 (SemiBold) | 13px | 0 | Initials in avatar circle (default 32px) | [ESTIMATED] |
| `avatar-initials-md` | 18 | 600 (SemiBold) | 18px | 0 | Medium avatar initials (48px avatar) | [ESTIMATED] |
| `avatar-initials-lg` | 40 | 600 (SemiBold) | 40px | 0 | Large avatar initials (120px avatar) | [ESTIMATED] |
| `avatar-initials-profile` | 36 | 600 (SemiBold) | 42px | 0 | Settings profile avatar initials (96px avatar) | [ESTIMATED] |
| `citation-text` | 12 | 400 (Regular) | 16px | 0 | Inline citation chip text | [ESTIMATED] |
| `timestamp` | 13 | 400 (Regular) | 18px | 0 | Timestamp in context menu and modals | [ESTIMATED] |

### Settings-Specific Typography

| Token | Size (px) | Weight | Line Height | Letter Spacing | Usage | Confidence |
|---|---|---|---|---|---|---|
| `settings-section-header` | 14 | 400 (Regular) | 18px | 0 | Section group labels ("Data controls", "App", "Account") | [ESTIMATED] |
| `settings-section-header-caps` | 13 | 400 (Regular) | 18px | 1px | Uppercase section headers ("MULTI-FACTOR AUTHENTICATION (MFA)") | [ESTIMATED] |
| `settings-row-status` | 16 | 400 (Regular) | 22px | 0 | Right-aligned status text ("On", "Off", "Add") | [ESTIMATED] |
| `settings-profile-name` | 24 | 600 (SemiBold) | 30px | 0 | User display name on profile section | [ESTIMATED] |
| `settings-profile-handle` | 15 | 400 (Regular) | 20px | 0 | Username/handle below display name | [ESTIMATED] |
| `license-title` | 18 | 700 (Bold) | 24px | 0 | License library name | [ESTIMATED] |
| `license-version` | 16 | 400 (Regular) | 22px | 0 | License version number | [ESTIMATED] |
| `license-author` | 14 | 400 (Regular) | 20px | 0 | License author name | [ESTIMATED] |
| `passkey-title` | 22 | 700 (Bold) | 28px | 0 | "Add a passkey" centered title | [ESTIMATED] |
| `passkey-description` | 16 | 400 (Regular) | 24px | 0 | Passkey description text | [ESTIMATED] |

### Table Text (AI Responses)

| Token | Size (px) | Weight | Line Height | Letter Spacing | Usage | Confidence |
|---|---|---|---|---|---|---|
| `table-header` | 15 | 700 (Bold) | 20px | 0 | Table header text in AI markdown responses | [ESTIMATED] |
| `table-cell` | 15 | 400 (Regular) | 20px | 0 | Table cell text in AI markdown responses | [ESTIMATED] |

---

## Spacing

### Generic Scale

| Token | Value (px) | Usage | Confidence |
|---|---|---|---|
| `space-xs` | 4 | Micro spacing (between inline elements, chevron gap) | [ESTIMATED] |
| `space-sm` | 8 | Small gaps, padding between tightly coupled elements | [ESTIMATED] |
| `space-md` | 12 | Medium gaps (button stacking, icon-text gap in some contexts) | [ESTIMATED] |
| `space-lg` | 16 | Standard padding, section spacing, sidebar padding-h | [ESTIMATED] |
| `space-xl` | 20 | Larger gaps (input to button, bottom sheet padding) | [ESTIMATED] |
| `space-2xl` | 24 | Major section separation, screen horizontal padding, button gaps | [ESTIMATED] |
| `space-3xl` | 32 | Large vertical gaps (title to first card, title to button on bottom sheet) | [ESTIMATED] |
| `space-4xl` | 36 | Subtitle to info card gap on welcome screen | [ESTIMATED] |

### Screen Padding

| Token | Value (px) | Usage | Confidence |
|---|---|---|---|
| `screen-padding-h` | 24 | Horizontal padding on full-width screens (welcome, login bottom area) | [ESTIMATED] |
| `login-padding-h` | 32 | Horizontal padding on the login screen form area | [ESTIMATED] |
| `sidebar-padding-h` | 16 | Horizontal padding inside sidebar panel | [ESTIMATED] |
| `bottomsheet-padding-h` | 24 | Horizontal padding inside auth bottom sheet | [ESTIMATED] |
| `settings-screen-padding-h` | 16 | Horizontal padding on settings screens | [ESTIMATED] |
| `chat-padding-h` | 16 | Horizontal padding for chat content area | [ESTIMATED] |

### Button / Input Spacing

| Token | Value (px) | Usage | Confidence |
|---|---|---|---|
| `button-padding-v` | 16 | Vertical padding inside buttons | [ESTIMATED] |
| `button-gap` | 12 | Gap between stacked buttons (bottom sheet, login) | [ESTIMATED] |
| `input-padding-h` | 16 | Horizontal padding inside input fields | [ESTIMATED] |
| `input-padding-v` | 16 | Vertical padding inside input fields | [ESTIMATED] |
| `icon-text-gap` | 16 | Gap between icon and text in sidebar menu items, settings rows, feature items | [ESTIMATED] |
| `icon-text-gap-button` | 10 | Gap between icon and text in buttons (Google, phone, email) | [ESTIMATED] |

### Chat-Specific Spacing

| Token | Value (px) | Usage | Confidence |
|---|---|---|---|
| `chat-bubble-padding-h` | 14 | Horizontal padding inside user message bubble | [ESTIMATED] |
| `chat-bubble-padding-v` | 12 | Vertical padding inside user message bubble | [ESTIMATED] |
| `chat-bubble-margin-right` | 16 | Right margin of user message bubble | [ESTIMATED] |
| `chat-action-bar-gap` | 16 | Gap between action bar icon buttons | [ESTIMATED] |
| `chat-action-bar-margin-top` | 12 | Top margin of action bar from AI text | [ESTIMATED] |
| `chat-suggestion-gap-h` | 10 | Horizontal gap between suggestion buttons | [ESTIMATED] |
| `chat-suggestion-gap-v` | 12 | Vertical gap between suggestion button rows | [ESTIMATED] |
| `chat-chip-padding-h` | 10 | Horizontal padding inside feature chips | [ESTIMATED] |
| `chat-chip-icon-gap` | 6 | Gap between chip icon, text, and close X | [ESTIMATED] |
| `chat-chip-input-gap` | 8 | Vertical gap between chip row and text input row | [ESTIMATED] |
| `chat-prompt-margin-bottom` | 24 | Bottom margin of "What can I help with?" title | [ESTIMATED] |
| `chat-media-btn-gap` | 12 | Gap between media buttons in attachments sheet | [ESTIMATED] |
| `chat-warning-padding` | 16 | Padding inside edit warning container | [ESTIMATED] |
| `chat-feature-item-padding-h` | 24 | Horizontal padding of feature list items | [ESTIMATED] |
| `chat-feature-item-padding-v` | 16 | Vertical padding of feature list items | [ESTIMATED] |
| `chat-context-menu-item-height` | 48 | Height of each menu item in context menus | [ESTIMATED] |

### Settings-Specific Spacing

| Token | Value (px) | Usage | Confidence |
|---|---|---|---|
| `settings-card-padding-h` | 16 | Horizontal padding inside settings cards | [ESTIMATED] |
| `settings-card-padding-v` | 14-16 | Vertical padding inside settings card rows | [ESTIMATED] |
| `settings-card-radius` | 16 | Border radius for settings card groups | [ESTIMATED] |
| `settings-row-height-sm` | 52 | Single-line row height | [ESTIMATED] |
| `settings-row-height-md` | 64 | Two-line row height (title + subtitle) | [ESTIMATED] |
| `settings-section-gap` | 24 | Vertical gap between section groups | [ESTIMATED] |
| `settings-section-header-mb` | 10 | Margin bottom of section header text | [ESTIMATED] |
| `settings-description-mt` | 12 | Margin top of description text below cards | [ESTIMATED] |

### Modal / Dropdown Spacing

| Token | Value (px) | Usage | Confidence |
|---|---|---|---|
| `modal-padding` | 24 | Padding inside modal dialogs and confirmation modals | [ESTIMATED] |
| `modal-button-gap` | 24 | Gap between Cancel and Action buttons in confirmation modals | [ESTIMATED] |
| `modal-option-height` | 44-48 | Height of option rows in contextual modals | [ESTIMATED] |
| `modal-option-padding-h` | 16 | Horizontal padding of modal option rows | [ESTIMATED] |
| `dropdown-item-height` | 48 | Dropdown item row height | [ESTIMATED] |
| `popup-margin-h` | 16 | Horizontal margin of popup notifications from screen edge | [ESTIMATED] |
| `popup-padding` | 16 | Internal padding of popup notifications | [ESTIMATED] |

### GroupChat / Profile Spacing

| Token | Value (px) | Usage | Confidence |
|---|---|---|---|
| `member-row-height` | 72 | Height of member rows in Members Screen | [ESTIMATED] |
| `member-avatar-size` | 48 | Avatar size in Members Screen rows | [ESTIMATED] |
| `profile-avatar-lg` | 120 | Large avatar in Profile BottomSheets | [ESTIMATED] |
| `profile-section-pt` | 24 | Padding top for settings profile section | [ESTIMATED] |
| `gc-button-padding-v` | 10 | Vertical padding of GroupChat action buttons | [ESTIMATED] |
| `gc-button-padding-h` | 20 | Horizontal padding of GroupChat action buttons | [ESTIMATED] |
| `gc-button-radius` | 20 | Border radius of GroupChat action buttons | [ESTIMATED] |

---

## Dimensions

### Buttons

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `button-height` | 52px | Standard button height (all full-width buttons) | [ESTIMATED] |
| `button-height-welcome` | 56px | Continue button on welcome screen (appears slightly taller) | [ESTIMATED] |
| `button-border-radius` | 26px | Fully rounded button corners (half of 52px height) | [ESTIMATED] |
| `button-border-radius-welcome` | 28px | Welcome screen Continue button radius (half of 56px) | [ESTIMATED] |

### Inputs

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `input-height` | 56px | Text input field height (login screen) | [ESTIMATED] |
| `input-border-radius` | 8px | Input field corner radius (auth login) | [ESTIMATED] |
| `input-border-width-default` | 1px | Input border width (unfocused) | Exact |
| `input-border-width-focused` | 2px | Input border width (focused) | [ESTIMATED] |
| `chat-input-height` | 48px | Single-line chat input field height | [ESTIMATED] |
| `chat-input-radius` | 24px | Chat input field border radius (fully rounded) | [ESTIMATED] |
| `chat-input-expanded-min-h` | 80px | Min height of expanded input (with chip) | [ESTIMATED] |

### Sidebar

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `sidebar-width` | ~80% | Sidebar panel width as percentage of screen | [ESTIMATED] |
| `search-input-height` | 44px | Sidebar search input height | [ESTIMATED] |
| `search-input-border-radius` | 22px | Sidebar search input corner radius (pill) | [ESTIMATED] |
| `sidebar-menu-item-height` | 48px | Sidebar menu item row height (icon + text) | [ESTIMATED] |
| `sidebar-chat-item-height` | 44px | Sidebar chat history item row height | [ESTIMATED] |
| `sidebar-footer-height` | 56px | Sidebar footer row height (avatar + name) | [ESTIMATED] |

### Icons

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `icon-size-sm` | 16px | Small icons (chevrons, close X in chips, dropdown carets) | [ESTIMATED] |
| `icon-size-md` | 20px | Medium icons (search, action bar, buttons, chevron-right in settings) | [ESTIMATED] |
| `icon-size-lg` | 24px | Standard icons (sidebar items, compose, back arrow, close X, settings rows) | Exact |
| `icon-size-xl` | 26px | Large icons (welcome screen info card icons) | [ESTIMATED] |
| `icon-size-xxl` | 28px | Media button icons (Camera/Photos/Files) | [ESTIMATED] |

### Chat Elements

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `chat-bubble-radius` | 20px | User message bubble border radius | [ESTIMATED] |
| `chat-bubble-max-width` | 75% | Max width of user message bubble (% of screen) | [ESTIMATED] |
| `chat-plus-btn-size` | 44px | Plus button diameter | [ESTIMATED] |
| `chat-send-btn-size` | 36px | Send/Stop/Talk button diameter | [ESTIMATED] |
| `chat-send-btn-radius` | 18px | Send button border radius (circular) | [ESTIMATED] |
| `chat-stop-btn-radius` | 8px | Stop button border radius (rounded square) | [ESTIMATED] |
| `chat-stop-icon-size` | 14px | Stop square icon size | [ESTIMATED] |
| `chat-action-icon-size` | 20px | Action bar icon size | [ESTIMATED] |
| `chat-action-touch-size` | 36px | Action bar icon touch target | [ESTIMATED] |
| `chat-suggestion-btn-height` | 48px | Suggestion button height | [ESTIMATED] |
| `chat-suggestion-btn-radius` | 24px | Suggestion button border radius | [ESTIMATED] |
| `chat-suggestion-icon-size` | 22px | Icon size in suggestion buttons | [ESTIMATED] |
| `chat-chip-height` | 32px | Feature chip height | [ESTIMATED] |
| `chat-chip-radius` | 16px | Feature chip border radius | [ESTIMATED] |
| `chat-chip-icon-size` | 16px | Icon size inside chips | [ESTIMATED] |
| `chat-chip-close-size` | 14px | Close X icon size in chips | [ESTIMATED] |
| `chat-context-menu-width` | 240px | Context menu card width | [ESTIMATED] |
| `chat-context-menu-radius` | 16px | Context menu border radius | [ESTIMATED] |
| `chat-media-btn-height` | 100px | Media button height (Camera/Photos/Files) | [ESTIMATED] |
| `chat-media-btn-radius` | 16px | Media button border radius | [ESTIMATED] |
| `chat-loading-circle-size` | 16px | AI loading pulsing circle diameter | [ESTIMATED] |
| `chat-edit-warning-radius` | 12px | Edit warning container border radius | [ESTIMATED] |
| `chat-citation-chip-height` | 22px | Inline citation chip height | [ESTIMATED] |
| `chat-citation-chip-radius` | 11px | Citation chip border radius | [ESTIMATED] |
| `chat-favicon-size` | 18px | Source favicon size in Sources row and action bar | [ESTIMATED] |
| `chat-source-favicon-overlap` | -6px | Horizontal overlap between stacked favicons | [ESTIMATED] |
| `chat-feature-item-height` | 72px | Height per feature item in attachments sheet | [ESTIMATED] |

### Header Elements

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `header-height` | 56px | Chat/sub-screen header height | [ESTIMATED] |
| `header-button-size` | 44px | Circular/rounded header buttons (sidebar toggle) | [ESTIMATED] |
| `icon-button-size` | 40px | Icon button container (back, compose, close) | [ESTIMATED] |
| `combined-pill-height` | 44px | Height of combined icon pill container in header | [ESTIMATED] |
| `combined-pill-radius` | 22px | Border radius of combined pill | [ESTIMATED] |
| `combined-pill-padding-h` | 14px | Horizontal padding of combined pill | [ESTIMATED] |

### Assets

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `openai-logo-size` | 40px | OpenAI logo on login screen | [ESTIMATED] |
| `google-icon-size` | 20px | Google "G" logo in buttons | [ESTIMATED] |

### Avatars (Size Hierarchy)

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `avatar-size-sm` | 32px | Sidebar footer avatar | [ESTIMATED] |
| `avatar-size-md-sm` | 36px | GroupChat header avatar | [ESTIMATED] |
| `avatar-size-md` | 48px | Member row avatars | [ESTIMATED] |
| `avatar-size-lg` | 96px | Settings profile section avatar | [ESTIMATED] |
| `avatar-size-xl` | 120px | Profile BottomSheet avatar | [ESTIMATED] |

### Modals / Sheets

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `bottomsheet-border-radius` | 20px | Bottom sheet top corners radius | [ESTIMATED] |
| `modal-border-radius` | 16px | Floating modal corner radius (contextual menus) | [ESTIMATED] |
| `confirmation-modal-radius` | 28px | Confirmation dialog corner radius (AlertDialog style) | [ESTIMATED] |
| `modal-width-pct` | 85% | AlertDialog modal width as percentage of screen | [ESTIMATED] |
| `confirmation-modal-width` | 80% | Width of confirmation modals | [ESTIMATED] |
| `contextual-modal-width` | 240-300px | Width of contextual menus (Ellipsis, Retry, Switch Model) | [ESTIMATED] |
| `modal-width-model` | 70% | Model selector modal width | [ESTIMATED] |
| `report-modal-width` | 90% | Width of Report Profile/Conversation modal | [ESTIMATED] |
| `dropdown-radius` | 16px | Border radius for dropdown popovers | [ESTIMATED] |
| `dropdown-width-pct` | 55% | Dropdown width as percentage of screen | [ESTIMATED] |
| `drag-handle-width` | 36px | Bottom sheet drag handle width | [ESTIMATED] |
| `drag-handle-height` | 4px | Bottom sheet drag handle height | [ESTIMATED] |

### Settings Elements

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `toggle-track-width` | 52px | Toggle switch track width | [ESTIMATED] |
| `toggle-track-height` | 32px | Toggle switch track height | [ESTIMATED] |
| `toggle-track-radius` | 16px | Toggle switch track border radius | [ESTIMATED] |
| `toggle-thumb-size` | 26px | Toggle switch thumb diameter | [ESTIMATED] |
| `radio-size` | 24px | Radio button diameter | [ESTIMATED] |
| `radio-inner-dot` | 10px | Radio button inner filled dot diameter | [ESTIMATED] |
| `radio-border-width` | 2px | Radio button border width | [ESTIMATED] |
| `settings-back-button-size` | 48px | Settings header back button container size | [ESTIMATED] |
| `settings-back-button-radius` | 24px | Settings header back button border radius (circular) | [ESTIMATED] |
| `color-dot-size` | 16px | Accent color option dot size | [ESTIMATED] |
| `color-dot-small` | 10px | Small color dot in "Accent color" subtitle | [ESTIMATED] |
| `edit-profile-btn-radius` | 20px | Edit profile button border radius | [ESTIMATED] |
| `passkey-icon-size` | 48px | Passkey illustration icon size | [ESTIMATED] |
| `spinner-size-lg` | 36px | Loading spinner on auth loading screen | [ESTIMATED] |
| `spinner-size-sm` | 16px | Inline spinner in buttons | [ESTIMATED] |
| `country-selector-width` | 110px | Country code selector width on phone mode | [ESTIMATED] |
| `separator-height` | 1px | Horizontal separator line height (hairline) | Exact |
| `terms-card-border-radius` | 16px | Terms/disclaimer card border radius on welcome | [ESTIMATED] |

### Talking Chat / GroupChat

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `talking-input-width` | 40% | Width of text input in Talking Chat state | [ESTIMATED] |
| `end-button-width` | 90px | Width of "End" pill button | [ESTIMATED] |
| `groupchat-button-width` | 220px | "Start group chat" button width | [ESTIMATED] |
| `groupchat-button-height` | 48px | "Start group chat" button height | [ESTIMATED] |
| `groupchat-header-avatar` | 36px | Avatar size in GroupChat header | [ESTIMATED] |
| `profile-row-height` | 72px | Profile row height in GroupChat BottomSheet | [ESTIMATED] |
| `profile-row-radius` | 16px | Profile row border radius | [ESTIMATED] |
| `manage-link-action-height` | 56px | Height of action rows in Manage Link screen | [ESTIMATED] |
| `camera-overlay-size` | 36px | Camera icon overlay on avatar in Edit Profile | [ESTIMATED] |
| `feedback-textarea-height` | 160px | Height of "Share details" textarea | [ESTIMATED] |
| `report-textarea-height` | 120px | Height of report details textarea | [ESTIMATED] |

---

## Shadows / Elevation

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `shadow-none` | none | Most elements (dark mode minimizes shadows) | Exact |
| `shadow-bottomsheet` | `0 -4px 20px rgba(0,0,0,0.5)` | Bottom sheet upward shadow | [ESTIMATED] |
| `shadow-modal` | `0 4px 16px rgba(0,0,0,0.4)` | Floating modals (contextual menus, model selector) | [ESTIMATED] |
| `shadow-confirmation` | `0 8px 32px rgba(0,0,0,0.5)` | Centered confirmation/AlertDialog modals | [ESTIMATED] |
| `shadow-dropdown` | `0 4px 16px rgba(0,0,0,0.5)` | Dropdown popovers | [ESTIMATED] |
| `header-scroll-shadow` | Linear gradient from `#000000` to `transparent`, 20px tall | Shadow below fixed header when content scrolls behind it | [ESTIMATED] |

---

## Opacity / Press States

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `press-opacity-button` | 0.85 | Opacity for primary/gray button press, stop/talk button press | [ESTIMATED] |
| `press-opacity-icon` | 0.7 | Opacity for icon button press, action bar icon press | [ESTIMATED] |
| `press-opacity-link` | 0.7 | Opacity for link text press | [ESTIMATED] |
| `press-scale-button` | 0.98 | Scale transform for button press (subtle) | [ESTIMATED] |
| `press-bg-modal-option` | `#3A3A3A` | Pressed state for modal option rows | [ESTIMATED] |
| `press-bg-sidebar-item` | `#2A2A2A` | Pressed background for sidebar items | [ESTIMATED] |
| `press-bg-outline-button` | `#1A1A1A` | Pressed background tint on outline buttons | [ESTIMATED] |

---

## Animation Tokens

### Durations

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `duration-instant` | 0ms | Instant transitions (mode switch on login) | Exact |
| `duration-press` | 100ms | Press feedback duration | [ESTIMATED] |
| `duration-fast` | 150ms | Quick animations (spinner fade-in, icon swap, dropdown fade) | [ESTIMATED] |
| `duration-float-label` | 200ms | Floating label animation on input focus/blur | [ESTIMATED] |
| `duration-context-menu` | 200ms | Context menu and modal fade-in/fade-out | [ESTIMATED] |
| `duration-chip-enter` | 250ms | Chip slide-up into input | [ESTIMATED] |
| `duration-chip-exit` | 200ms | Chip slide-down out of input | [ESTIMATED] |
| `duration-normal` | 300ms | Standard animations (sidebar slide, bottom sheet, action bar fade-in, search expand, slide-push navigation, hide-chat transition) | [ESTIMATED] |
| `duration-talking-transition` | 400ms | Talking Chat state transition (content fade + input contraction) | [ESTIMATED] |
| `duration-fade-out` | 500ms | Fade-out animation on loading screen exit | [ESTIMATED] |
| `duration-spinner-rotation` | 1000ms | One full rotation of loading spinner | [ESTIMATED] |
| `duration-loading-pulse` | 1200ms | One cycle of AI loading circle pulsing | [ESTIMATED] |
| `duration-shimmer-sweep` | 1500ms | One sweep of shimmer highlight | [ESTIMATED] |
| `duration-talking-loading` | 2000ms | Hardcoded loading before Talking Chat transition | Exact |
| `duration-loading-button` | 2000ms | Loading indicator for button actions (Reset, Delete, Save, Leave) | Exact |
| `duration-loading` | 3000ms | Auth loading screen display duration, GroupChat loading | Exact |

### Easing Curves

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `easing-standard` | `Easing.bezier(0.4, 0.0, 0.2, 1.0)` | Standard ease-in-out for most animations, modals | [ESTIMATED] |
| `easing-decelerate` | `Easing.out(Easing.ease)` | Decelerate for entering elements (floating label) | [ESTIMATED] |
| `easing-premium` | `Easing.bezier(0.25, 0.1, 0.25, 1.0)` | Premium smooth easing for Talking Chat transitions | [ESTIMATED] |
| `easing-linear` | `Easing.linear` | Spinner rotation only (exception to no-linear rule) | Exact |

### Spring Configs

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `spring-sidebar` | `{ damping: 20, stiffness: 200 }` | Sidebar open/close spring | [ESTIMATED] |
| `spring-modal` | `{ damping: 20, stiffness: 250 }` | Modal appear/dismiss spring | [ESTIMATED] |
| `spring-input-contraction` | `{ damping: 25, stiffness: 150 }` | Talking Chat input width contraction | [ESTIMATED] |

### Pulse / Scale

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `loading-pulse-scale-min` | 0.8 | Minimum scale of pulsing circle | [ESTIMATED] |
| `loading-pulse-scale-max` | 1.2 | Maximum scale of pulsing circle | [ESTIMATED] |

---

## Breakpoints / Layout

| Token | Value | Usage |
|---|---|---|
| `safe-area-top` | Dynamic | StatusBar height (varies by device) |
| `safe-area-bottom` | Dynamic | Bottom safe area inset (varies by device) |
| `screen-width` | 100% | Full screen width |

---

## Consistency Notes

1. **Background hierarchy:** `#000000` (screens) < `#171717` (sidebar) < `#212121` (bottom sheets) < `#2A2A2A` (floating modals, settings cards) < `#2F2F2F` (elevated surfaces: inputs, bubbles, headers) < `#333333` (media buttons, chips) < `#3A3A3A` (unauth settings cards, talking input) < `#424242` (AlertDialog modals, dropdowns). This creates a clear visual depth stack.

2. **Text color hierarchy:** `#FFFFFF` (primary) > `#D4D4D4` (secondary, chat items) > `#CCCCCC` (modal body) > `#B4B4B4` (subtitle on welcome) > `#9A9A9A` (tertiary, descriptions) > `#8E8E8E` (chat input placeholder) > `#6E6E6E` (disabled, auth placeholder) > `#E57373` (destructive red, separate semantic).

3. **Border colors:** `#2A2A2A` for content separators, `#3A3A3A` for interactive element borders (inputs, buttons, tables, suggestions), `#4A4A4A` for chip borders and edit profile. Separators are darker than interactive borders.

4. **Button heights** are 52px consistently, except the welcome screen Continue button at 56px.

5. **Button border-radius** is always half the height (pill shape).

6. **Press feedback** uses opacity reduction: 0.85 for solid buttons, 0.7 for icon buttons and links. Sidebar items use background tint `#2A2A2A`.

7. **Font family** is always the system default (no custom fonts loaded).

8. **Icon sizes** cluster: 14-16px (small/chips), 20px (medium/action bar/buttons), 22px (suggestions), 24px (standard/menu items/settings), 26-28px (large/info cards/media).

9. **Toggle switch** uses white track / black thumb for ON state (NOT standard iOS green). This is a custom component.

10. **Destructive color** `#E57373` is used consistently for all destructive text and icons across all features.

11. **#2F2F2F is the universal "elevated surface" color** -- used for user bubbles, chat input, search input, sidebar active items, header buttons, context menus (unauth). This is aliases as `bg-surface`.

12. **Modal backgrounds:** Standard floating modals use `#2A2A2A`, AlertDialog-style centered modals use `#424242`, Report modals use `#1A1A1A`.

13. **All color values marked [ESTIMATED]** should be verified on-device by the UI Polisher using a color picker tool.
