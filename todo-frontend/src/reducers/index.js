import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import bucketReducer from "./bucketReducer";
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    buckets:bucketReducer,
    todos:todoReducer,
})

export default createRootReducer;