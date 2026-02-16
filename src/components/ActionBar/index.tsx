/**
 * ActionBar -- Row of icon buttons displayed below an AI response.
 *
 * Two variants:
 *   - unauth (3 icons): Copy, Volume2, RefreshCw
 *   - auth   (6 icons): Copy, ThumbsUp, ThumbsDown, Volume2, Share2, EllipsisVertical
 *
 * Each icon is 20px, #9A9A9A, wrapped in a Pressable with opacity 0.7 feedback.
 * Fades in on mount (300ms via FadeIn from reanimated).
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import {
  Copy,
  Volume2,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  Share2,
  EllipsisVertical,
} from 'lucide-react-native';

import { useAnimatedPress } from '@/src/hooks/useAnimatedPress';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Spacing } from '@/src/constants/spacing';
import { Animations } from '@/src/constants/animations';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ActionBarProps {
  /** Controls which icon set is shown */
  variant: 'unauth' | 'auth';
  /** Whether to show a "Sources" button (future use) */
  showSources?: boolean;
  /** Copy press handler */
  onCopyPress: () => void;
  /** Speaker press handler */
  onSpeakerPress: () => void;
  /** Regenerate press handler (unauth only) */
  onRegeneratePress?: () => void;
  /** Thumbs up press handler (auth only) */
  onThumbsUpPress?: () => void;
  /** Thumbs down press handler (auth only) */
  onThumbsDownPress?: () => void;
  /** Share press handler (auth only) */
  onSharePress?: () => void;
  /** Ellipsis press handler (auth only) */
  onEllipsisPress?: () => void;
  /** Sources press handler (future use) */
  onSourcesPress?: () => void;
  /** Override accessibility label for the bar */
  accessibilityLabel?: string;
}

// ---------------------------------------------------------------------------
// Sub-component: ActionIcon
// ---------------------------------------------------------------------------

interface ActionIconProps {
  icon: React.ReactNode;
  onPress: () => void;
  accessibilityLabel: string;
}

function ActionIcon({
  icon,
  onPress,
  accessibilityLabel,
}: ActionIconProps): React.JSX.Element {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({
    opacity: Press.opacityIcon,
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        hitSlop={8}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={styles.iconTouchArea}
      >
        {icon}
      </Pressable>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ActionBar({
  variant,
  onCopyPress,
  onSpeakerPress,
  onRegeneratePress,
  onThumbsUpPress,
  onThumbsDownPress,
  onSharePress,
  onEllipsisPress,
  accessibilityLabel,
}: ActionBarProps): React.JSX.Element {
  const iconSize = Dimensions.chatActionIconSize;
  const iconColor = Colors.icon.secondary;

  return (
    <Animated.View
      entering={FadeIn.duration(Animations.durationNormal)}
      style={styles.container}
      accessibilityLabel={accessibilityLabel ?? 'Action bar'}
      accessibilityRole="toolbar"
    >
      {/* Copy -- always shown */}
      <ActionIcon
        icon={<Copy size={iconSize} color={iconColor} />}
        onPress={onCopyPress}
        accessibilityLabel="Copy response"
      />

      {variant === 'unauth' && (
        <>
          <ActionIcon
            icon={<Volume2 size={iconSize} color={iconColor} />}
            onPress={onSpeakerPress}
            accessibilityLabel="Read aloud"
          />
          {onRegeneratePress != null && (
            <ActionIcon
              icon={<RefreshCw size={iconSize} color={iconColor} />}
              onPress={onRegeneratePress}
              accessibilityLabel="Regenerate response"
            />
          )}
        </>
      )}

      {variant === 'auth' && (
        <>
          {onThumbsUpPress != null && (
            <ActionIcon
              icon={<ThumbsUp size={iconSize} color={iconColor} />}
              onPress={onThumbsUpPress}
              accessibilityLabel="Thumbs up"
            />
          )}
          {onThumbsDownPress != null && (
            <ActionIcon
              icon={<ThumbsDown size={iconSize} color={iconColor} />}
              onPress={onThumbsDownPress}
              accessibilityLabel="Thumbs down"
            />
          )}
          <ActionIcon
            icon={<Volume2 size={iconSize} color={iconColor} />}
            onPress={onSpeakerPress}
            accessibilityLabel="Read aloud"
          />
          {onSharePress != null && (
            <ActionIcon
              icon={<Share2 size={iconSize} color={iconColor} />}
              onPress={onSharePress}
              accessibilityLabel="Share response"
            />
          )}
          {onEllipsisPress != null && (
            <ActionIcon
              icon={<EllipsisVertical size={iconSize} color={iconColor} />}
              onPress={onEllipsisPress}
              accessibilityLabel="More options"
            />
          )}
        </>
      )}
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Spacing.chatPaddingH,
    marginTop: Spacing.chatActionBarMarginTop,
    gap: Spacing.chatActionBarGap,
  },
  iconTouchArea: {
    width: Dimensions.chatActionTouchSize,
    height: Dimensions.chatActionTouchSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default ActionBar;
