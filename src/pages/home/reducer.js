import { SET_LIST } from "./actions";

const initialState = {
    list: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return { ...state, list: action.payload };
        default:
            return state;
    }
};

export default reducer;
