/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import profileImage from './assets/images/Profile.svg'
import background from './assets/images/Background.svg'
import googleSVG from './assets/images/Google.svg'
import facebookSVG from './assets/images/Facebook.svg'
import usersSVG from './assets/images/User.svg'
import SignUpSocialMediaButton from './atom/SignUpSocialMediaButton';

function App() {
  return (

      <div className="background">
        {/* <div className="background_gradient__light">
        </div>
        <div className="background_gradient ">
          <div className='signup_form d-flex p-relative'>
              <span className='p-absolute logo_image'>
                <img src={profileImage} alt="logo_image" />


              </span>
              <p className='main_text t-bold' >Create an Account</p> */}

              <SignUpSocialMediaButton/>

              {/* <div class="separator">
                <div class="line"></div>
                <p className='hr_text'>or</p>
                <div class="line"></div>
              </div>
              <form action="">
                <div className='signup_inputs'>
                  <div className='name-email-input'>
                    <img src={usersSVG} alt='name-logo' />
                    <input type='text' placeholder='Name' />
                  </div>
                  <div className='name-email-input'>
                    <img src={usersSVG} alt='name-logo' />
                    <input type='email' placeholder='Email' />
                  </div>
                  <div className='continue-btn'>
                    <button>Continue</button>
                  </div>
                  <div className='login-form-footer'>
                    <span className='login-form-footer-upper'>By using the app | agree to the sport</span> <br />
                    <span className='login-form-footer-lower'>
                      <a href="#" >Terms of Service</a> & 
                      <a href="#" >privacy Policy</a></span>
                  </div>
                </div>
              </form>

          </div>

        </div>
        <div className='already-subscribe-login'>
          <a href='#/login' className='already-subscriber'>Already a Subscriber? <span>Log In </span></a>
        </div> */}
      </div>
  );
}

export default App;
