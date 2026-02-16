/**
 * GeneralScreen — Settings sub-screen for general preferences.
 * Contains toggle for legacy models and language selection.
 */

import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Infinity, Globe } from 'lucide-react-native';

import SettingsHeader from '@/src/components/SettingsHeader';
import SettingsCardGroup from '@/src/components/SettingsCardGroup';
import SettingsRow from '@/src/components/SettingsRow';
import { useSettingsStore } from '@/src/stores/settings.store';
import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function GeneralScreen(): React.JSX.Element {
  const router = useRouter();
  const showLegacyModels = useSettingsStore((state) => state.showLegacyModels);
  const toggleSetting = useSettingsStore((state) => state.toggleSetting);

  const handleBackPress = useCallback((): void => {
    router.back();
  }, [router]);

  const handleToggleLegacyModels = useCallback((): void => {
    toggleSetting('showLegacyModels');
  }, [toggleSetting]);

  return (
    <View style={styles.container}>
      <SettingsHeader
        title="General"
        onBackPress={handleBackPress}
        accessibilityLabel="Go back to settings"
      />

      <View style={styles.content}>
        <SettingsCardGroup>
          <SettingsRow
            icon={Infinity}
            title="Show legacy models"
            rightElement="toggle"
            toggleValue={showLegacyModels}
            onToggleChange={handleToggleLegacyModels}
            showSeparator={true}
            accessibilityLabel="Show legacy models toggle"
          />
          <SettingsRow
            icon={Globe}
            title="Language"
            subtitle="English"
            rightElement="none"
            showSeparator={false}
            accessibilityLabel="Language selection"
          />
        </SettingsCardGroup>
      </View>
    </View>
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
  content: {
    paddingHorizontal: Spacing.settingsScreenPaddingH,
    paddingTop: Spacing.sm,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default GeneralScreen;
