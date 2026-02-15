/**
 * ProfileSection -- Centered profile block for the Settings screen.
 *
 * Shows a large avatar (96px), user display name, handle, and an "Edit profile"
 * outline pill button. Avatar and edit button are independently pressable.
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import UserAvatar from '@/src/components/UserAvatar';
import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ProfileSectionProps {
  name: string;
  handle: string;
  initials: string;
  avatarColor: string;
  onAvatarPress: () => void;
  onEditPress: () => void;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const AVATAR_SIZE = Dimensions.avatarSizeLg; // 96
const EDIT_BORDER_COLOR = '#5A5A5A';
const EDIT_BORDER_WIDTH = 1;
const EDIT_BORDER_RADIUS = Dimensions.editProfileBtnRadius; // 20
const EDIT_FONT_SIZE = 14;
const EDIT_FONT_WEIGHT = '500' as const;
const EDIT_PADDING_H = 20;
const EDIT_PADDING_V = 8;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ProfileSection({
  name,
  handle,
  initials,
  avatarColor,
  onAvatarPress,
  onEditPress,
}: ProfileSectionProps): React.JSX.Element {
  const avatarPress = useAnimatedPress({ opacity: Press.opacityIcon });
  const editPress = useAnimatedPress({ opacity: Press.opacityButton });

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Animated.View style={avatarPress.animatedStyle}>
        <Pressable
          onPress={onAvatarPress}
          onPressIn={avatarPress.onPressIn}
          onPressOut={avatarPress.onPressOut}
          accessibilityLabel="Profile avatar"
          accessibilityRole="button"
        >
          <UserAvatar
            initials={initials}
            backgroundColor={avatarColor}
            size={AVATAR_SIZE}
          />
        </Pressable>
      </Animated.View>

      {/* Name */}
      <Text
        style={styles.name}
        numberOfLines={1}
        accessibilityRole="header"
      >
        {name}
      </Text>

      {/* Handle */}
      <Text
        style={styles.handle}
        numberOfLines={1}
      >
        {handle}
      </Text>

      {/* Edit Profile Button */}
      <Animated.View style={editPress.animatedStyle}>
        <Pressable
          onPress={onEditPress}
          onPressIn={editPress.onPressIn}
          onPressOut={editPress.onPressOut}
          accessibilityLabel="Edit profile"
          accessibilityRole="button"
          style={styles.editButton}
        >
          <Text style={styles.editButtonText}>Edit profile</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: Spacing.profileSectionPt,
  },
  name: {
    ...Typography.settingsProfileName,
    color: Colors.text.primary,
    marginTop: Spacing.lg,
  },
  handle: {
    ...Typography.settingsProfileHandle,
    color: Colors.text.tertiary,
    marginTop: Spacing.xs,
  },
  editButton: {
    marginTop: Spacing.lg,
    borderWidth: EDIT_BORDER_WIDTH,
    borderColor: EDIT_BORDER_COLOR,
    borderRadius: EDIT_BORDER_RADIUS,
    paddingHorizontal: EDIT_PADDING_H,
    paddingVertical: EDIT_PADDING_V,
  },
  editButtonText: {
    fontSize: EDIT_FONT_SIZE,
    fontWeight: EDIT_FONT_WEIGHT,
    color: Colors.text.primary,
    textAlign: 'center',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ProfileSection;
