import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages, translations } from '../data/translations.js';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('dentaktif_lang') || 'en';
  });

  const changeLanguage = (newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem('dentaktif_lang', newLang);
    } catch (e) {
      console.error('Failed to save language preference:', e);
    }
  };

  const t = (key) => {
    if (translations[lang] && translations[lang][key] !== undefined) {
      return translations[lang][key];
    }
    if (translations['en'] && translations['en'][key] !== undefined) {
      return translations['en'][key];
    }
    return key;
  };

  const currentLanguageObj = languages.find(l => l.code === lang) || languages[0];

  return (
    <LanguageContext.Provider value={{
      lang,
      setLanguage: changeLanguage,
      t,
      languages,
      currentLanguageObj
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
