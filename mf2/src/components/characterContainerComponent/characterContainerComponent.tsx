import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useTranslation } from "react-i18next";

import { useRequest } from "../../context/RequestContext";
import CharacterComponent from "../characterComponent/characterComponent";
import CharacterSelector from "../../selectors/characterSelector";

import "./characterContainerComponent.scss";

const CharacterContainerComponent = () => {
    const { requestCharacter, loading } = useRequest();
    const characterSelector = CharacterSelector();
    const { t } = useTranslation();
    const [movie, setMovie] = useState("");

    useEffect(() => {
        document.addEventListener("renderSerie", (event: CustomEvent) => {
            setMovie(event.detail.data)
            requestCharacter(event.detail.data);
        });
    }, [])

    if (loading) {
        return (<Spinner className="loader" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>);
    }
    if (characterSelector.characters && characterSelector.characters.length > 0) {
        return (
            <div>
                <h1>{t('characterContainerComponent.title')} : {movie}</h1>
                <Row xs={1} md={4} className="g-4" >
                    {characterSelector.characters.map((item) => (
                        <Col key={item.name} >
                            <CharacterComponent item={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
    return null;
};
export default CharacterContainerComponent;