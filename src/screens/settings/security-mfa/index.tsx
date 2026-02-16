/**
 * SecurityMfaScreen — Parameterized MFA settings screen.
 * Renders one of three variants (authenticator, push, text) based on route params.
 * Each variant shows a section label, a single toggle row, and a description.
 */

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import SettingsHeader from '@/src/components/SettingsHeader';
import SettingsCardGroup from '@/src/components/SettingsCardGroup';
import SettingsRow from '@/src/components/SettingsRow';
import DescriptionText from '@/src/components/DescriptionText';
import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';
import { Typography } from '@/src/constants/typography';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type MfaVariant = 'authenticator' | 'push' | 'text';

interface MfaVariantConfig {
  sectionLabel: string;
  toggleLabel: string;
  description: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const MFA_VARIANTS: Record<MfaVariant, MfaVariantConfig> = {
  authenticator: {
    sectionLabel: 'GET CODES TO VERIFY LOG INS',
    toggleLabel: 'Authenticator app',
    description:
      'Use an authenticator app to generate one-time codes when you sign in. Turning this on will guide you through setup.',
  },
  push: {
    sectionLabel: 'GET PROMPTS TO YOUR DEVICE TO VERIFY LOG INS',
    toggleLabel: 'Push notifications',
    description:
      'Prompts go to your trusted devices where you are already signed in.',
  },
  text: {
    sectionLabel: 'GET CODES TO VERIFY LOG INS',
    toggleLabel: 'Text message',
    description:
      'Get 6-digit verification codes by SMS or WhatsApp based on your country code.',
  },
};

const DEFAULT_VARIANT: MfaVariant = 'authenticator';
const DEFAULT_TITLE = 'Authenticator app';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isMfaVariant(value: string): value is MfaVariant {
  return value === 'authenticator' || value === 'push' || value === 'text';
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SecurityMfaScreen(): React.JSX.Element {
  const router = useRouter();
  const { variant, title } = useLocalSearchParams<{
    variant: string;
    title: string;
  }>();

  const resolvedVariant: MfaVariant =
    variant && isMfaVariant(variant) ? variant : DEFAULT_VARIANT;

  const resolvedTitle: string = title ?? DEFAULT_TITLE;
  const config = MFA_VARIANTS[resolvedVariant];

  const [toggleEnabled, setToggleEnabled] = React.useState<boolean>(false);

  const handleBack = React.useCallback((): void => {
    router.back();
  }, [router]);

  const handleToggleChange = React.useCallback((value: boolean): void => {
    setToggleEnabled(value);
  }, []);

  return (
    <View style={styles.screen}>
      <SettingsHeader
        title={resolvedTitle}
        onBackPress={handleBack}
        accessibilityLabel={`Go back from ${resolvedTitle}`}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionLabel}>{config.sectionLabel}</Text>

        <SettingsCardGroup>
          <SettingsRow
            title={config.toggleLabel}
            rightElement="toggle"
            toggleValue={toggleEnabled}
            onToggleChange={handleToggleChange}
            showSeparator={false}
            accessibilityLabel={`Toggle ${config.toggleLabel}`}
          />
        </SettingsCardGroup>

        <DescriptionText text={config.description} />
      </ScrollView>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.bg.primary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.settingsScreenPaddingH,
  },
  sectionLabel: {
    fontSize: Typography.settingsSectionHeaderCaps.fontSize,
    fontWeight: Typography.settingsSectionHeaderCaps.fontWeight,
    lineHeight: Typography.settingsSectionHeaderCaps.lineHeight,
    letterSpacing: Typography.settingsSectionHeaderCaps.letterSpacing,
    color: Colors.text.tertiary,
    textTransform: 'uppercase',
    marginTop: 8,
    marginBottom: 10,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SecurityMfaScreen;
