import React, { Component } from "react";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
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
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {}

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.nFLips}, there have been {this.state.nHeads} and{" "}
          {this.state.nTails} tails
        </p>
      </div>
    );
  }
}

export default CoinContainer;
