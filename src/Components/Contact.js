import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        
        <iframe className="frame-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.03447396973!2d73.86296739999999!3d18.524616450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1685866526774!5m2!1sen!2sin"
         title="frame"
         width="100%"
          height="450" 
          style={{border:0}}
          allowFullScreen=""
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">

           </iframe>
           <div className="contact">
           <form >
            <h3>Let's Get in Touch</h3>
            <div className="inputbox">
                <input type="text" placeholder="Name"/>
             </div>
             <div className="inputbox">
                <input type="text" placeholder="Email"/>
             </div><div className="inputarea">
                <input type="text" placeholder="Message"/>
             </div>
             <input type="submit" value="Contact Now" className="btn"/>
             </form>
           
    </div>
    <Footer/>
    </div>
  )
}

export default Contact