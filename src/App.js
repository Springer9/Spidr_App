import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [costGuess, setCostGuess] = useState('');

  const [spidrPin,setSpidrPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      phone,
      email,
      costGuess,
      spidrPin
    )
  }
  return (
    <div className="form-container">
      <h2>Spidr Air Fryer Interest Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <input
          type="text"
          name="FirstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          />
          <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          name="costGuess"
          placeholder="Guess the Air Fryer’s Cost ($)"
          value={costGuess}
          onChange={(e) => setCostGuess(e.target.value)}
        />
        <input
          type="text"
          name="spidrPin"
          placeholder="####-####-####-####"
          value={spidrPin}
          onChange={(e) => {
          let raw = e.target.value.replace(/\D/g, '').slice(0, 16);
          let formatted = raw.match(/.{1,4}/g)?.join('-') || '';
          setSpidrPin(formatted);
          }}
          />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
