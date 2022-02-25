import React from "react";
import MainSection from "../../MainSection";
import Pricing from "../../Pricing";
import { homeObjOne } from "./Data";

function Services() {
  return (
    <>
      <Pricing />
      <MainSection {...homeObjOne} />
    </>
  );
}

export default Services;
