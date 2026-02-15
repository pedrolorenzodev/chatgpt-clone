/**
 * DescriptionText — Helper/description text below a SettingsCardGroup.
 * Supports an optional inline underlined link.
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface DescriptionTextProps {
  text: string;
  linkText?: string;
  onLinkPress?: () => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function DescriptionText({
  text,
  linkText,
  onLinkPress,
}: DescriptionTextProps): React.JSX.Element {
  return (
    <Text style={styles.text}>
      {text}
      {linkText != null && (
        <Text
          style={styles.link}
          onPress={onLinkPress}
          accessibilityRole="link"
          accessibilityLabel={linkText}
        >
          {' '}
          {linkText}
        </Text>
      )}
    </Text>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  text: {
    fontSize: Typography.bodyXs.fontSize,
    fontWeight: Typography.bodyXs.fontWeight,
    lineHeight: Typography.bodyXs.lineHeight,
    color: Colors.text.tertiary,
    marginTop: Spacing.settingsDescriptionMt,
    paddingHorizontal: Spacing.settingsScreenPaddingH,
  },
  link: {
    fontSize: Typography.bodyXs.fontSize,
    fontWeight: Typography.bodyXs.fontWeight,
    lineHeight: Typography.bodyXs.lineHeight,
    color: Colors.text.tertiary,
    textDecorationLine: 'underline',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default DescriptionText;
