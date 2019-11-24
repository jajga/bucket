import React from 'react';
import Reactdom from 'react-dom';
import 'bootstrap';
import { Provider } from "react-redux";
import configureStore, { history } from  "./store";
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Bucket from "./components/bucketComponent"
import TodoForm from "./components/todoForm";
import TodoComponent from "./components/todoComponent";

const store = configureStore();
Reactdom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
            <> { /* your usual react-router v4/v5 routing */ }
            <Router>
                <Switch>
                    <Route  exact path="/" component={Bucket} />
                    <Route  path="/:bucket" component={TodoComponent}  />
                    <Route  path="/about" render={() => (<div>Miss</div>)} />
                    <Route render={() => (<div>Not Found</div>)} />
                </Switch>
            </Router>
            </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)


