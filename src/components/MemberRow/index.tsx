/**
 * MemberRow -- A row displaying a group member's avatar, name, and username.
 *
 * Press feedback uses an animated background color transition (transparent to
 * #1A1A1A) via react-native-reanimated shared values and interpolateColor.
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

import UserAvatar from '@/src/components/UserAvatar';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Animations } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface MemberRowProps {
  name: string;
  username: string;
  avatarInitials: string;
  avatarColor: string;
  onPress: () => void;
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ROW_HEIGHT = Spacing.memberRowHeight; // 72
const AVATAR_SIZE = Dimensions.avatarSizeMd; // 48
const AVATAR_TEXT_GAP = Spacing.iconTextGap; // 16
const PADDING_H = Spacing.lg; // 16

const BG_REST = 'transparent';
const BG_PRESSED = Colors.bg.reportModal; // #1A1A1A

const NAME_FONT_SIZE = 16;
const NAME_FONT_WEIGHT = '500' as const;
const USERNAME_FONT_SIZE = 14;
const USERNAME_FONT_WEIGHT = '400' as const;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function MemberRow({
  name,
  username,
  avatarInitials,
  avatarColor,
  onPress,
  accessibilityLabel,
}: MemberRowProps): React.JSX.Element {
  const pressed = useSharedValue(0);

  const animatedRowStyle = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      pressed.value,
      [0, 1],
      [BG_REST, BG_PRESSED],
    );
    return { backgroundColor: bgColor };
  });

  const handlePressIn = (): void => {
    pressed.value = withTiming(1, { duration: Animations.durationPress });
  };

  const handlePressOut = (): void => {
    pressed.value = withTiming(0, { duration: Animations.durationPress });
  };

  return (
    <Animated.View style={animatedRowStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={styles.row}
      >
        <UserAvatar
          initials={avatarInitials}
          backgroundColor={avatarColor}
          size={AVATAR_SIZE}
        />

        <View style={styles.textContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.username} numberOfLines={1}>
            {username}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: ROW_HEIGHT,
    paddingHorizontal: PADDING_H,
  },
  textContainer: {
    flex: 1,
    marginLeft: AVATAR_TEXT_GAP,
    justifyContent: 'center',
  },
  name: {
    fontSize: NAME_FONT_SIZE,
    fontWeight: NAME_FONT_WEIGHT,
    color: Colors.text.primary,
  },
  username: {
    fontSize: USERNAME_FONT_SIZE,
    fontWeight: USERNAME_FONT_WEIGHT,
    color: Colors.text.tertiary,
    marginTop: 2,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default MemberRow;
