import Card from 'react-bootstrap/Card';
import React from 'react';

import "./characterComponent.scss";
const CharacterComponent = ({ item }) => {
    if (item) {
        return (
            <Card className='characterComponent p-0 item-card-menu' >
                <Card.Img className='characterComponent__image item-image-menu'
                    src={item.imageUrl}
                    variant="top"
                />
                <Card.Body className='characterComponent__body p-1 item-body-menu'>
                    <Card.Title className='characterComponent__title m-0 item-title-menu'>{item.name}</Card.Title>
                    <Card.Text className='characterComponent__description m-0 item-text-menu'>
                        {item.sourceUrl}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
    return null;
};

export default CharacterComponent;

