/**
 * DataControlsScreen — Settings screen for data controls.
 * Sections: model improvement toggle, export/delete, voice recordings, chat history.
 */

import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import SettingsHeader from '@/src/components/SettingsHeader';
import SettingsCardGroup from '@/src/components/SettingsCardGroup';
import SettingsRow from '@/src/components/SettingsRow';
import SettingsSectionHeader from '@/src/components/SettingsSectionHeader';
import DescriptionText from '@/src/components/DescriptionText';
import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';
import { useSettingsStore } from '@/src/stores/settings.store';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function DataControlsScreen(): React.JSX.Element {
  const router = useRouter();

  const improveModel = useSettingsStore((s) => s.improveModel);
  const includeAudioRecordings = useSettingsStore((s) => s.includeAudioRecordings);
  const includeVideoRecordings = useSettingsStore((s) => s.includeVideoRecordings);
  const toggleSetting = useSettingsStore((s) => s.toggleSetting);

  const handleBack = useCallback((): void => {
    router.back();
  }, [router]);

  const handleToggleImproveModel = useCallback((): void => {
    toggleSetting('improveModel');
  }, [toggleSetting]);

  const handleToggleAudio = useCallback((): void => {
    toggleSetting('includeAudioRecordings');
  }, [toggleSetting]);

  const handleToggleVideo = useCallback((): void => {
    toggleSetting('includeVideoRecordings');
  }, [toggleSetting]);

  return (
    <View style={styles.container}>
      <SettingsHeader
        title="Data controls"
        onBackPress={handleBack}
        accessibilityLabel="Go back to settings"
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Section 1: Model improvement */}
        <SettingsCardGroup>
          <SettingsRow
            title="Improve the model for everyone"
            rightElement="toggle"
            toggleValue={improveModel}
            onToggleChange={handleToggleImproveModel}
            showSeparator={false}
            accessibilityLabel="Improve the model for everyone"
          />
        </SettingsCardGroup>

        <DescriptionText
          text="Allow your content to be used to improve our models for you and other users. We take steps to protect your privacy."
          linkText="Learn more"
        />

        {/* Export Data card */}
        <View style={styles.cardSpacer}>
          <SettingsCardGroup>
            <SettingsRow
              title="Export Data"
              rightElement="none"
              showSeparator={false}
              accessibilityLabel="Export Data"
            />
          </SettingsCardGroup>
        </View>

        {/* Delete account card */}
        <View style={styles.cardSpacer}>
          <SettingsCardGroup>
            <SettingsRow
              title="Delete OpenAI account"
              titleColor={Colors.text.destructive}
              rightElement="none"
              showSeparator={false}
              accessibilityLabel="Delete OpenAI account"
            />
          </SettingsCardGroup>
        </View>

        {/* Section 2: Voice */}
        <SettingsSectionHeader text="Voice" variant="white" />

        <SettingsCardGroup>
          <SettingsRow
            title="Include your audio recordings"
            rightElement="toggle"
            toggleValue={includeAudioRecordings}
            onToggleChange={handleToggleAudio}
            showSeparator
            accessibilityLabel="Include your audio recordings"
          />
          <SettingsRow
            title="Include your video recordings"
            rightElement="toggle"
            toggleValue={includeVideoRecordings}
            onToggleChange={handleToggleVideo}
            showSeparator={false}
            accessibilityLabel="Include your video recordings"
          />
        </SettingsCardGroup>

        <DescriptionText
          text="Include your audio or video recordings from Voice to train our models. Transcripts and other files are covered by Improve the model for everyone."
          linkText="Learn more"
        />

        {/* Section 3: Chat history */}
        <SettingsSectionHeader text="Chat history" variant="white" />

        <SettingsCardGroup>
          <SettingsRow
            title="View archived chats"
            rightElement="none"
            showSeparator
            accessibilityLabel="View archived chats"
          />
          <SettingsRow
            title="Archive chat history"
            rightElement="none"
            showSeparator
            accessibilityLabel="Archive chat history"
          />
          <SettingsRow
            title="Clear chat history"
            titleColor={Colors.text.destructive}
            rightElement="none"
            showSeparator={false}
            accessibilityLabel="Clear chat history"
          />
        </SettingsCardGroup>
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
    paddingHorizontal: Spacing.settingsScreenPaddingH,
    paddingBottom: Spacing.xxxxl,
  },
  cardSpacer: {
    marginTop: Spacing.lg,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default DataControlsScreen;
