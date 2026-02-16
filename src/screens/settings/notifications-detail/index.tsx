/**
 * NotificationsDetailScreen — Parameterized notification settings screen.
 * Displays Push/Email toggles based on the notification category.
 */

import React, { useCallback, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import SettingsHeader from '@/src/components/SettingsHeader';
import SettingsCardGroup from '@/src/components/SettingsCardGroup';
import SettingsRow from '@/src/components/SettingsRow';
import DescriptionText from '@/src/components/DescriptionText';
import { useSettingsStore } from '@/src/stores/settings.store';
import { Colors } from '@/src/constants/colors';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface CategoryConfig {
  showPush: boolean;
  showEmail: boolean;
  description: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CATEGORY_CONFIGS: Record<string, CategoryConfig> = {
  responses: {
    showPush: true,
    showEmail: false,
    description:
      'Get notified when ChatGPT responds to requests that take time, like research or image generation.',
  },
  'group-chats': {
    showPush: true,
    showEmail: false,
    description:
      "You'll receive notifications for new messages from group chats.",
  },
  tasks: {
    showPush: true,
    showEmail: true,
    description:
      "Get notified when tasks you've created have updates.",
  },
  projects: {
    showPush: false,
    showEmail: true,
    description:
      'Get notified when you receive an email invitation to a shared project.',
  },
  recommendations: {
    showPush: true,
    showEmail: true,
    description:
      'Stay in the loop on new tools, tips, and features from ChatGPT.',
  },
  usage: {
    showPush: true,
    showEmail: true,
    description:
      "We'll notify you when limits reset for features like image creation.",
  },
};

const DEFAULT_CONFIG: CategoryConfig = {
  showPush: true,
  showEmail: true,
  description: '',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function NotificationsDetailScreen(): React.JSX.Element {
  const router = useRouter();
  const { category, title } = useLocalSearchParams<{
    category: string;
    title: string;
  }>();

  const notifications = useSettingsStore((state) => state.notifications);
  const setNotification = useSettingsStore((state) => state.setNotification);

  const safeCategory = category ?? '';
  const safeTitle = title ?? 'Notifications';

  const config = CATEGORY_CONFIGS[safeCategory] ?? DEFAULT_CONFIG;
  const setting = notifications[safeCategory];

  const pushValue = setting?.push ?? false;
  const emailValue = setting?.email ?? false;

  const handleBack = useCallback((): void => {
    router.back();
  }, [router]);

  const handlePushToggle = useCallback(
    (value: boolean): void => {
      setNotification(safeCategory, 'push', value);
    },
    [safeCategory, setNotification],
  );

  const handleEmailToggle = useCallback(
    (value: boolean): void => {
      setNotification(safeCategory, 'email', value);
    },
    [safeCategory, setNotification],
  );

  const showBothToggles = config.showPush && config.showEmail;

  const pushSeparator = useMemo(
    (): boolean => showBothToggles,
    [showBothToggles],
  );

  return (
    <View style={styles.container}>
      <SettingsHeader
        title={safeTitle}
        onBackPress={handleBack}
        accessibilityLabel={`Go back from ${safeTitle}`}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionLabel}>
          {"Where you'll be notified"}
        </Text>

        <View style={styles.cardContainer}>
          <SettingsCardGroup>
            {config.showPush && (
              <SettingsRow
                title="Push"
                rightElement="toggle"
                toggleValue={pushValue}
                onToggleChange={handlePushToggle}
                showSeparator={pushSeparator}
                accessibilityLabel={`Push notifications for ${safeTitle}`}
              />
            )}
            {config.showEmail && (
              <SettingsRow
                title="Email"
                rightElement="toggle"
                toggleValue={emailValue}
                onToggleChange={handleEmailToggle}
                showSeparator={false}
                accessibilityLabel={`Email notifications for ${safeTitle}`}
              />
            )}
          </SettingsCardGroup>
        </View>

        {config.description.length > 0 && (
          <DescriptionText text={config.description} />
        )}
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
    paddingBottom: 40,
  },
  sectionLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 8,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  cardContainer: {
    paddingHorizontal: 16,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default NotificationsDetailScreen;
