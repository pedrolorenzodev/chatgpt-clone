/**
 * EmailForm — Email input section for the login screen (email mode).
 *
 * Wraps FloatingLabelInput with email-specific configuration.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import FloatingLabelInput from '@/src/components/FloatingLabelInput';

interface EmailFormProps {
  value: string;
  onChangeText: (text: string) => void;
}

function EmailForm({ value, onChangeText }: EmailFormProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <FloatingLabelInput
        label="Email"
        value={value}
        onChangeText={onChangeText}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        accessibilityLabel="Email address input"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default React.memo(EmailForm);
