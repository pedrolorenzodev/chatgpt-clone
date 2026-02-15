/**
 * Auth store — manages authentication state
 *
 * login() simulates a 3s delay then sets isAuthenticated=true with MOCK_USER.
 * logout() resets to unauthenticated state.
 */

import { create } from 'zustand';
import type { AuthStore } from '@/src/types/auth.types';
import { MOCK_USER } from '@/src/constants/mock-data/auth.data';

export const useAuthStore = create<AuthStore>()((set) => ({
  // State
  isAuthenticated: false,
  user: null,
  loginMode: 'email',
  isLoading: false,

  // Actions
  setAuthenticated: (auth: boolean) => set({ isAuthenticated: auth }),

  setUser: (user) => set({ user }),

  setLoginMode: (mode) => set({ loginMode: mode }),

  setLoading: (loading: boolean) => set({ isLoading: loading }),

  login: () => {
    set({ isLoading: true });
    setTimeout(() => {
      set({
        isAuthenticated: true,
        user: MOCK_USER,
        isLoading: false,
      });
    }, 3000);
  },

  logout: () => {
    set({
      isAuthenticated: false,
      user: null,
      isLoading: false,
    });
  },
}));
