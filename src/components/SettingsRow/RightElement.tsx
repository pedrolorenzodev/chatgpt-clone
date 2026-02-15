/**
 * SettingsRowRightElement — Renders the right-side element for SettingsRow.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChevronRight, ChevronDown } from 'lucide-react-native';

import ToggleSwitch from '@/src/components/ToggleSwitch';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RightElementProps {
  rightElement: string;
  toggleValue: boolean | undefined;
  statusText: string | undefined;
  hasOnPress: boolean;
  title: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CHEVRON_SIZE = Dimensions.iconSizeMd;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SettingsRowRightElement({
  rightElement,
  toggleValue,
  statusText,
  hasOnPress,
  title,
}: RightElementProps): React.JSX.Element | null {
  switch (rightElement) {
    case 'chevron-right':
      return (
        <View style={styles.container}>
          {statusText != null && (
            <Text style={styles.statusText}>{statusText}</Text>
          )}
          <ChevronRight
            size={CHEVRON_SIZE}
            color={Colors.icon.chevronSecondary}
            strokeWidth={2}
          />
        </View>
      );
    case 'chevron-down':
      return (
        <View style={styles.container}>
          <ChevronDown
            size={CHEVRON_SIZE}
            color={Colors.icon.chevronSecondary}
            strokeWidth={2}
          />
        </View>
      );
    case 'toggle':
      return (
        <View style={styles.container} pointerEvents="none">
          <ToggleSwitch
            value={!!toggleValue}
            onValueChange={() => {}}
            accessibilityLabel={`${title} toggle`}
          />
        </View>
      );
    case 'status':
      return (
        <View style={styles.container}>
          {statusText != null && (
            <Text style={styles.statusText}>{statusText}</Text>
          )}
          {hasOnPress && (
            <ChevronRight
              size={CHEVRON_SIZE}
              color={Colors.icon.chevronSecondary}
              strokeWidth={2}
            />
          )}
        </View>
      );
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginLeft: Spacing.sm,
  },
  statusText: {
    fontSize: Typography.settingsRowStatus.fontSize,
    fontWeight: Typography.settingsRowStatus.fontWeight,
    lineHeight: Typography.settingsRowStatus.lineHeight,
    color: Colors.text.tertiary,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SettingsRowRightElement;
