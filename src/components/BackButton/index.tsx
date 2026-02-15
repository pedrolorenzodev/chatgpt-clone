/**
 * BackButton — Circular button with ArrowLeft icon for backward navigation.
 *
 * Three variants:
 *  - transparent: 40px, no background (auth login)
 *  - filled-dark: 48px, #3A3A3A background (settings screens)
 *  - filled-surface: 48px, #2F2F2F background (select-text, sub-screens)
 */

import React, { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { ArrowLeft } from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type BackButtonVariant = 'transparent' | 'filled-dark' | 'filled-surface';

interface BackButtonProps {
  onPress: () => void;
  variant?: BackButtonVariant;
  accessibilityLabel?: string;
}

// ---------------------------------------------------------------------------
// Variant config
// ---------------------------------------------------------------------------

interface VariantConfig {
  size: number;
  borderRadius: number;
  backgroundColor: string;
}

const VARIANT_CONFIG: Record<BackButtonVariant, VariantConfig> = {
  transparent: {
    size: Dimensions.iconButtonSize,
    borderRadius: Dimensions.iconButtonSize / 2,
    backgroundColor: 'transparent',
  },
  'filled-dark': {
    size: Dimensions.settingsBackButtonSize,
    borderRadius: Dimensions.settingsBackButtonRadius,
    backgroundColor: '#3A3A3A',
  },
  'filled-surface': {
    size: Dimensions.settingsBackButtonSize,
    borderRadius: Dimensions.settingsBackButtonRadius,
    backgroundColor: Colors.bg.surface,
  },
};

const ICON_SIZE = Dimensions.iconSizeLg;
const ICON_COLOR = Colors.icon.primary;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function BackButton({
  onPress,
  variant = 'transparent',
  accessibilityLabel = 'Go back',
}: BackButtonProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityIcon,
  });

  const config = VARIANT_CONFIG[variant];

  const buttonStyle = useMemo(
    () => [
      styles.button,
      {
        width: config.size,
        height: config.size,
        borderRadius: config.borderRadius,
        backgroundColor: config.backgroundColor,
      },
    ],
    [config],
  );

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={buttonStyle}
      >
        <View style={styles.iconContainer}>
          <ArrowLeft
            size={ICON_SIZE}
            color={ICON_COLOR}
            strokeWidth={2}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default BackButton;
