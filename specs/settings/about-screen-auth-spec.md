# About Screen -- Auth Spec

**Screen name:** About (Authenticated)
**File reference:** `references/settings/01l_about-screen-auth.jpg`
**Auth state:** Authenticated
**Entry animation:** SLIDE (push)
**Exit animation:** SLIDE (pop) with back button

---

## Layout Structure (top to bottom)

### 1. Header
- **Same pattern as all settings sub-screens**
- Back button: 48x48px circle, bg `#3A3A3A`, ArrowLeft 24px white
- Title: "About", 20px, SemiBold, `#FFFFFF`, centered

### 2. Content Area
- **Background:** `#000000`
- **Padding horizontal:** 16px
- **Padding top:** 8px [ESTIMATED]

### 3. Card Group
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]
- **Contains 5 rows**
- **Note:** This is visually identical to the unauth About screen (03_tap-about_about-screen.jpg)

#### Row 1: "Help center"
- **Icon:** HelpCircle (lucide) -- circle with "?"
- **Size:** 24px, Color: `#FFFFFF`
- **Text:** "Help center", 16px, Regular, `#FFFFFF`
- **Height:** ~56px
- **Border bottom:** 1px separator
- **Border radius:** 16px top
- **Press behavior:** No-op (would open browser)

#### Row 2: "Terms of use"
- **Icon:** FileText (lucide) -- document with text lines
- **Size:** 24px, Color: `#FFFFFF`
- **Text:** "Terms of use", 16px, Regular, `#FFFFFF`
- **Height:** ~56px
- **Border bottom:** 1px separator
- **Press behavior:** No-op (would open browser)

#### Row 3: "Privacy policy"
- **Icon:** Users (lucide) -- privacy/people icon
- **Size:** 24px, Color: `#FFFFFF`
- **Text:** "Privacy policy", 16px, Regular, `#FFFFFF`
- **Height:** ~56px
- **Border bottom:** 1px separator
- **Press behavior:** No-op (would open browser)

#### Row 4: "Licenses"
- **Icon:** FileStack or File (lucide) -- document with folded corner
- **Size:** 24px, Color: `#FFFFFF`
- **Text:** "Licenses", 16px, Regular, `#FFFFFF`
- **Height:** ~56px
- **Border bottom:** 1px separator
- **Press behavior:** Push to Open Source Licenses screen (SLIDE)

#### Row 5: "ChatGPT for Android"
- **Icon:** Circle (OpenAI logo outline)
- **Size:** 24px, Color: `#FFFFFF`
- **Title:** "ChatGPT for Android", 16px, Regular, `#FFFFFF`
- **Subtitle:** "1.2026.027 (30)", 14px, Regular, `#9A9A9A`
- **Height:** ~66px
- **Border radius:** 0 top, 16px bottom
- **Press behavior:** No-op

---

## Notes
- The auth and unauth About screens are visually identical
- The same component can be reused for both auth states
- All rows have left-aligned icons (unlike Data Controls / Security screens which have no icons)
- Icon + text gap: 16px
- Row padding: 16px horizontal, 14-16px vertical
