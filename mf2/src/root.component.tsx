import i18n from 'i18next';
import { Provider } from "react-redux";

import { RequestProvider } from "./context/RequestContext";
import Home from "./pages/home";
import './i18n'
import store from "./store";

export default function Root(props: any) {

  props.i18n.onChange(() => {
    i18n.changeLanguage(props.i18n.locale);
  });

  return (
    <Provider store={store}>
      <RequestProvider>
        < Home />
      </RequestProvider>
    </Provider>);
}
