import React, { useState } from 'react';

const BackgroundColorChanger = () => {
  
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF','#FF0000'];

  // Initialize state to keep track of the current color
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Function to handle background color change on click
  const changeBackgroundColor = () => {

    setCurrentColorIndex((prevIndex) =>
      prevIndex === colors.length - 1 ? 0 : prevIndex + 1
    );
  };

  const style = {
    backgroundColor: colors[currentColorIndex],
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.5s ease',
  };

  return (
    <div style={style} onClick={changeBackgroundColor}>
      <h1>Click me to change background color</h1>
    </div>
  );
};

export default BackgroundColorChanger;