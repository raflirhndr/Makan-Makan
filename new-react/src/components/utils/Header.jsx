import React, { useState, useEffect } from "react";
import "../css/header.css"; 

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageUrl:
        "https://res.cloudinary.com/tf-lab/image/upload/w_600,h_310,c_fill,g_auto:subject,q_auto,f_auto/f_auto,q_auto,w_664,h_374/restaurant/51c11815-8cfc-41fd-96f1-13b367caf7a9/ba2dd100-4ae5-4f27-b020-16f5cef6d1da.jpg",
} ,
    {
      imageUrl:
        "https://res.cloudinary.com/tf-lab/image/upload/restaurant/51c11815-8cfc-41fd-96f1-13b367caf7a9/0692af4f-6212-42f0-84f8-30342ca62947.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
