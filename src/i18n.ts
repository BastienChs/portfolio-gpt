import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './languages/en.json';
import frTranslation from './languages/fr.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            fr: {
                translation: frTranslation,
            },
        },
        lng: 'en', // Set the default language
        fallbackLng: 'en', // Fallback language if a translation is missing
        interpolation: {
            escapeValue: false, // React handles escaping
        },
    });

export default i18n;
