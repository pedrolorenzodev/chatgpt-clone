/**
 * useAnimatedPress — Returns animated style + press handlers for Pressable feedback.
 *
 * Drives opacity and scale transitions on the UI thread via reanimated worklets.
 */

import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { Animations, Press } from '@/src/constants/design-tokens';

interface AnimatedPressConfig {
  /** Target opacity on press (default: Press.opacityButton = 0.85) */
  opacity?: number;
  /** Target scale on press (default: 1.0 = no scale) */
  scale?: number;
}

interface UseAnimatedPressReturn {
  /** Animated style to spread onto Animated.View wrapping the Pressable */
  animatedStyle: ReturnType<typeof useAnimatedStyle>;
  /** Handler for onPressIn */
  onPressIn: () => void;
  /** Handler for onPressOut */
  onPressOut: () => void;
}

export function useAnimatedPress(
  config?: AnimatedPressConfig
): UseAnimatedPressReturn {
  const targetOpacity = config?.opacity ?? Press.opacityButton;
  const targetScale = config?.scale ?? 1.0;

  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = (): void => {
    'worklet';
    opacity.value = withTiming(targetOpacity, {
      duration: Animations.durationPress,
    });
    if (targetScale !== 1.0) {
      scale.value = withTiming(targetScale, {
        duration: Animations.durationPress,
      });
    }
  };

  const onPressOut = (): void => {
    'worklet';
    opacity.value = withTiming(1, {
      duration: Animations.durationPress,
    });
    if (targetScale !== 1.0) {
      scale.value = withTiming(1, {
        duration: Animations.durationPress,
      });
    }
  };

  return { animatedStyle, onPressIn, onPressOut };
}
