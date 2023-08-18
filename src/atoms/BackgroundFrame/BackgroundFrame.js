import React from 'react'
import './BackgroundFrame.css'

const BackgroundFrame = (props) => {
  return (
    <>
      <div className='main_container'>
        <div className='background__gap'></div>
        <div className='background_color_gradient_image'>
          {props?.gradient && <div className='background_gradient'></div>}
          {props?.shadow && <div className='background_shadow'></div>}

          {props?.logoImage && (
            <img
              className={props?.logoClassName}
              src={props?.LogoSRC}
              alt={props?.logoALT}
            />
          )}

            {/* <h2>ALL DONE</h2>
            <p>LOREMddsdgsdfhgfdshh sdbvgyafsiydgvfytisgvdfy huisafhduihsaduyo hsdfuiohuisohfuo hsdiuofhuisdhfuio hsduifdhuioasdh hsuifhuid 
            </p> */}
          {props.children}
        </div>
      </div>
    </>
  )
}

export default BackgroundFrame
