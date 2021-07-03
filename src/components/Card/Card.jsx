import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import styles from "./style.css";
import empty from "../../img/products/star-empty.png";
import full from "../../img/products/star-full.png";
import trash from "../../img/products/trash.png";
import { connect } from "react-redux";
//Star Images

const imagesPath = {
  starEmpty: empty,
  starFull: full,
};
function Card({ dispatch, laptopInfo, isCardShown, cartItems, favourites }) {
  const addToCartHandler = (laptopInfo) => {
    console.log("pressed cart");
    // setCartItems([...cartItems, laptopInfo]);
    dispatch({ type: "SET_CART_ITEM", payload: laptopInfo });
    console.log(cartItems);
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  };

  const removeFromCart = (laptopInfo) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: laptopInfo });
    // setCartItems(cartItems.filter((el) => el !== laptopInfo));
  };

  //star function logic
  const toggleFavourite = (laptopInfo) => {
    //CHECK if the item IS NOT in the favourites array
    if (!favourites.find((el) => el === laptopInfo)) {
      //the item is not in the array so we need to add it
      //  setFavourites([...favourites, laptopInfo]);
      dispatch({ type: "SET_FAV", payload: laptopInfo });
      //  setFavourites(prevItems => [...prevItems, laptopInfo]);
      localStorage.setItem("favProduct", JSON.stringify(favourites));
      // setisFavourite(!isFavourite);
    } else {
      //REMOVE item from array using filter.
      // setFavourites(favourites.filter((el) => el !== laptopInfo));
      dispatch({ type: "REMOVE_FAV", payload: laptopInfo });
    }
  };

  const getImageName = () =>
    favourites.find((el) => el === laptopInfo) ? "starFull" : "starEmpty";
  const imageName = getImageName();

  if (isCardShown === 0)
    return (
      <div className="card">
        <img
          className="card__img"
          src={require(`../../img/products/${laptopInfo.image}`).default}
          alt="card"
        />
        <div className="card__info">
          <h1>Name: {laptopInfo.name}</h1>
          <div className="card__rating">
            <p>
              Add to favourite list:{" "}
              {
                <img
                  onClick={() => toggleFavourite(laptopInfo)}
                  className="star"
                  src={imagesPath[imageName]}
                  alt="star"
                ></img>
              }
            </p>
          </div>
          <p>Price:{laptopInfo.price}</p>
        </div>
        <Button
          text={"ADD TO CART"}
          backgroundColor={"darkgray"}
          dataID={laptopInfo.code}
          // modalHandler={() => modalHandler()}
          modalHandler={() => {
            addToCartHandler(laptopInfo);
          }}
        />
      </div>
    );
  else if (isCardShown === 1)
    return (
      <div className="card">
        <img
          className="card__img"
          src={require(`../../img/products/${laptopInfo.image}`).default}
          alt="card"
        />
        <div className="card__info">
          <h1>Name: {laptopInfo.name}</h1>
          <p>Price:{laptopInfo.price}</p>
          <p>
            Remove from favourite list:{" "}
            {
              <img
                onClick={() => toggleFavourite(laptopInfo)}
                className="star"
                src={imagesPath[imageName]}
                alt="star"
              ></img>
            }
          </p>
        </div>
      </div>
    );
  else if (isCardShown === 2)
    return (
      <div className="card">
        <img
          className="card__img"
          src={require(`../../img/products/${laptopInfo.image}`).default}
          alt="card"
        />
        <div className="card__info">
          <h1>Name: {laptopInfo.name}</h1>
          <p>Price:{laptopInfo.price}</p>
          <img onClick={() => removeFromCart(laptopInfo)} src={trash} />
        </div>
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
export default connect(mapStateToProps)(Card);
