const initialProps = {
    showAlert: false,
}

export const CharacterReducer = (state = initialProps, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state;
    }
}
export default CharacterReducer