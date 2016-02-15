import React from "react";
import MasteryCardList from "./MasteryCardList";

class SummonerChampionMasteries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {championMasteryList: []};
    }
    componentDidMount() {
        fetch('/api/championmastery/' + this.props.region + '/' + this.props.summonerName).then(function (response) {
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

export default SummonerChampionMasteries;