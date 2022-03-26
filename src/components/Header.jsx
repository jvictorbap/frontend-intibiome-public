/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../images/Module 1 - Header 970x60025.png'
import lupa from '../images/ic.search.svg'

function Header() {
  return (
    <header className=''>
      <nav className='flex w-full justify-around items-center shadow-md'>
        <ul className='md:invisible'>
          <li>
            <a href="">
              <AiOutlineMenu />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <img src={logo} className="w-[143px] h-[58px]" alt="" />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <img src={lupa} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header