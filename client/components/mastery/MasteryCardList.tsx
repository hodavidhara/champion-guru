import _ from "lodash";
import React from "react";
import MasteryCard from "./MasteryCard";

class MasteryCardList extends React.Component<any, void> {
    render() {
        var masteryCards = _.map(this.props.championMasteryList, function (championMastery: any) {
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