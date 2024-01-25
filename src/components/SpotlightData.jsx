// Spotlight component for landing / home page
const SpotlightData = (props) => {
    // copy of artist passed through props
    const artistCopy = props.artist;

    return (
        <>
            {/* Image of artists work */}
            <img src={artistCopy.images[0]} 
                alt={artistCopy.title}
                className="border-2
                        rounded-2xl
                        h-80
                        shadow-xl
                        shadow-slate-400
                        m-auto
                        p-2" />
            
            {/* Artist name and title of work */}
            <p className="text-right
                        mr-6
                        mt-2">
                {artistCopy.artist} - {artistCopy.title} 
            </p>

            {/* Short description of artists work */}
            <p className="text-center
                        border-2
                        rounded-md
                        bg-slate-200
                        shadow-lg
                        shadow-slate-400
                        mt-4
                        p-2
                        ">
                {artistCopy.description}
            </p>
        </>
    );
}

export default SpotlightData;