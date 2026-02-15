/** Dimension tokens for component sizing */
export const Dimensions = {
  // Buttons
  buttonHeight: 52,
  buttonHeightWelcome: 56,
  buttonRadius: 26,
  buttonRadiusWelcome: 28,

  // Inputs
  inputHeight: 56,
  inputRadius: 8,
  inputBorderWidthDefault: 1,
  inputBorderWidthFocused: 2,
  chatInputHeight: 48,
  chatInputRadius: 24,
  chatInputExpandedMinH: 80,

  // Sidebar
  sidebarWidth: 0.8,
  searchInputHeight: 44,
  searchInputRadius: 22,
  sidebarMenuItemHeight: 48,
  sidebarChatItemHeight: 44,
  sidebarFooterHeight: 56,

  // Icons
  iconSizeSm: 16,
  iconSizeMd: 20,
  iconSizeLg: 24,
  iconSizeXl: 26,
  iconSizeXxl: 28,

  // Chat elements
  chatBubbleRadius: 20,
  chatBubbleMaxWidth: 0.75,
  chatPlusBtnSize: 44,
  chatSendBtnSize: 36,
  chatSendBtnRadius: 18,
  chatStopBtnRadius: 8,
  chatStopIconSize: 14,
  chatActionIconSize: 20,
  chatActionTouchSize: 36,
  chatSuggestionBtnHeight: 48,
  chatSuggestionBtnRadius: 24,
  chatSuggestionIconSize: 22,
  chatChipHeight: 32,
  chatChipRadius: 16,
  chatChipIconSize: 16,
  chatChipCloseSize: 14,
  chatContextMenuWidth: 240,
  chatContextMenuRadius: 16,
  chatMediaBtnHeight: 100,
  chatMediaBtnRadius: 16,
  chatLoadingCircleSize: 16,
  chatEditWarningRadius: 12,
  chatCitationChipHeight: 22,
  chatCitationChipRadius: 11,
  chatFaviconSize: 18,
  chatSourceFaviconOverlap: -6,
  chatFeatureItemHeight: 72,

  // Header elements
  headerHeight: 56,
  headerButtonSize: 44,
  iconButtonSize: 40,
  combinedPillHeight: 44,
  combinedPillRadius: 22,
  combinedPillPaddingH: 14,

  // Assets
  openaiLogoSize: 40,
  googleIconSize: 20,

  // Avatars
  avatarSizeSm: 32,
  avatarSizeMdSm: 36,
  avatarSizeMd: 48,
  avatarSizeLg: 96,
  avatarSizeXl: 120,

  // Modals / Sheets
  bottomSheetRadius: 20,
  modalRadius: 16,
  confirmationModalRadius: 28,
  modalWidthPct: 0.85,
  confirmationModalWidth: 0.8,
  modalWidthModel: 0.7,
  reportModalWidth: 0.9,
  dropdownRadius: 16,
  dropdownWidthPct: 0.55,
  dragHandleWidth: 36,
  dragHandleHeight: 4,

  // Settings elements
  toggleTrackWidth: 52,
  toggleTrackHeight: 32,
  toggleTrackRadius: 16,
  toggleThumbSize: 26,
  radioSize: 24,
  radioInnerDot: 10,
  radioBorderWidth: 2,
  settingsBackButtonSize: 48,
  settingsBackButtonRadius: 24,
  colorDotSize: 16,
  colorDotSmall: 10,
  editProfileBtnRadius: 20,
  passkeyIconSize: 48,
  spinnerSizeLg: 36,
  spinnerSizeSm: 16,
  countrySelectorWidth: 110,
  separatorHeight: 1,
  termsCardRadius: 16,

  // Talking Chat / GroupChat
  talkingInputWidth: 0.4,
  endButtonWidth: 90,
  groupchatButtonWidth: 220,
  groupchatButtonHeight: 48,
  groupchatHeaderAvatar: 36,
  profileRowHeight: 72,
  profileRowRadius: 16,
  manageLinkActionHeight: 56,
  cameraOverlaySize: 36,
  feedbackTextareaHeight: 160,
  reportTextareaHeight: 120,
} as const;

export type DimensionsType = typeof Dimensions;
