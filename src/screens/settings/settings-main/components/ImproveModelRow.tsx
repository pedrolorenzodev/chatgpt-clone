/**
 * ImproveModelRow — Custom settings row for "Improve the model for everyone".
 *
 * Uses auto-height layout (multi-line description with inline "Learn more" link)
 * and a top-aligned toggle. Standard SettingsRow does not support this variant.
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Layers } from 'lucide-react-native';

import ToggleSwitch from '@/src/components/ToggleSwitch';
import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ImproveModelRowProps {
  value: boolean;
  onToggle: () => void;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE = Dimensions.iconSizeLg;
const DESCRIPTION_MARGIN_TOP = 4;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ImproveModelRow({
  value,
  onToggle,
}: ImproveModelRowProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityButton,
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onToggle}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityLabel="Improve the model for everyone"
        accessibilityRole="switch"
        accessibilityState={{ checked: value }}
      >
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Layers
              size={ICON_SIZE}
              color={Colors.icon.primary}
              strokeWidth={2}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Improve the model for everyone
            </Text>
            <Text style={styles.description}>
              Allow your content to be used to improve our models for you and
              other users. We take steps to protect your privacy.{' '}
              <Text style={styles.learnMoreLink} accessibilityRole="link">
                Learn more
              </Text>
            </Text>
          </View>

          <View style={styles.toggleContainer} pointerEvents="none">
            <ToggleSwitch
              value={value}
              onValueChange={onToggle}
              accessibilityLabel="Improve model toggle"
            />
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: Spacing.settingsCardPaddingH,
    paddingVertical: Spacing.settingsCardPaddingH,
  },
  iconContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.iconTextGap,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: Typography.bodyMd.fontSize,
    fontWeight: Typography.bodyMd.fontWeight,
    lineHeight: Typography.bodyMd.lineHeight,
    color: Colors.text.primary,
  },
  description: {
    fontSize: Typography.bodyXs.fontSize,
    fontWeight: Typography.bodyXs.fontWeight,
    lineHeight: Typography.bodyXs.lineHeight,
    color: Colors.text.tertiary,
    marginTop: DESCRIPTION_MARGIN_TOP,
  },
  learnMoreLink: {
    textDecorationLine: 'underline',
  },
  toggleContainer: {
    marginLeft: Spacing.sm,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ImproveModelRow;
