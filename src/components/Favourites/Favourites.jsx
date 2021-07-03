import React from "react";
import CardList from "../CardList/CardList";
import { connect } from "react-redux";

const Favourites = ({ dispatch, favourites, isCardShown }) => {
  return (
    <div>
      <CardList
        items={favourites}
        dispatch={dispatch}
        isCardShown={isCardShown}
        handler={() => {
          // updateModal(dataID.buttonOne)
        }}
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
export default connect(mapStateToProps)(Favourites);
