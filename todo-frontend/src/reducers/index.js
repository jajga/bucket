import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import bucketReducer from "./bucketReducer";

export default combineReducers({
    buckets:bucketReducer,
    todo:todoReducer
})