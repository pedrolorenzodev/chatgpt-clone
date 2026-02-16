/**
 * EditWarningContainer -- Info banner shown in edit message mode.
 *
 * Background #1A1A1A, border 1px #333333, radius 12px.
 * Row layout: Info icon (20px, #9A9A9A) + message text (14px, #D4D4D4).
 * Fades in on mount (300ms via FadeIn from reanimated).
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Info } from 'lucide-react-native';

import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Animations } from '@/src/constants/animations';
import { Typography } from '@/src/constants/typography';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface EditWarningContainerProps {
  /** Warning message (default provided) */
  message?: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DEFAULT_MESSAGE =
  'Editing this message will restart the conversation from here.';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function EditWarningContainer({
  message = DEFAULT_MESSAGE,
}: EditWarningContainerProps): React.JSX.Element {
  return (
    <Animated.View
      entering={FadeIn.duration(Animations.durationNormal)}
      style={styles.container}
      accessibilityLabel={message}
      accessibilityRole="alert"
    >
      <View style={styles.iconContainer}>
        <Info
          size={Dimensions.iconSizeMd}
          color={Colors.icon.secondary}
        />
      </View>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.chatPaddingH,
    backgroundColor: Colors.bg.reportModal,
    borderWidth: 1,
    borderColor: Colors.border.editWarning,
    borderRadius: Dimensions.chatEditWarningRadius,
    paddingHorizontal: Spacing.chatWarningPadding,
    paddingVertical: Spacing.settingsCardPaddingV,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    marginRight: Spacing.md,
  },
  text: {
    ...Typography.bodyXs,
    color: Colors.text.secondary,
    flex: 1,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default EditWarningContainer;
