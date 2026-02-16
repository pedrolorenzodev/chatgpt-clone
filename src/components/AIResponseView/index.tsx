/**
 * AIResponseView -- Renders AI response text with basic markdown support.
 *
 * Splits content by double newlines for paragraphs.
 * Handles **bold** via simple regex.
 * Text is selectable.
 */

import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';
import { Typography } from '@/src/constants/typography';

import type { Citation } from '@/src/types/chat.types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AIResponseViewProps {
  /** AI response content (may contain basic markdown) */
  content: string;
  /** Whether the response is still streaming */
  isStreaming?: boolean;
  /** Optional inline citations */
  citations?: Citation[];
  /** Called when a citation chip is pressed */
  onCitationPress?: (citation: Citation) => void;
  /** Override accessibility label */
  accessibilityLabel?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Bold regex matching **text** */
const BOLD_REGEX = /\*\*(.+?)\*\*/g;

interface TextSegment {
  text: string;
  bold: boolean;
}

/**
 * Parse a single paragraph string into segments, splitting on **bold**.
 */
function parseBoldSegments(paragraph: string): TextSegment[] {
  const segments: TextSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  // Reset lastIndex on the regex
  BOLD_REGEX.lastIndex = 0;

  while ((match = BOLD_REGEX.exec(paragraph)) !== null) {
    // Text before the bold match
    if (match.index > lastIndex) {
      segments.push({ text: paragraph.slice(lastIndex, match.index), bold: false });
    }
    // The bold match (captured group)
    segments.push({ text: match[1], bold: true });
    lastIndex = match.index + match[0].length;
  }

  // Remaining text after last bold match
  if (lastIndex < paragraph.length) {
    segments.push({ text: paragraph.slice(lastIndex), bold: false });
  }

  // If no bold found at all, return the whole paragraph as one segment
  if (segments.length === 0) {
    segments.push({ text: paragraph, bold: false });
  }

  return segments;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function AIResponseView({
  content,
  isStreaming: _isStreaming,
  citations: _citations,
  onCitationPress: _onCitationPress,
  accessibilityLabel,
}: AIResponseViewProps): React.JSX.Element {
  const paragraphs = useMemo(
    () => content.split(/\n\n+/).filter((p) => p.trim().length > 0),
    [content],
  );

  return (
    <View
      style={styles.container}
      accessibilityLabel={accessibilityLabel ?? content}
      accessibilityRole="text"
    >
      {paragraphs.map((paragraph, index) => {
        const segments = parseBoldSegments(paragraph);
        const isLast = index === paragraphs.length - 1;

        return (
          <Text
            key={`p-${index}`}
            style={[styles.paragraph, !isLast && styles.paragraphSpacing]}
            selectable
          >
            {segments.map((segment, segIdx) => (
              <Text
                key={`s-${segIdx}`}
                style={segment.bold ? styles.boldText : styles.normalText}
              >
                {segment.text}
              </Text>
            ))}
          </Text>
        );
      })}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.chatPaddingH,
  },
  paragraph: {
    ...Typography.bodyMd,
    color: Colors.text.primary,
  },
  paragraphSpacing: {
    marginBottom: Spacing.lg,
  },
  normalText: {
    fontWeight: '400',
  },
  boldText: {
    fontWeight: '700',
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default AIResponseView;
