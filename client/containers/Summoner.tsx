import * as React from "react";
import SummonerChampionMasteries from "../components/mastery/SummonerChampionMasteries";

class Summoner extends React.Component<any, void> {

  render() {
    return (
      <div>
        <h1>{this.props.params.summonerName}</h1>
        <SummonerChampionMasteries region={this.props.params.region} summonerName={this.props.params.summonerName}/>
      </div>
    )
  }
}

export default Summoner;