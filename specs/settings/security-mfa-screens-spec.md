# Security MFA Sub-Screens Spec (Template)

**Screens covered:**
- Authenticator app (`references/settings/01k_security-authenticator-screen.jpg`)
- Push notifications (`references/settings/01k_security-push-notifications-screen.jpg`)
- Text message (`references/settings/01k_security-text-message-screen.jpg`)

**Auth state:** Authenticated
**Entry animation:** SLIDE (push)
**Exit animation:** SLIDE (pop) with back button

**Note:** All three screens share the identical layout structure. Only the title, section label, toggle label, and description text differ.

---

## Layout Structure (top to bottom)

### 1. Header
- **Same pattern as all settings sub-screens**
- Back button: 48x48px circle, bg `#3A3A3A`, ArrowLeft 24px white
- Title: Dynamic (screen title), 20px, SemiBold, `#FFFFFF`, centered

### 2. Section Label
- **Font size:** 13px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Letter spacing:** 1px [ESTIMATED]
- **Text transform:** uppercase
- **Margin top:** 8px [ESTIMATED]
- **Margin bottom:** 10px [ESTIMATED]
- **Padding horizontal:** 16px

### 3. Toggle Card
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

#### Toggle Row
- **Layout:** Row with text (left) + toggle switch (right)
- **Height:** ~52px [ESTIMATED]
- **Padding horizontal:** 16px
- **Padding vertical:** 14px

**Text (left):**
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

**Toggle (right):**
- State: OFF (in all screenshots)
- Track (off): `#4A4A4A`, Thumb (off): `#9A9A9A`
- Track: 52x32px, border radius 16px
- Thumb: 26px diameter

**Press behavior:** Entire row toggles the switch

### 4. Description Text
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Line height:** 20px [ESTIMATED]
- **Margin top:** 12px [ESTIMATED]
- **Padding horizontal:** 16px

---

## Screen Variants

### Authenticator app
- **Header title:** "Authenticator app"
- **Section label:** "GET CODES TO VERIFY LOG INS"
- **Toggle label:** "Authenticator app"
- **Description:** "Use an authenticator app to generate one-time codes when you sign in. Turning this on will guide you through setup."

### Push notifications
- **Header title:** "Push notifications"
- **Section label:** "GET PROMPTS TO YOUR DEVICE TO VERIFY LOG INS"
- **Toggle label:** "Push notifications"
- **Description:** "Prompts go to your trusted devices where you are already signed in."

### Text message
- **Header title:** "Text message"
- **Section label:** "GET CODES TO VERIFY LOG INS"
- **Toggle label:** "Text message"
- **Description:** "Get 6-digit verification codes by SMS or WhatsApp based on your country code."

---

## Notes
- All three screens are nearly identical in layout -- they are parameterized variants of the same template
- The section labels are ALL CAPS with letter spacing (same pattern as the MFA section header on the Security screen)
- Toggle is OFF by default on all three screens
- Description text appears below the card, not inside it
- No icons on any of these screens
