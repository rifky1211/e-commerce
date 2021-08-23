import React from "react";
import { Link } from "react-router-dom";



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
    localStorage.setItem("image", props.image)
  };

  return (
    <div className="col-sm-3">
      <div className="card card-styling my-4">
        <img
          className="card-img-top photo-styling"
          src={`https://e-commerce-rifky.s3.ap-southeast-1.amazonaws.com/${props.image}`}
          alt="CardPhoto"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {start}
          <p className="card-text">
           {props.description}
          </p>
          <h3 className="border-bottom pb-4">Rp. {Intl.NumberFormat().format(props.price)},-</h3>
          <Link to="/detail-item" className="btn btn-success" onClick={detail}>
            Detail Item
          </Link>
        </div>
      </div>
    </div>
  );
}
