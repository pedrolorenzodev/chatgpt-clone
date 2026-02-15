/**
 * OrDivider — Horizontal divider with "OR" text centered between two lines.
 *
 * Used to separate the primary form action from alternative auth methods
 * on the login screen.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/src/constants/colors';

interface OrDividerProps {
  text?: string;
}

const MARGIN_H = 16;

function OrDivider({ text = 'OR' }: OrDividerProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border.dividerOr,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.text.orDivider,
    marginHorizontal: MARGIN_H,
  },
});

export default OrDivider;
