import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
i18n  
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          sections: {
            home: 'Home',
            shop: 'Shop',
            about: 'About',
            contactus: 'Contact Us',
            favorites: 'Favorites'
          }
        }
      },
      es: {
        translation: {
          sections: {
            home: 'Inicio',
            shop: 'Tienda',
            about: 'Nosotros',
            contactus: 'Contactanos',
            favorites: 'Mis favoritos'
          }
        }
      }
    }
  });
export default i18n;