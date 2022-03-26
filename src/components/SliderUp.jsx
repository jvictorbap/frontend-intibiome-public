import React from 'react'
import imageMaskBlue from '../images/image mask blue@2x.png'
import imageMaskRed from '../images/image mask red@2x.png'
import imageMaskGreen from '../images/image mask green@2x.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

function SliderUp() {
  return (
    <div>
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
              fixedHeight: '530px',
              width: '1068px',
              padding: '5%',
              cover: true,
            }
          }>
          <SplideSlide>
            <div className='flex flex-col shadow-product justify-center items-center'>
              <div>
                <img src={imageMaskBlue} className='h-[351px] rounded-xl' alt="" />
              </div>
              <div className='w-2/3 h-[90px]'>
                <h3 className='text-darkGray text-[20px] tracking-[.78px] mt-4 text-center'>intibiome wellness daily intimate wash</h3>
              </div>
              <div className='bg-blue w-full rounded-b-xl mt-4 h-[73px] flex items-center justify-center'>
                <h3 className='text-white font-semibold text-[25px] tracking-[.5px] text-center'>wellness</h3>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='flex flex-col shadow-product justify-center items-center'>
              <div>
                <img src={imageMaskGreen} className='h-[351px] rounded-xl' alt="" />
              </div>
              <div className='w-2/3 h-[90px]'>
                <h3 className='text-darkGray text-[20px] tracking-[.78px] mt-4 text-center'>intibiome active extra protection intimate wash</h3>
              </div>
              <div className='bg-green w-full rounded-b-xl mt-4 h-[73px] flex items-center justify-center'>
                <h3 className='text-white font-semibold text-[25px] tracking-[.5px] text-center'>active</h3>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='flex flex-col shadow-product justify-center items-center'>
              <div>
                <img src={imageMaskRed} className='h-[351px] rounded-xl' alt="" />
              </div>
              <div className='w-2/3 h-[90px]'>
                <h3 className='text-darkGray text-[20px] tracking-[.78px] mt-4 text-center'>intibiome agecare dryness relief intimate wash</h3>
              </div>
              <div className='bg-red w-full rounded-b-xl mt-4 h-[73px] flex items-center justify-center'>
                <h3 className='text-white font-semibold text-[25px] tracking-[.5px] text-center'>agecare</h3>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  )
}

export default SliderUp