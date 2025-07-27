import React from "react";
import Banner from "../components/banner/Banner";
import FeaturedProducts from "./FeaturedProducts";
import OurGurenty from "../components/OurGurenty/OurGurenty";
import Cards from "../components/cardsection/Cards";
import NormalCard from "../components/cardsection/SeasionTopCard";
import MessageVideo from "../components/MessageVideo/MessageVideo";
import TrendingCategories from "../components/TrendingCategories/TrendingCategories";
import BestSellers from "../bestSellers/BestSellers";
import KdStyle from "../components/KdStyle/KdStyle";
import RightPlace from "../components/rightPlace/RightPlace";

function Home() {
  return (
    <>
      <Banner />
      <OurGurenty />
      <Cards />
      <MessageVideo />
      <TrendingCategories />
      <BestSellers />
      <KdStyle />
      <RightPlace/>
      {/* <FeaturedProducts /> */}
    </>
  );
}

export default Home;
