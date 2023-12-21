import React from "react";
import { useTranslation } from 'react-i18next';

import CharacterContainerComponent from "../components/characterContainerComponent/characterContainerComponent";

function Home() {
    const { t } = useTranslation();
    return (
        <CharacterContainerComponent />
    );
}

export default Home;