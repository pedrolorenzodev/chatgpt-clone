import React from 'react';
import { Stack } from 'expo-router';

function ChatLayout(): React.JSX.Element {
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="select-text"
        options={selectTextOptions}
      />
    </Stack>
  );
}

const screenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: '#000000' },
} as const;

const selectTextOptions = {
  presentation: 'modal' as const,
  animation: 'fade' as const,
} as const;

export default ChatLayout;
