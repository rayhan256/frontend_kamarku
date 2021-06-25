import React from "react";
import "./index.scss";
import headerImage from  "../../../assets/images/header.png"

export default function Header({ data }) {
  return (
    <>
      <div className="header-wrapper">
        <img src={headerImage} alt="" className="m-img-header" />
        <h2>{data}</h2>
      </div>
    </>
  );
}
