import { useState } from 'react';
import SpotlightData from '../SpotlightData';
import Button from './Button';
import artistArray from '../../assets/MockData/ArtistArray';
import PRODUCTS from '../../assets/MockData/Products';
import rngesus from '../utils/rngesus';

// array to store previous artists work. 
const previousGallery = [];

// Spotlight gallery for home page
const LandingGallery = () => {
    // state handlers for gallery rotation, random initial index
    const [currentGallery, setCurrentGallery] = useState(rngesus(PRODUCTS.length));  
    // // tried state initially, not sure why it didnt work, need to find a fix
    // const [previousGallery, setPreviousGallery] = useState([]);

    
    const handleClick = () => {
      console.log("click", event.target.id);

      // If there are no current prev iterations
      if(event.target.id === "<" && previousGallery.length === 0) {
        return;

      // handle "next" artist showcase
      } else if(event.target.id === ">") {
        previousGallery.push(currentGallery);
        setCurrentGallery(rngesus(PRODUCTS.length));

      // handle previous. have a bug here, need to work out how to track the previous iteration
      } else if(event.target.id === "<") {
        setCurrentGallery(previousGallery[0]);
      }
    }


    return (
        // Container for gallery
        <div id="homeGalleryContainer" 
            className="grid 
                        grid-cols-5 
                        grid-rows-5 
                        p-20 
                        m-auto 
                        bg-slate-500 
                        bg-opacity-50
                        border-2">
            
            {/* Button to iterate previous artist in spotlight  onClick={handlePrevious} */}
            <Button direction={"<"} onClick={handleClick} />

            {/* Container for artist spotlight information */}
            <div id="contentContainer"
                className="col-span-3 
                            row-span-5 
                            row-start-1">
                <SpotlightData artist={PRODUCTS[currentGallery]} />
            </div>

      {/* Button to iterate next artist in spotlight  onClick={setCurrentGallery(rngesus(PRODUCTS.length))} */}
      <Button direction={'>'} onClick={handleClick} />
    </div>
  );
};

export default LandingGallery;
