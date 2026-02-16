/**
 * ChatScreen -- Main chat screen with context menu and edit message mode.
 */

import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ChatHeader from '@/src/components/ChatHeader';
import ChatInputBar from '@/src/components/ChatInputBar';
import AuthBottomSheet from '@/src/screens/auth/welcome/components/AuthBottomSheet';
import EmptyState from './components/EmptyState';
import ExpandedSuggestions from './components/ExpandedSuggestions';
import FeatureModeSuggestions from './components/FeatureModeSuggestions';
import MessageList from './components/MessageList';
import ChatContextMenu from './components/ChatContextMenu';
import { EXPANDED_SUGGESTIONS_MAP } from './constants/suggestions';
import { useAuthStore } from '@/src/stores/auth.store';
import { useSidebarStore } from '@/src/stores/sidebar.store';
import { useChatStore } from '@/src/stores/chat.store';
import {
  MOCK_SUGGESTIONS_UNAUTH, MOCK_SUGGESTIONS_AUTH,
  MOCK_SEARCH_TRENDING, MOCK_STUDY_ACTIVITIES,
} from '@/src/constants/mock-data/chat-messages.data';
import { Colors } from '@/src/constants/colors';
import {
  SEARCH_CHIP, STUDY_CHIP, EDIT_CHIP,
  PLACEHOLDER_SEARCH, PLACEHOLDER_STUDY, PLACEHOLDER_DEFAULT,
} from './constants/feature-modes';
import type { SuggestionItem, FeatureChipData } from '@/src/types/chat.types';
import type { MessageId } from '@/src/types/common.types';

function ChatScreen(): React.JSX.Element {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const openSidebar = useSidebarStore((s) => s.open);
  const inputText = useChatStore((s) => s.inputText);
  const setInputText = useChatStore((s) => s.setInputText);
  const sendMessage = useChatStore((s) => s.sendMessage);
  const messages = useChatStore((s) => s.messages);
  const isAILoading = useChatStore((s) => s.isAILoading);
  const chatMode = useChatStore((s) => s.chatMode);
  const setChatMode = useChatStore((s) => s.setChatMode);
  const setActiveChip = useChatStore((s) => s.setActiveChip);
  const resetChat = useChatStore((s) => s.resetChat);
  const showContextMenu = useChatStore((s) => s.showContextMenu);
  const editingMessageId = useChatStore((s) => s.editingMessageId);
  const cancelEditing = useChatStore((s) => s.cancelEditing);

  const [authSheetVisible, setAuthSheetVisible] = useState<boolean>(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const suggestions = isAuthenticated ? MOCK_SUGGESTIONS_AUTH : MOCK_SUGGESTIONS_UNAUTH;
  const expandedConfig = expandedCategory != null
    ? EXPANDED_SUGGESTIONS_MAP[expandedCategory] ?? null : null;

  const isEmpty = messages.length === 0;
  const isEditMode = chatMode === 'edit';
  const isFeatureMode = chatMode === 'search' || chatMode === 'study';
  const isChipMode = isFeatureMode || isEditMode;
  const showEmptyState = isEmpty && expandedCategory == null && !isFeatureMode;
  const showExpanded = isEmpty && expandedConfig != null && !isFeatureMode;
  const showFeatureSuggestions = isEmpty && isFeatureMode;

  const featureModeItems = useMemo((): SuggestionItem[] => {
    if (chatMode === 'search') return MOCK_SEARCH_TRENDING;
    if (chatMode === 'study') return MOCK_STUDY_ACTIVITIES;
    return [];
  }, [chatMode]);

  const activeChipData = useMemo((): FeatureChipData | undefined => {
    if (chatMode === 'edit') return EDIT_CHIP;
    if (chatMode === 'search') return SEARCH_CHIP;
    if (chatMode === 'study') return STUDY_CHIP;
    return undefined;
  }, [chatMode]);

  const placeholder = useMemo((): string => {
    if (chatMode === 'search') return PLACEHOLDER_SEARCH;
    if (chatMode === 'study') return PLACEHOLDER_STUDY;
    return PLACEHOLDER_DEFAULT;
  }, [chatMode]);

  const inputMode = useMemo(() => {
    if (isAILoading) return 'loading' as const;
    if (isChipMode) return 'chip' as const;
    return 'normal' as const;
  }, [isAILoading, isChipMode]);

  const handleSidebarPress = useCallback((): void => { openSidebar(); }, [openSidebar]);
  const handleLoginPress = useCallback((): void => { setAuthSheetVisible(true); }, []);
  const handleAuthSheetClose = useCallback((): void => { setAuthSheetVisible(false); }, []);

  const handleSuggestionPress = useCallback((item: SuggestionItem): void => {
    const config = EXPANDED_SUGGESTIONS_MAP[item.label];
    if (config != null) {
      setExpandedCategory(item.label);
      setInputText(config.prefix);
    }
  }, [setInputText]);

  const handleExpandedItemPress = useCallback((item: SuggestionItem): void => {
    sendMessage(item.label);
    setExpandedCategory(null);
  }, [sendMessage]);

  const handleFeatureItemPress = useCallback((item: SuggestionItem): void => {
    sendMessage(item.label);
  }, [sendMessage]);

  const handleChipClose = useCallback((): void => {
    if (isEditMode) {
      cancelEditing();
      setInputText('');
    } else {
      setChatMode('normal');
      setActiveChip(null);
      setExpandedCategory(null);
    }
  }, [isEditMode, cancelEditing, setInputText, setChatMode, setActiveChip]);

  const handleSendPress = useCallback((): void => {
    if (inputText.trim().length > 0) {
      sendMessage(inputText);
      setExpandedCategory(null);
    }
  }, [inputText, sendMessage]);

  const handleMessageLongPress = useCallback((messageId: string): void => {
    showContextMenu(messageId as MessageId);
  }, [showContextMenu]);

  const handleMicPress = useCallback((): void => {
    if (!isAuthenticated) setAuthSheetVisible(true);
  }, [isAuthenticated]);

  const noop = useCallback((): void => {}, []);
  const headerVariant = !isAuthenticated ? 'unauth' : isEmpty ? 'auth-empty' : 'auth-in-chat';
  const loadingMode = chatMode === 'search' ? 'searching' as const : 'thinking' as const;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ChatHeader
        variant={headerVariant}
        onSidebarPress={handleSidebarPress}
        onLoginPress={handleLoginPress}
        onChatGPTPress={noop}
        onAddPersonPress={handleLoginPress}
        onBubblePress={handleLoginPress}
        onComposePress={resetChat}
        onEllipsisPress={noop}
      />
      {isEmpty ? (
        <View style={styles.content}>
          {showEmptyState && (
            <EmptyState
              suggestions={suggestions}
              onSuggestionPress={handleSuggestionPress}
            />
          )}
        </View>
      ) : (
        <MessageList
          messages={messages}
          isAILoading={isAILoading}
          isAuthenticated={isAuthenticated}
          loadingMode={loadingMode}
          editingMessageId={editingMessageId}
          onMessageLongPress={handleMessageLongPress}
          onCopyPress={noop}
          onSpeakerPress={noop}
          onRegeneratePress={noop}
        />
      )}
      {showExpanded && expandedConfig != null && (
        <ExpandedSuggestions
          items={expandedConfig.items}
          onItemPress={handleExpandedItemPress}
        />
      )}
      {showFeatureSuggestions && (
        <FeatureModeSuggestions
          items={featureModeItems}
          onItemPress={handleFeatureItemPress}
        />
      )}
      <ChatInputBar
        isAuth={isAuthenticated}
        mode={inputMode}
        chip={activeChipData}
        placeholder={placeholder}
        value={inputText}
        onChangeText={setInputText}
        onPlusPress={noop}
        onMicPress={handleMicPress}
        onSendPress={handleSendPress}
        onTalkPress={noop}
        onChipClose={handleChipClose}
      />
      {!isAuthenticated && (
        <AuthBottomSheet
          isVisible={authSheetVisible}
          onClose={handleAuthSheetClose}
        />
      )}
      <ChatContextMenu isAuthenticated={isAuthenticated} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.bg.primary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ChatScreen;
