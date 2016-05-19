import * as React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer as routing, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { championMasteries } from "./reducers/index";
import App from "./containers/App";
import Summoner from "./containers/Summoner";

const reducer = combineReducers({
    championMasteries,
    routing
});

const middleware = routerMiddleware(browserHistory);

const finalCreateStore = compose(
    applyMiddleware(middleware, thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f: any):any => f
)(createStore);

const store = finalCreateStore(
    reducer
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