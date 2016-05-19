import * as React from "react";
import SummonerSearchBox from "../components/search/SummonerSearchBox";

export default class App extends React.Component<any, void> {

  render() {
    return (
      <div>
        <SummonerSearchBox/>
        {this.props.children}
      </div>
    )
  }
}