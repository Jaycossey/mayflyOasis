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
    <div
      className='cart-container 
                    absolute
                    mt-28
                    w-full
                    p-10
                    left-0
                    right-10
                    bg-white
                    bg-opacity-50'
    >
      <h2>Cart</h2>
      {items.map((item) => (
        <div key={item.id} className='cart-item'>
          <img src={item.images[0]} alt='cart-item-image' />
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
            <button  onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <p className='cart-total'>Total: £{cartTotal}</p>
      <button className='cart-checkout-btn' onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
