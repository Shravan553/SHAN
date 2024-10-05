import React from 'react';
import './Gallery.css';
import extra1 from '../../assets/extra1.jpg';
import extra2 from '../../assets/extra2.jpg';
import extra3 from '../../assets/extra3.jpg';
import extra4 from '../../assets/extra4.jpg';
import extra5 from '../../assets/extra5.jpg';
import extra6 from '../../assets/extra6.jpg';
import extra7 from '../../assets/extra7.jpg';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className='gallery-container'>
      <section className='gallery-header'>
        <h1>Gallery</h1>
        <p>Explore our collection of images showcasing the essence of ANAND GROUP.</p>
      </section>

      <section className='gallery-content'>
        <div className='gallery-grid'>
          <div className='gallery-item'>
            <img src={extra1} alt="Gallery Image 1" />
            <p>Description for Image 1</p>
          </div>
          <div className='gallery-item'>
            <img src={extra2} alt="Gallery Image 2" />
            <p>Description for Image 2</p>
          </div>
          <div className='gallery-item'>
            <img src={extra3} alt="Gallery Image 3" />
            <p>Description for Image 3</p>
          </div>
          <div className='gallery-item'>
            <img src={extra4} alt="Gallery Image 4" />
            <p>Description for Image 4</p>
          </div>
          <div className='gallery-item'>
            <img src={extra5} alt="Gallery Image 5" />
            <p>Description for Image 5</p>
          </div>
          <div className='gallery-item'>
            <img src={extra6} alt="Gallery Image 6" />
            <p>Description for Image 6</p>
          </div>
          <div className='gallery-item'>
            <img src={extra7} alt="Gallery Image 7" />
            <p>Description for Image 7</p>
          </div>
        </div>
      </section>

      <section className='gallery-contact'>
        
        <p>We would love to hear from you! For inquiries or more information, please reach out to us.</p>
        <Link to="/" className="return-home-button">Return to Home</Link>
      </section>
    </div>
  );
}

export default Gallery;
