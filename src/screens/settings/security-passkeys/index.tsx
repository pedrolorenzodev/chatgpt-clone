/**
 * SecurityPasskeysScreen -- Settings screen displaying the passkeys empty state.
 *
 * Shows a SettingsHeader with "Passkeys" title and back navigation,
 * and the PasskeyEmptyState component centered in the remaining space.
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import SettingsHeader from '@/src/components/SettingsHeader';
import PasskeyEmptyState from '@/src/components/PasskeyEmptyState';
import { Colors } from '@/src/constants/colors';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SecurityPasskeysScreen(): React.JSX.Element {
  const router = useRouter();

  const handleBackPress = (): void => {
    router.back();
  };

  const handleCreatePress = (): void => {
    // No-op: passkey creation is not implemented
  };

  return (
    <SafeAreaView style={styles.container}>
      <SettingsHeader title="Passkeys" onBackPress={handleBackPress} />
      <PasskeyEmptyState onCreatePress={handleCreatePress} />
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

export default SecurityPasskeysScreen;
