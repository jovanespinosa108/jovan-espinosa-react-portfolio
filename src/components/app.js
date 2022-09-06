import React, { Component } from 'react';
import moment from 'moment';


export class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Jovan Espinosa Portfolio</h1>
        <h2>React Redux</h2>
        <div>
        {moment().format('YYYY [escaped] YYYY')}
        </div>
      </div>
    );
  }
}
