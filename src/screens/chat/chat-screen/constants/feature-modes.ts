/**
 * Feature mode chip data and placeholder strings for search and study modes.
 */

import type { FeatureChipData } from '@/src/types/chat.types';

// ---------------------------------------------------------------------------
// Chip Data
// ---------------------------------------------------------------------------

export const SEARCH_CHIP: FeatureChipData = {
  id: 'search',
  icon: 'Globe',
  iconColor: '#5BC5C9',
  label: 'Search',
  labelColor: '#FFFFFF',
};

export const STUDY_CHIP: FeatureChipData = {
  id: 'study',
  icon: 'GraduationCap',
  iconColor: '#F5C542',
  label: 'Study',
  labelColor: '#FFFFFF',
};

export const EDIT_CHIP: FeatureChipData = {
  id: 'edit',
  icon: 'Pencil',
  iconColor: '#5BC5C9',
  label: 'Editing message',
  labelColor: '#5BC5C9',
};

// ---------------------------------------------------------------------------
// Placeholders
// ---------------------------------------------------------------------------

export const PLACEHOLDER_SEARCH = 'Search the web';
export const PLACEHOLDER_STUDY = 'Study and learn';
export const PLACEHOLDER_DEFAULT = 'Ask ChatGPT';
