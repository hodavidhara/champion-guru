import { map } from "lodash";
import * as React from "react";
import MasteryCard from "./MasteryCard";

class MasteryCardList extends React.Component<any, void> {
  render() {
    var masteryCards = map(this.props.championMasteryList, function (championMastery:any) {
      return (
        <MasteryCard {...championMastery} key={championMastery.championId}/>
      )
    });
    return (
      <div>
        {masteryCards}
      </div>
    )
  }
}

export default MasteryCardList