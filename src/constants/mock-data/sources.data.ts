/**
 * Mock sources data — citations and source items
 */

import type { Source } from '@/src/types/chat.types';

/** Source items for Sources BottomSheet */
export const MOCK_SOURCES: Source[] = [
  {
    id: 'src-1',
    domain: 'cronista.com',
    faviconUrl: '',
    title: 'Que dijo MILEI: cuales fueron las palabras que mas repitio en su discurso - El Cronista',
    url: 'https://cronista.com/economia-politica/milei-discurso-palabras/',
  },
  {
    id: 'src-2',
    domain: 'diariopanorama.com',
    faviconUrl: '',
    title: 'Una por una: cuales fueron las palabras que mas uso Javier Milei en su discurso - Diario Panorama',
    url: 'https://diariopanorama.com/milei-palabras-discurso/',
  },
  {
    id: 'src-3',
    domain: 'ambito.com',
    faviconUrl: '',
    title: 'Debate presidencial: cuales fueron las palabras mas usadas por Massa y Javier Milei',
    url: 'https://ambito.com/politica/milei-palabras-debate/',
  },
  {
    id: 'src-4',
    domain: 'infobae.com',
    faviconUrl: '',
    title: 'Analisis del discurso de Milei: las palabras clave de su gobierno',
    url: 'https://infobae.com/politica/milei-discurso-analisis/',
  },
  {
    id: 'src-5',
    domain: 'lanacion.com.ar',
    faviconUrl: '',
    title: 'Milei y su vocabulario: un estudio sobre las palabras mas frecuentes',
    url: 'https://lanacion.com.ar/politica/milei-vocabulario-estudio/',
  },
  {
    id: 'src-6',
    domain: 'latamjournalismreview.org',
    faviconUrl: '',
    title: 'Analysis of Milei presidential discourse patterns and rhetorical strategies',
    url: 'https://latamjournalismreview.org/milei-discourse/',
  },
];
