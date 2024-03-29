import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Cart from './Pages/Cart/Cart';
import Shop from './Pages/Shop/Shop';
import Checkout from './components/Checkout';
import { CartProvider } from 'react-use-cart';
import ArtistProfile from './Pages/Artist/ArtistProfile'; // Import the ArtistProfile component
import Register from './components/Registration/Register'
import Login from './components/Registration/Login';
import Home from './components/Home';
import About from './components/About'
import './App.css'

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

          <Route path='/Home' element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />} />
          {/* <Route path='/ArtistList' element={<ArtistList />} /> */}
          <Route path='/artist/:id' element={<ArtistProfile />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
