/**
 * IconButton — Generic icon-only pressable button.
 *
 * Used for close (X), compose (SquarePen), sidebar toggle, action bar icons,
 * and other icon-based interactions throughout the app.
 *
 * Configurable container size, icon size, colors, background, and border radius.
 */

import React, { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface IconButtonProps {
  /** Pre-rendered lucide icon component */
  icon: React.ReactNode;
  onPress: () => void;
  /** Container size in px (default: 40) */
  size?: number;
  /** Extra hit area around the button (default: 0) */
  hitSlop?: number;
  /** Container background color (default: transparent) */
  backgroundColor?: string;
  /** Container border radius (default: size / 2) */
  borderRadius?: number;
  accessibilityLabel: string;
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function IconButton({
  icon,
  onPress,
  size = Dimensions.iconButtonSize,
  hitSlop = 0,
  backgroundColor = 'transparent',
  borderRadius,
  accessibilityLabel,
  disabled = false,
}: IconButtonProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityIcon,
  });

  const resolvedRadius = borderRadius ?? size / 2;

  const buttonStyle = useMemo(
    () => [
      styles.button,
      {
        width: size,
        height: size,
        borderRadius: resolvedRadius,
        backgroundColor,
      },
    ],
    [size, resolvedRadius, backgroundColor],
  );

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
        hitSlop={hitSlop}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={buttonStyle}
      >
        <View style={styles.iconContainer}>{icon}</View>
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default IconButton;
