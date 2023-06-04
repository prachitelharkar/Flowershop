import React from 'react';
import  about from './images/about.jpg';
import Navbar from './Navbar';
import Footer from './Footer';


const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="about">
    <div className="about-us-container">
      <div className="about-us-image">
        <img src={about} alt="Flower" />
      </div>
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
        Welcome to our Flower Website! We are passionate about bringing the beauty of flowers into your life. With a wide variety of exquisite blooms, we strive to provide the perfect floral arrangements for every occasion.

Our team of dedicated florists meticulously handcrafts each arrangement, ensuring that every petal is perfectly placed. We source our flowers from the finest local and international growers, guaranteeing the freshest and most vibrant blooms.

Whether you're celebrating a special milestone, expressing love and affection, or simply brightening someone's day, our flower arrangements are designed to convey your heartfelt emotions. From elegant roses to cheerful sunflowers, our collection offers a diverse range of options to suit your personal style and preferences.
        </p>
        <button className="btn">Learn More</button>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default About;
