import PRODUCTS from '../../assets/MockData/Products';
import Product from './Product';
import './Shop.css';

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shoptitle'>
        <h1 className='text-sm font-bold text-center'>Gallery</h1>
      </div>
      <div className='grid grid-cols-1 gap-4 p-4 pt-16 products md:grid-cols-2 lg:grid-cols-3 sm:opacity-90'>
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.key} />
        ))}
      </div>
    </div>
  );
};
export default Shop;
