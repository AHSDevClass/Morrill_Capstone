import React, { Component } from 'react';
import { Button } from './button';

export default class Header extends Component {
  handleAccount = () => {
    this.props.history.push('/dashboard');
  }

  render() {
    const { small } = this.props;
    if(!small) {
      return (
        <div className='header'>
          <h1 className='header__title'>LocalLibrary</h1>
          <div className='header__links'>
            <Button callback={() => this.handleAccount()} className='header__links__account header__links__link'>My Account</Button>
            <a className='header__links__auth header__links__link'>Logout</a>
          </div>
          <div className='header__bar'>
            <a className='header__bar__all header__bar__link'>All</a>
            <a className='header__bar__scifi header__bar__link'>Sci-Fi</a>
            <a className='header__bar__fant header__bar__link'>Fantasy</a>
            <a className='header__bar__hist header__bar__link'>Historical Fiction</a>
            <a className='header__bar__other header__bar__link'>Other Fiction</a>
            <a className='header__bar__non header__bar__link'>Nonfiction</a>
          </div>
        </div>
      )
    } else {
      return (
        <div className='small-header'>
          <h1 className='small-header__title'>LocalLibrary</h1>
          <a className='small-header__link'>Logout</a>
          <div className='small-header__bar'></div>
        </div>
      )
    }
  }
}