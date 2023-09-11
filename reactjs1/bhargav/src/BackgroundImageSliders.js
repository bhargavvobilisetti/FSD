import React, { useState } from 'react';

const BackgroundImageSlider = () => {
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
  ];

  // Initialize state to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle image change on click
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const style = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-image 0.5s ease',
  };

  return (
    <div style={style} onClick={changeImage}>
      {/* <button>Click to change image</button> */}
    </div>
  );
};

export default BackgroundImageSlider;
