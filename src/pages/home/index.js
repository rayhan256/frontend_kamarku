import React from "react";
import Navbar from "../../components/navbar";
import ChoosenMenu from "../../part/home/choosen_menu";
import Header from "../../part/home/header/Header";
import RecommendedCities from "../../part/home/recomended_city";


export default function Home({ data }) {
  return (
    <>
      <Navbar />
      <Header data="Capek ? Pesen kamar dulu yuk.." />
      <RecommendedCities />
      <ChoosenMenu />
    </>
  );
}
