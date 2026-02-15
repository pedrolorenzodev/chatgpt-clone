import React from 'react';
import { Stack } from 'expo-router';

function SettingsLayout(): React.JSX.Element {
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
      <Stack.Screen name="licenses" />
      <Stack.Screen name="general" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="notifications-detail" />
      <Stack.Screen name="speech" />
      <Stack.Screen name="data-controls" />
      <Stack.Screen name="security" />
      <Stack.Screen name="security-passkeys" />
      <Stack.Screen name="security-mfa" />
    </Stack>
  );
}

const screenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: '#000000' },
  animation: 'slide_from_right' as const,
} as const;

export default SettingsLayout;
