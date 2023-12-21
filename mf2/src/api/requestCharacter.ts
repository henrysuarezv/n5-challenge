import axios from "./axios";

export const requestCharacterRequest = async (requestCharacter: string) => {
    const encodedRequestCharacter = encodeURIComponent(requestCharacter);
    return axios.get(`/character?films=${encodedRequestCharacter}`)
};