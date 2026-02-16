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
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Animations } from '@/src/constants/animations';

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
  const pressed = useSharedValue(0);

  const animatedBgStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      pressed.value,
      [0, 1],
      ['transparent', Colors.bg.pressOutlineButton],
    ),
  }));

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

  const handlePressIn = useCallback((): void => {
    pressed.value = withTiming(1, { duration: Animations.durationPress });
  }, [pressed]);

  const handlePressOut = useCallback((): void => {
    pressed.value = withTiming(0, { duration: Animations.durationPress });
  }, [pressed]);

  return (
    <View
      style={[
        styles.outerWrapper,
        width === 'full' ? styles.widthFull : styles.widthAuto,
      ]}
    >
      <Pressable
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={isLoading}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
      >
        <Animated.View style={[containerStyle, animatedBgStyle]}>
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
        </Animated.View>
      </Pressable>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  outerWrapper: {},
  widthFull: {
    width: '100%',
  },
  widthAuto: {
    alignSelf: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
