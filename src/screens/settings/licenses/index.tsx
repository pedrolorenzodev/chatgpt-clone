/**
 * LicensesScreen -- Open source licenses list.
 *
 * Displays a FlashList of LicenseItem components with a transparent
 * back button and left-aligned "Open source licenses" title.
 * Items are pressable but perform no action.
 */

import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';

import BackButton from '@/src/components/BackButton';
import LicenseItem from '@/src/components/LicenseItem';
import { MOCK_LICENSES } from '@/src/constants/mock-data/licenses.data';
import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';
import type { LicenseData } from '@/src/types/settings.types';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const HEADER_PADDING_TOP = 12;
const HEADER_PADDING_BOTTOM = 16;
const TITLE_MARGIN_LEFT = 16;
const SAFE_AREA_EDGES = ['top'] as const;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function LicensesScreen(): React.JSX.Element {
  const router = useRouter();

  const handleBackPress = useCallback((): void => {
    router.back();
  }, [router]);

  const renderItem = useCallback(
    ({ item }: { item: LicenseData }): React.JSX.Element => (
      <LicenseItem
        libraryName={item.libraryName}
        version={item.version}
        author={item.author}
        licenseType={item.licenseType}
        onPress={noop}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(
    (item: LicenseData, index: number): string =>
      `${item.libraryName}-${index}`,
    [],
  );

  return (
    <SafeAreaView style={styles.container} edges={SAFE_AREA_EDGES}>
      {/* Header: transparent back + left-aligned title */}
      <View style={styles.header}>
        <BackButton onPress={handleBackPress} variant="transparent" />
        <Text style={styles.title}>Open source licenses</Text>
      </View>

      {/* License list */}
      <FlashList
        data={MOCK_LICENSES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** No-op press handler -- items are pressable but perform no action */
function noop(): void {
  // intentionally empty
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.settingsScreenPaddingH,
    paddingTop: HEADER_PADDING_TOP,
    paddingBottom: HEADER_PADDING_BOTTOM,
    backgroundColor: Colors.bg.primary,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.text.primary,
    marginLeft: TITLE_MARGIN_LEFT,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default LicensesScreen;
