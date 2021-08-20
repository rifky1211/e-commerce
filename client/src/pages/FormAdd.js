import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeaderAdd from "../components/HeaderAdd";

export default function FormAdd() {
  const initialState = {
    title: "",
    rate: 1,
    description: "",
    price: 0,
    brand: "",
    detailProduct: "",
    image: null,
  };

  const [
    { title, rate, description, price, brand, detailProduct, image },
    setState,
  ] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="container border-add-styling mt-4">
      <HeaderAdd />
      <form encType="multipart/form-data">
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter title"
            required
            checked={title}
            value={title}
            onChange={onChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="rate">Rate</label>
          <input
            type="number"
            className="form-control"
            id="rate"
            min="1"
            max="5"
            name="rate"
            placeholder="Enter rate"
            required
            checked={rate}
            value={rate}
            onChange={onChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter description"
            required
            checked={description}
            value={description}
            onChange={onChange}
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            placeholder="Enter price"
            required
            checked={price}
            value={price}
            onChange={onChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            className="form-control"
            id="brand"
            name="brand"
            placeholder="Enter brand"
            required
            checked={brand}
            value={brand}
            onChange={onChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="detailProduct">Detail Product</label>
          <textarea
            type="text"
            className="form-control"
            id="detailProduct"
            name="detailProduct"
            placeholder="Using markdown"
            rows="6"
            required
            checked={detailProduct}
            value={detailProduct}
            onChange={onChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="form-control mb-4"
            id="image"
            name="image"
            placeholder="Enter image"
            required
            checked={image}
            value={image}
            onChange={onChange}
          />
        </div>
        <div className="form-group mb-3">
          <button type="submit" className="btn btn-success">
            Add
          </button>
          <Link to="/" className="btn btn-warning mx-2">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
