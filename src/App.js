import { useState } from 'react';

import Logo from './assets/whatsapp-logo.svg';

export default function App() {
  const [num, setNum] = useState(123456789);
  function redirect(e) {
    e.preventDefault();
    window.open(
      `https://web.whatsapp.com/send/?phone=%2B${num.replace(
        /\D/g,
        ''
      )}&text&type=phone_number&app_absent=0`
    );
  }
  return (
    <div className='container'>
      <img className='hero-logo' src={Logo} width='64px' />
      <h1 className='heading'>
        Send WhatsApp <br />
        without Saving Contact
      </h1>
      <form onSubmit={(e) => redirect(e)}>
        <input
          autoFocus
          className='number'
          placeholder='Enter number'
          type='text'
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <span className='button'>
          <input type='submit' className='submit' value='Message' />
          <img className='logo' src={Logo} width='20px' />
        </span>
      </form>
    </div>
  );
}
