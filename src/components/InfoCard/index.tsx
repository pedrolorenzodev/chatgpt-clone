import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Spacing, Typography } from '@/src/constants/design-tokens';
import LinkText from '@/src/components/LinkText';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  onLinkPress?: () => void;
}

function InfoCard({
  icon,
  title,
  description,
  linkText,
  onLinkPress,
}: InfoCardProps): React.ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description}
          {linkText != null && ' '}
        </Text>
        {linkText != null && onLinkPress != null && (
          <LinkText
            text={linkText}
            onPress={onLinkPress}
            color={Colors.text.primary}
            fontSize={Typography.bodySm.fontSize}
            accessibilityLabel={linkText}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 26,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: Spacing.xl,
  },
  title: {
    ...Typography.labelBold,
    color: Colors.text.primary,
  },
  description: {
    ...Typography.bodySm,
    color: Colors.text.tertiary,
    marginTop: Spacing.xs,
  },
});

export default InfoCard;
