import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./en/en.json";
// import en from './en/en.json'
import KG from "./kg/kg.json";
import RU from "./ru/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: EN,
    },
    ru: {
      translation: RU,
    },
    kg: {
      translation: KG,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
