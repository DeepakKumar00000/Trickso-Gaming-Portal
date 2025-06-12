
import React from "react";
import Navbar from "./Navbar";
import ChallengesSection from "./ChallengesSection";
import CasualGaming from "./CasualGaming";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ChallengesSection />
      <CasualGaming />
    </>
  );
};

export default Layout;
