# CLAUDE.md — ChatGPT Mobile Clone Project

## Project Context

Pixel-perfect visual clone of the ChatGPT mobile app. NO backend — all data is hardcoded.
The ONLY goal is absolute visual fidelity. Android first, iOS refinement later.

## Source of Truth

- Screenshots: /references/[feature]/\*.png
- Navigation & behavior: /references/[feature]/flow.md
- UI specs: /specs/[feature]/\*-spec.md
- Design tokens: /specs/design-tokens.md
- Reusable components: /specs/components-inventory.md
- Implementation plan: /specs/implementation-plan/

ALWAYS read the relevant spec and flow.md BEFORE writing code for any screen.

## Stack (non-negotiable)

- React Native + Expo (managed workflow)
- TypeScript (strict mode)
- expo-router (file-based routing)
- StyleSheet.create() (ALL styles, no exceptions)
- Zustand (global state)
- react-native-reanimated 3 (animations)
- react-native-gesture-handler (gestures)
- Pressable (all interactive elements, never TouchableOpacity)
- FlashList (lists, never FlatList)
- expo-image (never RN Image)
- lucide-react-native (icons, never @expo/vector-icons)
- react-native-mmkv (local storage)
- @gorhom/bottom-sheet (bottom sheets)

## File Structure

### Routes (expo-router)

- app/ contains route files and \_layout.tsx files only
- Route files in app/ only re-export from @/src/screens/ (no logic)
- \_layout.tsx files have their own content (navigation config)
- Example: app/auth/sign-in.tsx → export { default } from '@/src/screens/auth/sign-in'

### Screens

- Real content in: src/screens/[feature]/[screen-name]/index.tsx
- Optional sibling folders inside screen:
  - interfaces/ — types and interfaces for this screen
  - components/ — components exclusive to this screen
  - constants/ — local constants

### Shared Components

- src/components/[ComponentName]/index.tsx

### Other

- src/hooks/ — custom hooks
- src/stores/ — Zustand stores
- src/types/ — TypeScript type definitions, organized by domain
- src/constants/ — global constants (mock data, config)
- src/utils/ — utility functions

## Naming Conventions

- Files and folders in app/ → kebab-case (sign-in.tsx, forgot-password.tsx)
- Folders in src/screens/ → kebab-case (matches route in app/)
- Component files (.tsx) → PascalCase (LoginForm.tsx)
- Type files → domain.types.ts (chat.types.ts, auth.types.ts)
- Store files → domain.store.ts (chat.store.ts, auth.store.ts)

## Imports

- Always use path alias: @/src/...
  Examples: @/src/components, @/src/hooks, @/src/stores, @/src/types, @/src/constants, @/src/utils, @/src/screens
- NO barrel exports. Import each component from its own folder:
  ✅ import { Button } from '@/src/components/Button'
  ❌ import { Button, Text } from '@/src/components'

## Code Rules

- Never use 'any' — use 'unknown' with type guards or proper generics
- Max 250 lines per file — split if larger
- Every component in its own file, single responsibility
- File internal order: imports → types/interfaces → component → styles → export default
- Export default always at the bottom, after styles

## Styling Rules

- ALWAYS use StyleSheet.create() — no exceptions
- NEVER use inline styles — not even for dynamic values
- For dynamic values: use multiple StyleSheet definitions or computed style objects via StyleSheet.flatten()
- All style objects must be defined outside the component in StyleSheet.create()

## Interactive Elements

- ALWAYS use Pressable, never TouchableOpacity
- Configure press feedback manually on each Pressable (opacity, scale, etc.) to match ChatGPT's exact behavior per the spec

## Animation Rules

- Always use react-native-reanimated 3, never RN Animated API
- Easing curves: never linear (use Easing.bezier or spring configs)
- Durations: follow the spec and flow.md for each specific animation. No hardcoded global limit
- Animations must run on UI thread (worklets)

## TypeScript Rules

- Strict mode always
- Type all function parameters and return values
- Interfaces for all component props
- Type useState generics when type can't be inferred
- Branded types for IDs: UserId, ChatId, MessageId
- All mock data fully typed with explicit interfaces

## Accessibility

- accessibilityLabel on all interactive elements
- accessibilityRole appropriate for each element

## Development Cycle

For every screen/feature:

1. Read spec + flow.md
2. RN Coder implements
3. Code Reviewer reviews
4. RN Coder fixes
5. Code Reviewer approves
6. UI Polisher compares against reference screenshot
7. TypeScript Specialist audits types
