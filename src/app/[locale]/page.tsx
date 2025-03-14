import { getTranslations } from '@/app/lib/i18n';
import Link from 'next/link';
export default function Home({
    params,
}: {
    params: { locale: string };
}) {
    const t = getTranslations(params.locale as 'en' | 'zh');

    return (
        <div>
            <h1>{t.hello}</h1>
            <p>{t.welcome}</p>
            <div>
                <h2>Change Language:</h2>
                <ul>
                    <li>
                        <Link href="/en">English</Link>
                    </li>
                    <li>
                        <Link href="/zh">中文</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}