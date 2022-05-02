import React from "react";
import "./propertyList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className="arrow-right" style={{ ...style }} onClick={onClick}>
      <FontAwesomeIcon
        icon={faCircleChevronRight}
        className="slick-arrow-icon-right"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="arrow-left"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        className="slick-arrow-icon-left"
      />
    </div>
  );
}

const PropertyList = ({ listings }) => {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings} className="pList">
      {listings.map((listing, index) => (
        <div className="pListItem" key={index}>
          <img className="pListImg" src={listing.image} alt={listing.alt} />
          <div className="pListTitle">
            <h1>{listing.title}</h1>
            <h2>{listing.quantity}</h2>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PropertyList;
