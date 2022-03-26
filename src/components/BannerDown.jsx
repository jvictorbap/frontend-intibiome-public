import React from 'react'
import bannerMobile from '../images/banner-intibiome-05.png';
import bannerDesktop from '../images/Asset 22@2x.png';

function Banner(props) {

  const [banner, setBanner] = React.useState(bannerDesktop);


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
    <div className='' data-aos="zoom-in" data-aos-duration="2000">
      <img src={banner} className={`w-full h-auto ${props.mt}`} alt="" />
    </div>
  )
}

export default Banner