"use strict";
import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Summoner from "./containers/Summoner";
import configureStore from "./store";

var path = window.location.pathname;
var pathParts = _.split(path, '/');

var region = pathParts[2];
var summonerName = pathParts[3];

sessionStorage.setItem('region', region);
const store = configureStore({region, summonerName});

ReactDOM.render(
    <Provider store = {store}>
        <Summoner/>
    </Provider>,
    document.getElementById('root')
);