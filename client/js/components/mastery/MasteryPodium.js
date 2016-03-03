import React from "react";
import MasteryCard from "./MasteryCard";
import styles from "./MasteryPodium.scss";

class MasteryPodium extends React.Component {
    render() {
        return (
            <div className={styles.podium}>
                <div className={styles.first}>
                    first
                    <MasteryCard {...this.props.first}/>
                </div>
                {(() => {
                    if (this.props.second) {
                        return (
                            <div className={styles.second}>
                                <MasteryCard {...this.props.second}/>
                            </div>
                        )
                    }
                })()}
                {(() => {
                    if (this.props.third) {
                        return (
                            <div className={styles.third}>
                                <MasteryCard {...this.props.third}/>
                            </div>
                        )
                    }
                })()}
            </div>
        );
    }
}

MasteryCard.propTypes = {
    first: React.PropTypes.object.isRequired,
    second: React.PropTypes.object,
    third: React.PropTypes.object
};

export default MasteryPodium;