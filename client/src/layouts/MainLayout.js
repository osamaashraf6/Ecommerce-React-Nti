import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
