import React from "react";
import Tails from "./Tails";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tailClickCount: Number().fill(null),

        }
    }
    handleClick = () => {
        console.log("clicked")
        this.setState({ tailClickCount: this.state.count + 1 });
        console.log("tailClickCount");
    }
    renderTails(i) {
        return (
            <Tails
                hanClick={this.handleClick}
                value={this.state.tailClickCount[i]}
            />
        )
    }
}

export default Game; 