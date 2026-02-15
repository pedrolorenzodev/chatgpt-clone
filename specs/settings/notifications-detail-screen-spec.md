# Notifications Detail Screen Spec (Template)

**Screen name:** Notifications Detail (Usage shown as example)
**File reference:** `references/settings/01h_notifications-usage-screen.jpg`
**Auth state:** Authenticated
**Entry animation:** SLIDE (push)
**Exit animation:** SLIDE (pop) with back button
**Note:** This is a template screen. The same layout is used for all 6 notification categories with different titles, toggle combinations, and descriptions.

---

## Layout Structure (top to bottom)

### 1. Header
- **Same pattern as all settings sub-screens**
- Back button: 48x48px circle, bg `#3A3A3A`, ArrowLeft 24px white
- Title: Dynamic (e.g., "Usage", "Responses", "Tasks", etc.)
- Font size: 20px, SemiBold, `#FFFFFF`, centered

### 2. Section Label
- **Text:** "Where you'll be notified"
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#FFFFFF` -- notably white, NOT gray like section headers on settings main
- **Margin top:** 8px [ESTIMATED]
- **Margin bottom:** 10px [ESTIMATED]
- **Padding horizontal:** 16px

### 3. Toggle Card Group
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]
- **Contains 1 or 2 rows depending on the variant**

#### Row: "Push"
- **Layout:** Row with text (left) + toggle switch (right)
- **Height:** ~52px [ESTIMATED]
- **Padding horizontal:** 16px [ESTIMATED]
- **Padding vertical:** 14px [ESTIMATED]

**Text:**
- "Push"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

**Toggle switch:**
- State: ON (in Usage screenshot)
- Track (on): `#FFFFFF`, Track (off): `#4A4A4A`
- Thumb (on): `#000000`, Thumb (off): `#9A9A9A`
- Track: 52x32px, border radius 16px
- Thumb: 26px diameter

**Note:** If only "Push" is shown, it gets full border radius (16px all corners)

#### Row: "Email"
- **Same layout as Push row**
- **Text:** "Email"
- **Toggle state:** ON (in Usage screenshot)
- **Border top:** 1px separator (when both Push and Email are present)

### 4. Description Text
- **Margin top:** 12px [ESTIMATED]
- **Padding horizontal:** 16px
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Line height:** 20px [ESTIMATED]

---

## Variants by Notification Category

| Screen Title | Toggle Rows | Description |
|---|---|---|
| Responses | Push only | "Get notified when ChatGPT responds to requests that take time, like research or image generation." |
| Group chats | Push only | "You'll receive notifications for new messages from group chats." |
| Tasks | Push + Email | "Get notified when tasks you've created have updates." |
| Projects | Email only | "Get notified when you receive an email invitation to a shared project." |
| Recommendations | Push + Email | "Stay in the loop on new tools, tips, and features from ChatGPT." |
| Usage | Push + Email | "We'll notify you when limits reset for features like image creation." |

---

## Notes
- The toggle rows do NOT have icons -- just text + toggle
- The entire row is pressable (not just the toggle switch)
- When only one toggle is present, the card has full 16px border radius on all corners
- When two toggles are present, the first gets top radius and the second gets bottom radius
