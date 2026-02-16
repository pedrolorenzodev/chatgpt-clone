/**
 * SuggestionTextItem — Row with a lucide icon and suggestion text.
 *
 * Used in expanded suggestion lists and Search/Study mode panels.
 * Press feedback: opacity 0.7 via useAnimatedPress hook.
 * Optional bottom separator (default: visible).
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import {
  Code,
  Lightbulb,
  Gem,
  FileText,
  Image,
  Pencil,
  TrendingUp,
  MessageCircle,
  SlidersHorizontal,
  GraduationCap,
} from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Typography } from '@/src/constants/typography';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Icon map
// ---------------------------------------------------------------------------

const ICON_MAP: Record<
  string,
  React.ComponentType<{ size: number; color: string; strokeWidth?: number }>
> = {
  Code,
  Lightbulb,
  Gem,
  FileText,
  Image,
  Pencil,
  TrendingUp,
  MessageCircle,
  SlidersHorizontal,
  GraduationCap,
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SuggestionTextItemProps {
  /** Lucide icon name (must match a key in ICON_MAP) */
  icon: string;
  /** Hex color applied to the icon */
  iconColor: string;
  /** Suggestion text displayed next to the icon */
  text: string;
  /** Press handler */
  onPress: () => void;
  /** Whether to show a bottom separator (default: true) */
  showSeparator?: boolean;
  /** Accessibility label override */
  accessibilityLabel?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SuggestionTextItem({
  icon,
  iconColor,
  text,
  onPress,
  showSeparator = true,
  accessibilityLabel,
}: SuggestionTextItemProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityIcon,
  });

  const IconComponent = ICON_MAP[icon];

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityLabel={accessibilityLabel ?? text}
        accessibilityRole="button"
        style={styles.pressable}
      >
        <View style={styles.iconContainer}>
          {IconComponent != null && (
            <IconComponent
              size={Dimensions.chatSuggestionIconSize}
              color={iconColor}
            />
          )}
        </View>
        <Text style={styles.text} numberOfLines={1}>
          {text}
        </Text>
      </Pressable>
      {showSeparator && <View style={styles.separator} />}
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const ITEM_HEIGHT = 56;

const styles = StyleSheet.create({
  pressable: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: Dimensions.chatSuggestionIconSize,
    height: Dimensions.chatSuggestionIconSize,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.iconTextGap,
  },
  text: {
    ...Typography.bodyMd,
    color: Colors.text.secondary,
    flexShrink: 1,
  },
  separator: {
    height: Dimensions.separatorHeight,
    backgroundColor: Colors.border.separator,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SuggestionTextItem;
