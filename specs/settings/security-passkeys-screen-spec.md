# Security Passkeys Screen Spec

**Screen name:** Passkeys
**File reference:** `references/settings/01k_security-passkeys-screen.jpg`
**Auth state:** Authenticated
**Entry animation:** SLIDE (push)
**Exit animation:** SLIDE (pop) with back button

---

## Layout Structure (top to bottom)

### 1. Header
- **Same pattern as all settings sub-screens**
- Back button: 48x48px circle, bg `#3A3A3A`, ArrowLeft 24px white
- Title: "Passkeys", 20px, SemiBold, `#FFFFFF`, centered

### 2. Content Area
- **Background:** `#000000`
- **Padding horizontal:** 24px [ESTIMATED] -- wider than typical settings screens
- **Content alignment:** Center (horizontally centered)
- **Padding top:** 48px [ESTIMATED]

### 3. Passkey Icon
- **Type:** Custom passkey illustration -- person silhouette with a key/link chain
- **Size:** ~48x48px [ESTIMATED]
- **Color:** `#FFFFFF`
- **Alignment:** Center horizontal
- **Note:** This is a custom icon, likely needs to be an SVG asset. It resembles a person outline with a chain link below.

### 4. Title
- **Text:** "Add a passkey"
- **Font size:** 22px [ESTIMATED]
- **Font weight:** 700 (Bold)
- **Color:** `#FFFFFF`
- **Margin top:** 20px [ESTIMATED]
- **Text align:** center

### 5. Description
- **Text:** "Passkeys are more secure than a password and adding one takes less than a minute."
- **Font size:** 16px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Line height:** 24px [ESTIMATED]
- **Margin top:** 12px [ESTIMATED]
- **Text align:** center

### 6. Create a Passkey Button
- **Margin top:** 24px [ESTIMATED]
- **Width:** 100% of content area
- **Height:** 52px [ESTIMATED]
- **Background:** `#FFFFFF`
- **Border radius:** 26px (pill) -- same as PrimaryButton
- **Text:** "Create a passkey"
  - Font size: 16px [ESTIMATED]
  - Font weight: 600 (SemiBold)
  - Color: `#000000`
  - Text align: center
- **Press feedback:** Opacity 0.85 [ESTIMATED]
- **Press behavior:** No-op in clone

---

## Notes
- This is a unique screen layout -- centered content with icon, title, description, and a CTA button
- The button matches the PrimaryButton component (white bg, black text, pill shape)
- The passkey icon is custom and not from lucide -- will need a custom SVG asset
- This is the only settings sub-screen with a full-width action button
