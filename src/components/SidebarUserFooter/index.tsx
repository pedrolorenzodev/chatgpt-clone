/**
 * SidebarUserFooter — Footer row showing user avatar, display name, and chevron.
 *
 * The entire row is a Pressable that navigates to the Settings screen.
 * Press feedback: animated background #2A2A2A with 8px border radius, 100ms.
 *
 * Depends on UserAvatar component (Task 2.4).
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import { ChevronDown } from 'lucide-react-native';

import UserAvatar from '@/src/components/UserAvatar';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Typography } from '@/src/constants/typography';
import { Animations } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SidebarUserFooterProps {
  /** User display name */
  name: string;
  /** Initials for the avatar circle */
  initials: string;
  /** Background color for the avatar circle */
  avatarColor: string;
  /** Press handler (navigate to Settings) */
  onPress: () => void;
  /** Accessibility label */
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SidebarUserFooter({
  name,
  initials,
  avatarColor,
  onPress,
  accessibilityLabel,
}: SidebarUserFooterProps): React.JSX.Element {
  const pressProgress = useSharedValue(0);

  const animatedBgStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      pressProgress.value,
      [0, 1],
      ['transparent', Colors.bg.pressSidebarItem]
    ),
  }));

  const handlePressIn = (): void => {
    pressProgress.value = withTiming(1, {
      duration: Animations.durationPress,
    });
  };

  const handlePressOut = (): void => {
    pressProgress.value = withTiming(0, {
      duration: Animations.durationPress,
    });
  };

  return (
    <Animated.View style={[styles.container, animatedBgStyle]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={styles.pressable}
      >
        <UserAvatar
          initials={initials}
          backgroundColor={avatarColor}
          size={Dimensions.avatarSizeSm}
        />
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.chevronContainer}>
          <ChevronDown
            size={Dimensions.iconSizeSm}
            color={Colors.icon.chevronSecondary}
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
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sidebarPaddingH,
    paddingVertical: 14,
  },
  name: {
    ...Typography.sidebarUserName,
    color: Colors.text.primary,
    marginLeft: Spacing.md,
    flex: 1,
  },
  chevronContainer: {
    marginLeft: Spacing.xs,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SidebarUserFooter;
