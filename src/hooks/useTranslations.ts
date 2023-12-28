import { useTranslation } from 'react-i18next';
import { translations } from '../utils/translation/translationHelper';

export type Language = 'en' | 'shq' | 'eng' | 'de' | 'fr';

export const useTranslations = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  return { t, translations, changeLanguage };
};
