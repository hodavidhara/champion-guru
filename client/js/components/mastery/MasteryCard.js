import React from "react";
import ChampionImage from "../image/ChampionImage";
import MasteryImage from "../image/MasteryImage";
import styles from "./MasteryCard.scss";

class MasteryCard extends React.Component {

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

MasteryCard.propTypes = {
  championLevel: React.PropTypes.number.isRequired,
  championId: React.PropTypes.number.isRequired
};

export default MasteryCard;