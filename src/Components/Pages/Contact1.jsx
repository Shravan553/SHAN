import React from 'react';
import './Contact1.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import insta_icon from '../../assets/insta-icon.png';
import twitter_icon from '../../assets/twitter-icon.png';
import linkedin_icon from '../../assets/linkedin-icon.png';
import medium_icon from '../../assets/medium-icon.png';

const Contact1 = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // ------Enter your web3forms access key below-------
    

    formData.append("5ade24c1-436c-4a2e-a51b-25256e01974d");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service.</p>
        <ul>
          <li><img src={mail_icon} alt="" />anand@agpotato.com</li>
          <li><img src={phone_icon} alt="" />95131 62555</li>
          <li><img src={location_icon} alt="" />World Trade Centre, Unit No 2217, 22nd Floor, Malleshwaram (W), Next Orion Mall, Bangalore, Karnataka 560055, IN</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/anandgroup_agpotato_/" target="_blank" rel="noopener noreferrer">
          <img src={insta_icon} alt="Instagram" />
        </a>
        <a href="https://x.com/anandjp26" target="_blank" rel="noopener noreferrer">
          <img src={twitter_icon} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/company/anand-group123/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_icon} alt="LinkedIn" />
        </a>
        <a href="https://medium.com/@jpanand952" target="_blank" rel="noopener noreferrer">
          <img src={medium_icon} alt="Medium" />
        </a>
      </div>
    </div>
  )
}

export default Contact1;
