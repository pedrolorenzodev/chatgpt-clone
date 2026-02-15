/**
 * FloatingLabelInput — Text input with animated floating placeholder label.
 *
 * When focused, the placeholder shrinks and moves to the top border,
 * "cutting" through the border line with a background patch.
 * On blur with text: label stays floated. On blur empty: label animates back.
 */

import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  type KeyboardTypeOptions,
  type StyleProp,
  type TextInput as TextInputType,
  type ViewStyle,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { Colors } from '@/src/constants/colors';
import { Animations, Easings } from '@/src/constants/animations';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';

interface FloatingLabelInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?: string;
  borderColor?: string;
  borderRadius?: number;
  accessibilityLabel: string;
}

const LABEL_UNFOCUSED_FONT_SIZE = 16;
const LABEL_FOCUSED_FONT_SIZE = 12;
const LABEL_UNFOCUSED_TOP = 17;
const LABEL_FOCUSED_TOP = -8;
const LABEL_PATCH_PADDING_H = 4;

function FloatingLabelInput({
  label,
  value,
  onChangeText,
  onFocus,
  onBlur,
  keyboardType,
  autoCapitalize = 'none',
  borderColor,
  borderRadius,
  accessibilityLabel,
}: FloatingLabelInputProps): React.JSX.Element {
  const inputRef = useRef<TextInputType>(null);
  const [isFocused, setIsFocused] = useState(false);

  const progress = useSharedValue(value.length > 0 ? 1 : 0);

  const handleFocus = useCallback((): void => {
    setIsFocused(true);
    progress.value = withTiming(1, {
      duration: Animations.durationFloatLabel,
      easing: Easings.decelerate,
    });
    onFocus?.();
  }, [onFocus, progress]);

  const handleBlur = useCallback((): void => {
    setIsFocused(false);
    if (value.length === 0) {
      progress.value = withTiming(0, {
        duration: Animations.durationFloatLabel,
        easing: Easings.decelerate,
      });
    }
    onBlur?.();
  }, [onBlur, progress, value.length]);

  const handleContainerPress = useCallback((): void => {
    inputRef.current?.focus();
  }, []);

  const animatedLabelStyle = useAnimatedStyle(() => {
    const top = interpolate(
      progress.value,
      [0, 1],
      [LABEL_UNFOCUSED_TOP, LABEL_FOCUSED_TOP],
    );
    const fontSize = interpolate(
      progress.value,
      [0, 1],
      [LABEL_UNFOCUSED_FONT_SIZE, LABEL_FOCUSED_FONT_SIZE],
    );

    return {
      top,
      fontSize,
    };
  });

  const animatedLabelColorStyle = useAnimatedStyle(() => {
    const colorValue = interpolate(progress.value, [0, 1], [0, 1]);
    return {
      color: colorValue > 0.5 ? Colors.text.floatingLabel : Colors.text.placeholder,
    };
  });

  const containerStyle = useMemo<StyleProp<ViewStyle>>(() => {
    const resolvedBorderColor = isFocused
      ? Colors.border.inputFocused
      : (borderColor ?? Colors.border.inputDefault);
    const resolvedBorderWidth = isFocused
      ? Dimensions.inputBorderWidthFocused
      : Dimensions.inputBorderWidthDefault;
    const resolvedRadius = borderRadius ?? Dimensions.inputRadius;

    return StyleSheet.flatten([
      styles.container,
      {
        borderColor: resolvedBorderColor,
        borderWidth: resolvedBorderWidth,
        borderRadius: resolvedRadius,
      },
    ]);
  }, [isFocused, borderColor, borderRadius]);

  return (
    <Pressable
      onPress={handleContainerPress}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="none"
      style={styles.wrapper}
    >
      <View style={containerStyle}>
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={styles.input}
          cursorColor={Colors.text.primary}
          selectionColor={Colors.text.selectionHighlight}
          accessibilityLabel={accessibilityLabel}
        />

        {/* Floating label with background patch */}
        <Animated.View
          style={[styles.labelContainer, animatedLabelStyle]}
          pointerEvents="none"
        >
          <View style={styles.labelPatch}>
            <Animated.Text
              style={[styles.labelText, animatedLabelColorStyle]}
              numberOfLines={1}
            >
              {label}
            </Animated.Text>
          </View>
        </Animated.View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    height: Dimensions.inputHeight,
    backgroundColor: Colors.bg.inputAuth,
    justifyContent: 'center',
    position: 'relative',
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.text.primary,
    paddingHorizontal: Spacing.inputPaddingH,
    paddingVertical: 0,
  },
  labelContainer: {
    position: 'absolute',
    left: Spacing.inputPaddingH - LABEL_PATCH_PADDING_H,
  },
  labelPatch: {
    backgroundColor: Colors.bg.inputAuth,
    paddingHorizontal: LABEL_PATCH_PADDING_H,
  },
  labelText: {
    fontWeight: '400',
  },
});

export default FloatingLabelInput;
