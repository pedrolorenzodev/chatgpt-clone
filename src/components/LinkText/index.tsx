import React, { useMemo } from 'react';
import { Pressable, StyleSheet, Text, TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';

import { Colors, Typography } from '@/src/constants/design-tokens';
import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Press } from '@/src/constants/animations';

interface LinkTextProps {
  text: string;
  onPress: () => void;
  color?: string;
  fontSize?: number;
  accessibilityLabel: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function LinkText({
  text,
  onPress,
  color = Colors.text.primary,
  fontSize = Typography.bodySm.fontSize,
  accessibilityLabel,
}: LinkTextProps): React.ReactElement {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityLink,
  });

  const textStyle = useMemo<TextStyle>(
    () => StyleSheet.flatten([styles.text, { color, fontSize }]),
    [color, fontSize],
  );

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={animatedStyle}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="link"
    >
      <Text style={textStyle}>{text}</Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: Typography.bodyMd.fontWeight,
    textDecorationLine: 'underline',
  },
});

export default LinkText;
