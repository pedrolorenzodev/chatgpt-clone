/**
 * Root Layout — Integrates custom animated sidebar drawer.
 *
 * The sidebar slides from the left with spring animation (damping: 20, stiffness: 200).
 * Main content is visible behind the overlay (not pushed).
 * Swipe from left edge opens sidebar via PanGestureHandler.
 */

import React, { useCallback } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import { useSidebarStore } from '@/src/stores/sidebar.store';
import SidebarOverlay from '@/src/components/SidebarOverlay';
import SidebarPanelScreen from '@/src/screens/sidebar/sidebar-panel';
import { Colors, Springs, Dimensions } from '@/src/constants/design-tokens';

const SPRING_CONFIG = Springs.sidebar;
const SIDEBAR_WIDTH_PCT = Dimensions.sidebarWidth;
const EDGE_SWIPE_WIDTH = 30;

function RootLayout(): React.JSX.Element {
  const { width: screenWidth } = useWindowDimensions();
  const sidebarWidth = screenWidth * SIDEBAR_WIDTH_PCT;

  const isOpen = useSidebarStore((s) => s.isOpen);
  const open = useSidebarStore((s) => s.open);
  const close = useSidebarStore((s) => s.close);

  const progress = useSharedValue(0);
  const dragStartX = useSharedValue(0);

  // Sync progress with store state
  React.useEffect(() => {
    progress.value = withSpring(isOpen ? 1 : 0, SPRING_CONFIG);
  }, [isOpen, progress]);

  const handleClose = useCallback(() => {
    close();
  }, [close]);

  // Edge swipe gesture to open sidebar
  const panGesture = Gesture.Pan()
    .activeOffsetX(10)
    .onStart((e) => {
      dragStartX.value = e.x;
    })
    .onUpdate((e) => {
      // Only respond to swipes starting from left edge
      if (dragStartX.value > EDGE_SWIPE_WIDTH && !isOpen) return;

      if (isOpen) {
        // Swiping to close
        const translationRatio = Math.max(0, Math.min(1, 1 + e.translationX / sidebarWidth));
        progress.value = translationRatio;
      } else {
        // Swiping to open from edge
        const translationRatio = Math.max(0, Math.min(1, e.translationX / sidebarWidth));
        progress.value = translationRatio;
      }
    })
    .onEnd((e) => {
      const threshold = 0.3;
      if (isOpen) {
        if (progress.value < 1 - threshold || e.velocityX < -500) {
          close();
        } else {
          progress.value = withSpring(1, SPRING_CONFIG);
        }
      } else {
        if (progress.value > threshold || e.velocityX > 500) {
          open();
        } else {
          progress.value = withSpring(0, SPRING_CONFIG);
        }
      }
    });

  // Sidebar animated position
  const sidebarAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: -sidebarWidth + progress.value * sidebarWidth },
    ],
  }));

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <GestureDetector gesture={panGesture}>
          <View style={styles.container}>
            {/* Main Content */}
            <Stack screenOptions={screenOptions}>
              <Stack.Screen name="(chat)" />
              <Stack.Screen name="(auth)" />
              <Stack.Screen name="(settings)" />
              <Stack.Screen name="index" />
            </Stack>

            {/* Sidebar Overlay */}
            <SidebarOverlay
              onPress={handleClose}
              animatedProgress={progress}
            />

            {/* Sidebar Panel */}
            <Animated.View
              style={[
                styles.sidebarPanel,
                { width: sidebarWidth },
                sidebarAnimatedStyle,
              ]}
            >
              <SidebarPanelScreen />
            </Animated.View>
          </View>
        </GestureDetector>
        <StatusBar style="light" translucent backgroundColor="transparent" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const screenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: Colors.bg.primary },
  animation: 'slide_from_right' as const,
} as const;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.bg.primary,
  },
  sidebarPanel: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 20,
    backgroundColor: Colors.bg.sidebar,
  },
});

export default RootLayout;
