import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Flowers from './Flowers';
import Review from './Review';
const Home = () => {
  return (
    <>
       <Navbar/>
        <section className="home" id="home">
            <div className="home-text">
                <h1>FLORALHAVEN </h1>
                <h3>Captivating Petals: Unveiling the <span>Artistry</span> and <span>Fragrance</span>
                <br /> of Flowers</h3>
                <p>Unleash Your Senses, Immerse in Floral Wonder</p>
                <a href="/" className="btn">Shop Now</a>
            </div>
         
        </section>
        <div className="arrival">
            <div className="arrival-text">
            <h1>New Arrival</h1>
            <p>Discover a world of botanical marvels with our new arrival flowers, each delicately<br /> crafted  to elevate your moments and create lasting memories</p>
            <h3>View collection <i class="fas fa-arrow-right-long"></i>
</h3>
        </div>
        </div>
        <Flowers/>
        <Review/>
        <Footer/>
    </>
  )
}

export default Home
