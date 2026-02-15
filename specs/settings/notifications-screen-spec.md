# Notifications Screen Spec

**Screen name:** Notifications
**File reference:** `references/settings/01h_notifications-screen.jpg`
**Auth state:** Authenticated
**Entry animation:** SLIDE (push)
**Exit animation:** SLIDE (pop) with back button

---

## Layout Structure (top to bottom)

### 1. Header
- **Same pattern as all settings sub-screens**
- Back button: 48x48px circle, bg `#3A3A3A`, ArrowLeft 24px white
- Title: "Notifications", 20px, SemiBold, `#FFFFFF`, centered

### 2. Content Area
- **Background:** `#000000`
- **Padding horizontal:** 16px
- **Padding top:** 8px [ESTIMATED]

### 3. Card Group
- **Background:** `#2A2A2A` [ESTIMATED]
- **Border radius:** 16px [ESTIMATED]
- **Contains 6 rows**

#### Row Structure (same for all 6 items)
- **Layout:** Row with text (left) + status label (right)
- **Height:** ~52px [ESTIMATED]
- **Padding horizontal:** 16px [ESTIMATED]
- **Padding vertical:** 16px [ESTIMATED]

**Title (left):**
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: `#FFFFFF`

**Status label (right):**
- Text: "On"
- Font size: 16px [ESTIMATED]
- Font weight: 400 (Regular)
- Color: `#9A9A9A` [ESTIMATED]

**Press behavior:** Each item navigates to its own sub-screen (SLIDE push)

#### Items List

| # | Title | Status | Separator | Border Radius |
|---|---|---|---|---|
| 1 | Responses | On | 1px bottom | 16px top |
| 2 | Group chats | On | 1px bottom | 0 |
| 3 | Tasks | On | 1px bottom | 0 |
| 4 | Projects | On | 1px bottom | 0 |
| 5 | Recommendations | On | 1px bottom | 0 |
| 6 | Usage | On | none | 16px bottom |

---

## Notes
- No icons in the notification rows -- just text + status
- This is a simpler card layout compared to other settings screens
- All items show "On" status in the screenshot
- Each row navigates to a detail screen where the user can toggle Push/Email notifications
