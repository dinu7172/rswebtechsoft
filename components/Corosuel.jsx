import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item${index === currentImageIndex ? ' active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <button className="btn btn-circle prev" onClick={goToPreviousSlide}>
        ❮
      </button>
      <button className="btn btn-circle next" onClick={goToNextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
