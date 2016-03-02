import React from "react";
import ChampionData from "../data/ChampionData";
import ChampionImage from "../image/ChampionImage";

class MasteryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', championLevel: '', championPoints: ''}
    }
    componentDidMount() {
        var championMastery = this.props.championMastery;
        ChampionData.get(championMastery.championId).then(function (champion) {
            championMastery.name = champion.name;
            this.setState(championMastery);
        }.bind(this));
    }
    render() {
        return (
            <div className="champion-mastery">
                <ChampionImage championName={this.state.name}/>
                <span>champion: {this.state.name} </span>
                <span>rank: {this.state.championLevel} </span>
                <span>experience: {this.state.championPoints}</span>
            </div>
        );
    }
}

export default MasteryCard;