/**
 * ChatHeader -- Top navigation bar for the chat screen.
 * 6 distinct variants based on auth state, chat state, and feature mode.
 *
 * Variants:
 *  - unauth: sidebar btn + "ChatGPT" text + "Log in" pill
 *  - auth-empty: sidebar btn + ChatGPTButton + CombinedPill(AddPerson+Scan)
 *  - auth-in-chat: sidebar btn + ChatGPTButton + CombinedPill(SquarePen+EllipsisVertical)
 *  - auth-hide-chat: sidebar btn + ChatGPTButton + MessageCircleOff icon
 *  - auth-talking: sidebar btn + "ChatGPT Voice" text + EllipsisVertical icon
 *  - select-text: BackButton + "Select Text" centered title
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  ArrowLeft,
  MessageCircleOff,
  EllipsisVertical,
} from 'lucide-react-native';

import ChatGPTButton from '@/src/components/ChatGPTButton';
import CombinedPillButton from '@/src/components/CombinedPillButton';
import {
  SidebarButton,
  SingleIconButton,
  LoginPill,
} from './components/HeaderButtons';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ChatHeaderVariant =
  | 'unauth'
  | 'auth-empty'
  | 'auth-in-chat'
  | 'auth-hide-chat'
  | 'auth-talking'
  | 'select-text';

interface ChatHeaderProps {
  variant: ChatHeaderVariant;
  onSidebarPress: () => void;
  onChatGPTPress?: () => void;
  onLoginPress?: () => void;
  onAddPersonPress?: () => void;
  onBubblePress?: () => void;
  onComposePress?: () => void;
  onEllipsisPress?: () => void;
  onHideChatToggle?: () => void;
  onBackPress?: () => void;
  accessibilityLabel?: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE_LG = Dimensions.iconSizeLg;
const ICON_SIZE_HEADER = 22;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ChatHeader({
  variant,
  onSidebarPress,
  onChatGPTPress,
  onLoginPress,
  onAddPersonPress,
  onBubblePress,
  onComposePress,
  onEllipsisPress,
  onHideChatToggle,
  onBackPress,
}: ChatHeaderProps): React.JSX.Element {
  const renderLeft = (): React.JSX.Element => {
    if (variant === 'select-text') {
      return (
        <SingleIconButton
          icon={<ArrowLeft size={ICON_SIZE_LG} color={Colors.icon.primary} strokeWidth={2} />}
          onPress={onBackPress ?? (() => {})}
          accessibilityLabel="Go back"
        />
      );
    }

    return (
      <View style={styles.leftGroup}>
        <SidebarButton onPress={onSidebarPress} />
        {variant !== 'unauth' && variant !== 'auth-talking' && onChatGPTPress && (
          <View style={styles.leftGap}>
            <ChatGPTButton onPress={onChatGPTPress} />
          </View>
        )}
        {variant === 'auth-talking' && (
          <View style={styles.leftGap}>
            <Text style={styles.talkingTitle}>
              ChatGPT<Text style={styles.talkingVoice}> Voice</Text>
            </Text>
          </View>
        )}
      </View>
    );
  };

  const renderCenter = (): React.JSX.Element | null => {
    if (variant === 'unauth') {
      return <Text style={styles.headerTitle}>ChatGPT</Text>;
    }
    if (variant === 'select-text') {
      return <Text style={styles.selectTextTitle}>Select Text</Text>;
    }
    return null;
  };

  const renderRight = (): React.JSX.Element | null => {
    switch (variant) {
      case 'unauth':
        return onLoginPress ? <LoginPill onPress={onLoginPress} /> : null;

      case 'auth-empty':
        return (
          <CombinedPillButton
            leftIcon="UserPlus"
            rightIcon="Scan"
            onLeftPress={onAddPersonPress ?? (() => {})}
            onRightPress={onBubblePress ?? (() => {})}
            leftAccessibilityLabel="Add person to group chat"
            rightAccessibilityLabel="Toggle hide chat"
          />
        );

      case 'auth-in-chat':
        return (
          <CombinedPillButton
            leftIcon="SquarePen"
            rightIcon="EllipsisVertical"
            onLeftPress={onComposePress ?? (() => {})}
            onRightPress={onEllipsisPress ?? (() => {})}
            leftAccessibilityLabel="New chat"
            rightAccessibilityLabel="More options"
          />
        );

      case 'auth-hide-chat':
        return (
          <SingleIconButton
            icon={
              <MessageCircleOff
                size={ICON_SIZE_HEADER}
                color={Colors.icon.primary}
                strokeWidth={2}
              />
            }
            onPress={onHideChatToggle ?? (() => {})}
            accessibilityLabel="Exit hidden chat"
          />
        );

      case 'auth-talking':
        return (
          <SingleIconButton
            icon={
              <EllipsisVertical
                size={ICON_SIZE_HEADER}
                color={Colors.icon.primary}
                strokeWidth={2}
              />
            }
            onPress={onEllipsisPress ?? (() => {})}
            accessibilityLabel="More options"
          />
        );

      case 'select-text':
        return null;

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    height: Dimensions.headerHeight,
    paddingHorizontal: Spacing.chatPaddingH,
    backgroundColor: Colors.bg.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftGap: {
    marginLeft: Spacing.sm,
  },
  headerTitle: {
    fontSize: Typography.headerTitle.fontSize,
    fontWeight: Typography.headerTitle.fontWeight,
    lineHeight: Typography.headerTitle.lineHeight,
    color: Colors.text.primary,
  },
  selectTextTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  talkingTitle: {
    fontSize: Typography.headerTitle.fontSize,
    fontWeight: Typography.headerTitle.fontWeight,
    lineHeight: Typography.headerTitle.lineHeight,
    color: Colors.text.primary,
  },
  talkingVoice: {
    fontWeight: '400',
    color: Colors.text.voiceSuffix,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ChatHeader;
