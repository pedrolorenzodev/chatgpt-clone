import React from 'react';
import { Stack } from 'expo-router';

function AuthLayout(): React.JSX.Element {
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="login" options={loginOptions} />
      <Stack.Screen
        name="loading"
        options={loadingOptions}
      />
    </Stack>
  );
}

const screenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: '#000000' },
  animation: 'slide_from_right' as const,
} as const;

const loginOptions = {
  animation: 'none' as const,
} as const;

const loadingOptions = {
  animation: 'fade' as const,
  gestureEnabled: false,
} as const;

export default AuthLayout;
