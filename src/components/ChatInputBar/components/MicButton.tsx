/**
 * MicButton -- Microphone icon inside the chat input field.
 * Positioned to the left of the send/talk button.
 */

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Mic } from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface MicButtonProps {
  onPress: () => void;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE = 22;
const TOUCH_SIZE = 32;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function MicButton({ onPress }: MicButtonProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityIcon,
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityLabel="Voice input"
        accessibilityRole="button"
        hitSlop={6}
        style={styles.container}
      >
        <Mic
          size={ICON_SIZE}
          color={Colors.text.placeholderChat}
          strokeWidth={2}
        />
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    width: TOUCH_SIZE,
    height: TOUCH_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default MicButton;
