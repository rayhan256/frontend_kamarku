import React from "react";
import Navbar from "../../components/navbar";
import Header from "../../part/home/header/Header";

export default function Home({ data }) {
  return (
    <>
      <Navbar />
      <Header data="Capek ? Pesen kamar dulu yuk.." />
    </>
  );
}
