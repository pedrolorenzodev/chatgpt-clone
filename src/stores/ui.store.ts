/**
 * UI store — manages active modals, bottom sheets, and global UI state
 *
 * Prevents multiple overlays from being open simultaneously.
 */

import { create } from 'zustand';

interface UIState {
  /** Currently active modal ID (null if none open) */
  activeModal: string | null;
  /** Currently active bottom sheet ID (null if none open) */
  activeBottomSheet: string | null;
  /** Current keyboard height in pixels */
  keyboardHeight: number;
}

interface UIActions {
  /** Show a modal by ID (closes any existing modal) */
  showModal: (modalId: string) => void;
  /** Hide the active modal */
  hideModal: () => void;
  /** Show a bottom sheet by ID (closes any existing sheet) */
  showBottomSheet: (sheetId: string) => void;
  /** Hide the active bottom sheet */
  hideBottomSheet: () => void;
  /** Update keyboard height */
  setKeyboardHeight: (height: number) => void;
}

type UIStore = UIState & UIActions;

export const useUIStore = create<UIStore>()((set) => ({
  // State
  activeModal: null,
  activeBottomSheet: null,
  keyboardHeight: 0,

  // Actions
  showModal: (modalId: string) => set({ activeModal: modalId }),

  hideModal: () => set({ activeModal: null }),

  showBottomSheet: (sheetId: string) => set({ activeBottomSheet: sheetId }),

  hideBottomSheet: () => set({ activeBottomSheet: null }),

  setKeyboardHeight: (height: number) => set({ keyboardHeight: height }),
}));
