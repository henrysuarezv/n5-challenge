import './i18n'
import { useTranslation } from 'react-i18next';

export default function Root(props) {
  const { t } = useTranslation();
  const handleSerie1 = (serie: string) => {
    document.dispatchEvent(new CustomEvent('renderSerie', { detail: { data: serie } }));
  }
  return (
    <div>
      <button onClick={() => handleSerie1("serie1")}> {t('sections.contactus')} </button>
      <button onClick={() => handleSerie1("serie2")}>serie 2</button>
    </div>
  );
}
