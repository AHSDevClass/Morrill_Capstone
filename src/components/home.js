import React, { Component } from 'react';
import Header from './header';
import { Button } from './button';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header className="home__header" small={false} />
        <input className="home__search" type="text" name="search" placeholder='&#xf002; Search'></input>
        <Button className="home__cart" icon="fas fa-shopping-cart" />
        <div className="home__books">
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book One</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book Two</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book Three</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book Four</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book Five</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book Six</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book Seven</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book Eight</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book Nine</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book Ten</div>
          </div>
        </div>
      </div>
    )
  }
}