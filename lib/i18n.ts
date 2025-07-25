import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextChainedBackend from "i18next-chained-backend";
import { getCookie } from "cookies-next";
import translationsRu from "../translations/ru.json";
import translationUz from "../translations/uz.json";
import translationEn from "../translations/en.json";

i18n
  .use(I18NextChainedBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: getCookie("lang")?.toString() || process.env.NEXT_PUBLIC_DEFAULT_LANG,
    defaultNS: "translation",
    ns: "translation",
    resources: {
      ru: { translation: translationsRu },
      uz: { translation: translationUz },
      en: { translation: translationEn },
    },
  });

export default i18n;
