import React, {Component} from "react";
import SummonerSearchBox from "../components/search/SummonerSearchBox";

export default class App extends Component {

    render() {
        return (
            <div>
                <SummonerSearchBox/>
                {this.props.children}
            </div>
        )
    }
}