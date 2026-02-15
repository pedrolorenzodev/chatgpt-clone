/**
 * ChatGPTButton -- Pill-shaped "ChatGPT" button in the auth header.
 * Dark background, tappable. Opens the Attachments BottomSheet.
 */

import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ChatGPTButtonProps {
  onPress: () => void;
  accessibilityLabel?: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PILL_HEIGHT = 44;
const PILL_RADIUS = 22;
const PILL_PADDING_H = 18;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ChatGPTButton({
  onPress,
  accessibilityLabel = 'ChatGPT menu',
}: ChatGPTButtonProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityIcon,
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={styles.container}
      >
        <Text style={styles.label}>ChatGPT</Text>
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    height: PILL_HEIGHT,
    borderRadius: PILL_RADIUS,
    backgroundColor: Colors.bg.surface,
    paddingHorizontal: PILL_PADDING_H,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: Typography.headerTitle.fontSize,
    fontWeight: Typography.headerTitle.fontWeight,
    lineHeight: Typography.headerTitle.lineHeight,
    color: Colors.text.primary,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ChatGPTButton;
