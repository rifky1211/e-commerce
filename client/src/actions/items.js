import {
  ADD_ITEM,
  ADD_TRANSACTION,
  DRAW_ADD_ITEM,
  DRAW_LOAD_ITEM,
  FAILED_ADD_ITEM,
  FAILED_ADD_TRANSACTION,
  FAILED_LOAD_ITEM,
  LOAD_ITEM,
  SUCCESS_ADD_ITEM,
  SUCCESS_ADD_TRANSACTION,
} from "../constants";

export const drawLoadItem = (items) => ({
  type: DRAW_LOAD_ITEM,
  items,
});

export const failedLoadItem = () => ({
  type: FAILED_LOAD_ITEM,
});

export const loadItem = (page = 1) => ({
  type: LOAD_ITEM,
  page
});

export const drawAddItem = (
  title,
  rate,
  description,
  price,
  brand,
  detailProduct,
  image
) => ({
  type: DRAW_ADD_ITEM,
  title,
  rate,
  description,
  price,
  brand,
  detailProduct,
  image,
});

export const successAddItem = (data) => ({
  type: SUCCESS_ADD_ITEM,
  data
});

export const failedAddItem = (id) => ({
  type: FAILED_ADD_ITEM,
  id,
});

export const addItem = (
  title,
  rate,
  description,
  price,
  brand,
  detailProduct,
  image
) => ({
  type: ADD_ITEM,
  title,
  rate,
  description,
  price,
  brand,
  detailProduct,
  image,
});

export const successAddTransaction = () => ({
  type: SUCCESS_ADD_TRANSACTION,
});
export const failedAddTransaction = () => ({
  type: FAILED_ADD_TRANSACTION,
});


export const addTransaction = (
  nameProduct, price, color, capacity, quantity
) => ({
  type: ADD_TRANSACTION,
  nameProduct, price, color, capacity, quantity
})
