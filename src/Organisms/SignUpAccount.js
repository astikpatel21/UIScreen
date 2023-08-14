import React from 'react'
import SignUpSocialMediaButton from '../atoms/SignUpSocialMediaButton'
import googleicon from '../assets/images/Google.svg'
import facebookicon from '../assets/images/Facebook.svg'
import './SignUpAccount.css'

const SignUpAccount = () => {
  return (
    <>
      <h2 className='title'>Create an Account</h2>
      <div className='text-center largeScreen'>
      <SignUpSocialMediaButton type='Google' ImageSRC={googleicon}  ImageALT='google logo'/>
      <SignUpSocialMediaButton type='Facebook' ImageSRC={facebookicon}  ImageALT='Facebook logo'/>
      </div>
    </>
  )
}

export default SignUpAccount