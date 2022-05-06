import React from "react";
import "./SearchItem.css";
import { IoLeafOutline } from "react-icons/io5";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.image} alt={item.alt} className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.title}</h1>
        <div className="siSubtitle">
          <span className="siPlace">{item.place}</span> •
          <span className="siShowMap"> Show on map </span> •
          <span className="siDistance"> {item.distance} miles from center</span>
        </div>
        <div className="siFeatures">
          <IoLeafOutline className="siLeaf" />
          <span>Travel Sustainable property</span>
        </div>
        <span className="siText">{item.text}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <div>
            <div className="siRate">{item.rating}</div>
            <div className="siReview">{item.review} reviews</div>
          </div>
          <button>{item.score}</button>
        </div>
        <div className="siLocationRate">Location {item.locationrate}</div>
        <button className="siCheckButton">Show prices</button>
      </div>
    </div>
  );
};

export default SearchItem;
