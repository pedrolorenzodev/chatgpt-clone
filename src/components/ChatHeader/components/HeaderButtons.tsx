/**
 * Header sub-components -- SidebarButton, LoginPill, SingleIconButton.
 * Extracted to keep ChatHeader under 250 lines.
 */

import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { Minus } from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const BTN_SIZE = Dimensions.headerButtonSize;
const BTN_RADIUS = BTN_SIZE / 2;
const ICON_SIZE_LG = Dimensions.iconSizeLg;
const LOGIN_HEIGHT = 40;
const LOGIN_RADIUS = 20;
const LOGIN_PADDING_H = 20;

// ---------------------------------------------------------------------------
// SidebarButton
// ---------------------------------------------------------------------------

interface SidebarButtonProps {
  onPress: () => void;
}

export function SidebarButton({ onPress }: SidebarButtonProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityIcon,
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityLabel="Open sidebar"
        accessibilityRole="button"
        style={styles.filledBtn}
      >
        <Minus size={ICON_SIZE_LG} color={Colors.icon.primary} strokeWidth={2} />
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// SingleIconButton
// ---------------------------------------------------------------------------

interface SingleIconButtonProps {
  icon: React.ReactNode;
  onPress: () => void;
  accessibilityLabel: string;
  filled?: boolean;
}

export function SingleIconButton({
  icon,
  onPress,
  accessibilityLabel,
  filled = true,
}: SingleIconButtonProps): React.JSX.Element {
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
        style={filled ? styles.filledBtn : styles.transparentBtn}
      >
        {icon}
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// LoginPill
// ---------------------------------------------------------------------------

interface LoginPillProps {
  onPress: () => void;
}

export function LoginPill({ onPress }: LoginPillProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityButton,
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityLabel="Log in"
        accessibilityRole="button"
        style={styles.loginPill}
      >
        <Text style={styles.loginText}>Log in</Text>
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  filledBtn: {
    width: BTN_SIZE,
    height: BTN_SIZE,
    borderRadius: BTN_RADIUS,
    backgroundColor: Colors.bg.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparentBtn: {
    width: BTN_SIZE,
    height: BTN_SIZE,
    borderRadius: BTN_RADIUS,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginPill: {
    height: LOGIN_HEIGHT,
    borderRadius: LOGIN_RADIUS,
    backgroundColor: Colors.bg.buttonPrimary,
    paddingHorizontal: LOGIN_PADDING_H,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: Typography.labelMd.fontSize,
    fontWeight: Typography.labelMd.fontWeight,
    color: Colors.text.onLight,
  },
});
