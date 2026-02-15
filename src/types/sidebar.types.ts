/**
 * Sidebar types — Menu items, chat history, sections
 */

import type { ChatId } from './common.types';

/** Sidebar menu item variant */
export type SidebarMenuItemVariant = 'action' | 'project-new' | 'project' | 'more';

/** Sidebar menu item data */
export interface SidebarMenuItem {
  /** Unique identifier */
  id: string;
  /** Lucide icon name */
  icon: string;
  /** Display label */
  label: string;
  /** Item variant affecting text weight */
  variant: SidebarMenuItemVariant;
}

/** Chat history item in the sidebar */
export interface SidebarChatItem {
  /** Chat ID reference */
  id: ChatId;
  /** Chat title/preview text */
  title: string;
  /** Section grouping key */
  section: SidebarSectionKey;
}

/** Section keys for chat history grouping */
export type SidebarSectionKey =
  | 'today'
  | 'yesterday'
  | 'previous-7-days'
  | 'previous-30-days';

/** Section header for grouped chat history */
export interface SidebarSection {
  /** Section key */
  key: SidebarSectionKey;
  /** Display label */
  label: string;
  /** Chat items in this section */
  items: SidebarChatItem[];
}

/** Sidebar store state */
export interface SidebarState {
  /** Whether the sidebar drawer is open */
  isOpen: boolean;
  /** Whether the search input is focused/expanded */
  isSearchFocused: boolean;
  /** Current search query text */
  searchQuery: string;
}

/** Sidebar store actions */
export interface SidebarActions {
  /** Open the sidebar */
  open: () => void;
  /** Close the sidebar */
  close: () => void;
  /** Toggle sidebar open/close */
  toggle: () => void;
  /** Set search focus state */
  setSearchFocused: (focused: boolean) => void;
  /** Set search query text */
  setSearchQuery: (query: string) => void;
}

/** Combined sidebar store type */
export type SidebarStore = SidebarState & SidebarActions;
