import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { requestCharacterRequest } from "../api/requestCharacter";
import { SAVE_DATA_CHARACTERS } from "../actions/characterActions";

const RequestContext = createContext();

export const useRequest = () => {
  const context = useContext(RequestContext);
  if (!context) throw new Error("");
  return context;
};

export const RequestProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const requestCharacter = async (characters) => {
    setErrors([]);
    setLoading(true);
    try {
      const res = await requestCharacterRequest(characters);
      if (res.status === 200) {
        dispatch(SAVE_DATA_CHARACTERS(res.data.data))
      }
    } catch (error) {
      setErrors(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RequestContext.Provider
      value={{
        requestCharacter,
        loading,
        errors
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default RequestContext;