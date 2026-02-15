# Components Inventory 5 -- GroupChat & Action Bar Features

New reusable components discovered from screenshots 13, 16-36b. Only components NOT already in components-inventory.md are listed here.

---

## 19. ActionBar

**Description:** Row of icon buttons displayed below an AI response. Has unauth (3 icons) and auth (6 icons) variants. May include a "Sources" section on the right for search-mode responses.

**Screens used:**
- chat/07 unauth (3 icons)
- chat/07 auth, chat/08 auth (6 icons)
- chat/08 auth (with Sources section)

**Props Interface:**
```typescript
interface ActionBarProps {
  variant: 'unauth' | 'auth';
  hasSource?: boolean;
  sourceIcons?: string[];  // favicon URLs for source icons
  sourceCount?: number;
  onCopy: () => void;
  onThumbsUp?: () => void;     // auth only
  onThumbsDown?: () => void;   // auth only
  onSpeaker: () => void;
  onShare?: () => void;        // auth only
  onEllipsis?: () => void;     // auth only
  onRegenerate?: () => void;   // unauth only
  onSourcesPress?: () => void;
  thumbsState?: 'none' | 'up' | 'down';  // tracks which thumb is active
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 40px [ESTIMATED]
- Padding horizontal: 16px
- Icon size: 20px [ESTIMATED]
- Icon container: 32px [ESTIMATED]
- Gap between icons: 8px [ESTIMATED]

**Icon Color:**
- Default: `#9A9A9A` [ESTIMATED]
- Active (thumbs filled): `#FFFFFF`

**Animation:**
- Appears with fade-in, 300ms, `easing-standard`

---

## 20. ContextualModal

**Description:** A floating modal that appears near a triggering element (not centered on screen). Used for contextual menus like Ellipsis, Retry, and Switch Model modals. Supports option rows with icons, text, subtitles, and chevrons.

**Screens used:**
- chat/33 Ellipsis Modal
- chat/34 Retry Modal
- chat/35 Switch Model Modal
- chat/35b Switch Model Expanded
- chat/17 GroupChat Options Modal

**Props Interface:**
```typescript
interface ContextualModalOption {
  icon?: string;           // lucide icon name
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
  title?: string;           // optional header text (e.g., "New group chat")
  headerAction?: {          // collapsible header (e.g., "Retry" + chevron-down)
    label: string;
    onPress: () => void;
  };
  sectionTitle?: string;    // e.g., "GPT-5.2"
  options: ContextualModalOption[];
  anchorPosition: 'top-right' | 'bottom-right' | 'bottom-left';
  accessibilityLabel: string;
}
```

**Dimensions:**
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Width: 240-300px [ESTIMATED] (varies by content)
- Shadow: `0 4px 16px rgba(0,0,0,0.4)` [ESTIMATED]
- Option row height: 44-52px [ESTIMATED]
- Option padding horizontal: 16px
- Icon-text gap: 12px [ESTIMATED]

**Typography:**
- Header text: 16px, weight 500, `#FFFFFF`
- Option label: 16px, weight 400, `#FFFFFF`
- Option subtitle: 13px, weight 400, `#9A9A9A`
- Section title: 13px, weight 400, `#6E6E6E`
- Destructive label: 16px, weight 400, `#E57373`

**Backdrop:** Transparent (no overlay), tap-to-dismiss

**Animation:**
- Entry: Fade in, 200ms [ESTIMATED]
- Exit: Fade out, 150ms [ESTIMATED]

---

## 21. ConfirmationModal

**Description:** Centered modal dialog for destructive or confirmatory actions. Contains a title, optional description, and a row of text buttons (Cancel + Action). The action button can be destructive (red) or neutral (white).

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
  cancelLabel?: string;       // default "Cancel"
  confirmLabel: string;       // e.g., "Remove", "Leave", "Delete", "OK"
  confirmVariant?: 'destructive' | 'neutral';  // default 'destructive'
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
- Width: ~80% of screen
- Centered vertically and horizontally

**Typography:**
- Title: 22px, weight 600, `#FFFFFF`
- Description: 15px, weight 400, `#9A9A9A`
- Cancel button: 16px, weight 500, `#FFFFFF`
- Confirm button: 16px, weight 500, `#E57373` (destructive) or `#FFFFFF` (neutral)

**Button Row:**
- Layout: Row, right-aligned
- Gap: 24px [ESTIMATED]
- Margin top: 24px

**Backdrop:** `#000000` at 50% opacity

**Loading State:**
- Confirm button text color dims
- Loading spinner appears to the right of text
- Spinner color matches text color (red for destructive, white for neutral)
- Duration: ~2s

**Animation:**
- Entry: Fade in
- Exit: Fade out

---

## 22. ReportModal

**Description:** Multi-step modal for reporting profiles or conversations. 3 steps: category selection, subcategory selection, text input + submit. Reusable across Report Profile and Report Conversation contexts.

**Screens used:**
- chat/23-25 Report Profile
- chat/30-30c Report Conversation

**Props Interface:**
```typescript
interface ReportCategory {
  label: string;
  subcategories?: ReportSubcategory[];
}

interface ReportSubcategory {
  label: string;
}

interface ReportModalProps {
  visible: boolean;
  title: string;              // "Report Profile" or "Report Conversation"
  subtitle: string;           // Step 1 heading
  description?: string;       // Step 1 description (optional)
  categories: ReportCategory[];
  onSubmit: (category: string, subcategory: string, details: string) => void;
  onClose: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Background: `#1A1A1A` [ESTIMATED]
- Border radius: 20px [ESTIMATED]
- Padding: 24px
- Width: ~90% of screen
- Max height: ~80% of screen (scrollable)

**Typography:**
- Title: 20px, weight 700, `#FFFFFF`, center
- Subtitle heading: 18px, weight 700, `#FFFFFF`
- Description: 14px, weight 400, `#9A9A9A`
- Category/subcategory row: 16px, weight 400, `#FFFFFF`
- Chevron: 20px, `#9A9A9A`

**Step 3 Submit Button:**
- Disabled: bg `#333333`, text `#6E6E6E`
- Enabled (1+ chars): bg `#FFFFFF`, text `#000000`
- Width: 100%, height 48px, radius 24px

**Back Button (Steps 2-3):**
- lucide `arrow-left`, 24px, `#FFFFFF`
- Top-left, inline with title

**Animation:**
- Steps transition with fade in/out
- Modal remains in place during transitions

---

## 23. ProfileBottomSheet

**Description:** Bottom sheet displaying a user's profile with avatar, name, and username. Has "self" and "other" variants with different action options.

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
  onEditProfile?: () => void;     // self only
  onRemoveFromGroup?: () => void; // other only
  onReport?: () => void;          // other only
  onClose: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Background: `#2A2A2A` [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Height: ~40% of screen (self) or ~50% of screen (other)

**Self Variant:**
- Drag handle + large avatar (120px) + name + username + "Edit profile" outline button

**Other Variant:**
- Drag handle + large avatar (120px) + name + username + separator + "Remove from group" (red) + "Report" (red)

**Avatar:**
- Size: 120px [ESTIMATED]
- Border radius: 60px
- Initials: 40px, weight 600, `#FFFFFF`

**Name:** 22px, weight 600, `#FFFFFF`, center
**Username:** 15px, weight 400, `#9A9A9A`, center

**Edit Profile Button (self):**
- Background: transparent
- Border: 1px solid `#4A4A4A` [ESTIMATED]
- Text: 15px, weight 500, `#FFFFFF`
- Padding: 10px vertical, 24px horizontal
- Border radius: 20px [ESTIMATED]
- Width: auto, centered

**Destructive Rows (other):**
- Icon + text, both `#E57373`
- Height: 48px, padding horizontal 24px
- Icon size: 24px, gap 16px

**Backdrop:** `#000000` at 50% opacity

**Animation:**
- Entry: Slide-up
- Exit: Slide-down

---

## 24. EditProfileBottomSheet

**Description:** Bottom sheet with avatar (camera overlay), name input, username input, description text, save button, and cancel text. Used for editing the current user's profile.

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

**Dimensions:**
- Background: `#2A2A2A` [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Height: ~60% of screen

**Camera Overlay on Avatar:**
- Container: 36px circle, bg `#1A1A1A`, border 2px solid `#2A2A2A`
- Icon: lucide `camera`, 18px, `#FFFFFF`
- Position: bottom-right of 120px avatar

**Inputs:** Reuse FloatingLabelInput component
- "Name" and "Username" fields
- Border: 1px solid `#4A4A4A`, radius 12px

**"Save profile" Button:**
- bg `#FFFFFF`, text `#000000`, 16px, weight 600
- Pill shape, width auto, centered

**"Cancel" Text:**
- 16px, weight 500, `#FFFFFF`, centered
- No background, no border

---

## 25. Popup (Toast Notification)

**Description:** Brief notification that appears at the bottom of the screen above the input bar. Auto-dismisses after 3 seconds. Has a close "x" icon for manual dismissal. Used throughout the app for feedback messages.

**Screens used:**
- chat/26b "Invite link copied"
- chat/29 "Notifications muted" / "Notifications unmuted"
- chat/36 post-feedback "Thank you for your feedback!"
- (Various other confirmations)

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
- Padding vertical: 16px [ESTIMATED]
- Padding horizontal: 20px [ESTIMATED]
- Margin horizontal: 16px (from screen edges)
- Position: bottom of screen, above input bar (or above safe area if no input)

**Layout:** Row (text + "x" close icon)
- Text: 15px, weight 400, `#FFFFFF`, flex 1
- Close icon: lucide `x`, 20px, `#9A9A9A`

**Animation:**
- Entry: Slide-up + fade-in, 200ms [ESTIMATED]
- Exit: Fade-out, 150ms [ESTIMATED]
- Auto-dismiss after 3s

---

## 26. MemberRow

**Description:** A row displaying a group member's avatar, name, and username/role. Used in the Members Screen list.

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
- Avatar: 48px circle
- Avatar-text gap: 16px

**Typography:**
- Name: 16px, weight 500, `#FFFFFF`
- Username: 14px, weight 400, `#9A9A9A`
- Avatar initials: 18px, weight 600, `#FFFFFF`

**Press Feedback:**
- Background: `#1A1A1A` [ESTIMATED]

---

## 27. ManageLinkActionRow

**Description:** An action row used in the Manage Link screen, with icon + label. Supports loading state with spinner appearing at the far right. Has standard and destructive color variants.

**Screens used:**
- chat/26 Manage Link Screen (Copy, Share, Reset, Delete)

**Props Interface:**
```typescript
interface ManageLinkActionRowProps {
  icon: string;              // lucide icon name
  label: string;
  variant?: 'default' | 'destructive';
  isLoading?: boolean;
  onPress: () => void;
  accessibilityLabel: string;
}
```

**Dimensions:**
- Height: 56px [ESTIMATED]
- Padding horizontal: 24px
- Icon size: 24px
- Icon-text gap: 20px

**Colors:**
- Default: icon `#9A9A9A`, text `#FFFFFF`
- Destructive: icon `#E57373`, text `#E57373`

**Loading State:**
- Row background highlights: `#2A2A2A` (default) or `#2A1A1A` (destructive)
- Spinner: 20px, at far-right
- Spinner color: `#FFFFFF` (default) or `#E57373` (destructive)

---

## 28. FeedbackDropdown

**Description:** Custom dropdown selector used in the Share Feedback BottomSheet. Has a floating label animation (like auth inputs), expands to show options below, and supports the triangle/caret indicator.

**Screens used:**
- chat/36 Share Feedback BottomSheet
- chat/36b Dropdown Expanded

**Props Interface:**
```typescript
interface DropdownOption {
  label: string;
  hasChevron?: boolean;  // e.g., "Safety or legal concern" has chevron-right
}

interface FeedbackDropdownProps {
  label: string;                 // "Issue"
  placeholder: string;           // "Select an issue"
  options: DropdownOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  accessibilityLabel: string;
}
```

**Collapsed State:**
- Border: 1px solid `#4A4A4A` [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Height: 56px [ESTIMATED]
- Placeholder: "Issue" centered-left, 16px, `#9A9A9A`
- Caret: triangle pointing down, 16px, `#9A9A9A`, right side

**Expanded/Focused State:**
- Border color: `#FFFFFF`
- "Issue" floats to top-left (same animation as FloatingLabelInput)
- Floating label: 12px, `#FFFFFF`
- Placeholder changes to: "Select an issue", 16px, `#9A9A9A`
- Caret rotates to point up

**Options List:**
- Appears directly below the dropdown field
- Each option: height 48px, padding-h 24px
- Text: 16px, weight 400, `#FFFFFF`
- "Safety or legal concern" has chevron-right on far right
- Press feedback: bg `#3A3A3A`

**Selected State:**
- Dropdown collapses
- Selected text appears as the value
- Border returns to `#4A4A4A`
- Caret points down

---

## 29. GroupChatHeaderPill

**Description:** Combined pill container in the GroupChat header that holds the SquarePen icon and the user's avatar. This is a single rounded container with two interactive elements inside.

**Screens used:**
- chat/16 GroupChat Screen
- chat/17 GroupChat Options Modal (visible behind)

**Props Interface:**
```typescript
interface GroupChatHeaderPillProps {
  avatarInitials: string;
  avatarColor: string;
  onCompose: () => void;     // SquarePen tap
  onAvatarPress: () => void; // Avatar tap -> opens Options Modal
  accessibilityLabel: string;
}
```

**Dimensions:**
- Container background: `#2F2F2F` [ESTIMATED]
- Border radius: 24px [ESTIMATED]
- Padding: 6px [ESTIMATED]
- SquarePen icon: 24px, `#FFFFFF`
- Avatar: 36px circle, user color, initials 14px weight 600 `#FFFFFF`
- Gap between SquarePen and Avatar: 4px [ESTIMATED]

---

## 30. SubScreenHeader

**Description:** Reusable header for sub-screens that navigate from the GroupChat context. Contains a circular back button and a centered title. Used across Members, Manage Link, and Customize ChatGPT screens.

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

**Back Button:**
- Container: 48px circle
- Background: `#2F2F2F` [ESTIMATED]
- Icon: lucide `arrow-left`, 24px, `#FFFFFF`

**Title:**
- Font size: 18px
- Font weight: 600 (SemiBold)
- Color: `#FFFFFF`
- Centered horizontally (center of screen, not center of remaining space)

---

## 31. RespondDropdown

**Description:** A selector for the "Respond" option in Customize ChatGPT. Shows the current value with a chevron that rotates when tapped. Opens a small popover modal with checkmark-selectable options.

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

**Container:**
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Padding: 20px [ESTIMATED]

**Label:** "Respond", 16px, weight 500, `#FFFFFF`
**Value:** Current selection, 14px, weight 400, `#9A9A9A`
**Chevron:** lucide `chevron-down`, 24px, `#9A9A9A`
- Rotates to `chevron-up` when open

**Dropdown Popover:**
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Shadow: `0 4px 16px rgba(0,0,0,0.3)` [ESTIMATED]
- Width: ~60% of screen, right-aligned
- Options:
  - "Automatically" (with check if selected)
  - "When mentioned"
  - Height per option: 48px [ESTIMATED]
  - Text: 16px, weight 400, `#FFFFFF`
  - Check: lucide `check`, 20px, `#FFFFFF`

---

## Cross-Component Consistency Notes

1. **Destructive color** (`#E57373`) is used consistently for all red text and icons across all modals and action rows (Delete, Leave, Remove, Report).
2. **Modal backgrounds** are consistently `#2A2A2A` for standard modals and `#1A1A1A` for Report modals. The slight difference should be preserved.
3. **BottomSheet drag handles** are consistent: 36px wide, 4px tall, `#666666`, centered, 12px from top.
4. **Avatar sizes** follow a clear hierarchy: 120px (profile), 48px (member row), 40px (bottomsheet row), 36px (header), 32px (sidebar).
5. **Loading indicators in buttons** follow a consistent pattern: spinner appears to the right of text, text does not shift, spinner color matches text color (white for normal, red for destructive, gray for disabled states).
6. **Floating label inputs** reuse the same component across Auth login, Rename Group modal, and Edit Profile BottomSheet. Border and animation behavior are identical.
7. **Confirmation modals** all share the same layout: title, optional description, right-aligned button row with Cancel + Action. Only the title, description, and action button text/color vary.
8. **Sub-screen headers** share the same layout: 48px circular back button with `#2F2F2F` background, centered title at 18px semibold.
9. **Popup/toast notifications** are a single reusable component -- only the message text varies.
10. **Action Bar icon size** (20px) is smaller than the standard icon size (24px) used in headers and menus. This is intentional for the compact action bar layout.
