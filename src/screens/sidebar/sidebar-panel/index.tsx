/**
 * SidebarPanel — Placeholder sidebar content panel.
 *
 * Background: #171717 (bg-sidebar). Actual content will be built in Wave 4.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/src/constants/design-tokens';

function SidebarPanelScreen(): React.JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 16, paddingBottom: insets.bottom }]}>
      <Text style={styles.title}>Sidebar</Text>
      <Text style={styles.subtitle}>Placeholder content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg.sidebar,
    paddingHorizontal: 16,
  },
  title: {
    color: Colors.text.primary,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    color: Colors.text.tertiary,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default SidebarPanelScreen;
