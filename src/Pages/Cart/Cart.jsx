import { useCart } from 'react-use-cart';
import './cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { items, cartTotal, updateItemQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/Checkout');
  };

  return (
    <div className='cart-container absolute mt-28 w-full p-10 left-0 right-10 bg-white bg-opacity-85 rounded-lg'>
      <div className='cart-heading'>
        <h2>Cart</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
        {items.map((item) => (
          <div
            key={item.id}
            className='cart-item bg-white p-4 shadow-md rounded-lg'
          >
            <div className='cart-image-container'>
              <img src={item.images[0]} alt='cart-item-image' />
            </div>
            <div className='item-content'>
              <h3>{item.title}</h3>
              <p>Price: £{item.price}</p>
              <div className='cart-item-actions'>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className='cart-total'>Total: £{cartTotal}</p>
      <button className='cart-checkout-btn' onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
