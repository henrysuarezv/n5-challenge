import { useTranslation } from 'react-i18next';

import ButtonContainer from "../components/buttonContainer/buttonContainer";

function Home() {
    const { t } = useTranslation();
    const buttonList = [{ name: "The Lion King", label: "The Lion King" }, { name: "Chicken Little", label: "Chicken Little" }];
    return (
        <div className='mt-4 mb-4'>
            <h3>{t("pages.home.label")}</h3>
            <ButtonContainer buttonList={buttonList}></ButtonContainer>
        </div>
    );
}

export default Home;