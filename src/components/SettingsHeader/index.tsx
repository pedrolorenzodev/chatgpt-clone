/**
 * SettingsHeader — Fixed header bar with circular back button and centered title.
 * Used on all settings screens.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BackButton from '@/src/components/BackButton';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SettingsHeaderProps {
  title: string;
  onBackPress: () => void;
  accessibilityLabel?: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const HEADER_HEIGHT = 72;
const PADDING_VERTICAL = 12;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SettingsHeader({
  title,
  onBackPress,
  accessibilityLabel,
}: SettingsHeaderProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.sideSection}>
        <BackButton
          onPress={onBackPress}
          variant="filled-dark"
          accessibilityLabel={accessibilityLabel ?? 'Go back'}
        />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.sideSection} />
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.settingsScreenPaddingH,
    paddingTop: PADDING_VERTICAL,
    paddingBottom: PADDING_VERTICAL,
    backgroundColor: Colors.bg.primary,
  },
  sideSection: {
    width: Dimensions.settingsBackButtonSize,
    alignItems: 'flex-start',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: Colors.text.primary,
    fontSize: Typography.headingModalSm.fontSize,
    fontWeight: Typography.headingModalSm.fontWeight,
    lineHeight: Typography.headingModalSm.lineHeight,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SettingsHeader;
