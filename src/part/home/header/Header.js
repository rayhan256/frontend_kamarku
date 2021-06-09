import React from "react";
import "./index.scss";
export default function Header({ data }) {
  return (
    <>
      <div className="header-wrapper">
        <h2>{data}</h2>
      </div>
    </>
  );
}
