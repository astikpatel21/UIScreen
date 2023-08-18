import React from 'react'
import './Input.css'
import icon from '../../assets/images/User.svg'

import {Field, ErrorMessage} from 'formik';

const Input = (props) => {

  return (
    <div className='main'>
      <div className='input_type'>
        {props?.imageSRC && <img src={icon} alt={props.ImageALT} />}
        
        <Field
          name={props.name}
          type={props.type}
          placeholder={props?.InputPlaceholder}
          id={props.name}
        />
      </div>
      <ErrorMessage name={props.name} className='error-message' component='div'/>
    </div>
  )
}

export default Input
