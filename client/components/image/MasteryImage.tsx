import React from "react";

class MasteryImage extends React.Component<any, void> {

    render() {
        return (
            <span>{this.props.level}</span>
        )
    }
}

export default MasteryImage;