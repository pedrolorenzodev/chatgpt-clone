/**
 * ChatInputBar -- Bottom input bar for composing messages.
 *
 * Contains: plus button, text input with optional chip, mic button,
 * and send/stop/talk button. Manages multiple states:
 * empty, has-text, loading, chip, edit-mode.
 */

import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import FeatureChip from '@/src/components/FeatureChip';
import StopButton from '@/src/components/StopButton';
import TalkButton from '@/src/components/TalkButton';
import PlusButton from './components/PlusButton';
import SendButton from './components/SendButton';
import MicButton from './components/MicButton';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import type { FeatureChipData } from '@/src/types/chat.types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type InputMode = 'normal' | 'chip' | 'loading' | 'talking';

interface ChatInputBarProps {
  isAuth: boolean;
  mode: InputMode;
  chip?: FeatureChipData;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onPlusPress: () => void;
  onMicPress: () => void;
  onSendPress: () => void;
  onTalkPress?: () => void;
  onStopPress?: () => void;
  onChipClose?: () => void;
  accessibilityLabel?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ChatInputBar({
  isAuth,
  mode,
  chip,
  placeholder = 'Ask ChatGPT',
  value,
  onChangeText,
  onPlusPress,
  onMicPress,
  onSendPress,
  onTalkPress,
  onStopPress,
  onChipClose,
}: ChatInputBarProps): React.JSX.Element {
  const hasText = value.trim().length > 0;
  const hasChip = mode === 'chip' && chip != null;
  const isLoading = mode === 'loading';
  const showMic = !hasText && !isLoading;
  const inputContainerStyle = hasChip
    ? styles.inputFieldExpanded
    : styles.inputField;

  const renderRightButton = (): React.JSX.Element => {
    if (isLoading && onStopPress) {
      return <StopButton onPress={onStopPress} />;
    }
    if (isAuth && !hasText && onTalkPress) {
      return <TalkButton onPress={onTalkPress} />;
    }
    return <SendButton onPress={onSendPress} disabled={!hasText} />;
  };

  return (
    <View style={styles.container}>
      <PlusButton onPress={onPlusPress} />
      <View style={inputContainerStyle}>
        {hasChip && chip != null && onChipClose && (
          <View style={styles.chipRow}>
            <FeatureChip
              icon={chip.icon}
              iconColor={chip.iconColor}
              label={chip.label}
              labelColor={chip.labelColor}
              isAuth={isAuth}
              onDismiss={onChipClose}
              accessibilityLabel={`${chip.label} mode active`}
            />
          </View>
        )}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor={Colors.text.placeholderChat}
            value={value}
            onChangeText={onChangeText}
            cursorColor={Colors.text.primary}
            selectionColor={Colors.text.selectionHighlight}
            multiline
            accessibilityLabel={placeholder}
          />
          <View style={styles.rightControls}>
            {showMic && <MicButton onPress={onMicPress} />}
            <View style={styles.rightBtnSpacer}>
              {renderRightButton()}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const INPUT_MARGIN_RIGHT = 6;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: Spacing.chatPaddingH,
    paddingBottom: Spacing.sm,
    backgroundColor: Colors.bg.primary,
  },
  inputField: {
    flex: 1,
    marginLeft: Spacing.sm,
    minHeight: Dimensions.chatInputHeight,
    backgroundColor: Colors.bg.surface,
    borderRadius: Dimensions.chatInputRadius,
    justifyContent: 'center',
  },
  inputFieldExpanded: {
    flex: 1,
    marginLeft: Spacing.sm,
    minHeight: Dimensions.chatInputExpandedMinH,
    backgroundColor: Colors.bg.surface,
    borderRadius: Dimensions.chatInputRadius,
  },
  chipRow: {
    paddingLeft: Spacing.md,
    paddingTop: Spacing.md,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    minHeight: Dimensions.chatInputHeight,
  },
  textInput: {
    flex: 1,
    fontSize: Typography.inputText.fontSize,
    fontWeight: Typography.inputText.fontWeight,
    lineHeight: Typography.inputText.lineHeight,
    color: Colors.text.primary,
    paddingHorizontal: Spacing.chatPaddingH,
    paddingVertical: Spacing.md,
    maxHeight: 120,
  },
  rightControls: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Spacing.sm,
  },
  rightBtnSpacer: {
    marginRight: INPUT_MARGIN_RIGHT,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ChatInputBar;
