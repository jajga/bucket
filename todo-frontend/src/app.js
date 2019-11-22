import React from "react";
import { Provider } from "react-redux";

import store from "./store";

//import TodoComponent from './components/todoComponent';
import BucketComponent from './components/bucketComponent';

function App() {
    return (
        <Provider store={store}>
        <div className="App">
        <header className="App-header">
        <BucketComponent />
        </header>
        </div>
        </Provider>
    );
}

export default App;