import { initReactI18next } from "react-i18next";
import i18n from "i18next";
i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        characterComponent: {
          name: "Name",
          moreInfo: "Read more",
          tvShows: "TV Shows",
          videoGames: "Video games",
          enemies: "Enemies",
        },
        characterContainerComponent: {
          title: "List of characters from the movie",
        },
      },
    },
    es: {
      translation: {
        characterComponent: {
          name: "Nombre",
          moreInfo: "Leer mas",
          tvShows: "Programas de TV",
          videoGames: "Video juegos",
          enemies: "Enemigos",
        },
        characterContainerComponent: {
          title: "Listado de personajes de la pelicula",
        },
      },
    },
  },
});
export default i18n;
