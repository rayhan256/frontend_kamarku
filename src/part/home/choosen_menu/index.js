import React from 'react'
import "./index.scss";
import MenuIcon from '../../../components/menu_icon';
import apartment from '../../../assets/images/apartment.svg';
import hotel from '../../../assets/images/hotel.svg';
import homestay from '../../../assets/images/Imah.svg';

export default function ChoosenMenu({name}) {
    return (
        <div>
            <div className="container">
                <div className="title-wrapper">
                    <h1 className="main-title">Pilihan <span className="title-span">Penginapan</span></h1>
                    <h1 className="main-title-href">Lihat Semua</h1>
                </div>
                <p className="mt-1">Sesuaikan Akomodasi Penginapan kalian</p>

                <div className="menu-icon-wrapper row">
                    <div className="col-md-4">
                        <MenuIcon image={hotel} name="Hotel" desc="Temukan hotel pilihan mu"/>
                    </div>
                    <div className="col-md-4">
                        <MenuIcon image={apartment} name="Apartemen" desc="Temukan apartemen pilihan mu"/>
                    </div>
                    <div className="col-md-4">
                        <MenuIcon image={homestay} name="Homestay" desc="Temukan homestay pilihan mu"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
