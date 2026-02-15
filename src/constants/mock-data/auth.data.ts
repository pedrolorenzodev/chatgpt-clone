/**
 * Mock auth data — user profile and default state
 */

import type { User } from '@/src/types/auth.types';
import { createUserId } from '@/src/types/common.types';

/** Default mock user loaded on successful login */
export const MOCK_USER: User = {
  id: createUserId('user-1'),
  name: 'Mateo Lorenzo',
  initials: 'ML',
  email: 'mateo@example.com',
  handle: '@mateolorenzo',
  avatarColor: '#7C3AED',
};
