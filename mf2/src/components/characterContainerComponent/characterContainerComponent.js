import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import { useRequest } from "../../context/requestContext";
import CharacterComponent from "../characterComponent/characterComponent";
import CharacterSelector from "../../selectors/characterSelector";

import "./characterContainerComponent.scss";

const CharacterContainerComponent = () => {
    const { requestCharacter, loading } = useRequest();
    const characterSelector = CharacterSelector();

    useEffect(() => {
        document.addEventListener('renderSerie', (event) => {
            console.log(event.detail.data);
            requestCharacter(event.detail.data)
        });
    }, [])
    
    if (loading) {
        return (<Spinner className="loader" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>);
    }
    if (characterSelector.characters && characterSelector.characters.length > 0) {
        return (
            <Row xs={3} md={6} className="g-4 item-container-menu" >
                {characterSelector.characters.map((item) => (
                    <Col key={item.name} >
                        <CharacterComponent item={item} />
                    </Col>
                ))}
            </Row>
        );
    }
    return null;
};
export default CharacterContainerComponent;