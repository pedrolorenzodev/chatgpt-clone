/**
 * ReportModal -- Multi-step modal for reporting profiles or conversations.
 *
 * 3 steps: category selection -> subcategory selection -> text input + submit.
 * Background: #1A1A1A, radius 20px, 90% screen width.
 */

import React, { useCallback, useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { ArrowLeft, X } from 'lucide-react-native';

import IconButton from '@/src/components/IconButton';
import ReportStepList from './ReportStepList';
import ReportStepSubmit from './ReportStepSubmit';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Animations, Easings, Shadows } from '@/src/constants/animations';
import type { ReportCategory } from '@/src/types/group-chat.types';

interface ReportModalProps {
  visible: boolean;
  title: string;
  categories: ReportCategory[];
  onSubmit: (category: string, subcategory: string, details: string) => void;
  onClose: () => void;
  accessibilityLabel: string;
}

function ReportModal({
  visible,
  title,
  categories,
  onSubmit,
  onClose,
  accessibilityLabel,
}: ReportModalProps): React.JSX.Element | null {
  const { width: screenWidth } = useWindowDimensions();
  const modalWidth = screenWidth * Dimensions.reportModalWidth;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [details, setDetails] = useState<string>('');

  const handleClose = useCallback((): void => {
    setStep(1);
    setSelectedCategory('');
    setSelectedSubcategory('');
    setDetails('');
    onClose();
  }, [onClose]);

  const handleCategorySelect = useCallback((id: string): void => {
    setSelectedCategory(id);
    setStep(2);
  }, []);

  const handleSubcategorySelect = useCallback((id: string): void => {
    setSelectedSubcategory(id);
    setStep(3);
  }, []);

  const handleBack = useCallback((): void => {
    if (step === 3) {
      setSelectedSubcategory('');
      setStep(2);
    } else if (step === 2) {
      setSelectedCategory('');
      setStep(1);
    }
  }, [step]);

  const handleSubmit = useCallback((): void => {
    onSubmit(selectedCategory, selectedSubcategory, details);
    handleClose();
  }, [selectedCategory, selectedSubcategory, details, onSubmit, handleClose]);

  if (!visible) return null;

  const selectedCat = categories.find((c) => c.id === selectedCategory);
  const subcategories = selectedCat?.subcategories ?? [];

  const stepTitle =
    step === 1
      ? title
      : step === 2
        ? selectedCat?.name ?? title
        : 'Additional details';

  return (
    <Modal
      transparent
      visible
      onRequestClose={handleClose}
      statusBarTranslucent
      accessibilityLabel={accessibilityLabel}
    >
      {/* Backdrop */}
      <Pressable
        onPress={handleClose}
        accessibilityLabel="Dismiss report"
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
          {/* Header */}
          <View style={styles.header}>
            {step > 1 ? (
              <IconButton
                icon={
                  <ArrowLeft
                    size={Dimensions.iconSizeLg}
                    color={Colors.icon.primary}
                    strokeWidth={2}
                  />
                }
                onPress={handleBack}
                size={32}
                accessibilityLabel="Go back"
              />
            ) : (
              <View style={styles.headerSpacer} />
            )}
            <Text style={styles.headerTitle} numberOfLines={1}>
              {stepTitle}
            </Text>
            <IconButton
              icon={
                <X
                  size={Dimensions.iconSizeMd}
                  color={Colors.icon.secondary}
                  strokeWidth={2}
                />
              }
              onPress={handleClose}
              size={32}
              accessibilityLabel="Close report"
            />
          </View>

          {/* Content */}
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={styles.content}
          >
            {step === 1 && (
              <ReportStepList
                items={categories.map((c) => ({ id: c.id, name: c.name }))}
                onSelect={handleCategorySelect}
              />
            )}
            {step === 2 && (
              <ReportStepList
                items={subcategories.map((s) => ({ id: s.id, name: s.name }))}
                onSelect={handleSubcategorySelect}
              />
            )}
            {step === 3 && (
              <ReportStepSubmit
                details={details}
                onChangeDetails={setDetails}
                onSubmit={handleSubmit}
              />
            )}
          </ScrollView>
        </View>
      </Animated.View>
    </Modal>
  );
}

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
    backgroundColor: Colors.bg.reportModal,
    borderRadius: Dimensions.bottomSheetRadius,
    padding: Spacing.modalPadding,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  headerSpacer: {
    width: 32,
  },
  headerTitle: {
    ...Typography.headingModalSm,
    color: Colors.text.primary,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: Spacing.sm,
  },
  content: {
    flexShrink: 1,
  },
});

export default ReportModal;
