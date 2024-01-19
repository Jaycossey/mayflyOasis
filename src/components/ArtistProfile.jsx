

const ArtistProfile = ({ artist }) => {
  return (
    <div className='artist-profile'>
      <img src={artist.image} alt={artist.name} />
      <h2>{artist.name}</h2>
      <p>{artist.bio}</p>
    </div>
  );
};

export default ArtistProfile;
