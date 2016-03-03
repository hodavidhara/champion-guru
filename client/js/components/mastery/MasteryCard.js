import React from "react";
import ChampionData from "../data/ChampionData";
import ChampionImage from "../image/ChampionImage";
import MasteryImage from "../image/MasteryImage";
import styles from "./MasteryCard.scss";

class MasteryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imageData: {}}
    }
    componentDidMount() {

        // TODO: Decide how to handle "static" champion data, then move this to the appropriate place.
        ChampionData.get(this.props.championId).then(function (champion) {
            this.setState({
                imageData: champion.image
            });
        }.bind(this));
    }
    render() {
        return (
            <div>
                <div className={styles.wrapper}>
                    <div className={styles.inner}>
                        <ChampionImage imageData={this.state.imageData} size="full"/>
                    </div>
                </div>
                <div className={styles.masteryIcon}>
                    <MasteryImage level={this.props.championLevel} />
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