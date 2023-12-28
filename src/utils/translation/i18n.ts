import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources.json';
import { Language } from '../../hooks/useTranslations';
import { LANG_KEY } from '../types';

const getLocalStorageLanguage = () => {
  const language = localStorage.getItem(LANG_KEY);

  if (language) {
    return language as Language;
  }
  return 'en';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLocalStorageLanguage(),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
