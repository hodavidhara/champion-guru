var React = require("react");

// TODO: Handle Region.
var SummonerSearchBox = React.createClass({
    getInitialState: function () {
        return {summonerName:''}
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Summoner's name" value={this.state.summonerName} onChange={this.handleChange}/>
                <input type="submit" value="Search" />
            </form>
        )
    },
    handleChange: function(e) {
        this.setState({summonerName: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        location.assign('/summoner/' + this.state.summonerName);
    }
});

module.exports = SummonerSearchBox;