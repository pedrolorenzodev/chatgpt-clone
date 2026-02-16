/**
 * LoginScreen — Auth login with email/phone toggle, floating label inputs,
 * Continue button, Google sign-in, and mode toggle.
 *
 * Spec: /specs/auth/03-auth-login-screen-spec.md
 * Ref:  /references/auth/03_auth-login-screen.png.jpeg
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Mail, Phone } from 'lucide-react-native';

import BackButton from '@/src/components/BackButton';
import OpenAILogo from '@/src/components/OpenAILogo';
import PrimaryButton from '@/src/components/PrimaryButton';
import OrDivider from '@/src/components/OrDivider';
import OutlineButton from '@/src/components/OutlineButton';
import AuthFooterLinks from '@/src/components/AuthFooterLinks';
import GoogleIcon from '@/src/components/GoogleIcon';

import EmailForm from './components/EmailForm';
import PhoneForm from './components/PhoneForm';

import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Animations } from '@/src/constants/animations';

type InputMode = 'email' | 'phone';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BUTTON_LOADING_DURATION = Animations.durationLoadingButton;
const ICON_SIZE = Dimensions.iconSizeMd;

function LoginScreen(): React.JSX.Element {
  const router = useRouter();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [mode, setMode] = useState<InputMode>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const isEmailValid = useMemo(() => EMAIL_REGEX.test(email), [email]);
  const isPhoneValid = useMemo(() => phone.length >= 1, [phone]);
  const isContinueEnabled = mode === 'email' ? isEmailValid : isPhoneValid;

  const continueVariant = isContinueEnabled ? 'default' : 'disabled';

  const handleBack = useCallback((): void => {
    router.back();
  }, [router]);

  const handleContinue = useCallback((): void => {
    if (!isContinueEnabled || isLoading) return;
    setIsLoading(true);
    timerRef.current = setTimeout(() => {
      setIsLoading(false);
      router.push('/(auth)/loading');
    }, BUTTON_LOADING_DURATION);
  }, [isContinueEnabled, isLoading, router]);

  const handleGoogleContinue = useCallback((): void => {
    if (isGoogleLoading) return;
    setIsGoogleLoading(true);
    timerRef.current = setTimeout(() => {
      setIsGoogleLoading(false);
      router.push('/(auth)/loading');
    }, BUTTON_LOADING_DURATION);
  }, [isGoogleLoading, router]);

  const handleToggleMode = useCallback((): void => {
    setMode((prev) => (prev === 'email' ? 'phone' : 'email'));
  }, []);

  const toggleIcon = useMemo(
    () =>
      mode === 'email' ? (
        <Phone size={ICON_SIZE} color={Colors.text.primary} strokeWidth={2} />
      ) : (
        <Mail size={ICON_SIZE} color={Colors.text.primary} strokeWidth={2} />
      ),
    [mode],
  );

  const toggleLabel = mode === 'email' ? 'Continue with phone' : 'Continue with email';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.bg.primary} />

      {/* Header */}
      <View style={styles.header}>
        <BackButton
          onPress={handleBack}
          variant="transparent"
          accessibilityLabel="Go back"
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <OpenAILogo />

        <Text style={styles.heading}>Log in or sign up</Text>

        <Text style={styles.subtitle}>
          You'll get smarter responses and can upload files, images and more.
        </Text>

        {/* Form area */}
        <View style={styles.formArea}>
          {mode === 'email' ? (
            <EmailForm value={email} onChangeText={setEmail} />
          ) : (
            <PhoneForm phoneValue={phone} onPhoneChange={setPhone} />
          )}
        </View>

        {/* Continue button */}
        <View style={styles.continueButton}>
          <PrimaryButton
            label="Continue"
            onPress={handleContinue}
            variant={continueVariant}
            disabled={!isContinueEnabled}
            isLoading={isLoading}
            accessibilityLabel="Continue"
          />
        </View>

        {/* OR divider */}
        <View style={styles.orDivider}>
          <OrDivider />
        </View>

        {/* Continue with Google */}
        <View style={styles.googleButton}>
          <OutlineButton
            label="Continue with Google"
            onPress={handleGoogleContinue}
            icon={<GoogleIcon />}
            isLoading={isGoogleLoading}
            accessibilityLabel="Continue with Google"
          />
        </View>

        {/* Toggle mode button */}
        <View style={styles.toggleButton}>
          <OutlineButton
            label={toggleLabel}
            onPress={handleToggleMode}
            icon={toggleIcon}
            accessibilityLabel={toggleLabel}
          />
        </View>
      </View>

      {/* Footer */}
      <AuthFooterLinks />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.bg.primary,
  },
  header: {
    paddingTop: Spacing.sm,
    paddingLeft: Spacing.lg,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Spacing.loginPaddingH,
    paddingTop: 56,
  },
  heading: {
    fontSize: Typography.headingLg.fontSize,
    fontWeight: Typography.headingLg.fontWeight,
    lineHeight: Typography.headingLg.lineHeight,
    color: Colors.text.primary,
    textAlign: 'center',
    marginTop: Spacing.xxl,
  },
  subtitle: {
    fontSize: Typography.bodySm.fontSize,
    fontWeight: Typography.bodySm.fontWeight,
    lineHeight: Typography.bodySm.lineHeight,
    color: Colors.text.tertiary,
    textAlign: 'center',
    marginTop: Spacing.md,
    maxWidth: '80%',
  },
  formArea: {
    width: '100%',
    marginTop: Spacing.xxxl,
  },
  continueButton: {
    width: '100%',
    marginTop: Spacing.xl,
  },
  orDivider: {
    width: '100%',
    marginTop: Spacing.xxl,
  },
  googleButton: {
    width: '100%',
    marginTop: Spacing.xxl,
  },
  toggleButton: {
    width: '100%',
    marginTop: Spacing.buttonGap,
  },
});

export default LoginScreen;
