import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import './App.css'
import


 function App(){
  const [loading, setLoading] = useState(true);

  const handleLoadingFinished = () => {
    setLoading(false)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={[<LoadingScreen key="loading" onFinished={handleLoadingFinished} />, <Navbar key="navbar" />]} />
        {/* other components */}
      </Routes>
    </Router>
  )
}


export default App;