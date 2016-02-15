import React, {Component} from "react";
import {connect} from "react-redux";
import SummonerSearchBox from "../components/search/SummonerSearchBox";
import SummonerChampionMasteries from "../components/mastery/SummonerChampionMasteries";

class Summoner extends Component {

    render() {
        return (
            <div>
                <SummonerSearchBox/>
                <h1>{this.props.summonerName}</h1>
                <SummonerChampionMasteries region={this.props.region} summonerName={this.props.summonerName}/>
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