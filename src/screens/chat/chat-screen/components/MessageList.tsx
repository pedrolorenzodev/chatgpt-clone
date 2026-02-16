/**
 * MessageList -- Scrollable list of chat messages, AI loading, and responses.
 *
 * Renders UserMessageBubble for user messages, AIResponseView + ActionBar for
 * assistant messages, and AILoadingIndicator during AI generation.
 * Auto-scrolls to bottom on new content.
 */

import React, { useCallback, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import UserMessageBubble from '@/src/components/UserMessageBubble';
import AIResponseView from '@/src/components/AIResponseView';
import AILoadingIndicator from '@/src/components/AILoadingIndicator';
import ActionBar from '@/src/components/ActionBar';
import EditWarningContainer from '@/src/components/EditWarningContainer';
import { Spacing } from '@/src/constants/spacing';
import type { ChatMessage } from '@/src/types/chat.types';
import type { MessageId } from '@/src/types/common.types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface MessageListProps {
  messages: ChatMessage[];
  isAILoading: boolean;
  isAuthenticated: boolean;
  loadingMode?: 'thinking' | 'searching';
  editingMessageId?: MessageId | null;
  onMessageLongPress: (messageId: string) => void;
  onCopyPress: () => void;
  onSpeakerPress: () => void;
  onRegeneratePress: () => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function MessageList({
  messages,
  isAILoading,
  isAuthenticated,
  loadingMode = 'thinking',
  editingMessageId = null,
  onMessageLongPress,
  onCopyPress,
  onSpeakerPress,
  onRegeneratePress,
}: MessageListProps): React.JSX.Element {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
    return () => clearTimeout(timer);
  }, [messages.length, isAILoading]);

  const handleLongPress = useCallback(
    (messageId: string) => () => {
      onMessageLongPress(messageId);
    },
    [onMessageLongPress],
  );

  const lastAssistantIndex = messages.reduce(
    (acc, msg, idx) => (msg.role === 'assistant' ? idx : acc),
    -1,
  );

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {messages.map((message, index) => (
        <View key={message.id} style={styles.messageWrapper}>
          {message.role === 'user' && (
            <UserMessageBubble
              text={message.content}
              onLongPress={handleLongPress(message.id)}
              accessibilityLabel={message.content}
            />
          )}
          {message.role === 'assistant' && (
            <>
              <AIResponseView
                content={message.content}
                citations={message.citations}
                accessibilityLabel={message.content}
              />
              {index === lastAssistantIndex && !isAILoading && (
                <>
                  <ActionBar
                    variant={isAuthenticated ? 'auth' : 'unauth'}
                    onCopyPress={onCopyPress}
                    onSpeakerPress={onSpeakerPress}
                    onRegeneratePress={onRegeneratePress}
                  />
                  {editingMessageId != null && (
                    <View style={styles.editWarningWrapper}>
                      <EditWarningContainer />
                    </View>
                  )}
                </>
              )}
            </>
          )}
        </View>
      ))}

      {isAILoading && (
        <View style={styles.loadingWrapper}>
          <AILoadingIndicator mode={loadingMode} />
        </View>
      )}
    </ScrollView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  messageWrapper: {
    marginBottom: Spacing.lg,
  },
  loadingWrapper: {
    marginTop: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  editWarningWrapper: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.lg,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default MessageList;
