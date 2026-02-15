/**
 * useTheme — Thin wrapper that returns all design tokens.
 *
 * Currently just re-exports static constants (dark mode only).
 * Exists as a hook for future extensibility (e.g., runtime theme switching).
 */

import {
  Colors,
  Typography,
  Spacing,
  Dimensions,
  Animations,
  Press,
} from '@/src/constants/design-tokens';

interface ThemeTokens {
  Colors: typeof Colors;
  Typography: typeof Typography;
  Spacing: typeof Spacing;
  Dimensions: typeof Dimensions;
  Animations: typeof Animations;
  Press: typeof Press;
}

export function useTheme(): ThemeTokens {
  return {
    Colors,
    Typography,
    Spacing,
    Dimensions,
    Animations,
    Press,
  };
}
