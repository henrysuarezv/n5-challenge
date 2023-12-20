import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useRequest } from '../context/requestContext';

const CharacterContainerComponent = () => {
    const { requestCharacter, errors, characters } = useRequest();
    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener('renderSerie', (event) => {
            console.log(event.detail.data);
            requestCharacter(event.detail.data)
        });
    }, [])

    return (
        <div>
        </div>
    );
};
export default CharacterContainerComponent;