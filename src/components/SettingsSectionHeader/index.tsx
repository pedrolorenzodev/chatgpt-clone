/**
 * SettingsSectionHeader — Section label text above a SettingsCardGroup.
 *
 * Three variants:
 *   - default: 14px Regular #9A9A9A
 *   - white:   14px Regular #FFFFFF
 *   - caps:    13px Regular #9A9A9A, uppercase, letterSpacing 1
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type SectionHeaderVariant = 'default' | 'white' | 'caps';

interface SettingsSectionHeaderProps {
  text: string;
  variant?: SectionHeaderVariant;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SettingsSectionHeader({
  text,
  variant = 'default',
}: SettingsSectionHeaderProps): React.JSX.Element {
  const textStyle = VARIANT_STYLES[variant];

  return (
    <Text style={[styles.base, textStyle]}>
      {variant === 'caps' ? text.toUpperCase() : text}
    </Text>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  base: {
    marginTop: Spacing.settingsSectionGap,
    marginBottom: Spacing.settingsSectionHeaderMb,
    paddingHorizontal: Spacing.settingsScreenPaddingH,
  },
});

const VARIANT_STYLES = StyleSheet.create({
  default: {
    fontSize: Typography.settingsSectionHeader.fontSize,
    fontWeight: Typography.settingsSectionHeader.fontWeight,
    lineHeight: Typography.settingsSectionHeader.lineHeight,
    color: Colors.text.tertiary,
  },
  white: {
    fontSize: Typography.settingsSectionHeader.fontSize,
    fontWeight: Typography.settingsSectionHeader.fontWeight,
    lineHeight: Typography.settingsSectionHeader.lineHeight,
    color: Colors.text.primary,
  },
  caps: {
    fontSize: Typography.settingsSectionHeaderCaps.fontSize,
    fontWeight: Typography.settingsSectionHeaderCaps.fontWeight,
    lineHeight: Typography.settingsSectionHeaderCaps.lineHeight,
    letterSpacing: Typography.settingsSectionHeaderCaps.letterSpacing,
    color: Colors.text.tertiary,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SettingsSectionHeader;
