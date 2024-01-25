import { Link } from 'react-router-dom';
import ARTISTPROFILE from '../../assets/MockData/artistData';
import './ArtistList.css';

const ArtistList = () => {
  return (
    <div className='container mx-auto'>
      {/* <div className='header-container'>
        //  <h1>.</h1> 
      </div> */}
      <div className='artist-grid pb-10'>
        {ARTISTPROFILE.map((artist) => (
          <div className='artist-card' key={artist.id}>
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
