import React from 'react'
import bannerDown from '../images/banner-intibiome-05.png';

function Banner(props) {
  return (
    <div className=''>
      <img src={bannerDown} className={`w-full h-auto ${props.mt}`} alt="" />
    </div>
  )
}

export default Banner