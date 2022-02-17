import ActionTypes from "../types/index";

const initialState = 0;

const count = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.counter.INREASE_COUNTER:
            return state + action.payload;
        case ActionTypes.counter.DECREASE_COUNTER:
            return state - action.payload;
        default:
            return state;
    }

}

export default count;