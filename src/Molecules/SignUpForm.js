import React from 'react'
import SignUpInput from '../atoms/SignUpInput'
import Button from '../atoms/Button'
import usericon from '../assets/images/User.svg'
import './SignUpForm.css'

const SignUpForm = () => {
  return (
    <form>
      <div className='largeScreen'>
        <SignUpInput
          type='text'
          ImageSRC={usericon}
          ImageALT='UserName Input'
          InputPlaceholder='Name'
        />
        <SignUpInput
          type='text'
          ImageSRC={usericon}
          ImageALT='Email Input'
          InputPlaceholder='Email'
        />
        <Button type='formSubmit' text='Continue' />
    
        {/* <SignUpInput
          type='submit'
          ImageSRC={usericon}
          ImageALT='Submit Input'
          InputValue='Continue'
        /> */}
      </div>
    </form>
  )
}

export default SignUpForm