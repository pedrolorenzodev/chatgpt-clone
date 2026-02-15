/**
 * SettingsCardGroup — Rounded container that groups SettingsRow components.
 * Provides the dark card background and clips children to rounded corners.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SettingsCardGroupProps {
  children: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SettingsCardGroup({
  children,
}: SettingsCardGroupProps): React.JSX.Element {
  return <View style={styles.container}>{children}</View>;
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg.settingsCard,
    borderRadius: Spacing.settingsCardRadius,
    overflow: 'hidden',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SettingsCardGroup;
