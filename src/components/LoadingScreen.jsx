import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Logo from '../assets/logos/mfo-logo-icon.svg';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative loading-screen ${
        loading ? 'h-screen overflow-hidden' : 'h-screen'
      }`}
    >
      {loading && (
        <div className='absolute inset-0 flex justify-center loading-content'>
          <div className='logo-container'>
            <img
              src={Logo}
              alt='MFO Logo'
              className='duration-2000ms w-90 h-90 animate-spin'
            />
          </div>
        </div>
      )}
      {!loading && <Navbar />}
    </div>
  );
};

export default LoadingScreen;
