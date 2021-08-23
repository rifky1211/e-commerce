import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { loadItem } from "../actions/items";

import Card from "../components/Card";
import Header from "../components/Header";

export default function LandingPage() {
  const [isFetching, setIsFetching] = useState(false);
	const [page, setPage] = useState(1);

  const { items } = useSelector(
    (state) => ({
      items: state.items,
    }),
    shallowEqual
  );
  let dispatch = useDispatch();
  const handleScroll = () => {
    if (
			Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
			isFetching
		)
			return;
		setIsFetching(true);
    setPage(page + 1)
  };

  useEffect(() => {
		if (!isFetching) return;
		fetchMoreListItems();
	}, [isFetching]);

	const fetchMoreListItems = () => {
    setPage(page + 1)

		setIsFetching(false);
	};
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    dispatch(loadItem(page));
  }, [dispatch, page, isFetching]);

  const nodeList = items.map((item, index) => {
    return (
      <Card
        key={item.id}
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
