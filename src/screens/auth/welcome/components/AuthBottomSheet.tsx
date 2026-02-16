/**
 * AuthBottomSheet -- Modal bottom sheet prompting unauthenticated users
 * to sign up or log in. Triggered from multiple entry points (header "Log in",
 * attachment actions, microphone tap).
 *
 * Uses @gorhom/bottom-sheet with dark backdrop and pill buttons.
 */

import React, { useCallback, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { X } from 'lucide-react-native';
import { useRouter } from 'expo-router';

import IconButton from '@/src/components/IconButton';
import PrimaryButton from '@/src/components/PrimaryButton';
import OutlineButton from '@/src/components/OutlineButton';
import GoogleIcon from '@/src/components/GoogleIcon';
import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Shadows } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AuthBottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SNAP_POINTS = ['50%'];
const DRAG_HANDLE_COLOR = '#4A4A4A';
const CLOSE_ICON_SIZE = 24;
const CLOSE_HIT_AREA = 44;
const BACKDROP_OPACITY = 0.5;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function AuthBottomSheet({
  isVisible,
  onClose,
}: AuthBottomSheetProps): React.JSX.Element {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const router = useRouter();

  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isVisible]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
        opacity={BACKDROP_OPACITY}
      />
    ),
    [],
  );

  const handleNavigateToLogin = useCallback((): void => {
    onClose();
    router.push('/(auth)/login');
  }, [onClose, router]);

  const handleClose = useCallback((): void => {
    bottomSheetRef.current?.close();
  }, []);

  const handleSheetChange = useCallback(
    (index: number): void => {
      if (index === -1) {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={SNAP_POINTS}
      enablePanDownToClose={false}
      backdropComponent={renderBackdrop}
      onChange={handleSheetChange}
      backgroundStyle={styles.sheetBackground}
      handleIndicatorStyle={styles.dragHandle}
      style={styles.sheetShadow}
    >
      <BottomSheetView style={styles.content}>
        <View style={styles.closeRow}>
          <IconButton
            icon={
              <X
                size={CLOSE_ICON_SIZE}
                color={Colors.icon.primary}
                strokeWidth={2}
              />
            }
            onPress={handleClose}
            size={CLOSE_HIT_AREA}
            accessibilityLabel="Close bottom sheet"
          />
        </View>

        <Text style={styles.title}>
          Sign up or log in to analyze images and files for free
        </Text>

        <View style={styles.buttonGroup}>
          <PrimaryButton
            label="Continue with Google"
            onPress={handleNavigateToLogin}
            icon={<GoogleIcon size={Dimensions.googleIconSize} />}
            accessibilityLabel="Continue with Google"
          />
          <PrimaryButton
            label="Sign up"
            onPress={handleNavigateToLogin}
            variant="gray"
            accessibilityLabel="Sign up"
          />
          <OutlineButton
            label="Log in"
            onPress={handleNavigateToLogin}
            borderColor={Colors.border.buttonLoginBs}
            accessibilityLabel="Log in"
          />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  sheetShadow: {
    ...Shadows.bottomSheet,
  },
  sheetBackground: {
    backgroundColor: Colors.bg.bottomSheet,
    borderTopLeftRadius: Dimensions.bottomSheetRadius,
    borderTopRightRadius: Dimensions.bottomSheetRadius,
  },
  dragHandle: {
    width: Dimensions.dragHandleWidth,
    height: Dimensions.dragHandleHeight,
    backgroundColor: DRAG_HANDLE_COLOR,
  },
  content: {
    paddingHorizontal: Spacing.bottomSheetPaddingH,
    paddingBottom: Spacing.xxl,
  },
  closeRow: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    color: Colors.text.primary,
    textAlign: 'center',
    marginTop: Spacing.lg,
  },
  buttonGroup: {
    marginTop: Spacing.xxxl,
    gap: Spacing.buttonGap,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default AuthBottomSheet;
