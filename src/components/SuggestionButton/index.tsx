/**
 * SuggestionButton -- Pill-shaped button with icon and text label.
 *
 * Used in the suggestion grid on the empty chat screen.
 * Press feedback: animated background from transparent to #2A2A2A (100ms).
 */

import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import {
  Lightbulb,
  Gem,
  Code,
  FileText,
  Image,
  Pencil,
} from 'lucide-react-native';

import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Typography } from '@/src/constants/typography';
import { Animations } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Icon mapping
// ---------------------------------------------------------------------------

type IconComponent = React.ComponentType<{
  size: number;
  color: string;
  strokeWidth?: number;
}>;

const ICON_MAP: Record<string, IconComponent> = {
  Lightbulb,
  Gem,
  Code,
  FileText,
  Image,
  Pencil,
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SuggestionButtonProps {
  /** Lucide icon name (must match a key in ICON_MAP) */
  icon: string;
  /** Hex color for the icon */
  iconColor: string;
  /** Button text label */
  label: string;
  /** Press handler */
  onPress: () => void;
  /** Accessibility label for the button */
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SuggestionButton({
  icon,
  iconColor,
  label,
  onPress,
  accessibilityLabel,
}: SuggestionButtonProps): React.JSX.Element {
  const pressProgress = useSharedValue(0);

  const animatedBgStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      pressProgress.value,
      [0, 1],
      ['transparent', Colors.bg.pressSidebarItem],
    ),
  }));

  const handlePressIn = useCallback((): void => {
    pressProgress.value = withTiming(1, { duration: Animations.durationPress });
  }, [pressProgress]);

  const handlePressOut = useCallback((): void => {
    pressProgress.value = withTiming(0, { duration: Animations.durationPress });
  }, [pressProgress]);

  const IconComponent = ICON_MAP[icon];

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
        {IconComponent != null && (
          <IconComponent
            size={Dimensions.chatSuggestionIconSize}
            color={iconColor}
            strokeWidth={1.8}
          />
        )}
        <Text style={styles.label} numberOfLines={1}>
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
    borderRadius: Dimensions.chatSuggestionBtnRadius,
    borderWidth: 1,
    borderColor: Colors.border.suggestionButton,
    overflow: 'hidden',
  },
  pressable: {
    height: Dimensions.chatSuggestionBtnHeight,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    ...Typography.bodyMd,
    color: Colors.text.suggestionBtn,
    flexShrink: 1,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SuggestionButton;
