/**
 * SettingsCardGroup — Rounded container that groups SettingsRow components.
 * Provides the dark card background and clips children to rounded corners.
 *
 * Variants:
 *   - auth (default): #2A2A2A background
 *   - unauth: #3A3A3A background
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SettingsCardGroupProps {
  children: React.ReactNode;
  variant?: 'auth' | 'unauth';
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SettingsCardGroup({
  children,
  variant = 'auth',
}: SettingsCardGroupProps): React.JSX.Element {
  const containerStyle =
    variant === 'unauth' ? variantStyles.unauth : variantStyles.auth;

  return <View style={containerStyle}>{children}</View>;
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const BASE_CARD = {
  borderRadius: Spacing.settingsCardRadius,
  overflow: 'hidden' as const,
};

const variantStyles = StyleSheet.create({
  auth: {
    ...BASE_CARD,
    backgroundColor: Colors.bg.settingsCard,
  },
  unauth: {
    ...BASE_CARD,
    backgroundColor: Colors.bg.settingsCardUnauth,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SettingsCardGroup;
