 import { Link } from 'react-router-dom';
import ARTISTPROFILE from '../../assets/MockData/artistData';
import './ArtistList.css';

const ArtistList = () => {
  return (
    <div className='container mx-auto customMargin'>
      {/* <div className='header-container'>
        <h1 className='text-lg font-semibold'>Our Artist</h1>
      </div> */}
      <div className='artist-grid 
                      bg-white 
                      border 
                      bg-opacity-5 
                      backdrop-filter 
                      backdrop-blur-md 
                      border-gray-300 
                      rounded-lg 
                      overflow-hidden 
                      shadow-lg 
                      p-6'>

        {ARTISTPROFILE.map((artist) => (
          <div
            className='artist-card bg-white border bg-opacity-5 backdrop-filter backdrop-blur-md border-gray-300 rounded-lg overflow-hidden shadow-lg'
            key={artist.id}
          >
            <img
              src={artist.image}
              alt={artist.name}
              className='artist-image'
            />
            <div className='description p-4'>
              <h2 className='text-sm font-semibold'>{artist.name}</h2>
              <p className='text-xs text-gray-600'>{artist.occupation}</p>
              <Link to={`/artist/${artist.id}`} className='ViewProfileButton'>
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ArtistList;