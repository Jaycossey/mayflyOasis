import { useParams } from 'react-router-dom';
import ARTISTPROFILE from '../../assets/MockData/artistData';
import { useCart } from 'react-use-cart';
import PRODUCT_DATA from '../../assets/MockData/Products';

const ArtistProfile = () => {
  const { id } = useParams();
  const artist = ARTISTPROFILE.find((artist) => artist.id === parseInt(id));

  if (!artist) {
    return <div>Artist not found</div>;
  }

  const artistArtworks = PRODUCT_DATA.filter(
    (product) => product.artist === artist.name
  );

  const { addItem } = useCart();

  return (
    <div className='content-container p-10 pt-28'>
      <div className='profile-data'>
        <h1>{artist.name}s Profile</h1>
        <img
          className='w-40 
                        h-40 
                        rounded-full 
                        border-4
                        border-red-300 
                        m-auto'
          src={artist.image}
          alt={artist.name}
        />
        <p>Occupation: {artist.occupation}</p>
        <p>Location: {artist.location}</p>
        <div>
          <h3>Contact:</h3>
          <p>Email: {artist.contact.email}</p>
          <p>Phone: {artist.contact.phone}</p>
        </div>
        <div>
          <h3>Social Media:</h3>
          <p>
            <a
              href={`https://www.instagram.com/${artist.contact.socialMedia.instagram}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram: {artist.contact.socialMedia.instagram}
            </a>
          </p>
          <p>
            <a
              href={`https://twitter.com/${artist.contact.socialMedia.twitter}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter: {artist.contact.socialMedia.twitter}
            </a>
          </p>
        </div>
      </div>

      <div className='gallery-data'>
        {artistArtworks.map((artwork) => (
          <div key={artwork.id}>
            <img src={artwork.image} alt={artwork.title} />
            <h4>{artwork.title}</h4>
            <p>Description: {artwork.description}</p>
            <p>Year: {artwork.year}</p>
            <p>Medium: {artwork.medium}</p>
            <p>Dimensions: {artwork.dimensions}</p>
            <p>Price: £{artwork.price}</p>
            <button
              onClick={() => addItem(artwork)}
              className='AddToCartButton bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out'
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistProfile;
