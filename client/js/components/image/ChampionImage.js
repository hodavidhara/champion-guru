import React from "react";

const FULL_ICON_URL = "http://ddragon.leagueoflegends.com/cdn/6.4.2/img/champion/";

// TODO: Support small image using sprite from http://ddragon.leagueoflegends.com/cdn/6.4.2/img/sprite/champion0.png
class ChampionImage extends React.Component {
    buildImageSource() {

        // TODO: Accurately map to champion id from name using http://ddragon.leagueoflegends.com/cdn/6.4.2/data/en_US/champion.json
        return FULL_ICON_URL + this.props.championName + ".png";
    }
    render() {
        return (
            <img src={this.buildImageSource()} />
        );
    }
}

export default ChampionImage;