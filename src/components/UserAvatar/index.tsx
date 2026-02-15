/**
 * UserAvatar -- Circular avatar with centered initials text.
 *
 * Color is set explicitly via `backgroundColor`. Renders at configurable sizes
 * (32, 36, 48, 96, 120) with size-appropriate initials typography.
 *
 * Non-interactive -- no Pressable wrapper needed.
 */

import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface UserAvatarProps {
  initials: string;
  backgroundColor: string;
  size?: number;
}

// ---------------------------------------------------------------------------
// Font-size mapping by avatar size
// ---------------------------------------------------------------------------

interface InitialsTypography {
  fontSize: number;
  fontWeight: '600';
  lineHeight: number;
}

const INITIALS_TYPOGRAPHY: Record<number, InitialsTypography> = {
  [Dimensions.avatarSizeSm]: { fontSize: 13, fontWeight: '600', lineHeight: 13 },
  [Dimensions.avatarSizeMdSm]: { fontSize: 14, fontWeight: '600', lineHeight: 14 },
  [Dimensions.avatarSizeMd]: { fontSize: 18, fontWeight: '600', lineHeight: 18 },
  [Dimensions.avatarSizeLg]: { fontSize: 36, fontWeight: '600', lineHeight: 42 },
  [Dimensions.avatarSizeXl]: { fontSize: 40, fontWeight: '600', lineHeight: 40 },
};

const DEFAULT_SIZE = Dimensions.avatarSizeSm;

/**
 * Returns the closest matching typography config for the given avatar size.
 * Falls back to the smallest size if no exact match is found.
 */
function getInitialsTypography(size: number): InitialsTypography {
  const exact = INITIALS_TYPOGRAPHY[size];
  if (exact) return exact;

  // Fallback: pick the entry whose key is closest to `size`
  const keys = Object.keys(INITIALS_TYPOGRAPHY).map(Number);
  let closest = keys[0];
  let minDiff = Math.abs(size - closest);

  for (let i = 1; i < keys.length; i++) {
    const diff = Math.abs(size - keys[i]);
    if (diff < minDiff) {
      minDiff = diff;
      closest = keys[i];
    }
  }

  return INITIALS_TYPOGRAPHY[closest];
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function UserAvatar({
  initials,
  backgroundColor,
  size = DEFAULT_SIZE,
}: UserAvatarProps): React.JSX.Element {
  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
      },
    ],
    [size, backgroundColor],
  );

  const typography = getInitialsTypography(size);

  const textStyle = useMemo(
    () => [
      styles.initials,
      {
        fontSize: typography.fontSize,
        fontWeight: typography.fontWeight,
        lineHeight: typography.lineHeight,
      },
    ],
    [typography],
  );

  return (
    <View
      style={containerStyle}
      accessibilityLabel={`Avatar ${initials}`}
      accessibilityRole="image"
    >
      <Text style={textStyle}>{initials.toUpperCase()}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  initials: {
    color: Colors.text.primary,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default UserAvatar;
