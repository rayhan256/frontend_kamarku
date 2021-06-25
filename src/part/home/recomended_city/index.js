import React from 'react';
import './index.scss'
import CityCard from 'components/item_card';
import jakarta from "assets/images/jakarta.jpg"
import SectionTitle from 'components/section-title';
function RecommendedCities() {
    return (
        <>
        <div className="container mb-5"> 
            <SectionTitle name="Rekomendasi" subName="Kota" hasLink />
            <p className="my-1">Rekomendasi kota yang paling sering dikunjungin</p>
            <div className="recommended-place-wrapper row mt-4">
                    <div className="col-md-3">
                        <CityCard image={jakarta} />
                    </div>
                    <div className="col-md-3">
                        <CityCard image={jakarta} />
                    </div>
                    <div className="col-md-3">
                        <CityCard image={jakarta} />
                    </div>
                    <div className="col-md-3">
                        <CityCard image={jakarta} />
                    </div>
            </div>
        </div>
        </>
    )
}

export default RecommendedCities