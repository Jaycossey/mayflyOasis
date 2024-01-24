import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import ARTISTPROFILE from '../../assets/MockData/artistData';
import PRODUCT_DATA from '../../assets/MockData/Products';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ArtistProfile.css';

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

  const carouselSettings = {
    initialSlide: 0,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
  };

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'grey' }}
        onClick={onClick}
      />
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'grey' }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className='content-container p-10 pt-28'>
      <div className='profile-data bg-white'>
        <h1>{artist.name} Profile</h1>
        <img src={artist.image} alt={artist.name} />
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

      <div className='product bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
        <div className='prodcut-card-container'>
          {artistArtworks.map((artwork) => (
            <div key={artwork.id} className='artwork'>
              <div className='image-carousel'>
                <Slider {...carouselSettings}>
                  {artwork.images.map((image, index) => (
                    <div key={index} className='artwork-image'>
                      <img
                        src={image}
                        alt={`${artwork.title} - Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className='description p-4 md:w-1/2 flex flex-col'>
                <h4>{artwork.title}</h4>
                <p>Description: {artwork.description}</p>
                <p>Year: {artwork.year}</p>
                <p>Medium: {artwork.medium}</p>
                <p>Dimensions: {artwork.dimensions}</p>
                <p>Price: £{artwork.price}</p>
                <button
                  onClick={() => addItem({ ...artwork, id: artwork.id })}
                  className='AddToCartButton'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
