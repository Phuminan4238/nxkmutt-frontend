import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Initialize selectedLanguage state from localStorage if available, otherwise default to "en"
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );

  // Effect to update localStorage whenever selectedLanguage changes
  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageSwitch = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, handleLanguageSwitch }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
