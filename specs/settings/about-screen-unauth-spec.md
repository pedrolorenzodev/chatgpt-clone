# About Screen -- Unauth Spec

**Screen name:** About (Unauthenticated)
**File reference:** `references/settings/03_tap-about_about-screen.jpg`
**Auth state:** Unauthenticated
**Entry animation:** Push navigation (slide right to left)
**Exit animation:** Pop navigation (slide left to right)

---

## Layout Structure (top to bottom)

### 1. Header
- **Background:** `#000000`
- **Padding top:** 12px below safe area [ESTIMATED]
- **Padding horizontal:** 16px
- **Padding bottom:** 12px [ESTIMATED]

#### 1a. Back Button
- **Same as global BackButton component** (see settings-main-unauth-spec)
- Container: 48x48px circle, bg `#3A3A3A`, icon ArrowLeft 24px white

#### 1b. Title
- **Text:** "About"
- **Font size:** 20px [ESTIMATED]
- **Font weight:** 600 (SemiBold)
- **Color:** `#FFFFFF`
- **Position:** Centered horizontally

### 2. Content Area
- **Background:** `#000000`
- **Padding horizontal:** 16px
- **Padding top:** 8px [ESTIMATED]

### 3. Settings Card Group
- **Background:** `#3A3A3A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]
- **Contains 5 rows**

#### 3a. "Help center" Row
- **Position:** First in group
- **Border radius:** 16px top-left, 16px top-right, 0 bottom
- **Layout:** Row with icon + text
- **Height:** ~56px [ESTIMATED]
- **Padding vertical:** 16px [ESTIMATED]
- **Padding horizontal:** 16px [ESTIMATED]
- **Border bottom:** 1px separator

**Icon:** HelpCircle (lucide) -- circle with "?"
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`
- Margin right: 16px [ESTIMATED]

**Text:** "Help center"
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: `#FFFFFF`

#### 3b. "Terms of use" Row
- **Layout:** Row with icon + text
- **Height:** ~56px [ESTIMATED]
- **Border bottom:** 1px separator

**Icon:** FileText (lucide) -- document with lines
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`

**Text:** "Terms of use"
- Font size: 16px, weight 400, color `#FFFFFF`

#### 3c. "Privacy policy" Row
- **Layout:** Row with icon + text
- **Height:** ~56px [ESTIMATED]
- **Border bottom:** 1px separator

**Icon:** Users (lucide) or a privacy/shield variant -- appears as two people/users icon
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`

**Text:** "Privacy policy"
- Font size: 16px, weight 400, color `#FFFFFF`

#### 3d. "Licenses" Row
- **Layout:** Row with icon + text
- **Height:** ~56px [ESTIMATED]
- **Border bottom:** 1px separator

**Icon:** FileStack or Copy (lucide) -- document with a folded corner
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`

**Text:** "Licenses"
- Font size: 16px, weight 400, color `#FFFFFF`

**Press behavior:** Push navigation to Licenses screen (04)

#### 3e. "ChatGPT for Android" Row
- **Position:** Last in group
- **Border radius:** 0 top, 16px bottom-left, 16px bottom-right
- **Layout:** Row with icon + text block
- **Height:** ~66px [ESTIMATED] (two lines)

**Icon:** Circle (lucide) -- the ChatGPT/OpenAI logo outline
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`

**Text block:**
- **Title:** "ChatGPT for Android"
  - Font size: 16px, weight 400, color `#FFFFFF`
- **Subtitle:** "1.2026.027 (30)"
  - Font size: 14px, weight 400, color `#9A9A9A`
  - Margin top: 2px

**Press behavior:** Non-interactive (version info only)

---

## Row Separator
- **Color:** `#4A4A4A` at ~30% opacity [ESTIMATED]
- **Height:** 1px
- **Inset:** Full-width within the card (no left padding offset)
