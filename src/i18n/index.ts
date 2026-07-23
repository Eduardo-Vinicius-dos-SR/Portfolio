import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "../locales/pt-BR.json";
import en from "../locales/en-US.json";
import es from "../locales/es.json";

i18n.use(initReactI18next).init({
    resources: {
        pt: {
            translation: pt,
        },
        en: {
            translation: en,
        },
        es: {
            translation: es,
        },
    },

    lng: "pt",
    fallbackLng: "en",

    interpolation: {
        escapeValue: false,
    },

    react: {
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    },
});

export default i18n;