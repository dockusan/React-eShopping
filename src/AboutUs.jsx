import React, { useEffect } from 'react';
import './AboutUs.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function AboutUs() {
  
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome to Duc's Plants, where green meets serenity!</p>
      <p className="about-us-content">
      At Duc's Plants, we offer a wide variety of lush, healthy plants, from resilient succulents and delicate orchids to robust trees and vibrant flowering plants, each carefully selected to thrive in your specific environment. Our user-friendly website provides detailed care instructions, gardening tips, and expert advice to ensure your plants flourish. Whether you're an experienced gardener or just starting your green journey, Duc's Plants is your trusted partner in cultivating a verdant and thriving oasis. Join our community of plant enthusiasts and let Duc's Plants help you grow a greener world.
      </p>
      <p className="about-us-content">
        Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. 
        Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of 
        the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your 
        home or office.
      </p>

      <p className="about-us-content">
        Join us in our mission to create a greener, healthier world. Visit Duc's Plants today and experience the 
        beauty of nature right at your doorstep.
      </p>
    </div>
  );
}

export default AboutUs;