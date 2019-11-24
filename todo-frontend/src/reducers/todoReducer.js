import { DELETE_TODO ,UPDATE_TODO, FETCH_TODO, NEW_TODO} from "../actions/types";

const initialState = {
    items:[],
    item:{},
    updatedItem : {},
    deletedItemId: {}
}

export default function (state = initialState ,action) {
    switch (action.type) {
        case FETCH_TODO:
            return {
                ...state,
                items: action.payload
            }
        case NEW_TODO:
            return {
                ...state,
                item: action.payload
            }
        case UPDATE_TODO:
            return {
                ...state,
                item:{},
                updatedItem: action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                item:{},
                deletedItemId: action.payload
            }
        default:
            return state;
    }
}