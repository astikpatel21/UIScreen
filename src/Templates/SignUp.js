import React from 'react'
import './SignUp.css'
import logo from '../assets/images/Profile.svg'
import BackgroundFrame from '../atoms/BackgroundFrame'
import AccountHaveFooter from '../Molecules/AccountHaveFooter'
import SignUpDetailForm from '../Organisms/SignUpDetailForm'


const SignUp = () => {
  return (
    <BackgroundFrame
      logoImage={true}
      logoClassName='logo'
      LogoSRC={logo}
      logoALT='site-logo'
      shadow={true}
    >
      <SignUpDetailForm/>
      <AccountHaveFooter text='Already a Subscriber? ' />
    </BackgroundFrame>
  )
}

export default SignUp











