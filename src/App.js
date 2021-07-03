import React, { Component, useEffect, useState } from "react";
import Button from "./components/Button/Button.jsx";
import Modal from "./components/Modal/Modal.jsx";
import Header from "./components/Header/Header.jsx";
import data from "../src/common-files/data.json";
import products from "./products.json";
import CardList from "./components/CardList/CardList.jsx";
import Card from "./components/Card/Card.jsx";
import Cart from "./components/Cart/Cart.jsx";
import img from "./img/products/1.jpg";
import { NavLink, Route, Switch } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import { connect } from "react-redux";

function App({
  counterValue,
  dispatch,
  modalInfo,
  favourites,
  show,
  cartItems,
}) {
  //ACTION JUST FOR TEST PURPOSE CREATING HERE -SHOULD BE IN OTHER PLACE!
  const actionIncrement = {
    type: "INCR",
    payload: "",
  };
  const actionDecrement = {
    type: "DCR",
  };

  const [isFavourite, setisFavourite] = useState(false);

  const favouriteItemsList = [];

  useEffect(() => {
    dispatch({ type: "SET_PRODUCT_DATA", payload: products });
    // setProductData(products);
    // console.log(productData);
  }, []);

  const updateModal = (id) => {
    const modalInfo = data.modalDAta.filter((modal) => modal.id === id);
    dispatch({ type: "SET_SHOW", payload: !show });
    // setShow(!show);
    dispatch({ type: "SET_MODAL_INFO", payload: modalInfo });
    // setModalInfo(modalInfo);
  };
  const showModal = () => {
    dispatch({ type: "SET_SHOW", payload: !show });
    // setShow(!show);
  };

  //creatin dataID for modals
  const dataID = {
    buttonOne: 1,
    buttonTwo: 2,
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(actionIncrement)}>+</button>
      <button onClick={() => dispatch(actionDecrement)}>-</button>
      {counterValue}
      <Header />
      <AppRoutes
        dispatch={dispatch}
        items={products}
        isFavourite={isFavourite}
        handler={() => {
          updateModal(dataID.buttonOne);
        }}
      />

      {show && (
        <Modal
          show={show}
          header={modalInfo[0].header}
          text={modalInfo[0].text}
          handler={showModal}
          actions={[
            <Button
              text={"YES"}
              backgroundColor={"#b53726"}
              modalHandler={showModal}
            />,
            <Button text={"NO"} backgroundColor={"#b53726"} />,
          ]}
        />
      )}
    </div>
  );
}
// useEffect(()=>{

//   fetch(data, {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   }).then((r) => console.log(r.json()));
// .then((res) => {
//   console.log(res);
//   this.setState({ productData: res });
// });
// }

// }, [])

const mapStateToProps = (store) => {
  return {
    counterValue: store.counter,
    modalInfo: store.modalInfo,
    favourites: store.favourites,
    show: store.show,
    cartItems: store.cartItems,
  };
};

export default connect(mapStateToProps)(App);
