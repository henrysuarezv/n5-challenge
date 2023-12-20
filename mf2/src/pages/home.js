import React from "react";
import { useTranslation } from 'react-i18next';
import CharacterContainerComponent from "../components/characterContainerComponent";

function Home() {
    const { t } = useTranslation();
    return (
        <>
            <CharacterContainerComponent></CharacterContainerComponent>
        </>
    );
}

export default Home;