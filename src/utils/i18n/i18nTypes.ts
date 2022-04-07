export const supportedLangs = ['en', 'tr', 'ar'] as const
export type LangType = typeof supportedLangs[number]

export const SUPPORTED_LANGUAGUES = [
  { label: 'Türkçe', value: 'tr' },
  { label: 'العربية', value: 'ar' },
  { label: 'English', value: 'en' },
] as { label: string; value: LangType }[]
