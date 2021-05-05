import React from 'react'
import PropTypes from 'prop-types' 

function MyComponent(props) {
    const {includedProp} =  props
    return (
        <div className={includedProp} includedProp={includedProp}>
            Hello
        </div>
    )
}

MyComponent.PropTypes ={
    includedProp: PropTypes.string.isRequired,
}

export default MyComponent
