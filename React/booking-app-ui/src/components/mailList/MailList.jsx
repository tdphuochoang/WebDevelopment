import React from "react";
import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <div className="mailContainer">
        <h2 className="mailTitle">Save time, save money!</h2>
        <p className="mailDesc">Sign up and we'll send the best deals to you</p>

        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
        <div className="mailradio">
          <label className="mail-checkbox">
            <input type="checkbox" name="checkbox" />
            Send me a link to get the FREE Booking.com app!
          </label>
        </div>
      </div>
    </div>
  );
};

export default MailList;
