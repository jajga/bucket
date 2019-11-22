import { FETCH_TODO , NEW_TODO } from "../actions/types";

const initialState = {
    items:[],
    item : {}
}

export default function (state = initialState ,action) {
    switch (action.types) {
        case NEW_TODO:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}