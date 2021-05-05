import React, { Component } from 'react'
import sinon from 'sinon';
import PropTypes from 'prop-types';

const complexValue = {
   simple1 : 'value1',
   simple2 : 'value2',
   nested : { prop1: 'value3'}

}

// function add(x, y) {
//     return x+ y;
// };

const spy = sinon.spy();


class Fixture extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             state1: complexValue
        }

        this.componentWillUnmount = spy;
    }

    

    
    
    
    render() {
        // const addValue = add(5,6);
        const {id} = this.props;
        return (
            <div className="fix">
                {this.state.state1.simple1}
                {/* <p>{addValue}</p> */}
                <div className={id}>{id}</div>
            </div>

        )
    }
}

Fixture.protoTypes = {
    id: PropTypes.string.isRequired,
}


export default Fixture;
