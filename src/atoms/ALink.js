import React from 'react'
import './ALink.css'

const ALink = (props) => {
  return (
    <span>
      <a className={props.className} href={props.href}>{props.text}</a>
    </span>
  )
}

export default ALink  