import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" /> TOBI
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link onClick={closeMobileMenu} to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={closeMobileMenu}
                  to="/services"
                  className="nav-links"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={closeMobileMenu}
                  to="/products"
                  className="nav-links"
                >
                  Products
                </Link>
              </li>

              <li className="nav-btn">
                {button ? (
                  <Link
                    onClick={closeMobileMenu}
                    to="/sign-up"
                    className="btn-link"
                  >
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link
                    onClick={closeMobileMenu}
                    to="/sign-up"
                    className="btn-link"
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
