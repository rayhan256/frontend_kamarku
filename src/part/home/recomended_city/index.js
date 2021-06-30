import React, { useEffect } from "react";
import "./index.scss";
import CityCard from "components/item_card";
import SectionTitle from "components/section-title";
import Slider from "react-slick";
import { fetchCities } from "state_management/reducer/getCities";
import Skeleton from "react-loading-skeleton";
import { useSelector, useDispatch } from "react-redux";
function RecommendedCities() {
  const content = useSelector((state) => state.getAllCitiesReducer);
  const dispatch = useDispatch();

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
    dispatch(fetchCities());
  }, [dispatch]);

  if (content.isLoading) {
    return (
      <div>
        <div className="container">
          <div className="row">
            <Skeleton count="5" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mb-5">
        <SectionTitle
          name="Rekomendasi"
          subName="Kota"
          hasLink
          link="/cities"
        />
        <p className="my-1">Rekomendasi kota yang paling sering dikunjungin</p>
        <div className="recommended-place-wrapper row mt-4">
          <Slider {...setting}>
            {content.cities.map((val) => (
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
