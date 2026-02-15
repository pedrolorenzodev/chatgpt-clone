/** Spacing tokens */
export const Spacing = {
  // Generic scale
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  xxxxl: 36,

  // Screen padding
  screenPaddingH: 24,
  loginPaddingH: 32,
  sidebarPaddingH: 16,
  bottomSheetPaddingH: 24,
  settingsScreenPaddingH: 16,
  chatPaddingH: 16,

  // Button / Input
  buttonPaddingV: 16,
  buttonGap: 12,
  inputPaddingH: 16,
  inputPaddingV: 16,
  iconTextGap: 16,
  iconTextGapButton: 10,

  // Chat-specific
  chatBubblePaddingH: 14,
  chatBubblePaddingV: 12,
  chatBubbleMarginRight: 16,
  chatActionBarGap: 16,
  chatActionBarMarginTop: 12,
  chatSuggestionGapH: 10,
  chatSuggestionGapV: 12,
  chatChipPaddingH: 10,
  chatChipIconGap: 6,
  chatChipInputGap: 8,
  chatPromptMarginBottom: 24,
  chatMediaBtnGap: 12,
  chatWarningPadding: 16,
  chatFeatureItemPaddingH: 24,
  chatFeatureItemPaddingV: 16,
  chatContextMenuItemHeight: 48,

  // Settings-specific
  settingsCardPaddingH: 16,
  settingsCardPaddingV: 14,
  settingsCardRadius: 16,
  settingsRowHeightSm: 52,
  settingsRowHeightMd: 64,
  settingsSectionGap: 24,
  settingsSectionHeaderMb: 10,
  settingsDescriptionMt: 12,

  // Modal / Dropdown
  modalPadding: 24,
  modalButtonGap: 24,
  modalOptionHeight: 48,
  modalOptionPaddingH: 16,
  dropdownItemHeight: 48,
  popupMarginH: 16,
  popupPadding: 16,

  // GroupChat / Profile
  memberRowHeight: 72,
  memberAvatarSize: 48,
  profileAvatarLg: 120,
  profileSectionPt: 24,
  gcButtonPaddingV: 10,
  gcButtonPaddingH: 20,
  gcButtonRadius: 20,
} as const;

export type SpacingType = typeof Spacing;
