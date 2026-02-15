# Components Inventory -- Reusable Components (Merged)

This document catalogs every reusable component identified across all features (auth, sidebar, settings, chat unauth, chat auth, GroupChat, action bar). Each entry describes the component, its variants, props interface, visual specs, and screens where it appears.

Sources merged: components-inventory-1.md through components-inventory-5.md.

---

## 1. PrimaryButton

**Description:** Full-width pill-shaped button with solid background. The main CTA button throughout the app. Supports disabled, loading, and multiple background color variants.

**Screens used:**
- auth/01 Welcome Screen ("Continue")
- auth/02 Bottom Sheet ("Continue with Google" solid white, "Sign up" gray)
- auth/03 Login Screen ("Continue" -- disabled/enabled/loading states)
- sidebar/01 Unauth ("Log in or sign up")
- settings/01k Passkeys ("Create a passkey")
- chat/13 GroupChat ("Start group chat")
- Report modals Step 3 Submit button

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
  width?: 'full' | 'auto';      // full = 100%, auto = content-based
  accessibilityLabel: string;
}
```

**Dimensions:**
- Width: 100% of parent container (or auto for "Start group chat")
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
- Text does NOT shift position when spinner appears
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
- chat/19 Profile BottomSheet Self ("Edit profile")
- chat/28 Customize ChatGPT ("Customize ChatGPT", "Invite with link")

**Props Interface:**
```typescript
interface OutlineButtonProps {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;       // Optional left icon (Google logo, Phone, Mail)
  isLoading?: boolean;
  borderColor?: string;          // Override border color (default: #3A3A3A)
  width?: 'full' | 'auto';
  accessibilityLabel: string;
}
```

**Dimensions:**
- Width: 100% of parent container (or auto for profile/GroupChat buttons)
- Height: 52px (smaller for profile: ~40px [ESTIMATED])
- Border radius: 26px (pill shape) (20px for smaller variants)
- Border: 1px solid (color varies: `#3A3A3A` on login, `#555555` on bottom sheet, `#4A4A4A` on profile [ESTIMATED])

**Background:**
- Normal: `transparent`
- Pressed: `#1A1A1A` [ESTIMATED]

**Typography:**
- Font size: 16px (15px for profile variant)
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

**Description:** Circular transparent button with a left arrow icon. Positioned at top-left of screens for backward navigation. Two style variants: transparent (auth) and filled (settings/sub-screens).

**Screens used:**
- auth/03 Login Screen (transparent variant)
- All settings screens (filled variant)
- chat/18 Members, chat/26 Manage Link, chat/28 Customize ChatGPT (filled variant)
- chat/11 Select Text (filled variant, `#2F2F2F` bg)

**Variants:**

| Variant | Background | Size | Border Radius |
|---|---|---|---|
| `transparent` | transparent | 40x40px | 20px |
| `filled-dark` | `#3A3A3A` [ESTIMATED] | 48x48px | 24px |
| `filled-surface` | `#2F2F2F` | 48x48px | 24px |

**Props Interface:**
```typescript
interface BackButtonProps {
  onPress: () => void;
  variant?: 'transparent' | 'filled-dark' | 'filled-surface';
  accessibilityLabel?: string;  // defaults to "Go back"
}
```

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

**Description:** Generic icon-only button used for close (X), compose (SquarePen), and other icon-based actions. Flexible size, color, and background.

**Screens used:**
- auth/02 Bottom Sheet (close X icon)
- sidebar/01 Auth (compose SquarePen in header)
- sidebar/01b Search Focus (compose SquarePen in header)
- Chat headers (various icons)
- Action bar icons

**Props Interface:**
```typescript
interface IconButtonProps {
  icon: React.ReactNode;         // Pre-rendered lucide icon component
  onPress: () => void;
  size?: number;                 // Container size (default: 40)
  iconSize?: number;             // Icon size (default: 24)
  iconColor?: string;            // Icon color (default: #FFFFFF)
  hitSlop?: number;              // Extra hit area (default: 10)
  backgroundColor?: string;     // Container bg (default: transparent)
  borderRadius?: number;         // Container border radius (default: size/2)
  accessibilityLabel: string;
}
```

**Dimensions:**
- Container: 40x40px [ESTIMATED] (configurable via `size`)
- Background: transparent by default, `#2F2F2F` for header buttons
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

**Description:** Text input with an animated floating placeholder label. When the input gains focus, the placeholder shrinks and moves to the top border of the input field, "cutting" through the border line with a background patch. Reused across multiple features.

**Screens used:**
- auth/03 Login Screen (Email mode: "Email"; Phone mode: "Phone number")
- chat/21 Edit Profile BottomSheet ("Name", "Username")
- chat/17 Rename Group modal
- chat/36 Share Feedback BottomSheet (FeedbackDropdown uses same animation)

**Props Interface:**
```typescript
interface FloatingLabelInputProps {
  label: string;                           // "Email", "Phone number", "Name", "Username"
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?: string;
  borderColor?: string;                    // Override default border color
  borderRadius?: number;                   // Override default border radius (auth: 8px, profile: 12px)
  accessibilityLabel: string;
}
```

**Dimensions:**
- Width: 100% of parent
- Height: 56px
- Border radius: 8px (auth login) or 12px (edit profile, feedback) [ESTIMATED]
- Padding horizontal: 16px
- Padding vertical: 16px

**Border states:**
| State | Border Width | Border Color |
|---|---|---|
| Unfocused (empty) | 1px | `#3A3A3A` [ESTIMATED] (auth) / `#4A4A4A` [ESTIMATED] (profile) |
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
- The label in its floated position should have a small background "patch" (bg `#000000`, ~4px horizontal padding) that masks the border line behind it
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

**Layout:** `flexDirection: 'row'`, `alignItems: 'center'`
- Left line: `flex: 1`, 1px, `#3A3A3A`
- Text: "OR", font 14px, weight 400, color `#6E6E6E`, with 16px horizontal margin
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
- **Icon:** Left-aligned, 26px [ESTIMATED], color `#FFFFFF`, stroke width 1.5
- **Text container:** Right of icon, margin-left 20px [ESTIMATED], flex 1
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
- Left icon: Search, 20px, `#9A9A9A` [ESTIMATED]
- Gap: 10px [ESTIMATED]
- Placeholder: "Search", font 16px, `#9A9A9A` [ESTIMATED]
- NOT editable -- acts as a Pressable that triggers expansion
- Border: none

**Expanded state (search focus):**
- Left icon: ArrowLeft, 20px, `#9A9A9A` [ESTIMATED]
- Gap: 10px [ESTIMATED]
- TextInput: editable, auto-focused, cursor visible
- Placeholder: "Search" (when empty), font 16px, `#9A9A9A` [ESTIMATED]
- Input text: font 16px, `#FFFFFF`
- Cursor color: `#FFFFFF` [ESTIMATED]

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

**Description:** Circular avatar with centered initials text. Color can be derived from the user's name or set explicitly. Used across many screens at different sizes.

**Screens used:**
- sidebar/01 Auth (32px, footer)
- chat/16 GroupChat header (36px)
- chat/18 Members Screen (48px)
- settings/01 Auth (96px, profile section)
- chat/19-20 Profile BottomSheet (120px)
- chat/21 Edit Profile (120px with camera overlay)

**Props Interface:**
```typescript
interface UserAvatarProps {
  initials: string;
  backgroundColor: string;
  size?: number;     // Default: 32
}
```

**Dimensions:**
- Size: configurable (32, 36, 48, 96, 120)
- Border radius: `size / 2` (perfect circle)

**Typography (initials) by size:**

| Size | Font Size | Font Weight |
|---|---|---|
| 32px | 13px | 600 (SemiBold) |
| 36px | 14px | 600 (SemiBold) |
| 48px | 18px | 600 (SemiBold) |
| 96px | 36px | 600 (SemiBold) |
| 120px | 40px | 600 (SemiBold) |

- Color: `#FFFFFF`
- Text align: center (both axes)
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

**No visual press feedback.**

---

## 15. LinkText

**Description:** Underlined tappable text for links (Terms, Privacy, Learn about your choices).

**Screens used:**
- auth/01 Welcome Screen (Terms, Privacy Policy, Learn about your choices)
- auth/03 Login Screen footer (Terms of Use, Privacy Policy)
- Settings description "Learn more" links

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
  - Description "Learn more" links: `#9A9A9A` [ESTIMATED]
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

## 19. ChatHeader

**Description:** The top navigation bar for the chat screen. Multiple distinct configurations depending on auth state, chat state, and whether messages are present.

**Screens used:**
- chat/01-12 (all unauth screens)
- chat/01-12 (all auth screens)
- chat/14 (hide chat)
- chat/15 (talking chat)
- chat/16 (group chat, different variant -- see GroupChatHeaderPill)

**Variants:**

| Variant | Left Side | Center | Right Side |
|---|---|---|---|
| `unauth` | SidebarButton (44px, `#2F2F2F`) | "ChatGPT" (static text, 19px SemiBold) | "Log in" pill (white bg, black text) |
| `auth-empty` | SidebarButton + ChatGPTButton pill | -- | CombinedPill(AddPerson + Bubble) |
| `auth-in-chat` | SidebarButton + ChatGPTButton pill | -- | CombinedPill(Compose + Ellipsis) |
| `auth-hide-chat` | SidebarButton + ChatGPTButton pill | -- | MessageCircleOff single circle |
| `auth-talking` | SidebarButton + "ChatGPT Voice" text | -- | EllipsisVertical single circle |
| `select-text` | BackButton (circle) | "Select Text" (bold) | (none) |

**Props Interface:**
```typescript
interface ChatHeaderProps {
  variant: 'unauth' | 'auth-empty' | 'auth-in-chat' | 'auth-hide-chat' | 'auth-talking' | 'select-text';
  onSidebarPress: () => void;
  onChatGPTPress?: () => void;
  onLoginPress?: () => void;
  onAddPersonPress?: () => void;
  onBubblePress?: () => void;
  onComposePress?: () => void;
  onEllipsisPress?: () => void;
  onHideChatToggle?: () => void;
  onBackPress?: () => void;       // select-text variant
  accessibilityLabel?: string;
}
```

**Dimensions:**
- Height: 56px [ESTIMATED]
- Padding horizontal: 16px
- Padding top: 8px below safe area [ESTIMATED]
- Background: #000000 with subtle gradient extending downward (~20px gradient overlay from opacity 1.0 to 0.0)

---

## 20. CombinedPillButton

**Description:** A pill-shaped container holding two icon buttons side by side. Used in the auth chat header for grouping related actions.

**Screens used:**
- chat/01 Auth header (AddPerson + Bubble icons)
- chat/06-08 Auth header (Compose + Ellipsis icons)

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
- Background: `#2F2F2F`
- Padding horizontal: 14px [ESTIMATED]
- Gap between icons: 16px [ESTIMATED]

**Icon specs:**
- Size: 22px [ESTIMATED]
- Color: `#FFFFFF`
- Press feedback per icon: opacity 0.7

---

## 21. ChatGPTButton (Header Pill)

**Description:** Pill-shaped "ChatGPT" button in the auth header. Different from the unauth centered text -- this is a tappable button with a dark background that opens the Attachments BottomSheet.

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
- Background: `#2F2F2F`
- Border radius: 22px
- Padding horizontal: 18px [ESTIMATED]

**Typography:**
- Text: "ChatGPT"
- Font size: 19px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: `#FFFFFF`

**Press feedback:** opacity 0.7

---

## 22. ChatInputBar

**Description:** The bottom input bar for composing messages. Contains a plus button, a text input with optional chip, mic button, and send/stop/talk button. Expands vertically when a feature chip is active. The most complex component in the chat feature.

**Screens used:**
- chat/01-12 (all unauth and auth chat states)
- chat/14 (hide chat)
- chat/15 (talking mode -- reduced width)

**Props Interface:**
```typescript
interface ChatInputBarProps {
  isAuth: boolean;
  mode: 'normal' | 'chip' | 'loading' | 'talking';
  chip?: FeatureChipData;
  placeholder?: string;              // default "Ask ChatGPT"
  value: string;
  onChangeText: (text: string) => void;
  onPlusPress: () => void;
  onMicPress: () => void;
  onSendPress: () => void;
  onTalkPress?: () => void;          // auth only
  onStopPress?: () => void;          // loading mode only
  onEndPress?: () => void;           // talking mode only
  onCameraPress?: () => void;        // talking mode only
  onChipClose?: () => void;          // chip mode only
  accessibilityLabel?: string;
}

interface FeatureChipData {
  id: string;
  icon: string;           // lucide icon name
  iconColor: string;      // hex color
  label: string;
  labelColor?: string;    // default #FFFFFF, can be teal for edit mode
}
```

**Dimensions:**
- Padding horizontal: 16px (outer)
- Padding bottom: 8px [ESTIMATED]
- Background: #000000
- Plus button: 44px circle, #2F2F2F bg
- Input field: flex 1, 48px height (single-line), #2F2F2F bg, 24px border-radius
- Send button: 36px circle inside input
- Mic button: 32px touch target inside input
- Gap between plus and input: 8px [ESTIMATED]

**States:**

| State | Send Button | Mic Button | Input Height | Chip |
|---|---|---|---|---|
| `empty` (unauth) | Disabled (#3A3A3A) | Visible | 48px | None |
| `empty` (auth) | Talk button (#FFFFFF, waveform icon) | Hidden | 48px | None |
| `has-text` | Enabled (#FFFFFF, arrow) | Hidden | 48px+ | None |
| `loading` | Stop button (square) | Hidden | 48px | None |
| `chip-empty` | Disabled / Talk | Visible | ~80px (expanded) | Active chip shown |
| `chip-has-text` | Enabled | Hidden | ~80px+ | Active chip shown |
| `edit-mode` | Enabled | Hidden | ~100px+ | "Editing message" chip |

---

## 23. FeatureChip

**Description:** A small pill inside the input field that indicates an active feature mode (Search, Study, Editing message, Image, etc.). Contains an icon, label text, and an X close button.

**Screens used:**
- chat/04 (Search chip)
- chat/05 (Study chip)
- chat/12 (Editing message chip)
- chat/03c (Instant chip)
- chat/03e (Image chip)
- All other feature modes from Attachments BottomSheet

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
- Border: 1px solid `#4A4A4A` [ESTIMATED] (unauth) or Background: `#333333` [ESTIMATED] (auth, no border)
- Border radius: 16px (pill)
- Background: `transparent` (unauth) or `#333333` [ESTIMATED] (auth)
- Padding horizontal: 10px [ESTIMATED]
- Icon size: 16px [ESTIMATED]
- Icon-label gap: 6px [ESTIMATED]
- Close X size: 14px [ESTIMATED], color `#9A9A9A` [ESTIMATED]
- Label-X gap: 6px [ESTIMATED]

**Typography:**
- Font size: 14px
- Font weight: 500 (Medium)
- Color: `#FFFFFF` (default) or `#5BC5C9` (edit mode)

**Variants:**

| Mode | Icon (Lucide) | Icon Color | Label | Label Color |
|---|---|---|---|---|
| Search | `Globe` | `#5BC5C9` | "Search" | `#FFFFFF` |
| Study | `GraduationCap` / `BookOpen` | `#5BC5C9` / `#F5C542` | "Study" | `#FFFFFF` |
| Edit | `Pencil` | `#5BC5C9` | "Editing message" | `#5BC5C9` |
| Image | `Palette` | `#5BC5C9` | "Image" | `#FFFFFF` |
| Research | `Telescope` | `#5BC5C9` | "Research" | `#FFFFFF` |
| Agent | `SquareMousePointer` | `#5BC5C9` | "Agent" | `#FFFFFF` |
| Instant | `Atom` | `#FFFFFF` | "Instant" | `#FFFFFF` |
| Thinking | `Atom` | `#FFFFFF` | "Thinking" | `#FFFFFF` |
| Shopping | `ShoppingBag` | `#5BC5C9` | "Shopping research" | `#FFFFFF` |
| Quizzes | `SquareStack` | `#5BC5C9` | "Quizzes" | `#FFFFFF` |

**Animation:** slide-up on appear (250ms), slide-down on dismiss (200ms)

---

## 24. SuggestionButton

**Description:** Pill-shaped button with an icon and text, used in the suggestion grid on the empty chat screen. Each button represents a content category.

**Screens used:**
- chat/01 unauth (Brainstorm, Get advice, Code, Summarize text)
- chat/01 auth (Create image, Brainstorm, Help me write, Get advice)

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
- Border: 1px solid `#3A3A3A` [ESTIMATED]
- Border radius: 24px (pill)
- Background: transparent
- Icon size: 22px [ESTIMATED]
- Icon-text gap: 8px [ESTIMATED]
- Text: 16px, Regular (400), `#9A9A9A`

**Press feedback:** Background `#2A2A2A` [ESTIMATED]

**Variants:**

| Label | Icon (Lucide) | Icon Color |
|---|---|---|
| "Brainstorm" | `Lightbulb` | `#F5C542` |
| "Get advice" | `Gem` | `#5BC5C9` |
| "Code" | `Code` | `#8B7BF7` |
| "Summarize text" | `FileText` | `#E8875B` |
| "Create image" | `Image` | `#4ADE80` |
| "Help me write" | `Pencil` | `#C084FC` |

---

## 25. SuggestionTextItem

**Description:** A row showing an icon and suggestion text, with an optional divider. Used in expanded suggestion lists and in Search/Study mode for trending topics or activities.

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
  showSeparator?: boolean;  // default true
  accessibilityLabel?: string;
}
```

**Dimensions:**
- Height: 56px [ESTIMATED]
- Padding horizontal: 24px
- Padding vertical: 14-16px [ESTIMATED]
- Icon size: 20-22px [ESTIMATED]
- Icon-text gap: 16px [ESTIMATED]
- Text: 16px, Regular (400), `#9A9A9A` [ESTIMATED]
- Separator: 1px, `#2A2A2A`, left margin ~64px [ESTIMATED]

**Press feedback:** opacity 0.7 or background `#1A1A1A` [ESTIMATED], border-radius 8px

---

## 26. UserMessageBubble

**Description:** A rounded bubble containing the user's message text, right-aligned in the chat. Supports long-press to open context menu.

**Screens used:**
- chat/06, 07, 08, 10, 12 (unauth and auth)

**Props Interface:**
```typescript
interface UserMessageBubbleProps {
  text: string;
  onLongPress: () => void;
  accessibilityLabel?: string;
}
```

**Dimensions:**
- Max width: 75% of screen [ESTIMATED]
- Background: `#2F2F2F` [ESTIMATED]
- Border radius: 20px [ESTIMATED]
- Padding horizontal: 14px [ESTIMATED]
- Padding vertical: 12px [ESTIMATED]
- Alignment: flex-end (right side of screen)
- Margin right: 16px [ESTIMATED]

**Typography:**
- Font size: 16px
- Font weight: 400 (Regular)
- Color: `#FFFFFF`
- Line height: 24px [ESTIMATED]

**Press feedback:** slight opacity decrease (0.9) on normal press [ESTIMATED]
**Long press:** Opens ContextMenu with haptic feedback [ESTIMATED]

---

## 27. AIResponseView

**Description:** Renders the AI's response text. Supports plain text and rich Markdown (headers, bold, bullets, emoji, tables, inline citation chips). Text is selectable via native long-press. Handles streaming animation.

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
- Text: 16px, Regular (400), `#FFFFFF`, line-height 24px
- Headers: 18px, Bold (700), `#FFFFFF`
- Bold: 700 weight inline
- Paragraph spacing: 16px [ESTIMATED]
- Bullet indent: 16px [ESTIMATED]
- Table header: 15px, Bold, `#FFFFFF`; Table cell: 15px, Regular, `#FFFFFF`; Borders: `#3A3A3A`
- Citation chip: 22px height, `#333333` bg, 11px radius

**Selectable:** YES (native text selection on long-press)

---

## 28. ActionBar

**Description:** A row of icon buttons appearing below the AI response after streaming completes. Unauth shows 3 icons; auth shows 6 icons. Can optionally include a "Sources" button with favicon stack.

**Screens used:**
- chat/07 (unauth, 3 icons)
- chat/08 (unauth, 3 icons + Sources)
- chat/07 auth (6 icons)
- chat/08 auth (6 icons + Sources)

**Props Interface:**
```typescript
interface ActionBarProps {
  variant: 'unauth' | 'auth';
  showSources?: boolean;
  sources?: SourceFavicon[];
  thumbsState?: 'none' | 'up' | 'down';
  onCopyPress: () => void;
  onSpeakerPress: () => void;
  onRegeneratePress?: () => void;   // unauth only
  onThumbsUpPress?: () => void;     // auth only
  onThumbsDownPress?: () => void;   // auth only
  onSharePress?: () => void;        // auth only
  onEllipsisPress?: () => void;     // auth only
  onSourcesPress?: () => void;
  accessibilityLabel?: string;
}
```

**Layout:**
- Horizontal row, left-aligned
- Margin left: 16px [ESTIMATED]
- Margin top: 12px [ESTIMATED]
- Gap between icons: 16px [ESTIMATED]

**Unauth Icons (3):**

| # | Icon (Lucide) | Size | Color |
|---|---|---|---|
| 1 | `Copy` | 20px | `#9A9A9A` |
| 2 | `Volume2` | 20px | `#9A9A9A` |
| 3 | `RefreshCw` | 20px | `#9A9A9A` |

**Auth Icons (6):**

| # | Icon (Lucide) | Size | Color |
|---|---|---|---|
| 1 | `Copy` | 20px | `#9A9A9A` |
| 2 | `ThumbsUp` | 20px | `#9A9A9A` |
| 3 | `ThumbsDown` | 20px | `#9A9A9A` |
| 4 | `Volume2` | 20px | `#9A9A9A` |
| 5 | `Share2` | 20px | `#9A9A9A` |
| 6 | `EllipsisVertical` | 20px | `#9A9A9A` |

**Press feedback per icon:** opacity 0.7

**ThumbsUp active state:** Icon filled, color `#FFFFFF`, ThumbsDown disappears
**ThumbsDown active state:** Icon filled, color `#FFFFFF`, ThumbsUp disappears, opens Share Feedback BottomSheet

**Sources Button (optional):**
- Favicon stack (2-3 overlapping 18px circles, -6px overlap) + "Sources" text (14px, Medium 500, `#FFFFFF`)
- Positioned to the right, separated by flexible space
- Gap between favicons and text: 8px [ESTIMATED]

**Animation:** fade-in 300ms after streaming completes

---

## 29. AILoadingIndicator

**Description:** Shows the AI loading state: first a pulsing white circle, then a "Thinking..." or "Searching..." text with shimmer animation.

**Screens used:**
- chat/06 (all states)

**Props Interface:**
```typescript
interface AILoadingIndicatorProps {
  mode?: 'thinking' | 'searching';
  modelVariant?: 'auto' | 'instant' | 'thinking' | 'gpt51-instant' | 'gpt51-thinking' | 'gpt4o';
}
```

**Phase 1: Pulsing Circle**
- Size: 16px diameter [ESTIMATED]
- Color: `#FFFFFF`
- Scale: oscillates 0.8 to 1.2
- Duration: ~1.2s per cycle
- Easing: ease-in-out (sinusoidal)
- Position: left-aligned, 24px from left edge [ESTIMATED]

**Phase 2: Shimmer Text**
- Text: "Thinking..." or "Searching..."
- Font: 16px, Regular (400)
- Base color: `#6E6E6E` [ESTIMATED]
- Shimmer highlight: `#9A9A9A` sweep left-to-right
- Sweep duration: ~1.5s

**Transition:** Circle fades out -> text fades in (~100ms each)

**Model Variations:**
- Auto: standard shimmer duration
- Instant: NO shimmer (skip directly to response)
- Thinking: shimmer ~3s longer than normal
- GPT-5.1 Instant: NO shimmer, NO loading circle
- GPT-5.1 Thinking: shimmer ~10s longer than normal
- GPT-4o: skip loading circle, start directly with shimmer

---

## 30. StopButton

**Description:** A button that replaces the send button during AI generation. Contains a solid square "stop" icon.

**Screens used:**
- chat/06 (during loading/streaming, unauth and auth)

**Props Interface:**
```typescript
interface StopButtonProps {
  onPress: () => void;
  accessibilityLabel?: string;  // default "Stop generating"
}
```

**Dimensions:**
- Size: 36px [ESTIMATED]
- Background: `#FFFFFF`
- Border radius: 18px (circular)
- Icon: solid square, 14px [ESTIMATED], `#000000`

**Press feedback:** opacity 0.85

**Transition:** Appears IMMEDIATELY (no animation) when message is sent; reverts to send/talk button IMMEDIATELY when streaming completes.

---

## 31. TalkButton

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
- Background: `#FFFFFF`
- Border radius: 18px (circular)
- Icon: `AudioLines` (Lucide) or similar waveform icon, 20px [ESTIMATED], `#000000`

**Press feedback:** opacity 0.85

**Loading animation (on press):**
1. Button expands horizontally to the left
2. Shows loading indicator + "Cancel" text
3. Duration: 2 seconds
4. After 2s: transitions to Talking Chat state

---

## 32. ContextMenu

**Description:** A floating card that appears on long-press of a user message bubble. Shows a timestamp and action items. Has a dimmed backdrop.

**Screens used:**
- chat/10 (unauth: 3 items)
- chat/10 auth (auth: 4 items with "Share")

**Props Interface:**
```typescript
interface ContextMenuProps {
  variant: 'unauth' | 'auth';
  timestamp: string;
  items: ContextMenuItem[];
  onDismiss: () => void;
  position: { x: number; y: number };
}

interface ContextMenuItem {
  icon: string;         // lucide icon name
  label: string;
  onPress: () => void;
}
```

**Dimensions:**
- Width: ~240px [ESTIMATED]
- Background: `#2A2A2A` [ESTIMATED] (auth) / `#2F2F2F` [ESTIMATED] (unauth)
- Border radius: 16px [ESTIMATED]
- Shadow: `0 4px 16px rgba(0,0,0,0.5)` [ESTIMATED]
- Padding vertical: 8px [ESTIMATED]

**Timestamp:**
- Font: 13px, Regular (400), `#6E6E6E`
- Padding: 14px horizontal, 12px top, 8px bottom

**Menu Item:**
- Height: 48px [ESTIMATED]
- Padding horizontal: 14-16px
- Icon: 20-22px, `#FFFFFF`
- Text: 16px, Regular (400), `#FFFFFF`
- Gap: 12px
- Press feedback: background `#333333` [ESTIMATED]

**Items (Unauth):** Copy, Select Text, Edit Message
**Items (Auth):** Copy, Select Text, Edit Message, Share

**Backdrop:** `#000000` at 30-40% opacity [ESTIMATED]

**Animation:** fade-in 200ms, fade-out 150ms

---

## 33. AttachmentsBottomSheet

**Description:** A bottom sheet with media attachment buttons (Camera, Photos, Files) and feature items. Uses @gorhom/bottom-sheet. Has unauth and auth variants with different feature lists.

**Screens used:**
- chat/03 (unauth: 3 media + 3 features)
- chat/03 auth (auth: 3 media + 10 features, expandable)

**Props Interface:**
```typescript
interface AttachmentsBottomSheetProps {
  isAuth: boolean;
  onClose: () => void;
  onCameraPress: () => void;
  onPhotosPress: () => void;
  onFilesPress: () => void;
  onFeaturePress: (feature: FeatureType) => void;
  selectedFeature?: FeatureType;
}

type FeatureType =
  | 'model' | 'create-image' | 'deep-research' | 'web-search'
  | 'study-and-learn' | 'agent-mode' | 'shopping-research'
  | 'your-year' | 'quizzes' | 'explore-apps';
```

**Container:**
- Background: `#212121` [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Drag handle: 36x4px, `#4A4A4A`, centered
- Initial height: ~55% screen, expandable to ~100% on swipe up
- Backdrop: `#000000` at 50%

**Media Buttons Row:**
- 3 equal-width buttons, 100px height, `#333333` bg, 16px radius
- Icons: Camera, Image, Paperclip (28px, white)
- Labels: 14px, Medium (500), white
- Gap: 12px between cards

**Feature Items:**
- Icon (24px) + Title (17px, Medium 500, white) + Subtitle (14px, Regular, `#9A9A9A`)
- Height: 72px [ESTIMATED]
- Padding horizontal: 24px
- Selected state: icon/title/subtitle turn `#5BC5C9`, check icon appears right

**Unauth features:** Web search, Study and learn, Explore apps
**Auth features:** Model, Create image, Deep research, Web search, Study and learn, Agent mode, Shopping research, Your Year with ChatGPT, Quizzes, Explore apps

---

## 34. EditWarningContainer

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
- Background: `#1A1A1A` [ESTIMATED]
- Border: 1px solid `#333333` [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Padding: 16px horizontal, 14px vertical [ESTIMATED]
- Layout: row
- Info icon: `Info` (Lucide), 20px, `#9A9A9A`, margin-right 12px
- Text: 14px, Regular (400), `#D4D4D4`, flex 1

**Animation:** fade-in 300ms on appear

---

## 35. SelectTextScreen

**Description:** A fullscreen modal that shows the user's message text in a selectable/copyable format.

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
- Back button: 40px circle, `#2F2F2F` bg, `ArrowLeft` icon
- Title: "Select Text", 18px, Bold (700), `#FFFFFF`, centered

**Content:**
- Padding: 16px
- Text: 16px, Regular (400), `#FFFFFF`, selectable, not editable
- Background: `#000000`

**Animation:** fade-in/out 200ms

---

## 36. SourcesBottomSheet

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
- Background: `#212121` [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Height: ~55-60% screen [ESTIMATED]
- Title: "Citations", 18px, SemiBold (600), `#FFFFFF`

**Source Item:**
- Favicon: 18-20px circle
- Domain: 14px, Regular (400), `#9A9A9A`
- Title: 16px, Medium (500), `#FFFFFF`
- Divider: 1px, `#3A3A3A`
- Padding vertical: 16px

---

## 37. SettingsHeader

**Description:** Fixed header bar with a circular back button (dark background) and a centered title. Used on all settings screens.

**Screens used:**
- All settings screens (01-04, all sub-screens)

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
- On scrollable screens, header stays fixed with subtle bottom shadow/gradient

---

## 38. SettingsCardGroup

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

**Notes:**
- Children are `SettingsRow` components
- Separators between rows are 1px lines at `#3A3A3A` ~40% opacity [ESTIMATED]
- First child gets top border radius, last child gets bottom border radius

---

## 39. SettingsRow

**Description:** A single row inside a `SettingsCardGroup`. The most versatile component in the settings feature, with multiple variants.

**Screens used:** All settings screens

**Variants:**

| Variant | Left | Center | Right |
|---|---|---|---|
| A | Icon | Text | ChevronRight |
| B | Icon | Text + Subtitle | ChevronRight |
| C | Icon | Text | Toggle Switch |
| D | Icon | Text + Subtitle | Toggle Switch |
| E | Icon | Text + Subtitle | ChevronDown |
| F | (none) | Text | Status + ChevronRight |
| G | (none) | Text | Toggle Switch |
| H | (none) | Text | Status (no chevron) |
| I | (none) | Text only | (none) |
| J | Icon | Text (red) | (none) |
| K | (none) | Description text (non-interactive) | (none) |

**Props Interface:**
```typescript
interface SettingsRowProps {
  icon?: string;
  iconColor?: string;     // default #FFFFFF, #E57373 for destructive
  title: string;
  titleColor?: string;    // default #FFFFFF, #E57373 for destructive
  subtitle?: string;
  subtitleColor?: string; // default #9A9A9A
  subtitlePrefix?: React.ReactNode;
  rightElement?: 'toggle' | 'chevron-down' | 'chevron-right' | 'status' | 'none';
  toggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
  statusText?: string;
  onPress?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  showSeparator?: boolean;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height (single-line): 52px [ESTIMATED]
- Height (with subtitle): 64px [ESTIMATED]
- Padding horizontal: 16px
- Padding vertical: 14px [ESTIMATED]
- Icon size: 24px
- Icon-to-text gap: 16px
- Separator: 1px, `#3A3A3A` at ~40% opacity

**Press feedback:** Opacity 0.85 [ESTIMATED], duration 150ms

---

## 40. ToggleSwitch

**Description:** Custom toggle switch matching ChatGPT's black-and-white design. NOT the default RN Switch component.

**Screens used:**
- Multiple settings screens (see inventory-2 for full list)

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

---

## 41. RadioButton

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

## 42. SettingsModal (Centered AlertDialog)

**Description:** Centered floating modal dialog used for confirmations and option selections.

**Screens used:**
- settings/02 Language modal
- settings/01c Subscription modal
- settings/01e Appearance modal
- settings/01g Logout modal

**Variants:**

| Variant | Title | Body | List | Buttons |
|---|---|---|---|---|
| `info` | No | Yes | No | OK only |
| `radio-list` | Yes | No | Radio buttons | OK |
| `confirm` | Yes | Yes | No | Cancel + Action |

**Props Interface:**
```typescript
interface SettingsModalProps {
  visible: boolean;
  onDismiss: () => void;
  title?: string;
  body?: string;
  children?: React.ReactNode;
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

**Backdrop:** `#000000` at 50%, pressable to dismiss

**Title:** 22px, Bold, `#FFFFFF`
**Body:** 16px, Regular, `#CCCCCC` [ESTIMATED]
**Buttons:** Right-aligned row, 16px SemiBold `#FFFFFF`, transparent bg, 24px gap

**Animation:** Fade in/out, 200ms [ESTIMATED]

---

## 43. SettingsDropdown

**Description:** Floating dropdown/popover menu that appears anchored to a trigger element. Has no backdrop dimming.

**Screens used:**
- settings/01f Accent Color modal
- settings/01i Speech Input Language modal

**Props Interface:**
```typescript
interface SettingsDropdownProps {
  visible: boolean;
  onDismiss: () => void;
  anchorRef: React.RefObject<View>;
  items: DropdownItem[];
  selectedValue?: string;
}

interface DropdownItem {
  label: string;
  value: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onPress: () => void;
}
```

**Container:**
- Background: `#424242` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Width: ~55% of screen
- Shadow: `0 4px 16px rgba(0,0,0,0.5)` [ESTIMATED]
- Max height: ~60% of screen (scrollable)

**Backdrop:** Transparent, pressable to dismiss

**Item:**
- Height: 48px [ESTIMATED]
- Padding horizontal: 20px
- Text: 16px Regular `#FFFFFF`
- Selected: Check icon, 20px, `#FFFFFF`, right-aligned

---

## 44. SettingsSectionHeader

**Description:** Section label text that appears above a card group to categorize settings rows.

**Screens used:**
- Multiple settings screens (see inventory-2)

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

## 45. ProfileSection

**Description:** Centered profile section showing the user's avatar, name, handle, and edit button. Settings screen only.

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

## 46. LicenseItem

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

**Spacing:** Padding vertical 20px, separator 1px `#2A2A2A`, author margin-top 4px, badge margin-top 8px

---

## 47. PasskeyEmptyState

**Description:** Centered content block with icon, title, description, and CTA button.

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

## 48. DescriptionText

**Description:** Helper/description text that appears below a card group to provide additional context.

**Screens used:**
- settings/01 Unauth, settings/01j Data Controls, settings/01k Security, settings/01i Speech

**Props Interface:**
```typescript
interface DescriptionTextProps {
  text: string;
  linkText?: string;
  onLinkPress?: () => void;
}
```

**Typography:**
- Font size: 14px, weight 400, color `#9A9A9A`, line height 20px [ESTIMATED]
- Link: same color, underlined

**Spacing:** Margin top 12px, padding horizontal 16px

---

## 49. ContextualModal

**Description:** A floating modal that appears near a triggering element (not centered on screen). Used for contextual menus. Supports option rows with icons, text, subtitles, and chevrons.

**Screens used:**
- chat/33 Ellipsis Modal
- chat/34 Retry Modal
- chat/35 Switch Model Modal
- chat/17 GroupChat Options Modal

**Props Interface:**
```typescript
interface ContextualModalOption {
  icon?: string;
  label: string;
  subtitle?: string;
  chevron?: 'right' | 'down' | 'none';
  color?: 'default' | 'destructive';
  checkmark?: boolean;
  onPress: () => void;
}

interface ContextualModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  sectionTitle?: string;
  options: ContextualModalOption[];
  anchorPosition: 'top-right' | 'bottom-right' | 'bottom-left';
  accessibilityLabel: string;
}
```

**Dimensions:**
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Width: 240-300px [ESTIMATED]
- Shadow: `0 4px 16px rgba(0,0,0,0.4)` [ESTIMATED]
- Option row height: 44-52px [ESTIMATED]
- Option padding horizontal: 16px
- Icon-text gap: 12px [ESTIMATED]

**Typography:**
- Option label: 16px, weight 400, `#FFFFFF`
- Option subtitle: 13px, weight 400, `#9A9A9A`
- Section title: 13px, weight 400, `#6E6E6E`
- Destructive label: 16px, weight 400, `#E57373`

**Backdrop:** Transparent, tap-to-dismiss
**Animation:** Fade in 200ms, fade out 150ms

---

## 50. ConfirmationModal

**Description:** Centered modal dialog for destructive or confirmatory actions. Contains a title, optional description, and a row of text buttons.

**Screens used:**
- chat/22 Remove Member
- chat/28c Leave Without Saving
- chat/31 Leave Group
- chat/32 Delete Group

**Props Interface:**
```typescript
interface ConfirmationModalProps {
  visible: boolean;
  title: string;
  description?: string;
  cancelLabel?: string;
  confirmLabel: string;
  confirmVariant?: 'destructive' | 'neutral';
  isLoading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 28px [ESTIMATED]
- Padding: 24px
- Width: ~80% of screen, centered

**Typography:**
- Title: 22px, weight 600, `#FFFFFF`
- Description: 15px, weight 400, `#9A9A9A`
- Cancel: 16px, weight 500, `#FFFFFF`
- Confirm: 16px, weight 500, `#E57373` (destructive) or `#FFFFFF` (neutral)

**Buttons:** Right-aligned row, gap 24px, margin-top 24px

**Backdrop:** `#000000` at 50%

**Loading state:** spinner right of text, matches text color, ~2s duration

---

## 51. ReportModal

**Description:** Multi-step modal for reporting profiles or conversations. 3 steps: category, subcategory, text input + submit.

**Screens used:**
- chat/23-25 Report Profile
- chat/30-30c Report Conversation

**Props Interface:**
```typescript
interface ReportModalProps {
  visible: boolean;
  title: string;
  categories: ReportCategory[];
  onSubmit: (category: string, subcategory: string, details: string) => void;
  onClose: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Background: `#1A1A1A` [ESTIMATED]
- Border radius: 20px [ESTIMATED]
- Width: ~90% of screen, max height ~80%
- Padding: 24px

**Step 3 Submit Button:**
- Disabled: bg `#333333`, text `#6E6E6E`
- Enabled: bg `#FFFFFF`, text `#000000`
- Width 100%, height 48px, radius 24px

---

## 52. ProfileBottomSheet

**Description:** Bottom sheet displaying a user's profile with avatar, name, and username. "self" and "other" variants.

**Screens used:**
- chat/19 Profile BottomSheet Self
- chat/20 Profile BottomSheet Other

**Props Interface:**
```typescript
interface ProfileBottomSheetProps {
  visible: boolean;
  variant: 'self' | 'other';
  name: string;
  username: string;
  avatarInitials: string;
  avatarColor: string;
  onEditProfile?: () => void;
  onRemoveFromGroup?: () => void;
  onReport?: () => void;
  onClose: () => void;
  accessibilityLabel: string;
}
```

**Self Variant:** Drag handle + avatar (120px) + name + username + "Edit profile" outline button
**Other Variant:** Drag handle + avatar (120px) + name + username + separator + destructive rows

**Name:** 22px, weight 600, `#FFFFFF`, center
**Username:** 15px, weight 400, `#9A9A9A`, center

---

## 53. EditProfileBottomSheet

**Description:** Bottom sheet with avatar (camera overlay), name input, username input, save button, and cancel text.

**Screens used:**
- chat/21 Edit Profile BottomSheet

**Props Interface:**
```typescript
interface EditProfileBottomSheetProps {
  visible: boolean;
  name: string;
  username: string;
  avatarInitials: string;
  avatarColor: string;
  onSave: (name: string, username: string) => void;
  onCancel: () => void;
  accessibilityLabel: string;
}
```

**Camera Overlay on Avatar:**
- Container: 36px circle, bg `#1A1A1A`, border 2px solid `#2A2A2A`
- Icon: `Camera`, 18px, `#FFFFFF`
- Position: bottom-right of 120px avatar

**Inputs:** Reuse FloatingLabelInput component (border radius 12px)

**"Save profile" Button:** bg `#FFFFFF`, text `#000000`, 16px, weight 600, pill
**"Cancel" Text:** 16px, weight 500, `#FFFFFF`, centered

---

## 54. Popup (Toast Notification)

**Description:** Brief notification at the bottom of the screen. Auto-dismisses after 3 seconds. Has close "x" icon.

**Screens used:**
- chat/26b, chat/29, chat/36, various confirmations

**Props Interface:**
```typescript
interface PopupProps {
  visible: boolean;
  message: string;
  onClose: () => void;
  autoDismissMs?: number;  // default 3000
  accessibilityLabel: string;
}
```

**Dimensions:**
- Background: `#1A1A1A` [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Padding: 16px vertical, 20px horizontal
- Margin horizontal: 16px
- Position: bottom of screen, above input bar

**Layout:** Row (text + close icon)
- Text: 15px, weight 400, `#FFFFFF`, flex 1
- Close icon: `X`, 20px, `#9A9A9A`

**Animation:** Slide-up + fade-in 200ms, fade-out 150ms, auto-dismiss 3s

---

## 55. MemberRow

**Description:** A row displaying a group member's avatar, name, and username/role.

**Screens used:**
- chat/18 Members Screen

**Props Interface:**
```typescript
interface MemberRowProps {
  name: string;
  username: string;
  avatarInitials: string;
  avatarColor: string;
  onPress: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 72px [ESTIMATED]
- Padding horizontal: 16px
- Avatar: 48px circle, initials 18px weight 600
- Avatar-text gap: 16px
- Name: 16px, weight 500, `#FFFFFF`
- Username: 14px, weight 400, `#9A9A9A`

**Press feedback:** Background `#1A1A1A` [ESTIMATED]

---

## 56. ManageLinkActionRow

**Description:** An action row with icon + label. Supports loading state and destructive color variants.

**Screens used:**
- chat/26 Manage Link Screen

**Props Interface:**
```typescript
interface ManageLinkActionRowProps {
  icon: string;
  label: string;
  variant?: 'default' | 'destructive';
  isLoading?: boolean;
  onPress: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 56px [ESTIMATED], padding horizontal 24px
- Icon: 24px, gap 20px
- Default: icon `#9A9A9A`, text `#FFFFFF`
- Destructive: icon `#E57373`, text `#E57373`
- Loading: row bg `#2A2A2A` (default) or `#2A1A1A` (destructive), spinner 20px at far-right

---

## 57. FeedbackDropdown

**Description:** Custom dropdown selector in Share Feedback BottomSheet. Has floating label animation.

**Screens used:**
- chat/36 Share Feedback BottomSheet
- chat/36b Dropdown Expanded

**Props Interface:**
```typescript
interface FeedbackDropdownProps {
  label: string;
  placeholder: string;
  options: DropdownOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  accessibilityLabel: string;
}
```

**Collapsed:** Border 1px `#4A4A4A`, radius 12px, height 56px, caret down
**Focused:** Border `#FFFFFF`, label floats up, caret rotates up
**Options:** Below dropdown, 48px height per option, 16px weight 400 `#FFFFFF`, press bg `#3A3A3A`

---

## 58. GroupChatHeaderPill

**Description:** Combined pill container in GroupChat header holding SquarePen icon and user's avatar.

**Screens used:**
- chat/16 GroupChat Screen
- chat/17 GroupChat Options Modal (visible behind)

**Props Interface:**
```typescript
interface GroupChatHeaderPillProps {
  avatarInitials: string;
  avatarColor: string;
  onCompose: () => void;
  onAvatarPress: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Background: `#2F2F2F` [ESTIMATED]
- Border radius: 24px [ESTIMATED]
- Padding: 6px [ESTIMATED]
- SquarePen: 24px, `#FFFFFF`
- Avatar: 36px circle, user color, initials 14px weight 600
- Gap: 4px [ESTIMATED]

---

## 59. SubScreenHeader

**Description:** Reusable header for sub-screens navigated from GroupChat context. Circular back button + centered title.

**Screens used:**
- chat/18 Members Screen
- chat/26 Manage Link Screen
- chat/28 Customize ChatGPT Screen

**Props Interface:**
```typescript
interface SubScreenHeaderProps {
  title: string;
  onBack: () => void;
  accessibilityLabel?: string;
}
```

**Dimensions:**
- Height: 56px [ESTIMATED]
- Padding horizontal: 16px

**Back Button:** 48px circle, bg `#2F2F2F`, ArrowLeft 24px `#FFFFFF`

**Title:** 18px, weight 600 (SemiBold), `#FFFFFF`, centered

---

## 60. RespondDropdown

**Description:** Selector for "Respond" option in Customize ChatGPT screen. Shows current value with rotating chevron.

**Screens used:**
- chat/28 Customize ChatGPT Screen
- chat/28b Respond Modal

**Props Interface:**
```typescript
interface RespondDropdownProps {
  value: 'Automatically' | 'When mentioned';
  onChange: (value: 'Automatically' | 'When mentioned') => void;
  accessibilityLabel: string;
}
```

**Container:** bg `#2A2A2A`, radius 16px, padding 20px
**Popover:** bg `#2A2A2A`, radius 12px, 60% width, right-aligned, option 48px height

---

## 61. GroupChatBottomSheet

**Description:** Bottom sheet for initiating a group chat.

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

**Unique elements:**
- Title: "Use ChatGPT together", 24px Bold `#FFFFFF`
- "Start group chat" button: white pill, auto-width, centered
- Profile row: black bg, 72px height, avatar + name + subtitle + edit icon, rounded 16px

---

## 62. ModelSelectorModal

**Description:** Floating modal for selecting AI model.

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

**Container:** bg `#2A2A2A`, radius 16px, width ~70%, shadow `0 4px 16px rgba(0,0,0,0.4)`
**Title:** "GPT-5.2", 14px weight 400, `#6E6E6E`
**Options:** ~60px height, check icon 20px on selected, title 17px Medium, subtitle 14px Regular `#9A9A9A`

---

## Cross-Screen Component Usage Summary

### Most Reused Components (by screen count)
1. **UserAvatar** -- sidebar, settings, chat, GroupChat, profile sheets (5+ contexts, 5 size variants)
2. **SettingsRow** -- every settings screen (11 layout variants)
3. **FeatureChip** -- 10+ variants across all chat modes
4. **ActionBar** -- every chat response screen (unauth/auth x normal/sources)
5. **ChatHeader** -- every chat screen (6 distinct variants)
6. **BackButton/SettingsHeader** -- all navigation screens
7. **PrimaryButton** -- auth, settings, chat, GroupChat

### Shared Patterns
1. **BottomSheet container:** `#212121` bg, 20px top radius, drag handle 36x4px `#4A4A4A`. Used by: Attachments, Sources, Profile, EditProfile, GroupChat, ShareFeedback.
2. **Floating modal:** `#2A2A2A` bg, 16px radius, shadow. Used by: ContextMenu, ContextualModal, ModelSelector, RespondDropdown.
3. **AlertDialog modal:** `#424242` bg, 28px radius, 85% width, backdrop dim. Used by: SettingsModal, Language, Appearance, Logout.
4. **Loading pattern in buttons:** Spinner right of text, text stays centered, spinner color matches text.
5. **Destructive color:** `#E57373` consistently for all red text and icons everywhere.
6. **Press feedback:** 0.85 opacity for solid buttons, 0.7 for icons/links, bg tint for list items.
7. **`#2F2F2F` elevated surface:** User bubble, chat input, header buttons, search input, sidebar active item, select-text header, sub-screen back buttons.

### Component Count by Feature
| Feature | Components |
|---|---|
| Auth / Sidebar | 18 (PrimaryButton through OpenAILogo) |
| Settings | 12 (SettingsHeader through DescriptionText) |
| Chat (shared) | 16 (ChatHeader through SourcesBottomSheet) |
| GroupChat / Action | 14 (ContextualModal through ModelSelectorModal) |
| **Total** | **62** (after deduplication) |
