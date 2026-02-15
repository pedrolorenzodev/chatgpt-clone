/**
 * PasskeyEmptyState -- Centered empty state for the Passkeys settings screen.
 *
 * Displays a passkey icon, "Add a passkey" title, description text,
 * and a PrimaryButton CTA.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyRound } from 'lucide-react-native';

import PrimaryButton from '@/src/components/PrimaryButton';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PasskeyEmptyStateProps {
  onCreatePress: () => void;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DESCRIPTION =
  'A passkey is a secure, device-based credential that replaces passwords. Create one to sign in faster and more securely.';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function PasskeyEmptyState({
  onCreatePress,
}: PasskeyEmptyStateProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/* Icon */}
      <View style={styles.iconWrapper}>
        <KeyRound
          size={Dimensions.passkeyIconSize}
          color={Colors.icon.primary}
          strokeWidth={1.5}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Add a passkey</Text>

      {/* Description */}
      <Text style={styles.description}>{DESCRIPTION}</Text>

      {/* CTA Button */}
      <View style={styles.buttonWrapper}>
        <PrimaryButton
          label="Create a passkey"
          onPress={onCreatePress}
          accessibilityLabel="Create a passkey"
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xxl,
  },
  iconWrapper: {
    marginBottom: Spacing.xl,
  },
  title: {
    ...Typography.passkeyTitle,
    color: Colors.text.primary,
    textAlign: 'center',
  },
  description: {
    ...Typography.passkeyDescription,
    color: Colors.text.tertiary,
    textAlign: 'center',
    marginTop: Spacing.md,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: Spacing.xxl,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default PasskeyEmptyState;
