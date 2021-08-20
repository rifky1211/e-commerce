import React, { useState } from "react";
import { Link } from "react-router-dom";

import PhotoItem from "../../assets/images/realme-7.jpg";

export default function Detail() {
  const initialState = {
    price: 3500000,
    quantity: 1,
    color: "",
    capacity: "",
  };

  const [{ price, quantity, capacity, color }, setState] =
    useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="container">
      <div className="mt-4 ">
        <div className="row justify-content-center">
          <div className="image-styling col-sm-5 mx-4">
            <img src={PhotoItem} alt="" />
          </div>
          <div className="col-sm-4 detail-product">
            <div className="header-product">
              <h3>Realme 7 Pro</h3>
              <h6>
                Brand Realme <small>(5504 votes)</small>
              </h6>
            </div>
            <div className="price-product mt-4">
              <p>Price</p>
              <h3>Rp. {Intl.NumberFormat().format(price)},-</h3>
            </div>
            <div className="transaction-product mt-4">
              <p className="color-styling">Color</p>
              <button
                className={
                  color === "putih"
                    ? "btn btn-warning disabled"
                    : "btn btn-warning"
                }
                onClick={() => {
                  setState({ price, quantity, color: "putih", capacity });
                }}
              >
                Putih
              </button>
              <button
                className={
                  color === "hitam"
                    ? "btn btn-warning mx-2 disabled"
                    : "btn btn-warning mx-2"
                }
                onClick={() => {
                  setState({ price, quantity, color: "hitam", capacity });
                }}
              >
                Hitam
              </button>
              <p className="capacity-styling">Capacity</p>
              <button
                className={
                  capacity === "16"
                    ? "btn btn-warning disabled"
                    : "btn btn-warning"
                }
                onClick={() => {
                  setState({ price, quantity, color, capacity: "16" });
                }}
              >
                16 GB
              </button>
              <button
                className={
                  capacity === "32"
                    ? "btn btn-warning mx-2 disabled"
                    : "btn btn-warning mx-2"
                }
                onClick={() => {
                  setState({ price, quantity, color, capacity: "32" });
                }}
              >
                32 GB
              </button>
              <p>Quantity</p>
              <button
                className={
                  quantity === 1
                    ? "btn btn-primary btn-sm rounded-circle disabled"
                    : "btn btn-primary btn-sm rounded-circle"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setState({ price: price - (price / quantity) , quantity: quantity - 1, color, capacity });
                }}
              >
                <i className="fas fa-minus"></i>
              </button>
              <input
                type="number"
                min="1"
                className="quantity-input-styling"
                value={quantity}
                name="quantity"
                onChange={onChange}
                readOnly
              />
              <button
                className="btn btn-primary btn-sm rounded-circle"
                onClick={(e) => {
                  e.preventDefault();
                  setState({ price: price + (price / quantity), quantity: quantity + 1, color, capacity });
                }}
              >
                <i className="fas fa-plus"></i>
              </button>
              <div>
                <button
                  className="btn btn-success btn-cart-styling mt-4"
                  onClick={() => {
                    if (color === "" && capacity === "") {
                      alert("Please choose color & capacity");
                    } else if (color === "") {
                      alert("Please choose ur color");
                    } else if(capacity === ""){
                      alert("Please choose ur capacity")
                    }else{
                      alert("Transaction Success")
                    }

                    console.log("price", price);
                    console.log("capacity", capacity);
                    console.log("color", color);
                    // window.location="/"
                  }}
                >
                  <i className="fas fa-shopping-cart"></i> Buy
                </button>
              </div>
              <div>
                <Link to="/" className="btn btn-warning btn-cart-styling mt-2">
                  <i className="fas fa-ban"></i> Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="border-bottom navbar-product pb-1">
          <Link
            to="/"
            className="border-bottom"
            style={{ textDecoration: "none", color: "gray" }}
          >
            Product Detail
          </Link>
          <Link
            to="/"
            className="mx-4"
            style={{ textDecoration: "none", color: "gray" }}
          >
            Testimonial
          </Link>
        </div>
        <div className="mt-3">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
