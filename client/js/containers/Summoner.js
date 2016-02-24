import React, {Component} from "react";
import {connect} from "react-redux";
import SummonerChampionMasteries from "../components/mastery/SummonerChampionMasteries";

class Summoner extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.params.summonerName}</h1>
                <SummonerChampionMasteries region={this.props.params.region} summonerName={this.props.params.summonerName}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        summonerName: state.summonerName,
        region: state.region
    }
};

export default connect(mapStateToProps)(Summoner);