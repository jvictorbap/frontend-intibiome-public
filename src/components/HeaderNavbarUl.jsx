import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

function HeaderNavbarUl(props) {
  return (
    <>
      <ul className='w-[190px] h-[48px] flex items-center'>
        <li className='w-full'>
          <a href="#0" className='text-white flex items-center font-medium gap-4 justify-center text-lg '>{props.text} {props.icone ? <IoIosArrowDown /> : null}</a>
        </li>
      </ul>
    </>
  )
}

export default HeaderNavbarUl