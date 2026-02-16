/**
 * SpeechScreen -- Settings sub-screen for speech preferences.
 * Contains input language, voice selection, and toggle settings
 * all within a single continuous card group.
 */

import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import {
  Mic,
  AudioLines,
  SlidersHorizontal,
  Radio,
  Bot,
} from 'lucide-react-native';

import SettingsHeader from '@/src/components/SettingsHeader';
import SettingsCardGroup from '@/src/components/SettingsCardGroup';
import SettingsRow from '@/src/components/SettingsRow';
import { useSettingsStore } from '@/src/stores/settings.store';
import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';
import { Typography } from '@/src/constants/typography';
import { Dimensions } from '@/src/constants/dimensions';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DESCRIPTION_TEXT =
  'For best results, select the language you mainly speak. If it\'s not listed, it may still be supported via auto-detection.';

// ---------------------------------------------------------------------------
// Local Component: InCardDescription
// ---------------------------------------------------------------------------

function InCardDescription(): React.JSX.Element {
  return (
    <View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{DESCRIPTION_TEXT}</Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SpeechScreen(): React.JSX.Element {
  const router = useRouter();

  const separateMode = useSettingsStore((s) => s.separateMode);
  const backgroundConversations = useSettingsStore(
    (s) => s.backgroundConversations,
  );
  const useAsDefaultAssistant = useSettingsStore(
    (s) => s.useAsDefaultAssistant,
  );
  const toggleSetting = useSettingsStore((s) => s.toggleSetting);

  const handleBackPress = useCallback((): void => {
    router.back();
  }, [router]);

  const handleToggleSeparateMode = useCallback((): void => {
    toggleSetting('separateMode');
  }, [toggleSetting]);

  const handleToggleBackgroundConversations = useCallback((): void => {
    toggleSetting('backgroundConversations');
  }, [toggleSetting]);

  const handleToggleDefaultAssistant = useCallback((): void => {
    toggleSetting('useAsDefaultAssistant');
  }, [toggleSetting]);

  return (
    <View style={styles.container}>
      <SettingsHeader
        title="Speech"
        onBackPress={handleBackPress}
        accessibilityLabel="Go back to settings"
      />

      <View style={styles.content}>
        <SettingsCardGroup>
          {/* Row 1: Input language */}
          <SettingsRow
            icon={Mic}
            title="Input language"
            subtitle="Auto-Detect"
            rightElement="chevron-down"
            onPress={() => {}}
            showSeparator={true}
            accessibilityLabel="Input language, Auto-Detect"
          />

          {/* Row 2: Description text (not a SettingsRow) */}
          <InCardDescription />

          {/* Row 3: Voice */}
          <SettingsRow
            icon={AudioLines}
            title="Voice"
            subtitle="Cove"
            rightElement="none"
            showSeparator={true}
            accessibilityLabel="Voice, Cove"
          />

          {/* Row 4: Separate mode */}
          <SettingsRow
            icon={SlidersHorizontal}
            title="Separate mode"
            rightElement="toggle"
            toggleValue={separateMode}
            onToggleChange={handleToggleSeparateMode}
            showSeparator={true}
            accessibilityLabel="Separate mode toggle"
          />

          {/* Row 5: Background conversations */}
          <SettingsRow
            icon={Radio}
            title="Background conversations"
            subtitle="Keep the conversation going in other apps or while your screen is off."
            rightElement="toggle"
            toggleValue={backgroundConversations}
            onToggleChange={handleToggleBackgroundConversations}
            showSeparator={true}
            accessibilityLabel="Background conversations toggle"
          />

          {/* Row 6: Use as default assistant */}
          <SettingsRow
            icon={Bot}
            title="Use as default assistant"
            subtitle="Set ChatGPT as your default digital assistant in Android settings."
            rightElement="toggle"
            toggleValue={useAsDefaultAssistant}
            onToggleChange={handleToggleDefaultAssistant}
            showSeparator={false}
            accessibilityLabel="Use as default assistant toggle"
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
  descriptionContainer: {
    paddingHorizontal: Spacing.settingsCardPaddingH,
    paddingVertical: Spacing.settingsCardPaddingH,
  },
  descriptionText: {
    fontSize: Typography.bodyXs.fontSize,
    fontWeight: Typography.bodyXs.fontWeight,
    lineHeight: Typography.bodyXs.lineHeight,
    color: Colors.text.tertiary,
  },
  separator: {
    height: Dimensions.separatorHeight,
    backgroundColor: Colors.border.settingsRowSeparator,
    marginLeft: Spacing.settingsCardPaddingH,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SpeechScreen;
