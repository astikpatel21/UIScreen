import React from 'react'
import styles from './SignUpInput.module.css'
// import user from '../assets/images/User.svg'

const SignUpInput = (props) => {
  return (
    <div className={styles.main}>
        <div className={styles.signUpInput}
        style={props.type !== 'submit' ? 
                {paddingLeft:'15px', backgroundColor:'#d1d0d020'} : 
                { backgroundColor:'#d1d0d050'} }
        >
            {props.type !== 'submit' ? <img src={props.ImageSRC} alt={props.ImageALT} /> : null}
            <input type={props.type} placeholder={props?.InputPlaceholder} value={props?.InputValue} />
        </div>
    </div>
  )
}

export default SignUpInput