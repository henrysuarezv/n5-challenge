import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
i18n  
  .use(initReactI18next)  
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
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