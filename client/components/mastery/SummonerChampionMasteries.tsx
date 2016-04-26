import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import MasteryPodium from "./MasteryPodium";
import MasteryCardList from "./MasteryCardList";
import { fetchChampionMasteriesIfNeeded } from "../../actions/index";

class SummonerChampionMasteries extends React.Component<any, void> {
  componentDidMount() {
    this.props.update(this.props.region, this.props.summonerName);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.region !== this.props.region || nextProps.summonerName != this.props.summonerName) {
      this.props.update(nextProps.region, nextProps.summonerName);
    }
  }

  render() {

    if (!this.props.firstMastery) {
      return (
        <div>No masteries yet :(</div>
      )
    } else {
      return (
        <div>
          <MasteryPodium first={this.props.firstMastery} second={this.props.secondMastery}
                         third={this.props.thirdMastery}/>
          <MasteryCardList championMasteryList={this.props.remainingMasteryList}/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {

  let championMasteryList = [];
  if (state.championMasteries[ownProps.region]) {
    if (state.championMasteries[ownProps.region][ownProps.summonerName]) {
      championMasteryList = [...state.championMasteries[ownProps.region][ownProps.summonerName].masteries];
    }
  }

  const firstMastery = _.pullAt(championMasteryList, 0)[0];
  const secondMastery = _.pullAt(championMasteryList, 0)[0];
  const thirdMastery = _.pullAt(championMasteryList, 0)[0];
  return {
    firstMastery,
    secondMastery,
    thirdMastery,
    remainingMasteryList: championMasteryList
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