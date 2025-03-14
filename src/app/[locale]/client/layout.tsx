import { ReactElement } from 'react'
import { I18nProviderClient } from '../../../locales/client'
 
// If you are using Next.js < 15, you don't need to await `params`:
export default function SubLayout({ params: { locale }, children }: { params: { locale: string }, children: ReactElement }) {
  return (
    <html lang={locale}>
        <body>
            {children}
        </body>
    </html>
  )
}