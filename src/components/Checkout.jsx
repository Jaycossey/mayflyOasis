import './Checkout.css';
const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Checkout successful!');
  };

  return (
    <div className='checkout-form w-screen h-10/12 pt-40'>
      {' '}
      <form className="relative my-auto mx-auto" onSubmit={handleSubmit}>
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
