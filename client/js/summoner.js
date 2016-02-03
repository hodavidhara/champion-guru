"use strict";
var _ = require('lodash');
var React = require("react");
var ReactDOM = require("react-dom");

var path = window.location.pathname;
var summonerName = path.substring(path.lastIndexOf("/") + 1);

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
    render: function() {
        return (
            <div className="champion-mastery">
                <span>champion: {this.props.championMastery.championId}</span>
                <span>rank: {this.props.championMastery.championLevel}</span>
                <span>experience: {this.props.championMastery.championPoints}</span>
            </div>
        );
    }
});

var SummonerChampionMasteries = React.createClass({
    getInitialState: function() {
        return {championMasteryList: []};
    },
    componentDidMount: function() {
        fetch('/api/championmastery/na/' + summonerName).then(function (response) {
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
        <SummonerChampionMasteries />
    </div>,
    document.getElementById('content')
);