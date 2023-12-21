import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from "react-i18next";

import "./characterComponent.scss";

const CharacterComponent = ({ item }) => {
    const { t } = useTranslation();

    if (item) {
        return (
            <Card className="characterComponent p-4 item-card-menu" >
                <Card.Img className="characterComponent__image item-image-menu"
                    src={item.imageUrl}
                    variant="top"
                />
                <Card.Body className="characterComponent__body p-1 item-body-menu">
                    <Card.Title className="m-0 item-title-menu"><b>{t('characterComponent.name')}:</b> {item.name}</Card.Title>
                    <ListGroup variant="flush">
                        <div><b className="characterComponent__titles">{t('characterComponent.tvShows')}: </b>{item.tvShows.join(", ")}</div>
                        <div><b className="characterComponent__titles">{t('characterComponent.videoGames')}: </b>{item.videoGames.join(", ")}</div>
                        <div><b className="characterComponent__titles">{t('characterComponent.enemies')}: </b>{item.enemies.join(", ")}</div>
                    </ListGroup>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href={item.sourceUrl}>{t('characterComponent.moreInfo')}</Card.Link>
                </Card.Footer>
            </Card>
        );
    }
    return null;
};

export default CharacterComponent;

