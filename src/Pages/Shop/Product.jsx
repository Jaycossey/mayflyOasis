import { useCart } from 'react-use-cart';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Product.css';

const Product = (props) => {
  const { addItem } = useCart();
  const { id, title, artist, description, year, medium, dimensions, price } =
    props.data;

  const handleAddToCart = () => {
    addItem({ ...props.data, id });
  };

  const carouselSettings = {
    initialSlide: 0,
    dots: true,
    infinite: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  return (
    <div className='product bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
      <div className='prodcut-card-container'>
        {/* Carousel for Product Images */}
        <div className='image-carousel'>
          <Slider {...carouselSettings}>
            {props.data.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${props.data.title} - Image ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Description and Action Container */}
        <div className='description p-4 md:w-1/2 flex flex-col'>
          <h2 className='text-xl font-semibold'>{title}</h2>
          <h3 className='text-md text-gray-500'>{artist}</h3>
          <p className='text-sm my-2'>{description}</p>
          <p className='text-sm text-gray-600'>
            {year}, {medium}, {dimensions}
          </p>
          <p className='text-lg font-bold my-2'>£{price}</p>
          <button onClick={handleAddToCart} className='AddToCartButton'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
