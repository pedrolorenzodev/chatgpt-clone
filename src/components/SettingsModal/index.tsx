/**
 * SettingsModal — Centered AlertDialog-style modal dialog.
 *
 * Three variants:
 * - info: body text + OK button
 * - radio-list: title + children (radio list) + OK button
 * - confirm: title + body + Cancel/Action buttons
 *
 * Container: #424242 bg, 28px radius, 85% width, 24px padding.
 * Backdrop: black 50%, tap dismisses. Fade animation 200ms.
 */

import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';
import {
  Colors,
  Dimensions,
  Spacing,
  Animations,
  Shadows,
} from '@/src/constants/design-tokens';

interface ModalButton {
  label: string;
  onPress: () => void;
}

interface SettingsModalProps {
  visible: boolean;
  onDismiss: () => void;
  title?: string;
  body?: string;
  children?: React.ReactNode;
  buttons: ModalButton[];
}

const FADE_DURATION = Animations.durationContextMenu;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function SettingsModal({
  visible,
  onDismiss,
  title,
  body,
  children,
  buttons,
}: SettingsModalProps): React.JSX.Element {
  const { width: screenWidth } = useWindowDimensions();
  const modalWidth = screenWidth * Dimensions.modalWidthPct;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={onDismiss}
    >
      <View style={styles.centeredWrapper}>
        <AnimatedPressable
          style={styles.backdrop}
          onPress={onDismiss}
          entering={FadeIn.duration(FADE_DURATION)}
          exiting={FadeOut.duration(FADE_DURATION)}
          accessibilityLabel="Dismiss modal"
          accessibilityRole="button"
        />
        <Animated.View
          style={[styles.container, { width: modalWidth }]}
          entering={FadeIn.duration(FADE_DURATION)}
          exiting={FadeOut.duration(FADE_DURATION)}
        >
          {title ? <Text style={styles.title}>{title}</Text> : null}
          {body ? (
            <Text
              style={[styles.body, title ? styles.bodyWithTitle : undefined]}
            >
              {body}
            </Text>
          ) : null}
          {children ? (
            <View style={styles.childrenContainer}>{children}</View>
          ) : null}
          <View style={styles.buttonsRow}>
            {buttons.map((button) => (
              <Pressable
                key={button.label}
                onPress={button.onPress}
                accessibilityLabel={button.label}
                accessibilityRole="button"
                style={({ pressed }) => [
                  styles.buttonPressable,
                  pressed ? styles.buttonPressed : undefined,
                ]}
              >
                <Text style={styles.buttonText}>{button.label}</Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.bg.modalBackdrop,
    opacity: 0.5,
  },
  container: {
    backgroundColor: Colors.bg.modalDialog,
    borderRadius: Dimensions.confirmationModalRadius,
    padding: Spacing.modalPadding,
    ...Shadows.confirmation,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.text.primary,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.text.modalBody,
    lineHeight: 24,
  },
  bodyWithTitle: {
    marginTop: Spacing.md,
  },
  childrenContainer: {
    marginTop: Spacing.lg,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: Spacing.xxl,
    gap: Spacing.modalButtonGap,
  },
  buttonPressable: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.xs,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
  },
});

export default SettingsModal;
