import React from "react";
import "./propertyList.css";

const PropertyList = ({ listings }) => {
  return (
    <div className="pList">
      {listings.map((listing, index) => (
        <div className="pListItem" key={index}>
          <img className="pListImg" src={listing.image} alt={listing.alt} />
          <div className="pListTitle">
            <h1>{listing.title}</h1>
            <h2>{listing.quantity}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
