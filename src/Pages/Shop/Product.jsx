const Product = (props) => {
  const {
    key,
    title,
    artist,
    image,
    description,
    year,
    medium,
    dimensions,
    price,
  } = props.data;

  return (
    <div className='product' key={key}>
      <img src={image} alt='' />
      <div className='description'>
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <p>{description}</p>
        <p>{year}</p>
        <p>{medium}</p>
        <p>{dimensions}</p>
        <p>{price}</p>
        <button className='AddToCartButton'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
