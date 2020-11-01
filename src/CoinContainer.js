import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc:
          "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=6b31ce6f91edb446ca54b5a8ac2cbec9ff75d324-1598103796-0-AR6FZW_Mg6iZRcV6Jxgtod4MRJKYvJCBSapeh7J5Z6V4YLhtHtRA194AnVYFruy2qJTDHPokvcjPE3ma11zZK0QdZAKFfSd61dr0c9ykhXUyqI_iFzCrelWE3SwPjLGCB9TwYxYNx8NHvuh9zQJKhwvD2jW7H8qxAQtLMkacjKSFaXCL2wwy1afl75MNB3TtvWj_Lz_G0q5DZA-wskzKBZSUZhr6_w2mExV7V0mSwCYTdhtdl2N0hql5d-kniWPFrdl-LgrQaefTNONcVUmmt7gBzIoMZ_YDBjVLVv9Ww24Bp8CpvkFOYFI72WUmVo7qgw",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.nFlips}, there have been {this.state.nHeads} heads
          and {this.state.nTails} tails
        </p>
      </div>
    );
  }
}

export default CoinContainer;
