import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './actions';

class Counter extends Component {
    render() {
        const { count, increment, decrement } = this.props;

        return (
            <div>
                <button onClick={ this.props.decremet1 }>-5</button>
                <button onClick={ this.props.decremet2 }>-1</button>
                {count.count}
                <button onClick={ this.props.increment1 }>+5</button>
                <button onClick={ this.props.increment2 }>+1</button>
            </div>
        );
    }
}

function mapDispatchToProps( dispatch, props ) {
  return {
    decremet1: () => dispatch( decrement( props.id, 5 )),
    decremet2: () => dispatch( decrement( props.id, 1 )),
    increment1: () => dispatch( increment( props.id, 5 )),
    increment2: () => dispatch( increment( props.id, 1 ))
  }
}

export default connect(undefined, mapDispatchToProps )(Counter);
