import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './components/Gallery';
import artists from './components/Artists';
import About from './components/About';

function App() {

  const randomNumber = Math.floor(Math.random() * 100); // will generate a random number between 0 and 100, WILL NEED TO BE EDITED this is not the final function
  const [randomArtist, setRandomArtist] = useState(artists[0]); // need to set artists array to store data, use randomNumber to assign new artists randomly

  return (
    <>

      <Router>
        {/* @arionitas create navbar component here */}
        <Routes>
          {/* This is where our paths will be for the components, all of our remaining components will be rendered here, unless they are
              children of the section/page */}
          <Route path='/Gallery' element={<Gallery artistPreview={randomArtist} />} />
          <Route path='/' element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
