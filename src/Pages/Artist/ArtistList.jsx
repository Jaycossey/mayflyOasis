import { Link } from 'react-router-dom';
import ARTISTPROFILE from '../../assets/MockData/artistData';
import './ArtistList.css';

const ArtistList = () => {
  return (
      <div className='p-10 mt-10 artist-grid'>
        {ARTISTPROFILE.map((artist) => (
          <div className='bg-white bg-opacity-30 backdrop-filter backdrop-blur-md artist-card ' key={artist.id}>
            <img
              src={artist.image}
              alt={artist.name}
              className='artist-image'
            />
            <div className='p-4 description'>
              <h2 className='text-sm font-semibold'>{artist.name}</h2>
              <p className='text-xs text-gray-600'>{artist.occupation}</p>
              <Link to={`/artist/${artist.id}`} className='ViewProfileButton'>
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
  );
};
export default ArtistList;
