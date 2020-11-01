import React, { Component } from "react";

class CoinContainer extends Component {
  static defaultProps = {
    faces: [
      { face: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { face: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      curCoin: null,
      nFLips: 0,
      nHeads: 0,
      nTails: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <button>Flip Me!</button>
        <p>
          Out of {this.state.nFLips}, there have been {this.state.nHeads} and{" "}
          {this.state.nTails} tails
        </p>
      </div>
    );
  }
}

export default CoinContainer;
