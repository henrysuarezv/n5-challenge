import './i18n'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Root(props: any) {
  props.i18n.onChange(() => {
    i18n.changeLanguage(props.i18n.locale);
  });
  const { t } = useTranslation();
  const handleSelection = (filmName: string) => {
    document.dispatchEvent(new CustomEvent('renderSerie', { detail: { data: filmName } }));
  }
  return (
    <div>
      <button onClick={() => handleSelection("Tomorrowland")}> Tomorrowland </button>
      <button onClick={() => handleSelection("dumbo")}>Dumbo </button>
    </div>
  );
}
