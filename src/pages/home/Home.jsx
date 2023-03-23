import React from 'react';
import './home.css';
import horizontal1 from '../../assets/home-photos/horizontal1.jpg';
import horizontal2 from '../../assets/home-photos/horizontal2.jpg';
import verticle1 from '../../assets/home-photos/verticle1.jpg';
import verticle2 from "../../assets/home-photos/verticle2.jpg";
import { Fade } from 'react-slideshow-image';

/**
 * Use "autoplay" to determine if the image will fade automatically or not.
 * To test each image individually, comment out the other images
 * TODO: fix image sizing and positioning in css
 */


const Home = () => (
  <div className="home">
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

export default Home;