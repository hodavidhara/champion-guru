var React = require("react");

// TODO: Handle Region.
var SummonerSearchBox = React.createClass({
    getInitialState: function () {
        var region = sessionStorage.getItem('region') || 'na';
        return {summonerName:'', region: region}
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Summoner's name" value={this.state.summonerName} onChange={this.handleSummonerChange}/>
                <select value={this.state.region} onChange={this.handleRegionChange}>
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
    },
    handleSummonerChange: function(e) {
        this.setState({summonerName: e.target.value});
    },
    handleRegionChange: function(e) {
        this.setState({region: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        sessionStorage.setItem('region', this.state.region);
        location.assign('/summoner/' + this.state.region + '/' + this.state.summonerName);
    }
});

module.exports = SummonerSearchBox;