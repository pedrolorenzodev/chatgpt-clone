/**
 * Expanded suggestion mappings — maps each suggestion button label
 * to its input prefix and expanded text items.
 */

import type { SuggestionItem } from '@/src/types/chat.types';
import { MOCK_EXPANDED_SUGGESTIONS } from '@/src/constants/mock-data/chat-messages.data';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ExpandedSuggestionConfig {
  prefix: string;
  items: SuggestionItem[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const EXPANDED_SUGGESTIONS_MAP: Record<string, ExpandedSuggestionConfig> = {
  Brainstorm: {
    prefix: 'Help me brainstorm',
    items: [
      { icon: 'Lightbulb', iconColor: '#F5C542', label: 'Help me brainstorm ideas' },
      { icon: 'Lightbulb', iconColor: '#F5C542', label: 'Help me think of a name' },
      { icon: 'Lightbulb', iconColor: '#F5C542', label: 'Help me plan an event' },
      { icon: 'Lightbulb', iconColor: '#F5C542', label: 'Help me solve a problem' },
    ],
  },
  'Get advice': {
    prefix: 'Give me advice',
    items: [
      { icon: 'Gem', iconColor: '#5BC5C9', label: 'Give me advice on career growth' },
      { icon: 'Gem', iconColor: '#5BC5C9', label: 'Give me advice on personal finance' },
      { icon: 'Gem', iconColor: '#5BC5C9', label: 'Give me advice on relationships' },
      { icon: 'Gem', iconColor: '#5BC5C9', label: 'Give me advice on productivity' },
    ],
  },
  Code: {
    prefix: 'Help me',
    items: MOCK_EXPANDED_SUGGESTIONS,
  },
  'Summarize text': {
    prefix: 'Summarize',
    items: [
      { icon: 'FileText', iconColor: '#E8875B', label: 'Summarize this article' },
      { icon: 'FileText', iconColor: '#E8875B', label: 'Summarize key points from a meeting' },
      { icon: 'FileText', iconColor: '#E8875B', label: 'Summarize a long document' },
      { icon: 'FileText', iconColor: '#E8875B', label: 'Summarize the main arguments' },
    ],
  },
  'Create image': {
    prefix: 'Create an image of',
    items: [
      { icon: 'Image', iconColor: '#4ADE80', label: 'Create a logo design' },
      { icon: 'Image', iconColor: '#4ADE80', label: 'Create a landscape illustration' },
      { icon: 'Image', iconColor: '#4ADE80', label: 'Create a portrait photo' },
      { icon: 'Image', iconColor: '#4ADE80', label: 'Create an abstract artwork' },
    ],
  },
  'Help me write': {
    prefix: 'Help me write',
    items: [
      { icon: 'Pencil', iconColor: '#C084FC', label: 'Help me write an email' },
      { icon: 'Pencil', iconColor: '#C084FC', label: 'Help me write a cover letter' },
      { icon: 'Pencil', iconColor: '#C084FC', label: 'Help me write a blog post' },
      { icon: 'Pencil', iconColor: '#C084FC', label: 'Help me write a story' },
    ],
  },
};
