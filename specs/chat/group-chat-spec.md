# GroupChat Feature -- Full UI Specification

Covers screenshots 13 (entry point) and 16 through 32. Auth state: authenticated only.

---

## Table of Contents

1. GroupChat BottomSheet (chat/13)
2. GroupChat Screen (chat/16)
3. GroupChat Options Modal (chat/17)
4. Members Screen (chat/18)
5. Profile BottomSheet -- Self (chat/19)
6. Profile BottomSheet -- Other (chat/20)
7. Edit Profile BottomSheet (chat/21)
8. Remove Member Modal (chat/22)
9. Report Profile Modal -- 3 Steps (chat/23, 24, 25)
10. Manage Link Screen (chat/26, 26b, 26c, 26d)
11. Rename Group Modal (chat/27)
12. Customize ChatGPT Screen (chat/28, 28b, 28c, 28d)
13. Mute Notifications Popup (chat/29)
14. Report Conversation Modal -- 3 Steps (chat/30, 30b, 30c)
15. Leave Group Modal (chat/31)
16. Delete Group Modal (chat/32)

---

## 1. GroupChat BottomSheet (chat/13)

**File:** `references/chat/13_groupchat-bottomsheet.jpg`
**Access:** Tap "Add Person" icon (top-right) from ChatScreen Auth (chat/01 auth)
**Auth state:** Authenticated

### Layout Structure (top to bottom)

```
BottomSheet Container
  Drag Handle
  Title: "Use ChatGPT together"
  Subtitle description
  "Start group chat" Button
  Profile Row (user info + edit icon)
```

### Drag Handle
- Width: 36px [ESTIMATED]
- Height: 4px [ESTIMATED]
- Border radius: 2px
- Color: `#666666` [ESTIMATED]
- Margin top: 12px
- Centered horizontally

### BottomSheet Container
- Background: `#212121` [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Padding horizontal: 24px
- Appears from bottom ~45% of screen height

### Title: "Use ChatGPT together"
- Font size: 24px [ESTIMATED]
- Font weight: 700 (Bold)
- Color: `#FFFFFF`
- Text align: center
- Margin top: 24px [ESTIMATED]

### Subtitle
- Text: "Add people to your chats to plan, share ideas, and get creative."
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: `#9A9A9A` [ESTIMATED]
- Text align: center
- Line height: 22px [ESTIMATED]
- Margin top: 12px [ESTIMATED]

### "Start group chat" Button
- Background: `#FFFFFF`
- Text color: `#000000`
- Font size: 16px
- Font weight: 600 (SemiBold)
- Padding vertical: 14px [ESTIMATED]
- Padding horizontal: 28px [ESTIMATED]
- Border radius: 26px (pill)
- Align: center
- Margin top: 24px [ESTIMATED]
- Width: auto (fit-content), not full-width

#### Loading State
- Text color changes to `#9A9A9A` [ESTIMATED]
- Loading indicator (spinner) appears to the right of text
- Spinner color: `#9A9A9A` [ESTIMATED]
- Spinner size: 16px [ESTIMATED]
- Gap between text and spinner: 8px
- Button width expands slightly to accommodate spinner
- Duration: 3 seconds hardcoded

### Profile Row
- Background: `#000000`
- Border radius: 16px [ESTIMATED]
- Padding: 16px [ESTIMATED]
- Margin top: 24px [ESTIMATED]
- Full width
- Layout: Row (avatar + text block + edit icon)

#### Avatar in Profile Row
- Size: 40px [ESTIMATED]
- Border radius: 20px (circular)
- Background: `#7C3AED` (purple, user-specific)
- Initials: "ML", font 16px, weight 600, color `#FFFFFF`

#### Text Block
- Name: "Mateo Lorenzo", font 16px, weight 500, color `#FFFFFF`
- Subtitle: "Choose a username and photo", font 14px, weight 400, color `#9A9A9A`
- Gap between name and subtitle: 2px [ESTIMATED]
- Margin left: 12px

#### Edit Icon (right side)
- Icon: Pencil (lucide `pencil`)
- Size: 20px [ESTIMATED]
- Color: `#9A9A9A` [ESTIMATED]
- Aligned: center-right

### Animations
- Entry: Slide-up from bottom with backdrop
- Exit: Slide-down
- Backdrop: `#000000` at 50% opacity
- Duration: 300ms

### Interactions
- "Start group chat" -> Loading 3s -> Navigate to GroupChat Screen (chat/16)
- Profile Row -> Opens Edit Profile BottomSheet (chat/21)
- Backdrop tap -> Close

---

## 2. GroupChat Screen (chat/16)

**File:** `references/chat/16_groupchat-screen.jpg`
**Access:** After 3s loading from GroupChat BottomSheet (chat/13)
**Auth state:** Authenticated

### Layout Structure (top to bottom)

```
Screen (bg: #000000)
  Header Row
    Sidebar Button (left)
    [spacer]
    SquarePen Icon
    Avatar Button (right)
  Content Area (centered)
    System Message: "[Name] created the chat."
    Memory Notice: "Your personal ChatGPT memory is never used in group chats."
    "Customize ChatGPT" Button
    "Invite with link" Button
  Input Bar
    "+" Button
    TextInput ("Ask anything")
    Mic Button
```

### Header Row
- Padding horizontal: 16px [ESTIMATED]
- Padding top: 8px below safe area [ESTIMATED]
- Height: 48px [ESTIMATED]
- Align items: center

#### Sidebar Button (left)
- Icon: Minus (lucide `minus`) -- same as regular chat header sidebar icon
- Container: 48px x 48px [ESTIMATED]
- Background: `#2F2F2F` [ESTIMATED]
- Border radius: 24px (circular)
- Icon size: 24px
- Icon color: `#FFFFFF`

#### SquarePen Icon (right area)
- Icon: lucide `square-pen`
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`
- Container: 40px x 40px [ESTIMATED]
- Background: transparent
- Positioned to the left of the Avatar button

#### Avatar Button (far right)
- Size: 36px [ESTIMATED]
- Border radius: 18px (circular)
- Background: `#7C3AED` (purple, user-specific)
- Initials: "ML", font 14px, weight 600, color `#FFFFFF`
- This is a combined pill shape with the SquarePen button:
  - Container background: `#2F2F2F` [ESTIMATED]
  - Border radius: 24px [ESTIMATED]
  - The SquarePen + Avatar sit inside a single pill container
  - Padding: 6px [ESTIMATED]
  - Gap between SquarePen and Avatar: 4px [ESTIMATED]

### Content Area (centered vertically in available space, bottom-aligned)
- All text centered horizontally
- Positioned above the input bar area

#### System Message
- Text: "**Mateo Lorenzo** created the chat."
- "Mateo Lorenzo" is bold (weight 700), rest is regular (weight 400)
- Font size: 15px [ESTIMATED]
- Color: `#FFFFFF`
- Text align: center

#### Memory Notice
- Text: "Your personal ChatGPT memory is never used in group chats."
- Font size: 14px [ESTIMATED]
- Font weight: 400
- Color: `#9A9A9A` [ESTIMATED]
- Text align: center
- Margin top: 12px [ESTIMATED]

#### "Customize ChatGPT" Button
- Background: `#2F2F2F` [ESTIMATED]
- Text: "Customize ChatGPT"
- Font size: 15px [ESTIMATED]
- Font weight: 500
- Color: `#B0C4DE` [ESTIMATED] -- light blue tint
- Border radius: 20px [ESTIMATED]
- Padding vertical: 10px [ESTIMATED]
- Padding horizontal: 20px [ESTIMATED]
- Margin top: 16px [ESTIMATED]
- Width: auto (fit-content), centered

#### "Invite with link" Button
- Background: `#2F2F2F` [ESTIMATED]
- Text: "Invite with link"
- Font size: 15px [ESTIMATED]
- Font weight: 500
- Color: `#B0C4DE` [ESTIMATED] -- light blue tint
- Border radius: 20px [ESTIMATED]
- Padding vertical: 10px [ESTIMATED]
- Padding horizontal: 20px [ESTIMATED]
- Margin top: 12px [ESTIMATED]
- Width: auto (fit-content), centered

### Input Bar
- Same component as ChatScreen Auth input bar
- Background: `#2F2F2F` [ESTIMATED]
- Border radius: 24px [ESTIMATED]
- Padding horizontal: 12px
- Height: 48px [ESTIMATED]
- Margin horizontal: 16px [ESTIMATED]
- Margin bottom: 8px above safe area [ESTIMATED]

#### "+" Button
- Icon: lucide `plus`
- Size: 24px
- Color: `#FFFFFF`
- Container: 36px circular [ESTIMATED]
- Background: `#4A4A4A` [ESTIMATED]

#### TextInput
- Placeholder: "Ask anything"
- Placeholder color: `#9A9A9A` [ESTIMATED]
- Font size: 16px
- Flex: 1

#### Mic Button
- Icon: lucide `mic`
- Size: 24px
- Color: `#FFFFFF`
- Container: 36px circular [ESTIMATED]

### Differences from Normal ChatScreen
- No "ChatGPT" title button
- No Talk button (only Mic)
- Avatar replaces the header right icons
- SquarePen navigates to new empty ChatScreen (not compose)
- "+" button Attachments BottomSheet only has "Create image" + "Web search"

---

## 3. GroupChat Options Modal (chat/17)

**File:** `references/chat/17_groupchat-options-modal.jpg`
**Access:** Tap Avatar (top-right) in GroupChat Screen
**Animation:** Fade in / Fade out

### Layout Structure

```
Modal Container (anchored top-right, below avatar)
  Title: "New group chat"
  Separator
  Option Row: View members
  Option Row: Add members
  Option Row: Manage link
  Option Row: Rename group
  Option Row: Customize ChatGPT
  Option Row: Mute notifications
  Option Row: Report (red)
  Option Row: Leave group (red)
  Option Row: Delete group (red)
```

### Modal Container
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Padding vertical: 16px [ESTIMATED]
- Padding horizontal: 0px (padding is per-row)
- Width: ~280px [ESTIMATED]
- Position: anchored below Avatar, right-aligned
- Shadow: subtle dark shadow `0 4px 16px rgba(0,0,0,0.4)` [ESTIMATED]

### Title
- Text: "New group chat"
- Font size: 14px [ESTIMATED]
- Font weight: 400
- Color: `#9A9A9A` [ESTIMATED]
- Padding horizontal: 20px [ESTIMATED]
- Padding bottom: 12px [ESTIMATED]

### Option Rows (standard)
- Height: 48px [ESTIMATED]
- Padding horizontal: 20px [ESTIMATED]
- Layout: Row (icon + text)
- Gap between icon and text: 16px [ESTIMATED]

#### Icon
- Size: 24px
- Color: `#9A9A9A` [ESTIMATED]

#### Text
- Font size: 16px
- Font weight: 400
- Color: `#FFFFFF`

### Option Rows (destructive -- red)
- Same layout as standard
- Icon color: `#E57373` [ESTIMATED] -- muted red
- Text color: `#E57373` [ESTIMATED]

### Icon Mapping (lucide icons)
1. **View members** -- `users` (people group icon)
2. **Add members** -- `user-plus`
3. **Manage link** -- `link`
4. **Rename group** -- `pencil`
5. **Customize ChatGPT** -- `settings`
6. **Mute notifications** -- `bell-off`
7. **Report** -- `flag`
8. **Leave group** -- `log-out`
9. **Delete group** -- `trash-2`

### Press Feedback
- Row background: `#3A3A3A` [ESTIMATED] on press
- Opacity: 0.85 [ESTIMATED]

### Backdrop
- Transparent (no visible overlay)
- Tap dismisses modal

---

## 4. Members Screen (chat/18)

**File:** `references/chat/18_members-screen.jpg`
**Access:** "View members" from Options Modal
**Animation:** Slide from right

### Layout Structure

```
Screen (bg: #000000)
  Header Row
    Back Button (left)
    Title: "Hello World" (group name, centered)
  Member List
    MemberRow (avatar + name + username)
    MemberRow (avatar + name + username)
    ...
```

### Header Row
- Height: 56px [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Padding top: 8px below safe area

#### Back Button
- Icon: lucide `arrow-left`
- Size: 24px
- Color: `#FFFFFF`
- Container: 48px x 48px [ESTIMATED]
- Background: `#2F2F2F` [ESTIMATED]
- Border radius: 24px (circular)

#### Title
- Text: Group name (e.g., "Hello World")
- Font size: 18px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: `#FFFFFF`
- Centered horizontally

### Member Row
- Height: 72px [ESTIMATED]
- Padding horizontal: 16px [ESTIMATED]
- Layout: Row (avatar + text block)
- Gap: 16px [ESTIMATED]

#### Avatar
- Size: 48px [ESTIMATED]
- Border radius: 24px (circular)
- Background: user-specific color
  - "ML" -> `#7C3AED` (purple)
  - "PL" -> `#607D8B` (blue-gray)
- Initials: font 18px [ESTIMATED], weight 600, color `#FFFFFF`

#### Text Block
- Name: font 16px, weight 500, color `#FFFFFF`
- Username: font 14px, weight 400, color `#9A9A9A`
- Gap between name and username: 2px [ESTIMATED]

### Tap Behavior
- Tap on self -> Profile BottomSheet Self (chat/19)
- Tap on other -> Profile BottomSheet Other (chat/20)

---

## 5. Profile BottomSheet -- Self (chat/19)

**File:** `references/chat/19_profile-bottomsheet-self.jpg`
**Access:** Tap own name in Members Screen

### Layout Structure

```
BottomSheet Container
  Drag Handle
  Large Avatar (centered)
  Name
  Username
  "Edit profile" Button
```

### BottomSheet Container
- Background: `#2A2A2A` [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Height: ~40% of screen [ESTIMATED]
- Backdrop: `#000000` at 50% opacity

### Drag Handle
- Width: 36px [ESTIMATED]
- Height: 4px
- Border radius: 2px
- Color: `#666666` [ESTIMATED]
- Margin top: 12px
- Centered

### Large Avatar
- Size: 120px [ESTIMATED]
- Border radius: 60px (circular)
- Background: `#7C3AED` (user color)
- Initials: "ML", font 40px [ESTIMATED], weight 600, color `#FFFFFF`
- Margin top: 24px [ESTIMATED]
- Centered

### Name
- Text: "Mateo Lorenzo"
- Font size: 22px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: `#FFFFFF`
- Text align: center
- Margin top: 16px [ESTIMATED]

### Username
- Text: "mateolorenzo.dev"
- Font size: 15px [ESTIMATED]
- Font weight: 400
- Color: `#9A9A9A`
- Text align: center
- Margin top: 4px [ESTIMATED]

### "Edit profile" Button
- Background: transparent
- Border: 1px solid `#4A4A4A` [ESTIMATED]
- Text: "Edit profile"
- Font size: 15px [ESTIMATED]
- Font weight: 500
- Color: `#FFFFFF`
- Padding vertical: 10px [ESTIMATED]
- Padding horizontal: 24px [ESTIMATED]
- Border radius: 20px [ESTIMATED]
- Width: auto (fit-content), centered
- Margin top: 20px [ESTIMATED]

---

## 6. Profile BottomSheet -- Other (chat/20)

**File:** `references/chat/20_profile-bottomsheet-other.jpg`
**Access:** Tap other member in Members Screen

### Layout Structure

```
BottomSheet Container
  Drag Handle
  Large Avatar (centered)
  Name
  Username
  Separator
  Action Row: "Remove from group" (red)
  Action Row: "Report" (red)
```

### Same as Self Profile except:
- No "Edit profile" button
- Avatar uses the other user's color (`#607D8B` for "PL")
- Below the name/username section, there is a separator + action rows

### Separator
- Height: 1px
- Color: `#3A3A3A` [ESTIMATED]
- Full width
- Margin top: 20px [ESTIMATED]

### Action Row: "Remove from group"
- Layout: Row (icon + text)
- Icon: lucide `log-out`
- Icon size: 24px
- Icon color: `#E57373` [ESTIMATED]
- Text: "Remove from group"
- Font size: 16px
- Font weight: 400
- Color: `#E57373` [ESTIMATED]
- Gap: 16px
- Padding horizontal: 24px [ESTIMATED]
- Height: 48px [ESTIMATED]
- Margin top: 8px [ESTIMATED]

### Action Row: "Report"
- Layout: Row (icon + text)
- Icon: lucide `flag`
- Icon size: 24px
- Icon color: `#E57373` [ESTIMATED]
- Text: "Report"
- Font size: 16px
- Font weight: 400
- Color: `#E57373` [ESTIMATED]
- Gap: 16px
- Padding horizontal: 24px [ESTIMATED]
- Height: 48px [ESTIMATED]

---

## 7. Edit Profile BottomSheet (chat/21)

**File:** `references/chat/21_edit-profile-bottomsheet.jpg`
**Access:** "Edit profile" from Profile BottomSheet Self

### Layout Structure

```
BottomSheet Container (taller, ~60% screen)
  Drag Handle
  Large Avatar with Camera Overlay
  FloatingLabelInput: "Name"
  FloatingLabelInput: "Username"
  Description Text
  "Save profile" Button
  "Cancel" Text Button
```

### BottomSheet Container
- Background: `#2A2A2A` [ESTIMATED]
- Border radius (top): 20px [ESTIMATED]
- Height: ~60% of screen
- Backdrop: `#000000` at 50% opacity

### Large Avatar with Camera Overlay
- Avatar: 120px [ESTIMATED], circular, user color
- Camera icon overlay:
  - Position: bottom-right of avatar
  - Container: 36px [ESTIMATED] circular
  - Background: `#1A1A1A` [ESTIMATED]
  - Border: 2px solid `#2A2A2A` [ESTIMATED]
  - Icon: lucide `camera`
  - Icon size: 18px [ESTIMATED]
  - Icon color: `#FFFFFF`

### FloatingLabelInput: "Name"
- Uses the same FloatingLabelInput component from auth
- Border: 1px solid `#4A4A4A` [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Background: transparent (inherits bottomsheet bg)
- Floating label: "Name", font 12px, color `#9A9A9A`
- Value: "Mateo Lorenzo", font 16px, weight 400, color `#FFFFFF`
- Height: 56px [ESTIMATED]
- Margin top: 24px [ESTIMATED]
- Margin horizontal: 24px [ESTIMATED]

### FloatingLabelInput: "Username"
- Same styling as Name input
- Floating label: "Username"
- Value: "mateolorenzo.dev"
- Margin top: 16px [ESTIMATED]

### Description Text
- Text: "Your profile helps people recognize you. Your name and username are also used in the Sora app."
- Font size: 13px [ESTIMATED]
- Font weight: 400
- Color: `#9A9A9A`
- Text align: center
- Margin top: 16px [ESTIMATED]
- Margin horizontal: 24px [ESTIMATED]
- Line height: 18px [ESTIMATED]

### "Save profile" Button
- Background: `#FFFFFF`
- Text: "Save profile"
- Text color: `#000000`
- Font size: 16px
- Font weight: 600
- Padding vertical: 14px [ESTIMATED]
- Padding horizontal: 32px [ESTIMATED]
- Border radius: 26px (pill)
- Width: auto (fit-content), centered
- Margin top: 24px [ESTIMATED]

### "Cancel" Text Button
- Text: "Cancel"
- Font size: 16px
- Font weight: 500
- Color: `#FFFFFF`
- Text align: center
- Margin top: 16px [ESTIMATED]
- No background, no border

---

## 8. Remove Member Modal (chat/22)

**File:** `references/chat/22_remove-member-modal.jpg`
**Access:** "Remove from group" from Profile BottomSheet Other

### Layout Structure

```
Modal Overlay (backdrop dimmed)
  Modal Container (centered)
    Title: "Remove [Name]?"
    Description
    Button Row: Cancel | Remove (red)
```

### Modal Container
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 28px [ESTIMATED]
- Padding: 24px [ESTIMATED]
- Width: ~80% of screen width [ESTIMATED]
- Centered vertically and horizontally
- Shadow: `0 8px 32px rgba(0,0,0,0.5)` [ESTIMATED]

### Backdrop
- `#000000` at 50% opacity [ESTIMATED]

### Title
- Text: "Remove Pedro Lorenzo?"
- Font size: 22px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: `#FFFFFF`

### Description
- Text: "They will lose access to this group chat."
- Font size: 15px [ESTIMATED]
- Font weight: 400
- Color: `#9A9A9A`
- Margin top: 8px [ESTIMATED]

### Button Row
- Layout: Row, right-aligned
- Gap: 24px [ESTIMATED]
- Margin top: 24px [ESTIMATED]

#### "Cancel" Button
- Text: "Cancel"
- Font size: 16px
- Font weight: 500
- Color: `#FFFFFF`
- Background: transparent

#### "Remove" Button
- Text: "Remove"
- Font size: 16px
- Font weight: 500
- Color: `#E57373` [ESTIMATED]
- Background: transparent

#### Loading State (Remove)
- Text color changes to `#9A9A9A`
- Loading indicator (red) appears to the right of text
- Duration: ~2s

### Animation
- Entry: Fade in
- Exit: Fade out

---

## 9. Report Profile Modal -- 3 Steps (chat/23, 24, 25)

**Files:** `references/chat/23_report-profile-modal-step1.jpg`, `24_report-profile-modal-step2.jpg`, `25_report-profile-modal-step3.jpg`

This is a REUSABLE component: same component is used for Report Conversation (chat/30).

### Step 1 -- Category Selection (chat/23)

#### Layout

```
Modal Container (centered, large, near full-height content area)
  Title: "Report Profile"
  Subtitle heading: "Please tell us why you are reporting"
  Description: "Your help allows us to take the correct action on the reported user"
  Category List
    Category Row (text + chevron-right) x 10
```

#### Modal Container
- Background: `#1A1A1A` [ESTIMATED]
- Border radius: 20px [ESTIMATED]
- Padding: 24px [ESTIMATED]
- Width: ~90% of screen width [ESTIMATED]
- Max height: ~80% of screen [ESTIMATED]
- Scrollable if content overflows

#### Title
- Text: "Report Profile" (or "Report Conversation" for variant)
- Font size: 20px [ESTIMATED]
- Font weight: 700 (Bold)
- Color: `#FFFFFF`
- Text align: center

#### Subtitle heading
- Text: "Please tell us why you are reporting"
- Font size: 18px [ESTIMATED]
- Font weight: 700 (Bold)
- Color: `#FFFFFF`
- Margin top: 16px [ESTIMATED]

#### Description
- Text: "Your help allows us to take the correct action on the reported user"
- Font size: 14px [ESTIMATED]
- Font weight: 400
- Color: `#9A9A9A` [ESTIMATED]
- Margin top: 4px [ESTIMATED]

#### Category Rows
- Height: 56px [ESTIMATED]
- Layout: Row (text + chevron-right at far right)
- Text: font 16px, weight 400, color `#FFFFFF`
- Chevron: lucide `chevron-right`, 20px, color `#9A9A9A` [ESTIMATED]
- No dividers between rows, just spacing

#### Categories (in order):
1. Violence & self-harm
2. Sexual exploitation & abuse
3. Child/teen exploitation
4. Bullying & harassment
5. Spam, fraud & deception
6. Privacy violation
7. Intellectual property
8. Age-inappropriate content
9. Something else

### Step 2 -- Subcategory Selection (chat/24)

#### Layout

```
Modal Container
  Back Arrow + Title: "Report Profile"
  Subcategory heading (e.g., "Violence & self-harm")
  Description: "Please provide more details"
  Subcategory List
    Subcategory Row (text + chevron-right) x N
```

#### Back Arrow
- Icon: lucide `arrow-left`
- Size: 24px
- Color: `#FFFFFF`
- Positioned: top-left, inline with title
- Tap -> goes back to Step 1

#### Subcategory heading
- Same font as Step 1 subtitle heading
- Shows the selected category name

#### Subcategories (for "Violence & self-harm"):
1. Threats or incitement to violence
2. Gender-based violence
3. Sexual violence
4. Weapons
5. Suicide & self-harm
6. Eating disorders
7. Human trafficking
8. Terrorism

### Step 3 -- Text Input (chat/25)

#### Layout

```
Modal Container
  Back Arrow + Title: "Report Profile"
  Subcategory heading (e.g., "Threats or incitement to violence")
  TextInput ("Please provide more details")
  "Submit" Button
```

#### TextInput
- Background: `#3A3A3A` [ESTIMATED]
- Border: 1px solid `#4A4A4A` [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Placeholder: "Please provide more details"
- Placeholder color: `#9A9A9A` [ESTIMATED]
- Font size: 16px
- Color: `#FFFFFF`
- Height: ~120px [ESTIMATED] (multiline)
- Padding: 16px [ESTIMATED]
- Margin top: 16px [ESTIMATED]

#### "Submit" Button
- Disabled state:
  - Background: `#333333` [ESTIMATED]
  - Text color: `#6E6E6E` [ESTIMATED]
- Enabled state (1+ characters typed):
  - Background: `#FFFFFF`
  - Text color: `#000000`
- Font size: 16px
- Font weight: 600
- Width: 100%
- Height: 48px [ESTIMATED]
- Border radius: 24px [ESTIMATED]
- Margin top: 24px [ESTIMATED]

### Animation between Steps
- Transition: Fade in / Fade out between steps
- Modal container remains in place

---

## 10. Manage Link Screen (chat/26, 26b, 26c, 26d)

**Files:** `references/chat/26_manage-link-screen.jpg`, `26b_manage-link-copy-popup.jpg`, `26c_manage-link-reset-loading.jpg`, `26d_manage-link-delete-loading.jpg`
**Access:** "Manage link" from Options Modal
**Animation:** Slide from right

### Layout Structure

```
Screen (bg: #000000)
  Header Row
    Back Button
    Title: "Manage link"
  Content
    Link URL (text)
    Description
    Separator
    Action Row: Copy
    Action Row: Share
    Action Row: Reset
    Action Row: Delete (red)
  [Popup overlay if active]
```

### Header Row
- Same pattern as Members Screen header
- Back Button: 48px circular, bg `#2F2F2F`, arrow-left icon
- Title: "Manage link", font 18px, weight 600, color `#FFFFFF`, centered

### Link URL
- Text: "https://chatgpt.com/gg/v/6984a3644858819c..."
- Font size: 16px [ESTIMATED]
- Font weight: 400
- Color: `#B0C4DE` [ESTIMATED] -- light blue (link color)
- Margin top: 24px [ESTIMATED]
- Margin horizontal: 24px [ESTIMATED]
- Truncated with ellipsis

### Description
- Text: "Anyone can join your group chat with this link. Anyone who joins this chat will be able to view the entire conversation history."
- Font size: 15px [ESTIMATED]
- Font weight: 400
- Color: `#9A9A9A`
- Line height: 22px [ESTIMATED]
- Margin top: 8px [ESTIMATED]
- Margin horizontal: 24px [ESTIMATED]

### Separator
- Height: 1px
- Color: `#2A2A2A` [ESTIMATED]
- Margin horizontal: 24px [ESTIMATED]
- Margin top: 16px [ESTIMATED]

### Action Rows (standard)
- Height: 56px [ESTIMATED]
- Padding horizontal: 24px [ESTIMATED]
- Layout: Row (icon + text)
- Gap: 20px [ESTIMATED]
- Icon size: 24px
- Icon color: `#9A9A9A` [ESTIMATED]
- Text: font 16px, weight 400, color `#FFFFFF`

#### Icon Mapping
- **Copy** -- lucide `copy`
- **Share** -- lucide `share-2`
- **Reset** -- lucide `refresh-cw`
- **Delete** -- lucide `trash-2`

### Action Row: Delete (destructive)
- Icon color: `#E57373`
- Text color: `#E57373`

### Loading States

#### Reset Loading (chat/26c)
- "Reset" row gets a highlighted background: `#2A2A2A` [ESTIMATED]
- Loading spinner appears at far right of row
- Spinner color: `#FFFFFF`
- Spinner size: 20px [ESTIMATED]
- Duration: ~2s
- After complete: popup "Invite link reset"

#### Delete Loading (chat/26d)
- "Delete" row gets a highlighted background: `#2A1A1A` [ESTIMATED] -- dark red tint
- Loading spinner appears at far right of row
- Spinner color: `#E57373` [ESTIMATED]
- Spinner size: 20px [ESTIMATED]
- Duration: ~2s
- After complete: navigate back to GroupChat Screen

### Popup (chat/26b) -- "Invite link copied"
- Uses global Popup component
- Position: bottom of screen, above safe area
- Background: `#1A1A1A` [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Padding: 16px [ESTIMATED]
- Text: "Invite link copied", font 15px, weight 400, color `#FFFFFF`
- Close "x" icon on right: lucide `x`, 20px, color `#9A9A9A`
- Duration: 3s auto-dismiss
- Margin horizontal: 16px [ESTIMATED]

---

## 11. Rename Group Modal (chat/27)

**File:** `references/chat/27_rename-group-modal.jpg`
**Access:** "Rename group" from Options Modal
**Animation:** Fade in (appears as Android AlertDialog style)

### Layout Structure

```
Modal Container (centered)
  FloatingLabelInput: "New name" (with current name pre-filled)
  Button Row: Cancel | Rename
```

### Modal Container
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 28px [ESTIMATED]
- Padding: 24px [ESTIMATED]
- Width: ~85% of screen width [ESTIMATED]
- Centered vertically and horizontally

### FloatingLabelInput
- Reuses FloatingLabelInput component
- Border: 1px solid `#FFFFFF` (focused state)
- Border radius: 8px [ESTIMATED]
- Background: transparent
- Floating label: "New name", font 12px, color `#FFFFFF` (focused)
- Value: "Hello World" (pre-filled, selected/highlighted)
- Text highlight color: `#4A6FA5` [ESTIMATED] -- blue selection
- Font size: 16px, weight 400, color `#FFFFFF`
- Height: 56px [ESTIMATED]

### Button Row
- Layout: Row, right-aligned
- Gap: 24px [ESTIMATED]
- Margin top: 16px [ESTIMATED]

#### "Cancel" Button
- Text: "Cancel"
- Font size: 16px
- Font weight: 500
- Color: `#FFFFFF`

#### "Rename" Button
- Text: "Rename"
- Font size: 16px
- Font weight: 500
- Color: `#6E6E6E` [ESTIMATED] -- disabled initially if unchanged
- When name changes: Color becomes `#FFFFFF`

### Keyboard
- Opens automatically when modal appears

---

## 12. Customize ChatGPT Screen (chat/28, 28b, 28c, 28d)

**Files:** `references/chat/28_customize-chatgpt-screen.jpg`, `28b_customize-chatgpt-respond-modal.jpg`, `28c_customize-chatgpt-leave-modal.jpg`, `28d_customize-chatgpt-saving-state.jpg`
**Access:** "Customize ChatGPT" from Options Modal or "Customize ChatGPT" button in chat
**Animation:** Slide from right

### Layout Structure (chat/28)

```
Screen (bg: #000000)
  Header Row
    Back Button
    Title: "Customize ChatGPT"
  Custom Instructions TextArea
  Respond Row
  "Save" Button
```

### Header Row
- Same pattern as other sub-screens
- Title: "Customize ChatGPT", font 18px, weight 600, color `#FFFFFF`

### Custom Instructions TextArea
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Padding: 20px [ESTIMATED]
- Placeholder: "Get tailored responses by adding details about your group, like goals, preferences, or inside jokes."
- Placeholder color: `#9A9A9A` [ESTIMATED]
- Font size: 15px [ESTIMATED]
- Min height: 120px [ESTIMATED]
- Margin top: 16px [ESTIMATED]
- Margin horizontal: 16px [ESTIMATED]

### Respond Row
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 16px [ESTIMATED]
- Padding: 20px [ESTIMATED]
- Margin top: 16px [ESTIMATED]
- Margin horizontal: 16px [ESTIMATED]
- Layout: Row with text block on left, chevron on right

#### Text Block
- Label: "Respond", font 16px, weight 500, color `#FFFFFF`
- Value: "Automatically" (or "When mentioned"), font 14px, weight 400, color `#9A9A9A`
- Gap: 4px [ESTIMATED]

#### Chevron
- Icon: lucide `chevron-down`
- Size: 24px
- Color: `#9A9A9A` [ESTIMATED]
- When dropdown is open: rotates to `chevron-up`

### "Save" Button
- Disabled state (no changes):
  - Background: `#2A2A2A` [ESTIMATED]
  - Text: "Save", color `#6E6E6E` [ESTIMATED]
- Enabled state (changes made):
  - Background: `#9A9A9A` [ESTIMATED] -- appears as a lighter gray
  - Text: "Save", color `#FFFFFF`
- Width: 100% minus margins
- Height: 48px [ESTIMATED]
- Border radius: 24px [ESTIMATED]
- Margin top: 24px [ESTIMATED]
- Margin horizontal: 16px [ESTIMATED]

### Respond Dropdown Modal (chat/28b)
- Appears below the Respond Row
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Shadow: `0 4px 16px rgba(0,0,0,0.3)` [ESTIMATED]
- Width: ~60% of screen [ESTIMATED]
- Position: anchored right, below Respond Row

#### Options
- **"Automatically"** (with check icon if selected)
  - Check icon: lucide `check`, 20px, color `#FFFFFF`
  - Font size: 16px, weight 400, color `#FFFFFF`
  - Padding: 16px
- **"When mentioned"**
  - Same styling, no check icon

### Leave Without Saving Modal (chat/28c)
- Standard confirmation modal (same component as Remove/Leave/Delete modals)
- Title: "Leave without saving?"
- Description: "Any changes you made will be lost."
- Buttons: "Cancel" | "OK"
- "OK" text color: `#FFFFFF` (not red -- this is not a destructive action)

### Saving State (chat/28d)
- "Save" button shows loading spinner to the right of text
- Spinner color: `#FFFFFF`
- Text remains "Save"
- Duration: ~2s
- After complete: navigate back to GroupChat Screen

---

## 13. Mute Notifications Popup (chat/29)

**File:** `references/chat/29_mute-notifications-popup.jpg`
**Access:** "Mute notifications" from Options Modal

### Behavior
- Closes the Options Modal
- Shows popup at bottom of screen

### Popup
- Uses global Popup component
- Text: "Notifications muted" (or "Notifications unmuted" for toggle)
- Background: `#1A1A1A` [ESTIMATED]
- Border radius: 12px [ESTIMATED]
- Padding vertical: 16px [ESTIMATED]
- Padding horizontal: 20px [ESTIMATED]
- Close "x" icon: lucide `x`, 20px, color `#9A9A9A`
- Position: bottom, full width minus margins
- Margin horizontal: 16px [ESTIMATED]
- Margin bottom: 8px above input bar [ESTIMATED]
- Auto-dismiss: 3s

### Toggle Behavior
- After tapping "Mute notifications", the option text in Options Modal changes to "Unmute notifications"
- Icon changes from `bell-off` to `bell`

---

## 14. Report Conversation Modal (chat/30, 30b, 30c)

**Files:** `references/chat/30_report-conversation-modal-step1.jpg`, `30b_report-conversation-modal-step2.jpg`, `30c_report-conversation-modal-step3.jpg`
**Access:** "Report" from Options Modal

### SAME COMPONENT as Report Profile Modal (chat/23-25)

Only differences:
- Title: "Report Conversation" instead of "Report Profile"
- Step 1 subtitle: "Why are you reporting this conversation?" instead of "Please tell us why you are reporting"
- No extra description text under subtitle in Step 1

Everything else is identical: same categories, same subcategories, same Step 3 text input, same Submit button behavior.

---

## 15. Leave Group Modal (chat/31)

**File:** `references/chat/31_leave-group-modal.jpg`
**Access:** "Leave group" from Options Modal

### Layout Structure
- Same modal component as Remove Member Modal

### Content
- Title: "Leave group?"
- Description: "You'll no longer be able to see the chat history."
- Buttons: "Cancel" | "Leave" (red)

### "Leave" Button
- Text: "Leave"
- Color: `#E57373` [ESTIMATED]
- Loading state: red spinner, ~2s
- After complete: navigate to ChatScreen empty

### Dimensions
- Same as Remove Member Modal (chat/22)

---

## 16. Delete Group Modal (chat/32)

**File:** `references/chat/32_delete-group-modal.jpg`
**Access:** "Delete group" from Options Modal

### Layout Structure
- Same modal component as Remove Member / Leave Group modals

### Content
- Title: "Are you sure you want to delete this group chat?"
- Description: "This will delete the group chat for everyone."
- Buttons: "Cancel" | "Delete" (red)

### Title
- Font size: 22px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: `#FFFFFF`
- Note: Title wraps to multiple lines

### "Delete" Button
- Text: "Delete"
- Color: `#E57373` [ESTIMATED]
- Loading state: red spinner, ~2s
- After complete: navigate to ChatScreen empty

---

## Shared Patterns Across GroupChat

### Confirmation Modal Pattern
Used by: Remove Member (22), Leave Group (31), Delete Group (32), Leave Without Saving (28c)
- Background: `#2A2A2A` [ESTIMATED]
- Border radius: 28px [ESTIMATED]
- Padding: 24px
- Width: ~80% screen
- Centered on screen
- Backdrop: `#000000` at 50% opacity
- Animation: Fade in/out
- Button row: right-aligned, text buttons, gap 24px
- Destructive button: `#E57373`, non-destructive: `#FFFFFF`

### Sub-screen Header Pattern
Used by: Members (18), Manage Link (26), Customize ChatGPT (28)
- Back button: 48px circular, `#2F2F2F` bg, arrow-left icon
- Title: centered, 18px, weight 600, white
- Slide from right animation

### Popup Pattern
Used by: Mute Notifications (29), Invite Link Copied (26b), Report Submitted
- Background: `#1A1A1A`
- Border radius: 12px
- Full width minus 16px margins
- Text + close X
- 3s auto-dismiss
- Position: bottom, above input bar
