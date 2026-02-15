import { Easing } from 'react-native-reanimated';

/** Animation duration tokens (milliseconds) */
export const Animations = {
  durationInstant: 0,
  durationPress: 100,
  durationFast: 150,
  durationFloatLabel: 200,
  durationContextMenu: 200,
  durationChipEnter: 250,
  durationChipExit: 200,
  durationNormal: 300,
  durationTalkingTransition: 400,
  durationFadeOut: 500,
  durationSpinnerRotation: 1000,
  durationLoadingPulse: 1200,
  durationShimmerSweep: 1500,
  durationTalkingLoading: 2000,
  durationLoadingButton: 2000,
  durationLoading: 3000,
} as const;

/** Easing curve tokens */
export const Easings = {
  standard: Easing.bezier(0.4, 0.0, 0.2, 1.0),
  decelerate: Easing.out(Easing.ease),
  premium: Easing.bezier(0.25, 0.1, 0.25, 1.0),
  linear: Easing.linear,
} as const;

/** Spring configuration tokens */
export const Springs = {
  sidebar: { damping: 20, stiffness: 200 },
  modal: { damping: 20, stiffness: 250 },
  inputContraction: { damping: 25, stiffness: 150 },
} as const;

/** Pulse / Scale animation tokens */
export const PulseScale = {
  loadingPulseScaleMin: 0.8,
  loadingPulseScaleMax: 1.2,
} as const;

/** Opacity / Press state tokens */
export const Press = {
  opacityButton: 0.85,
  opacityIcon: 0.7,
  opacityLink: 0.7,
  scaleButton: 0.98,
} as const;

/** Shadow tokens */
export const Shadows = {
  none: {},
  bottomSheet: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 24,
  },
  modal: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 16,
  },
  confirmation: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 32,
    elevation: 24,
  },
  dropdown: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 16,
  },
} as const;

export type AnimationsType = typeof Animations;
export type PressType = typeof Press;
