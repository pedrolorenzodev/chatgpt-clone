# 04 Auth Loading Transition -- Spec (Revision 1)

**File reference:** `/references/auth/04_auth-loading-transition.jpg`
**Auth state:** Transitioning from unauthenticated to authenticated
**Purpose:** Full-screen loading indicator shown after auth actions (Continue with valid email or Continue with Google). Hardcoded 3-second duration before navigating to the authenticated ChatScreen.

---

## Screen Overview

Minimal screen. Pure black background with a single white circular loading spinner centered both horizontally and vertically. No text, no buttons, no header, no navigation elements. The spinner is the only visual element on screen. This is a non-interactive transition screen.

---

## Layout Structure

```
View (flex: 1, bg: #000000, justifyContent: center, alignItems: center)
  StatusBar (style: light-content, bg: #000000)
  LoadingSpinner (centered)
```

---

## Element-by-Element Specification

### 1. Background
- **Color:** `#000000` (pure black)
- **Dimensions:** Full screen (100% width, 100% height)
- **No safe area padding needed** -- background fills everything edge-to-edge

### 2. Loading Spinner
- **Position:** Exactly centered (both horizontally and vertically in the screen)
- **Type:** Circular arc spinner -- a partial circle (approximately 270-degree arc, 90-degree gap) that rotates continuously
- **Size:** 36px diameter [ESTIMATED] -- examining the screenshot, the spinner is medium-sized, not the small ActivityIndicator nor an oversized one
- **Stroke width:** 3px [ESTIMATED]
- **Color:** `#FFFFFF`
- **Arc extent:** ~270 degrees visible, ~90 degrees gap [ESTIMATED]

#### Rotation Animation:
- **Type:** Continuous rotation, 0deg to 360deg, repeating infinitely
- **Duration per full rotation:** ~1000ms [ESTIMATED]
- **Easing:** `Easing.linear` -- spinners traditionally use linear rotation for constant perceived speed
  - **Note:** This is an EXCEPTION to the "never linear" animation rule in CLAUDE.md. Loading spinners require linear rotation to look correct. Alternatively, use a Material Design-style easing where the arc length changes during rotation, but the simplest approach is linear.
- **Repeat:** Infinite (`withRepeat(..., -1, false)`)

#### Implementation Options:
1. **React Native `ActivityIndicator`:** Use `<ActivityIndicator size="large" color="#FFFFFF" />`. This uses the platform's native spinner which handles its own animation. Size "large" on Android is approximately 36px.
2. **Custom Reanimated Spinner:** For exact control over size, color, and animation:
   ```
   - Create an SVG circle arc (or use a partial border View)
   - Use useSharedValue + withRepeat + withTiming for rotation
   - Apply useAnimatedStyle with transform: [{ rotate }]
   ```

---

## Component Breakdown

| Element | Component | Reusable? | Notes |
|---|---|---|---|
| Spinner | `LoadingSpinner` | Yes | Can be used for any loading state |
| Full screen | `FullScreenLoader` | Yes | Composed: black bg + centered spinner |

---

## Dark Mode Values

| Element | Value |
|---|---|
| Background | `#000000` |
| Spinner | `#FFFFFF` |

Only two colors on this entire screen.

---

## Interactive States

This screen has **ZERO** interactive elements:
- No buttons
- No back navigation
- No tap targets
- No gestures
- **Hardware back button should be disabled / no-op** during this transition
- The user cannot cancel or interrupt the loading process

---

## Animations

### Spinner Rotation
```
const rotation = useSharedValue(0);

useEffect(() => {
  rotation.value = withRepeat(
    withTiming(360, { duration: 1000, easing: Easing.linear }),
    -1,   // infinite
    false  // no reverse
  );
}, []);

const animatedStyle = useAnimatedStyle(() => ({
  transform: [{ rotate: `${rotation.value}deg` }],
}));
```

### Screen Entry
- **Type:** Instant (no animation, per flow.md)
- **From:** auth/03 login screen
- **Effect:** The login screen is immediately replaced by this loading screen

### Screen Exit (after 3 seconds)
- **Type:** Fade out
- **Duration:** ~500ms [ESTIMATED]
- **Easing:** `Easing.out(Easing.ease)` [ESTIMATED]
- **Effect:** The entire screen (black bg + spinner) fades to transparent, revealing the authenticated ChatScreen beneath
- **Timing sequence:**
  1. Screen appears instantly at t=0
  2. Spinner rotates continuously for 3 seconds
  3. At t=3000ms: begin fade-out animation
  4. At t=~3500ms: fade complete, navigate to authenticated ChatScreen
- **Implementation:** Use `setTimeout(3000)` to trigger the fade-out. Use a shared value for opacity animated from 1 to 0.

### Navigation Flow
1. From auth/03, the user presses "Continue" (with valid email) or "Continue with Google"
2. The button shows its loading spinner briefly
3. This screen (auth/04) appears instantly
4. After 3 seconds, this screen fades out
5. The authenticated ChatScreen (chat/01 with auth state) is revealed

---

## Behavior Notes

1. **Non-dismissible:** The user cannot go back, interact, or cancel during this screen.
2. **Hardcoded duration:** 3000ms is the fixed wait time. No actual network request occurs.
3. **State change:** After this screen completes, the app's global auth state should switch from `unauthenticated` to `authenticated`. This means:
   - The sidebar should now show the full authenticated version (search, projects, chat history, user footer)
   - The ChatScreen header should no longer show the "Log in" button
   - The ChatScreen should show the full authenticated experience
4. **Status bar:** Remains `light-content` throughout.
5. **Simplicity:** Do not overcomplicate. The native `ActivityIndicator` with `size="large"` and `color="#FFFFFF"` is an acceptable implementation if it visually matches.
