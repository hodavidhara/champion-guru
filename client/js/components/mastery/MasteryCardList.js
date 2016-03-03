import _ from "lodash";
import React from "react";
import MasteryCard from "./MasteryCard";

class MasteryCardList extends React.Component{
    render() {
        var masteryCards = _.map(this.props.championMasteryList, function (championMastery) {
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