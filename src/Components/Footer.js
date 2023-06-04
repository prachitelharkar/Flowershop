import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
<footer className="text-center text-lg-start bg-light text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
    </div>

    <div>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>FloralHaven
          </h6>
          <p>
          Flowers are beautiful and vibrant symbols of nature, bringing joy and delight with their colorful petals and enchanting fragrances.

From delicate roses to elegant lilies and exotic orchids.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="/" className="text-reset">Birthday</a>
          </p>
          <p>
            <a href="/" className="text-reset">Wedding</a>
          </p>
          <p>
            <a href="/" className="text-reset">Bouquet</a>
          </p>
          <p>
            <a href="/" className="text-reset">Flower</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="/" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="/" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="/" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="/" className="text-reset">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" style={{backgroundcolor:"rgba(0, 0, 0, 0.05)"}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="/">FloralHaven.com</a>
  </div>
</footer>
    </div>
  )
  }
  export default Footer