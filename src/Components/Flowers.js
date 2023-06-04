import React, { useState } from 'react';
import rose from "./images/rose.jpg";
import lily from "./images/lily.jpg";
import tulip from "./images/tulip.jpg";
import orchid from "./images/orchid.jpg";
import sunflower from "./images/sunflower.jpg";
import daisy from "./images/daisy.jpg";
import hydrangea from "./images/hydrangea.jpg";
import peony from "./images/peony.jpg";
import gerbera from "./images/gerbera.jpg";
import img from "./images/img.jpg";
import img1 from "./images/img1.jpg";
import marigold from "./images/marigold.jpg";
import Navbar from './Navbar';

const Flower = () => {
    const [selectedFlowers, setSelectedFlowers] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);


  const flowers = [
    {image:rose, id: 1, name: 'Rose', price: 10 },
    {image:lily,id: 2, name: 'Lily', price: 20 },
    {image:tulip,id: 3, name: 'Tulip', price: 10 },
    {image:orchid,id: 4, name: 'Orchid', price: 30 },
    {image:sunflower,id: 5, name: 'Sunflower', price: 10 },
    {image:daisy,id: 6, name: 'Daisy', price: 40 },
    {image:hydrangea,id: 7, name: 'Hydrangea', price: 20 },
    {image:peony,id: 8, name: 'Peony', price: 30 },
    {image:gerbera,id: 9, name: 'Gerbera', price: 40 },
    {image:marigold,id: 9, name: 'Marygold', price: 40 },
    {image:img, id: 1, name: 'Tulip', price: 10 },
    {image:img1,id: 3, name: 'Orchid', price: 10 }

  ];

  const addToCart = (flower) => {
    const updatedFlowers = [...selectedFlowers];
    const existingFlower = updatedFlowers.find((f) => f.id === flower.id);

    if (existingFlower) {
      existingFlower.quantity += 1;
      existingFlower.totalPrice = existingFlower.price * existingFlower.quantity;
    } else {
      updatedFlowers.push({ ...flower, quantity: 1, totalPrice: flower.price });
    }

    setSelectedFlowers(updatedFlowers);
  };

  const removeFromCart = (flower) => {
    const updatedFlowers = [...selectedFlowers];
    const existingFlower = updatedFlowers.find((f) => f.id === flower.id);

    if (existingFlower) {
      existingFlower.quantity -= 1;

      if (existingFlower.quantity === 0) {
        const flowerIndex = updatedFlowers.indexOf(existingFlower);
        updatedFlowers.splice(flowerIndex, 1);
      } else {
        existingFlower.totalPrice = existingFlower.price * existingFlower.quantity;
      }
    }

    setSelectedFlowers(updatedFlowers);
  };
  const placeOrder = () => {
    setShowConfirmation(true);
  };

  return (
    <div>
    <Navbar/>
    <div className="container">
      

      <section className="flowers">
        <h2>New Products</h2>
        <div className="flower-list">
          {flowers.map((flower) => (
            <div key={flower.id} className="flower-item">
              <img src={flower.image} alt={flower.name} />
              <div className="flower-details">
                <h3>{flower.name}</h3>
                <p>${flower.price}</p>
                <button onClick={() => addToCart(flower)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cart">
        <h2>Shopping Cart</h2>
        <ul className="cart-list">
          {selectedFlowers.map((flower) => (
            <li key={flower.id}>
              <h3>{flower.name}</h3>
              <p>${flower.totalPrice}</p>
              <div className="quantity">
                <button onClick={() => removeFromCart(flower)}>-</button>
                <span>{flower.quantity}</span>
                <button onClick={() => addToCart(flower)}>+</button>
              </div>
            </li>
          ))}
        </ul>


        {selectedFlowers.length > 0 && (
          <button className="place-order-button" onClick={placeOrder}>
            Place Order
          </button>
        )}

        {showConfirmation && <p>Your order has been placed. Thank you!</p>}
      </section>

      
    </div>
    </div>
  );
};
export default Flower
