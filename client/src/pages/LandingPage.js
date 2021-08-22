import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { loadItem } from "../actions/items";

import Card from "../components/Card";
import Header from "../components/Header";

export default function LandingPage() {
  const { items } = useSelector(
    (state) => ({
      items: state.items,
    }),
    shallowEqual
  );

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItem());
  }, [dispatch]);

  const nodeList = items.map((item, index) => {
    return (
      <Card
        key={index}
        sent={item.sent}
        id={item.id}
        title={item.title}
        rate={item.rate}
        description={item.description}
        image={item.image}
        price={item.price}
        brand={item.brand}
        detailProduct={item.detailProduct}
      />
    );
  });

  return (
    <div>
      <Header></Header>

      <div className="container">
        <Link to="/add" className="btn btn-primary">
          Add
        </Link>
        <div className="row">{nodeList}</div>
      </div>
    </div>
  );
}
