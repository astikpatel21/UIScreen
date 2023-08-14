import React from 'react'
import './login.css'
import google from '../assets/images/Google.svg'
import facebook from '../assets/images/Facebook.svg'
import user from '../assets/images/User.svg'
import profile from '../assets/images/Profile.svg'
import mask from '../assets/images/Mask.svg'
import Or from '../components/common/Or'
const Login = () => {
  return (
    <div className='screen'>
      <div className='login'>
        <img src={profile} alt='profile-img' className='profile-img' />
        <img src={mask} alt='background-shadow-img' className='background-shadow-img' />
        <div className='login-form'>
          <div className='form-heading'>Create an Account</div>
          <div className='login-outside-resource'>
            <div className='login-google-facebook'>
              <button className='login-google-facebook-button'>
                <img src={google} alt='google img' />
                <span>Continue With Google</span>
              </button>
            </div>
            <div className='login-google-facebook'>
              <button className='login-google-facebook-button'>
                <img src={facebook} alt='facebook img' />
                <span>Continue With Facebook</span>
              </button>
            </div>
          </div>
          <div className='or'>
            <Or />
          </div>
          <div className='custom-inputs'>
            <div className='name-email-input'>
              <img src={user} alt='name-logo' />
              <input type='text' placeholder='Name' />
            </div>
            <div className='name-email-input'>
              <img src={user} alt='name-logo' />
              <input type='email' placeholder='Email' />
            </div>
            <div className='continue-btn'>
              <button>Continue</button>
            </div>
            <div className='login-form-footer'>
              <span className='login-form-footer-upper'>By using the app | agree to the sport</span> <br />
              <span className='login-form-footer-lower'>Terms of Service & privacy Policy</span>
            </div>
          </div>
          <div className='already-subscribe-login'>
            <a href='#/login' className='already-subscriber'>Already a Subscriber? <span>Log In </span></a>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default Login