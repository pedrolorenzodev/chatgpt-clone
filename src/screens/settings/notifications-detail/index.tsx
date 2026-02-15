import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NotificationDetailScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification Detail</Text>
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

export default NotificationDetailScreen;
