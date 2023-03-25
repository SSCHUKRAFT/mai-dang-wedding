import React from 'react';
import './home.css';
import HomeSlideshow from './HomeSlideshow';

/**
 * TODO: Find some solution for the verticle images on wide displays (maybe dall-e)
 * Add Text as shown in figma, however, remove it when sidebar is open
 * 
 * Find out why I can't change the height and width of home-txt
 */


const Home = () => (
  <div className="home">
    <HomeSlideshow />
    <div className="home-txt">
      <div className="home-txt-title">
        Anh Mai<br />
        &<br />
        Vu Dang
      </div>
      <div className="home-txt-countdown">

      </div>
    </div>
  </div>
)

export default Home;