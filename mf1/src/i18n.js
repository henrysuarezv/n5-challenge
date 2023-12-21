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
          components: {
            buttonContainer: {

            },
            buttonComponent: {
              label: "Get characters of"
            }
          },
          pages: {
            home: {
              label: "Select movie"
            }
          }
        }
      },
      es: {
        translation: {
          components: {
            buttonContainer: {

            },
            buttonComponent: {
              label: "Mostrar personajes de"
            }
          },
          pages: {
            home: {
              label: "Selecciona una pelicula"
            }
          }
        }
      }
    }
  });
export default i18n;