import React from 'react'
import './Text.css'

const Text = (props) => {
  return (
    <span className={props.className} style={{color:props.textColor}}>
      {props.text}
    </span>
  )
}

export default Text