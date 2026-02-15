# Components Inventory 2 -- Settings Feature Reusable Components

This document catalogs every reusable component identified from the settings screens. Each entry describes the component, its variants, its props interface, and which screens use it. Extends the base `components-inventory.md`.

---

## 19. SettingsHeader

**Description:** Fixed header bar with a circular back button (dark background) and a centered title. Used on all settings screens.

**Screens used:**
- settings/01 Settings Main (unauth + auth)
- settings/01d General
- settings/01h Notifications
- settings/01h Notifications Detail (Usage, Responses, etc.)
- settings/01i Speech
- settings/01j Data Controls
- settings/01k Security
- settings/01k Passkeys
- settings/01k Authenticator app, Push notifications, Text message
- settings/01l About (auth)
- settings/03 About (unauth)

**Props Interface:**
```typescript
interface SettingsHeaderProps {
  title: string;
  onBackPress: () => void;
  accessibilityLabel?: string;
}
```

**Dimensions:**
- Height: ~72px (including padding) [ESTIMATED]
- Padding horizontal: 16px
- Padding top: 12px below safe area
- Padding bottom: 12px
- Background: `#000000`

**Back button:**
- Container: 48x48px
- Background: `#3A3A3A` [ESTIMATED]
- Border radius: 24px (circular)
- Icon: ArrowLeft, 24px, `#FFFFFF`

**Title:**
- Font size: 20px
- Font weight: 600 (SemiBold)
- Color: `#FFFFFF`
- Position: Centered horizontally in the full header width

**Scroll behavior:**
- On scrollable screens, the header stays fixed with a subtle bottom shadow/gradient to indicate content behind it

---

## 20. SettingsCardGroup

**Description:** Rounded container that groups multiple settings rows. Provides the dark card background and handles border radius for first/last items.

**Screens used:** All settings screens with card-grouped rows

**Props Interface:**
```typescript
interface SettingsCardGroupProps {
  children: React.ReactNode;
}
```

**Dimensions:**
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Overflow: hidden (clips children to rounded corners)
- Margin horizontal: 0 (contained by screen padding)

**Notes:**
- Children are `SettingsRow` components
- Separators between rows are 1px lines at `#3A3A3A` ~40% opacity [ESTIMATED]
- First child gets top border radius, last child gets bottom border radius
- The card itself has no internal padding; each row handles its own padding

---

## 21. SettingsRow

**Description:** A single row inside a `SettingsCardGroup`. The most versatile component in the settings feature, with multiple variants for different content configurations.

**Screens used:** All settings screens

**Variants:**

### Variant A: Icon + Text (simple navigation)
Used for: General, Notifications, Voice, Data controls, Security, About, Help center, Terms, Privacy, Licenses

### Variant B: Icon + Text + Subtitle
Used for: Language/English, Workspace/Personal, Subscription/Plus, Email/address, Phone/number, Appearance/System, Voice/Cove

### Variant C: Icon + Text + Toggle Switch
Used for: Improve the model for everyone (unauth), Show legacy models

### Variant D: Icon + Text + Subtitle + Toggle Switch
Used for: Background conversations, Use as default assistant (with multi-line subtitle)

### Variant E: Icon + Text + Subtitle + ChevronDown
Used for: Accent color (with color dot in subtitle), Input language

### Variant F: Text + Status + ChevronRight (no icon)
Used for: Passkeys/Add, Authenticator app/Off, Push notifications/Off, Text message/Off

### Variant G: Text + Toggle Switch (no icon)
Used for: Push toggle, Email toggle, Improve model (auth), Audio recordings, Video recordings

### Variant H: Text + Status (no icon, no chevron)
Used for: Notifications list items (Responses/On, Group chats/On, etc.)

### Variant I: Text only (no icon, no right element)
Used for: Export Data, View archived chats, Archive chat history

### Variant J: Destructive text (red)
Used for: Delete OpenAI account, Clear chat history, Log out

### Variant K: Description text row (non-interactive)
Used for: Description blocks inside cards (Speech screen description)

**Props Interface:**
```typescript
interface SettingsRowProps {
  // Left side
  icon?: string;          // lucide icon name (optional -- some rows have no icon)
  iconColor?: string;     // default `#FFFFFF`, `#E57373` for destructive

  // Center
  title: string;
  titleColor?: string;    // default `#FFFFFF`, `#E57373` for destructive
  subtitle?: string;
  subtitleColor?: string; // default `#9A9A9A`
  subtitlePrefix?: React.ReactNode; // e.g., color dot for accent color

  // Right side
  rightElement?: 'toggle' | 'chevron-down' | 'chevron-right' | 'status' | 'none';
  toggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
  statusText?: string;    // "On", "Off", "Add", etc.

  // Behavior
  onPress?: () => void;   // if undefined, row is not pressable
  isFirst?: boolean;      // adds top border radius
  isLast?: boolean;       // adds bottom border radius
  showSeparator?: boolean; // shows bottom separator (default true if not last)

  accessibilityLabel: string;
}
```

**Dimensions:**
- Height (single-line): 52px [ESTIMATED]
- Height (with subtitle): 64px [ESTIMATED]
- Height (multi-line subtitle): auto
- Padding horizontal: 16px
- Padding vertical: 14px [ESTIMATED]
- Icon size: 24px
- Icon-to-text gap: 16px
- Text-to-right-element gap: 16px [ESTIMATED]

**Separator:**
- Height: 1px
- Color: `#3A3A3A` at ~40% opacity [ESTIMATED]
- Full width within card

**Press feedback:**
- Opacity: 0.85 [ESTIMATED]
- Duration: 150ms

---

## 22. ToggleSwitch

**Description:** Custom toggle switch matching ChatGPT's black-and-white design. NOT the default RN Switch component.

**Screens used:**
- settings/01 Unauth (Improve model)
- settings/01d General (Show legacy models)
- settings/01h Notifications detail (Push, Email toggles)
- settings/01i Speech (Separate mode, Background conversations, Default assistant)
- settings/01j Data Controls (Improve model, Audio recordings, Video recordings)
- settings/01k Security MFA screens (Authenticator, Push, Text message)

**Props Interface:**
```typescript
interface ToggleSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Track width: 52px [ESTIMATED]
- Track height: 32px [ESTIMATED]
- Track border radius: 16px (pill)
- Thumb diameter: 26px [ESTIMATED]

**Colors:**
- ON state: Track `#FFFFFF`, Thumb `#000000`
- OFF state: Track `#4A4A4A` [ESTIMATED], Thumb `#9A9A9A` [ESTIMATED]

**Animation:**
- Thumb slides left/right on toggle
- Duration: 200ms [ESTIMATED]
- Easing: spring or ease-out

**Note:** The entire parent row is pressable, not just the switch. The switch itself should also be directly pressable as a fallback.

---

## 23. RadioButton

**Description:** Circular radio button with selected/unselected states. Used in modal lists.

**Screens used:**
- settings/02 Language modal
- settings/01e Appearance modal

**Props Interface:**
```typescript
interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Outer circle: 24px diameter [ESTIMATED]
- Border width: 2px
- Inner dot (when selected): 10px diameter [ESTIMATED]

**Colors:**
- Selected: Border `#FFFFFF`, inner dot `#FFFFFF`
- Unselected: Border `#9A9A9A` [ESTIMATED], no inner dot

---

## 24. SettingsModal (Centered AlertDialog)

**Description:** Centered floating modal dialog used for confirmations and option selections. Follows the Android AlertDialog pattern.

**Screens used:**
- settings/02 Language modal (with scrollable list + radio buttons)
- settings/01c Subscription modal (body text + OK)
- settings/01e Appearance modal (radio list + OK)
- settings/01g Logout modal (title + body + Cancel/Log out)

**Variants:**

| Variant | Title | Body | List | Buttons |
|---|---|---|---|---|
| `info` | No | Yes | No | OK only (Subscription) |
| `radio-list` | Yes | No | Radio buttons | OK (Language, Appearance) |
| `confirm` | Yes | Yes | No | Cancel + Action (Logout) |

**Props Interface:**
```typescript
interface SettingsModalProps {
  visible: boolean;
  onDismiss: () => void;
  title?: string;
  body?: string;
  children?: React.ReactNode;       // for radio list content
  buttons: ModalButton[];
}

interface ModalButton {
  label: string;
  onPress: () => void;
}
```

**Container:**
- Background: `#424242` [ESTIMATED]
- Border radius: 28px [ESTIMATED]
- Width: ~85% of screen
- Padding: 24px
- Shadow: `0 8px 32px rgba(0,0,0,0.6)` [ESTIMATED]

**Backdrop:**
- Background: `#000000` at 50% opacity
- Pressable to dismiss

**Title:** 22px, Bold, `#FFFFFF`
**Body:** 16px, Regular, `#CCCCCC` [ESTIMATED]
**Buttons:** Right-aligned row, 16px SemiBold `#FFFFFF`, transparent bg, 24px gap

**Animation:**
- Entry: Fade in, 200ms [ESTIMATED]
- Exit: Fade out, 200ms [ESTIMATED]

---

## 25. SettingsDropdown

**Description:** Floating dropdown/popover menu that appears anchored to a trigger element. Has no backdrop dimming. Used for inline selections.

**Screens used:**
- settings/01f Accent Color modal
- settings/01i Speech Input Language modal

**Props Interface:**
```typescript
interface SettingsDropdownProps {
  visible: boolean;
  onDismiss: () => void;
  anchorRef: React.RefObject<View>;  // element to anchor to
  items: DropdownItem[];
  selectedValue?: string;
}

interface DropdownItem {
  label: string;
  value: string;
  leftElement?: React.ReactNode;   // color dot, etc.
  rightElement?: React.ReactNode;  // checkmark, badge text
  onPress: () => void;
}
```

**Container:**
- Background: `#424242` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Width: ~55% of screen
- Position: Anchored below trigger, right-aligned
- Shadow: `0 4px 16px rgba(0,0,0,0.5)` [ESTIMATED]
- Padding vertical: 8-12px [ESTIMATED]
- Max height: ~60% of screen (scrollable)

**Backdrop:**
- Transparent -- no dimming
- Pressable to dismiss

**Item:**
- Height: 48px [ESTIMATED]
- Padding horizontal: 20px
- Text: 16px Regular `#FFFFFF`
- Selected: Check icon, 20px, `#FFFFFF`, right-aligned

**Trigger interaction:**
- ChevronDown on trigger rotates to ChevronUp
- Selecting an item immediately closes dropdown

---

## 26. SettingsSectionHeader

**Description:** Section label text that appears above a card group to categorize settings rows.

**Screens used:**
- settings/01 Unauth ("Data controls", "App")
- settings/01 Auth ("My ChatGPT", "Account")
- settings/01j Data Controls ("Voice", "Chat history")
- settings/01k Security ("MULTI-FACTOR AUTHENTICATION (MFA)")
- settings/01k MFA sub-screens ("GET CODES TO VERIFY LOG INS", etc.)
- settings/01h Notifications detail ("Where you'll be notified")

**Variants:**

| Variant | Case | Color | Letter Spacing |
|---|---|---|---|
| `default` | Regular | `#9A9A9A` | 0 |
| `white` | Regular | `#FFFFFF` | 0 |
| `caps` | UPPERCASE | `#9A9A9A` | 1px |

**Props Interface:**
```typescript
interface SettingsSectionHeaderProps {
  text: string;
  variant?: 'default' | 'white' | 'caps';
}
```

**Typography:**
- `default`: 14px, Regular, `#9A9A9A`
- `white`: 14px, Regular, `#FFFFFF`
- `caps`: 13px, Regular, `#9A9A9A`, letter-spacing 1px, text-transform uppercase

**Spacing:**
- Margin top: 24px (when preceded by another section)
- Margin bottom: 10px
- Padding horizontal: matches screen padding (16px)

---

## 27. ProfileSection

**Description:** Centered profile section showing the user's avatar, name, handle, and edit button. Used only on the authenticated settings main screen.

**Screens used:**
- settings/01 Auth (top of scroll content)

**Props Interface:**
```typescript
interface ProfileSectionProps {
  name: string;
  handle: string;
  initials: string;
  avatarColor: string;
  onAvatarPress: () => void;
  onEditPress: () => void;
}
```

**Layout:** Centered column
- Avatar: 96px circle, colored bg, white initials 36px SemiBold
- Name: 24px SemiBold `#FFFFFF`, margin-top 16px
- Handle: 15px Regular `#9A9A9A`, margin-top 4px
- Edit button: Pill outline (1px border `#5A5A5A`, 20px radius, 14px Medium `#FFFFFF`), margin-top 16px

---

## 28. LicenseItem

**Description:** A single license entry showing library name, version, author, and license type badge.

**Screens used:**
- settings/04 Licenses (unauth)
- settings/01l Licenses (auth)

**Props Interface:**
```typescript
interface LicenseItemProps {
  libraryName: string;
  version: string;
  author: string;
  licenseType: string;
  onPress?: () => void;
}
```

**Layout:**
- Row 1: Library name (left, bold, truncated) + Version (right, regular)
- Row 2: Author name (gray, below title)
- Row 3: License badge (pill, gray bg)

**Typography:**
- Library: 18px Bold `#FFFFFF` (1 line, ellipsis)
- Version: 16px Regular `#FFFFFF`
- Author: 14px Regular `#9A9A9A`
- Badge: 13px Medium `#FFFFFF`, bg `#3A3A3A`, padding 6px/12px, radius 14px

**Spacing:**
- Padding vertical: 20px [ESTIMATED]
- Separator: 1px solid `#2A2A2A`
- Author margin-top: 4px
- Badge margin-top: 8px

---

## 29. PasskeyEmptyState

**Description:** Centered content block with icon, title, description, and CTA button. Used specifically on the Passkeys screen.

**Screens used:**
- settings/01k Passkeys

**Props Interface:**
```typescript
interface PasskeyEmptyStateProps {
  onCreatePress: () => void;
}
```

**Layout:** Centered column
- Icon: Custom passkey SVG, 48px, `#FFFFFF`
- Title: "Add a passkey", 22px Bold `#FFFFFF`, centered
- Description: 16px Regular `#9A9A9A`, centered, multi-line
- Button: PrimaryButton variant (white bg, black text, pill, full width)

---

## 30. DescriptionText

**Description:** Helper/description text that appears below a card group to provide additional context about the settings above.

**Screens used:**
- settings/01 Unauth (below "Improve model" toggle)
- settings/01j Data Controls (below toggles)
- settings/01k Security (below MFA section)
- settings/01k MFA sub-screens
- settings/01i Speech (inside card as a row)

**Props Interface:**
```typescript
interface DescriptionTextProps {
  text: string;
  linkText?: string;       // e.g., "Learn more"
  onLinkPress?: () => void;
}
```

**Typography:**
- Font size: 14px
- Font weight: 400
- Color: `#9A9A9A` [ESTIMATED]
- Line height: 20px [ESTIMATED]

**Link (optional):**
- Same color as description text
- Text decoration: underline
- Inline with text

**Spacing:**
- Margin top: 12px (from card above)
- Padding horizontal: 16px (matches screen padding)

---

## Cross-Screen Component Usage Matrix

| Component | Unauth Main | Auth Main | General | Notifications | Notif Detail | Speech | Data Controls | Security | MFA Sub | Passkeys | About | Licenses |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SettingsHeader | X | X | X | X | X | X | X | X | X | X | X | * |
| SettingsCardGroup | X | X | X | X | X | X | X | X | X | | X | |
| SettingsRow | X | X | X | X | X | X | X | X | X | | X | |
| ToggleSwitch | X | | X | | X | X | X | | X | | | |
| RadioButton | | | | | | | | | | | | |
| SettingsModal | X | X | | | | | | | | | | |
| SettingsDropdown | | X | | | | X | | | | | | |
| SectionHeader | X | X | | | X | | X | X | X | | | |
| ProfileSection | | X | | | | | | | | | | |
| LicenseItem | | | | | | | | | | | | X |
| PasskeyEmptyState | | | | | | | | | | X | | |
| DescriptionText | X | | | | X | X | X | X | X | X | | |

`*` = Licenses screen uses a different header style (left-aligned title, no circle back button)

---

## Consistency Notes

1. **SettingsRow is the workhorse:** Almost every screen uses it with different prop combinations. Designing this component well is critical.

2. **Toggle style is unique:** The ChatGPT toggle uses a white/black color scheme, not the typical iOS green or Android Material blue. This MUST be a custom component.

3. **Modal vs Dropdown:** Two distinct overlay patterns. Modals have backdrop dimming + centered position + OK button. Dropdowns have no dimming + anchored position + instant selection.

4. **Icon consistency in rows:** Auth main settings uses icons for every row. Sub-screens (Data Controls, Security, Notifications) often omit icons entirely. This is intentional, not a bug.

5. **Card background token:** May need fine-tuning between `#2A2A2A` and `#3A3A3A`. The unauth screen appears lighter, which could be a rendering difference or an intentional distinction. Recommend implementing as a single token and adjusting after on-device verification.

6. **Header variant for Licenses:** The Open Source Licenses screen uses a different header style (no circle bg on back button, left-aligned title). Consider a `variant` prop on SettingsHeader or a separate `SimpleHeader` component.

7. **Section header has 3 distinct variants** -- default gray, white, and uppercase gray with tracking. All three are needed.
