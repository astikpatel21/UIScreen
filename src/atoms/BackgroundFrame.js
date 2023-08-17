import React from 'react'
import './BackgroundFrame.css'

const BackgroundFrame = (props) => {
  return (
    <>
      <div className='main_container'>
        <div className='background__gap'></div>
        <div className='background_gradient'>
          {props?.shadow && <div className='background_shadow'></div>}

          {props?.logoImage && (
            <img
              className={props?.logoClassName}
              src={props?.LogoSRC}
              alt={props?.logoALT}
            />
          )}
          {props.children}
        </div>
      </div>
    </>
  )
}

export default BackgroundFrame
