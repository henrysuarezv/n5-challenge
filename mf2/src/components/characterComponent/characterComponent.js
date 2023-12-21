import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";
import { useTranslation } from "react-i18next";

import "./characterComponent.scss";

const CharacterComponent = ({ item }) => {
    const { t } = useTranslation();

    if (item) {
        return (
            <Card className="characterComponent p-0 item-card-menu" >
                <Card.Img className="characterComponent__image item-image-menu"
                    src={item.imageUrl}
                    variant="top"
                />
                <Card.Body className="characterComponent__body p-1 item-body-menu">
                    <Card.Title className="characterComponent__title m-0 item-title-menu"><b>{t('characterComponent.name')}:</b> {item.name}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item><b>{t('characterComponent.tvShows')}:{item.tvShows.join(", ")}</b></ListGroup.Item>
                        <ListGroup.Item><b>{t('characterComponent.videoGames')}:{item.videoGames.join(", ")}</b></ListGroup.Item>
                        <ListGroup.Item><b>{t('characterComponent.enemies')}:{item.enemies.join(", ")}</b></ListGroup.Item>
                    </ListGroup>
                    <Card.Link href={item.sourceUrl}>{t('characterComponent.moreInfo')}</Card.Link>
                </Card.Body>
            </Card>
        );
    }
    return null;
};

export default CharacterComponent;

