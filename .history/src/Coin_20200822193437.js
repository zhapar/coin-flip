import React, { Component } from 'react'

class Coin extends {
  render() {
    return (
      <div className="Coin">
        <img src={this.props.info.imgSrc} alt={this.props.info.side} />
      </div>
    )
}

export default Coin;