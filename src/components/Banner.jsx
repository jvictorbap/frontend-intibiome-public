import React from 'react'

function Banner(props) {
  return (
    <div className='banner1'>
      <img src={props.banner} className={`w-full h-auto ${props.mt}`} alt="" />
    </div>
  )
}

export default Banner