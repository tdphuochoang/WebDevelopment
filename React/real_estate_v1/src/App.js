import React, { useEffect, useState, useLayoutEffect } from "react";
import GlobalStyle from "./globalStyle";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Contact from "./pages/Contact";
import Homes from "./pages/Homes";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/homes" exact element={<Homes />} />
        <Route path="/rentals" exact element={<Rentals />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
