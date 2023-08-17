import React from 'react'
import './AccountHaveFooter.css'
import ALink from '../atoms/ALink'

const AccountHaveFooter = (props) => {
  return (
    <div className='footer_fullWidth'>
      <div className='footer'>
        <p className='footer_text'>
          {props.text} {''}
          <ALink className='underline' href='#login' text='Log In' />
        </p>
      </div>
    </div>
  )
}

export default AccountHaveFooter