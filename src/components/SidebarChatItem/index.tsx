/**
 * SidebarChatItem — Text row for chat history items in the sidebar.
 *
 * Three visual states:
 *   - Inactive: transparent bg, secondary text color
 *   - Active (current chat): surface bg, primary text color, rounded
 *   - Pressed (inactive only): animated bg #2A2A2A, 8px radius, 100ms
 */

import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Typography } from '@/src/constants/typography';
import { Animations } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SidebarChatItemProps {
  /** Chat title text */
  title: string;
  /** Whether this is the currently open chat */
  isActive: boolean;
  /** Press handler */
  onPress: () => void;
  /** Accessibility label */
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SidebarChatItem({
  title,
  isActive,
  onPress,
  accessibilityLabel,
}: SidebarChatItemProps): React.JSX.Element {
  const pressProgress = useSharedValue(0);

  const animatedBgStyle = useAnimatedStyle(() => {
    if (isActive) {
      return { backgroundColor: Colors.bg.surface };
    }
    return {
      backgroundColor: interpolateColor(
        pressProgress.value,
        [0, 1],
        ['transparent', Colors.bg.pressSidebarItem]
      ),
    };
  });

  const handlePressIn = (): void => {
    if (!isActive) {
      pressProgress.value = withTiming(1, {
        duration: Animations.durationPress,
      });
    }
  };

  const handlePressOut = (): void => {
    if (!isActive) {
      pressProgress.value = withTiming(0, {
        duration: Animations.durationPress,
      });
    }
  };

  const textStyle = isActive ? styles.textActive : styles.textInactive;

  return (
    <Animated.View style={[styles.container, animatedBgStyle]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={styles.pressable}
      >
        <Text style={textStyle} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  pressable: {
    height: Dimensions.sidebarChatItemHeight,
    paddingHorizontal: Spacing.sidebarPaddingH,
    paddingVertical: Spacing.md,
    justifyContent: 'center',
  },
  textInactive: {
    ...Typography.sidebarChatItem,
    color: Colors.text.secondary,
  },
  textActive: {
    ...Typography.sidebarChatItem,
    color: Colors.text.sidebarChatActive,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SidebarChatItem;
