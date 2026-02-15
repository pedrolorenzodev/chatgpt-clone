/**
 * OutlineButton — Pill-shaped button with transparent background and border.
 *
 * Used for secondary actions (Google sign-in, phone/email toggle, "Log in",
 * "Edit profile", GroupChat action buttons). Supports optional left icon,
 * loading state, and configurable border color.
 */

import React, { useCallback, useMemo } from 'react';
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

interface OutlineButtonProps {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;
  isLoading?: boolean;
  borderColor?: string;
  height?: number;
  borderRadius?: number;
  fontSize?: number;
  width?: 'full' | 'auto';
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function OutlineButton({
  label,
  onPress,
  icon,
  isLoading = false,
  borderColor = Colors.border.inputDefault,
  height = Dimensions.buttonHeight,
  borderRadius = Dimensions.buttonRadius,
  fontSize = Typography.labelSm.fontSize,
  width = 'full',
  accessibilityLabel,
}: OutlineButtonProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityButton,
  });

  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        height,
        borderRadius,
        borderColor,
      },
    ],
    [height, borderRadius, borderColor],
  );

  const textStyle = useMemo(
    () => [
      styles.label,
      { fontSize },
      isLoading ? styles.labelLoading : styles.labelDefault,
    ],
    [fontSize, isLoading],
  );

  const handlePress = useCallback((): void => {
    if (!isLoading) {
      onPress();
    }
  }, [isLoading, onPress]);

  return (
    <Animated.View
      style={[
        styles.animatedWrapper,
        width === 'full' ? styles.widthFull : styles.widthAuto,
        animatedStyle,
      ]}
    >
      <Pressable
        onPress={handlePress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={isLoading}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={containerStyle}
      >
        <View style={styles.contentRow}>
          {icon && <View style={styles.iconWrapper}>{icon}</View>}
          <Text style={textStyle} numberOfLines={1}>
            {label}
          </Text>
          {isLoading && (
            <ActivityIndicator
              size="small"
              color={Colors.spinner.inlineMuted}
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
    backgroundColor: Colors.bg.buttonOutline,
    borderWidth: 1,
    paddingHorizontal: Spacing.xxl,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginRight: Spacing.iconTextGapButton,
  },
  label: {
    fontWeight: Typography.labelSm.fontWeight,
    lineHeight: Typography.labelSm.lineHeight,
  },
  labelDefault: {
    color: Colors.text.primary,
  },
  labelLoading: {
    color: Colors.text.disabled,
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

export default OutlineButton;
