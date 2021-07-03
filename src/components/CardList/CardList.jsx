import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card.jsx";
import styles from "./style.css";
import { connect } from "react-redux";

function CardList({
  dispatch,
  isCardShown,
  items,
  productInfo,
  favourites,
  handler,
  favouriteItem,
}) {
  return (
    <div className="card-list">
      {items.map((laptop) => {
        return (
          <Card
            dispatch={dispatch}
            laptopInfo={laptop}
            modalHandler={handler}
            isCardShown={isCardShown}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    counterValue: store.counter,
    modalInfo: store.modalInfo,
    favourites: store.favourites,
    show: store.show,
    cartItems: store.cartItems,
  };
};

export default connect(mapStateToProps)(CardList);
