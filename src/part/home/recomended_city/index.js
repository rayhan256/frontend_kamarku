import React, { useEffect, useState } from "react";
import "./index.scss";
import CityCard from "components/item_card";
import SectionTitle from "components/section-title";
import Slider from "react-slick";
import Skeleton from "react-loading-skeleton";
import { getAllCity } from "services/fetch_api";
function RecommendedCities() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsloading] = useState(false);

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

  useEffect(() => {
    const getCity = async () => {
      setIsloading(true);
      const res = await getAllCity();
      setCities(res.data);
    };
    getCity();
    setIsloading(false);
  }, [isLoading]);
  if (isLoading) {
    return (
      <div className="container mb-5">
        <SectionTitle name="Rekomendasi" subName="Kota" hasLink />
        <p className="my-1">Rekomendasi kota yang paling sering dikunjungin</p>
        <div className="recommended-place-wrapper row mt-4">
          <Skeleton count="5" />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container mb-5">
        <SectionTitle name="Rekomendasi" subName="Kota" hasLink />
        <p className="my-1">Rekomendasi kota yang paling sering dikunjungin</p>
        <div className="recommended-place-wrapper row mt-4">
          <Slider {...setting}>
            {cities.map((val) => (
              <div className="col-md-3 col-sm-12" key={Math.random()}>
                <CityCard image={val.image} name={val.name} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default RecommendedCities;
