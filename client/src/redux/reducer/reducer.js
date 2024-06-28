import { GET_ALL_DOGS } from "../actions/action-types";

const initialState = {
    allDogs: [],
    copyAllDogs: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                copyAllDogs: action.payload
            };
        default:
            return {
                ...state
            };
    };
}

export default reducer;