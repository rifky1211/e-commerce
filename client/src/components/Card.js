import React from "react";
import { Link } from "react-router-dom";

import CardPhoto1 from "../assets/images/realme-7.jpg";

export default function Card() {
  return (
    <div className="container">
      <Link to="/add" className="btn btn-primary">
        Add
      </Link>
      <div className="row">
        <div className="card card-styling my-4 mx-4 col-sm-3">
          <img
            className="card-img-top photo-styling"
            src={CardPhoto1}
            alt="CardPhoto"
          />
          <div className="card-body">
            <h5 className="card-title">Realme 7 Pro</h5>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star mb-3"></i>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/detail-item" className="btn btn-success">
              Detail Item
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
