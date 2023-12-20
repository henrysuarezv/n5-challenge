import axios from "./axios";

export const requestCharacterRequest = async (requestCharacter) =>
    axios.get(`/character?films=${requestCharacter}`);