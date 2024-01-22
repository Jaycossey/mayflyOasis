import React from 'react';
import './Checkout.css'; // Importing the CSS file

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Checkout successful!');
  };

  return (
    <div className='checkout-form'>
      {' '}
      <form onSubmit={handleSubmit}>
        <h1>Checkout</h1>
        <input type='text' placeholder='Full Name' required />
        <input type='email' placeholder='Email Address' required />
        <input type='text' placeholder='Shipping Address' required />
        <input type='text' placeholder='Card Number' required />
        <input type='text' placeholder='Expiration Date' required />
        <input type='text' placeholder='CVV' required />
        <button type='submit'>Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
