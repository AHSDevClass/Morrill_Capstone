import React, { Component } from 'react';
import Header from '../header';
import CurrentBooks from './current';
import AccountInfo from './account';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header small={true} />
        <CurrentBooks />
        <AccountInfo />
        dashboard
      </div>
    )
  }
}