import React, { Component } from 'react';

import Header from './header';

export default class Checkout extends Component {
  render() {
    return (
      <div className="checkout">
        <Header small={true} />
        <div className="checkout__items">Checkout items go here</div>
        <div className="checkout__button">Button goes here</div>
      </div>
    )
  }
}