import { useSelector } from "react-redux";

export const CharacterSelector = () => {
    return useSelector((state) => state.characters);
}

export default CharacterSelector