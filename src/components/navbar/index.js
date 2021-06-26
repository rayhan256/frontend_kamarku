import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import { Link } from "react-router-dom";
import "./index.scss";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <div className="d-flex flex-row justify-content-around w-100">
            <Link className="navbar-brand" href="/">
              <img
                src={Logo}
                className="d-inline-block align-text-top"
                alt="Kamarku"
                width="80"
              />
            </Link>
            <form>
              <div className="input-group">
                <i
                  class="fas fa-search form-control-icon"
                  aria-hidden="true"
                ></i>
                <input
                  className="form-control k-search-form"
                  type="search"
                  placeholder="Mau Kemana ?"
                  aria-label="Mau Kemana ?"
                />
              </div>
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
