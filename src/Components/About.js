import React from 'react';
import  daisy from './images/daisy.jpg';
import Navbar from './Navbar';
import Footer from './Footer';


const About = () => {
  return (
    <div>
      <Navbar/>
    <div className="about-us-container">
      <div className="about-us-image">
        <img src={daisy} alt="Flower" />
      </div>
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          convallis facilisis. Integer ultrices, nunc eu bibendum dapibus,
          risus velit dictum nunc, vel molestie sem ex vitae lectus. Etiam ac
          vestibulum massa, in fermentum erat. Morbi convallis mauris in risus
          convallis, ut aliquam tellus gravida. Donec fermentum dolor non dui
          congue, eu euismod sem mollis. Fusce in fringilla dolor. Quisque eu
          aliquam orci. Nam sed neque bibendum, commodo odio sit amet, finibus
          nisi. Vivamus maximus ligula id nibh malesuada, et tristique metus
          faucibus. Suspendisse potenti. Integer eu felis in velit fermentum
          fringilla sed quis ante.
        </p>
        <button className="btn">Learn More</button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
