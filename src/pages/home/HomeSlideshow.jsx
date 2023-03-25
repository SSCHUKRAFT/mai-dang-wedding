import React from 'react';
import './homeslideshow.css';
import horizontal1 from '../../assets/home-photos/horizontal1.jpg';
import horizontal2 from '../../assets/home-photos/horizontal2.jpg';
import verticle1 from '../../assets/home-photos/verticle1.jpg';
import verticle2 from "../../assets/home-photos/verticle2.jpg";
import { Fade } from 'react-slideshow-image';

/**
 * TODO: Find some solution for the verticle images on wide displays (maybe dall-e)
 * Add Text as shown in figma, however, remove it when sidebar is open
 */


const HomeSlideshow = () => (
  <div className="home-slideshow">
    <Fade onChange={function noRefCheck(){}} onStartChange={function noRefCheck(){}} arrows={false} autoplay={true}>
      <div className="slide">
        <div className="image-container">
          <img className="image-one" src={horizontal1} alt="horizontal-one" />
        </div>
      </div>
      <div className="slide">
        <div className="image-container">
          <img className="image-two" src={horizontal2} alt="horizontal-two" />
        </div>
      </div>
      <div className="slide">
        <div className="image-container">
          <img className="image-three" src={verticle1} alt="verticle-one" />
        </div>
      </div>
      <div className="slide">
        <div className="image-container">
          <img className="image-four" src={verticle2} alt="verticle-two" />
        </div>
      </div>
    </Fade>
  </div>
)

export default HomeSlideshow;