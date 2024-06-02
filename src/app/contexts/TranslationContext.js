"use client";

import { createContext, useContext, useState, useMemo } from "react";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("ko");

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };
  const value = useMemo(
    () => ({
      language,
      switchLanguage,
    }),
    [language],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
