import React, { Component } from 'react';

import CounterList from './CounterList.jsx';
import NewCounter from './NewCounter.jsx';

class CounterApp extends Component {
    render() {
        return (
          <div>
              <CounterList />
              <NewCounter />
          </div>
        );
    }
}

export default CounterApp;
