import React from "react";
import MainSection from "../../MainSection";
import Pricing from "../../Pricing";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <MainSection {...homeObjOne} />
      <MainSection {...homeObjThree} />
      <MainSection {...homeObjTwo} />
      <Pricing />
      <MainSection {...homeObjFour} />
    </>
  );
}

export default Home;
