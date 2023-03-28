import React from 'react';
import './home.css';
import Horizontal1 from '../../assets/home-photos/horizontal1.jpg'
import Horizontal2 from '../../assets/home-photos/horizontal2.jpg'
import Vertical1 from '../../assets/home-photos/vertical1.jpg'
import Vertical2 from '../../assets/home-photos/vertical2.jpg'
import HomeSlideshow from '../../components/HomeSlideshow';
import HomeCountdown from '../../components/HomeCountdown';

/**
 * TODO: Add "float-in" animations to components. Didn't seem like there was a lot of documentation on float in,
 * so may need to just fade them in instead.
 * 
 * 
*/
const images = [
  {
    src: Horizontal1,
    alt: "Slide 1",
    className: "slide1"
  },
  {
    src: Horizontal2,
    alt: "Slide 2",
    className: "slide2"
  },
  {
    src: Vertical1,
    alt: "Slide 3",
    className: "slide3"
  },
  {
    src: Vertical2,
    alt: "Slide 4",
    className: "slide4"
  }
]

const Home = () => (
  <div className="home">
    <div className="dark-filter"></div>
    <HomeSlideshow images={images}/>
    <div className="home-txt">
      <div className="home-text-wrapper">
        <div className="home-txt-title">Anh Mai<br/>&<br/>Vu Dang</div>
        <div className="home-txt-date">07 . 29 . 2023</div>
      </div>
      <HomeCountdown targetDate={new Date('August 29, 2023 00:00:00')} />
    </div>
  </div>
)

export default Home;