/**
 * PhoneForm — Phone input section for the login screen (phone mode).
 *
 * Displays a CountrySelector and FloatingLabelInput for phone number
 * in a horizontal row layout.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import CountrySelector from '@/src/components/CountrySelector';
import FloatingLabelInput from '@/src/components/FloatingLabelInput';
import { Spacing } from '@/src/constants/spacing';

interface PhoneFormProps {
  phoneValue: string;
  onPhoneChange: (text: string) => void;
}

const NOOP = (): void => {};

function PhoneForm({
  phoneValue,
  onPhoneChange,
}: PhoneFormProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <CountrySelector
        dialCode="+54"
        flagEmoji="\u{1F1E6}\u{1F1F7}"
        onPress={NOOP}
        accessibilityLabel="Country selector, Argentina +54"
      />
      <View style={styles.inputWrapper}>
        <FloatingLabelInput
          label="Phone number"
          value={phoneValue}
          onChangeText={onPhoneChange}
          keyboardType="phone-pad"
          accessibilityLabel="Phone number input"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    gap: Spacing.md,
  },
  inputWrapper: {
    flex: 1,
  },
});

export default React.memo(PhoneForm);
