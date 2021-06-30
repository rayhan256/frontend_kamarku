import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
export default function SectionTitle({ name, subName, link, hasLink }) {
  let classname = ["main-title-href"];
  if (hasLink)
    return (
      <div>
        <div className="title-wrapper">
          <h1 className="main-title">
            {name}
            <span className="title-span"> {subName}</span>
          </h1>
          <Link to={link}>
            <h1 className={classname.join(" ")}>Lihat Semua</h1>
          </Link>
        </div>
      </div>
    );
  return (
    <div>
      <div className="title-wrapper">
        <h1 className="main-title">
          {name}
          <span className="title-span"> {subName}</span>
        </h1>
      </div>
    </div>
  );
}
