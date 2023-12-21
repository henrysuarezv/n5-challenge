import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

import microfrontendLayout from "./microfrontend-layout.html";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "./i18n";

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
  registerApplication(app);
});
layoutEngine.activate();
start();
