import React from 'react'
import './SignUp.css'
import logo from '../assets/images/Profile.svg'
import BackgroundFrame from '../atoms/BackgroundFrame/BackgroundFrame'
import SignUpFooter from '../Molecules/SignUpFooter/SignUpFooter'
import SignUpDetailForm from '../Organisms/SignUpDetailForm'


const SignUp = () => {
  return (
    <BackgroundFrame
      logoImage={true}
      logoClassName='logo'
      LogoSRC={logo}
      logoALT='site-logo'
      shadow={true}
      gradient={true}
    >
      <SignUpDetailForm/>
      <SignUpFooter text='Already a Subscriber? ' />
    </BackgroundFrame>
  )
}

export default SignUp











