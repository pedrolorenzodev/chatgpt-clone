/**
 * OptionRow -- A single option row inside the ContextualModal.
 *
 * Supports icon, label, subtitle, chevron, checkmark, and destructive color.
 */

import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ChevronRight, ChevronDown, Check } from 'lucide-react-native';

import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Animations } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types (re-exported from parent for convenience)
// ---------------------------------------------------------------------------

export interface ContextualModalOption {
  /** Pre-rendered lucide icon (optional) */
  icon?: React.ReactNode;
  /** Display label */
  label: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Right-side chevron */
  chevron?: 'right' | 'down' | 'none';
  /** Color variant */
  color?: 'default' | 'destructive';
  /** Show checkmark on right */
  checkmark?: boolean;
  /** Action handler */
  onPress: () => void;
}

interface OptionRowProps {
  option: ContextualModalOption;
  onClose: () => void;
  isLast: boolean;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function OptionRow({
  option,
  onClose,
  isLast,
}: OptionRowProps): React.JSX.Element {
  const pressed = useSharedValue(0);

  const bgStyle = useAnimatedStyle(() => ({
    backgroundColor:
      pressed.value === 1 ? Colors.bg.dropdownOptionPressed : 'transparent',
  }));

  const isDestructive = option.color === 'destructive';
  const textColor = isDestructive
    ? Colors.text.destructive
    : Colors.text.primary;

  const handlePress = useCallback((): void => {
    option.onPress();
    onClose();
  }, [option, onClose]);

  return (
    <Animated.View style={bgStyle}>
      <Pressable
        onPress={handlePress}
        onPressIn={() => {
          pressed.value = withTiming(1, { duration: Animations.durationPress });
        }}
        onPressOut={() => {
          pressed.value = withTiming(0, { duration: Animations.durationPress });
        }}
        accessibilityLabel={option.label}
        accessibilityRole="button"
        style={styles.optionRow}
      >
        {/* Left icon */}
        {option.icon != null && (
          <View style={styles.optionIcon}>{option.icon}</View>
        )}

        {/* Text block */}
        <View style={styles.optionTextBlock}>
          <Text
            style={[styles.optionLabel, { color: textColor }]}
            numberOfLines={1}
          >
            {option.label}
          </Text>
          {option.subtitle != null && (
            <Text style={styles.optionSubtitle} numberOfLines={1}>
              {option.subtitle}
            </Text>
          )}
        </View>

        {/* Right element */}
        {option.checkmark === true && (
          <Check
            size={Dimensions.iconSizeMd}
            color={Colors.icon.primary}
            strokeWidth={2}
          />
        )}
        {option.chevron === 'right' && (
          <ChevronRight
            size={Dimensions.iconSizeSm}
            color={Colors.icon.chevronSecondary}
            strokeWidth={2}
          />
        )}
        {option.chevron === 'down' && (
          <ChevronDown
            size={Dimensions.iconSizeSm}
            color={Colors.icon.chevronSecondary}
            strokeWidth={2}
          />
        )}
      </Pressable>

      {/* Separator */}
      {!isLast && <View style={styles.separator} />}
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 46,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  optionIcon: {
    width: Dimensions.iconSizeMd,
    height: Dimensions.iconSizeMd,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  optionTextBlock: {
    flex: 1,
  },
  optionLabel: {
    ...Typography.bodyMd,
    color: Colors.text.primary,
  },
  optionSubtitle: {
    ...Typography.bodyXxs,
    color: Colors.text.tertiary,
    marginTop: 2,
  },
  separator: {
    height: Dimensions.separatorHeight,
    backgroundColor: Colors.border.settingsRowSeparator,
    marginHorizontal: Spacing.lg,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default OptionRow;
