const initialProps = {
    characters: [],
}

export const CharacterReducer = (state = initialProps, action) => {
    switch (action.type) {
        case 'SAVE_CHARACTERS':
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state;
    }
}
export default CharacterReducer