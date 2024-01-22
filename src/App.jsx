import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import LandingGallery from './components/LandingGallery';
import Cart from './Pages/Cart/Cart';
import Shop from './Pages/Shop/Shop';
import Checkout from './components/Checkout';
import { CartProvider } from 'react-use-cart';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingFinished = () => {
    setLoading(false);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar key='navbar' loading={false} />
        <Routes>
          <Route
            path='/'
            element={
              <LoadingScreen
                key='loading'
                onFinished={handleLoadingFinished}
                loading={loading}
              />
            }
          />
          <Route path='/Home' element={<LandingGallery />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />} />
          {/* other components */}
        </Routes>
      </Router>{' '}
    </CartProvider>
  );
}

export default App;
