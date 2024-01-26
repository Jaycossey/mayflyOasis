import ARTISTPROFILE from '../../assets/MockData/artistData';
import './ArtistList.css';
import ProfileCard from '../../components/ProfileCard';

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
          // Re-usable card to be able to carry styles across to team members as well.
          <ProfileCard artist={artist} />
        ))}
      </div>
    </div>
  );
};
export default ArtistList;