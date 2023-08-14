import React from 'react'
import SignUpInput from '../atoms/SignUpInput'
import usericon from '../assets/images/User.svg'

const SignUpForm = () => {
  return (
    <form>
      <div className='largeScreen'>
        <SignUpInput type='text' ImageSRC={usericon}  ImageALT='UserName Input' InputPlaceholder='Name'/>
        <SignUpInput type='text' ImageSRC={usericon}  ImageALT='Email Input' InputPlaceholder='Email'/>
        <SignUpInput type='submit' ImageSRC={usericon}  ImageALT='Submit Input' InputValue='Continue'/>
      </div>
    </form>
  )
}

export default SignUpForm