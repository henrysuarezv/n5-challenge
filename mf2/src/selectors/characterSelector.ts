import { useSelector } from "react-redux";

export const CharacterSelector = () => {
    return useSelector((state: any) => state.characters);
}

export default CharacterSelector