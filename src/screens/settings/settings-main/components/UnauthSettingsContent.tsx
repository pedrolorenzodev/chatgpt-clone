/**
 * UnauthSettingsContent — Settings screen content for unauthenticated users.
 *
 * Layout:
 *   - SettingsHeader "Settings" with back button
 *   - "Data controls" section: ImproveModelRow with toggle
 *   - "App" section: Language row (Globe, subtitle "English") + About row (Info, navigates)
 *
 * Card background: #3A3A3A (unauth variant)
 */

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Globe, Info } from 'lucide-react-native';

import SettingsHeader from '@/src/components/SettingsHeader';
import SettingsCardGroup from '@/src/components/SettingsCardGroup';
import SettingsRow from '@/src/components/SettingsRow';
import SettingsSectionHeader from '@/src/components/SettingsSectionHeader';
import ImproveModelRow from '@/src/screens/settings/settings-main/components/ImproveModelRow';
import { useSettingsStore } from '@/src/stores/settings.store';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function UnauthSettingsContent(): React.JSX.Element {
  const router = useRouter();
  const improveModel = useSettingsStore((s) => s.improveModel);
  const toggleSetting = useSettingsStore((s) => s.toggleSetting);

  const handleBack = (): void => {
    router.back();
  };

  const handleImproveModelToggle = (): void => {
    toggleSetting('improveModel');
  };

  const handleLanguagePress = (): void => {
    // Language modal handled in Wave 5
  };

  const handleAboutPress = (): void => {
    router.push('/(settings)/about');
  };

  return (
    <View style={styles.container}>
      <SettingsHeader title="Settings" onBackPress={handleBack} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Data controls section */}
        <Text style={styles.firstSectionHeader}>Data controls</Text>
        <View style={styles.cardWrapper}>
          <SettingsCardGroup variant="unauth">
            <ImproveModelRow
              value={improveModel}
              onToggle={handleImproveModelToggle}
            />
          </SettingsCardGroup>
        </View>

        {/* App section */}
        <SettingsSectionHeader text="App" />
        <View style={styles.cardWrapper}>
          <SettingsCardGroup variant="unauth">
            <SettingsRow
              icon={Globe}
              title="Language"
              subtitle="English"
              onPress={handleLanguagePress}
              showSeparator={true}
              accessibilityLabel="Language, English"
            />
            <SettingsRow
              icon={Info}
              title="About"
              onPress={handleAboutPress}
              showSeparator={false}
              accessibilityLabel="About"
            />
          </SettingsCardGroup>
        </View>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.xxxxl,
  },
  firstSectionHeader: {
    fontSize: Typography.settingsSectionHeader.fontSize,
    fontWeight: Typography.settingsSectionHeader.fontWeight,
    lineHeight: Typography.settingsSectionHeader.lineHeight,
    color: Colors.text.tertiary,
    marginTop: Spacing.sm,
    marginBottom: Spacing.settingsSectionHeaderMb,
    paddingHorizontal: Spacing.settingsScreenPaddingH,
  },
  cardWrapper: {
    paddingHorizontal: Spacing.settingsScreenPaddingH,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default UnauthSettingsContent;
