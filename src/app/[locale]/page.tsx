import { getI18n, getScopedI18n, getCurrentLocale } from '../../locales/server'
 
export default async function Page() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('hello')
  const currentLocale = await getCurrentLocale()
  return (
    <div>
      <p>{t('hello')}</p>
 
      {/* Both are equivalent: */}
      <p>{t('hello.world')}</p>
      <p>{scopedT('world')}</p>
 
      <p>{t('welcome', { name: 'John' })}</p>
      <p>{t('welcome', { name: <strong>John</strong> })}</p>
      <p>Current locale: {currentLocale}</p>
    </div>
  )
}
