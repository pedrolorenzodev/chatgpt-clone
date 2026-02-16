/**
 * EmptyState -- Centered title and suggestion button grid.
 *
 * Shows "What can I help with?" title and suggestion pill buttons
 * arranged in a flex-wrap row (3 on row 1, remaining centered on row 2).
 * Exits with a 200ms fade-out when a suggestion is tapped.
 */

import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

import SuggestionButton from '@/src/components/SuggestionButton';
import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';
import { Animations } from '@/src/constants/animations';
import type { SuggestionItem } from '@/src/types/chat.types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface EmptyStateProps {
  suggestions: SuggestionItem[];
  onSuggestionPress: (item: SuggestionItem) => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function EmptyState({
  suggestions,
  onSuggestionPress,
}: EmptyStateProps): React.JSX.Element {
  const handlePress = useCallback(
    (item: SuggestionItem) => () => {
      onSuggestionPress(item);
    },
    [onSuggestionPress],
  );

  return (
    <Animated.View
      style={styles.container}
      exiting={FadeOut.duration(Animations.durationFloatLabel)}
    >
      <Text style={styles.title}>What can I help with?</Text>

      <View style={styles.grid}>
        <View style={styles.row}>
          {suggestions.slice(0, 3).map((item) => (
            <SuggestionButton
              key={item.label}
              icon={item.icon}
              iconColor={item.iconColor}
              label={item.label}
              onPress={handlePress(item)}
              accessibilityLabel={item.label}
            />
          ))}
        </View>
        <View style={styles.row}>
          {suggestions.slice(3).map((item) => (
            <SuggestionButton
              key={item.label}
              icon={item.icon}
              iconColor={item.iconColor}
              label={item.label}
              onPress={handlePress(item)}
              accessibilityLabel={item.label}
            />
          ))}
        </View>
      </View>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: Spacing.screenPaddingH,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.chatPromptMarginBottom,
  },
  grid: {
    gap: Spacing.chatSuggestionGapV,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.chatSuggestionGapH,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default EmptyState;
