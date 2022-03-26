import React from 'react'
import mulher from '../images/mulher 2x.png'
import idosa from '../images/idosa 2x.png'
import agua from '../images/agua 2x.png'
import SliderDown from './SliderDown';

function Discover() {

  const [slider, setSlider] = React.useState(false);


  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setSlider(true);
      } else {
        setSlider(false);
      }
    });
    if (window.innerWidth < 768) {
      setSlider(true);
    }
  }, [])

  function threeProducts() {
    return (
      <div className='flex justify-center gap-8 mt-8 mx-auto'>
        <div className='flex flex-col shadow-product rounded-2xl'>
          <div>
            <img src={mulher} className='rounded-t-xl' alt="" />
          </div>
          <div className='w-full h-[100px] p-1 shadow-xl rounded-2xl'>
            <h3 className='text-darkGray text-[20px] tracking-[.4px] mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>
        </div>
        <div className='flex flex-col shadow-product rounded-2xl'>
          <div>
            <img src={idosa} className='rounded-t-xl' alt="" />
          </div>
          <div className='w-full h-[100px] p-1 shadow-xl rounded-2xl'>
            <h3 className='text-darkGray text-[20px] tracking-[.4px] mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>
        </div>
        <div className='flex flex-col shadow-product rounded-2xl'>
          <div>
            <img src={agua} className='rounded-t-xl' alt="" />
          </div>
          <div className='w-full h-[100px] p-1 shadow-xl rounded-2xl'>
            <h3 className='text-darkGray text-[20px] tracking-[.4px] mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='xl:w-[1134px] mx-auto' data-aos="zoom-in" data-aos-duration="2000">
      <div className='flex justify-center'>
        <h1 className='text-blue font-bold text-[31px] tracking-[.4px] mt-8 text-center'>keep up to date with our discoveries</h1>
      </div>
      {/* CARD */}
      {slider ? <SliderDown /> : threeProducts()}
      <button className='bg-blue w-[93%] flex justify-center mt-12 rounded-md h-[64px] items-center text-[20px] tracking-[.4px] mx-auto md:w-[312px]'>
        <h1 className='text-white'>see more</h1>
      </button>
    </div>
  )
}

export default Discover