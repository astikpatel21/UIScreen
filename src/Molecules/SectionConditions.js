import React from 'react'
import Text from '../atoms/Text'
import ALink from '../atoms/ALink'
import './SectionConditions.css'
const SectionConditions = () => {
  return (
    <div className='login-terms'>
      <Text
        text='By using the app I agree to The Sport'
        className='center font-weight-400'
        textColor='#ffffff50'
      />
      <br />
      <span>
        <ALink
          text='Terms of Service '
          href='#login'
          className='no_underline '
        />
        &
        <ALink text=' Privacy Policy' href='#login' className='no_underline ' />
      </span>
    </div>
  )
}

export default SectionConditions