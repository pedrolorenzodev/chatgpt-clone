/**
 * SettingsRow — Single row inside a SettingsCardGroup.
 * Supports 11 variants (A–K) determined by prop combination.
 */

import React, { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import SettingsRowRightElement from '@/src/components/SettingsRow/RightElement';
import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Typography } from '@/src/constants/typography';
import { Spacing } from '@/src/constants/spacing';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type IconComponent = React.ComponentType<{
  size: number;
  color: string;
  strokeWidth?: number;
}>;

interface SettingsRowProps {
  icon?: IconComponent;
  iconColor?: string;
  title: string;
  titleColor?: string;
  subtitle?: string;
  subtitleColor?: string;
  subtitlePrefix?: React.ReactNode;
  rightElement?: 'toggle' | 'chevron-down' | 'chevron-right' | 'status' | 'none';
  toggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
  statusText?: string;
  onPress?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  showSeparator?: boolean;
  accessibilityLabel: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE = Dimensions.iconSizeLg;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SettingsRow({
  icon: Icon,
  iconColor = Colors.icon.primary,
  title,
  titleColor = Colors.text.primary,
  subtitle,
  subtitleColor = Colors.text.tertiary,
  subtitlePrefix,
  rightElement = 'none',
  toggleValue,
  onToggleChange,
  statusText,
  onPress,
  showSeparator = true,
  accessibilityLabel,
}: SettingsRowProps): React.JSX.Element {
  const hasSubtitle = subtitle != null;
  const isToggle = rightElement === 'toggle';
  const isInteractive = onPress != null || isToggle;

  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityButton,
  });

  const rowHeight = hasSubtitle
    ? Spacing.settingsRowHeightMd
    : Spacing.settingsRowHeightSm;

  const containerStyle = useMemo(
    () => [styles.row, { height: rowHeight }],
    [rowHeight],
  );

  const handlePress = (): void => {
    if (onPress) {
      onPress();
    } else if (isToggle && onToggleChange) {
      onToggleChange(!toggleValue);
    }
  };

  const content = (
    <View style={containerStyle}>
      {Icon != null && (
        <View style={styles.iconContainer}>
          <Icon size={ICON_SIZE} color={iconColor} strokeWidth={2} />
        </View>
      )}

      <View style={styles.textContainer}>
        <Text
          style={[styles.title, { color: titleColor }]}
          numberOfLines={1}
        >
          {title}
        </Text>
        {hasSubtitle && (
          <View style={styles.subtitleRow}>
            {subtitlePrefix}
            <Text
              style={[styles.subtitle, { color: subtitleColor }]}
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          </View>
        )}
      </View>

      <SettingsRowRightElement
        rightElement={rightElement}
        toggleValue={toggleValue}
        statusText={statusText}
        hasOnPress={onPress != null}
        title={title}
      />
    </View>
  );

  return (
    <View>
      {isInteractive ? (
        <Animated.View style={animatedStyle}>
          <Pressable
            onPress={handlePress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole={isToggle ? 'switch' : 'button'}
            accessibilityState={isToggle ? { checked: !!toggleValue } : undefined}
          >
            {content}
          </Pressable>
        </Animated.View>
      ) : (
        <View accessibilityLabel={accessibilityLabel}>{content}</View>
      )}
      {showSeparator && <View style={styles.separator} />}
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
    paddingHorizontal: Spacing.settingsCardPaddingH,
  },
  iconContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.iconTextGap,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: Typography.bodyMd.fontSize,
    fontWeight: Typography.bodyMd.fontWeight,
    lineHeight: Typography.bodyMd.lineHeight,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  subtitle: {
    fontSize: Typography.bodyXs.fontSize,
    fontWeight: Typography.bodyXs.fontWeight,
    lineHeight: Typography.bodyXs.lineHeight,
  },
  separator: {
    height: Dimensions.separatorHeight,
    backgroundColor: Colors.border.settingsRowSeparator,
    marginLeft: Spacing.settingsCardPaddingH,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default SettingsRow;
