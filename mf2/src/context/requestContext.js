import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { requestCharacterRequest } from "../api/requestCharacter";


const RequestContext = createContext();

export const useRequest = () => {
    const context = useContext(RequestContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
};

export const RequestProvider = ({ children }) => {

    const [characters, setCharacters] = useState(null);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrors([]);
        }, 5000);
        return () => clearTimeout(timer);

    }, [errors, characters]);

    const requestCharacter = async (characters) => {
        try {
            const res = await requestCharacterRequest(characters);
            if (res.status === 200) {
                setCharacters(true);
            }
        } catch (error) {
            setErrors(error.response.data.message);
        }
    };

    return (
        <RequestContext.Provider
            value={{
                requestCharacter,
                errors,
                characters
            }}
        >
            {children}
        </RequestContext.Provider>
    );
};

export default RequestContext;