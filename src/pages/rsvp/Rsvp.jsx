import React from 'react';
import './rsvp.css';

const Rsvp = ({sidebarOpen}) => (
  <div className="rsvp">
    {sidebarOpen ? <div>RSVP</div> : null}
  </div>
)

export default Rsvp;