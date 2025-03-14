'use client'
import { useI18n, useScopedI18n, useChangeLocale, useCurrentLocale } from '../../../locales/client'
 
export default function Page() {
  const t = useI18n()
  const scopedT = useScopedI18n('hello')
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()
  return (
    <div>
      <p>{t('hello')}</p>
 
      {/* Both are equivalent: */}
      <p>{t('hello.world')}</p>
      <p>{scopedT('world')}</p>
 
      <p>{t('welcome', { name: 'John' })}</p>
      <p>{t('welcome', { name: <strong>John</strong> })}</p>
      <p>Current locale: {currentLocale}</p>
      <button onClick={() => changeLocale('en')}>Change to EN</button>
      <button onClick={() => changeLocale('zh')}>Change to ZH</button>
    </div>
  )
}