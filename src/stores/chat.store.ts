/**
 * Chat store — manages chat messages, input state, and active features
 *
 * sendMessage() adds user message, sets isAILoading, then after delay adds AI response.
 */

import { create } from 'zustand';
import type { ChatMessage, ChatMode, FeatureChipData, ThumbsState } from '@/src/types/chat.types';
import type { MessageId } from '@/src/types/common.types';
import { createMessageId } from '@/src/types/common.types';
import {
  MOCK_AI_RESPONSE_NORMAL,
  MOCK_AI_RESPONSE_SEARCH,
} from '@/src/constants/mock-data/chat-messages.data';

interface ChatState {
  messages: ChatMessage[];
  inputText: string;
  activeChip: FeatureChipData | null;
  chatMode: ChatMode;
  isAILoading: boolean;
  isStreaming: boolean;
  editingMessageId: MessageId | null;
  contextMenuVisible: boolean;
  contextMenuTarget: MessageId | null;
  thumbsState: ThumbsState;
}

interface ChatActions {
  sendMessage: (text: string) => void;
  setInputText: (text: string) => void;
  setActiveChip: (chip: FeatureChipData | null) => void;
  setChatMode: (mode: ChatMode) => void;
  startEditing: (messageId: MessageId) => void;
  cancelEditing: () => void;
  showContextMenu: (messageId: MessageId) => void;
  hideContextMenu: () => void;
  setThumbsState: (state: ThumbsState) => void;
  resetChat: () => void;
}

type ChatStore = ChatState & ChatActions;

export const useChatStore = create<ChatStore>()((set, get) => ({
  // State
  messages: [],
  inputText: '',
  activeChip: null,
  chatMode: 'normal',
  isAILoading: false,
  isStreaming: false,
  editingMessageId: null,
  contextMenuVisible: false,
  contextMenuTarget: null,
  thumbsState: 'none',

  // Actions
  sendMessage: (text: string) => {
    const userMessage: ChatMessage = {
      id: createMessageId(`msg-${Date.now()}`),
      role: 'user',
      content: text,
      timestamp: new Date().toISOString(),
    };

    set({
      messages: [...get().messages, userMessage],
      inputText: '',
      isAILoading: true,
      editingMessageId: null,
    });

    // Simulate AI response after delay
    const isSearchMode = get().chatMode === 'search';
    const mockResponse = isSearchMode
      ? MOCK_AI_RESPONSE_SEARCH
      : MOCK_AI_RESPONSE_NORMAL;

    setTimeout(() => {
      const aiMessage: ChatMessage = {
        ...mockResponse,
        id: createMessageId(`msg-${Date.now()}`),
        timestamp: new Date().toISOString(),
      };

      set({
        messages: [...get().messages, aiMessage],
        isAILoading: false,
        isStreaming: false,
      });
    }, 2000);
  },

  setInputText: (text: string) => set({ inputText: text }),

  setActiveChip: (chip) => set({ activeChip: chip }),

  setChatMode: (mode: ChatMode) => set({ chatMode: mode }),

  startEditing: (messageId: MessageId) => set({
    editingMessageId: messageId,
    chatMode: 'edit',
  }),

  cancelEditing: () => set({
    editingMessageId: null,
    chatMode: 'normal',
  }),

  showContextMenu: (messageId: MessageId) => set({
    contextMenuVisible: true,
    contextMenuTarget: messageId,
  }),

  hideContextMenu: () => set({
    contextMenuVisible: false,
    contextMenuTarget: null,
  }),

  setThumbsState: (state: ThumbsState) => set({ thumbsState: state }),

  resetChat: () => set({
    messages: [],
    inputText: '',
    activeChip: null,
    chatMode: 'normal',
    isAILoading: false,
    isStreaming: false,
    editingMessageId: null,
    contextMenuVisible: false,
    contextMenuTarget: null,
    thumbsState: 'none',
  }),
}));
