import React from "react";
import "./index.scss";
import CityCard from "components/item_card";
import jakarta from "assets/images/jakarta.jpg";
import SectionTitle from "components/section-title";
import Slider from "react-slick";
function RecommendedCities() {
  const curWidth = window.screen.availWidth;
  let setting = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  if (curWidth < 1366) {
    setting = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  }

  return (
    <>
      <div className="container mb-5">
        <SectionTitle name="Rekomendasi" subName="Kota" hasLink />
        <p className="my-1">Rekomendasi kota yang paling sering dikunjungin</p>
        <div className="recommended-place-wrapper row mt-4">
          <Slider {...setting}>
            <div className="col-md-3 col-sm-12">
              <CityCard image={jakarta} />
            </div>
            <div className="col-md-3 col-sm-12">
              <CityCard image={jakarta} />
            </div>
            <div className="col-md-3 col-sm-12">
              <CityCard image={jakarta} />
            </div>
            <div className="col-md-3 col-sm-12">
              <CityCard image={jakarta} />
            </div>
            <div className="col-md-3 col-sm-12">
              <CityCard image={jakarta} />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default RecommendedCities;
