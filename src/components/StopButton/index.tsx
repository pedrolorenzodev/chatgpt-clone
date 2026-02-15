/**
 * StopButton -- White circle with black square stop icon.
 * Replaces Send/Talk button during AI generation.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface StopButtonProps {
  onPress: () => void;
  accessibilityLabel?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function StopButton({
  onPress,
  accessibilityLabel = 'Stop generating',
}: StopButtonProps): React.JSX.Element {
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
        <View style={styles.stopIcon} />
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
    backgroundColor: Colors.send.bgStop,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopIcon: {
    width: Dimensions.chatStopIconSize,
    height: Dimensions.chatStopIconSize,
    borderRadius: 3,
    backgroundColor: Colors.send.iconStop,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default StopButton;
