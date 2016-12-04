import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCounter } from './actions';

class NewCounter extends Component {
    render() {

        return (
            <div>
                <button onClick={() => this.props.addCounter()}>Add Counter</button>
            </div>
        );
    }
}

export default connect(undefined, { addCounter })(NewCounter);
