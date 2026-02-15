# Design Tokens 2 -- Settings Screens Additions

All values extracted from ChatGPT mobile app settings screenshots (dark mode). This document extends the base `design-tokens.md` with new tokens discovered in the settings feature.

---

## NEW Colors

### Backgrounds

| Token | Hex | Usage |
|---|---|---|
| `bg-settings-card` | `#2A2A2A` [ESTIMATED] | Settings card/group background (auth screens) |
| `bg-settings-card-unauth` | `#3A3A3A` [ESTIMATED] | Settings card/group background (unauth screens) -- slightly lighter than auth. NOTE: may be the same value at `#2F2F2F` to `#3A3A3A` depending on device rendering [ESTIMATED] |
| `bg-modal` | `#424242` [ESTIMATED] | Centered floating modal background (AlertDialog style) |
| `bg-dropdown` | `#424242` [ESTIMATED] | Dropdown/popover background (Accent Color, Input Language) |
| `bg-modal-backdrop` | `#000000` at 50% opacity | Semi-transparent backdrop behind centered modals |
| `bg-dropdown-backdrop` | `transparent` | Dropdown backdrop -- no dimming effect |
| `bg-license-badge` | `#3A3A3A` [ESTIMATED] | License type badge pill background |
| `bg-avatar-profile` | `#A87FDB` [ESTIMATED] | Large profile avatar background (purple/lilac) |

### Text Colors

| Token | Hex | Usage |
|---|---|---|
| `text-destructive` | `#E57373` [ESTIMATED] | Destructive action text (Log out, Delete account, Clear chat history) |
| `text-section-header` | `#9A9A9A` [ESTIMATED] | Section header text in settings (gray variant) |
| `text-section-header-white` | `#FFFFFF` | Section header text in sub-screens (white variant, used in Data Controls, Notifications) |
| `text-section-header-caps` | `#9A9A9A` [ESTIMATED] | Uppercase section headers with letter-spacing (MFA header on Security) |
| `text-subtitle` | `#9A9A9A` [ESTIMATED] | Subtitle/secondary text in settings rows |
| `text-status` | `#9A9A9A` [ESTIMATED] | Status labels (On, Off, Add) on right side of rows |
| `text-description` | `#9A9A9A` [ESTIMATED] | Description/helper text below cards |
| `text-modal-title` | `#FFFFFF` | Modal title text |
| `text-modal-body` | `#CCCCCC` [ESTIMATED] | Modal body text (slightly dimmer than pure white) |
| `text-modal-button` | `#FFFFFF` | Modal action button text (OK, Cancel, Log out) |
| `text-link-underline` | `#9A9A9A` [ESTIMATED] | Underlined "Learn more" links in descriptions |

### Icons

| Token | Hex | Usage |
|---|---|---|
| `icon-destructive` | `#E57373` [ESTIMATED] | Destructive action icons (Log out icon) |
| `icon-chevron` | `#FFFFFF` | Chevron icons in settings rows |
| `icon-chevron-secondary` | `#9A9A9A` [ESTIMATED] | Secondary chevron icons (ChevronRight on Security rows) |

### Toggle Switch Colors

| Token | Hex | Usage |
|---|---|---|
| `toggle-track-on` | `#FFFFFF` | Toggle switch track when ON |
| `toggle-thumb-on` | `#000000` | Toggle switch thumb when ON |
| `toggle-track-off` | `#4A4A4A` [ESTIMATED] | Toggle switch track when OFF |
| `toggle-thumb-off` | `#9A9A9A` [ESTIMATED] | Toggle switch thumb when OFF |

### Radio Button Colors

| Token | Hex | Usage |
|---|---|---|
| `radio-border-selected` | `#FFFFFF` | Radio button outer ring when selected |
| `radio-fill-selected` | `#FFFFFF` | Radio button inner dot when selected |
| `radio-border-unselected` | `#9A9A9A` [ESTIMATED] | Radio button ring when unselected |

### Accent Color Dots

| Token | Hex | Usage |
|---|---|---|
| `accent-default` | `#9A9A9A` [ESTIMATED] | Default accent color dot (gray) |
| `accent-blue` | `#3B82F6` [ESTIMATED] | Blue accent color dot |
| `accent-green` | `#22C55E` [ESTIMATED] | Green accent color dot |
| `accent-yellow` | `#EAB308` [ESTIMATED] | Yellow accent color dot |
| `accent-pink` | `#EC4899` [ESTIMATED] | Pink accent color dot |
| `accent-orange` | `#F97316` [ESTIMATED] | Orange accent color dot |
| `accent-purple` | `#A855F7` [ESTIMATED] | Purple accent color dot |

---

## NEW Typography

| Token | Size (px) | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `settings-header-title` | 20 | 600 (SemiBold) | 26px [ESTIMATED] | 0 | Settings screen header titles ("Settings", "General", etc.) |
| `settings-section-header` | 14 | 400 (Regular) | 18px [ESTIMATED] | 0 | Section group labels ("Data controls", "App", "Account", "My ChatGPT") |
| `settings-section-header-caps` | 13 | 400 (Regular) | 18px [ESTIMATED] | 1px [ESTIMATED] | Uppercase section headers ("MULTI-FACTOR AUTHENTICATION (MFA)", "GET CODES TO VERIFY LOG INS") |
| `settings-row-title` | 16 | 400 (Regular) | 22px [ESTIMATED] | 0 | Row primary text ("Personalization", "General", "Voice", etc.) |
| `settings-row-subtitle` | 14 | 400 (Regular) | 20px [ESTIMATED] | 0 | Row secondary text ("English", "Personal", "Plus", email, phone) |
| `settings-row-status` | 16 | 400 (Regular) | 22px [ESTIMATED] | 0 | Right-aligned status ("On", "Off", "Add") |
| `settings-description` | 14 | 400 (Regular) | 20px [ESTIMATED] | 0 | Helper/description text below cards |
| `settings-profile-name` | 24 | 600 (SemiBold) | 30px [ESTIMATED] | 0 | User display name on profile section |
| `settings-profile-handle` | 15 | 400 (Regular) | 20px [ESTIMATED] | 0 | Username/handle below display name |
| `settings-edit-profile` | 14 | 500 (Medium) | 18px [ESTIMATED] | 0 | "Edit profile" button text |
| `modal-title` | 22 | 700 (Bold) | 28px [ESTIMATED] | 0 | Modal dialog titles ("App language", "Appearance", "Log out?") |
| `modal-body` | 16 | 400 (Regular) | 24px [ESTIMATED] | 0 | Modal body/description text |
| `modal-button` | 16 | 600 (SemiBold) | 22px [ESTIMATED] | 0 | Modal action buttons ("OK", "Cancel", "Log out") |
| `modal-option` | 16 | 400 (Regular) | 22px [ESTIMATED] | 0 | Modal list option text (language names, appearance options) |
| `dropdown-item` | 16 | 400 (Regular) | 22px [ESTIMATED] | 0 | Dropdown menu item text (accent colors, languages) |
| `license-title` | 18 | 700 (Bold) | 24px [ESTIMATED] | 0 | License library name |
| `license-version` | 16 | 400 (Regular) | 22px [ESTIMATED] | 0 | License version number |
| `license-author` | 14 | 400 (Regular) | 20px [ESTIMATED] | 0 | License author name |
| `license-badge` | 13 | 500 (Medium) | 18px [ESTIMATED] | 0 | License type badge text |
| `profile-avatar-initials-lg` | 36 | 600 (SemiBold) | 42px [ESTIMATED] | 0 | Large profile avatar initials |
| `passkey-title` | 22 | 700 (Bold) | 28px [ESTIMATED] | 0 | "Add a passkey" centered title |
| `passkey-description` | 16 | 400 (Regular) | 24px [ESTIMATED] | 0 | Passkey description text |

---

## NEW Spacing

| Token | Value (px) | Usage |
|---|---|---|
| `settings-screen-padding-h` | 16 | Horizontal padding on settings screens |
| `settings-card-padding-h` | 16 | Horizontal padding inside settings cards |
| `settings-card-padding-v` | 14-16 | Vertical padding inside settings card rows |
| `settings-card-radius` | 16 | Border radius for settings card groups |
| `settings-row-height-sm` | 52 | Single-line row height |
| `settings-row-height-md` | 64 | Two-line row height (title + subtitle) |
| `settings-icon-text-gap` | 16 | Gap between row icon and text |
| `settings-section-gap` | 24 | Vertical gap between section groups |
| `settings-section-header-mb` | 10 | Margin bottom of section header text |
| `settings-description-mt` | 12 | Margin top of description text below cards |
| `modal-radius` | 28 | Border radius for centered modal dialogs |
| `modal-padding` | 24 | Padding inside modal dialogs |
| `modal-width-pct` | 85% | Modal width as percentage of screen |
| `dropdown-radius` | 16 | Border radius for dropdown popovers |
| `dropdown-width-pct` | 55% | Dropdown width as percentage of screen |
| `dropdown-item-height` | 48 | Dropdown item row height |
| `radio-size` | 24 | Radio button diameter |
| `radio-inner-dot` | 10 | Radio button inner filled dot diameter |
| `radio-border-width` | 2 | Radio button border width |
| `profile-avatar-size-lg` | 96 | Large avatar on settings profile section |
| `profile-section-pt` | 24 | Padding top for profile section |
| `edit-profile-btn-radius` | 20 | Edit profile button border radius |
| `edit-profile-btn-padding-h` | 20 | Edit profile button horizontal padding |
| `edit-profile-btn-padding-v` | 8 | Edit profile button vertical padding |
| `edit-profile-btn-border` | 1 | Edit profile button border width |
| `license-item-padding-v` | 20 | Vertical padding between license items |
| `license-badge-padding-h` | 12 | License badge horizontal padding |
| `license-badge-padding-v` | 6 | License badge vertical padding |
| `license-badge-radius` | 14 | License badge pill border radius |

---

## NEW Dimensions

| Token | Value | Usage |
|---|---|---|
| `toggle-track-width` | 52px | Toggle switch track width |
| `toggle-track-height` | 32px | Toggle switch track height |
| `toggle-track-radius` | 16px | Toggle switch track border radius |
| `toggle-thumb-size` | 26px | Toggle switch thumb diameter |
| `settings-back-button-size` | 48px | Settings header back button container size |
| `settings-back-button-radius` | 24px | Settings header back button border radius (circular) |
| `settings-back-button-bg` | `#3A3A3A` [ESTIMATED] | Settings header back button background |
| `color-dot-size` | 16px | Accent color option dot size |
| `color-dot-small` | 10px | Small color dot in "Accent color" subtitle |
| `chevron-right-size` | 20px | ChevronRight icon size in navigation rows |
| `passkey-icon-size` | 48px [ESTIMATED] | Passkey illustration icon size |

---

## Shadows / Elevation

| Token | Value | Usage |
|---|---|---|
| `modal-shadow` | `0 8px 32px rgba(0,0,0,0.6)` [ESTIMATED] | Elevation shadow for centered modals |
| `dropdown-shadow` | `0 4px 16px rgba(0,0,0,0.5)` [ESTIMATED] | Elevation shadow for dropdown popovers |
| `header-scroll-shadow` | Linear gradient from `#000000` to `transparent`, 20px tall [ESTIMATED] | Shadow below fixed header when content scrolls behind it |

---

## Animation Tokens (Settings-specific)

| Token | Value | Usage |
|---|---|---|
| `duration-modal-fade` | 200ms [ESTIMATED] | Modal fade in/out duration |
| `duration-dropdown-fade` | 150ms [ESTIMATED] | Dropdown fade in/out duration |
| `duration-chevron-rotate` | 200ms [ESTIMATED] | Chevron rotation animation (down to up) |
| `duration-slide-push` | 300ms [ESTIMATED] | Push navigation slide duration |
| `easing-modal` | `Easing.bezier(0.4, 0.0, 0.2, 1.0)` [ESTIMATED] | Modal animation easing |

---

## Consistency Notes / Cross-Reference with design-tokens.md

1. **Card background discrepancy:** The unauth settings cards appear to be `#3A3A3A` while auth settings cards appear to be `#2A2A2A`. This could be an actual difference or a screenshot rendering artifact. Recommend using `#2F2F2F` as a unified value and flagging for UI Polisher verification. [ESTIMATED]

2. **Back button style:** The settings back button has a dark circle background (`#3A3A3A`), unlike the login screen back button which is transparent. This is a deliberate difference.

3. **Toggle switch:** The settings toggle switch uses white track / black thumb for ON state, which is a distinctive black-and-white toggle style (NOT a green/colored toggle like iOS default).

4. **Destructive text color:** `#E57373` is used consistently for all destructive actions across settings (Log out, Delete OpenAI account, Clear chat history).

5. **Modal style:** All centered modals share the same container styling (`#424242` bg, 28px radius, 85% width). The dropdown modals share a different style (`#424242` bg, 16px radius, 55% width, no backdrop dimming).

6. **Section header variants:** There are at least 3 variants:
   - Gray, regular case: "Data controls", "App", "Account", "My ChatGPT"
   - White, regular case: "Voice", "Chat history", "Where you'll be notified"
   - Gray, ALL CAPS with letter-spacing: "MULTI-FACTOR AUTHENTICATION (MFA)", "GET CODES TO VERIFY LOG INS"

7. **Token `bg-settings-card`** should potentially replace or be aliased alongside `bg-search-input` (#2F2F2F) from the base tokens, as they serve a similar visual purpose.
