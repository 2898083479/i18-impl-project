import en from '@/app/locales/en.json';
import zh from '@/app/locales/zh.json';

const translations = {
    en,
    zh,
};

export function getTranslations(locale: keyof typeof translations) {
    return translations[locale] || translations.en;
}