import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialStore = {
  counter: 0,
  modalInfo: {},
  favourites: [],
  productData: [],
  show: false,
  cartItems: [],
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case "INCR":
      return { ...store, counter: ++store.counter };

    case "DCR":
      return { ...store, counter: --store.counter };

    case "SET_MODAL_INFO":
      return { ...store, modalInfo: action.payload };
    case "SET_FAV":
      return { ...store, favourites: [...store.favourites, action.payload] };
    case "REMOVE_FAV":
      return {
        ...store,
        favourites: store.favourites.filter((el) => el !== action.payload),
      };
    case "SET_PRODUCT_DATA":
      return {
        ...store,
        productData: action.payload,
      };
    case "SET_SHOW":
      return {
        ...store,
        show: action.payload,
      };
    case "SET_CART_ITEM":
      return {
        ...store,
        cartItems: [...store.cartItems, action.payload],
      };
    case "REMOVE_CART_ITEM":
      return {
        ...store,
        cartItems: store.cartItems.filter((el) => el !== action.payload),
      };

    default:
      return store;
  }
};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
