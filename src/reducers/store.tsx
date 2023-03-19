import { configureStore } from "@reduxjs/toolkit";

const reducer = {};

export default function createStore() {
  return configureStore({
    reducer,
  });
}
