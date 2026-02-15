/**
 * ContextualModal -- Floating modal that appears near a triggering element.
 *
 * Used for contextual menus (Ellipsis, Retry, Switch Model, GroupChat Options).
 * Supports option rows with icons, text, subtitles, chevrons, and destructive
 * color variants. Transparent backdrop, tap-to-dismiss.
 */

import React from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import OptionRow from './OptionRow';
import type { ContextualModalOption } from './OptionRow';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Animations, Easings, Shadows } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ContextualModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  sectionTitle?: string;
  options: ContextualModalOption[];
  anchorPosition: 'top-right' | 'bottom-right' | 'bottom-left';
  accessibilityLabel: string;
}

export type { ContextualModalOption };

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ContextualModal({
  visible,
  onClose,
  title,
  sectionTitle,
  options,
  anchorPosition,
  accessibilityLabel,
}: ContextualModalProps): React.JSX.Element | null {
  if (!visible) return null;

  const positionStyle =
    anchorPosition === 'top-right'
      ? styles.anchorTopRight
      : anchorPosition === 'bottom-left'
        ? styles.anchorBottomLeft
        : styles.anchorBottomRight;

  return (
    <Modal
      transparent
      visible
      onRequestClose={onClose}
      statusBarTranslucent
      accessibilityLabel={accessibilityLabel}
    >
      {/* Transparent backdrop */}
      <Pressable
        onPress={onClose}
        accessibilityLabel="Dismiss modal"
        accessibilityRole="button"
        style={styles.backdrop}
      />

      {/* Modal card */}
      <Animated.View
        entering={FadeIn.duration(Animations.durationContextMenu).easing(
          Easings.standard,
        )}
        exiting={FadeOut.duration(Animations.durationFast).easing(
          Easings.standard,
        )}
        style={[styles.card, Shadows.modal, positionStyle]}
      >
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          {/* Section title */}
          {sectionTitle != null && (
            <Text style={styles.sectionTitle}>{sectionTitle}</Text>
          )}

          {/* Title */}
          {title != null && <Text style={styles.title}>{title}</Text>}

          {/* Options */}
          {options.map((option, index) => (
            <OptionRow
              key={`${option.label}-${index}`}
              option={option}
              onClose={onClose}
              isLast={index === options.length - 1}
            />
          ))}
        </ScrollView>
      </Animated.View>
    </Modal>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const MODAL_WIDTH = 270;

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  card: {
    position: 'absolute',
    width: MODAL_WIDTH,
    backgroundColor: Colors.bg.modal,
    borderRadius: Dimensions.modalRadius,
    paddingVertical: Spacing.sm,
    maxHeight: '60%',
    overflow: 'hidden',
  },
  anchorTopRight: {
    top: 100,
    right: Spacing.lg,
  },
  anchorBottomRight: {
    bottom: 100,
    right: Spacing.lg,
  },
  anchorBottomLeft: {
    bottom: 100,
    left: Spacing.lg,
  },
  sectionTitle: {
    ...Typography.bodyXxs,
    color: Colors.text.disabled,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.xs,
  },
  title: {
    ...Typography.bodyXxs,
    color: Colors.text.disabled,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ContextualModal;
