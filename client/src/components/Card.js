import React from "react";
import { Link } from "react-router-dom";
import { detailItem } from "../actions/items";
import { useDispatch } from 'react-redux';


import CardPhoto1 from "../assets/images/asus-max-pro-m1.jpeg";

export default function Card(props) {
let totalStar = []
  for(let i = 0; i < props.rate; i++){
    totalStar.push(1)
  }

  const start = totalStar.map(index => {
    return (
      <i className="fas fa-star" key={index}></i>
    )
  })

  const detail = (e) => {
    localStorage.setItem("title", props.title)
    localStorage.setItem("price", props.price)
    localStorage.setItem("detailProduct", props.detailProduct)
    localStorage.setItem("brand", props.brand)
  };

  return (
    <div className="col-sm-3">
      <div className="card card-styling my-4">
        <img
          className="card-img-top photo-styling"
          src={CardPhoto1}
          alt="CardPhoto"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {start}
          <p className="card-text">
           {props.description}
          </p>
          <Link to="/detail-item" className="btn btn-success" onClick={detail}>
            Detail Item
          </Link>
        </div>
      </div>
    </div>
  );
}
