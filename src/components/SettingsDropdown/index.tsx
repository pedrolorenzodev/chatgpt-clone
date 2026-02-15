/**
 * SettingsDropdown — Floating popover anchored below a trigger element.
 *
 * Container: #424242, 16px radius, 55% width, shadow.
 * No backdrop dimming (transparent backdrop, tap dismisses).
 * Items: 48px height, 16px text, checkmark on selected.
 * Scrollable if items exceed container. Fade animation 150ms.
 */

import React from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Check } from 'lucide-react-native';
import {
  Colors,
  Dimensions,
  Spacing,
  Animations,
  Shadows,
} from '@/src/constants/design-tokens';

interface DropdownItem {
  label: string;
  value: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onPress: () => void;
}

interface SettingsDropdownProps {
  visible: boolean;
  onDismiss: () => void;
  anchorRef: React.RefObject<View>;
  items: DropdownItem[];
  selectedValue?: string;
}

const FADE_DURATION = Animations.durationFast;
const ITEM_HEIGHT = Spacing.dropdownItemHeight;
const MAX_VISIBLE_ITEMS = 6;
const CHECK_ICON_SIZE = Dimensions.iconSizeMd;

function SettingsDropdown({
  visible,
  onDismiss,
  anchorRef,
  items,
  selectedValue,
}: SettingsDropdownProps): React.JSX.Element {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const dropdownWidth = screenWidth * Dimensions.dropdownWidthPct;
  const maxHeight = ITEM_HEIGHT * MAX_VISIBLE_ITEMS;

  const [anchorLayout, setAnchorLayout] = React.useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  React.useEffect(() => {
    if (visible && anchorRef.current) {
      anchorRef.current.measureInWindow((x, y, width, height) => {
        setAnchorLayout({ x, y, width, height });
      });
    }
  }, [visible, anchorRef]);

  if (!visible) {
    return <></>;
  }

  const positionTop = anchorLayout
    ? anchorLayout.y + anchorLayout.height + Spacing.xs
    : screenHeight * 0.3;

  const positionRight = anchorLayout
    ? screenWidth - (anchorLayout.x + anchorLayout.width)
    : Spacing.lg;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={onDismiss}
    >
      <Pressable
        style={styles.backdrop}
        onPress={onDismiss}
        accessibilityLabel="Dismiss dropdown"
        accessibilityRole="button"
      />
      <Animated.View
        style={[
          styles.container,
          {
            width: dropdownWidth,
            maxHeight,
            top: positionTop,
            right: positionRight,
          },
        ]}
        entering={FadeIn.duration(FADE_DURATION)}
        exiting={FadeOut.duration(FADE_DURATION)}
      >
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {items.map((item, index) => {
            const isSelected = item.value === selectedValue;
            const isLast = index === items.length - 1;

            return (
              <Pressable
                key={item.value}
                onPress={() => {
                  item.onPress();
                  onDismiss();
                }}
                style={({ pressed }) => [
                  styles.item,
                  pressed ? styles.itemPressed : undefined,
                  isLast ? styles.itemLast : undefined,
                ]}
                accessibilityLabel={item.label}
                accessibilityRole="menuitem"
                accessibilityState={{ selected: isSelected }}
              >
                {item.leftElement ? (
                  <View style={styles.leftElement}>{item.leftElement}</View>
                ) : null}
                <Text
                  style={styles.itemText}
                  numberOfLines={1}
                >
                  {item.label}
                </Text>
                {item.rightElement ? (
                  <View style={styles.rightElement}>{item.rightElement}</View>
                ) : null}
                {isSelected && !item.rightElement ? (
                  <Check
                    size={CHECK_ICON_SIZE}
                    color={Colors.icon.primary}
                    strokeWidth={2}
                  />
                ) : null}
              </Pressable>
            );
          })}
        </ScrollView>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  container: {
    position: 'absolute',
    backgroundColor: Colors.bg.modalDialog,
    borderRadius: Dimensions.dropdownRadius,
    paddingVertical: Spacing.sm,
    overflow: 'hidden',
    ...Shadows.dropdown,
  },
  item: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
  itemPressed: {
    backgroundColor: Colors.bg.dropdownOptionPressed,
  },
  itemLast: {
    borderBottomWidth: 0,
  },
  leftElement: {
    marginRight: Spacing.md,
  },
  rightElement: {
    marginLeft: 'auto',
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.text.primary,
  },
});

export default SettingsDropdown;
