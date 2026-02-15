/**
 * Chat types — Messages, features, citations, context menu
 */

import type { MessageId, ISOTimestamp } from './common.types';

/** Who sent the message */
export type MessageRole = 'user' | 'assistant';

/** A single chat message */
export interface ChatMessage {
  /** Branded message ID */
  id: MessageId;
  /** Who sent this message */
  role: MessageRole;
  /** Message text content (may contain markdown for AI) */
  content: string;
  /** Timestamp of the message */
  timestamp: ISOTimestamp;
  /** Optional inline citations (search mode AI responses) */
  citations?: Citation[];
}

/** Active chat mode determining input behavior */
export type ChatMode =
  | 'normal'
  | 'search'
  | 'study'
  | 'edit'
  | 'image'
  | 'agent'
  | 'research'
  | 'instant'
  | 'thinking'
  | 'shopping'
  | 'quizzes';

/** Feature chip data shown inside the input bar */
export interface FeatureChipData {
  /** Unique chip identifier */
  id: string;
  /** Lucide icon name */
  icon: string;
  /** Icon tint color */
  iconColor: string;
  /** Label text */
  label: string;
  /** Label tint color (default white, teal for edit mode) */
  labelColor?: string;
}

/** Inline citation in AI responses */
export interface Citation {
  /** Unique citation ID */
  id: string;
  /** Source domain name */
  domain: string;
  /** Favicon URL (or placeholder) */
  faviconUrl: string;
  /** Article/page title */
  title: string;
  /** Full source URL */
  url: string;
  /** Additional source count ("+1", "+2") */
  additionalCount?: number;
}

/** Source item in Sources BottomSheet */
export interface Source {
  /** Unique source ID */
  id: string;
  /** Source domain name */
  domain: string;
  /** Favicon URL (or placeholder) */
  faviconUrl: string;
  /** Full article title */
  title: string;
  /** Full source URL */
  url: string;
}

/** Context menu item for long-press actions */
export interface ContextMenuItem {
  /** Lucide icon name */
  icon: string;
  /** Display label */
  label: string;
  /** Action handler */
  onPress: () => void;
}

/** Suggestion button on empty chat screen */
export interface SuggestionItem {
  /** Lucide icon name */
  icon: string;
  /** Icon tint color */
  iconColor: string;
  /** Button label */
  label: string;
}

/** Feature type in Attachments BottomSheet */
export type FeatureType =
  | 'model'
  | 'create-image'
  | 'deep-research'
  | 'web-search'
  | 'study-and-learn'
  | 'agent-mode'
  | 'shopping-research'
  | 'your-year'
  | 'quizzes'
  | 'explore-apps';

/** Feature item in Attachments BottomSheet */
export interface FeatureItem {
  /** Feature type identifier */
  type: FeatureType;
  /** Lucide icon name */
  icon: string;
  /** Icon color */
  iconColor: string;
  /** Feature title */
  title: string;
  /** Feature subtitle/description */
  subtitle: string;
}

/** Thumbs state for action bar */
export type ThumbsState = 'none' | 'up' | 'down';

/** Model selection options */
export type ModelVariant =
  | 'auto'
  | 'instant'
  | 'thinking';
