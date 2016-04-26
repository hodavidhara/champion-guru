import React from "react";
import ChampionImage from "../image/ChampionImage";
import MasteryImage from "../image/MasteryImage";
const styles = require("./MasteryCard.scss");

class MasteryCard extends React.Component<any, void> {

  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <ChampionImage imageData={this.props.champion.image} size="full"/>
          </div>
        </div>
        <div className={styles.masteryIcon}>
          <MasteryImage level={this.props.championLevel}/>
        </div>
      </div>
    );
  }
}

export default MasteryCard;