import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

const Button = props => {
  return (
    <button className={`btn ${props.className}`} onclick={props.onclick ? () => props.onclick : null}>
        {props.children}
    </button>
  )
}

export const OutLineButton = props => {
    return (
        <Button
            className = {`btn-outline ${props.className}`}
            onclick={props.onclick ? () => props.onclick : null}
        >
            {props.children}
            
        </Button>
    )
}   

Button.propTypes = {
    onclick: PropTypes.func
}

export default Button