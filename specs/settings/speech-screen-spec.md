# Speech Screen Spec

**Screen name:** Speech
**File reference:** `references/settings/01i_speech-screen.jpg`
**Auth state:** Authenticated
**Entry animation:** SLIDE (push)
**Exit animation:** SLIDE (pop) with back button

---

## Layout Structure (top to bottom)

### 1. Header
- **Same pattern as all settings sub-screens**
- Back button: 48x48px circle, bg `#3A3A3A`, ArrowLeft 24px white
- Title: "Speech", 20px, SemiBold, `#FFFFFF`, centered

### 2. Content Area
- **Background:** `#000000`
- **Padding horizontal:** 16px
- **Padding top:** 8px [ESTIMATED]

### 3. Card Group 1 (Input language + description)
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]

#### Row 1: "Input language"
- **Layout:** Row with icon + text block + chevron
- **Height:** ~64px [ESTIMATED]
- **Padding horizontal:** 16px
- **Padding vertical:** 14px
- **Border bottom:** 1px separator

**Icon (left):**
- Icon: Mic (lucide) -- microphone
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`
- Margin right: 16px

**Text block (center):**
- **Title:** "Input language"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Subtitle:** "Auto-Detect"
  - Font size: 14px, Weight: 400, Color: `#9A9A9A`

**Chevron (right):**
- Icon: ChevronDown (lucide)
- Size: 24px [ESTIMATED]
- Color: `#FFFFFF`
- **Rotates to ChevronUp when dropdown is open**

**Press behavior:** Opens input language dropdown modal

#### Row 2: Description Text (inside the card)
- **Text:** "For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."
- **Font size:** 14px [ESTIMATED]
- **Font weight:** 400 (Regular)
- **Color:** `#9A9A9A` [ESTIMATED]
- **Line height:** 20px [ESTIMATED]
- **Padding:** 16px all sides [ESTIMATED]
- **Border bottom:** 1px separator
- **Background:** Same as card (`#2A2A2A`)

#### Row 3: "Voice"
- **Layout:** Row with icon + text block
- **Height:** ~64px [ESTIMATED]
- **Border bottom:** 1px separator

**Icon (left):**
- Icon: AudioLines or BarChart3 (lucide) -- audio waveform
- Size: 24px, Color: `#FFFFFF`

**Text block:**
- **Title:** "Voice"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Subtitle:** "Cove"
  - Font size: 14px, Weight: 400, Color: `#9A9A9A`

**Press behavior:** Not pressable

#### Row 4: "Separate mode"
- **Layout:** Row with icon + text + toggle switch
- **Height:** ~52px [ESTIMATED]
- **Border bottom:** 1px separator

**Icon (left):**
- Icon: Sliders (lucide) -- horizontal sliders
- Size: 24px, Color: `#FFFFFF`

**Text:**
- "Separate mode"
- Font size: 16px, Weight: 400, Color: `#FFFFFF`

**Toggle (right):**
- State: OFF
- Track (off): `#4A4A4A`, Thumb (off): `#9A9A9A`

**Press behavior:** Entire row toggles the switch

#### Row 5: "Background conversations"
- **Layout:** Row with icon + text block + toggle switch
- **Height:** auto (~80px) [ESTIMATED] -- multi-line subtitle

**Icon (left):**
- Icon: Custom (broadcast/antenna icon)
- Size: 24px, Color: `#FFFFFF`

**Text block (center):**
- **Title:** "Background conversations"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Subtitle:** "Keep the conversation going in other apps or while your screen is off."
  - Font size: 14px, Weight: 400, Color: `#9A9A9A`
  - Multi-line

**Toggle (right):**
- State: ON
- Track (on): `#FFFFFF`, Thumb (on): `#000000`
- Vertically centered with the title text (not the full row)

**Press behavior:** Entire row toggles the switch

#### Row 6: "Use as default assistant"
- **Layout:** Row with icon + text block + toggle switch
- **Height:** auto (~80px) [ESTIMATED] -- multi-line subtitle
- **Border radius:** 0 top, 16px bottom

**Icon (left):**
- Icon: Custom (ChatGPT logo / brain icon)
- Size: 24px, Color: `#FFFFFF`

**Text block (center):**
- **Title:** "Use as default assistant"
  - Font size: 16px, Weight: 400, Color: `#FFFFFF`
- **Subtitle:** "Set ChatGPT as your default digital assistant in Android settings."
  - Font size: 14px, Weight: 400, Color: `#9A9A9A`
  - Multi-line

**Toggle (right):**
- State: OFF
- Track (off): `#4A4A4A`, Thumb (off): `#9A9A9A`

**Press behavior:** Entire row toggles the switch

---

## Notes
- All rows with toggle switches are pressable on the entire row (not just the toggle)
- The description text row is a special non-interactive row embedded within the card
- All items are in a single continuous card group
- This screen has the most complex card layout of all settings sub-screens
