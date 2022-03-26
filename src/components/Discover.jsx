import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import mulher from '../images/mulher 2x.png'
import idosa from '../images/idosa 2x.png'
import agua from '../images/agua 2x.png'

function Discover() {
  return (
    <div>
      <div className='flex justify-center'>
        <h1 className='text-blue font-bold text-[31px] tracking-[.4px] mt-8 text-center'>keep up to date with our discoveries</h1>
      </div>
      {/* CARD */}
      <div className='mt-8 mx-auto flex'>
        <Splide
          options={
            {
              interval: 3000,
              rewind: true,
              autoplay: true,
              arrows: false,
              pagination: false,
              type: 'slide',
              perPage: 1,
              drag: true,
              gap: '0.5rem',
              width: '100%',
              padding: '5%',
              cover: true,
            }
          }>
          <SplideSlide>
            <div className='flex flex-col shadow-product rounded-xl'>
              <div>
                <img src={mulher} className='rounded-t-xl' alt="" />
              </div>
              <div className='w-full h-[90px] p-1 shadow-xl'>
                <h3 className='text-darkGray text-[20px] tracking-[.4px] mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='flex flex-col shadow-product rounded-xl'>
              <div>
                <img src={idosa} className='rounded-t-xl' alt="" />
              </div>
              <div className='w-full h-[90px] p-1 shadow-xl'>
                <h3 className='text-darkGray text-[20px] tracking-[.4px] mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='flex flex-col shadow-product rounded-xl'>
              <div>
                <img src={agua} className='rounded-t-xl' alt="" />
              </div>
              <div className='w-full h-[90px] p-1 shadow-xl'>
                <h3 className='text-darkGray text-[20px] tracking-[.4px] mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <button className='bg-blue w-[93%] flex justify-center mt-12 rounded-md h-[64px] items-center text-[20px] tracking-[.4px] mx-auto'>
        <h1 className='text-white'>see more</h1>
      </button>
    </div>
  )
}

export default Discover