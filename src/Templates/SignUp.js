import React from 'react'
import SignUpAccount from '../Organisms/SignUpAccount'
import Separator from '../atoms/Separator'
import SignUpForm from '../Organisms/SignUpForm'
import './SignUp.css'
import logo from '../assets/images/Profile.svg'
// import mask from '../assets/images/Mask.svg'

const SignUp = () => {
  return (
      <>
        <div className='background_black'>
          <div className='main_container'>
              <div className='background_mask'></div>

              <div className='login_form'>
                  <div className='background_shadow'></div> 
                  <img className='logo' src={logo} alt="site logo" />
                  <SignUpAccount/>
                  <Separator/>
                  <SignUpForm/>
                  <div className='position-relative'>
                    <div className='login-terms'>
                      <span className='login-form-footer-upper'>By using the app | agree to The Sport</span> <br />
                      <span className='login-form-footer-lower'>
                        <a href="#login" >Terms of Service</a> &  
                        <a href="#login" > Privacy Policy</a></span>
                    </div>
                    <div className='position_bottom'>
                      <p className='login-footer'>Already a Subscriber? <a href='#/login' className='already-subscriber'><span>Log In </span></a></p>
                    </div>
                  </div>  
              </div>
            
          </div>


        </div>

      </>

  )
}

export default SignUp









