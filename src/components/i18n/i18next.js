import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./en/en.json";
import translationKg from "./kg/kg.json";
import translationRu from "./ru/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
    kg: {
      translation: translationKg,
    },
  },
  lng: "en",
});

export default i18n;
