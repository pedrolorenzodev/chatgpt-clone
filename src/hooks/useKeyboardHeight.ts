/**
 * useKeyboardHeight — Returns an animated shared value tracking keyboard height.
 *
 * Uses react-native Keyboard events to drive a reanimated shared value
 * so consumers can build UI-thread keyboard-aware animations.
 */

import { useEffect } from 'react';
import { Keyboard, Platform } from 'react-native';
import {
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { Easings, Animations } from '@/src/constants/design-tokens';

interface UseKeyboardHeightReturn {
  /** Animated keyboard height (0 when hidden) */
  keyboardHeight: SharedValue<number>;
}

export function useKeyboardHeight(): UseKeyboardHeightReturn {
  const keyboardHeight = useSharedValue(0);

  useEffect(() => {
    const showEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const showSub = Keyboard.addListener(showEvent, (e) => {
      keyboardHeight.value = withTiming(e.endCoordinates.height, {
        duration: Animations.durationNormal,
        easing: Easings.standard,
      });
    });

    const hideSub = Keyboard.addListener(hideEvent, () => {
      keyboardHeight.value = withTiming(0, {
        duration: Animations.durationNormal,
        easing: Easings.standard,
      });
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, [keyboardHeight]);

  return { keyboardHeight };
}
