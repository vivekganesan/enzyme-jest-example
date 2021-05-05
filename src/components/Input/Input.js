import React from 'react'
import propTypes from 'prop-types'



function Input({width, height, onChange}) {

    return (
        <div>
            <input name="width" type="test" value={width} onChange={onChange}/>
            <input name="height" type="test" value={height} onChange={onChange}/>
            
        </div>
    )
}

Input.prototypes = {
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired,
    onChange: propTypes.func.isRequired
}

export default Input
