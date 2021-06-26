import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
export default function BasicCard({ image, name, summary, link }) {
  return (
    <div>
      <div className="card">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body">
          <div className="card-title">{name}</div>
          <p className="card-text">{summary}</p>
          <Link href={link}>
            <h4 className="article-link">Selengkapnya</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
