/**
 * UnauthSidebar -- Sidebar content shown when the user is NOT authenticated.
 *
 * Layout (top to bottom):
 *   - "New chat" row (SidebarMenuItem with SquarePen icon)
 *   - 1px separator (#2A2A2A)
 *   - Three text links: Terms, Privacy, Settings (height 48 each)
 *   - Flex spacer
 *   - Description text
 *   - "Log in or sign up" PrimaryButton
 *   - Bottom safe-area padding
 */

import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { SquarePen } from 'lucide-react-native';

import SidebarMenuItem from '@/src/components/SidebarMenuItem';
import PrimaryButton from '@/src/components/PrimaryButton';
import { useSidebarStore } from '@/src/stores/sidebar.store';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';
import { Press } from '@/src/constants/animations';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface MenuLinkItem {
  label: string;
  onPress: () => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function UnauthSidebar(): React.JSX.Element {
  const router = useRouter();
  const closeSidebar = useSidebarStore((s) => s.close);

  const handleNewChat = useCallback((): void => {
    closeSidebar();
  }, [closeSidebar]);

  const handleSettings = useCallback((): void => {
    closeSidebar();
    router.push('/(settings)');
  }, [closeSidebar, router]);

  const handleLogin = useCallback((): void => {
    // No-op: auth bottom sheet will be wired later
  }, []);

  const menuLinks: MenuLinkItem[] = [
    { label: 'Terms', onPress: () => {} },
    { label: 'Privacy', onPress: () => {} },
    { label: 'Settings', onPress: handleSettings },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Header: New chat */}
      <SidebarMenuItem
        icon={
          <SquarePen
            size={Dimensions.iconSizeLg}
            color={Colors.icon.primary}
            strokeWidth={2}
          />
        }
        label="New chat"
        onPress={handleNewChat}
        textWeight="500"
        accessibilityLabel="New chat"
      />

      {/* Separator */}
      <View style={styles.separator} />

      {/* Menu links */}
      {menuLinks.map((item) => (
        <Pressable
          key={item.label}
          onPress={item.onPress}
          style={({ pressed }) => [
            styles.menuLink,
            pressed ? styles.menuLinkPressed : undefined,
          ]}
          accessibilityLabel={item.label}
          accessibilityRole="button"
        >
          <Text style={styles.menuLinkText}>{item.label}</Text>
        </Pressable>
      ))}

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Description */}
      <Text style={styles.description}>
        Save your chat history, share chats, and personalize your experience.
      </Text>

      {/* Login button */}
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="Log in or sign up"
          onPress={handleLogin}
          variant="default"
          width="full"
          accessibilityLabel="Log in or sign up"
        />
      </View>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg.sidebar,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.border.separator,
    marginHorizontal: 16,
  },
  menuLink: {
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  menuLinkPressed: {
    opacity: Press.opacityIcon,
  },
  menuLinkText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.text.secondary,
  },
  spacer: {
    flex: 1,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.text.tertiary,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default UnauthSidebar;
