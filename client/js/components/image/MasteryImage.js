import React from "react";

class MasteryImage extends React.Component {

    render() {
        return (
            <span>{this.props.level}</span>
        )
    }
}

MasteryImage.propTypes = {
    level: React.PropTypes.number.isRequired
};

export default MasteryImage;