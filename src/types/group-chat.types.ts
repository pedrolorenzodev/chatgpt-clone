/**
 * Group chat types — Members, messages, state, reports
 */

import type { UserId, GroupId, MessageId, ISOTimestamp, HexColor } from './common.types';

/** Group chat member */
export interface GroupMember {
  /** User ID reference */
  id: UserId;
  /** Display name */
  name: string;
  /** Two-letter initials */
  initials: string;
  /** Username/handle */
  username: string;
  /** Avatar background color */
  avatarColor: HexColor;
  /** Whether this member is the current user */
  isSelf: boolean;
}

/** Who sent a group message */
export type GroupMessageSender = 'user' | 'member' | 'system';

/** A message in a group chat */
export interface GroupMessage {
  /** Message ID */
  id: MessageId;
  /** Sender type */
  senderType: GroupMessageSender;
  /** Sender user ID (null for system messages) */
  senderId: UserId | null;
  /** Sender display name */
  senderName: string;
  /** Message content */
  content: string;
  /** Timestamp */
  timestamp: ISOTimestamp;
}

/** Group chat state */
export interface GroupChatState {
  /** Group ID */
  id: GroupId;
  /** Group name */
  name: string;
  /** Group members */
  members: GroupMember[];
  /** Group messages */
  messages: GroupMessage[];
  /** Invite link URL */
  inviteLink: string;
  /** Whether notifications are muted */
  isMuted: boolean;
}

/** Report category for profiles and conversations */
export interface ReportCategory {
  /** Category ID */
  id: string;
  /** Category display name */
  name: string;
  /** Subcategories */
  subcategories: ReportSubcategory[];
}

/** Report subcategory */
export interface ReportSubcategory {
  /** Subcategory ID */
  id: string;
  /** Subcategory display name */
  name: string;
}

/** Respond mode options for Customize ChatGPT */
export type RespondMode = 'Automatically' | 'When mentioned';

/** Group chat option menu item */
export interface GroupChatOption {
  /** Lucide icon name */
  icon: string;
  /** Display label */
  label: string;
  /** Whether this is a destructive action */
  isDestructive: boolean;
  /** Action key identifier */
  actionKey: string;
}
