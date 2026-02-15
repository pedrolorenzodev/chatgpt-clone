/**
 * PrimaryButton — Full-width pill-shaped button with solid background.
 *
 * Variants: default (white bg, black text), disabled (gray bg, dim text),
 * gray (medium gray bg, white text).
 * Supports loading spinner, optional left icon, and welcome-screen height.
 */

import React, { useMemo } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Animated from 'react-native-reanimated';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'default' | 'disabled' | 'gray';
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  width?: 'full' | 'auto';
  isWelcome?: boolean;
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Variant maps
// ---------------------------------------------------------------------------

const VARIANT_BG: Record<NonNullable<PrimaryButtonProps['variant']>, string> = {
  default: Colors.bg.buttonPrimary,
  disabled: Colors.bg.buttonDisabled,
  gray: Colors.bg.buttonGray,
};

const VARIANT_TEXT: Record<NonNullable<PrimaryButtonProps['variant']>, string> = {
  default: Colors.text.onLight,
  disabled: Colors.text.disabled,
  gray: Colors.text.primary,
};

const VARIANT_SPINNER: Record<NonNullable<PrimaryButtonProps['variant']>, string> = {
  default: Colors.spinner.inlineDark,
  disabled: Colors.text.disabled,
  gray: Colors.spinner.light,
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function PrimaryButton({
  label,
  onPress,
  variant = 'default',
  isLoading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  width = 'full',
  isWelcome = false,
  accessibilityLabel,
}: PrimaryButtonProps): React.JSX.Element {
  const isDisabled = disabled || variant === 'disabled';

  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityButton,
    scale: Press.scaleButton,
  });

  const containerHeight = isWelcome
    ? Dimensions.buttonHeightWelcome
    : Dimensions.buttonHeight;
  const containerRadius = isWelcome
    ? Dimensions.buttonRadiusWelcome
    : Dimensions.buttonRadius;

  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        backgroundColor: VARIANT_BG[variant],
        height: containerHeight,
        borderRadius: containerRadius,
      },
    ],
    [variant, containerHeight, containerRadius],
  );

  const textStyle = useMemo(
    () => [
      isWelcome ? styles.labelWelcome : styles.label,
      { color: VARIANT_TEXT[variant] },
    ],
    [isWelcome, variant],
  );

  return (
    <Animated.View
      style={[
        styles.animatedWrapper,
        width === 'full' ? styles.widthFull : styles.widthAuto,
        animatedStyle,
      ]}
    >
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={isDisabled}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={containerStyle}
      >
        <View style={styles.contentRow}>
          {icon && iconPosition === 'left' && (
            <View style={styles.iconWrapperLeft}>{icon}</View>
          )}
          <Text style={textStyle} numberOfLines={1}>
            {label}
          </Text>
          {icon && iconPosition === 'right' && (
            <View style={styles.iconWrapperRight}>{icon}</View>
          )}
          {isLoading && (
            <ActivityIndicator
              size="small"
              color={VARIANT_SPINNER[variant]}
              style={styles.spinner}
            />
          )}
        </View>
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  animatedWrapper: {
    overflow: 'hidden',
  },
  widthFull: {
    width: '100%',
  },
  widthAuto: {
    alignSelf: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.buttonPaddingV,
    paddingHorizontal: Spacing.xxl,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapperLeft: {
    marginRight: Spacing.iconTextGapButton,
  },
  iconWrapperRight: {
    marginLeft: Spacing.iconTextGapButton,
  },
  label: {
    fontSize: Typography.labelMd.fontSize,
    fontWeight: Typography.labelMd.fontWeight,
    lineHeight: Typography.labelMd.lineHeight,
  },
  labelWelcome: {
    fontSize: Typography.labelBold.fontSize,
    fontWeight: Typography.labelMd.fontWeight,
    lineHeight: Typography.labelBold.lineHeight,
  },
  spinner: {
    marginLeft: Spacing.sm,
    width: Dimensions.spinnerSizeSm,
    height: Dimensions.spinnerSizeSm,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default PrimaryButton;
