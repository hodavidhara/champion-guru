import React from "react";
import { connect } from "react-redux";
import MasteryCardList from "./MasteryCardList";
import { fetchChampionMasteriesIfNeeded } from "../../actions";

class SummonerChampionMasteries extends React.Component {
    componentDidMount() {
        this.props.update(this.props.region, this.props.summonerName);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.region !== this.props.region || nextProps.summonerName != this.props.summonerName) {
            this.props.update(nextProps.region, nextProps.summonerName);
        }
    }

    render() {
        return (
            <MasteryCardList championMasteryList={this.props.championMasteryList}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let championMasteryList = [];
    if (state.championMasteries[ownProps.region]) {
        if (state.championMasteries[ownProps.region][ownProps.summonerName]) {
            championMasteryList = state.championMasteries[ownProps.region][ownProps.summonerName].masteries;
        }
    }
    return {
        championMasteryList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        update: (region, summonerName) => {
            dispatch(fetchChampionMasteriesIfNeeded(region, summonerName))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SummonerChampionMasteries)