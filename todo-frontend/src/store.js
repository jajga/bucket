import { createStore , applyMiddleware , compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Intial state of the App
const intialState = {};
const middleware = [thunk];

// Global Store for the App
const store = createStore(
    rootReducer,
    intialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

)

export default store;



