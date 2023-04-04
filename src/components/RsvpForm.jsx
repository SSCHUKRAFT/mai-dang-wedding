import { useState } from "react";
import './rsvpform.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import emailjs from "@emailjs/browser";

function RsvpForm() {
  const [numGuests, setNumGuests] = useState(1);
  const [firstNames, setFirstNames] = useState(Array(numGuests).fill(""));
  const [lastNames, setLastNames] = useState(Array(numGuests).fill(""));
  const [foodSelections, setFoodSelections] = useState(Array(numGuests).fill(""));

  function handleNumGuestsChange(event) {
    const newNumGuests = parseInt(event.target.value);
    setNumGuests(newNumGuests);
    setFoodSelections(prevSelections => {
      const newSelections = [...prevSelections];
      while (newSelections.length < newNumGuests) {
        newSelections.push("");
      }
      return newSelections.slice(0, newNumGuests);
    });

    setFirstNames(prevFirstNames => {
      const newFirstNames = [...prevFirstNames];
      while (newFirstNames.length < newNumGuests) {
        newFirstNames.push("");
      }
      return newFirstNames.slice(0, newNumGuests);
    });

    setLastNames(prevLastNames => {
      const newLastNames = [...prevLastNames];
      while (newLastNames.length < newNumGuests) {
        newLastNames.push("");
      }
      return newLastNames.slice(0, newNumGuests);
    });
  }

  const handleFoodSelectionChange = (event, index) => {
    const newFoodSelections = [...foodSelections];
    newFoodSelections[index] = event.target.value;
    setFoodSelections(newFoodSelections);
  }

  const handleFirstNameChange = (event, index) => {
    const newFirstNames = [...firstNames];
    newFirstNames[index] = event.target.value;
    setFirstNames(newFirstNames);
  }

  const handleLastNameChange = (event, index) => {
    const newLastNames = [...lastNames];
    newLastNames[index] = event.target.value;
    setLastNames(newLastNames);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const templateParams = {
      guestCount: numGuests,
      guestList: Array(numGuests).fill().map((_, i) => (
        `Guest ${i + 1}: ${firstNames[i]} ${lastNames[i]}, ${foodSelections[i]}`
      )).join('\n')
    };

    emailjs.send('service_yuq2dkl', 'template_zj5oroc', templateParams, 'euCgll_J6Ylx_2x2d')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('RSVP submitted successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to submit RSVP. Please try again.');
      });
  }

  return (
    <div className="form-container">
      <div className="guest-select">
        <div className="guest-select-text-label">How many guests are you bringing?</div>
        <div className="guest-select-dropdown">
          <Select value={numGuests} onChange={handleNumGuestsChange} size="small">
            {[...Array(10)].map((_, i) => (
              <MenuItem key={i} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="form-groups">
        {[...Array(numGuests)].map((_, i) => (
          <div key={i}>
            <div className="form-group">
              <div className="guest-num-txt">Guest {i + 1}</div>
              <div className="name-fields">
                <div className="name-field">
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small" 
                    sx={{ width: '100%' }} 
                    onChange={(event) => handleFirstNameChange(event, i)} />
                </div>
                <div className="name-field">
                  <TextField 
                    label="Last Name" 
                    variant="outlined" 
                    size="small" 
                    sx={{ width: '100%' }} 
                    onChange={(event) => handleLastNameChange(event, i)} />
                </div>
              </div>
                <div className="food-selection">
                  <div className="food-selection-text">Food Selection:</div>
                  <div className="food-selection-dropdown">
                    <FormControl size="small" variant="outlined" style={{ width: '100%' }}>
                      <InputLabel id={`food-label-${i}`}>Food</InputLabel>
                      <Select 
                        value={foodSelections[i]}
                        id={`food-select-${i}`}
                        labelId={`food-label-${i}`}
                        label="Food" 
                        onChange={(event) => handleFoodSelectionChange(event, i)}
                      >
                        <MenuItem value="filet mignon">Filet Mignon</MenuItem>
                        <MenuItem value="fish">Fish</MenuItem>
                        <MenuItem value="chicken">Chicken</MenuItem>
                        <MenuItem value="vegetarian">Vegetarian</MenuItem>
                      </Select>
                    </FormControl>  
                  </div>
                </div>
              <div className="divider" />
            </div>
          </div>
        ))}
        <button onClick={handleFormSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default RsvpForm;