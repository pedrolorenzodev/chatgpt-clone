/**
 * Popup -- Toast notification at the bottom of the screen.
 *
 * Auto-dismisses after 3 seconds (configurable). Has close X icon.
 * Slide-up + fade-in animation on appear, fade-out on dismiss.
 */

import React, { useCallback, useEffect, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  SlideInDown,
  FadeOut,
} from 'react-native-reanimated';
import { X } from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Animations, Easings, Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PopupProps {
  visible: boolean;
  message: string;
  onClose: () => void;
  autoDismissMs?: number;
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DEFAULT_AUTO_DISMISS = 3000;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function Popup({
  visible,
  message,
  onClose,
  autoDismissMs = DEFAULT_AUTO_DISMISS,
  accessibilityLabel,
}: PopupProps): React.JSX.Element | null {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { animatedStyle: closeAnimStyle, onPressIn, onPressOut } =
    useAnimatedPress({ opacity: Press.opacityIcon });

  const clearTimer = useCallback((): void => {
    if (timerRef.current != null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (visible && autoDismissMs > 0) {
      clearTimer();
      timerRef.current = setTimeout(() => {
        onClose();
      }, autoDismissMs);
    }
    return clearTimer;
  }, [visible, autoDismissMs, onClose, clearTimer]);

  if (!visible) return null;

  return (
    <Animated.View
      entering={SlideInDown.duration(Animations.durationContextMenu).easing(
        Easings.standard,
      )}
      exiting={FadeOut.duration(Animations.durationFast).easing(
        Easings.standard,
      )}
      style={styles.wrapper}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="alert"
    >
      <View style={styles.container}>
        <Text style={styles.message} numberOfLines={2}>
          {message}
        </Text>

        <Animated.View style={closeAnimStyle}>
          <Pressable
            onPress={onClose}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            hitSlop={Spacing.sm}
            accessibilityLabel="Dismiss notification"
            accessibilityRole="button"
            style={styles.closeButton}
          >
            <X
              size={Dimensions.iconSizeMd}
              color={Colors.icon.secondary}
              strokeWidth={2}
            />
          </Pressable>
        </Animated.View>
      </View>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 100,
    left: Spacing.popupMarginH,
    right: Spacing.popupMarginH,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bg.popup,
    borderRadius: Dimensions.chatEditWarningRadius,
    paddingVertical: Spacing.popupPadding,
    paddingHorizontal: Spacing.xl,
  },
  message: {
    ...Typography.bodySm,
    color: Colors.text.primary,
    flex: 1,
    marginRight: Spacing.md,
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default Popup;
