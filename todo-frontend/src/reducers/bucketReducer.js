import { FETCH_BUCKET , NEW_BUCKET } from "../actions/types";

const initialState = {
    items:[],
    bucket : {}
}

export default function (state = initialState ,action) {
    switch (action.type) {
        case NEW_BUCKET:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}