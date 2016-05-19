import * as React from "react";
import MasteryCard from "./MasteryCard";
const styles = require("./MasteryPodium.scss");

class MasteryPodium extends React.Component<any, void> {
  render() {
    console.log('rendering podium');
    console.log(this.props.first);
    return (
      <div className={styles.podium}>
        <div className={styles.first}>
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

export default MasteryPodium;