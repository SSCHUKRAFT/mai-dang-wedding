import React from 'react';
import './home.css';
import Horizontal1 from '../../assets/home-photos/horizontal1.jpg'
import Horizontal2 from '../../assets/home-photos/horizontal2.jpg'
import Vertical1 from '../../assets/home-photos/vertical1.jpg'
import Vertical2 from '../../assets/home-photos/vertical2.jpg'
import HomeSlideshow from './HomeSlideshow';

/**
 * TODO: Find some solution for the verticle images on wide displays (maybe dall-e)
 * Add Text as shown in figma, however, remove it when sidebar is open
 * 
 * Find out why I can't change the height and width of home-txt
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

    </div>
  </div>
)

export default Home;