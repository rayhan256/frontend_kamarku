import React from "react";
import "./index.scss";
import Navbar from "components/navbar";
import CityCard from "components/item_card";
import jakarta from "assets/images/jakarta.jpg";

export default function AllCities() {
  const name = [
    "Jakarta",
    "Bandung",
    "Garut",
    "Subang",
    "Lembang",
    "Cirebon",
    "Bekasi",
    "Cikarang",
    "Bali",
  ];
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="all-cities-title-wrapper">
          <h1 className="mt-4">Lihat Semua Kota</h1>
          <p className="all-cities text">
            Yuk, cari dulu kota tujuan kamu bila ingin lebih spesifik
          </p>
        </div>
        <div className="row">
          {name.map((val) => (
            <div className="col-md-3 col-sm-6">
              <CityCard image={jakarta} name={val} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
