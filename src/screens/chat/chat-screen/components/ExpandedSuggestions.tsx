/**
 * ExpandedSuggestions -- Animated list of suggestion text items.
 *
 * Slides up from below (300ms, standard easing) when a suggestion
 * category is tapped. Each item shows an icon + text with separators.
 */

import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { SlideInDown } from 'react-native-reanimated';

import SuggestionTextItem from '@/src/components/SuggestionTextItem';
import { Animations, Easings } from '@/src/constants/animations';
import { Spacing } from '@/src/constants/spacing';
import type { SuggestionItem } from '@/src/types/chat.types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ExpandedSuggestionsProps {
  items: SuggestionItem[];
  onItemPress: (item: SuggestionItem) => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ExpandedSuggestions({
  items,
  onItemPress,
}: ExpandedSuggestionsProps): React.JSX.Element {
  const handlePress = useCallback(
    (item: SuggestionItem) => () => {
      onItemPress(item);
    },
    [onItemPress],
  );

  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(Animations.durationNormal).easing(Easings.standard)}
    >
      {items.map((item, index) => (
        <SuggestionTextItem
          key={item.label}
          icon={item.icon}
          iconColor={item.iconColor}
          text={item.label}
          onPress={handlePress(item)}
          showSeparator={index < items.length - 1}
          accessibilityLabel={item.label}
        />
      ))}
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.screenPaddingH,
    marginBottom: Spacing.md,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ExpandedSuggestions;
