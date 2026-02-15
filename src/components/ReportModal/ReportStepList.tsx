/**
 * ReportStepList -- Renders a selectable category/subcategory list
 * for Steps 1 and 2 of the ReportModal.
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ChevronRight } from 'lucide-react-native';

import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Animations } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ListItem {
  id: string;
  name: string;
}

interface ReportStepListProps {
  items: ListItem[];
  onSelect: (id: string) => void;
}

// ---------------------------------------------------------------------------
// Sub-component: Row
// ---------------------------------------------------------------------------

function ListRow({
  item,
  onSelect,
}: {
  item: ListItem;
  onSelect: (id: string) => void;
}): React.JSX.Element {
  const pressed = useSharedValue(0);

  const bgStyle = useAnimatedStyle(() => ({
    backgroundColor:
      pressed.value === 1 ? Colors.bg.modal : 'transparent',
  }));

  return (
    <Animated.View style={bgStyle}>
      <Pressable
        onPress={() => onSelect(item.id)}
        onPressIn={() => {
          pressed.value = withTiming(1, { duration: Animations.durationPress });
        }}
        onPressOut={() => {
          pressed.value = withTiming(0, { duration: Animations.durationPress });
        }}
        accessibilityLabel={item.name}
        accessibilityRole="button"
        style={styles.row}
      >
        <Text style={styles.rowText} numberOfLines={1}>
          {item.name}
        </Text>
        <ChevronRight
          size={Dimensions.iconSizeMd}
          color={Colors.icon.chevronSecondary}
          strokeWidth={2}
        />
      </Pressable>
      <View style={styles.separator} />
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ReportStepList({
  items,
  onSelect,
}: ReportStepListProps): React.JSX.Element {
  return (
    <View>
      {items.map((item) => (
        <ListRow key={item.id} item={item} onSelect={onSelect} />
      ))}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xs,
  },
  rowText: {
    ...Typography.bodyMd,
    color: Colors.text.primary,
    flex: 1,
    marginRight: Spacing.sm,
  },
  separator: {
    height: Dimensions.separatorHeight,
    backgroundColor: Colors.border.settingsRowSeparator,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ReportStepList;
