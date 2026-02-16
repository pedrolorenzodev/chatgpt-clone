/**
 * ChatContextMenu -- Renders the ContextMenu for user message long-press.
 *
 * Reads context menu state from chat store, builds menu items
 * (Copy, Select Text, Edit Message), and delegates actions.
 */

import React, { useCallback, useMemo } from 'react';
import * as Clipboard from 'expo-clipboard';
import { useRouter } from 'expo-router';
import { Copy, FileText, Pencil } from 'lucide-react-native';
import { useWindowDimensions } from 'react-native';

import ContextMenu from '@/src/components/ContextMenu';
import { useChatStore } from '@/src/stores/chat.store';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ChatContextMenuProps {
  /** Whether user is authenticated (determines variant) */
  isAuthenticated: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE = Dimensions.iconSizeMd;
const ICON_COLOR = Colors.icon.primary;
const POSITION_X_RATIO = 0.25;
const POSITION_Y_RATIO = 0.4;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ChatContextMenu({
  isAuthenticated,
}: ChatContextMenuProps): React.JSX.Element | null {
  const router = useRouter();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const contextMenuVisible = useChatStore((s) => s.contextMenuVisible);
  const contextMenuTarget = useChatStore((s) => s.contextMenuTarget);
  const messages = useChatStore((s) => s.messages);
  const hideContextMenu = useChatStore((s) => s.hideContextMenu);
  const startEditing = useChatStore((s) => s.startEditing);
  const setInputText = useChatStore((s) => s.setInputText);

  const targetMessage = useMemo(() => {
    if (contextMenuTarget == null) return null;
    return messages.find((m) => m.id === contextMenuTarget) ?? null;
  }, [contextMenuTarget, messages]);

  const formattedTimestamp = useMemo((): string => {
    if (targetMessage == null) return '';
    const date = new Date(targetMessage.timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  }, [targetMessage]);

  const handleCopy = useCallback((): void => {
    if (targetMessage != null) {
      void Clipboard.setStringAsync(targetMessage.content);
    }
  }, [targetMessage]);

  const handleSelectText = useCallback((): void => {
    hideContextMenu();
    router.push('/(chat)/select-text');
  }, [hideContextMenu, router]);

  const handleEditMessage = useCallback((): void => {
    if (contextMenuTarget != null && targetMessage != null) {
      startEditing(contextMenuTarget);
      setInputText(targetMessage.content);
    }
  }, [contextMenuTarget, targetMessage, startEditing, setInputText]);

  const menuItems = useMemo(
    () => [
      {
        icon: <Copy size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />,
        label: 'Copy',
        onPress: handleCopy,
      },
      {
        icon: (
          <FileText size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
        ),
        label: 'Select Text',
        onPress: handleSelectText,
      },
      {
        icon: (
          <Pencil size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.5} />
        ),
        label: 'Edit Message',
        onPress: handleEditMessage,
      },
    ],
    [handleCopy, handleSelectText, handleEditMessage],
  );

  if (!contextMenuVisible || targetMessage == null) {
    return null;
  }

  const position = {
    x: screenWidth * POSITION_X_RATIO,
    y: screenHeight * POSITION_Y_RATIO,
  };

  const variant = isAuthenticated ? ('auth' as const) : ('unauth' as const);

  return (
    <ContextMenu
      variant={variant}
      timestamp={formattedTimestamp}
      items={menuItems}
      onDismiss={hideContextMenu}
      position={position}
    />
  );
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ChatContextMenu;
