import PRODUCTS from '../../assets/MockData/Products';
import Product from './Product';
import './Shop.css';

const Shop = () => {
  console.log('shop/gallery');
  return (
    <div className='shop'>
      <div className='shoptitle'>
        <h1>Gallery</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Shop;
