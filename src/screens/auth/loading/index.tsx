import React, { useCallback } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { useRouter } from 'expo-router';

import FullScreenLoader from '@/src/components/FullScreenLoader';
import { useAuthStore } from '@/src/stores/auth.store';
import { MOCK_USER } from '@/src/constants/mock-data/auth.data';
import { Animations, Easings } from '@/src/constants/animations';

/** Hardcoded loading duration before transitioning to authenticated chat */
const MOCK_LOADING_DURATION = Animations.durationLoading;

/** Fade-out duration when exiting to chat screen */
const FADE_OUT_DURATION = Animations.durationFadeOut;

function LoadingScreen(): React.JSX.Element {
  const router = useRouter();
  const setAuthenticated = useAuthStore((s) => s.setAuthenticated);
  const setUser = useAuthStore((s) => s.setUser);
  const setLoading = useAuthStore((s) => s.setLoading);

  const opacity = useSharedValue(1);

  const navigateToChat = useCallback((): void => {
    router.replace('/(chat)');
  }, [router]);

  const handleLoadingComplete = useCallback((): void => {
    setAuthenticated(true);
    setUser(MOCK_USER);
    setLoading(false);

    opacity.value = withTiming(
      0,
      {
        duration: FADE_OUT_DURATION,
        easing: Easings.decelerate,
      },
      (finished) => {
        if (finished) {
          runOnJS(navigateToChat)();
        }
      },
    );
  }, [opacity, setAuthenticated, setUser, setLoading, navigateToChat]);

  const fadeStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.container, fadeStyle]}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <FullScreenLoader
        onComplete={handleLoadingComplete}
        duration={MOCK_LOADING_DURATION}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoadingScreen;
