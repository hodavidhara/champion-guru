import React from "react";
import MasteryCardList from "./MasteryCardList";

class SummonerChampionMasteries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {championMasteryList: []};
    }
    componentDidMount() {
        this.fetchSummonerChampionMasteries(this.props.region, this.props.summonerName);
    }
    componentWillReceiveProps(nextProps) {
        this.fetchSummonerChampionMasteries(nextProps.region, nextProps.summonerName);
    }
    fetchSummonerChampionMasteries(region, summonerName) {
        fetch('/api/championmastery/' + region + '/' + summonerName).then(function (response) {
            return response.json();
        }.bind(this)).then(function (championMasteries) {
            this.setState({championMasteryList: championMasteries});
        }.bind(this)).catch(function (e) {
            console.log(e);
        });
    }
    render() {
        return (
            <MasteryCardList championMasteryList={this.state.championMasteryList}/>
        )
    }
}

export default SummonerChampionMasteries