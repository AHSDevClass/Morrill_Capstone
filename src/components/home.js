import React, { Component } from 'react';
import Header from './header';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header small={false} />
        <input className="home__search" type="search" name="search" placeholder='&#xf002; Search'></input>
        home
      </div>
    )
  }
}