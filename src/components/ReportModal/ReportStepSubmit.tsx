/**
 * ReportStepSubmit -- Step 3 of the ReportModal.
 *
 * Shows a textarea for additional details and a submit button.
 * Submit is disabled when textarea is empty.
 */

import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import PrimaryButton from '@/src/components/PrimaryButton';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ReportStepSubmitProps {
  details: string;
  onChangeDetails: (text: string) => void;
  onSubmit: () => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ReportStepSubmit({
  details,
  onChangeDetails,
  onSubmit,
}: ReportStepSubmitProps): React.JSX.Element {
  const isEmpty = details.trim().length === 0;

  return (
    <View style={styles.container}>
      <TextInput
        value={details}
        onChangeText={onChangeDetails}
        placeholder="Describe the issue..."
        placeholderTextColor={Colors.text.disabled}
        multiline
        textAlignVertical="top"
        style={styles.textarea}
        accessibilityLabel="Report details"
      />

      <View style={styles.buttonWrapper}>
        <PrimaryButton
          label="Submit"
          onPress={onSubmit}
          variant={isEmpty ? 'disabled' : 'default'}
          disabled={isEmpty}
          accessibilityLabel="Submit report"
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
  },
  textarea: {
    ...Typography.bodyMd,
    color: Colors.text.primary,
    height: Dimensions.reportTextareaHeight,
    borderWidth: Dimensions.inputBorderWidthDefault,
    borderColor: Colors.border.inputDefault,
    borderRadius: Spacing.md,
    padding: Spacing.lg,
    marginTop: Spacing.lg,
  },
  buttonWrapper: {
    marginTop: Spacing.xxl,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ReportStepSubmit;
