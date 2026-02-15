# Components Inventory -- Reusable Components (Revision 1)

This document catalogs every reusable component identified across the auth and sidebar screens. Each entry describes the component, its variants, its props interface, and the screens where it appears.

---

## 1. PrimaryButton

**Description:** Full-width pill-shaped button with solid background. The main CTA button throughout the app. Supports disabled, loading, and multiple background color variants.

**Screens used:**
- auth/01 Welcome Screen ("Continue")
- auth/02 Bottom Sheet ("Continue with Google" solid white, "Sign up" gray)
- auth/03 Login Screen ("Continue" -- disabled/enabled/loading states)
- sidebar/01 Unauth ("Log in or sign up")

**Variants:**

| Variant | Background | Text Color | Border |
|---|---|---|---|
| `default` | `#FFFFFF` | `#000000` | none |
| `disabled` | `#333333` | `#6E6E6E` | none |
| `gray` | `#7A7A7A` [ESTIMATED] | `#FFFFFF` | none |

**Props Interface:**
```typescript
interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'default' | 'disabled' | 'gray';
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;        // Optional left icon (e.g., Google logo)
  iconPosition?: 'left' | 'right';
  accessibilityLabel: string;
}
```

**Dimensions:**
- Width: 100% of parent container
- Height: 52px (56px on welcome screen [ESTIMATED])
- Border radius: 26px (28px on welcome screen if 56px height)
- Padding vertical: 16px

**Typography:**
- Font size: 16px (17px on welcome screen [ESTIMATED])
- Font weight: 600 (SemiBold)
- Text align: center
- Color: Determined by variant

**Press feedback:**
- Opacity: 0.85 on press [ESTIMATED]
- Scale: 0.98 [ESTIMATED]
- Duration: 100ms [ESTIMATED]

**Loading state:**
- Spinner appears to the RIGHT of the label text
- Spinner size: 16px [ESTIMATED]
- Spinner color: matches text color of the variant (`#000000` for default, `#FFFFFF` for gray)
- Gap between text and spinner: 8px [ESTIMATED]
- **Text does NOT shift position** when spinner appears -- the spinner occupies space to the right of the centered text
- Button remains in its current variant appearance (not disabled-looking)

**Icon layout (when icon is provided):**
- Icon position: left of text
- Icon size: 20px [ESTIMATED] (e.g., Google logo)
- Gap between icon and text: 10px [ESTIMATED]
- Row is center-aligned within the button

---

## 2. OutlineButton

**Description:** Pill-shaped button with transparent background and a visible border. Used for secondary actions. Supports an optional left icon.

**Screens used:**
- auth/02 Bottom Sheet ("Log in" -- with slightly lighter border)
- auth/03 Login Screen ("Continue with Google" outline, "Continue with phone", "Continue with email")

**Props Interface:**
```typescript
interface OutlineButtonProps {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;       // Optional left icon (Google logo, Phone, Mail)
  isLoading?: boolean;
  borderColor?: string;          // Override border color (default: #3A3A3A)
  accessibilityLabel: string;
}
```

**Dimensions:**
- Width: 100% of parent container
- Height: 52px
- Border radius: 26px (pill shape)
- Border: 1px solid (color varies: `#3A3A3A` on login, `#555555` on bottom sheet [ESTIMATED])

**Background:**
- Normal: `transparent`
- Pressed: `#1A1A1A` [ESTIMATED]

**Typography:**
- Font size: 16px
- Font weight: 500 (Medium)
- Color: `#FFFFFF`
- Text align: center

**Icon layout (when icon is provided):**
- Icon position: left of text
- Icon size: 20px [ESTIMATED]
- Gap between icon and text: 10px [ESTIMATED]
- Row is center-aligned

**Loading state (Google button specifically):**
- Text color changes to `#6E6E6E` [ESTIMATED]
- Spinner appears right of text, color `#6E6E6E` [ESTIMATED], size 16px
- Used only for the "Continue with Google" variant

**Press feedback:**
- Background tint: `#1A1A1A` [ESTIMATED]
- Duration: 100ms [ESTIMATED]

---

## 3. BackButton

**Description:** Circular transparent button with a left arrow icon. Positioned at top-left of screens for backward navigation.

**Screens used:**
- auth/03 Login Screen

**Props Interface:**
```typescript
interface BackButtonProps {
  onPress: () => void;
  accessibilityLabel?: string;  // defaults to "Go back"
}
```

**Dimensions:**
- Container: 40x40px
- Border radius: 20px (circular)
- Background: transparent

**Icon:**
- Type: ArrowLeft (lucide)
- Size: 24px
- Color: `#FFFFFF`

**Press feedback:**
- Opacity: 0.7 [ESTIMATED]

**Position:**
- Top: 8px below safe area [ESTIMATED]
- Left: 16px [ESTIMATED]

---

## 4. IconButton

**Description:** Generic icon-only button used for close (X), compose (SquarePen), and other icon-based actions. Flexible size and color.

**Screens used:**
- auth/02 Bottom Sheet (close X icon)
- sidebar/01 Auth (compose SquarePen in header)
- sidebar/01b Search Focus (compose SquarePen in header)

**Props Interface:**
```typescript
interface IconButtonProps {
  icon: React.ReactNode;         // Pre-rendered lucide icon component
  onPress: () => void;
  size?: number;                 // Container size (default: 40)
  hitSlop?: number;              // Extra hit area (default: 10)
  backgroundColor?: string;     // Container bg (default: transparent)
  borderRadius?: number;         // Container border radius (default: 8)
  accessibilityLabel: string;
}
```

**Dimensions:**
- Container: 40x40px [ESTIMATED] (configurable via `size`)
- Background: transparent by default
- Border radius: 8px or 20px (circular) depending on context

**Icon defaults:**
- Size: 24px
- Color: `#FFFFFF`
- Stroke width: 2

**Press feedback:**
- Opacity: 0.7 [ESTIMATED]
- Duration: 100ms

---

## 5. FloatingLabelInput

**Description:** Text input with an animated floating placeholder label. When the input gains focus, the placeholder shrinks and moves to the top border of the input field, "cutting" through the border line with a background patch. Used exclusively on the auth login screen.

**Screens used:**
- auth/03 Login Screen (Email mode: "Email"; Phone mode: "Phone number")

**Props Interface:**
```typescript
interface FloatingLabelInputProps {
  label: string;                           // "Email" or "Phone number"
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  keyboardType?: KeyboardTypeOptions;      // 'email-address' | 'phone-pad' | 'default'
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?: string;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Width: 100% of parent
- Height: 56px
- Border radius: 8px [ESTIMATED]
- Padding horizontal: 16px
- Padding vertical: 16px

**Border states:**
| State | Border Width | Border Color |
|---|---|---|
| Unfocused (empty) | 1px | `#3A3A3A` [ESTIMATED] |
| Focused | 2px | `#FFFFFF` |
| Unfocused (with text) | 1px | `#3A3A3A` [ESTIMATED] |

**Background:** `#000000` (matches screen bg)

**Typography (input text):**
- Font size: 16px
- Font weight: 400
- Color: `#FFFFFF`
- Cursor color: `#FFFFFF` [ESTIMATED]

**Floating label animation:**

| Property | Unfocused | Focused/Has Value |
|---|---|---|
| Position Y | 0 (centered vertically) | -28px [ESTIMATED] (top border) |
| Font size | 16px | 12px |
| Color | `#6E6E6E` [ESTIMATED] | `#FFFFFF` |

- Duration: ~200ms [ESTIMATED]
- Easing: `Easing.out(Easing.ease)` [ESTIMATED]
- The label in its floated position should have a small background "patch" (bg `#000000`, ~4px horizontal padding) that masks the border line behind it, creating the visual effect of the label "sitting on" the border
- **On blur with text:** Label stays in the floated position (up, 12px, white)
- **On blur empty:** Label animates back to center (16px, `#6E6E6E`)

---

## 6. CountrySelector

**Description:** Country code picker showing a flag emoji, dial code, and a down chevron. Used in the phone mode variant of the login screen. Non-functional in the clone (displays static data).

**Screens used:**
- auth/03 Login Screen (phone mode)

**Props Interface:**
```typescript
interface CountrySelectorProps {
  countryCode: string;          // e.g., "AR"
  dialCode: string;             // e.g., "+54"
  flagEmoji: string;            // e.g., flag emoji
  onPress: () => void;          // No-op in clone
  accessibilityLabel: string;
}
```

**Dimensions:**
- Width: ~110px [ESTIMATED]
- Height: 56px (matches input height)
- Border radius: 8px [ESTIMATED]
- Border: 1px solid `#3A3A3A` [ESTIMATED]
- Background: `#000000`
- Padding horizontal: 12px [ESTIMATED]

**Content layout:** `flexDirection: 'row'`, `alignItems: 'center'`
- Flag emoji: system default rendering
- Gap: 6px [ESTIMATED]
- Dial code: font 16px, weight 400, color `#FFFFFF`
- Gap: 6px [ESTIMATED]
- Chevron: ChevronDown, 16px, color `#FFFFFF`

**Press feedback:** Opacity 0.85 [ESTIMATED]

---

## 7. OrDivider

**Description:** Horizontal divider with "OR" text centered between two lines. Used to separate the primary form action from alternative auth methods.

**Screens used:**
- auth/03 Login Screen (between Continue button and Google/phone buttons)

**Props Interface:**
```typescript
interface OrDividerProps {
  text?: string;  // defaults to "OR"
}
```

**Dimensions:**
- Width: 100% of parent container
- Line height: 1px (hairline)
- Line color: `#3A3A3A` [ESTIMATED]

**Typography:**
- Text: "OR"
- Font size: 14px
- Font weight: 400
- Color: `#6E6E6E` [ESTIMATED]
- Horizontal margin from lines: 16px

**Layout:** `flexDirection: 'row'`, `alignItems: 'center'`
- Left line: `flex: 1`, 1px, `#3A3A3A`
- Text: "OR", with 16px horizontal margin
- Right line: `flex: 1`, 1px, `#3A3A3A`

---

## 8. InfoCard

**Description:** Horizontal layout with an icon on the left and a text block (title + description + optional link) on the right. Used on the welcome screen.

**Screens used:**
- auth/01 Welcome Screen (x2: "ChatGPT can be inaccurate", "Don't share sensitive info")

**Props Interface:**
```typescript
interface InfoCardProps {
  icon: React.ReactNode;         // Pre-rendered lucide icon
  title: string;
  description: string;
  linkText?: string;             // Optional underlined link appended to description
  onLinkPress?: () => void;
}
```

**Layout:** `flexDirection: 'row'`, `alignItems: 'flex-start'`
- **Icon:** Left-aligned
  - Size: 26px [ESTIMATED]
  - Color: `#FFFFFF`
  - Stroke width: 1.5
  - Vertically aligned to top of text block
- **Text container:** Right of icon
  - Left margin: 20px from icon [ESTIMATED]
  - Flex: 1
  - **Title:** font 17px, weight 600 (SemiBold), color `#FFFFFF`, line-height 22px
  - **Description:** font 15px, weight 400, color `#9A9A9A`, margin-top 4px, line-height 22px
  - **Link (optional):** Same font as description, color `#FFFFFF`, text-decoration underline, pressable

---

## 9. SidebarMenuItem

**Description:** Row with an icon and text label used for sidebar navigation items. Supports multiple icon types and text weights depending on the item category.

**Screens used:**
- sidebar/01 Auth (New chat, Images, Apps, New project, Paisa, Estudio, All projects)
- sidebar/01 Unauth (New chat)
- sidebar/01b Search Focus (same items, filtered)

**Variants:**

| Variant | Icon Example | Text Weight | Purpose |
|---|---|---|---|
| `action` | SquarePen, Image, LayoutGrid | 500 (Medium) | Quick actions |
| `project-new` | FolderPlus | 500 (Medium) | "New project" action |
| `project` | Folder | 400 (Regular) | Existing project items |
| `more` | MoreHorizontal | 400 (Regular) | "All projects" |

**Props Interface:**
```typescript
interface SidebarMenuItemProps {
  icon: React.ReactNode;         // Pre-rendered lucide icon
  label: string;
  onPress: () => void;
  textWeight?: '400' | '500';    // 400 for projects, 500 for actions (default: '500')
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 48px [ESTIMATED]
- Padding horizontal: 16px
- Layout: `flexDirection: 'row'`, `alignItems: 'center'`
- Icon size: 24px
- Icon color: `#FFFFFF`
- Icon-text gap: 16px [ESTIMATED]

**Typography:**
- Font size: 16px
- Color: `#FFFFFF`
- Weight: varies by variant (see table above)

**Press feedback:**
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 8px [ESTIMATED]
- Duration: 100ms

---

## 10. SidebarChatItem

**Description:** Simple text row for chat history items in the sidebar. Has an active (highlighted background) variant for the currently open chat.

**Screens used:**
- sidebar/01 Auth
- sidebar/01b Search Focus

**Props Interface:**
```typescript
interface SidebarChatItemProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 44px [ESTIMATED]
- Padding horizontal: 16px
- Padding vertical: 12px [ESTIMATED]

**Typography:**
- Font size: 15px [ESTIMATED]
- Font weight: 400
- Number of lines: 1 (ellipsize tail)
- Color: `#D4D4D4` (inactive) / `#FFFFFF` (active)

**States:**

| State | Background | Text Color | Border Radius |
|---|---|---|---|
| Inactive | transparent | `#D4D4D4` | -- |
| Active (current chat) | `#2F2F2F` [ESTIMATED] | `#FFFFFF` | 8px [ESTIMATED] |
| Pressed (inactive) | `#2A2A2A` [ESTIMATED] | `#D4D4D4` | 8px [ESTIMATED] |

---

## 11. SidebarSearchInput

**Description:** Pill-shaped search input in the sidebar header. Has two states: collapsed (normal sidebar, acts as a pressable trigger) and expanded (search focus mode, fully functional TextInput with back arrow).

**Screens used:**
- sidebar/01 Auth (collapsed)
- sidebar/01b Search Focus (expanded/focused)

**Props Interface:**
```typescript
interface SidebarSearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  isFocused: boolean;
  onFocus: () => void;           // Triggers expansion animation
  onBackPress: () => void;       // Triggers contraction animation (focused state)
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 44px [ESTIMATED]
- Border radius: 22px (pill) [ESTIMATED]
- Background: `#2F2F2F`
- Padding horizontal: 16px [ESTIMATED]
- Flex: 1 (within the header row)

**Collapsed state (normal sidebar):**
- Left icon: Search (magnifying glass, lucide: `Search`), 20px, `#9A9A9A` [ESTIMATED]
- Gap: 10px [ESTIMATED]
- Placeholder: "Search", font 16px, `#9A9A9A` [ESTIMATED]
- NOT editable -- acts as a Pressable that triggers expansion
- Border: none

**Expanded state (search focus):**
- Left icon: ArrowLeft (lucide: `ArrowLeft`), 20px, `#9A9A9A` [ESTIMATED]
  - Pressable: triggers contraction/exit
- Gap: 10px [ESTIMATED]
- TextInput: editable, auto-focused, cursor visible
- Placeholder: "Search" (when empty), font 16px, `#9A9A9A` [ESTIMATED]
- Input text: font 16px, `#FFFFFF`
- Cursor color: `#FFFFFF` [ESTIMATED]
- Border: none visible [ESTIMATED]

---

## 12. SidebarUserFooter

**Description:** Footer row showing the user's avatar circle, display name, and a down chevron. The entire row acts as a navigation button to the Settings screen.

**Screens used:**
- sidebar/01 Auth

**Props Interface:**
```typescript
interface SidebarUserFooterProps {
  name: string;
  initials: string;
  avatarColor: string;
  onPress: () => void;
  accessibilityLabel: string;
}
```

**Layout:** `flexDirection: 'row'`, `alignItems: 'center'`, full width
- **Avatar:** 32px circle, bg `#7C3AED` [ESTIMATED], initials in white 13px SemiBold
- **Name:** 16px, weight 500 (Medium), color `#FFFFFF`, margin-left 12px [ESTIMATED], flex 1
- **Chevron:** ChevronDown, 16px, `#9A9A9A` [ESTIMATED], margin-left 4px [ESTIMATED]

**Padding:** 16px horizontal, 14px vertical [ESTIMATED]

**Press feedback:**
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 8px [ESTIMATED]

**Action:** Navigate to Settings screen with slide (push) animation

---

## 13. UserAvatar

**Description:** Circular avatar with centered initials text. Color can be derived from the user's name or set explicitly.

**Screens used:**
- sidebar/01 Auth (within SidebarUserFooter)

**Props Interface:**
```typescript
interface UserAvatarProps {
  initials: string;
  backgroundColor: string;
  size?: number;     // Default: 32
}
```

**Dimensions:**
- Size: 32px (configurable)
- Border radius: `size / 2` (perfect circle)

**Typography (initials):**
- Font size: 13px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: `#FFFFFF`
- Text align: center (both axes -- use `justifyContent: 'center'`, `alignItems: 'center'`)
- Text transform: uppercase

---

## 14. SidebarOverlay

**Description:** Semi-transparent overlay covering the screen space to the right of the sidebar. Dismisses the sidebar on tap. Animates opacity in sync with sidebar open/close.

**Screens used:**
- sidebar/01 Unauth
- sidebar/01 Auth

**Props Interface:**
```typescript
interface SidebarOverlayProps {
  onPress: () => void;                    // Closes sidebar
  animatedOpacity: SharedValue<number>;   // Reanimated shared value for opacity
  accessibilityLabel?: string;            // Default: "Close sidebar"
}
```

**Dimensions:**
- Position: absolute, fills the remaining screen space right of the sidebar panel
- Background: `#000000`
- Animated opacity: 0 (closed) to 0.5 (fully open)

**No visual press feedback** -- the overlay does not change appearance on press.

---

## 15. LinkText

**Description:** Underlined tappable text for links (Terms, Privacy, Learn about your choices).

**Screens used:**
- auth/01 Welcome Screen (Terms, Privacy Policy, Learn about your choices)
- auth/03 Login Screen footer (Terms of Use, Privacy Policy)

**Props Interface:**
```typescript
interface LinkTextProps {
  text: string;
  onPress: () => void;
  color?: string;       // Default: '#FFFFFF'
  fontSize?: number;    // Default: 15
  accessibilityLabel: string;
}
```

**Typography:**
- Text decoration: underline
- Color: varies by context
  - In-content links (welcome screen): `#FFFFFF`
  - Footer links (login screen): `#9A9A9A` [ESTIMATED]
- Font weight: 400

**Press feedback:** Opacity 0.7 [ESTIMATED]

---

## 16. FullScreenLoader

**Description:** Composed component: full black screen with a centered loading spinner. Used for the auth loading transition.

**Screens used:**
- auth/04 Loading Transition

**Props Interface:**
```typescript
interface FullScreenLoaderProps {
  onComplete?: () => void;   // Called after duration expires
  duration?: number;          // Default: 3000ms
}
```

**Background:** `#000000`
**Spinner:** White (`#FFFFFF`), centered, ~36px [ESTIMATED]
**Non-interactive:** No buttons, no back navigation, no gestures.

---

## 17. OpenAILogo

**Description:** The OpenAI "flower/knot" interleaved circular logo. Displayed on the login screen above the heading.

**Screens used:**
- auth/03 Login Screen

**Props Interface:**
```typescript
interface OpenAILogoProps {
  size?: number;      // Default: 40
  color?: string;     // Default: '#FFFFFF'
}
```

**Asset:** SVG or PNG image of the OpenAI logo. This is NOT a lucide icon.
**Size:** 40x40px [ESTIMATED]
**Color:** `#FFFFFF`

---

## 18. AuthFooterLinks

**Description:** Horizontal row of "Terms of Use" and "Privacy Policy" links separated by a dot, positioned at the bottom of the login screen.

**Screens used:**
- auth/03 Login Screen

**Props Interface:**
```typescript
interface AuthFooterLinksProps {
  onTermsPress?: () => void;    // No-op in clone
  onPrivacyPress?: () => void;  // No-op in clone
}
```

**Layout:** `flexDirection: 'row'`, `alignItems: 'center'`, `justifyContent: 'center'`
- "Terms of Use": font 13px, underlined, `#9A9A9A` [ESTIMATED]
- Dot separator: " . ", `#9A9A9A` [ESTIMATED], 6px horizontal margin
- "Privacy Policy": font 13px, underlined, `#9A9A9A` [ESTIMATED]

**Position:** Absolute bottom, centered, 16px above safe area bottom [ESTIMATED]

---

## Cross-Screen Consistency Notes

1. **Button heights** are 52px on all screens (auth bottom sheet, login, sidebar unauth). The welcome screen Continue button may be slightly taller at 56px [ESTIMATED].
2. **Button border-radius** is always half the button height (pill shape): 26px for 52px buttons, 28px for 56px.
3. **Screen horizontal padding** varies: 24px on welcome screen, 32px on login screen form area, 16px inside sidebar, 24px inside bottom sheet.
4. **Press feedback** is consistent: opacity 0.85 for solid buttons, 0.7 for icon buttons/links, background `#2A2A2A` for sidebar items.
5. **Sidebar background** is always `#171717`, never `#000000`. This is the single most important color distinction in the sidebar.
6. **Search input background** is always `#2F2F2F`, same as active chat item highlight. This is intentional -- both represent "elevated surface" in the dark theme.
7. **Separator/divider color** is `#2A2A2A` for content separators, `#3A3A3A` for interactive element borders. Two distinct values.
8. **Font family** is always system default (no custom fonts). San Francisco on iOS, Roboto on Android.
9. **Icon sizes** use three standard values: 16px (small), 20px (medium/buttons), 24px (standard/navigation).
10. **The Google "G" logo** is the only non-lucide icon used. It requires a dedicated image/SVG asset with the standard 4-color treatment (blue, red, yellow, green).
