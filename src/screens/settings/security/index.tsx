/**
 * SecurityScreen -- Settings sub-screen for security options.
 * Contains passkeys setup and multi-factor authentication (MFA) methods.
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

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SecurityScreen(): React.JSX.Element {
  const router = useRouter();

  const handleBackPress = useCallback((): void => {
    router.back();
  }, [router]);

  const handlePasskeysPress = useCallback((): void => {
    router.push('/(settings)/security-passkeys' as never);
  }, [router]);

  const handleAuthenticatorPress = useCallback((): void => {
    router.push({
      pathname: '/(settings)/security-mfa' as never,
      params: { variant: 'authenticator', title: 'Authenticator app' },
    });
  }, [router]);

  const handlePushPress = useCallback((): void => {
    router.push({
      pathname: '/(settings)/security-mfa' as never,
      params: { variant: 'push', title: 'Push notifications' },
    });
  }, [router]);

  const handleTextPress = useCallback((): void => {
    router.push({
      pathname: '/(settings)/security-mfa' as never,
      params: { variant: 'text', title: 'Text message' },
    });
  }, [router]);

  return (
    <View style={styles.container}>
      <SettingsHeader
        title="Security"
        onBackPress={handleBackPress}
        accessibilityLabel="Go back to settings"
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Section 1: Passkeys */}
        <SettingsCardGroup>
          <SettingsRow
            title="Passkeys"
            rightElement="status"
            statusText="Add"
            onPress={handlePasskeysPress}
            showSeparator={false}
            accessibilityLabel="Passkeys, tap to add"
          />
        </SettingsCardGroup>

        {/* Section 2: Multi-Factor Authentication */}
        <SettingsSectionHeader
          text="MULTI-FACTOR AUTHENTICATION (MFA)"
          variant="caps"
        />

        <SettingsCardGroup>
          <SettingsRow
            title="Authenticator app"
            rightElement="status"
            statusText="Off"
            onPress={handleAuthenticatorPress}
            showSeparator={true}
            accessibilityLabel="Authenticator app, currently Off"
          />
          <SettingsRow
            title="Push notifications"
            rightElement="status"
            statusText="Off"
            onPress={handlePushPress}
            showSeparator={true}
            accessibilityLabel="Push notifications, currently Off"
          />
          <SettingsRow
            title="Text message"
            rightElement="status"
            statusText="Off"
            onPress={handleTextPress}
            showSeparator={false}
            accessibilityLabel="Text message, currently Off"
          />
        </SettingsCardGroup>

        <DescriptionText
          text="Require an extra security challenge when logging in. If you are unable to pass this challenge, you will have the option to recover your account."
        />
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
    paddingTop: Spacing.sm,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SecurityScreen;
