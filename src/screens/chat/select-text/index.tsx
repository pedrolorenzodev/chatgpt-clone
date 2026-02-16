/**
 * SelectTextScreen -- Fullscreen modal for selecting/copying message text.
 *
 * Displays the user message in a selectable, read-only text view.
 * Header has a circular back button and centered "Select Text" title.
 * Background: #000000. Entry/exit via fade animation (handled by layout).
 */

import React, { useCallback } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { useChatStore } from '@/src/stores/chat.store';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Animations, Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const BACK_BUTTON_SIZE = Dimensions.iconButtonSize;
const BACK_ICON_SIZE = 22;
const HEADER_HEIGHT = Dimensions.headerHeight;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SelectTextScreen(): React.JSX.Element {
  const router = useRouter();
  const contextMenuTarget = useChatStore((s) => s.contextMenuTarget);
  const messages = useChatStore((s) => s.messages);

  const targetMessage = contextMenuTarget != null
    ? messages.find((m) => m.id === contextMenuTarget) ?? null
    : null;

  const messageText = targetMessage?.content ?? '';

  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityIcon,
  });

  const handleGoBack = useCallback((): void => {
    router.back();
  }, [router]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <Animated.View
        entering={FadeIn.duration(Animations.durationContextMenu)}
        style={styles.screen}
      >
        {/* Header */}
        <View style={styles.header}>
          <Animated.View style={animatedStyle}>
            <Pressable
              onPress={handleGoBack}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              accessibilityLabel="Go back"
              accessibilityRole="button"
              style={styles.backButton}
            >
              <ArrowLeft
                size={BACK_ICON_SIZE}
                color={Colors.icon.primary}
                strokeWidth={2}
              />
            </Pressable>
          </Animated.View>
          <Text
            style={styles.headerTitle}
            accessibilityRole="header"
            accessibilityLabel="Select Text"
          >
            Select Text
          </Text>
          {/* Spacer to balance the back button for centering title */}
          <View style={styles.headerSpacer} />
        </View>

        {/* Selectable content */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text
            selectable
            style={styles.selectableText}
            accessibilityLabel={messageText}
            accessibilityRole="text"
          >
            {messageText}
          </Text>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.bg.primary,
  },
  screen: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.chatPaddingH,
  },
  backButton: {
    width: BACK_BUTTON_SIZE,
    height: BACK_BUTTON_SIZE,
    borderRadius: BACK_BUTTON_SIZE / 2,
    backgroundColor: Colors.bg.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  headerSpacer: {
    width: BACK_BUTTON_SIZE,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.chatPaddingH,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  selectableText: {
    ...Typography.bodyMd,
    color: Colors.text.primary,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SelectTextScreen;
