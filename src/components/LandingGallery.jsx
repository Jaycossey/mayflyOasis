import SpotlightData from './SpotlightData';
import Button from './Button';

// Spotlight gallery for home page
const LandingGallery = () => {
    return (
        // Container for gallery
        <div id="homeGalleryContainer" 
            className="bg-white 
                        p-20
                        grid
                        grid-cols-3
                        grid-rows-3
                        m-auto
                        border-2
                        border-red-500">
            
            {/* Button to iterate previous artist in spotlight */}
            <Button direction={"\<"} />

            {/* Container for artist spotlight information */}
            <div id="contentContainer"
                className="border-4
                            row-start-1
                            row-span-3
                            col-span-1">
                <SpotlightData />
            </div>

            {/* Button to iterate next artist in spotlight */}
            <Button direction={"\>"} />

        </div>
    );
}

export default LandingGallery;