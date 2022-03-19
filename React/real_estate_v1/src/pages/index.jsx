import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Listings from "../components/Listings";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import { ListingData } from "../data/ListingData";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <Listings listings={ListingData} />
      <InfoSection {...InfoData} />
      <Features />
      <InfoSection {...InfoDataTwo} />
    </>
  );
};

export default Home;
