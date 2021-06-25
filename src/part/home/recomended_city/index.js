import React from 'react';
import './index.scss'
import CityCard from '../../../components/item_card';
import jakarta from "../../../assets/images/jakarta.jpg"
function RecommendedCities() {
    return (
        <>
        <div className="container mb-5"> 
            <div className="title-wrapper">
                <h1 className="main-title">Rekomendasi <span className="title-span">Kota</span></h1>
                <h1 className="main-title-href">Lihat Semua</h1>
            </div>
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