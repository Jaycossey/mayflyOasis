import React from 'react';

const Gallery = ({ artworks }) => {
  return (
    <div>
      {artworks.map((artwork) => (
        <div key={artwork.id}>
          <h2>{artwork.title}</h2>
          <img src={artwork.imageUrl} alt={artwork.title} />
          {/* Other artwork details */}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
