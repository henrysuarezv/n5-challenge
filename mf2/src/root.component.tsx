import i18n from 'i18next';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import { RequestProvider } from "./context/requestContext";
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
