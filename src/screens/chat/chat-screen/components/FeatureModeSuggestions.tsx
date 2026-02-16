/**
 * FeatureModeSuggestions -- Animated list of suggestion items for feature modes.
 *
 * Displays SuggestionTextItem rows for Search (trending topics) or
 * Study (activity suggestions) modes. Slides up from below on mount.
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

interface FeatureModeSuggestionsProps {
  /** Suggestion items to render (trending topics or study activities) */
  items: SuggestionItem[];
  /** Called when a suggestion item is pressed */
  onItemPress: (item: SuggestionItem) => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function FeatureModeSuggestions({
  items,
  onItemPress,
}: FeatureModeSuggestionsProps): React.JSX.Element {
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
    marginBottom: Spacing.sm,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default FeatureModeSuggestions;
