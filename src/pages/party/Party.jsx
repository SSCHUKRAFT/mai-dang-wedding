import React, { useState } from 'react';
import './party.css';
import Background from '../../assets/rsvp-bg.jpg'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PartyMember from '../../components/PartyMember';

import Trang from '../../assets/wedding-party-photos/trang_circle.png';
import Linh from '../../assets/wedding-party-photos/linh_circle.png';
import Lilly from '../../assets/wedding-party-photos/lilly_circle.png';
import Bich from '../../assets/wedding-party-photos/bich_circle.png';
import Quyen from '../../assets/wedding-party-photos/quyen_circle.png';
import Katelyn from '../../assets/wedding-party-photos/katelyn_circle.png';
import Yilmaz from '../../assets/wedding-party-photos/yilmaz_circle.png';
import Douglas from '../../assets/wedding-party-photos/douglas_circle.png';
import Daniel from '../../assets/wedding-party-photos/daniel_circle.png';
import Quinton from '../../assets/wedding-party-photos/quinton_circle.png';
import Andy from '../../assets/wedding-party-photos/andy_circle.png';
import Christopher from '../../assets/wedding-party-photos/christopher_circle.png';

const Party = () => {
  const [party, setParty] = useState(0);

  const handlePartyChange = (event, newParty) => {
    console.log(newParty)
    setParty(newParty);
  }
  
  const bgStyles = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100%',
    scale: '1',
    position: 'absolute'
  };

  return (
    <div className="party">
      <div style={bgStyles}>
        <div className="party-dark-filter" />
        <div className="party-introducing">Introducing...</div>
        <div className="party-title">The Wedding Party!</div>
        <div className="tabs-container">
          <Tabs value={party} onChange={handlePartyChange}>
            <Tab style={{textTransform: 'none'}} disableRipple label="Bridesmaids" />
            <Tab style={{textTransform: 'none'}} disableRipple label="Groomsmen" />
          </Tabs>
          {party === 0 ? 
            <div className="party-members">
              <PartyMember image={Trang} name="Trang Mai" />
              <PartyMember image={Linh} name="Linh Mai" />
              <PartyMember image={Lilly} name="Lilly Nguyen" />
              <PartyMember image={Bich} name="Bich Pham" />
              <PartyMember image={Quyen} name="Quyen Pham" />
              <PartyMember image={Katelyn} name="Katelyn Dang" />
            </div>
            :
            <div>Hi</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Party;