import React from "react";
import "./index.scss";

export default function CityCard({ name, image, children }) {
  return (
    <div>
      <div className="img-city-wrapper">
        <img src={image} alt={name} className="img-city" />
        <h5 className="city-title">{name}</h5>
      </div>
    </div>
  );
}
