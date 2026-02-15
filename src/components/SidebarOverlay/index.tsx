/**
 * SidebarOverlay — Semi-transparent overlay covering screen space right of sidebar.
 *
 * Animates opacity in sync with sidebar open/close.
 * Tapping the overlay closes the sidebar.
 */

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, type SharedValue } from 'react-native-reanimated';

interface SidebarOverlayProps {
  /** Closes the sidebar */
  onPress: () => void;
  /** Reanimated shared value controlling opacity (0 = closed, 1 = fully open) */
  animatedProgress: SharedValue<number>;
  /** Accessibility label */
  accessibilityLabel?: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function SidebarOverlay({
  onPress,
  animatedProgress,
  accessibilityLabel = 'Close sidebar',
}: SidebarOverlayProps): React.JSX.Element {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: animatedProgress.value * 0.5,
    pointerEvents: animatedProgress.value > 0.01 ? 'auto' as const : 'none' as const,
  }));

  return (
    <AnimatedPressable
      style={[styles.overlay, animatedStyle]}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
    />
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
    zIndex: 10,
  },
});

export default SidebarOverlay;
