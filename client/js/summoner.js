"use strict";
import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import SummonerSearchBox from "./search/SummonerSearchBox";
import SummonerChampionMasteries from "./mastery/SummonerChampionMasteries";

var path = window.location.pathname;
var pathParts = _.split(path, '/');

var region = pathParts[2];
var summonerName = pathParts[3];

sessionStorage.setItem('region', region);

ReactDOM.render(
    <div>
        <h1>{summonerName}</h1>
        <SummonerChampionMasteries region={region} summonerName={summonerName}/>
    </div>,
    document.getElementById('content')
);

ReactDOM.render(
    <SummonerSearchBox/>,
    document.getElementById('searchbox')
);