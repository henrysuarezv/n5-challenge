import { I18n } from "i18n-js";

const i18n = new I18n({
  en: { "translateButton": "Change language" },
  es: { "translateButton": "Cambiar idioma" },
});
i18n.locale = "en";
const globalConfig = {
  i18n,
};
(window as any).globalConfig = globalConfig;

export default i18n;