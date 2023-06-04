import React from 'react'
import image from "./images/review.jpg"
import p from "./images/p1.jpg"
import p1 from "./images/p2.jpg"
import p2 from "./images/p3.jpg"

const Review = () => {
  return (
    <div className="review">
       
        <h2>Happy Customers</h2>
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active c-item">
      <img src={image} className="d-block w-100 c-img" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <img src={p} className="person" alt="person"/>

        <h5>George Daniel</h5>
        <p>"I was impressed by the freshness and fragrance of the flowers I received. 
            <br/>It truly brightened up my space.The flowers I ordered from this website were absolutely stunning. The colors were vibrant, and the arrangement was exquisite."

</p>
      </div>
    </div>
    <div className="carousel-item c-item">
      <img src={image} className="d-block w-100 c-img" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <img src={p1} className="person" alt="person"/>
        <h5>William Johnson</h5>
        <p>"The variety of flowers available on this website is impressive. I loved having so many options<br/> to choose from.The customer service was top-notch. The staff was friendly and knowledgeable, helping me choose the perfect bouquet for my occasion."</p>
      </div>
    </div>
    <div className="carousel-item c-item">
      <img src={image} className="d-block w-100 c-img" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <img src={p2} className="person" alt="person"/>

        <h5>Emily Smith</h5>
        <p>"I would highly recommend this flower website to anyone looking for<br/> reliable service and stunning  floral arrangements. The online ordering process was seamless, and I received regular updates on the status of my delivery."</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default Review