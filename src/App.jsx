import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
//import LandingGallery from './components/landingGallery'
import Home from './components/Home'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadingFinished = () => {
    setLoading(false)
  }

  return (
    <Router>
      <Navbar key="navbar" />

      <Routes>
        
        
        <Route path="/" element={<LoadingScreen
              key="loading"
              onFinished={handleLoadingFinished}
              loading={loading}
            />
          }
        />
        {/* other components */}
        {/* <Route path="/*" element={<LandingGallery />} /> */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App