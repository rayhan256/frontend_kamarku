import React from "react";
import "./index.scss";
import logo from "assets/images/logo/logo.svg";

export default function Footer() {
  return (
    <div>
      <div className="container footer">
        <hr />
        <div className="footer-wrapper">
          <div className="footer-item">
            <img src={logo} alt="" />
            <h5 className="footer-text-title">
              Miliki pengalaman nginep yang selalu dikenang
            </h5>
          </div>
          <div className="footer-item">
            <h5 className="footer-title">Tentang Kami</h5>
            <ul>
              <li className="footer-text li-text">Bandung</li>
              <li className="footer-text li-text">Jakarta</li>
              <li className="footer-text li-text">Surabaya</li>
            </ul>
          </div>
          <div className="footer-item">
            <h5 className="footer-title">Support</h5>
            <ul>
              <li className="footer-text li-text">Bandung</li>
              <li className="footer-text li-text">Jakarta</li>
              <li className="footer-text li-text">Surabaya</li>
            </ul>
          </div>
          <div className="footer-item">
            <h5 className="footer-title">Hubungi Kami</h5>
            <ul>
              <li className="footer-text li-text">Bandung</li>
              <li className="footer-text li-text">Jakarta</li>
              <li className="footer-text li-text">Surabaya</li>
            </ul>
          </div>
        </div>
        <h6 className="text-center mt-5 mb-4">
          Copyright 2021 • All rights reserved • Kamarku
        </h6>
      </div>
    </div>
  );
}
