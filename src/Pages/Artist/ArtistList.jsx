import { Link } from 'react-router-dom';
import ARTISTPROFILE from '../../assets/MockData/artistData';
import './ArtistList.css';

const ArtistList = () => {
  return (
    <div>
      <h1>Meet Our Artists</h1>
      <div className='artist-grid'>
        {ARTISTPROFILE.map((artist) => (
          <div className='artist-card' key={artist.id}>
            <img
              src={artist.image}
              alt={artist.name}
              className='artist-image'
            />
            <div className='description p-4'>
              <h2 className='text-xl font-semibold'>{artist.name}</h2>
              <p className='text-md text-gray-500'>{artist.occupation}</p>
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
