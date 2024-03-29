import { useCart } from 'react-use-cart';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './product.css';

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
    <div className=' bg-white border bg-opacity-5 backdrop-filter backdrop-blur-md border-gray-300 rounded-lg overflow-hidden shadow-lg'>
      <div className='product-card-container'>
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
        </div>

        {/* Description and Action Container */}
        <div className=' artist-grid'>
        <div className='description flex flex-col'>
          <h2 className='text-xl font-semibold'>{title}</h2>
          <h3 className='text- text-gray-500'>{artist}</h3>
          <p className='my-2 text-xs'>{description}</p>
          <p className='text-xs text-gray-600'>
            {year}, {medium}, {dimensions}
          </p>
          <p className='my-2 text-lg font-bold md-10'>£{price}</p>
          <button onClick={handleAddToCart} className='AddToCartButton'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
