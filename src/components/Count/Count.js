import React, { Component } from 'react'
import Input from '../Input/Input';

class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0,
            width: 60,
            height: 150,
            name: 'foo',
        }
    }   

    onWidthHeightChange = (e) => {   
        console.log(e);      
        this.setState((state) => ({
            // console.log(state)
            width : (e.target.name === 'width') ? e.target.value : state.width,
            height : (e.target.name === 'height') ? e.target.value : state.height,
        }))
    }

    
    
    render() {
        const {count, width, height, name} = this.state;
        return (
            <div className={`click-${count}`}>
                <h1>This is Counter <span className={name}> !!!!!!!</span></h1>
                <div id='counter'>{count}</div>
                <a onClick={() => {this.setState({count: count+1})}}>Increment</a>
                <a onClick={() => {this.setState({count: count-1})}}>Decrement</a>
                <Input width={width} height={height} onChange={this.onWidthHeightChange}/>
            </div>
        )
    }
}
//onChange={onWidthHeightChange}


export default Count;
