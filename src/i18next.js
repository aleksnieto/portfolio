import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './lng/en.json'
import es from './lng/es.json'

i18next.use(initReactI18next).init({
    
    resources: {

        en: {

            translation: en,

        },

        es: {

            translation: es,   
            
        },
    },

    lng: "",


});

export default i18next;