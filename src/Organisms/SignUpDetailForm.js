import React from 'react'
import './SignUpDetailForm.css'
import SignUpAccount from '../Molecules/SignUpAccount'
import Separator from '../atoms/Separator'
import SignUpForm from '../Molecules/SignUpForm'
import SectionConditions from '../Molecules/SectionConditions'

const SignUpDetailForm=(props)=> {
  return (
    <>
      <SignUpAccount />
      <Separator />
      <SignUpForm />
      <SectionConditions />
    </>
  )
}

export default SignUpDetailForm