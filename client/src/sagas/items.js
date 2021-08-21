import { all, takeEvery, put, call } from "redux-saga/effects";
import * as actions from "../actions/items";
import axios from "axios";
import history from "../history";

import { ADD_ITEM, ADD_TRANSACTION, LOAD_ITEM } from "../constants";

const API_URL = process.env.REACT_APP_SERVER_URL;

const request = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

const read = async (path) =>
  await request
    .get(path)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });

const add = async (path, params) =>
  await request
    .post(path, params)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });

    const checkout = async (path, params) =>
  await request
    .post(path, params)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });



const PATH = "/api/item";
const PATH_TRANSACTION = "/api/transaction"

function* loadItem() {
  try {
    const data = yield call(read, PATH);
    yield put(actions.drawLoadItem(data));
  } catch (error) {
    console.log(error);
    yield put(actions.failedLoadItem());
  }
}

function* addItem(payload) {
  const { title, rate, description, price, brand, detailProduct, image } =
    payload;
  yield put(
    actions.drawAddItem(
      title,
      rate,
      description,
      price,
      brand,
      detailProduct,
      image
    )
  );
  try {
    const data = yield call(add, PATH, {
      title,
      rate,
      description,
      price,
      brand,
      detailProduct,
      image,
    });
    yield put(actions.successAddItem(data));
    history.push("/");
  } catch (error) {
    console.log(error);
    yield put(actions.failedAddItem(title));
  }
}

function* addTransaction(payload) {
  const { nameProduct, price, color, capacity, quantity } =
    payload;
  try {
    const data = yield call(checkout, PATH_TRANSACTION, {
      nameProduct, price, color, capacity, quantity
    });
    yield put(actions.successAddTransaction(data));
    history.push("/");
  } catch (error) {
    console.log("err", error);
    yield put(actions.failedAddTransaction());
  }
}


export default function* rootSaga() {
  yield all([takeEvery(LOAD_ITEM, loadItem), takeEvery(ADD_ITEM, addItem), takeEvery(ADD_TRANSACTION, addTransaction)]);
}