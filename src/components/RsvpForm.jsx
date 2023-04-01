import { useState } from "react";
import './rsvpform.css'

function RsvpForm() {
  const [numGuests, setNumGuests] = useState(1);

  function handleNumGuestsChange(event) {
    setNumGuests(parseInt(event.target.value));
  }

  return (
    <form>
      <div className="guest-select">
        <div className="guest-select-text-label">How many guests are you bringing?</div>
        <div className="guest-select-dropdown">
          <select value={numGuests} onChange={handleNumGuestsChange}>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-groups">
        {[...Array(numGuests)].map((_, i) => (
          <div key={i}>
            <div className="form-group">
              <div className="guest-num-txt">Guest {i + 1}</div>
              <div className="name-fields">
                <div className="name-field">
                  <input type="text" placeholder="First Name..." />
                </div>
                <div className="name-field">
                  <input type="text" placeholder="Last Name..." />
                </div>
              </div>
                <div className="food-selection">
                  <div className="food-selection-text">Food Selection:</div>
                  <div className="food-selection-dropdown">
                    <select>
                      <option value="" disabled>Select Food</option>
                      <option value="filet">Filet Mignon</option>
                      <option value="fish">Fish</option>
                      <option value="chicken">Chicken</option>
                      <option value="vegetarian">Vegetarian</option>
                    </select>
                  </div>
                </div>
              <div className="divider" />
            </div>
          </div>
        ))}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default RsvpForm;