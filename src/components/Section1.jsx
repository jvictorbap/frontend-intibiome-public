import React from 'react'
import banner from '../images/icons@2x.png'

function Section1() {
  return (
    <div>
      <div className='flex justify-center'>
        <h1 className='text-blue font-bold text-[31px] tracking-[.78px] mt-8 text-center'>we’re here to help</h1>
      </div>
      <div className='mt-[40px] text-darkGray text-center mx-auto w-[93%]'>
        <p className='tracking-[.4px] text-[16px] mb-2'>
          When it comes to caring for our most intimate areas, we’ve lost our connection.
        </p>
        <p className='tracking-[.4px] text-[16px] mb-2'>
          Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting the parts of our bodies that need it most.
        </p>
        <p className='tracking-[.4px] text-[16px]'>
          We’re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.
        </p>
      </div>
      <div className='flex justify-center mt-8'>
        <img src={banner} className="" alt="" />
      </div>
    </div>
  )
}

export default Section1