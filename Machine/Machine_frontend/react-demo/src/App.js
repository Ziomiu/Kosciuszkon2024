import logo from './logo.jpg';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

function App() {

  const [showButton, setShowButton] = useState(true);
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);

  const handleButtonClick = () => {
    setShowButton(false);
    setShowPhoneNumberInput(true);
  };

  const handlePhoneNumberSubmit = (event) => {
    event.preventDefault();
    // Tutaj możesz obsłużyć dane wprowadzone przez użytkownika, np. przesłać numer telefonu na serwer
    console.log(event.target.phoneNumber.value);
    // Możesz także zresetować widok po zakończeniu wprowadzania numeru telefonu
    setShowButton(true);
    setShowPhoneNumberInput(false);
  };


  return (
    <div className="App">
      {showButton && (
        <div className="logo-container">
          <img src={logo} alt="Logo" className="App-logo" />
          <Button variant="contained" className="large-button" onClick={handleButtonClick}>
            Chcę oddać butelki
          </Button>
        </div>
      )}
      {showPhoneNumberInput && (
        <div className="phone-input-container">
          <div className="logo-container">
          <img src={logo} alt="Logo" className="App-logo" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button variant="contained" color="primary" type="submit">
              Potwierdź
            </Button>
        </div>
          <form onSubmit={handlePhoneNumberSubmit}>

          
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
