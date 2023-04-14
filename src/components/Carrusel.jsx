'use client'
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carrusel = () => {
  const handleOnDragStart = (e) => e.preventDefault();
  const items = [
    <img src="/img/1.png" onDragStart={handleOnDragStart} />,
    <img src="/img/2.png" onDragStart={handleOnDragStart} />,
    <img src="/img/3.png" onDragStart={handleOnDragStart} />,
    <img src="/img/4.png" onDragStart={handleOnDragStart} />,
    <img src="/img/5.png" onDragStart={handleOnDragStart} />
  ];

  return (
    <AliceCarousel mouseTracking items={items} autoPlay autoPlayInterval={3000} />
  );
};

export default Carrusel;
