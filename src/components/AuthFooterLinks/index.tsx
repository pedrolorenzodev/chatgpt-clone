import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { Spacing } from '@/src/constants/spacing';
import { Typography } from '@/src/constants/typography';
import LinkText from '@/src/components/LinkText';

interface AuthFooterLinksProps {
  onTermsPress?: () => void;
  onPrivacyPress?: () => void;
}

const NOOP = (): void => {};

function AuthFooterLinks({
  onTermsPress,
  onPrivacyPress,
}: AuthFooterLinksProps): React.ReactElement {
  return (
    <View style={styles.container}>
      <LinkText
        text="Terms of Use"
        onPress={onTermsPress ?? NOOP}
        color={Colors.text.linkFooter}
        fontSize={Typography.bodyXxs.fontSize}
        accessibilityLabel="Terms of Use"
      />
      <Text style={styles.dot}> . </Text>
      <LinkText
        text="Privacy Policy"
        onPress={onPrivacyPress ?? NOOP}
        color={Colors.text.linkFooter}
        fontSize={Typography.bodyXxs.fontSize}
        accessibilityLabel="Privacy Policy"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Spacing.lg,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    ...Typography.bodyXxs,
    color: Colors.text.linkFooter,
    marginHorizontal: Spacing.chatChipIconGap,
  },
});

export default AuthFooterLinks;
