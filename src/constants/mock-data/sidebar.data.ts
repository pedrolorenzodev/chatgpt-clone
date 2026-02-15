/**
 * Mock sidebar data — menu items, projects, chat history
 */

import type { SidebarMenuItem, SidebarChatItem, SidebarSection } from '@/src/types/sidebar.types';
import { createChatId } from '@/src/types/common.types';

/** Quick action menu items (auth sidebar) */
export const MOCK_SIDEBAR_MENU_ITEMS: SidebarMenuItem[] = [
  { id: 'new-chat', icon: 'SquarePen', label: 'New chat', variant: 'action' },
  { id: 'images', icon: 'Image', label: 'Images', variant: 'action' },
  { id: 'apps', icon: 'LayoutGrid', label: 'Apps', variant: 'action' },
];

/** Project items in sidebar */
export const MOCK_PROJECTS: SidebarMenuItem[] = [
  { id: 'new-project', icon: 'FolderPlus', label: 'New project', variant: 'project-new' },
  { id: 'proj-paisa', icon: 'Folder', label: 'Paisa', variant: 'project' },
  { id: 'proj-estudio', icon: 'Folder', label: 'Estudio', variant: 'project' },
  { id: 'all-projects', icon: 'MoreHorizontal', label: 'All projects', variant: 'more' },
];

/** Chat history items grouped by time */
export const MOCK_CHAT_HISTORY: SidebarChatItem[] = [
  // Today
  { id: createChatId('chat-1'), title: 'Presidentes populares del mundo', section: 'today' },
  { id: createChatId('chat-2'), title: 'Presidentes populares e influyentes', section: 'today' },
  { id: createChatId('chat-3'), title: 'Division de numeros', section: 'today' },

  // Yesterday
  { id: createChatId('chat-4'), title: 'Presidentes populares e influyentes', section: 'yesterday' },
  { id: createChatId('chat-5'), title: 'Presidentes mas populares', section: 'yesterday' },

  // Previous 7 Days
  { id: createChatId('chat-6'), title: 'Liberalism according to Benegas Lynch', section: 'previous-7-days' },
  { id: createChatId('chat-7'), title: 'Notificaciones Push Expo', section: 'previous-7-days' },
  { id: createChatId('chat-8'), title: 'Temperatura de hoy', section: 'previous-7-days' },
  { id: createChatId('chat-9'), title: 'React Native performance tips', section: 'previous-7-days' },
  { id: createChatId('chat-10'), title: 'Receta de empanadas argentinas', section: 'previous-7-days' },
  { id: createChatId('chat-11'), title: 'TypeScript branded types pattern', section: 'previous-7-days' },
  { id: createChatId('chat-12'), title: 'Expo Router file conventions', section: 'previous-7-days' },
];

/** Sections with headers for display */
export const MOCK_SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    key: 'today',
    label: 'Today',
    items: MOCK_CHAT_HISTORY.filter((c) => c.section === 'today'),
  },
  {
    key: 'yesterday',
    label: 'Yesterday',
    items: MOCK_CHAT_HISTORY.filter((c) => c.section === 'yesterday'),
  },
  {
    key: 'previous-7-days',
    label: 'Previous 7 Days',
    items: MOCK_CHAT_HISTORY.filter((c) => c.section === 'previous-7-days'),
  },
];
