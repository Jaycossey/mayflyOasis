import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logos/mfo-full-logo-nobg.svg' 
import PropTypes from 'prop-types';

const Navbar = ({ loading}) =>(
  loading ? null:
  <nav className="fixed z-10 flex items-center justify-between w-full h-20 border-2 border-black">
    <div className="flex items-center justify-center w-full max-w-lg mx-auto overflow-hidden lg:w-auto lg:mx-0">
      <img src={Logo} alt="MFO Logo" className="h-20 w-30 m30" />
      <span className="hidden text-xl font-semibold tracking-tight lg:block"></span>
    </div>
    <div className="flex items-center justify-center w-full max-w-xs mx-auto lg:w-auto lg:mx-0 lg:justify-end">
      <NavLink to="/home" className="px-6 py-2 text-black rounded lg:mx-2 lg:my-0">Home</NavLink>
      <NavLink to="/about" className="px-6 py-2 text-black rounded lg:mx-2 lg:my-0">About</NavLink>
      <NavLink to="/contact" className="px-6 py-2 text-black rounded lg:mx-2 lg:my-0">Contact</NavLink>
    </div>
  </nav>
)

Navbar.propTypes = {
  loading: PropTypes.bool.isRequired
}
export default Navbar;