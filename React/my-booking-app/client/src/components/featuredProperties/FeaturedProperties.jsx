import React from "react";
import "./FeaturedProperties.css";

const FeaturedProperties = ({ listings }) => {
  return (
    <div className="fp">
      {listings.map((listing, index) => (
        <div className="fpItem" key={index}>
          <img className="fpImg" src={listing.image} alt={listing.alt} />
          <span className="fpName">{listing.name}</span>
          <span className="fpCity">{listing.city}</span>
          <span className="fpPrice">Starting from {listing.price}</span>
          <div className="fpRating">
            <button>{listing.score}</button>
            <span>{listing.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
