/**
 * SidebarMenuItem — Row with icon and text label for sidebar navigation items.
 *
 * Supports two text weights: '500' (Medium, for actions) and '400' (Regular, for projects).
 * Press feedback: animated background #2A2A2A with 8px border radius, 100ms duration.
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Typography } from '@/src/constants/typography';
import { Animations } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SidebarMenuItemProps {
  /** Pre-rendered lucide icon */
  icon: React.ReactNode;
  /** Display label */
  label: string;
  /** Press handler */
  onPress: () => void;
  /** '400' for projects, '500' for actions (default: '500') */
  textWeight?: '400' | '500';
  /** Accessibility label */
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SidebarMenuItem({
  icon,
  label,
  onPress,
  textWeight = '500',
  accessibilityLabel,
}: SidebarMenuItemProps): React.JSX.Element {
  const pressProgress = useSharedValue(0);

  const animatedBgStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      pressProgress.value,
      [0, 1],
      ['transparent', Colors.bg.pressSidebarItem]
    ),
  }));

  const handlePressIn = (): void => {
    pressProgress.value = withTiming(1, { duration: Animations.durationPress });
  };

  const handlePressOut = (): void => {
    pressProgress.value = withTiming(0, { duration: Animations.durationPress });
  };

  const labelStyle =
    textWeight === '400' ? styles.labelRegular : styles.labelMedium;

  return (
    <Animated.View style={[styles.container, animatedBgStyle]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={styles.pressable}
      >
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={labelStyle} numberOfLines={1}>
          {label}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  pressable: {
    height: Dimensions.sidebarMenuItemHeight,
    paddingHorizontal: Spacing.sidebarPaddingH,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.iconTextGap,
  },
  iconContainer: {
    width: Dimensions.iconSizeLg,
    height: Dimensions.iconSizeLg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelMedium: {
    ...Typography.labelSm,
    color: Colors.text.sidebarItem,
    flexShrink: 1,
  },
  labelRegular: {
    ...Typography.bodyMd,
    color: Colors.text.sidebarItem,
    flexShrink: 1,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SidebarMenuItem;
