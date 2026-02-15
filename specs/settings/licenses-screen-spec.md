# Open Source Licenses Screen Spec

**Screen name:** Open Source Licenses
**File reference:** `references/settings/04_tap-licenses_licenses-screen.jpg` (unauth), `references/settings/01l_about-licenses-screen.jpg` (auth)
**Auth state:** Both (identical layout for auth and unauth)
**Entry animation:** Push navigation (slide right to left)
**Exit animation:** Pop navigation (slide left to right)
**Note:** The unauth and auth versions of this screen are visually identical.

---

## Layout Structure (top to bottom)

### 1. Header
- **Background:** `#000000`
- **Padding top:** 12px below safe area [ESTIMATED]
- **Padding horizontal:** 16px
- **Padding bottom:** 16px [ESTIMATED]

#### 1a. Back Button
- **Container:** 44x44px [ESTIMATED]
- **Background:** Transparent (no circle background on this screen -- unlike settings main)
- **Icon:** ArrowLeft (lucide)
- **Icon size:** 24px
- **Icon color:** `#FFFFFF`
- **Position:** Left-aligned
- **Note:** This screen uses a simpler back button without the dark circle background [ESTIMATED]

#### 1b. Title
- **Text:** "Open source licenses"
- **Font size:** 18px [ESTIMATED]
- **Font weight:** 600 (SemiBold)
- **Color:** `#FFFFFF`
- **Position:** To the right of the back button (left-aligned, NOT centered) -- this differs from other settings screens
- **Margin left:** 16px from back button [ESTIMATED]

### 2. License List (scrollable)
- **Background:** `#000000`
- **Padding horizontal:** 16px [ESTIMATED]
- **Padding top:** 16px [ESTIMATED]
- **Layout:** Vertical list of license items separated by dividers

---

## License Item (repeated component)

### Layout
- **Padding vertical:** 20px [ESTIMATED]
- **Border bottom:** 1px solid `#2A2A2A` [ESTIMATED] (separator between items)

### Row 1: Library Name + Version
- **Layout:** Row, space-between
- **Library name (left):**
  - Font size: 18px [ESTIMATED]
  - Font weight: 700 (Bold)
  - Color: `#FFFFFF`
  - Max width: ~75% (truncated with "..." if too long)
  - Number of lines: 1 (ellipsis)
- **Version (right):**
  - Font size: 16px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Color: `#FFFFFF`
  - Alignment: Right

### Row 2: Author
- **Text:** Author name (e.g., "Mike Penz", "Google")
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Margin top:** 4px [ESTIMATED]

### Row 3: License Badge
- **Margin top:** 8px [ESTIMATED]
- **Background:** `#3A3A3A` [ESTIMATED]
- **Padding horizontal:** 12px [ESTIMATED]
- **Padding vertical:** 6px [ESTIMATED]
- **Border radius:** 14px [ESTIMATED] (pill shape)
- **Text:** License type (e.g., "Apache License 2.0")
  - Font size: 13px [ESTIMATED]
  - Font weight: 500 (Medium)
  - Color: `#FFFFFF`

---

## Sample Data (visible in screenshot)

| Library | Version | Author | License |
|---|---|---|---|
| AboutLibraries Compose Materi... | 13.2.1 | Mike Penz | Apache License 2.0 |
| AboutLibraries Compose UI Libr... | 13.2.1 | Mike Penz | Apache License 2.0 |
| AboutLibraries Core Library | 13.2.1 | Mike Penz | Apache License 2.0 |
| Accompanist Drawable Painter ... | 0.37.3 | Google | Apache License 2.0 |
| Accompanist FlowLayout library | 0.36.0 | Google | Apache License 2.0 |
| Accompanist Permissions | 0.37.3 | Google | Apache License 2.0 |
| Accompanist System UI Contro... | 0.36.0 | Google | Apache License 2.0 |

---

## Notes
- Items are pressable (Pressable) but perform no action in the clone
- The list is long and scrollable
- All license items follow the exact same structure
- Back button style on this screen differs from the grouped settings card screens
