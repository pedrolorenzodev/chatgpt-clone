/** Typography tokens — system fonts only (SF Pro on iOS, Roboto on Android) */
export const Typography = {
  // Headings
  headingXl: { fontSize: 36, fontWeight: '700' as const, lineHeight: 44, letterSpacing: -0.5 },
  headingLg: { fontSize: 26, fontWeight: '700' as const, lineHeight: 34, letterSpacing: -0.3 },
  headingMd: { fontSize: 24, fontWeight: '700' as const, lineHeight: 32 },
  headingChatPrompt: { fontSize: 28, fontWeight: '700' as const, lineHeight: 36, letterSpacing: -0.3 },
  headingTalking: { fontSize: 32, fontWeight: '600' as const, lineHeight: 40 },
  headingResponse: { fontSize: 18, fontWeight: '700' as const, lineHeight: 24 },
  headingModal: { fontSize: 22, fontWeight: '700' as const, lineHeight: 28 },
  headingModalSm: { fontSize: 20, fontWeight: '600' as const, lineHeight: 26 },

  // Body
  bodyLg: { fontSize: 17, fontWeight: '400' as const, lineHeight: 26 },
  bodyMd: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },
  bodySm: { fontSize: 15, fontWeight: '400' as const, lineHeight: 22 },
  bodyXs: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  bodyXxs: { fontSize: 13, fontWeight: '400' as const, lineHeight: 18 },

  // Labels
  labelBold: { fontSize: 17, fontWeight: '600' as const, lineHeight: 22 },
  labelMd: { fontSize: 16, fontWeight: '600' as const, lineHeight: 22 },
  labelSm: { fontSize: 16, fontWeight: '500' as const, lineHeight: 22 },
  labelChip: { fontSize: 14, fontWeight: '500' as const, lineHeight: 18 },
  labelModelOption: { fontSize: 17, fontWeight: '500' as const, lineHeight: 22 },
  labelActionButton: { fontSize: 15, fontWeight: '500' as const, lineHeight: 20 },

  // Input / Specialized
  inputText: { fontSize: 16, fontWeight: '400' as const, lineHeight: 22 },
  inputPlaceholder: { fontSize: 16, fontWeight: '400' as const, lineHeight: 22 },
  inputLabelFloat: { fontSize: 12, fontWeight: '400' as const, lineHeight: 16 },
  headerTitle: { fontSize: 19, fontWeight: '600' as const, lineHeight: 24 },
  headerButtonText: { fontSize: 16, fontWeight: '500' as const, lineHeight: 22 },
  sidebarUserName: { fontSize: 16, fontWeight: '500' as const, lineHeight: 22 },
  sidebarChatItem: { fontSize: 15, fontWeight: '400' as const, lineHeight: 20 },
  avatarInitials: { fontSize: 13, fontWeight: '600' as const, lineHeight: 13 },
  avatarInitialsMd: { fontSize: 18, fontWeight: '600' as const, lineHeight: 18 },
  avatarInitialsLg: { fontSize: 40, fontWeight: '600' as const, lineHeight: 40 },
  avatarInitialsProfile: { fontSize: 36, fontWeight: '600' as const, lineHeight: 42 },
  citationText: { fontSize: 12, fontWeight: '400' as const, lineHeight: 16 },
  timestamp: { fontSize: 13, fontWeight: '400' as const, lineHeight: 18 },

  // Settings-specific
  settingsSectionHeader: { fontSize: 14, fontWeight: '400' as const, lineHeight: 18 },
  settingsSectionHeaderCaps: { fontSize: 13, fontWeight: '400' as const, lineHeight: 18, letterSpacing: 1 },
  settingsRowStatus: { fontSize: 16, fontWeight: '400' as const, lineHeight: 22 },
  settingsProfileName: { fontSize: 24, fontWeight: '600' as const, lineHeight: 30 },
  settingsProfileHandle: { fontSize: 15, fontWeight: '400' as const, lineHeight: 20 },
  licenseTitle: { fontSize: 18, fontWeight: '700' as const, lineHeight: 24 },
  licenseVersion: { fontSize: 16, fontWeight: '400' as const, lineHeight: 22 },
  licenseAuthor: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  passkeyTitle: { fontSize: 22, fontWeight: '700' as const, lineHeight: 28 },
  passkeyDescription: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },

  // Table text (AI responses)
  tableHeader: { fontSize: 15, fontWeight: '700' as const, lineHeight: 20 },
  tableCell: { fontSize: 15, fontWeight: '400' as const, lineHeight: 20 },
} as const;

export type TypographyType = typeof Typography;
