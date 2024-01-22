import { useCart } from 'react-use-cart';

const Product = (props) => {
  const { addItem } = useCart();
  const {
    id,
    title,
    artist,
    image,
    description,
    year,
    medium,
    dimensions,
    price,
  } = props.data;

  const handleAddToCart = () => {
    addItem({ ...props.data, id });
  };

  return (
    <div className='product bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
      <img src={image} alt={title} className='w-full h-48 object-cover' />
      <div className='description p-4'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <h3 className='text-md text-gray-500'>{artist}</h3>
        <p className='text-sm my-2'>{description}</p>
        <p className='text-sm text-gray-600'>
          {year}, {medium}, {dimensions}
        </p>
        <p className='text-lg font-bold my-2'>{price}</p>
        <button
          onClick={handleAddToCart}
          className='AddToCartButton bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
