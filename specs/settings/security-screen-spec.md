# Security Screen Spec

**Screen name:** Security
**File reference:** `references/settings/01k_security-screen.jpg`
**Auth state:** Authenticated
**Entry animation:** SLIDE (push)
**Exit animation:** SLIDE (pop) with back button

---

## Layout Structure (top to bottom)

### 1. Header
- **Same pattern as all settings sub-screens**
- Back button: 48x48px circle, bg `#3A3A3A`, ArrowLeft 24px white
- Title: "Security", 20px, SemiBold, `#FFFFFF`, centered

### 2. Content Area
- **Background:** `#000000`
- **Padding horizontal:** 16px
- **Padding top:** 8px [ESTIMATED]

---

### 3. Section 1: Passkeys (no section header label)

#### Card
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

##### Row: "Passkeys"
- **Layout:** Row with text (left) + status text + chevron (right)
- **Height:** ~52px [ESTIMATED]
- **Padding horizontal:** 16px

**Text (left):**
- "Passkeys"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

**Right side (row, center-aligned):**
- **Status text:** "Add"
  - Font size: 16px [ESTIMATED]
  - Font weight: 400 (Regular)
  - Color: `#9A9A9A` [ESTIMATED]
  - Margin right: 8px [ESTIMATED]
- **Chevron:** ChevronRight (lucide)
  - Size: 20px [ESTIMATED]
  - Color: `#9A9A9A` [ESTIMATED]

**Press behavior:** Push to Passkeys screen (SLIDE)

---

### 4. Section 2: "MULTI-FACTOR AUTHENTICATION (MFA)"

#### 4a. Section Header
- **Text:** "MULTI-FACTOR AUTHENTICATION (MFA)"
- **Font size:** 13px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Letter spacing:** 1px [ESTIMATED] -- uppercase with tracking
- **Text transform:** uppercase
- **Margin top:** 24px [ESTIMATED]
- **Margin bottom:** 10px [ESTIMATED]

#### 4b. Card Group
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

##### Row 1: "Authenticator app"
- **Layout:** Row with text (left) + status text + chevron (right)
- **Height:** ~52px [ESTIMATED]
- **Border bottom:** 1px separator
- **Border radius:** 16px top

**Text (left):**
- "Authenticator app"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

**Right side:**
- Status: "Off", Font size: 16px, Color: `#9A9A9A`
- Chevron: ChevronRight, 20px, `#9A9A9A`
- Gap between status and chevron: 8px [ESTIMATED]

**Press behavior:** Push to Authenticator app screen (SLIDE)

##### Row 2: "Push notifications"
- **Same layout as Authenticator app**
- **Text:** "Push notifications"
- **Status:** "Off"
- **Border bottom:** 1px separator
- **Press behavior:** Push to Push notifications screen (SLIDE)

##### Row 3: "Text message"
- **Same layout**
- **Text:** "Text message"
- **Status:** "Off"
- **Border radius:** 0 top, 16px bottom
- **Press behavior:** Push to Text message screen (SLIDE)

#### 4c. Description Text (below card)
- **Text:** "Require an extra security challenge when logging in. If you are unable to pass this challenge, you will have the option to recover your account."
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Line height:** 20px [ESTIMATED]
- **Margin top:** 12px [ESTIMATED]
- **Padding horizontal:** 16px

---

## Notes
- This screen uses navigation rows (text + status + chevron) -- a different pattern from toggle rows
- The section header "MULTI-FACTOR AUTHENTICATION (MFA)" is ALL CAPS with letter spacing
- Status labels are right-aligned alongside a ChevronRight
- No icons on the left side of any row
