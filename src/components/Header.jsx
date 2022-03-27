/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../images/Module 1 - Header 970x60025.png'
import lupa from '../images/ic.search.svg'
import { RiCloseLine } from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io'

function Header() {

  const [menuOpen, setMenuOpen] = React.useState(false)
  const [aboutOpen, setAboutOpen] = React.useState(false)
  const [productsOpen, setProductsOpen] = React.useState(false)
  const [intimateOpen, setIntimateOpen] = React.useState(false)

  function handleClick() {
    setMenuOpen(!menuOpen)
  }

  function hamburguer() {
    return (
      <div className='absolute z-10 bg-blue w-full h-screen font-semibold text-white tracking-[.32px]'>
        <nav className='mt-10 w-[119px] h-[705px] ml-4'>
          <ul>
            <li className='w-[181px] p-2 h-[47px]'>
              <button className='font-semibold'>
                <a className=''>brand philosophy</a>
              </button>
            </li>
          </ul>
          <ul>
            <li className='w-[181px] p-2 h-[47px]'>
              <button className='font-semibold'>
                <a className=''>product technology</a>
              </button>
            </li>
          </ul>
          <ul>
            <li className='w-[181px] p-2 h-[47px]'>
              <button className='font-semibold'>
                <a className=''>all products</a>
              </button>
            </li>
          </ul>
          <ul>
            <li className='w-[181px] p-2 h-[47px]'>
              <button className='font-semibold'>
                <a className=''>intibiome wellness</a>
              </button>
            </li>
          </ul>
          <ul>
            <li className='w-[181px] p-2 h-[47px]'>
              <button className='font-semibold'>
                <a className=''>intibiome active</a>
              </button>
            </li>
          </ul>
          <ul>
            <li className='w-[181px] p-2 h-[47px]'>
              <button className='font-semibold'>
                <a className=''>intibiome agecare</a>
              </button>
            </li>
          </ul>
          <ul>
            <li className='w-[181px] p-2 h-[47px]'>
              <button className='font-semibold'>
                <a className=''>article 1</a>
              </button>
            </li>
          </ul>
          <ul>
            <li className='w-[181px] p-2 h-[47px]'>
              <button className='font-semibold'>
                <a className=''>article 2</a>
              </button>
            </li>
          </ul>
          <ul>
            <li className='w-[181px] p-2 h-[47px]'>
              <button className='font-semibold'>
                <a className=''>article 3</a>
              </button>
            </li>
          </ul>
          <ul>
            <li className='w-[181px] p-2 h-[47px]'>
              <button className='font-semibold'>
                <a className=''>faq</a>
              </button>
            </li>
          </ul>
          <ul>
            <li className='w-[181px] p-2 h-[47px]'>
              <button className='font-semibold'>
                <a className=''>contact us</a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

  function aboutHandler(param) {
    setIntimateOpen(false)
    setProductsOpen(false)
    if (!aboutOpen && param) {
      setAboutOpen(param)
    } else if (aboutOpen && !param) {
      setAboutOpen(param)
    }
  }

  function aboutRender() {
    return (
      <div className='absolute z-10 flex w-full h-[49px] justify-center bg-brandGray'
        onMouseLeave={() => aboutHandler(false)}>
        <nav className='h-[49px] flex' onMouseOver={() => aboutHandler(true)} >
          <ul>
            <button className='w-[181px] h-[47px]'>
              <li>
                <a href="" className='text-white font-medium'>brand philosophy</a>
              </li>
            </button>
          </ul>
          <ul>
            <button className='w-[181px] h-[47px]'>
              <li>
                <a href="" className='text-white font-medium'>product technology</a>
              </li>
            </button>
          </ul>
        </nav>
      </div>
    )
  }

  function productHandler(param) {
    setMenuOpen(false)
    setIntimateOpen(false)
    if (!productsOpen && param) {
      setProductsOpen(param)
    } else if (productsOpen && !param) {
      setProductsOpen(param)
    }
  }

  function productRender() {
    return (
      <div className='absolute z-10 flex w-full h-[49px] justify-center bg-brandGray' onMouseLeave={() => productHandler(false)}>
        <nav className='h-[49px] flex'>
          <ul>
            <button className='w-[181px] h-[47px]'>
              <li>
                <a href="" className='text-white font-medium'>all products</a>
              </li>
            </button>
          </ul>
          <ul>
            <button className='w-[181px] h-[47px]'>
              <li>
                <a href="" className='text-white font-medium'>intibiome wellness</a>
              </li>
            </button>
          </ul>
          <ul>
            <button className='w-[181px] h-[47px]'>
              <li>
                <a href="" className='text-white font-medium'>intibiome active</a>
              </li>
            </button>
          </ul>
          <ul>
            <button className='w-[181px] h-[47px]'>
              <li>
                <a href="" className='text-white font-medium'>intibiome agecare</a>
              </li>
            </button>
          </ul>
        </nav>
      </div>
    )
  }

  function intimateHandler(param) {
    setAboutOpen(false)
    setProductsOpen(false)
    if (!intimateOpen && param) {
      setIntimateOpen(param)
    } else if (intimateOpen && !param) {
      setIntimateOpen(param)
    }
  }

  function intimateRender() {
    return (
      <div className='absolute z-10 flex w-full h-[49px] justify-center bg-brandGray'
        onMouseLeave={() => intimateHandler(false)}>
        <nav className='h-[49px] flex'>
          <ul>
            <button className='w-[181px] h-[47px]'>
              <li>
                <a href="" className='text-white font-medium'>article 1</a>
              </li>
            </button>
          </ul>
          <ul>
            <button className='w-[181px] h-[47px]'>
              <li>
                <a href="" className='text-white font-medium'>article 2</a>
              </li>
            </button>
          </ul>
          <ul>
            <button className='w-[181px] h-[47px]'>
              <li>
                <a href="" className='text-white font-medium'>article 3</a>
              </li>
            </button>
          </ul>
          <ul>
            <button className='w-[181px] h-[47px]'>
              <li>
                <a href="" className='text-white font-medium'>faq</a>
              </li>
            </button>
          </ul>
        </nav>
      </div>
    )
  }

  return (
    <header className=''>
      <nav nav className='flex w-full justify-around lg:justify-evenly items-center shadow-md'>
        <ul className='md:invisible'>
          <li>
            <button id='hamburguer' onClick={() => handleClick()}>
              {menuOpen ? <RiCloseLine /> : <AiOutlineMenu />}
            </button>
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
      </nav >
      {menuOpen ? hamburguer() : null}
      <div id='navbar' className='h-[49px] w-full bg-blue items-center hidden md:flex justify-center'>
        <nav className='flex justify-center h-full items-center'>
          <ul className='w-[190px] h-[48px] flex items-center' onMouseEnter={() => aboutHandler(true)}>
            <li className='w-full'>
              <a href="#0" className='text-white flex items-center font-medium gap-4 justify-center text-lg '>about us <IoIosArrowDown /></a>
            </li>
          </ul>
          <ul className='w-[190px] h-[48px] flex items-center'>
            <li className='w-full'>
              <a href="#0" onMouseEnter={() => productHandler(true)} className='text-white flex items-center font-medium gap-4 justify-center text-lg '>our products <IoIosArrowDown /></a>
            </li>
          </ul>
          <ul id='intimate' className='w-[190px] h-[48px] flex items-center'>
            <li className='w-full'>
              <a href="#0" onMouseEnter={() => intimateHandler(true)} className='text-white flex items-center font-medium gap-4 justify-center text-lg '>intimate health <IoIosArrowDown /></a>
            </li>
          </ul>
          <ul id='intimate' className='w-[190px] h-[48px] flex items-center'>
            <li className='w-full'>
              <a href="#0" className='text-white flex items-center font-medium gap-4 justify-center text-lg '>contact us</a>
            </li>
          </ul>
        </nav>
      </div>
      {aboutOpen ? aboutRender() : null}
      {productsOpen ? productRender() : null}
      {intimateOpen ? intimateRender() : null}
    </header >
  )
}

export default Header