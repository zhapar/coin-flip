import React, { Component } from "react";

class CoinContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curCoin: null,
      nFLips: 0,
      nHeads: 0,
      nTails: 0,
    };
  }
}

export default CoinContainer;
