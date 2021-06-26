import React from "react";
import "./index.scss";
import CityCard from "components/item_card";
import jakarta from "assets/images/jakarta.jpg";
import SectionTitle from "components/section-title";
import Slider from "react-slick";
function RecommendedCities() {
  const setting = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "200px",
          slidesToShow: 2,
        },
      },
    ],
  };
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
