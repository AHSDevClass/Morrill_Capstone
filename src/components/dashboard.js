import React, { Component } from 'react';
import Header from './header';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header small={true} />
        dashboard
      </div>
    )
  }
}