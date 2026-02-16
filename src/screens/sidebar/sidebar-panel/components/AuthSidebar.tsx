/**
 * AuthSidebar -- Sidebar content shown when the user IS authenticated.
 *
 * Layout:
 *   - Fixed header: SidebarSearchInput + compose IconButton (SquarePen)
 *   - ScrollView content:
 *       Section 1 - Quick actions (New chat, Images, Apps)
 *       Section 2 - Projects (New project, Paisa, Estudio, All projects)
 *       Section 3 - Chat history grouped by date (Today, Yesterday, Previous 7 Days)
 *   - Fixed footer: SidebarUserFooter
 *
 * When search is active, chat history items are filtered by title (case-insensitive).
 */

import React, { useCallback, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  SquarePen,
  Image as ImageIcon,
  LayoutGrid,
  FolderPlus,
  Folder,
  MoreHorizontal,
} from 'lucide-react-native';

import SidebarMenuItem from '@/src/components/SidebarMenuItem';
import SidebarChatItem from '@/src/components/SidebarChatItem';
import SidebarSearchInput from '@/src/components/SidebarSearchInput';
import SidebarUserFooter from '@/src/components/SidebarUserFooter';
import IconButton from '@/src/components/IconButton';
import { useSidebarStore } from '@/src/stores/sidebar.store';
import {
  MOCK_SIDEBAR_MENU_ITEMS,
  MOCK_PROJECTS,
  MOCK_SIDEBAR_SECTIONS,
} from '@/src/constants/mock-data/sidebar.data';
import { Colors } from '@/src/constants/colors';
import { Dimensions } from '@/src/constants/dimensions';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICON_SIZE = Dimensions.iconSizeLg;
const ICON_COLOR = Colors.icon.primary;

/** Maps icon name strings from mock data to rendered lucide components. */
const ICON_MAP: Record<string, React.ReactNode> = {
  SquarePen: <SquarePen size={ICON_SIZE} color={ICON_COLOR} strokeWidth={2} />,
  Image: <ImageIcon size={ICON_SIZE} color={ICON_COLOR} strokeWidth={2} />,
  LayoutGrid: <LayoutGrid size={ICON_SIZE} color={ICON_COLOR} strokeWidth={2} />,
  FolderPlus: <FolderPlus size={ICON_SIZE} color={ICON_COLOR} strokeWidth={2} />,
  Folder: <Folder size={ICON_SIZE} color={ICON_COLOR} strokeWidth={2} />,
  MoreHorizontal: <MoreHorizontal size={ICON_SIZE} color={ICON_COLOR} strokeWidth={2} />,
};

const FIRST_CHAT_ID = 'chat-1';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function AuthSidebar(): React.JSX.Element {
  const router = useRouter();
  const closeSidebar = useSidebarStore((s) => s.close);
  const isSearchFocused = useSidebarStore((s) => s.isSearchFocused);
  const setSearchFocused = useSidebarStore((s) => s.setSearchFocused);
  const searchQuery = useSidebarStore((s) => s.searchQuery);
  const setSearchQuery = useSidebarStore((s) => s.setSearchQuery);

  const handleCompose = useCallback((): void => {
    closeSidebar();
  }, [closeSidebar]);

  const handleSearchFocus = useCallback((): void => {
    setSearchFocused(true);
  }, [setSearchFocused]);

  const handleSearchBack = useCallback((): void => {
    setSearchFocused(false);
    setSearchQuery('');
  }, [setSearchFocused, setSearchQuery]);

  const handleChatPress = useCallback((): void => {
    closeSidebar();
  }, [closeSidebar]);

  const handleSettingsPress = useCallback((): void => {
    closeSidebar();
    router.push('/(settings)');
  }, [closeSidebar, router]);

  const handleMenuItemPress = useCallback((): void => {
    // No-op for non-navigating menu items
  }, []);

  const handleNewChatPress = useCallback((): void => {
    closeSidebar();
  }, [closeSidebar]);

  /** Filtered sections based on search query */
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return MOCK_SIDEBAR_SECTIONS;
    }
    const query = searchQuery.toLowerCase();
    return MOCK_SIDEBAR_SECTIONS.map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.title.toLowerCase().includes(query)
      ),
    })).filter((section) => section.items.length > 0);
  }, [searchQuery]);

  const getTextWeight = (variant: string): '400' | '500' => {
    if (variant === 'project' || variant === 'more') return '400';
    return '500';
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <SidebarSearchInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          isFocused={isSearchFocused}
          onFocus={handleSearchFocus}
          onBackPress={handleSearchBack}
          accessibilityLabel="Search chats"
        />
        <IconButton
          icon={
            <SquarePen
              size={Dimensions.iconSizeLg}
              color={Colors.icon.primary}
              strokeWidth={2}
            />
          }
          onPress={handleCompose}
          size={40}
          accessibilityLabel="New chat"
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Section 1: Quick Actions */}
        {MOCK_SIDEBAR_MENU_ITEMS.map((item) => (
          <SidebarMenuItem
            key={item.id}
            icon={ICON_MAP[item.icon]}
            label={item.label}
            onPress={item.id === 'new-chat' ? handleNewChatPress : handleMenuItemPress}
            textWeight={getTextWeight(item.variant)}
            accessibilityLabel={item.label}
          />
        ))}

        {/* Spacer between sections */}
        <View style={styles.sectionSpacer} />

        {/* Section 2: Projects */}
        {MOCK_PROJECTS.map((item) => (
          <SidebarMenuItem
            key={item.id}
            icon={ICON_MAP[item.icon]}
            label={item.label}
            onPress={handleMenuItemPress}
            textWeight={getTextWeight(item.variant)}
            accessibilityLabel={item.label}
          />
        ))}

        {/* Section 3: Chat History */}
        {filteredSections.map((section) => (
          <View key={section.key}>
            <Text style={styles.sectionHeader}>{section.label}</Text>
            {section.items.map((chat) => (
              <SidebarChatItem
                key={chat.id}
                title={chat.title}
                isActive={chat.id === FIRST_CHAT_ID}
                onPress={handleChatPress}
                accessibilityLabel={chat.title}
              />
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Fixed Footer */}
      <SidebarUserFooter
        name="Mateo Lorenzo"
        initials="ML"
        avatarColor="#7C3AED"
        onPress={handleSettingsPress}
        accessibilityLabel="Open settings"
      />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 12,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 8,
  },
  sectionSpacer: {
    height: 8,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.text.tertiary,
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
  },
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export default AuthSidebar;
