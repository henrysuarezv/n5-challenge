import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import { I18n } from "i18n-js";
import microfrontendLayout from "./microfrontend-layout.html";

const i18n = new I18n({
  en: { "translateButton": "Change language" },
  es: { "translateButton": "Cambiar idioma" },
});
i18n.locale = "en";
const globalConfig = {
  i18n,
};
(window as any).globalConfig = globalConfig;

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });
applications.forEach((app) => {
  app.customProps = { i18n };
  registerApplication(app)
});
layoutEngine.activate();
start();
