import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { requestCharacterRequest } from "../api/requestCharacter";
import { SAVE_DATA_CHARACTERS } from "../actions/characterActions";

const RequestContext = createContext();

export const useRequest = () => {
    const context = useContext(RequestContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
};

export const RequestProvider = ({ children }) => {
    const dispatch = useDispatch();
    //const [characters, setCharacters] = useState(null);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    const requestCharacter = async (characters) => {
        setLoading(true);
        try {
            const res = await requestCharacterRequest(characters);
            if (res.status === 200) {
                dispatch(SAVE_DATA_CHARACTERS(res.data.data))
                //setCharacters(res.data.data);
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
                //characters
            }}
        >
            {children}
        </RequestContext.Provider>
    );
};

export default RequestContext;