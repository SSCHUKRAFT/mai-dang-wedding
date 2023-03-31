import React from 'react';
import './rsvp.css';
import Background from '../../assets/rsvp-bg.jpg'

const Rsvp = () => {
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
    <div className="rsvp">
      <div style={bgStyles} />
        <div className="rsvp-title">RSVP</div>
        <div className="rsvp-form-container">
          <div className="rsvp-form">

          </div>
          <div className="rsvp-submit-btn-container">

          </div>
        </div>
    </div>
  )
}

export default Rsvp;