/**
 * Mock language data — app and speech input languages
 */

import type { Language } from '@/src/types/settings.types';

/** App language options */
export const MOCK_APP_LANGUAGES: Language[] = [
  { code: 'system', name: 'System default', nativeName: 'System default' },
  { code: 'am', name: 'Amharic', nativeName: '\u12A0\u121B\u122D\u129B' },
  { code: 'ar', name: 'Arabic', nativeName: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629' },
  { code: 'bg', name: 'Bulgarian', nativeName: '\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438' },
  { code: 'bn', name: 'Bengali', nativeName: '\u09AC\u09BE\u0982\u09B2\u09BE' },
  { code: 'bs', name: 'Bosnian', nativeName: 'bosanski' },
  { code: 'ca', name: 'Catalan', nativeName: 'catal\u00E0' },
  { code: 'cs', name: 'Czech', nativeName: '\u010De\u0161tina' },
  { code: 'da', name: 'Danish', nativeName: 'dansk' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'el', name: 'Greek', nativeName: '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'espa\u00F1ol' },
  { code: 'fi', name: 'Finnish', nativeName: 'suomi' },
  { code: 'fr', name: 'French', nativeName: 'fran\u00E7ais' },
  { code: 'he', name: 'Hebrew', nativeName: '\u05E2\u05D1\u05E8\u05D9\u05EA' },
  { code: 'hi', name: 'Hindi', nativeName: '\u0939\u093F\u0928\u094D\u0926\u0940' },
  { code: 'hr', name: 'Croatian', nativeName: 'hrvatski' },
  { code: 'hu', name: 'Hungarian', nativeName: 'magyar' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'it', name: 'Italian', nativeName: 'italiano' },
  { code: 'ja', name: 'Japanese', nativeName: '\u65E5\u672C\u8A9E' },
  { code: 'ko', name: 'Korean', nativeName: '\uD55C\uAD6D\uC5B4' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  { code: 'pl', name: 'Polish', nativeName: 'polski' },
  { code: 'pt', name: 'Portuguese', nativeName: 'portugu\u00EAs' },
  { code: 'ro', name: 'Romanian', nativeName: 'rom\u00E2n\u0103' },
  { code: 'ru', name: 'Russian', nativeName: '\u0440\u0443\u0441\u0441\u043A\u0438\u0439' },
  { code: 'sv', name: 'Swedish', nativeName: 'svenska' },
  { code: 'th', name: 'Thai', nativeName: '\u0E44\u0E17\u0E22' },
  { code: 'tr', name: 'Turkish', nativeName: 'T\u00FCrk\u00E7e' },
  { code: 'uk', name: 'Ukrainian', nativeName: '\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Ti\u1EBFng Vi\u1EC7t' },
  { code: 'zh', name: 'Chinese', nativeName: '\u4E2D\u6587' },
];

/** Speech input language options */
export const MOCK_SPEECH_INPUT_LANGUAGES: Language[] = [
  { code: 'auto', name: 'Auto-Detect', nativeName: 'Auto-Detect' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'espa\u00F1ol' },
  { code: 'fr', name: 'French', nativeName: 'fran\u00E7ais' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'italiano' },
  { code: 'pt', name: 'Portuguese', nativeName: 'portugu\u00EAs' },
  { code: 'ja', name: 'Japanese', nativeName: '\u65E5\u672C\u8A9E' },
  { code: 'ko', name: 'Korean', nativeName: '\uD55C\uAD6D\uC5B4' },
  { code: 'zh', name: 'Chinese', nativeName: '\u4E2D\u6587' },
];
