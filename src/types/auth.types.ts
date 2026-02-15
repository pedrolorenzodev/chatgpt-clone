/**
 * Auth types — User model, login modes, auth state
 */

import type { UserId, HexColor } from './common.types';

/** User profile data */
export interface User {
  /** Branded user ID */
  id: UserId;
  /** Display name */
  name: string;
  /** Two-letter initials for avatar */
  initials: string;
  /** Email address */
  email: string;
  /** Username handle (with @ prefix) */
  handle: string;
  /** Avatar background color */
  avatarColor: HexColor;
}

/** Login input mode on the auth screen */
export type LoginMode = 'email' | 'phone';

/** Auth store state interface */
export interface AuthState {
  /** Whether the user is currently authenticated */
  isAuthenticated: boolean;
  /** Current user profile (null if unauthenticated) */
  user: User | null;
  /** Current login input mode */
  loginMode: LoginMode;
  /** Whether a login/logout action is in progress */
  isLoading: boolean;
}

/** Auth store actions interface */
export interface AuthActions {
  /** Set authentication status */
  setAuthenticated: (auth: boolean) => void;
  /** Set user profile */
  setUser: (user: User | null) => void;
  /** Switch between email/phone login mode */
  setLoginMode: (mode: LoginMode) => void;
  /** Set loading state */
  setLoading: (loading: boolean) => void;
  /** Simulate login (3s delay, sets MOCK_USER) */
  login: () => void;
  /** Log out and reset to unauthenticated */
  logout: () => void;
}

/** Combined auth store type */
export type AuthStore = AuthState & AuthActions;
