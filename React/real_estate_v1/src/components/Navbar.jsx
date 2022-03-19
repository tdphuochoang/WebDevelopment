import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

function Navbar({ toggle }) {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? "#CD853F" : "transparent",
    transition: "0.5s",
  };

  return (
    <Nav style={style}>
      <Logo to="/">PlaceStation</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu to="/">
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          {" "}
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  width: 100%;
  position: fixed;
`;

const LinkStyle = css`
  color: white;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${LinkStyle}
  font-style: italic;
  font-family: "Dancing Script", cursive;
  font-size: 45px;
  letter-spacing: 3px;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 0;
    transform: translate(-50%, 25%);
    color: white;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  ${LinkStyle}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export default Navbar;
