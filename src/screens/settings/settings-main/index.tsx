/**
 * SettingsMainScreen — Entry point for the Settings screen.
 *
 * Renders UnauthSettingsContent for unauthenticated users.
 * AuthSettingsContent will be added when that task is implemented.
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import UnauthSettingsContent from '@/src/screens/settings/settings-main/components/UnauthSettingsContent';
import { Colors } from '@/src/constants/colors';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SettingsMainScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <UnauthSettingsContent />
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg.primary,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SettingsMainScreen;
