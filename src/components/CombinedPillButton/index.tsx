/**
 * CombinedPillButton -- Pill container holding two icon buttons side by side.
 * Used in auth chat header for grouping related actions (e.g., AddPerson + Bubble).
 * Each icon is independently pressable with its own opacity feedback.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import * as LucideIcons from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface CombinedPillButtonProps {
  leftIcon: string;
  rightIcon: string;
  onLeftPress: () => void;
  onRightPress: () => void;
  leftAccessibilityLabel: string;
  rightAccessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE = 22;
const ICON_GAP = 16;

// ---------------------------------------------------------------------------
// Sub-component: Individual icon with its own press animation
// ---------------------------------------------------------------------------

interface PillIconProps {
  iconName: string;
  onPress: () => void;
  accessibilityLabel: string;
}

function PillIcon({
  iconName,
  onPress,
  accessibilityLabel,
}: PillIconProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityIcon,
  });

  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[iconName];

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        hitSlop={4}
      >
        {IconComponent ? (
          <IconComponent
            size={ICON_SIZE}
            color={Colors.icon.primary}
            strokeWidth={2}
          />
        ) : null}
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function CombinedPillButton({
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  leftAccessibilityLabel,
  rightAccessibilityLabel,
}: CombinedPillButtonProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <PillIcon
        iconName={leftIcon}
        onPress={onLeftPress}
        accessibilityLabel={leftAccessibilityLabel}
      />
      <View style={styles.gap} />
      <PillIcon
        iconName={rightIcon}
        onPress={onRightPress}
        accessibilityLabel={rightAccessibilityLabel}
      />
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    height: Dimensions.combinedPillHeight,
    borderRadius: Dimensions.combinedPillRadius,
    backgroundColor: Colors.bg.surface,
    paddingHorizontal: Dimensions.combinedPillPaddingH,
    flexDirection: 'row',
    alignItems: 'center',
  },
  gap: {
    width: ICON_GAP,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default CombinedPillButton;
