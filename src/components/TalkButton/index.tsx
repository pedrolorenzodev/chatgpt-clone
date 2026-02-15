/**
 * TalkButton -- White circle with audio waveform icon.
 * Appears in auth input bar when no text is entered.
 */

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { AudioLines } from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TalkButtonProps {
  onPress: () => void;
  accessibilityLabel?: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE = 20;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function TalkButton({
  onPress,
  accessibilityLabel = 'Start voice conversation',
}: TalkButtonProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityButton,
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
        <AudioLines
          size={ICON_SIZE}
          color={Colors.text.onLight}
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
    width: Dimensions.chatSendBtnSize,
    height: Dimensions.chatSendBtnSize,
    borderRadius: Dimensions.chatSendBtnRadius,
    backgroundColor: Colors.bg.buttonPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default TalkButton;
