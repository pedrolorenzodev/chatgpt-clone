/**
 * NotificationsScreen — Settings screen listing notification categories.
 * Each row navigates to a detail screen for that notification category.
 */

import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import SettingsHeader from '@/src/components/SettingsHeader';
import SettingsCardGroup from '@/src/components/SettingsCardGroup';
import SettingsRow from '@/src/components/SettingsRow';
import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface NotificationCategory {
  title: string;
  category: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const NOTIFICATION_CATEGORIES: NotificationCategory[] = [
  { title: 'Responses', category: 'responses' },
  { title: 'Group chats', category: 'group-chats' },
  { title: 'Tasks', category: 'tasks' },
  { title: 'Projects', category: 'projects' },
  { title: 'Recommendations', category: 'recommendations' },
  { title: 'Usage', category: 'usage' },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function NotificationsScreen(): React.JSX.Element {
  const router = useRouter();

  const handleBackPress = useCallback((): void => {
    router.back();
  }, [router]);

  const handleCategoryPress = useCallback(
    (category: string, title: string): void => {
      const encodedTitle = encodeURIComponent(title);
      router.push(
        `/settings/notifications-detail?category=${category}&title=${encodedTitle}` as never,
      );
    },
    [router],
  );

  return (
    <View style={styles.container}>
      <SettingsHeader
        title="Notifications"
        onBackPress={handleBackPress}
        accessibilityLabel="Go back to settings"
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SettingsCardGroup>
          {NOTIFICATION_CATEGORIES.map(
            (item: NotificationCategory, index: number) => {
              const isLast = index === NOTIFICATION_CATEGORIES.length - 1;

              return (
                <SettingsRow
                  key={item.category}
                  title={item.title}
                  rightElement="status"
                  statusText="On"
                  showSeparator={!isLast}
                  onPress={() =>
                    handleCategoryPress(item.category, item.title)
                  }
                  accessibilityLabel={`${item.title} notifications, currently On`}
                />
              );
            },
          )}
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
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default NotificationsScreen;
