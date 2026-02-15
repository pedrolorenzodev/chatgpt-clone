import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  cancelAnimation,
} from 'react-native-reanimated';

import {
  Colors,
  Dimensions,
  Animations,
  Easings,
} from '@/src/constants/design-tokens';

interface FullScreenLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const FULL_ROTATION = 360;

function FullScreenLoader({
  onComplete,
  duration = Animations.durationLoading,
}: FullScreenLoaderProps): React.ReactElement {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(FULL_ROTATION, {
        duration: Animations.durationSpinnerRotation,
        easing: Easings.linear,
      }),
      -1,
      false,
    );

    return () => {
      cancelAnimation(rotation);
    };
  }, [rotation]);

  useEffect(() => {
    if (onComplete == null) return;

    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  const spinnerStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View style={styles.screen}>
      <Animated.View style={[styles.spinner, spinnerStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.bg.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    width: Dimensions.spinnerSizeLg,
    height: Dimensions.spinnerSizeLg,
    borderRadius: Dimensions.spinnerSizeLg / 2,
    borderWidth: 3,
    borderColor: 'transparent',
    borderTopColor: Colors.spinner.light,
    borderRightColor: Colors.spinner.light,
  },
});

export default FullScreenLoader;
