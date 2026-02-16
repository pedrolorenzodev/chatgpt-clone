/**
 * About Screen — Settings sub-screen showing app info links and version.
 * Visually identical for auth and unauth, except card background color.
 *
 * Spec: /specs/settings/about-screen-unauth-spec.md
 *       /specs/settings/about-screen-auth-spec.md
 */

import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { HelpCircle, FileText, Users, File, Circle } from 'lucide-react-native';

import SettingsHeader from '@/src/components/SettingsHeader';
import SettingsCardGroup from '@/src/components/SettingsCardGroup';
import SettingsRow from '@/src/components/SettingsRow';
import { useAuthStore } from '@/src/stores/auth.store';
import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const VERSION_SUBTITLE = '1.2026.027 (30)';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function AboutScreen(): React.JSX.Element {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const cardVariant = isAuthenticated ? 'auth' : 'unauth';

  const handleBackPress = useCallback((): void => {
    router.back();
  }, [router]);

  const handleLicensesPress = useCallback((): void => {
    router.push('/(settings)/licenses');
  }, [router]);

  const handleNoOp = useCallback((): void => {
    // Would open external browser link — no-op in this clone
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SettingsHeader title="About" onBackPress={handleBackPress} />

      <View style={styles.content}>
        <SettingsCardGroup variant={cardVariant}>
          <SettingsRow
            icon={HelpCircle}
            title="Help center"
            onPress={handleNoOp}
            showSeparator
            accessibilityLabel="Help center"
          />
          <SettingsRow
            icon={FileText}
            title="Terms of use"
            onPress={handleNoOp}
            showSeparator
            accessibilityLabel="Terms of use"
          />
          <SettingsRow
            icon={Users}
            title="Privacy policy"
            onPress={handleNoOp}
            showSeparator
            accessibilityLabel="Privacy policy"
          />
          <SettingsRow
            icon={File}
            title="Licenses"
            onPress={handleLicensesPress}
            showSeparator
            accessibilityLabel="Licenses, navigate to licenses screen"
          />
          <SettingsRow
            icon={Circle}
            title="ChatGPT for Android"
            subtitle={VERSION_SUBTITLE}
            showSeparator={false}
            accessibilityLabel="ChatGPT for Android version information"
          />
        </SettingsCardGroup>
      </View>
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
  content: {
    paddingHorizontal: Spacing.settingsScreenPaddingH,
    paddingTop: Spacing.sm,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default AboutScreen;
