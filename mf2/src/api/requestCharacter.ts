import axiosInstance from "./axios";

export const requestCharacterRequest = async (requestCharacter: string) => {
  const encodedRequestCharacter = encodeURIComponent(requestCharacter);
  return axiosInstance.get(`/character?films=${encodedRequestCharacter}`);
};
