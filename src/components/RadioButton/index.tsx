/**
 * RadioButton — Circular radio button with selected/unselected states.
 *
 * Selected: 2px white border + 10px white filled inner dot.
 * Unselected: 2px #9A9A9A border, no inner dot.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Colors, Dimensions, Animations } from '@/src/constants/design-tokens';

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
  accessibilityLabel: string;
}

const RADIO_SIZE = Dimensions.radioSize;
const INNER_DOT = Dimensions.radioInnerDot;
const BORDER_WIDTH = Dimensions.radioBorderWidth;
const DURATION = Animations.durationFast;
const EASING = Easing.out(Easing.ease);

function RadioButton({
  selected,
  onPress,
  accessibilityLabel,
}: RadioButtonProps): React.JSX.Element {
  const dotScale = useSharedValue(selected ? 1 : 0);

  React.useEffect(() => {
    dotScale.value = withTiming(selected ? 1 : 0, {
      duration: DURATION,
      easing: EASING,
    });
  }, [selected, dotScale]);

  const dotAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: dotScale.value }],
    opacity: dotScale.value,
  }));

  const outerStyle = selected ? styles.outerSelected : styles.outerUnselected;

  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      hitSlop={8}
    >
      <View style={[styles.outer, outerStyle]}>
        <Animated.View style={[styles.innerDot, dotAnimatedStyle]} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: RADIO_SIZE,
    height: RADIO_SIZE,
    borderRadius: RADIO_SIZE / 2,
    borderWidth: BORDER_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerSelected: {
    borderColor: Colors.radio.borderSelected,
  },
  outerUnselected: {
    borderColor: Colors.radio.borderUnselected,
  },
  innerDot: {
    width: INNER_DOT,
    height: INNER_DOT,
    borderRadius: INNER_DOT / 2,
    backgroundColor: Colors.radio.fillSelected,
  },
});

export default RadioButton;
