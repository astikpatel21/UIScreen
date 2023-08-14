import React from 'react'
import module from './SignUpSocialMediaButton.module.css'

const SignUpSocialMediaButton = (props) => {
  return (
    <>
    <button className={module.signup_button}>  
        <img src={props.ImageSRC} alt={props.ImageALT} />
        <span className={module.button_text} >Continue with {props.type}</span>
    </button>
    </>
  )
}

export default SignUpSocialMediaButton