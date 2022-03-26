/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../images/Module 1 - Header 970x60025.png'
import lupa from '../images/ic.search.svg'
import HeaderNavbarUl from './HeaderNavbarUl'

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
              <img src={logo} className="w-[143px] h-[58px] md:w-[195px] md:h-[79px]" alt="" />
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
      <div className='h-[49px] w-full bg-blue items-center hidden md:flex justify-center'>
        <nav className='flex justify-center h-full items-center'>
          <HeaderNavbarUl text="about us" icone='true' />
          <HeaderNavbarUl text="our products" icone='true' />
          <HeaderNavbarUl text="intimate health" icone='true' />
          <HeaderNavbarUl text="contact us" />
        </nav>
      </div>
    </header>
  )
}

export default Header