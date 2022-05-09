import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { HotelImageData as photos } from "../../data/HotelImageData";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">The Mediterranean Inn</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              425 Queen Anne Avenue North, Queen Anne, Seattle, WA 98109, United
              States of America
            </span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={handleOpen(index)}
                  src={photo.image}
                  alt="HotelImg"
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Seattle</h1>
              <p>
                Located just 10 minutes' walk away from The Space Needle, The
                Mediterranean Inn features a rooftop patio with panoramic views
                of the Seattle Skyline, Mount Rainier, the Olympic Mountains,
                and Elliot Bay. A fitness center is located on site. All guest
                rooms at this hotel include a flat-screen TV, full sized work
                desk, a microwave, small refrigerator, coffee maker, and
                kitchenette. All rooms include private bathrooms that include
                hairdryers. A 24-hour reception greets guests of The
                Mediterranean Inn. A business center and 24-hour laundry
                facilities are provided to guests. Vending machines featuring
                snacks and drinks are available. Coffee is available in the
                lobby. Pike Place Market is 1.2 mi away from this hotel. Hosting
                sports and entertainment events, KeyArena is 3 minutes’ walk
                away. Solo travelers in particular like the location – they
                rated it 9.3 for a one-person stay.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the real heart of Seattle, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
