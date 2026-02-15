/**
 * ToggleSwitch — Custom toggle matching ChatGPT's black-and-white design.
 * NOT the default RN Switch component.
 *
 * ON: white track, black thumb.
 * OFF: #4A4A4A track, #9A9A9A thumb.
 * Thumb slides with spring animation via react-native-reanimated.
 */

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  Easing,
} from 'react-native-reanimated';
import { Colors, Dimensions, Animations } from '@/src/constants/design-tokens';

interface ToggleSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  accessibilityLabel: string;
}

const TRACK_WIDTH = Dimensions.toggleTrackWidth;
const TRACK_HEIGHT = Dimensions.toggleTrackHeight;
const TRACK_RADIUS = Dimensions.toggleTrackRadius;
const THUMB_SIZE = Dimensions.toggleThumbSize;
const TRACK_PADDING = (TRACK_HEIGHT - THUMB_SIZE) / 2;
const THUMB_TRAVEL = TRACK_WIDTH - THUMB_SIZE - TRACK_PADDING * 2;

const DURATION = Animations.durationFloatLabel;
const EASING = Easing.out(Easing.ease);

function ToggleSwitch({
  value,
  onValueChange,
  disabled = false,
  accessibilityLabel,
}: ToggleSwitchProps): React.JSX.Element {
  const progress = useSharedValue(value ? 1 : 0);

  React.useEffect(() => {
    progress.value = withTiming(value ? 1 : 0, {
      duration: DURATION,
      easing: EASING,
    });
  }, [value, progress]);

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.toggle.trackOff, Colors.toggle.trackOn],
    );
    return { backgroundColor };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const translateX = progress.value * THUMB_TRAVEL;
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.toggle.thumbOff, Colors.toggle.thumbOn],
    );
    return {
      transform: [{ translateX }],
      backgroundColor,
    };
  });

  const handlePress = (): void => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
      hitSlop={8}
    >
      <Animated.View style={[styles.track, trackAnimatedStyle]}>
        <Animated.View style={[styles.thumb, thumbAnimatedStyle]} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_RADIUS,
    justifyContent: 'center',
    paddingHorizontal: TRACK_PADDING,
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
  },
});

export default ToggleSwitch;
