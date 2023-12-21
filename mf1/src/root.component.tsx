import i18n from 'i18next';

import './i18n'
import Home from "./pages/home";

export default function Root(props: any) {
  props.i18n.onChange(() => {
    i18n.changeLanguage(props.i18n.locale);
  });

  return (
    <Home />
  );
}
