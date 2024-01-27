import { NavLink } from 'react-router-dom'
import Logo from '../assets/logos/mfo-full-logo-nobg.svg'
import PropTypes from 'prop-types'
import { ShoppingCart } from 'phosphor-react'
import { useCart } from 'react-use-cart'
import { useState } from 'react'


const Navbar = ({ loading }) => {
  const { totalItems } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return loading ? null : (
    <nav className="fixed z-10 flex items-center justify-between w-full h-24 bg-white border-black border-3">
      <div className="flex items-center justify-center w-full lg:w-auto lg:justify-start">
        <button
          className="block -ms-3.5 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <img src={Logo} alt="MFO Logo" className="w-auto h-32 ms-10 logo" />
      </div>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto flex-grow justify-between`}
      >
        <div className="flex-none" />
        <NavLink to="/Home" className="px-10 text-black rounded lg:mx-2 lg:my-0">
          Home
        </NavLink>
        <NavLink to="/about" className="px-10 text-black rounded lg:mx-2 lg:my-0">
          About
        </NavLink>
        <NavLink to="/Register" className="px-10 text-black rounded py-26 lg:mx-2 lg:my-0">
          Register
        </NavLink>
        <NavLink to="/Login" className="px-10 text-black rounded lg:mx-2 lg:my-0">
          Login
        </NavLink>
        <NavLink to="/shop" className="px-10 text-black rounded lg:mx-2 lg:my-0">
          Product
        </NavLink>
        <NavLink to="/Cart" className="relative px-10 text-black rounded lg:mx-2 lg:my-0">
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute top-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {totalItems}
            </span>
          )}
        </NavLink>
        <div className="flex-none" />
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 z-10 w-full h-screen bg-white">
          <div className="flex items-center justify-center w-full h-24 border-b-2 border-black">
            <button
              className="block -ms-3.5 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img src={Logo} alt="MFO Logo" className="w-auto h-32 ms-10 logo" />
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <NavLink
              to="/Home"
              className="px-10 my-2 text-black rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="px-10 my-2 text-black rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/Register"
              className="px-10 my-2 text-black rounded py-26"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </NavLink>
            <NavLink
              to="/Login"
              className="px-10 my-2 text-black rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/shop"
              className="px-10 my-2 text-black rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </NavLink>
            <NavLink
              to="/Cart"
              className="relative px-10 my-2 text-black rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default Navbar