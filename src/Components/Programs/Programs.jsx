import React, { useEffect, useState } from 'react';
import './Programs.css';
import potato from '../../assets/program-1.jpg';
import floor from '../../assets/potato-flour.jpg';
import chips from '../../assets/potato-chips.jpg';
import flakes from '../../assets/potato-flakes.jpg';
import milk from '../../assets/potato-milk.jpg';
import fries from '../../assets/potato-fries.jpg';

const Programs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of images
  const images = [potato, fries, chips, flakes, milk, floor];
  
  // Array of product names corresponding to the images
  const productNames = [
    'Potatoes',
    'Potato Fries',
    'Potato Chips',
    'Potato Flakes',
    'Potato Milk',
    'Potato Flour' // Update this with the correct name if you have one
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='programs-container'>
      <div className='programs-slider' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className='program' key={index}>
            <img src={image} alt={`Potato Product ${index + 1}`} />
            <div className='caption'>
              <p>{productNames[index]}</p> {/* Display corresponding product name */}
            </div>
          </div>
        ))}
        {/* Duplicate the first image to create a seamless loop effect */}
        <div className='program'>
          <img src={images[0]} alt={`Potato Product 1`} />
          <div className='caption'>
            <p>{productNames[0]}</p> {/* Display the name of the duplicated product */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
