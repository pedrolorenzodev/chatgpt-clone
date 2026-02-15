# 04 Auth Loading Transition -- Spec

**File reference:** `/references/auth/04_auth-loading-transition.jpg`
**Auth state:** Transitioning from unauthenticated to authenticated
**Purpose:** Full-screen loading indicator shown after successful auth action. Purely cosmetic transition screen with a hardcoded 3-second duration before navigating to the authenticated ChatScreen.

---

## Screen Overview

Extremely minimal screen. Pure black background with a single white circular loading spinner centered on screen. No text, no buttons, no other UI elements. The spinner rotates continuously.

---

## Layout Structure

```
View (flex: 1, bg: #000000, justifyContent: center, alignItems: center)
  StatusBar (light-content)
  ActivityIndicator / Custom Spinner (centered)
```

---

## Element-by-Element Specification

### 1. Background
- **Color:** `#000000` (pure black)
- **Dimensions:** Full screen (100% width, 100% height)
- **No safe area concerns** -- the background fills everything

### 2. Loading Spinner
- **Position:** Absolutely centered (both horizontally and vertically)
- **Type:** Circular arc spinner (partial circle that rotates)
- **Size:** 36px diameter [ESTIMATED]
- **Stroke width:** 3px [ESTIMATED]
- **Color:** `#FFFFFF`
- **Style:** Partial arc (approximately 270 degrees of a circle visible, 90-degree gap)
- **Rotation animation:**
  - Type: Continuous rotation (0 to 360 degrees, repeating)
  - Duration per rotation: ~1000ms [ESTIMATED]
  - Easing: Linear (constant speed rotation)
  - Note: This is an exception to the "never linear" animation rule -- spinners traditionally use linear rotation. Alternatively, use `Easing.bezier(0.4, 0.0, 0.2, 1.0)` for a Material Design style spinner that speeds up and slows down [ESTIMATED].
- **Implementation note:** Can use React Native's `ActivityIndicator` with `color="#FFFFFF"` and `size="large"`, or a custom Reanimated spinner for more control over size and animation.

---

## Component Breakdown

| Component | Reusable? | Notes |
|---|---|---|
| `LoadingSpinner` | Yes | Centered spinning indicator. Could be reused for any full-screen loading state. |
| `FullScreenLoader` | Yes | Full black screen + centered spinner. A composed component. |

---

## Dark Mode Values

- Background: `#000000`
- Spinner: `#FFFFFF`

That is the entirety of the color palette for this screen.

---

## Interactive States

This screen has NO interactive elements:
- No buttons
- No back navigation
- No gestures
- Hardware back button should be disabled / no-op during this transition

---

## Animations

### Spinner Rotation
- **Type:** Continuous rotation using `useAnimatedStyle` + `withRepeat(withTiming(...))`
- **Implementation:**
  ```
  rotation = useSharedValue(0)

  useEffect:
    rotation.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -1,  // infinite repeats
      false // no reverse
    )

  animatedStyle = useAnimatedStyle:
    transform: [{ rotate: `${rotation.value}deg` }]
  ```
- **Alternative:** Use `ActivityIndicator` component which handles its own animation natively.

### Screen Entry
- **Type:** Instant (no animation per flow.md)
- **From:** auth/03 login screen
- **Effect:** Immediate replacement of the login screen

### Screen Exit (after 3 seconds)
- **Type:** Fade out
- **Duration:** ~500ms [ESTIMATED]
- **Easing:** `Easing.out(Easing.ease)` [ESTIMATED]
- **Effect:** The entire screen (black bg + spinner) fades out to reveal the authenticated ChatScreen beneath
- **Timing:**
  - Total duration on screen: 3000ms (hardcoded per flow.md)
  - At 3000ms: begin fade-out animation (~500ms)
  - At ~3500ms: navigation to authenticated ChatScreen complete

### Navigation
- **Entry:** Instant navigation from auth/03
- **Exit:** Fade-out to chat/01 (authenticated)
- **Implementation note:** Use a `setTimeout(3000)` to trigger navigation. The fade-out should be on this screen (opacity 0) while the next screen is already rendered beneath.

---

## Behavior Notes

1. This screen is NOT dismissible. The user cannot go back, cannot interact, cannot cancel.
2. The 3-second duration is hardcoded -- there is no actual network request happening.
3. After the timer completes, the app navigates to the authenticated ChatScreen. The user should see the sidebar now showing their name, chat history, etc.
4. The status bar should remain light-content style during this screen.
5. Keep the screen simple -- avoid overcomplicating the spinner. The native `ActivityIndicator` is a perfectly acceptable implementation if it matches the visual appearance.
