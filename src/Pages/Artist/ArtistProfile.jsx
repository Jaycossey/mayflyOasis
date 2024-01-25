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
    const { className, onClick } = props;
    return (
      <button
        type='button'
        className={`${className} w-8 h-8 border-4 border-slate-300 border-double rounded-full cursor-pointer bg-slate-400 text-lg text-center row-start- m-auto shadow-lg shadow-slate-200 hover:scale-25 transition`}
        onClick={onClick}
        aria-label='Previous'
      >
        &lt;
      </button>
    );
  }

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type='button'
        className={`${className} w-8 h-8 border-4 border-slate-300 border-double rounded-full cursor-pointer bg-slate-400 text-lg text-center row-start- m-auto shadow-lg shadow-slate-200 hover:scale-25 transition`}
        onClick={onClick}
        aria-label='Next'
      >
        &gt;
      </button>
    );
  }

  return (
    <div className='container mx-auto p-15 bg-white bg-opacity-85'>
      <section className='p-4 artist-profile bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-18'>
        <div className='text-left'>
          <img
            src={artist.image}
            alt={artist.name}
            className=' mx-left square-full w-48 h-48 object-cover'
          />
          <h1 className='text-2xl font-bold my-4'>{artist.name} Profile</h1>
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
      </section>

      <section className='product-gallery bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
        <h2 className='text-3xl font-bold text-center mb-6 p-4'>Gallery</h2>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8'>
          {artistArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className='product-item bg-white rounded-lg overflow-hidden shadow-lg p-6 border border-gray-300'
            >
              <Slider {...carouselSettings}>
                {artwork.images.map((image, index) => (
                  <div key={index} className='image-carousel'>
                    <img
                      src={image}
                      alt={`${artwork.title} - Image ${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>
              <div className='product-description p-4 mt-4'>
                <h4 className='text-xl font-semibold'>{artwork.title}</h4>
                <p className='text-sm my-2'>
                  Description: {artwork.description}
                </p>
                <p className='text-sm text-gray-600'>
                  {artwork.year}, {artwork.medium}, {artwork.dimensions}
                </p>
                <p className='text-lg font-bold my-2'>
                  Price: £{artwork.price}
                </p>
                <button
                  onClick={() => addItem({ ...artwork, id: artwork.id })}
                  className='AddToCartButton w-full mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-700'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistProfile;
