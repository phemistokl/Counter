import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from './Counter.jsx';

class CounterList extends Component {
    render() {

        return (
          <div>
              {
                  this.props.counter.map(count =>
                      <Counter key={count.id}
                                id={count.id}
                                count={count}
                      />
                  )
              }
          </div>
        );
    }
}

function mapStateToProps( state ) {
  return {
    counter: state
  }
}

export default connect( mapStateToProps )(CounterList);
