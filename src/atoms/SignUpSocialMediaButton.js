import React from 'react'
import module from './SignUpSocialMediaButton.module.css'

const SignUpSocialMediaButton = (props) => {
  return (
    <>
    <button className={module.signup_button}>  
        <div className={module.col_row}>
          <div className={module.col_1}>
            <img src={props.ImageSRC} alt={props.ImageALT} />
          </div>
          <div className={module.col_11}>
            <span className={module.button_text} >Continue with {props.type}</span>
          </div>
        </div>
    </button>
    </>
  )
}

export default SignUpSocialMediaButton