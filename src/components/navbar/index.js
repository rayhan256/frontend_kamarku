import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import { Link } from "react-router-dom";
import "./index.scss";
import NavbarToggler from "components/navbar_toggler";
import SearchInput from "components/search";
export default function Navbar() {
  const navbarToggler = () => {
    document.querySelector(".toggler-wrapper").classList.add("active");
  };
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <div className="d-flex flex-row justify-content-around w-100">
            <Link className="navbar-brand" to="/">
              <img
                src={Logo}
                className="d-inline-block align-text-top"
                alt="Kamarku"
                width="80"
              />
            </Link>
            <SearchInput />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={navbarToggler}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
      <NavbarToggler />
    </>
  );
}
