import React from "react";
import Landing from "../components/Landing";
import Services from "../components/Services";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import Offer from "../components/Offer";
import RecentProducts from "../components/RecentProducts";
import Sponsor from "../components/Sponsor";
const Home = () => {
  return (
    <>
      <Landing />
      <Services />
      <Category />
      <BestSeller />
      <Offer />
      <RecentProducts />
      <Sponsor />
    </>
  );
};

export default Home;
