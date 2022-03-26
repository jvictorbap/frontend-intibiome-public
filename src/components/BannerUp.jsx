import React from 'react'
import bannerMobile from '../images/banner-intibiome-02@2x.png';
import bannerDesktop from '../images/banner-hero@2x.png';

function Banner(props) {

  const [banner, setBanner] = React.useState();

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 640) {
        setBanner(bannerMobile);
      } else {
        setBanner(bannerDesktop);
      }
    });
    if (window.innerWidth < 640) {
      setBanner(bannerMobile);
    }
  }, [])

  return (
    <div className=''>
      <img src={banner} className={`w-full h-auto ${props.mt}`} alt="" />
    </div>
  )
}

export default Banner