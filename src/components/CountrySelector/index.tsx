/**
 * CountrySelector — Country code picker showing flag emoji, dial code, and ChevronDown.
 *
 * Used in the phone mode variant of the login screen.
 * Non-functional in the clone (displays static data, press is a no-op).
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { ChevronDown } from 'lucide-react-native';
import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

interface CountrySelectorProps {
  dialCode: string;
  flagEmoji: string;
  onPress: () => void;
  accessibilityLabel: string;
}

const CHEVRON_SIZE = 16;
const GAP = 6;
const PADDING_H = 12;

function CountrySelector({
  dialCode,
  flagEmoji,
  onPress,
  accessibilityLabel,
}: CountrySelectorProps): React.JSX.Element {
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
        <Text style={styles.flag}>{flagEmoji}</Text>
        <Text style={styles.dialCode}>{dialCode}</Text>
        <View style={styles.chevronContainer}>
          <ChevronDown
            size={CHEVRON_SIZE}
            color={Colors.text.primary}
            strokeWidth={2}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.countrySelectorWidth,
    height: Dimensions.inputHeight,
    borderRadius: Dimensions.inputRadius,
    borderWidth: Dimensions.inputBorderWidthDefault,
    borderColor: Colors.border.inputDefault,
    backgroundColor: Colors.bg.inputAuth,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: PADDING_H,
  },
  flag: {
    fontSize: 18,
  },
  dialCode: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.text.primary,
    marginLeft: GAP,
  },
  chevronContainer: {
    marginLeft: GAP,
  },
});

export default CountrySelector;
