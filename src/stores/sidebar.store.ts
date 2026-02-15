/**
 * Sidebar store — manages sidebar drawer open/close and search state
 */

import { create } from 'zustand';
import type { SidebarStore } from '@/src/types/sidebar.types';

export const useSidebarStore = create<SidebarStore>()((set) => ({
  // State
  isOpen: false,
  isSearchFocused: false,
  searchQuery: '',

  // Actions
  open: () => set({ isOpen: true }),

  close: () => set({
    isOpen: false,
    isSearchFocused: false,
    searchQuery: '',
  }),

  toggle: () => set((state) => ({
    isOpen: !state.isOpen,
    ...(state.isOpen ? { isSearchFocused: false, searchQuery: '' } : {}),
  })),

  setSearchFocused: (focused: boolean) => set({ isSearchFocused: focused }),

  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
