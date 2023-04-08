import React from 'react';
import './travel.css';
import Background from '../../assets/page-backgrounds/travel-bg.jpg'

const Travel = () => {
  const bgStyles = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100%',
    scale: '1',
    position: 'absolute',
  };
  
  return (
    <div className="travel">
      <div style={bgStyles}>
        <div className="travel-title">Travel</div>
      </div>
    </div>
  )
}

export default Travel;