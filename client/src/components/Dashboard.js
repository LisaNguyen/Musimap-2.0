import React, { Component } from 'react';
import DashboardHeader from './DashboardHeader';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid dashboard">
        <DashboardHeader></DashboardHeader>
      </div>
    );
  }
};
