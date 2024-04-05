import React from "react";
import { styles } from "../styles/styles";
import Navbar from "../components/landingpage/Navbar";
import Hero from "../components/landingpage/Hero";
import Companies from "../components/landingpage/Companies";

const LandingPage = () => {
  return (
    <div className={`flex flex-col justify-start items-start w-full h-auto`}>
      <Navbar />
      <Hero />
      <Companies />
    </div>
  );
};

export default LandingPage;
