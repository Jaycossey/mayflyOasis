import '../ArtistProfile/style.css';

// eslint-disable-next-line react/prop-types
function ArtistProfile({ name, image, occupation, location }) {
  return (
    <div className='artist-profile'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='content'>
        <h1>{name}</h1>
        <p>Occupation: {occupation}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
}

export default ArtistProfile;
