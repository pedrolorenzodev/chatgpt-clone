# Design Tokens -- Consolidated Reference (Revision 1)

All values extracted from ChatGPT mobile app screenshots (dark mode). These are the canonical values for the entire project. Every spec file references tokens from this document.

---

## Colors

### Backgrounds

| Token | Hex | Opacity | Usage | Confidence |
|---|---|---|---|---|
| `bg-primary` | `#000000` | 100% | Main screen background (welcome, login, loading, chat) | Exact |
| `bg-sidebar` | `#171717` | 100% | Sidebar panel background (both auth and unauth) | Exact |
| `bg-sidebar-overlay` | `#000000` | 50% | Semi-transparent overlay right of sidebar | Exact |
| `bg-bottomsheet` | `#212121` | 100% | Auth bottom sheet background | [ESTIMATED] |
| `bg-input` | `#000000` | 100% | Text input field background (login screen, matches screen bg) | Exact |
| `bg-search-input` | `#2F2F2F` | 100% | Search input field background (sidebar header) | Exact |
| `bg-button-primary` | `#FFFFFF` | 100% | Primary CTA buttons (Continue, Log in or sign up on sidebar) | Exact |
| `bg-button-disabled` | `#333333` | 100% | Disabled Continue button on login screen | [ESTIMATED] |
| `bg-button-gray` | `#7A7A7A` | 100% | "Sign up" button on bottom sheet | [ESTIMATED] |
| `bg-button-outline` | `transparent` | -- | Outline buttons (Google, phone/email toggle on login) | Exact |
| `bg-button-login-bottomsheet` | `transparent` | -- | "Log in" outline button on bottom sheet | Exact |
| `bg-chat-item-active` | `#2F2F2F` | 100% | Active/selected chat item in sidebar | [ESTIMATED] |
| `bg-terms-card` | `#111111` | 100% | Terms/privacy card on welcome screen | [ESTIMATED] |
| `bg-avatar` | `#7C3AED` | 100% | User avatar circle in sidebar footer (purple) | [ESTIMATED] |
| `bg-header-button` | `#2F2F2F` | 100% | Header buttons (sidebar toggle, Log in button) | [ESTIMATED] |
| `bg-press-sidebar-item` | `#2A2A2A` | 100% | Press highlight on sidebar items | [ESTIMATED] |
| `bg-press-outline-button` | `#1A1A1A` | 100% | Press tint on outline buttons | [ESTIMATED] |

### Text Colors

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `text-primary` | `#FFFFFF` | Headings, primary content, button labels on dark bg | Exact |
| `text-secondary` | `#B4B4B4` | Subtitle on welcome screen (slightly brighter than tertiary) | [ESTIMATED] |
| `text-tertiary` | `#9A9A9A` | Descriptions, secondary info, placeholder-adjacent text | [ESTIMATED] |
| `text-disabled` | `#6E6E6E` | Disabled button text, OR divider, input placeholder | [ESTIMATED] |
| `text-on-light` | `#000000` | Text on white/light buttons (Continue, Google) | Exact |
| `text-link` | `#FFFFFF` | Underlined link text in content (Terms, Privacy, Learn about...) | Exact |
| `text-link-footer` | `#9A9A9A` | Footer links on login screen (Terms of Use, Privacy Policy) | [ESTIMATED] |
| `text-placeholder` | `#6E6E6E` | Input placeholder text (unfocused) | [ESTIMATED] |
| `text-floating-label` | `#FFFFFF` | Floating label on focused input | Exact |
| `text-sidebar-item` | `#FFFFFF` | Sidebar menu item text (actions, projects) | Exact |
| `text-sidebar-chat` | `#D4D4D4` | Sidebar chat history item text (inactive) | [ESTIMATED] |
| `text-sidebar-chat-active` | `#FFFFFF` | Sidebar chat history item text (active) | Exact |
| `text-or-divider` | `#6E6E6E` | "OR" text in the login screen divider | [ESTIMATED] |

### Borders

| Token | Hex | Width | Usage | Confidence |
|---|---|---|---|---|
| `border-input-default` | `#3A3A3A` | 1px | Input field border (unfocused) | [ESTIMATED] |
| `border-input-focused` | `#FFFFFF` | 2px | Input field border (focused) | [ESTIMATED] width |
| `border-button-outline` | `#3A3A3A` | 1px | Outline button borders (login screen) | [ESTIMATED] |
| `border-button-login-bs` | `#555555` | 1px | "Log in" button border on bottom sheet (lighter) | [ESTIMATED] |
| `border-separator` | `#2A2A2A` | 1px | Horizontal separators/dividers (sidebar, welcome screen) | [ESTIMATED] |
| `border-divider-or` | `#3A3A3A` | 1px | "OR" divider lines on login screen | [ESTIMATED] |
| `border-terms-card` | `#222222` | 1px | Terms card border on welcome screen | [ESTIMATED] |

### Icons

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `icon-primary` | `#FFFFFF` | Primary icons (back arrow, compose, sidebar menu items) | Exact |
| `icon-secondary` | `#9A9A9A` | Search icon, chevron, back arrow in search | [ESTIMATED] |

### Loading / Feedback

| Token | Hex | Usage | Confidence |
|---|---|---|---|
| `spinner-color-light` | `#FFFFFF` | Loading spinner on auth loading screen | Exact |
| `spinner-inline-dark` | `#000000` | Inline spinner inside Continue button (on white bg) | Exact |
| `spinner-inline-muted` | `#6E6E6E` | Inline spinner on Google button loading state | [ESTIMATED] |

---

## Typography

The app uses system fonts throughout: San Francisco on iOS, Roboto on Android. No custom font families.

| Token | Size (px) | Weight | Line Height | Letter Spacing | Usage | Confidence |
|---|---|---|---|---|---|---|
| `heading-xl` | 36 | 700 (Bold) | 44px | -0.5px | "Welcome to ChatGPT" title | [ESTIMATED] LH, LS |
| `heading-lg` | 26 | 700 (Bold) | 34px | -0.3px | "Log in or sign up" on login screen | [ESTIMATED] LH, LS |
| `heading-md` | 24 | 700 (Bold) | 32px | 0 | Bottom sheet title text | [ESTIMATED] |
| `body-lg` | 17 | 400 (Regular) | 26px | 0 | Welcome subtitle text | [ESTIMATED] LH |
| `body-md` | 16 | 400 (Regular) | 22px | 0 | General body text, input text, sidebar items | [ESTIMATED] LH |
| `body-sm` | 15 | 400 (Regular) | 22px | 0 | Login subtitle, InfoCard descriptions, sidebar chat items | [ESTIMATED] |
| `body-xs` | 14 | 400 (Regular) | 20px | 0 | "OR" divider text | [ESTIMATED] |
| `caption` | 13 | 400 (Regular) | 18px | 0 | Footer links (Terms of Use, Privacy Policy) | [ESTIMATED] |
| `label-bold` | 17 | 600 (SemiBold) | 22px | 0 | InfoCard titles, "New chat" in unauth sidebar | [ESTIMATED] |
| `label-md` | 16 | 600 (SemiBold) | 22px | 0 | Button labels (Continue, Sign up, Log in, Log in or sign up) | [ESTIMATED] |
| `label-sm` | 16 | 500 (Medium) | 22px | 0 | Sidebar menu item labels, outline button text | [ESTIMATED] |
| `input-text` | 16 | 400 (Regular) | 22px | 0 | Text input value | [ESTIMATED] |
| `input-placeholder` | 16 | 400 (Regular) | 22px | 0 | Input placeholder (unfocused) | [ESTIMATED] |
| `input-label-float` | 12 | 400 (Regular) | 16px | 0 | Floating label (focused) | [ESTIMATED] |
| `sidebar-search-placeholder` | 16 | 400 (Regular) | 22px | 0 | "Search" placeholder in sidebar | [ESTIMATED] |
| `sidebar-user-name` | 16 | 500 (Medium) | 22px | 0 | User name in sidebar footer | [ESTIMATED] |
| `sidebar-chat-item` | 15 | 400 (Regular) | 20px | 0 | Chat history item text in sidebar | [ESTIMATED] |
| `avatar-initials` | 13 | 600 (SemiBold) | 13px | 0 | Initials in avatar circle | [ESTIMATED] |
| `header-title` | 18 | 600 (SemiBold) | 24px | 0 | "ChatGPT" header title (on chat screen) | [ESTIMATED] |
| `header-button-text` | 16 | 500 (Medium) | 22px | 0 | "Log in" header button text | [ESTIMATED] |

---

## Spacing

| Token | Value (px) | Usage | Confidence |
|---|---|---|---|
| `space-xs` | 4 | Micro spacing (between inline elements, chevron gap) | [ESTIMATED] |
| `space-sm` | 8 | Small gaps, padding between tightly coupled elements | [ESTIMATED] |
| `space-md` | 12 | Medium gaps (button stacking, icon-text gap, header row gap) | [ESTIMATED] |
| `space-lg` | 16 | Standard padding, section spacing, sidebar padding-h | [ESTIMATED] |
| `space-xl` | 20 | Larger gaps (input to button, bottom sheet padding) | [ESTIMATED] |
| `space-2xl` | 24 | Major section separation, screen horizontal padding, button gaps | [ESTIMATED] |
| `space-3xl` | 32 | Large vertical gaps (title to first card, title to button on bottomsheet) | [ESTIMATED] |
| `space-4xl` | 36 | Subtitle to info card gap on welcome screen | [ESTIMATED] |
| `screen-padding-h` | 24 | Horizontal padding on full-width screens (welcome, login bottom area) | [ESTIMATED] |
| `login-padding-h` | 32 | Horizontal padding on the login screen form area | [ESTIMATED] |
| `sidebar-padding-h` | 16 | Horizontal padding inside sidebar panel | [ESTIMATED] |
| `bottomsheet-padding-h` | 24 | Horizontal padding inside auth bottom sheet | [ESTIMATED] |
| `button-padding-v` | 16 | Vertical padding inside buttons | [ESTIMATED] |
| `button-gap` | 12 | Gap between stacked buttons (bottom sheet, login) | [ESTIMATED] |
| `input-padding-h` | 16 | Horizontal padding inside input fields | [ESTIMATED] |
| `input-padding-v` | 16 | Vertical padding inside input fields | [ESTIMATED] |
| `icon-text-gap` | 16 | Gap between icon and text in sidebar menu items | [ESTIMATED] |
| `icon-text-gap-button` | 10 | Gap between icon and text in buttons (Google, phone, email) | [ESTIMATED] |

---

## Dimensions

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `button-height` | 52px | Standard button height (all full-width buttons) | [ESTIMATED] |
| `button-height-welcome` | 56px | Continue button on welcome screen (appears slightly taller) | [ESTIMATED] |
| `button-border-radius` | 26px | Fully rounded button corners (half of 52px height) | [ESTIMATED] |
| `button-border-radius-welcome` | 28px | Welcome screen Continue button radius (half of 56px) | [ESTIMATED] |
| `input-height` | 56px | Text input field height (login screen) | [ESTIMATED] |
| `input-border-radius` | 8px | Input field corner radius | [ESTIMATED] |
| `input-border-width-default` | 1px | Input border width (unfocused) | Exact |
| `input-border-width-focused` | 2px | Input border width (focused) -- appears thicker | [ESTIMATED] |
| `sidebar-width` | ~80% | Sidebar panel width as percentage of screen | [ESTIMATED] |
| `search-input-height` | 44px | Sidebar search input height | [ESTIMATED] |
| `search-input-border-radius` | 22px | Sidebar search input corner radius (pill) | [ESTIMATED] |
| `icon-size-sm` | 16px | Small icons (chevrons) | [ESTIMATED] |
| `icon-size-md` | 20px | Medium icons (search, buttons, back arrow in search) | [ESTIMATED] |
| `icon-size-lg` | 24px | Standard icons (sidebar items, compose, back arrow, close X) | Exact |
| `icon-size-xl` | 26px | Large icons (welcome screen info card icons) | [ESTIMATED] |
| `openai-logo-size` | 40px | OpenAI logo on login screen | [ESTIMATED] |
| `avatar-size` | 32px | User avatar circle in sidebar footer | [ESTIMATED] |
| `header-button-size` | 40px | Circular/rounded header buttons (sidebar toggle) | [ESTIMATED] |
| `icon-button-size` | 40px | Icon button container (back, compose, close) | [ESTIMATED] |
| `spinner-size-lg` | 36px | Loading spinner on auth loading screen | [ESTIMATED] |
| `spinner-size-sm` | 16px | Inline spinner in buttons | [ESTIMATED] |
| `google-icon-size` | 20px | Google "G" logo in buttons | [ESTIMATED] |
| `country-selector-width` | 110px | Country code selector width on phone mode | [ESTIMATED] |
| `separator-height` | 1px | Horizontal separator line height (hairline) | Exact |
| `bottomsheet-border-radius` | 20px | Bottom sheet top corners radius | [ESTIMATED] |
| `sidebar-menu-item-height` | 48px | Sidebar menu item row height (icon + text) | [ESTIMATED] |
| `sidebar-chat-item-height` | 44px | Sidebar chat history item row height | [ESTIMATED] |
| `sidebar-footer-height` | 56px | Sidebar footer row height (avatar + name) | [ESTIMATED] |
| `terms-card-border-radius` | 16px | Terms/disclaimer card border radius on welcome | [ESTIMATED] |

---

## Shadows / Elevation

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `shadow-none` | none | Most elements (dark mode minimizes shadows) | Exact |
| `shadow-bottomsheet` | `0 -4px 20px rgba(0,0,0,0.5)` | Bottom sheet upward shadow | [ESTIMATED] |

---

## Opacity / Press States

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `press-opacity-button` | 0.85 | Opacity for primary/gray button press | [ESTIMATED] |
| `press-opacity-icon` | 0.7 | Opacity for icon button press | [ESTIMATED] |
| `press-opacity-link` | 0.7 | Opacity for link text press | [ESTIMATED] |
| `press-scale-button` | 0.98 | Scale transform for button press (subtle) | [ESTIMATED] |

---

## Animation Tokens

| Token | Value | Usage | Confidence |
|---|---|---|---|
| `duration-instant` | 0ms | Instant transitions (mode switch on login) | Exact |
| `duration-press` | 100ms | Press feedback duration | [ESTIMATED] |
| `duration-fast` | 150ms | Quick animations (spinner fade-in, icon swap) | [ESTIMATED] |
| `duration-normal` | 300ms | Standard animations (sidebar slide, bottom sheet, search expand) | [ESTIMATED] |
| `duration-loading` | 3000ms | Auth loading screen display duration | Exact |
| `duration-fade-out` | 500ms | Fade-out animation on loading screen exit | [ESTIMATED] |
| `duration-float-label` | 200ms | Floating label animation on input focus/blur | [ESTIMATED] |
| `duration-spinner-rotation` | 1000ms | One full rotation of loading spinner | [ESTIMATED] |
| `easing-standard` | `Easing.bezier(0.4, 0.0, 0.2, 1.0)` | Standard ease-in-out for most animations | [ESTIMATED] |
| `easing-decelerate` | `Easing.out(Easing.ease)` | Decelerate for entering elements (floating label) | [ESTIMATED] |
| `easing-linear` | `Easing.linear` | Spinner rotation only (exception to no-linear rule) | Exact |

---

## Breakpoints / Layout

| Token | Value | Usage |
|---|---|---|
| `safe-area-top` | Dynamic | StatusBar height (varies by device) |
| `safe-area-bottom` | Dynamic | Bottom safe area inset (varies by device) |
| `screen-width` | 100% | Full screen width |

---

## Consistency Notes

1. **Background hierarchy:** `#000000` (screens) < `#171717` (sidebar) < `#212121` (bottom sheet) < `#2F2F2F` (search input, active items). This creates clear visual depth.
2. **Text color hierarchy:** `#FFFFFF` (primary) > `#D4D4D4` (secondary, chat items) > `#B4B4B4` (subtitle) > `#9A9A9A` (tertiary, descriptions) > `#6E6E6E` (disabled, placeholders). Five distinct levels.
3. **Border color:** `#2A2A2A` for separators, `#3A3A3A` for input/button borders. Separators are darker than interactive element borders.
4. **Button heights** are 52px consistently, except possibly the welcome screen Continue button which appears slightly taller (56px).
5. **Button border-radius** is always half the height (pill shape).
6. **Screen padding** is 24px on welcome screen, 32px on login screen form area, 16px inside sidebar.
7. **Press feedback** uses opacity reduction: 0.85 for solid buttons, 0.7 for icon buttons and links.
8. **Font family** is always the system default (no custom fonts loaded).
9. **Icon sizes** cluster around three values: 16px (small/chevrons), 20px (medium/buttons), 24px (standard/menu items).
10. **All color values marked [ESTIMATED]** should be verified on-device by the UI Polisher using a color picker tool.
