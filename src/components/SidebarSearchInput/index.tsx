/**
 * SidebarSearchInput — Pill-shaped search input for the sidebar header.
 *
 * Two states:
 *   - Collapsed (isFocused=false): Pressable trigger with Search icon + "Search" text.
 *   - Expanded (isFocused=true): ArrowLeft back button + editable TextInput, auto-focused.
 */

import React, { useEffect, useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { ArrowLeft, Search } from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Typography } from '@/src/constants/typography';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SidebarSearchInputProps {
  /** Current search text value */
  value: string;
  /** Text change handler */
  onChangeText: (text: string) => void;
  /** Whether the search input is expanded / focused */
  isFocused: boolean;
  /** Called to expand the search input */
  onFocus: () => void;
  /** Called to collapse back (back arrow press) */
  onBackPress: () => void;
  /** Accessibility label */
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE = Dimensions.iconSizeMd;
const ICON_COLOR = Colors.icon.secondary;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SidebarSearchInput({
  value,
  onChangeText,
  isFocused,
  onFocus,
  onBackPress,
  accessibilityLabel,
}: SidebarSearchInputProps): React.JSX.Element {
  const inputRef = useRef<TextInput>(null);

  const {
    animatedStyle: arrowAnimStyle,
    onPressIn: arrowPressIn,
    onPressOut: arrowPressOut,
  } = useAnimatedPress({ opacity: Press.opacityIcon });

  useEffect(() => {
    if (isFocused) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isFocused]);

  if (!isFocused) {
    return (
      <Pressable
        onPress={onFocus}
        style={styles.container}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="search"
      >
        <Search size={ICON_SIZE} color={ICON_COLOR} strokeWidth={2} />
        <Text style={styles.placeholderText}>Search</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container} accessibilityRole="search">
      <Animated.View style={arrowAnimStyle}>
        <Pressable
          onPress={onBackPress}
          onPressIn={arrowPressIn}
          onPressOut={arrowPressOut}
          hitSlop={10}
          accessibilityLabel="Go back"
          accessibilityRole="button"
        >
          <ArrowLeft size={ICON_SIZE} color={ICON_COLOR} strokeWidth={2} />
        </Pressable>
      </Animated.View>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search"
        placeholderTextColor={Colors.text.tertiary}
        style={styles.textInput}
        cursorColor={Colors.text.primary}
        selectionColor={Colors.text.selectionHighlight}
        returnKeyType="search"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    height: Dimensions.searchInputHeight,
    borderRadius: Dimensions.searchInputRadius,
    backgroundColor: Colors.bg.surface,
    paddingHorizontal: Spacing.sidebarPaddingH,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.iconTextGapButton,
    flex: 1,
  },
  placeholderText: {
    ...Typography.inputText,
    color: Colors.text.tertiary,
  },
  textInput: {
    flex: 1,
    fontSize: Typography.inputText.fontSize,
    fontWeight: Typography.inputText.fontWeight,
    color: Colors.text.primary,
    paddingVertical: 0,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SidebarSearchInput;
