import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";

import { TRANSLATIONS_PL } from "./pl/translation.js";
import { TRANSLATIONS_EN } from "./en/translation.js";

intervalPlural.setOptions({
  intervalSeparator: ";",
  intervalRegex: /\((\S*)\).*?\[((.|\n)*)\]/,
  intervalSuffix: "_interval"
});

i18n
  .use(initReactI18next)
  .use(intervalPlural)
  .init({
    lng: "pl",
    resources: {
      en: {
        translation: TRANSLATIONS_EN
      },
      pl: {
        translation: TRANSLATIONS_PL
      }
    }
  });

export default i18n;
