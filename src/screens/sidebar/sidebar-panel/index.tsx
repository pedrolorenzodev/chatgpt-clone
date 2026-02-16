/**
 * SidebarPanelScreen -- Root sidebar panel that switches between
 * authenticated and unauthenticated variants.
 *
 * Reads `isAuthenticated` from useAuthStore and renders the matching
 * sub-component. Background: #171717 (Colors.bg.sidebar).
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useAuthStore } from '@/src/stores/auth.store';
import { Colors } from '@/src/constants/colors';
import AuthSidebar from './components/AuthSidebar';
import UnauthSidebar from './components/UnauthSidebar';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SidebarPanelScreen(): React.JSX.Element {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return (
    <View style={styles.container}>
      {isAuthenticated ? <AuthSidebar /> : <UnauthSidebar />}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg.sidebar,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SidebarPanelScreen;
