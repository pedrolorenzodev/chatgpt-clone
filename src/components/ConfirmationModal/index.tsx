/**
 * ConfirmationModal -- Centered dialog for destructive or confirmatory actions.
 *
 * Contains a title, optional description, and a row of text buttons.
 * Supports destructive confirm styling and a loading state with spinner.
 * Backdrop: black 50%, tap dismisses.
 */

import React, { useCallback } from 'react';
import {
  ActivityIndicator,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Animations, Easings, Shadows, Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ConfirmationModalProps {
  visible: boolean;
  title: string;
  description?: string;
  cancelLabel?: string;
  confirmLabel: string;
  confirmVariant?: 'destructive' | 'neutral';
  isLoading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Sub-component: ModalTextButton
// ---------------------------------------------------------------------------

function ModalTextButton({
  label,
  color,
  onPress,
  isLoading,
}: {
  label: string;
  color: string;
  onPress: () => void;
  isLoading?: boolean;
}): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityIcon,
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={isLoading}
        accessibilityLabel={label}
        accessibilityRole="button"
        style={styles.textButton}
      >
        <Text style={[styles.textButtonLabel, { color }]}>{label}</Text>
        {isLoading === true && (
          <ActivityIndicator
            size="small"
            color={color}
            style={styles.buttonSpinner}
          />
        )}
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ConfirmationModal({
  visible,
  title,
  description,
  cancelLabel = 'Cancel',
  confirmLabel,
  confirmVariant = 'destructive',
  isLoading = false,
  onCancel,
  onConfirm,
  accessibilityLabel,
}: ConfirmationModalProps): React.JSX.Element | null {
  const { width: screenWidth } = useWindowDimensions();
  const modalWidth = screenWidth * Dimensions.confirmationModalWidth;

  const confirmColor =
    confirmVariant === 'destructive'
      ? Colors.text.destructive
      : Colors.text.primary;

  const handleBackdropPress = useCallback((): void => {
    if (!isLoading) onCancel();
  }, [isLoading, onCancel]);

  if (!visible) return null;

  return (
    <Modal
      transparent
      visible
      onRequestClose={handleBackdropPress}
      statusBarTranslucent
      accessibilityLabel={accessibilityLabel}
    >
      {/* Backdrop */}
      <Pressable
        onPress={handleBackdropPress}
        accessibilityLabel="Dismiss"
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
        style={styles.centerWrapper}
      >
        <View
          style={[
            styles.card,
            Shadows.confirmation,
            { width: modalWidth },
          ]}
        >
          {/* Title */}
          <Text style={styles.title}>{title}</Text>

          {/* Description */}
          {description != null && (
            <Text style={styles.description}>{description}</Text>
          )}

          {/* Button row */}
          <View style={styles.buttonRow}>
            <ModalTextButton
              label={cancelLabel}
              color={Colors.text.primary}
              onPress={onCancel}
            />
            <ModalTextButton
              label={confirmLabel}
              color={confirmColor}
              onPress={onConfirm}
              isLoading={isLoading}
            />
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  centerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.bg.modal,
    borderRadius: Dimensions.confirmationModalRadius,
    padding: Spacing.modalPadding,
  },
  title: {
    ...Typography.headingModal,
    color: Colors.text.primary,
  },
  description: {
    ...Typography.bodySm,
    color: Colors.text.tertiary,
    marginTop: Spacing.md,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: Spacing.xxl,
    gap: Spacing.modalButtonGap,
  },
  textButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.xs,
  },
  textButtonLabel: {
    ...Typography.labelSm,
  },
  buttonSpinner: {
    marginLeft: Spacing.sm,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ConfirmationModal;
