"use strict";
import React from "react";
import {render} from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore, routerReducer, routerMiddleware} from "react-router-redux";
import App from "./containers/App";
import Summoner from "./containers/Summoner";

const reducer = combineReducers({
    routing: routerReducer
});

const middleware = routerMiddleware(browserHistory);
const store = createStore(
    reducer,
    applyMiddleware(middleware)
);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="/summoner/:region/:summonerName" component={Summoner}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);