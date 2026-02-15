/**
 * PlusButton -- Circular plus icon button left of the chat input field.
 * Opens Attachments BottomSheet on press.
 */

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Plus } from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PlusButtonProps {
  onPress: () => void;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE = 22;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function PlusButton({ onPress }: PlusButtonProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityIcon,
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityLabel="Add attachment"
        accessibilityRole="button"
        style={styles.container}
      >
        <Plus size={ICON_SIZE} color={Colors.icon.primary} strokeWidth={2} />
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    width: Dimensions.chatPlusBtnSize,
    height: Dimensions.chatPlusBtnSize,
    borderRadius: Dimensions.chatPlusBtnSize / 2,
    backgroundColor: Colors.bg.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default PlusButton;
