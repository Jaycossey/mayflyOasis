
import './style.css';

// eslint-disable-next-line react/prop-types
function Gallery({ title, image, artist, description }) {
  return (
    <div className='gallery-card'>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>{description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default Gallery;
