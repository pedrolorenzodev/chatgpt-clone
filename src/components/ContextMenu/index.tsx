/**
 * ContextMenu -- Floating card on long-press of user message bubble.
 *
 * Shows a timestamp and action items. Auth variant has 4 items (adds Share),
 * unauth has 3 items. Dimmed backdrop dismisses on tap.
 */

import React, { useCallback } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Animations, Easings, Shadows } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ContextMenuItemData {
  /** Pre-rendered lucide icon */
  icon: React.ReactNode;
  /** Display label */
  label: string;
  /** Action handler */
  onPress: () => void;
}

interface ContextMenuProps {
  variant: 'unauth' | 'auth';
  timestamp: string;
  items: ContextMenuItemData[];
  onDismiss: () => void;
  position: { x: number; y: number };
}

// ---------------------------------------------------------------------------
// Sub-component: MenuItem
// ---------------------------------------------------------------------------

function MenuItem({
  item,
  onDismiss,
}: {
  item: ContextMenuItemData;
  onDismiss: () => void;
}): React.JSX.Element {
  const pressed = useSharedValue(0);

  const bgStyle = useAnimatedStyle(() => ({
    backgroundColor:
      pressed.value === 1 ? Colors.bg.surfaceHigher : 'transparent',
  }));

  const handlePress = useCallback((): void => {
    item.onPress();
    onDismiss();
  }, [item, onDismiss]);

  return (
    <Animated.View style={bgStyle}>
      <Pressable
        onPress={handlePress}
        onPressIn={() => {
          pressed.value = withTiming(1, { duration: Animations.durationPress });
        }}
        onPressOut={() => {
          pressed.value = withTiming(0, { duration: Animations.durationPress });
        }}
        accessibilityLabel={item.label}
        accessibilityRole="button"
        style={styles.menuItem}
      >
        <View style={styles.menuItemIcon}>{item.icon}</View>
        <Text style={styles.menuItemText}>{item.label}</Text>
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ContextMenu({
  variant,
  timestamp,
  items,
  onDismiss,
  position,
}: ContextMenuProps): React.JSX.Element {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const menuWidth = Dimensions.chatContextMenuWidth;

  // Clamp position so the menu stays within screen bounds
  const clampedX = Math.min(
    Math.max(position.x, Spacing.lg),
    screenWidth - menuWidth - Spacing.lg,
  );
  const clampedY = Math.min(position.y, screenHeight * 0.7);

  const bgColor =
    variant === 'auth' ? Colors.bg.modal : Colors.bg.surface;

  return (
    <Modal transparent visible onRequestClose={onDismiss} statusBarTranslucent>
      {/* Backdrop */}
      <Pressable
        onPress={onDismiss}
        accessibilityLabel="Close menu"
        accessibilityRole="button"
        style={styles.backdrop}
      />

      {/* Menu card */}
      <Animated.View
        entering={FadeIn.duration(Animations.durationContextMenu).easing(
          Easings.standard,
        )}
        exiting={FadeOut.duration(Animations.durationFast).easing(
          Easings.standard,
        )}
        style={[
          styles.card,
          Shadows.modal,
          {
            backgroundColor: bgColor,
            left: clampedX,
            top: clampedY,
            width: menuWidth,
          },
        ]}
      >
        {/* Timestamp */}
        <Text style={styles.timestamp}>{timestamp}</Text>

        {/* Items */}
        {items.map((item, index) => (
          <MenuItem
            key={`${item.label}-${index}`}
            item={item}
            onDismiss={onDismiss}
          />
        ))}
      </Animated.View>
    </Modal>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  card: {
    position: 'absolute',
    borderRadius: Dimensions.chatContextMenuRadius,
    paddingVertical: Spacing.sm,
    overflow: 'hidden',
  },
  timestamp: {
    ...Typography.timestamp,
    color: Colors.text.tertiary,
    paddingHorizontal: Spacing.lg,
    paddingTop: 10,
    paddingBottom: Spacing.sm,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Spacing.chatContextMenuItemHeight,
    paddingHorizontal: Spacing.lg,
  },
  menuItemIcon: {
    width: Dimensions.iconSizeMd,
    height: Dimensions.iconSizeMd,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  menuItemText: {
    ...Typography.bodyMd,
    color: Colors.text.primary,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ContextMenu;
