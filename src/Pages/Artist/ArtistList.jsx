import { Link } from 'react-router-dom';
import ARTISTPROFILE from '../../assets/MockData/artistData';
import './ArtistList.css';

const ArtistList = () => {
  return (
    <div>
      <h1>Meet Our Artists</h1>
      <div className='artist-grid mt-20 rounded-xl p-6 bg-slate-600 bg-opacity-50'>
        {ARTISTPROFILE.map((artist) => (
          <div className='artist-card' key={artist.id}>
            <img
              src={artist.image}
              alt={artist.name}
              className='w-40 
              h-40 
              rounded-full 
              border-4
              border-red-300 
              m-auto'
            />
            <div className='description p-4'>
              <h2 className='text-sm font-semibold'>{artist.name}</h2>
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
