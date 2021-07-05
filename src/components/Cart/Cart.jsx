import React from "react";
import CardList from "../CardList/CardList";
import { connect } from "react-redux";

const Cart = ({
  dispatch,
  cartItems,
  setCartItems,
  favourites,
  favouriteItem,
  isCardShown,
  handler,
}) => {
  return (
    <div>
      <CardList
        items={cartItems}
        dispatch={dispatch}
        setCartItems={setCartItems}
        cartItems={cartItems}
        isCardShown={isCardShown}
        favourites={favourites}
        favouriteItem={favouriteItem}
        handler={handler}
      />
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    counterValue: store.counter,
    modalInfo: store.modalInfo,
    favourites: store.favourites,
    show: store.show,
    cartItems: store.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);
