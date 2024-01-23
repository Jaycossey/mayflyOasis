import { NavLink } from 'react-router-dom';
import Logo from '../assets/logos/mfo-full-logo-nobg.svg';
import PropTypes from 'prop-types';
import { ShoppingCart } from 'phosphor-react';
import { useCart } from 'react-use-cart';

const Navbar = ({ loading }) => {
  const { totalItems } = useCart();

  return loading ? null : (
    <nav className='fixed z-10 flex items-center justify-between w-full h-20 bg-white border-2 border-black'>
      <div className='flex items-center justify-center w-full max-w-lg mx-auto overflow-hidden lg:w-auto lg:mx-0'>
        <img src={Logo} alt='MFO Logo' className='h-20 w-30 m30' />
        {/* Other content if needed */}
      </div>
      <div className='flex items-center justify-center w-full max-w-xs mx-auto lg:w-auto lg:mx-0 lg:justify-end'>
        <NavLink
          to='/Home'
          className='px-16 py-2 text-black rounded lg:mx-2 lg:my-0'
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className='px-6 py-2 text-black rounded lg:mx-2 lg:my-0'
        >
          About
        </NavLink>
        <NavLink
          to='/contact'
          className='px-16 rounded py-26text-black lg:mx-2 lg:my-0'
        >
          Contact
        </NavLink>
        <NavLink
          to='/ArtistList'
          className='px-16 rounded py-26text-black lg:mx-2 lg:my-0'
        >
          Artist
        </NavLink>
        <NavLink
          to='/shop'
          className='px-16 rounded py-26text-black lg:mx-2 lg:my-0'
        >
          Product
        </NavLink>
        <NavLink
          to='/Cart'
          className='px-16 rounded py-26text-black lg:mx-2 lg:my-0 relative'
        >
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className='absolute top-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
              {totalItems}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Navbar;
