/**
 * Welcome Screen (Auth 01) — First screen shown on fresh install.
 *
 * Full-screen dark layout with title, subtitle, two info cards,
 * a terms disclaimer card, and a "Continue" CTA pinned to the bottom.
 * Content does NOT scroll — it fits within the viewport.
 */

import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Search, Lock } from 'lucide-react-native';

import InfoCard from '@/src/components/InfoCard';
import PrimaryButton from '@/src/components/PrimaryButton';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE = Dimensions.iconSizeXl;
const ICON_STROKE_WIDTH = 1.5;
const TITLE_MARGIN_TOP = 60;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function WelcomeScreen(): React.JSX.Element {
  const router = useRouter();

  const handleContinue = useCallback((): void => {
    router.replace('/(chat)');
  }, [router]);

  const handleLinkPress = useCallback((): void => {
    // No-op in clone — would open external browser
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to ChatGPT</Text>

        <Text style={styles.subtitle}>
          This official app is free, syncs your history across devices, and
          brings you the latest model improvements from OpenAI.
        </Text>

        <View style={styles.infoSection}>
          <InfoCard
            icon={
              <Search
                size={ICON_SIZE}
                color={Colors.icon.primary}
                strokeWidth={ICON_STROKE_WIDTH}
              />
            }
            title="ChatGPT can be inaccurate"
            description="ChatGPT may provide inaccurate information about people, places, or facts."
          />

          <View style={styles.separator} />

          <InfoCard
            icon={
              <Lock
                size={ICON_SIZE}
                color={Colors.icon.primary}
                strokeWidth={ICON_STROKE_WIDTH}
              />
            }
            title="Don't share sensitive info"
            description="Chats may be reviewed and used for training."
            linkText="Learn about your choices."
            onLinkPress={handleLinkPress}
          />
        </View>
      </View>

      {/* Bottom Pinned Section */}
      <View style={styles.bottomSection}>
        <View style={styles.termsCard}>
          <Text style={styles.termsText}>
            By continuing, you agree to our{' '}
            <Text
              style={styles.termsLink}
              onPress={handleLinkPress}
              accessibilityRole="link"
            >
              Terms
            </Text>
            {' '}and have read our{' '}
            <Text
              style={styles.termsLink}
              onPress={handleLinkPress}
              accessibilityRole="link"
            >
              Privacy Policy
            </Text>
            .
          </Text>
        </View>

        <PrimaryButton
          label="Continue"
          onPress={handleContinue}
          isWelcome
          accessibilityLabel="Continue to ChatGPT"
        />
      </View>
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
  content: {
    flex: 1,
    paddingHorizontal: Spacing.screenPaddingH,
    paddingTop: TITLE_MARGIN_TOP,
  },
  title: {
    ...Typography.headingXl,
    color: Colors.text.primary,
  },
  subtitle: {
    ...Typography.bodyLg,
    color: Colors.text.secondary,
    marginTop: Spacing.md,
  },
  infoSection: {
    marginTop: Spacing.xxxxl,
  },
  separator: {
    height: Dimensions.separatorHeight,
    backgroundColor: Colors.border.separator,
    marginVertical: Spacing.xxl,
  },
  bottomSection: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingBottom: Spacing.xxl,
  },
  termsCard: {
    backgroundColor: Colors.bg.termsCard,
    borderWidth: 1,
    borderColor: Colors.border.termsCard,
    borderRadius: Dimensions.termsCardRadius,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  termsText: {
    ...Typography.bodyXs,
    color: Colors.text.tertiary,
  },
  termsLink: {
    color: Colors.text.link,
    textDecorationLine: 'underline',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default WelcomeScreen;
