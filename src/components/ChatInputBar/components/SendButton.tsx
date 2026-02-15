/**
 * SendButton -- Circular button that toggles between disabled/enabled states.
 * Disabled: dark gray bg with dim arrow. Enabled: white bg with black arrow.
 */

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { ArrowUp } from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SendButtonProps {
  onPress: () => void;
  disabled: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE = 20;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SendButton({
  onPress,
  disabled,
}: SendButtonProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityButton,
  });

  const bgColor = disabled ? Colors.send.bgDisabled : Colors.send.bgEnabled;
  const iconColor = disabled ? Colors.send.iconDisabled : Colors.send.iconEnabled;

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={disabled ? undefined : onPressIn}
        onPressOut={disabled ? undefined : onPressOut}
        disabled={disabled}
        accessibilityLabel="Send message"
        accessibilityRole="button"
        style={[styles.container, { backgroundColor: bgColor }]}
      >
        <ArrowUp size={ICON_SIZE} color={iconColor} strokeWidth={2.5} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SendButton;
