/**
 * Common types — Branded IDs and shared utility types
 */

/** Branded type pattern for nominal typing */
type Brand<T, B extends string> = T & { readonly __brand: B };

/** Unique user identifier */
export type UserId = Brand<string, 'UserId'>;

/** Unique chat/conversation identifier */
export type ChatId = Brand<string, 'ChatId'>;

/** Unique message identifier */
export type MessageId = Brand<string, 'MessageId'>;

/** Unique group chat identifier */
export type GroupId = Brand<string, 'GroupId'>;

/** Helper to create a branded UserId from a plain string */
export function createUserId(id: string): UserId {
  return id as UserId;
}

/** Helper to create a branded ChatId from a plain string */
export function createChatId(id: string): ChatId {
  return id as ChatId;
}

/** Helper to create a branded MessageId from a plain string */
export function createMessageId(id: string): MessageId {
  return id as MessageId;
}

/** Helper to create a branded GroupId from a plain string */
export function createGroupId(id: string): GroupId {
  return id as GroupId;
}

/** Timestamp in ISO 8601 format */
export type ISOTimestamp = string;

/** Hex color string */
export type HexColor = `#${string}`;
