/**
 * UserMessageBubble -- Right-aligned rounded bubble for user messages.
 *
 * Max width 75% of screen. Background #2F2F2F, radius 20px.
 * Press feedback: slight opacity 0.9 on long press.
 */

import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Typography } from '@/src/constants/typography';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface UserMessageBubbleProps {
  /** Message text content */
  text: string;
  /** Called on long-press (e.g. to open context menu) */
  onLongPress: () => void;
  /** Override accessibility label */
  accessibilityLabel?: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PRESS_OPACITY = 0.9;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function UserMessageBubble({
  text,
  onLongPress,
  accessibilityLabel,
}: UserMessageBubbleProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: PRESS_OPACITY,
  });

  return (
    <Animated.View style={[styles.row, animatedStyle]}>
      <Pressable
        onLongPress={onLongPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityLabel={accessibilityLabel ?? text}
        accessibilityRole="text"
        style={styles.bubble}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  row: {
    alignItems: 'flex-end',
    marginRight: Spacing.chatBubbleMarginRight,
  },
  bubble: {
    maxWidth: `${Dimensions.chatBubbleMaxWidth * 100}%`,
    backgroundColor: Colors.bg.surface,
    borderRadius: Dimensions.chatBubbleRadius,
    paddingHorizontal: Spacing.chatBubblePaddingH,
    paddingVertical: Spacing.chatBubblePaddingV,
  },
  text: {
    ...Typography.bodyMd,
    color: Colors.text.primary,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default UserMessageBubble;
