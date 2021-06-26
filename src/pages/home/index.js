import React from "react";
import Navbar from "components/navbar";
import ChoosenMenu from "part/home/choosen_menu";
import Header from "part/home/header/Header";
import RecommendedCities from "part/home/recomended_city";
import Jumbotron from "part/home/jumbotron";
import Article from "part/home/article";
import Footer from "components/footer";
import "./index.scss";

export default function Home({ data }) {
  return (
    <div className="homepages">
      <Navbar />
      <Header data="Capek ? Pesen kamar dulu yuk.." />
      <RecommendedCities />
      <ChoosenMenu />
      <Jumbotron />
      <Article />
      <Footer />
    </div>
  );
}
