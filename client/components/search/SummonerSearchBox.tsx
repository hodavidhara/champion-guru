import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

class SummonerSearchBox extends React.Component<any, any> {
    constructor(props) {
        super(props);
        var region = sessionStorage.getItem('region') || 'na';
        this.state = {summonerName:'', region: region}
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Summoner's name" value={this.state.summonerName} onChange={this.handleSummonerChange.bind(this)}/>
                <select value={this.state.region} onChange={this.handleRegionChange.bind(this)}>
                    <option value="br">BR</option>
                    <option value="eune">EUNE</option>
                    <option value="euw">EUW</option>
                    <option value="kr">KR</option>
                    <option value="lan">LAN</option>
                    <option value="las">LAS</option>
                    <option value="na">NA</option>
                    <option value="oce">OCE</option>
                    <option value="tr">TR</option>
                    <option value="ru">RU</option>
                </select>
                <input type="submit" value="Search" />
            </form>
        )
    }
    handleSummonerChange(e) {
        this.setState({summonerName: e.target.value});
    }
    handleRegionChange(e) {
        this.setState({region: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        sessionStorage.setItem('region', this.state.region);
        this.props.goToSummoner(this.state.region, this.state.summonerName);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        goToSummoner: (region, summonerName) => {
            dispatch(push('/summoner/' + region + '/' + summonerName))
        }
    }
};

export default connect(null, mapDispatchToProps)(SummonerSearchBox);