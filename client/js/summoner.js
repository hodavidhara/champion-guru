"use strict";
var _ = require('lodash');
var React = require("react");
var ReactDOM = require("react-dom");
var SummonerSearchBox = require("./search/SummonerSearchBox");
var ChampionData = require('./data/ChampionData');

var path = window.location.pathname;
var pathParts = _.split(path, '/');

var region = pathParts[2];
var summonerName = pathParts[3];

sessionStorage.setItem('region', region);

var MasteryCardList = React.createClass({
    render: function () {
        var masteryCards = _.map(this.props.championMasteryList, function (championMastery) {
            return (
                <MasteryCard championMastery={championMastery} key={championMastery.championId}/>
            )
        });
        return (
            <div>
                {masteryCards}
            </div>
        )
    }
});

var MasteryCard = React.createClass({
    getInitialState: function() {
        return {name: '', championLevel: '', championPoints: ''};
    },
    componentDidMount: function() {
        var championMastery = this.props.championMastery;
        ChampionData.get(championMastery.championId).then(function (champion) {
            championMastery.name = champion.name;
            this.setState(championMastery);
        }.bind(this));
    },
    render: function() {
        return (
            <div className="champion-mastery">
                <span>champion: {this.state.name} </span>
                <span>rank: {this.state.championLevel} </span>
                <span>experience: {this.state.championPoints}</span>
            </div>
        );
    }
});

var SummonerChampionMasteries = React.createClass({
    getInitialState: function() {
        return {championMasteryList: []};
    },
    componentDidMount: function() {
        fetch('/api/championmastery/' + this.props.region + '/' + this.props.summonerName).then(function (response) {
            return response.json();
        }.bind(this)).then(function (championMasteries) {
            this.setState({championMasteryList: championMasteries});
        }.bind(this)).catch(function (e) {
            console.log(e);
        });
    },
    render: function () {
        return (
            <MasteryCardList championMasteryList={this.state.championMasteryList}/>
        )
    }
});

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