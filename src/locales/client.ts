"use client"
import { createI18nClient } from 'next-international/client'
 
export const { 
    useScopedI18n,
    useI18n,
    I18nProviderClient,
    useChangeLocale,
    useCurrentLocale,
} = createI18nClient({
  en: () => import('./en'),
  zh: () => import('./zh')
})
