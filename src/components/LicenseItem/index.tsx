/**
 * LicenseItem -- A single license entry row.
 *
 * Shows library name (bold, truncated), version, author (gray),
 * and a license type badge pill.
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface LicenseItemProps {
  libraryName: string;
  version: string;
  author: string;
  licenseType: string;
  onPress?: () => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function LicenseItem({
  libraryName,
  version,
  author,
  licenseType,
  onPress,
}: LicenseItemProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityButton,
  });

  const content = (
    <View style={styles.container}>
      {/* Row 1: Name + Version */}
      <View style={styles.headerRow}>
        <Text style={styles.libraryName} numberOfLines={1}>
          {libraryName}
        </Text>
        <Text style={styles.version}>{version}</Text>
      </View>

      {/* Row 2: Author */}
      <Text style={styles.author} numberOfLines={1}>
        {author}
      </Text>

      {/* Row 3: Badge */}
      <View style={styles.badgeWrapper}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{licenseType}</Text>
        </View>
      </View>

      {/* Separator */}
      <View style={styles.separator} />
    </View>
  );

  if (onPress != null) {
    return (
      <Animated.View style={animatedStyle}>
        <Pressable
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          accessibilityLabel={`${libraryName} license`}
          accessibilityRole="button"
        >
          {content}
        </Pressable>
      </Animated.View>
    );
  }

  return content;
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const BADGE_PADDING_H = 12;
const BADGE_PADDING_V = 6;
const BADGE_RADIUS = 14;

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.lg,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  libraryName: {
    ...Typography.licenseTitle,
    color: Colors.text.primary,
    flex: 1,
    marginRight: Spacing.md,
  },
  version: {
    ...Typography.licenseVersion,
    color: Colors.text.primary,
  },
  author: {
    ...Typography.licenseAuthor,
    color: Colors.text.tertiary,
    marginTop: Spacing.xs,
  },
  badgeWrapper: {
    flexDirection: 'row',
    marginTop: Spacing.sm,
  },
  badge: {
    backgroundColor: Colors.bg.licenseBadge,
    borderRadius: BADGE_RADIUS,
    paddingHorizontal: BADGE_PADDING_H,
    paddingVertical: BADGE_PADDING_V,
  },
  badgeText: {
    ...Typography.labelChip,
    color: Colors.text.primary,
  },
  separator: {
    height: Dimensions.separatorHeight,
    backgroundColor: Colors.border.separator,
    marginTop: Spacing.xl,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default LicenseItem;
