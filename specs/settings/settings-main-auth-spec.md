# Settings Main -- Auth Spec

**Screen name:** Settings Main (Authenticated)
**File references:**
- `references/settings/01_settings-main-auth-top.jpg` (top portion)
- `references/settings/01_settings-main-auth-scrolled.jpg` (scrolled/bottom portion)
**Auth state:** Authenticated
**Entry animation:** SLIDE (push) from sidebar
**Exit animation:** SLIDE (pop) with back button

---

## Layout Structure

### Scroll behavior
- Entire screen is scrollable EXCEPT the header (back button + title "Settings")
- Header has a fixed position with a background that includes a subtle gradient/shadow for scroll overlap

---

### 1. Fixed Header
- **Background:** `#000000` with a subtle bottom shadow/gradient for scroll content behind it
- **Padding top:** 12px below safe area [ESTIMATED]
- **Padding horizontal:** 16px
- **Padding bottom:** 12px [ESTIMATED]
- **Z-index:** Above scroll content

#### 1a. Back Button
- Container: 48x48px circle
- Background: `#3A3A3A` [ESTIMATED]
- Border radius: 24px
- Icon: ArrowLeft (lucide), 24px, `#FFFFFF`
- Position: Left-aligned

#### 1b. Title
- **Text:** "Settings"
- Font size: 20px [ESTIMATED]
- Font weight: 600 (SemiBold)
- Color: `#FFFFFF`
- Position: Centered horizontally

---

### 2. Profile Section
- **Padding top:** 24px [ESTIMATED]
- **Alignment:** Center (all content centered horizontally)

#### 2a. Avatar
- **Size:** 96px diameter [ESTIMATED]
- **Border radius:** 48px (circular)
- **Background:** `#A87FDB` [ESTIMATED] -- light purple/lilac
- **Initials:** "ML"
  - Font size: 36px [ESTIMATED]
  - Font weight: 600 (SemiBold)
  - Color: `#FFFFFF`
  - Text align: center (both axes)
- **Press behavior:** Opens EditProfile BottomSheet

#### 2b. User Name
- **Text:** "Mateo Lorenzo"
- **Font size:** 24px [ESTIMATED]
- **Font weight:** 600 (SemiBold)
- **Color:** `#FFFFFF`
- **Margin top:** 16px [ESTIMATED]
- **Text align:** center

#### 2c. Username/Handle
- **Text:** "mateolorenzo.dev"
- **Font size:** 15px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Margin top:** 4px [ESTIMATED]
- **Text align:** center

#### 2d. Edit Profile Button
- **Text:** "Edit profile"
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 500 (Medium)
- **Color:** `#FFFFFF`
- **Background:** Transparent
- **Border:** 1px solid `#5A5A5A` [ESTIMATED]
- **Border radius:** 20px [ESTIMATED] (pill)
- **Padding horizontal:** 20px [ESTIMATED]
- **Padding vertical:** 8px [ESTIMATED]
- **Margin top:** 16px [ESTIMATED]
- **Press behavior:** Opens EditProfile BottomSheet

---

### 3. Section: "My ChatGPT"

#### 3a. Section Header
- **Text:** "My ChatGPT"
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Margin top:** 32px [ESTIMATED]
- **Margin bottom:** 10px [ESTIMATED]
- **Padding horizontal:** 16px (screen padding)

#### 3b. Card Group
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

##### Row: "Personalization"
- **Icon:** RefreshCw or custom -- circular arrows icon
  - Size: 24px, Color: `#FFFFFF`
- **Text:** "Personalization"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Height:** ~52px
- **Border bottom:** 1px separator
- **Border radius:** 16px top
- **Press behavior:** No-op

##### Row: "Apps"
- **Icon:** LayoutGrid or Grid (lucide) -- 4 squares icon
  - Size: 24px, Color: `#FFFFFF`
- **Text:** "Apps"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Height:** ~52px
- **Border radius:** 0 top, 16px bottom
- **Press behavior:** No-op

---

### 4. Section: "Account"

#### 4a. Section Header
- **Text:** "Account"
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Margin top:** 24px [ESTIMATED]
- **Margin bottom:** 10px [ESTIMATED]

#### 4b. Card Group
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

##### Row: "Workspace"
- **Icon:** Briefcase / Bag (lucide)
  - Size: 24px, Color: `#FFFFFF`
- **Title:** "Workspace"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Subtitle:** "Personal"
  - Font size: 14px, Weight: 400, Color: `#9A9A9A`
- **Height:** ~64px
- **Border bottom:** 1px separator
- **Border radius:** 16px top
- **Press behavior:** Not pressable

##### Row: "Subscription"
- **Icon:** PlusSquare or a boxed "+" icon (lucide)
  - Size: 24px, Color: `#FFFFFF`
- **Title:** "Subscription"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Subtitle:** "Plus"
  - Font size: 14px, Weight: 400, Color: `#9A9A9A`
- **Height:** ~64px
- **Border bottom:** 1px separator
- **Press behavior:** Opens Subscription modal

##### Row: "Parental controls"
- **Icon:** Custom icon (parent + child silhouette)
  - Size: 24px, Color: `#FFFFFF`
- **Title:** "Parental controls"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Height:** ~52px
- **Border bottom:** 1px separator
- **Press behavior:** No-op

##### Row: "Email"
- **Icon:** Mail (lucide)
  - Size: 24px, Color: `#FFFFFF`
- **Title:** "Email"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Subtitle:** "mateolorenzo.dev@gmail.com"
  - Font size: 14px, Weight: 400, Color: `#9A9A9A`
- **Height:** ~64px
- **Border bottom:** 1px separator
- **Press behavior:** No-op

##### Row: "Phone number"
- **Icon:** Phone (lucide)
  - Size: 24px, Color: `#FFFFFF`
- **Title:** "Phone number"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Subtitle:** "+541140392404"
  - Font size: 14px, Weight: 400, Color: `#9A9A9A`
- **Height:** ~64px
- **Border radius:** 0 top, 16px bottom
- **Press behavior:** No-op

---

### 5. Appearance Section (no section header label -- standalone group)

- **Margin top:** 24px [ESTIMATED]

#### Card Group
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

##### Row: "Appearance"
- **Icon:** Sun (lucide) -- sun/brightness icon
  - Size: 24px, Color: `#FFFFFF`
- **Title:** "Appearance"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Subtitle:** "System (Default)"
  - Font size: 14px, Weight: 400, Color: `#9A9A9A`
- **Height:** ~64px
- **Border bottom:** 1px separator
- **Border radius:** 16px top
- **Press behavior:** Opens Appearance modal (FADE)

##### Row: "Accent color"
- **Icon:** Palette / Droplet variant (lucide) -- paint/color icon
  - Size: 24px, Color: `#FFFFFF`
- **Title:** "Accent color"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Subtitle row:** Small color dot + "Default"
  - Dot: 10px diameter, `#9A9A9A` [ESTIMATED], circular
  - Dot margin right: 6px [ESTIMATED]
  - Text: "Default", Font size: 14px, Weight: 400, Color: `#9A9A9A`
- **Right icon:** ChevronDown (lucide)
  - Size: 24px, Color: `#FFFFFF`
  - **Rotates to ChevronUp when modal is open**
- **Height:** ~64px
- **Border radius:** 0 top, 16px bottom
- **Press behavior:** Opens Accent Color dropdown modal (FADE)

---

### 6. Settings List Section (no section header label)

- **Margin top:** 24px [ESTIMATED]

#### Card Group
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

##### Row: "General"
- **Icon:** Settings (lucide) -- gear icon
  - Size: 24px, Color: `#FFFFFF`
- **Text:** "General"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Height:** ~52px
- **Border bottom:** 1px separator
- **Border radius:** 16px top
- **Press behavior:** Push to General screen (SLIDE)

##### Row: "Notifications"
- **Icon:** Bell (lucide)
  - Size: 24px, Color: `#FFFFFF`
- **Text:** "Notifications"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Height:** ~52px
- **Border bottom:** 1px separator
- **Press behavior:** Push to Notifications screen (SLIDE)

##### Row: "Voice"
- **Icon:** AudioLines or BarChart3 (lucide) -- audio waveform icon
  - Size: 24px, Color: `#FFFFFF`
- **Text:** "Voice"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Height:** ~52px
- **Border bottom:** 1px separator
- **Press behavior:** Push to Speech screen (SLIDE)

##### Row: "Data controls"
- **Icon:** ListFilter or SlidersHorizontal variant (lucide)
  - Size: 24px, Color: `#FFFFFF`
- **Text:** "Data controls"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Height:** ~52px
- **Border bottom:** 1px separator
- **Press behavior:** Push to Data Controls screen (SLIDE)

##### Row: "Security"
- **Icon:** Shield (lucide) or fingerprint icon
  - Size: 24px, Color: `#FFFFFF`
- **Text:** "Security"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Height:** ~52px
- **Border bottom:** 1px separator
- **Press behavior:** Push to Security screen (SLIDE)

##### Row: "About"
- **Icon:** Info (lucide) -- circle with "i"
  - Size: 24px, Color: `#FFFFFF`
- **Text:** "About"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Height:** ~52px
- **Border radius:** 0 top, 16px bottom
- **Press behavior:** Push to About screen (SLIDE)

---

### 7. Log Out Section

- **Margin top:** 24px [ESTIMATED]
- **Margin bottom:** 40px [ESTIMATED] (bottom safe area padding)

#### Card (standalone)
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]
- **Height:** ~52px

##### Row: "Log out"
- **Icon:** LogOut (lucide) -- arrow exiting a door
  - Size: 24px
  - Color: `#E57373` [ESTIMATED] -- muted red, matching text
- **Text:** "Log out"
  - Font size: 16px
  - Font weight: 400 (Regular)
  - Color: `#E57373` [ESTIMATED] -- muted/soft red (not bright red)
- **Press behavior:** Opens Log Out confirmation modal (FADE)

---

## Common Card Properties
- **Card background:** `#2A2A2A` [ESTIMATED]
- **Card border radius:** 16px
- **Row padding horizontal:** 16px
- **Row padding vertical:** 14px [ESTIMATED]
- **Icon-to-text gap:** 16px
- **Separator between rows:** 1px solid `#3A3A3A` at ~40% opacity [ESTIMATED]
- **Row press feedback:** Slight background darken or opacity 0.85 [ESTIMATED]
