/**
 * FeatureChip -- Small pill indicating an active feature mode inside the input bar.
 * Contains icon + label + close X button.
 * Supports auth/unauth styling and slide-up/down animations.
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';
import { X } from 'lucide-react-native';
import * as LucideIcons from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Animations, Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FeatureChipProps {
  icon: string;
  iconColor: string;
  label: string;
  labelColor?: string;
  isAuth?: boolean;
  onDismiss: () => void;
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CLOSE_ICON_SIZE = Dimensions.chatChipCloseSize;
const CHIP_ICON_SIZE = Dimensions.chatChipIconSize;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function FeatureChip({
  icon,
  iconColor,
  label,
  labelColor = Colors.text.primary,
  isAuth = false,
  onDismiss,
  accessibilityLabel,
}: FeatureChipProps): React.JSX.Element {
  const { animatedStyle: closeAnimStyle, onPressIn, onPressOut } =
    useAnimatedPress({ opacity: Press.opacityIcon });

  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[icon];

  const chipBgStyle = isAuth ? styles.chipAuth : styles.chipUnauth;

  return (
    <Animated.View
      entering={SlideInDown.duration(Animations.durationChipEnter)}
      exiting={SlideOutDown.duration(Animations.durationChipExit)}
      style={styles.wrapper}
    >
      <View
        style={[styles.chip, chipBgStyle]}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="text"
      >
        {IconComponent ? (
          <IconComponent
            size={CHIP_ICON_SIZE}
            color={iconColor}
            strokeWidth={2}
          />
        ) : null}
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
        <Animated.View style={closeAnimStyle}>
          <Pressable
            onPress={onDismiss}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            accessibilityLabel={`Remove ${label} mode`}
            accessibilityRole="button"
            hitSlop={6}
          >
            <X
              size={CLOSE_ICON_SIZE}
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
    alignSelf: 'flex-start',
  },
  chip: {
    height: Dimensions.chatChipHeight,
    borderRadius: Dimensions.chatChipRadius,
    paddingHorizontal: Spacing.chatChipPaddingH,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.chatChipIconGap,
  },
  chipAuth: {
    backgroundColor: Colors.bg.chipFilled,
  },
  chipUnauth: {
    backgroundColor: Colors.bg.chipTransparent,
    borderWidth: 1,
    borderColor: Colors.border.chip,
  },
  label: {
    fontSize: Typography.labelChip.fontSize,
    fontWeight: Typography.labelChip.fontWeight,
    lineHeight: Typography.labelChip.lineHeight,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default FeatureChip;
