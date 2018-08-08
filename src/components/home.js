import React, { Component } from 'react';
import Header from './header';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header className="home__header" small={false} />
        <input className="home__search" type="text" name="search" placeholder='&#xf002; Search'></input>
        <div className="home__books">
          <div className="home__books__book">Book One</div>
          <div className="home__books__book">Book Two</div>
          <div className="home__books__book">Book Three</div>
          <div className="home__books__book">Book Four</div>
          <div className="home__books__book">Book Five</div>
          <div className="home__books__book">Book Six</div>
          <div className="home__books__book">Book Seven</div>
          <div className="home__books__book">Book Eight</div>
          <div className="home__books__book">Book Nine</div>
          <div className="home__books__book">Book Ten</div>
        </div>
      </div>
    )
  }
}