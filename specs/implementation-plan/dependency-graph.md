# Dependency Graph

Text-based graph showing task dependencies. Tasks within the same wave can be executed in parallel unless explicitly noted.

---

## Legend

```
[X.Y] = Task X.Y
  -->  = "depends on" (right side depends on left side)
  |    = parallel execution possible
```

---

## Full Dependency Graph

```
WAVE 1 (Sequential)
=====================

[1.1] Project Setup + Design Tokens
  |
  v
[1.2] Type Definitions
  |
  v
[1.3] Mock Data  <----  [1.2]
  |
  v
[1.4] Zustand Stores  <----  [1.2] + [1.3]
  |
  |   [1.5] Utility Hooks  <----  [1.1]  (parallel with 1.2-1.4)
  |
  v
[1.6] Navigation Skeleton  <----  [1.1]  (parallel with 1.2-1.5)
  |
  v
[1.7] Sidebar Shell  <----  [1.1] + [1.4] + [1.5]


WAVE 2 (All Parallel -- each depends only on Wave 1)
=====================================================

All of these can run simultaneously:

[2.1] Button Components         <----  Wave 1
[2.2] Input Components          <----  Wave 1
[2.3] Auth-Specific Components  <----  Wave 1
[2.4] Avatar + Profile Comp.    <----  Wave 1
[2.5] Settings Components P1    <----  Wave 1 + [2.1]*
[2.6] Settings Components P2    <----  Wave 1
[2.7] Chat Header + Input       <----  Wave 1 + [2.1]*
[2.8] Chat Content Components   <----  Wave 1 + [2.1]*
[2.9] Sidebar Components        <----  Wave 1 + [2.4]*
[2.10] Modal + Overlay Comp.    <----  Wave 1 + [2.1]*

* Soft dependencies: these tasks reference components from [2.1] or [2.4]
  but can be developed with stubs/mocks if needed.


WAVE 3 (All Parallel -- each depends on Wave 1 + Wave 2)
=========================================================

[3.1] Welcome Screen           <----  [2.1] + [2.3]
[3.2] Login Screen              <----  [2.1] + [2.2] + [2.3]
[3.3] Auth Loading Transition   <----  [2.3]
[3.4] Settings Main Screen      <----  [2.4] + [2.5] + [2.6]
[3.5] About Screen              <----  [2.5]
[3.6] Licenses Screen           <----  [2.10]
[3.7] Settings Sub-Screens      <----  [2.5] + [2.6] + [2.10]
[3.8] Auth Bottom Sheet         <----  [2.1]


WAVE 4 (All Parallel -- each depends on Wave 2 + Wave 3 as noted)
===================================================================

[4.1] Chat Empty State          <----  [2.7] + [2.8]
[4.2] Chat Messages State       <----  [2.7] + [2.8] + [4.1]
[4.3] Chat Feature Modes        <----  [2.7] + [2.8] + [4.1]
[4.4] Sidebar Panel Content     <----  [2.9] + [1.7]
[4.5] Context Menu + Edit Mode  <----  [2.10] + [4.2]
[4.6] Chat Auth Variants        <----  [2.7] + [4.1] + [4.2]

Note: [4.2] depends on [4.1], [4.5] depends on [4.2], [4.6] depends on [4.1]+[4.2]
      [4.3] and [4.4] are fully independent of [4.2/4.5/4.6]


WAVE 5 (Mostly Parallel)
==========================

[5.1] Attachments BottomSheet   <----  Wave 4 (chat screen)
[5.2] Model Selector Modal      <----  [5.1]
[5.3] Sources BottomSheet       <----  Wave 4 (chat screen)
[5.4] Settings Modals           <----  Wave 3 (settings screens) + [2.6]
[5.5] Action Bar Modals         <----  Wave 4 (chat screen) + [2.10]
[5.6] Talking Chat State        <----  Wave 4 (chat screen) + [2.7]
[5.7] Streaming Text Animation  <----  Wave 4 (chat messages) + [2.8]

Note: [5.2] depends on [5.1]. All others are independent.


WAVE 6 (Mostly Parallel)
==========================

[6.1] GroupChat BottomSheet     <----  Wave 4 (chat auth) + [2.4]
[6.2] GroupChat Management      <----  [6.1] + [2.10]
[6.3] Profile BottomSheets      <----  [2.4] + [2.2]
[6.4] Confirmation + Report     <----  [6.2] + [6.3] + [2.10]
[6.5] GroupChat Messages        <----  [6.1] + Wave 4 (messages)

Note: [6.2] depends on [6.1]. [6.4] depends on [6.2] + [6.3].
      [6.3] and [6.5] are independent.


WAVE 7 (Sequential -- Final)
==============================

[7.1] UI Polish + TS Audit      <----  ALL previous waves
```

---

## Critical Path

The longest dependency chain (critical path) determines the minimum number of sequential steps:

```
[1.1] --> [1.2] --> [1.3] --> [1.4] --> [1.7]
  --> [2.7] --> [4.1] --> [4.2] --> [4.5]
  --> [5.5] --> [6.1] --> [6.2] --> [6.4]
  --> [7.1]

Total: 14 sequential steps (across 7 waves)
```

With full parallelization within waves, the effective sequential depth is:

```
Wave 1: 7 tasks (sequential)
Wave 2: 1 step (all 10 parallel)
Wave 3: 1 step (all 8 parallel)
Wave 4: 2 steps (4.1 first, then 4.2/4.5/4.6 in parallel)
Wave 5: 2 steps (5.1 first, then 5.2 parallel with others)
Wave 6: 3 steps (6.1, then 6.2/6.3, then 6.4)
Wave 7: 1 step
---
Total sequential depth: ~17 steps
```

---

## Per-Wave Dependency Summary

| Wave | Internal Dependencies | External Dependencies |
|---|---|---|
| 1 | Sequential (1.1 -> 1.2 -> 1.3 -> 1.4 -> 1.7) | None |
| 2 | None (all parallel) | Wave 1 complete |
| 3 | None (all parallel) | Wave 2 complete |
| 4 | 4.2 needs 4.1; 4.5 needs 4.2; 4.6 needs 4.1+4.2 | Wave 2 + Wave 3 (partial) |
| 5 | 5.2 needs 5.1 | Wave 4 (partial) |
| 6 | 6.2 needs 6.1; 6.4 needs 6.2+6.3 | Wave 4 + Wave 5 (partial) |
| 7 | N/A | All waves complete |
