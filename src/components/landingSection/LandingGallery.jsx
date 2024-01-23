import SpotlightData from '../SpotlightData';
import Button from './Button';
import artistArray from '../../assets/MockData/ArtistArray';

// Spotlight gallery for home page
const LandingGallery = () => {
  //
  const artist = artistArray[0];

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
            
            {/* Button to iterate previous artist in spotlight */}
            <Button direction={"<"} />

            {/* Container for artist spotlight information */}
            <div id="contentContainer"
                className="col-span-3 
                            row-span-5 
                            row-start-1">
                <SpotlightData artist={artist} />
            </div>

      {/* Button to iterate next artist in spotlight */}
      <Button direction={'>'} />
    </div>
  );
};

export default LandingGallery;
