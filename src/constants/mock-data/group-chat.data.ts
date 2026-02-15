/**
 * Mock group chat data — members, messages, options, reports
 */

import type {
  GroupMember,
  GroupMessage,
  GroupChatState,
  ReportCategory,
  GroupChatOption,
} from '@/src/types/group-chat.types';
import { createUserId, createGroupId, createMessageId } from '@/src/types/common.types';

/** Group chat members */
export const MOCK_GROUP_MEMBERS: GroupMember[] = [
  {
    id: createUserId('user-1'),
    name: 'Mateo Lorenzo',
    initials: 'ML',
    username: 'mateolorenzo.dev',
    avatarColor: '#7C3AED',
    isSelf: true,
  },
  {
    id: createUserId('user-2'),
    name: 'Pedro Lorenzo',
    initials: 'PL',
    username: 'pedrolorenzo',
    avatarColor: '#607D8B',
    isSelf: false,
  },
];

/** Group chat messages */
export const MOCK_GROUP_MESSAGES: GroupMessage[] = [
  {
    id: createMessageId('gmsg-1'),
    senderType: 'system',
    senderId: null,
    senderName: 'System',
    content: 'Mateo Lorenzo created this group chat.',
    timestamp: '2026-02-04T14:00:00.000Z',
  },
  {
    id: createMessageId('gmsg-2'),
    senderType: 'user',
    senderId: createUserId('user-1'),
    senderName: 'Mateo Lorenzo',
    content: 'Hello World!',
    timestamp: '2026-02-04T14:01:00.000Z',
  },
  {
    id: createMessageId('gmsg-3'),
    senderType: 'member',
    senderId: createUserId('user-2'),
    senderName: 'Pedro Lorenzo',
    content: 'Hey! How are you?',
    timestamp: '2026-02-04T14:02:00.000Z',
  },
];

/** Full group chat state */
export const MOCK_GROUP_CHAT: GroupChatState = {
  id: createGroupId('group-1'),
  name: 'Hello World',
  members: MOCK_GROUP_MEMBERS,
  messages: MOCK_GROUP_MESSAGES,
  inviteLink: 'https://chatgpt.com/gg/v/6984a3644858819c...',
  isMuted: false,
};

/** Group chat options menu items */
export const MOCK_GROUP_CHAT_OPTIONS: GroupChatOption[] = [
  { icon: 'Users', label: 'View members', isDestructive: false, actionKey: 'view-members' },
  { icon: 'UserPlus', label: 'Add members', isDestructive: false, actionKey: 'add-members' },
  { icon: 'Link', label: 'Manage link', isDestructive: false, actionKey: 'manage-link' },
  { icon: 'Pencil', label: 'Rename group', isDestructive: false, actionKey: 'rename-group' },
  { icon: 'Settings', label: 'Customize ChatGPT', isDestructive: false, actionKey: 'customize' },
  { icon: 'BellOff', label: 'Mute notifications', isDestructive: false, actionKey: 'mute' },
  { icon: 'Flag', label: 'Report', isDestructive: true, actionKey: 'report' },
  { icon: 'LogOut', label: 'Leave group', isDestructive: true, actionKey: 'leave-group' },
  { icon: 'Trash2', label: 'Delete group', isDestructive: true, actionKey: 'delete-group' },
];

/** Report categories for profiles and conversations */
export const MOCK_REPORT_CATEGORIES: ReportCategory[] = [
  {
    id: 'violence',
    name: 'Violence & self-harm',
    subcategories: [
      { id: 'threats', name: 'Threats or incitement to violence' },
      { id: 'gender-violence', name: 'Gender-based violence' },
      { id: 'sexual-violence', name: 'Sexual violence' },
      { id: 'weapons', name: 'Weapons' },
      { id: 'suicide', name: 'Suicide & self-harm' },
      { id: 'eating-disorders', name: 'Eating disorders' },
      { id: 'trafficking', name: 'Human trafficking' },
      { id: 'terrorism', name: 'Terrorism' },
    ],
  },
  {
    id: 'sexual',
    name: 'Sexual exploitation & abuse',
    subcategories: [
      { id: 'non-consensual', name: 'Non-consensual content' },
      { id: 'solicitation', name: 'Sexual solicitation' },
    ],
  },
  {
    id: 'child',
    name: 'Child/teen exploitation',
    subcategories: [
      { id: 'csam', name: 'Child sexual abuse material' },
      { id: 'grooming', name: 'Grooming' },
    ],
  },
  {
    id: 'bullying',
    name: 'Bullying & harassment',
    subcategories: [
      { id: 'targeted', name: 'Targeted harassment' },
      { id: 'hate-speech', name: 'Hate speech' },
    ],
  },
  {
    id: 'spam',
    name: 'Spam, fraud & deception',
    subcategories: [
      { id: 'phishing', name: 'Phishing' },
      { id: 'impersonation', name: 'Impersonation' },
    ],
  },
  {
    id: 'privacy',
    name: 'Privacy violation',
    subcategories: [
      { id: 'doxxing', name: 'Doxxing' },
      { id: 'personal-info', name: 'Sharing personal information' },
    ],
  },
  {
    id: 'ip',
    name: 'Intellectual property',
    subcategories: [
      { id: 'copyright', name: 'Copyright infringement' },
      { id: 'trademark', name: 'Trademark violation' },
    ],
  },
  {
    id: 'age-inappropriate',
    name: 'Age-inappropriate content',
    subcategories: [
      { id: 'adult-content', name: 'Adult content' },
      { id: 'substance', name: 'Substance use' },
    ],
  },
  {
    id: 'other',
    name: 'Something else',
    subcategories: [
      { id: 'other-reason', name: 'Other reason' },
    ],
  },
];
