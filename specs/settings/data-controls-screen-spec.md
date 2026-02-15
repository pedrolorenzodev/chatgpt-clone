# Data Controls Screen Spec

**Screen name:** Data Controls
**File reference:** `references/settings/01j_data-controls-screen.jpg`
**Auth state:** Authenticated
**Entry animation:** SLIDE (push)
**Exit animation:** SLIDE (pop) with back button

---

## Layout Structure (top to bottom)

### 1. Header
- **Same pattern as all settings sub-screens**
- Back button: 48x48px circle [ESTIMATED] -- note: in this screenshot the back button appears simpler/smaller, possibly without the dark circle bg
- Title: "Data controls", 20px, SemiBold, `#FFFFFF`, centered

**Note:** In the data controls screenshot, the back button appears to be a plain arrow without the circle background -- more like the licenses screen style. This may be a variant. [ESTIMATED]

### 2. Content Area
- **Background:** `#000000`
- **Padding horizontal:** 16px
- **Scrollable:** Yes (content extends beyond viewport)

---

### 3. Section 1: Model improvement + actions

#### 3a. Toggle Row Card
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

##### Row: "Improve the model for everyone"
- **Layout:** Row with text + toggle switch
- **Height:** ~52px [ESTIMATED]
- **Padding horizontal:** 16px
- **No icon** (unlike the unauth version which has an icon)

**Text:**
- "Improve the model for everyone"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

**Toggle (right):**
- State: ON
- Track (on): `#FFFFFF`, Thumb (on): `#000000`
- Track: 52x32px, border radius 16px

**Press behavior:** Entire row toggles the switch

#### 3b. Description Text (below card, NOT inside card)
- **Text:** "Allow your content to be used to improve our models for you and other users. We take steps to protect your privacy. Learn more"
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Line height:** 20px [ESTIMATED]
- **Margin top:** 12px [ESTIMATED]
- **Padding horizontal:** 16px (matches screen padding)
- **"Learn more":** Underlined link, same color `#9A9A9A`

#### 3c. Export Data Row Card
- **Margin top:** 16px [ESTIMATED]
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

##### Row: "Export Data"
- **Layout:** Simple text row, no icon
- **Height:** ~52px [ESTIMATED]
- **Padding horizontal:** 16px

**Text:**
- "Export Data"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

**Press behavior:** No-op

#### 3d. Delete Account Row Card
- **Margin top:** 16px [ESTIMATED]
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

##### Row: "Delete OpenAI account"
- **Layout:** Simple text row, no icon
- **Height:** ~52px [ESTIMATED]
- **Padding horizontal:** 16px

**Text:**
- "Delete OpenAI account"
- Font size: 16px, Weight: 400
- **Color:** `#E57373` [ESTIMATED] -- red/destructive text (same red as "Log out" and "Clear chat history")

**Press behavior:** No-op

---

### 4. Section 2: "Voice"

#### 4a. Section Header
- **Text:** "Voice"
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 500 (Medium)
- **Color:** `#FFFFFF` -- white, NOT gray
- **Margin top:** 24px [ESTIMATED]
- **Margin bottom:** 10px [ESTIMATED]

#### 4b. Toggle Card Group
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

##### Row 1: "Include your audio recordings"
- **Layout:** Row with text + toggle switch
- **Height:** ~52px [ESTIMATED]
- **Border bottom:** 1px separator

**Text:**
- "Include your audio recordings"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

**Toggle (right):**
- State: OFF
- Track (off): `#4A4A4A`, Thumb (off): `#9A9A9A`

##### Row 2: "Include your video recordings"
- **Layout:** Row with text + toggle switch
- **Height:** ~52px [ESTIMATED]

**Text:**
- "Include your video recordings"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

**Toggle (right):**
- State: ON
- Track (on): `#FFFFFF`, Thumb (on): `#000000`

#### 4c. Description Text (below card)
- **Text:** "Include your audio or video recordings from Voice to train our models. Transcripts and other files are covered by Improve the model for everyone. Learn more"
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Margin top:** 12px [ESTIMATED]
- **"Learn more":** Underlined link, same color

---

### 5. Section 3: "Chat history"

#### 5a. Section Header
- **Text:** "Chat history"
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 500 (Medium)
- **Color:** `#FFFFFF` -- white
- **Margin top:** 24px [ESTIMATED]
- **Margin bottom:** 10px [ESTIMATED]

#### 5b. Card Group
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

##### Row 1: "View archived chats"
- **Text:** Font size 16px, Weight 400, Color `#FFFFFF`
- **Height:** ~52px
- **Border bottom:** 1px separator
- **Border radius:** 16px top
- **Press behavior:** No-op

##### Row 2: "Archive chat history"
- **Text:** Font size 16px, Weight 400, Color `#FFFFFF`
- **Height:** ~52px
- **Border bottom:** 1px separator
- **Press behavior:** No-op

##### Row 3: "Clear chat history"
- **Text:** Font size 16px, Weight 400
- **Color:** `#E57373` [ESTIMATED] -- red/destructive text
- **Height:** ~52px
- **Border radius:** 0 top, 16px bottom
- **Press behavior:** No-op

---

## Notes
- This screen uses simple text rows WITHOUT icons (unlike settings main which has icons for every row)
- Destructive actions ("Delete OpenAI account", "Clear chat history") use red text `#E57373`
- Description text appears BELOW cards, not inside them
- Toggle rows are pressable on the entire row
- "Export Data" and "Delete OpenAI account" are standalone single-row cards (not grouped)
- Section headers on this screen use white text, not gray
