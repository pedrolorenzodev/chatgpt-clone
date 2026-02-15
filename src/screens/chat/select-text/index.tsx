import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SelectTextScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SelectTextScreen;
