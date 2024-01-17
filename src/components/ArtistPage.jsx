import artists from '../components/ArtistProfile/index.jsx';
import ArtistProfile from '../components/ArtistProfile/index.jsx';

function ArtistPage() {
  return (
    <div>
      {artists.map((artist) => (
        <ArtistProfile
          key={artist.id}
          name={artist.name}
          image={artist.image}
          occupation={artist.occupation}
          location={artist.location}
        />
      ))}
    </div>
  );
}

export default ArtistPage;
