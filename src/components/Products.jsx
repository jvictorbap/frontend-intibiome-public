import React from 'react'
import imageMaskBlue from '../images/image mask blue@2x.png'
import imageMaskRed from '../images/image mask red@2x.png'
import imageMaskGreen from '../images/image mask green@2x.png'
import SliderUp from './SliderUp';


function Products() {

  const [slider, setSlider] = React.useState(false);


  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setSlider(true);
      } else {
        setSlider(false);
      }
    });
  }, [])

  function threeProducts() {
    return (
      <div className='flex gap-8 justify-center mx-auto mt-16'>
        <div className='flex flex-col shadow-product justify-center items-center w-1/3'>
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
        <div className='flex flex-col shadow-product justify-center items-center w-1/3'>
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
        <div className='flex flex-col shadow-product justify-center items-center w-1/3'>
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
      </div>
    )
  }

  return (
    <div className='xl:max-w-[1134px] mx-auto mt-16'>
      <div className='flex justify-center'>
        <h1 className='text-blue font-bold text-[31px] tracking-[.78px] mt-8 text-center sm:text-[39px]'>our products</h1>
      </div>
      {/* CARD */}
      {slider ? <SliderUp /> : threeProducts()}
    </div>
  )
}

export default Products