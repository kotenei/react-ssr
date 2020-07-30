import { SET_DETAIL } from "./actions";

const initialState = {
    info: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DETAIL:
            return { ...state, info: action.payload };
        default:
            return state;
    }
};

export default reducer;
