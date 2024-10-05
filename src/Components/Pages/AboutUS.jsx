import React from 'react';
import './AboutUS.css';
import about_img from '../../assets/about.jpg';
import extra1 from '../../assets/extra1.jpg';
import extra2 from '../../assets/extra2.jpg';
import extra3 from '../../assets/extra3.jpg';
import extra4 from '../../assets/extra4.jpg';
import extra5 from '../../assets/extra5.jpg';
import extra6 from '../../assets/extra6.jpg';
import extra7 from '../../assets/extra7.jpg';
import { Link } from 'react-router-dom';
import Navbar1 from "../../Components/Pages/Navbar/Navbar1";

const About = () => {
  return (
    <div className='about-container'>
      <Navbar1/>
      <section className='about-hero'>
        <img src={about_img} alt="About Anand Group" className='about-hero-img' />
        <div className='hero-overlay'>
          <h1>Welcome to AGPOTATO</h1>
          <p>Your trusted partner in the potato supply chain.</p>
          
        </div>
      </section>
      

      <section className='about-content'>
        <h2>Who We Are</h2>
        <p>
          Founded in 2014, ANAND GROUP has quickly become a leading name in the potato industry, specializing in connecting vendors with customers through an efficient and innovative supply chain. Our mission is to bridge the gap between farm and table, ensuring fresh, high-quality produce for businesses and consumers alike.
        </p>

        <h2>Our Mission</h2>
        <p>
          At ANAND GROUP, we are committed to modernizing the potato trade by providing an end-to-end solution that includes sourcing, quality control, logistics, and distribution. Our state-of-the-art platform, agpotato.com, enables us to offer a seamless experience for both vendors and customers, making the process of buying and selling potatoes more transparent and efficient.
        </p>

        <div className='about-values'>
          <div className='value-box'>
            <h3>Quality</h3>
            <p>We ensure the highest standards in every potato we trade, from the farm to your business.</p>
          </div>
          <div className='value-box'>
            <h3>Innovation</h3>
            <p>We use cutting-edge technology to streamline our operations and enhance traceability.</p>
          </div>
          <div className='value-box'>
            <h3>Sustainability</h3>
            <p>We are committed to sustainable farming practices, ensuring a better future for our planet.</p>
          </div>
        </div>

        {/* New Section for Extra Images */}
        <section className='about-extra-images'>
          <div className='extra-images-row'>
            <div className='image-box circle'>
              <img src={extra1} alt="Extra Image 1" />
            </div>
            <div className='image-box square'>
              <img src={extra2} alt="Extra Image 2" />
            </div>
            <div className='image-box rounded'>
              <img src={extra3} alt="Extra Image 3" />
            </div>
          </div>
          <div className='extra-images-row'>
            <div className='image-box circle'>
              <img src={extra4} alt="Extra Image 4" />
            </div>
            <div className='image-box square'>
              <img src={extra5} alt="Extra Image 5" />
            </div>
            <div className='image-box rounded'>
              <img src={extra6} alt="Extra Image 6" />
            </div>
            <div className='image-box circle'>
              <img src={extra7} alt="Extra Image 7" />
            </div>
          </div>
        </section>
      </section>

      <section className='about-contact'>
     
        <p>We would love to hear from you! For inquiries or more information, please reach out to us.</p>
        <Link to="/" className="return-home-button">Return to Home</Link>
      </section>
    </div>
  );
}

export default About;
