/**
 * AILoadingIndicator -- Shows AI loading state with animated phases.
 *
 * Phase 1: Pulsing white circle (16px), scale 0.8-1.2, 1.2s cycle.
 * Phase 2 (after ~2s): Shimmer text ("Thinking..." / "Searching...").
 * Transition: circle fades out, text fades in (100ms each).
 */

import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Animations, PulseScale, Easings } from '@/src/constants/animations';
import { Typography } from '@/src/constants/typography';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AILoadingIndicatorProps {
  /** Loading mode label (default: 'thinking') */
  mode?: 'thinking' | 'searching';
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PHASE_SWITCH_DELAY = Animations.durationTalkingLoading;
const FADE_DURATION = 100;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function AILoadingIndicator({
  mode = 'thinking',
}: AILoadingIndicatorProps): React.JSX.Element {
  const label = mode === 'searching' ? 'Searching...' : 'Thinking...';

  // Phase 1: pulsing circle
  const circleScale = useSharedValue(1);
  const circleOpacity = useSharedValue(1);

  // Phase 2: shimmer text
  const textOpacity = useSharedValue(0);
  const shimmerOpacity = useSharedValue(1);

  useEffect(() => {
    // Start pulsing the circle immediately
    circleScale.value = withRepeat(
      withSequence(
        withTiming(PulseScale.loadingPulseScaleMax, {
          duration: Animations.durationLoadingPulse / 2,
          easing: Easings.standard,
        }),
        withTiming(PulseScale.loadingPulseScaleMin, {
          duration: Animations.durationLoadingPulse / 2,
          easing: Easings.standard,
        }),
      ),
      -1,
      true,
    );

    // After PHASE_SWITCH_DELAY, fade circle out and text in
    circleOpacity.value = withDelay(
      PHASE_SWITCH_DELAY,
      withTiming(0, { duration: FADE_DURATION }),
    );

    textOpacity.value = withDelay(
      PHASE_SWITCH_DELAY + FADE_DURATION,
      withTiming(1, { duration: FADE_DURATION }),
    );

    // Shimmer: animate text opacity between base and highlight
    shimmerOpacity.value = withDelay(
      PHASE_SWITCH_DELAY + FADE_DURATION * 2,
      withRepeat(
        withSequence(
          withTiming(0.5, {
            duration: Animations.durationShimmerSweep / 2,
            easing: Easings.standard,
          }),
          withTiming(1, {
            duration: Animations.durationShimmerSweep / 2,
            easing: Easings.standard,
          }),
        ),
        -1,
        true,
      ),
    );
  }, [circleScale, circleOpacity, textOpacity, shimmerOpacity]);

  const circleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: circleOpacity.value,
    transform: [{ scale: circleScale.value }],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value * shimmerOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, circleAnimatedStyle]} />
      <Animated.View style={[styles.textContainer, textAnimatedStyle]}>
        <Text style={styles.text}>{label}</Text>
      </Animated.View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    marginLeft: Spacing.chatPaddingH + Spacing.sm,
    minHeight: Dimensions.chatLoadingCircleSize + 8,
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    width: Dimensions.chatLoadingCircleSize,
    height: Dimensions.chatLoadingCircleSize,
    borderRadius: Dimensions.chatLoadingCircleSize / 2,
    backgroundColor: Colors.text.primary,
  },
  textContainer: {
    position: 'absolute',
  },
  text: {
    ...Typography.bodyMd,
    color: Colors.text.shimmerHighlight,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default AILoadingIndicator;
