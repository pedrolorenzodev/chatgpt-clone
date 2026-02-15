# Skills Manifest

This document is a consolidated manifest of agent skills relevant to the ChatGPT mobile clone project. Skills are reusable instruction sets (SKILL.md files) that extend the capabilities of AI coding agents by providing domain-specific best practices, patterns, and guidelines. They are installed via the `npx skills add` CLI and injected into the agent's context automatically.

This manifest was compiled on 2026-02-15 by surveying the [skills.sh](https://skills.sh) directory for skills relevant to the project's stack: React Native, Expo, TypeScript, Zustand, react-native-reanimated, and related technologies.

---

## Skills Discovery Results

The following `npx skills find` queries were evaluated. Since `npx skills find` requires an interactive terminal with fzf-style selection, the equivalent discovery was performed by searching the [skills.sh](https://skills.sh) directory and the repositories of known skill providers (expo/skills, vercel-labs/agent-skills, callstackincubator/agent-skills, wshobson/agents, jezweb/claude-skills).

| Query | Relevant Skills Found |
|---|---|
| `react-native expo` | callstackincubator: react-native-best-practices, vercel-labs: vercel-react-native-skills, expo: building-native-ui |
| `react-native animations reanimated` | expo: building-native-ui (covers Reanimated entering/exiting/layout/scroll-driven/gestures), vercel-labs: vercel-react-native-skills (covers GPU-accelerated animations) |
| `react-native styling` | expo: building-native-ui (covers styling, safe areas, flexbox), vercel-labs: vercel-react-native-skills (covers UI patterns, pressable components, styling approaches) |
| `typescript strict` | wshobson: typescript-advanced-types |
| `pixel-perfect ui` | No dedicated skill found. Covered partially by expo: building-native-ui and vercel-labs: vercel-react-native-skills |
| `react-native components` | expo: building-native-ui (covers native controls, navigation, components), vercel-labs: vercel-react-native-skills (covers list performance, UI patterns) |

---

## Skills Table

| # | Skill Name | Description | Install Command | Relevant Waves/Tasks | Priority |
|---|---|---|---|---|---|
| 1 | **react-native-best-practices** (callstackincubator) | Performance optimization guide covering JS/React, Native (iOS/Android), and bundling. Includes virtualized lists, Reanimated animations, atomic state management with Zustand, TextInput optimization, barrel import avoidance, and Hermes configuration. Based on Callstack's "Ultimate Guide to RN Optimization." | `npx skills add https://github.com/callstackincubator/agent-skills --skill react-native-best-practices -g -y` | All waves (1-7). Core performance patterns apply to every component and screen. | **Required** |
| 2 | **vercel-react-native-skills** (vercel-labs) | Comprehensive RN + Expo best practices across 8 priority-ranked categories: list performance (CRITICAL), animation with Reanimated + derived values + gestures (HIGH), native stack/tab navigation (HIGH), UI patterns including Pressable/safe-areas/modals/styling (HIGH), state management with subscription minimization (MEDIUM), rendering patterns (MEDIUM), monorepo structure (MEDIUM), configuration (LOW). | `npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills -g -y` | All waves (1-7). Especially Wave 2 (shared components), Wave 4 (chat with FlashList), Wave 5 (animations, bottom sheets), Wave 6 (complex interactions). | **Required** |
| 3 | **building-native-ui** (expo) | Complete guide for building apps with Expo Router. Covers fundamentals, styling, components, navigation (stacks, modals, sheets), Reanimated animations (entering/exiting/layout/scroll-driven/gestures), responsive design (ScrollView, safe areas, flexbox), haptics, and text formatting. References Apple HIG. | `npx skills add https://github.com/expo/skills --skill building-native-ui -g -y` | Wave 1 (navigation skeleton), Wave 2 (all component batches), Wave 3-4 (screen layouts), Wave 5 (animations, bottom sheets). | **Required** |
| 4 | **zustand-state-management** (jezweb) | Zustand-specific patterns, best practices, and 6 critical issue preventions: hydration mismatches, TypeScript double-parentheses `create<T>()()` syntax, import paths for middleware, infinite render loops with `useShallow`, TypeScript slices complexity, and race conditions. Covers persist middleware, selectors, and devtools. Targets Zustand v5.0.10+. | `npx skills add https://github.com/jezweb/claude-skills --skill zustand-state-management -g -y` | Wave 1 (Task 1.4: Zustand stores), Wave 3-6 (any screen consuming stores). | **Required** |
| 5 | **typescript-advanced-types** (wshobson) | Mastering TypeScript's advanced type system: generics with constraints, conditional types, mapped types, template literal types, utility types, discriminated unions for state machines, branded types, type guards, assertion functions. Covers builder patterns, type-safe event emitters, and API clients. | `npx skills add https://github.com/wshobson/agents --skill typescript-advanced-types -g -y` | Wave 1 (Task 1.2: type definitions with branded IDs, discriminated unions), Wave 7 (TypeScript audit). | **Recommended** |
| 6 | **react-state-management** (wshobson) | Modern React state management patterns: local state, global state, server state, URL state, form state. Covers Redux Toolkit, Zustand with slices, Jotai, React Query. Includes migration guides and combined client+server state approaches. | `npx skills add https://github.com/wshobson/agents --skill react-state-management -g -y` | Wave 1 (Task 1.4: stores), Wave 4-6 (screen state integration). | **Optional** |
| 7 | **code-review-excellence** (wshobson) | Transforms code reviews into knowledge sharing. Systematic 4-phase review process: context gathering, high-level review, line-by-line review, summary/decision. Includes language-specific patterns for TypeScript/JavaScript, security checklists, test quality assessment, and severity labeling. | `npx skills add https://github.com/wshobson/agents --skill code-review-excellence -g -y` | All waves -- used by the Code Reviewer agent in the review cycle (RN Coder -> Code Reviewer -> RN Coder -> Code Reviewer). | **Recommended** |
| 8 | **expo-tailwind-setup** (expo) | Set up Tailwind CSS v4 in Expo with NativeWind v5 for universal styling. | `npx skills add https://github.com/expo/skills --skill expo-tailwind-setup -g -y` | Not applicable. The project uses StyleSheet.create() exclusively per CLAUDE.md. NativeWind is listed in the stack overview but all styles must use StyleSheet. | **Not needed** |

---

## Per-Wave Skills Section

### Wave 1: Foundation (Types, Tokens, Stores, Navigation Skeleton)

**Tasks:** 1.1-1.7 (Project setup, type definitions, mock data, Zustand stores, utility hooks, navigation skeleton, sidebar shell)

**Install before starting:**
```bash
# Required
npx skills add https://github.com/callstackincubator/agent-skills --skill react-native-best-practices -g -y
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills -g -y
npx skills add https://github.com/expo/skills --skill building-native-ui -g -y
npx skills add https://github.com/jezweb/claude-skills --skill zustand-state-management -g -y

# Recommended
npx skills add https://github.com/wshobson/agents --skill typescript-advanced-types -g -y
```

**Why these skills:**
- `react-native-best-practices`: Barrel import avoidance (aligns with CLAUDE.md no-barrel rule), Hermes config, bundling setup.
- `vercel-react-native-skills`: Navigation patterns (native stack preference), state management subscription patterns.
- `building-native-ui`: Expo Router layout conventions, navigation architecture (stacks, modals, sheets).
- `zustand-state-management`: Critical for Task 1.4. Correct `create<T>()()` TypeScript syntax, selector patterns, middleware setup.
- `typescript-advanced-types`: Critical for Task 1.2. Branded type patterns (`UserId`, `ChatId`, `MessageId`), discriminated unions for state machines, type guards.

---

### Wave 2: Shared Components (10 batches, all parallel)

**Tasks:** 2.1-2.10 (Buttons, inputs, auth components, avatars, settings, chat header/input, chat content, sidebar, modals)

**Install before starting:**
```bash
# Required (should already be installed from Wave 1)
npx skills add https://github.com/callstackincubator/agent-skills --skill react-native-best-practices -g -y
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills -g -y
npx skills add https://github.com/expo/skills --skill building-native-ui -g -y
```

**Why these skills:**
- `react-native-best-practices`: Reanimated animation patterns (Tasks 2.2, 2.6, 2.7, 2.8), TextInput optimization (Task 2.2), memoization patterns.
- `vercel-react-native-skills`: Pressable component patterns (all tasks), GPU-accelerated animation properties, styling approaches, safe area handling.
- `building-native-ui`: Component patterns, native controls (switch/toggle in Task 2.6), Reanimated entering/exiting animations (Tasks 2.7, 2.8), modal/sheet presentation, visual effects.

---

### Wave 3: Static Screens (8 tasks, all parallel)

**Tasks:** 3.1-3.8 (Welcome, login, loading, settings main, about, licenses, settings sub-screens, auth bottom sheet)

**Install before starting:**
```bash
# Required (should already be installed)
npx skills add https://github.com/callstackincubator/agent-skills --skill react-native-best-practices -g -y
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills -g -y
npx skills add https://github.com/expo/skills --skill building-native-ui -g -y
npx skills add https://github.com/jezweb/claude-skills --skill zustand-state-management -g -y
```

**Why these skills:**
- `building-native-ui`: Screen layout with Expo Router, safe area integration, ScrollView patterns, bottom sheet presentation (Task 3.8).
- `vercel-react-native-skills`: List performance for licenses screen (Task 3.6), UI patterns for settings cards.
- `zustand-state-management`: Selector usage for reading auth/settings store state across all screens.

---

### Wave 4: Core Screens (6 tasks, partial dependencies)

**Tasks:** 4.1-4.6 (Chat empty state, messages state, feature modes, sidebar panel, context menu/edit, auth variants)

**Install before starting:**
```bash
# Required (should already be installed)
npx skills add https://github.com/callstackincubator/agent-skills --skill react-native-best-practices -g -y
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills -g -y
npx skills add https://github.com/expo/skills --skill building-native-ui -g -y
npx skills add https://github.com/jezweb/claude-skills --skill zustand-state-management -g -y
```

**Why these skills:**
- `react-native-best-practices`: FlashList virtualization (Tasks 4.2, 4.4 -- CRITICAL priority), memoization of message components, concurrent React patterns.
- `vercel-react-native-skills`: List performance rules for MessageList and SidebarChatHistory, animation rules for chip enter/exit, gesture-based interactions.
- `zustand-state-management`: Store consumption patterns across chat, sidebar, and auth stores. Selector optimization to prevent unnecessary re-renders.

---

### Wave 5: Interactive Features (7 tasks, mostly parallel)

**Tasks:** 5.1-5.7 (Attachments bottom sheet, model selector, sources bottom sheet, settings modals, action bar modals, talking chat, streaming text)

**Install before starting:**
```bash
# Required (should already be installed)
npx skills add https://github.com/callstackincubator/agent-skills --skill react-native-best-practices -g -y
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills -g -y
npx skills add https://github.com/expo/skills --skill building-native-ui -g -y
npx skills add https://github.com/jezweb/claude-skills --skill zustand-state-management -g -y
```

**Why these skills:**
- `react-native-best-practices`: Reanimated worklet patterns for streaming animation (Task 5.7), spring config for talking chat transitions (Task 5.6), performance-critical animation on UI thread.
- `vercel-react-native-skills`: GPU-accelerated animation properties, derived values with Reanimated, gesture-based bottom sheet interactions, modal presentation patterns.
- `building-native-ui`: Bottom sheet patterns (Tasks 5.1, 5.3), modal presentation, Reanimated animation references for entering/exiting/layout transitions, visual effects.

---

### Wave 6: Complex Flows (5 tasks, partial dependencies)

**Tasks:** 6.1-6.5 (GroupChat bottom sheet, GroupChat management, profile sheets, confirmation/report flows, GroupChat messages)

**Install before starting:**
```bash
# Required (should already be installed)
npx skills add https://github.com/callstackincubator/agent-skills --skill react-native-best-practices -g -y
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills -g -y
npx skills add https://github.com/expo/skills --skill building-native-ui -g -y
npx skills add https://github.com/jezweb/claude-skills --skill zustand-state-management -g -y
```

**Why these skills:**
- `react-native-best-practices`: Complex state management patterns for multi-step flows (report modal 3-step, confirmation chains), FlashList for member lists.
- `vercel-react-native-skills`: List performance for GroupChat messages (Task 6.5), UI patterns for bottom sheets and modals.
- `zustand-state-management`: Managing GroupChat state transitions, combining multiple store slices.

---

### Wave 7: Polish Pass (1 task)

**Tasks:** 7.1 (UI Polish + TypeScript Audit)

**Install before starting:**
```bash
# Required (should already be installed)
npx skills add https://github.com/callstackincubator/agent-skills --skill react-native-best-practices -g -y
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills -g -y

# Recommended
npx skills add https://github.com/wshobson/agents --skill typescript-advanced-types -g -y
npx skills add https://github.com/wshobson/agents --skill code-review-excellence -g -y
```

**Why these skills:**
- `react-native-best-practices`: Performance audit checklist, bundle analysis, FPS monitoring patterns.
- `vercel-react-native-skills`: UI pattern validation, animation correctness, list performance verification.
- `typescript-advanced-types`: TypeScript audit -- verifying branded types, generics, strict mode compliance, no `any` types.
- `code-review-excellence`: Systematic review process for the UI Polisher and TypeScript Specialist agents during the final audit.

---

## Installation Instructions

### For Individual Agents

Each agent (RN Coder, Code Reviewer, UI Polisher, TypeScript Specialist) should install the relevant skills before beginning their assigned tasks. Skills are installed globally (`-g` flag) so they persist across agent sessions.

**One-time setup (install all required skills):**

```bash
# Install all 4 required skills globally
npx skills add https://github.com/callstackincubator/agent-skills --skill react-native-best-practices -g -y
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills -g -y
npx skills add https://github.com/expo/skills --skill building-native-ui -g -y
npx skills add https://github.com/jezweb/claude-skills --skill zustand-state-management -g -y
```

**Install recommended skills:**

```bash
npx skills add https://github.com/wshobson/agents --skill typescript-advanced-types -g -y
npx skills add https://github.com/wshobson/agents --skill code-review-excellence -g -y
npx skills add https://github.com/wshobson/agents --skill react-state-management -g -y
```

### Per-Agent Recommendations

| Agent Role | Required Skills | Recommended Skills |
|---|---|---|
| **RN Coder** | react-native-best-practices, vercel-react-native-skills, building-native-ui, zustand-state-management | typescript-advanced-types |
| **Code Reviewer** | react-native-best-practices, vercel-react-native-skills | code-review-excellence, typescript-advanced-types |
| **UI Polisher** | react-native-best-practices, vercel-react-native-skills, building-native-ui | — |
| **TypeScript Specialist** | typescript-advanced-types | react-native-best-practices |

### Verification

After installing skills, verify they are active by checking for SKILL.md files in your global skills directory:

```bash
# Skills are typically installed to ~/.skills/ or the project's .skills/ directory
ls ~/.skills/
```

### Notes

1. The `-g` flag installs skills globally (user directory) rather than project-local. This is recommended so skills persist across agent sessions and branches.
2. The `-y` flag skips confirmation prompts for non-interactive (CI/CD or agent) usage.
3. Skills do not modify project source code. They only provide contextual instructions to the AI agent.
4. If a skill conflicts with project-specific rules in CLAUDE.md, the CLAUDE.md rules take precedence. For example, the `expo-tailwind-setup` skill recommends NativeWind/Tailwind, but this project mandates `StyleSheet.create()` exclusively.
5. Skills are cached after installation. Re-running the install command will update to the latest version if available.

---

## Skills Not Included (and Why)

| Skill | Reason for Exclusion |
|---|---|
| expo-tailwind-setup | Project uses StyleSheet.create() exclusively per CLAUDE.md. NativeWind/Tailwind is explicitly prohibited. |
| expo-deployment | Project is a local development clone, no deployment to app stores needed. |
| expo-dev-client | Project uses Expo Go / managed workflow. No custom native modules requiring a dev client. |
| expo-api-routes | Project has no backend or API routes. All data is hardcoded mock data. |
| expo-cicd-workflows | No CI/CD pipeline needed for this visual clone project. |
| native-data-fetching | No network requests. All data is hardcoded in /src/constants/mock-data/. |
| upgrading-expo | Project starts fresh with a specific Expo SDK version. No upgrade path needed. |
| use-dom | Project targets native only (Android first, iOS later). No web/DOM components. |
| vercel-react-best-practices | Optimized for React web (Next.js). Not directly applicable to React Native. |

---

## Sources

- [skills.sh -- The Agent Skills Directory](https://skills.sh)
- [vercel-labs/skills -- GitHub](https://github.com/vercel-labs/skills)
- [expo/skills on skills.sh](https://skills.sh/expo/skills)
- [callstackincubator/agent-skills -- react-native-best-practices](https://skills.sh/callstackincubator/agent-skills/react-native-best-practices)
- [vercel-labs/agent-skills -- vercel-react-native-skills](https://skills.sh/vercel-labs/agent-skills/vercel-react-native-skills)
- [expo/skills -- building-native-ui](https://skills.sh/expo/skills/building-native-ui)
- [jezweb/claude-skills -- zustand-state-management](https://skills.sh/jezweb/claude-skills/zustand-state-management)
- [wshobson/agents -- typescript-advanced-types](https://skills.sh/wshobson/agents/typescript-advanced-types)
- [wshobson/agents -- react-state-management](https://skills.sh/wshobson/agents/react-state-management)
- [wshobson/agents -- code-review-excellence](https://skills.sh/wshobson/agents/code-review-excellence)
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills)
