import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
export default function NavbarToggler() {
  const backButton = () => {
    document.querySelector(".toggler-wrapper").classList.remove("active");
  };
  return (
    <div>
      <div className="toggler-wrapper">
        <div className="title">
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={backButton}
            className="icon-back"
          />
          <h5>Menu</h5>
          <div></div>
        </div>
        <ul className="toggler-item">
          <li className="toggler-link">
            <Link>Login</Link>
          </li>
          <li className="toggler-link">
            <Link>Sign Up</Link>
          </li>
          <li className="toggler-link">
            <Link>Contact Us</Link>
          </li>
        </ul>
        <p className="toggler-footer">
          Copyright 2021 • All rights reserved • Kamarku
        </p>
      </div>
    </div>
  );
}
