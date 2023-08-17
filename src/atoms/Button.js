import React from 'react'
import './Button.css'

const Button = (props) => {
  const handleClick = () => {
    
    // console.log('alldone')
  }

  return (
    <>
      {props.type === 'signUp' && (
        <button onClick={handleClick} className='signup_button'>
          <div className='col_row'>
            <div className='col_1'>
              <img src={props.ImageSRC} alt={props.ImageALT} />
            </div>
            <div className='col_11'>
              <span className='button_text'>{props.text}</span>
            </div>
          </div>
        </button>
      )}
      {props.type === 'formSubmit' && (
        <button className='form_submit_Button'>{props.text}</button>
      )}
    </>
  )
}

export default Button
