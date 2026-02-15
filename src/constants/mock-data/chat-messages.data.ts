/**
 * Mock chat message data — suggestions, messages, citations, context menu
 */

import type {
  ChatMessage,
  SuggestionItem,
  Citation,
  Source,
  FeatureItem,
} from '@/src/types/chat.types';
import { createMessageId } from '@/src/types/common.types';

/** Suggestion buttons on empty chat screen (unauth) */
export const MOCK_SUGGESTIONS_UNAUTH: SuggestionItem[] = [
  { icon: 'Lightbulb', iconColor: '#F5C542', label: 'Brainstorm' },
  { icon: 'Gem', iconColor: '#5BC5C9', label: 'Get advice' },
  { icon: 'Code', iconColor: '#8B7BF7', label: 'Code' },
  { icon: 'FileText', iconColor: '#E8875B', label: 'Summarize text' },
];

/** Suggestion buttons on empty chat screen (auth) */
export const MOCK_SUGGESTIONS_AUTH: SuggestionItem[] = [
  { icon: 'Image', iconColor: '#4ADE80', label: 'Create image' },
  { icon: 'Lightbulb', iconColor: '#F5C542', label: 'Brainstorm' },
  { icon: 'Pencil', iconColor: '#C084FC', label: 'Help me write' },
  { icon: 'Gem', iconColor: '#5BC5C9', label: 'Get advice' },
];

/** Expanded suggestion items (tapped "Code" category) */
export const MOCK_EXPANDED_SUGGESTIONS: SuggestionItem[] = [
  { icon: 'Code', iconColor: '#8B7BF7', label: 'Help me debug my code' },
  { icon: 'Code', iconColor: '#8B7BF7', label: 'Help me write a function' },
  { icon: 'Code', iconColor: '#8B7BF7', label: 'Help me simplify my code' },
  { icon: 'Code', iconColor: '#8B7BF7', label: 'Help me learn Python' },
];

/** Search mode trending topics */
export const MOCK_SEARCH_TRENDING: SuggestionItem[] = [
  { icon: 'TrendingUp', iconColor: '#5B9DED', label: 'Savannah Guthrie' },
  { icon: 'TrendingUp', iconColor: '#5B9DED', label: "savannah guthrie's mother missing" },
  { icon: 'TrendingUp', iconColor: '#5B9DED', label: 'nancy guthrie' },
  { icon: 'TrendingUp', iconColor: '#5B9DED', label: 'westminster dog show 2026' },
];

/** Study mode suggestion items */
export const MOCK_STUDY_ACTIVITIES: SuggestionItem[] = [
  { icon: 'Pencil', iconColor: '#F5C542', label: 'Help me with my homework' },
  { icon: 'MessageCircle', iconColor: '#F5C542', label: 'Explain a topic to me' },
  { icon: 'SlidersHorizontal', iconColor: '#F5C542', label: 'Create a practice quiz' },
];

/** Sample user message */
export const MOCK_USER_MESSAGE: ChatMessage = {
  id: createMessageId('msg-1'),
  role: 'user',
  content: 'Cuales son las palabras mas repetidas por Milei en un discurso?',
  timestamp: '2026-02-04T15:12:10.000Z',
};

/** Sample AI response (normal mode) */
export const MOCK_AI_RESPONSE_NORMAL: ChatMessage = {
  id: createMessageId('msg-2'),
  role: 'assistant',
  content: `Javier Milei suele repetir ciertas palabras y frases clave en sus discursos. Las más frecuentes incluyen:

**Libertad** — Es el concepto central de su ideología. Lo menciona decenas de veces en cada discurso importante.

**Casta** — Término que utiliza para referirse a la clase política tradicional que, según él, ha llevado al país a la decadencia.

**Estado** — Generalmente en contexto negativo, asociándolo con ineficiencia, corrupción y gasto excesivo.

**Viva la libertad, carajo** — Su frase de cierre más icónica, que se ha convertido en un lema de su movimiento político.

Estas palabras reflejan los pilares de su discurso: libertarismo económico, crítica al establishment político, y un llamado constante a reducir el tamaño del Estado.`,
  timestamp: '2026-02-04T15:12:25.000Z',
};

/** Sample AI response (search mode with citations) */
export const MOCK_AI_RESPONSE_SEARCH: ChatMessage = {
  id: createMessageId('msg-3'),
  role: 'assistant',
  content: `## 🗣️ Palabras más repetidas por Milei

Según un análisis de sus discursos más recientes, las palabras más utilizadas por Javier Milei son:

| Palabra | Frecuencia |
|---------|-----------|
| Libertad | 47 veces |
| Estado | 38 veces |
| Casta | 31 veces |
| Argentina | 28 veces |
| Gasto | 22 veces |

### Contexto del análisis

- El discurso analizado fue el de apertura de sesiones legislativas del 1 de marzo de 2026
- Se contabilizaron todas las menciones directas e indirectas
- **"Libertad"** fue la palabra más mencionada, apareciendo en promedio cada 2 minutos

> "Viva la libertad, carajo" fue la frase de cierre, como es habitual en todos sus discursos presidenciales.`,
  timestamp: '2026-02-04T15:12:40.000Z',
  citations: [
    {
      id: 'cit-1',
      domain: 'cronista.com',
      faviconUrl: '',
      title: 'Que dijo MILEI: cuales fueron las palabras que mas repitio en su discurso',
      url: 'https://cronista.com/economia-politica/milei-discurso-palabras/',
    },
    {
      id: 'cit-2',
      domain: 'ambito.com',
      faviconUrl: '',
      title: 'Debate presidencial: cuales fueron las palabras mas usadas por Milei',
      url: 'https://ambito.com/politica/milei-palabras-debate/',
      additionalCount: 1,
    },
    {
      id: 'cit-3',
      domain: 'latamjournalismreview.org',
      faviconUrl: '',
      title: 'Analysis of Milei presidential discourse patterns',
      url: 'https://latamjournalismreview.org/milei-discourse/',
      additionalCount: 1,
    },
  ],
};

/** Context menu items (unauth) */
export const MOCK_CONTEXT_MENU_ITEMS_UNAUTH = [
  { icon: 'Copy', label: 'Copy' },
  { icon: 'FileText', label: 'Select Text' },
  { icon: 'Pencil', label: 'Edit Message' },
];

/** Context menu items (auth — adds Share) */
export const MOCK_CONTEXT_MENU_ITEMS_AUTH = [
  { icon: 'Copy', label: 'Copy' },
  { icon: 'FileText', label: 'Select Text' },
  { icon: 'Pencil', label: 'Edit Message' },
  { icon: 'Share2', label: 'Share' },
];

/** Feature items for Attachments BottomSheet (unauth) */
export const MOCK_FEATURES_UNAUTH: FeatureItem[] = [
  {
    type: 'web-search',
    icon: 'Globe',
    iconColor: '#5BC5C9',
    title: 'Web search',
    subtitle: 'Search the web for information',
  },
  {
    type: 'study-and-learn',
    icon: 'GraduationCap',
    iconColor: '#F5C542',
    title: 'Study and learn',
    subtitle: 'Get help with homework and studying',
  },
  {
    type: 'explore-apps',
    icon: 'LayoutGrid',
    iconColor: '#9A9A9A',
    title: 'Explore apps',
    subtitle: 'Browse available GPT apps',
  },
];

/** Feature items for Attachments BottomSheet (auth) */
export const MOCK_FEATURES_AUTH: FeatureItem[] = [
  {
    type: 'model',
    icon: 'Sparkles',
    iconColor: '#FFFFFF',
    title: 'Model',
    subtitle: 'GPT-5.2 Auto',
  },
  {
    type: 'create-image',
    icon: 'Image',
    iconColor: '#4ADE80',
    title: 'Create image',
    subtitle: 'Generate images with DALL-E',
  },
  {
    type: 'deep-research',
    icon: 'Telescope',
    iconColor: '#5BC5C9',
    title: 'Deep research',
    subtitle: 'Multi-step research with citations',
  },
  {
    type: 'web-search',
    icon: 'Globe',
    iconColor: '#5BC5C9',
    title: 'Web search',
    subtitle: 'Search the web for information',
  },
  {
    type: 'study-and-learn',
    icon: 'GraduationCap',
    iconColor: '#F5C542',
    title: 'Study and learn',
    subtitle: 'Get help with homework and studying',
  },
  {
    type: 'agent-mode',
    icon: 'SquareMousePointer',
    iconColor: '#5BC5C9',
    title: 'Agent mode',
    subtitle: 'Let ChatGPT take actions for you',
  },
  {
    type: 'shopping-research',
    icon: 'ShoppingBag',
    iconColor: '#5BC5C9',
    title: 'Shopping research',
    subtitle: 'Compare products and prices',
  },
  {
    type: 'your-year',
    icon: 'Calendar',
    iconColor: '#F5C542',
    title: 'Your Year with ChatGPT',
    subtitle: 'Review your 2025 highlights',
  },
  {
    type: 'quizzes',
    icon: 'SquareStack',
    iconColor: '#5BC5C9',
    title: 'Quizzes',
    subtitle: 'Test your knowledge',
  },
  {
    type: 'explore-apps',
    icon: 'LayoutGrid',
    iconColor: '#9A9A9A',
    title: 'Explore apps',
    subtitle: 'Browse available GPT apps',
  },
];
