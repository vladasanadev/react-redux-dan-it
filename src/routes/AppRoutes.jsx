import React from "react";
import { Route, Switch } from "react-router-dom";
import Favourites from "../components/Favourites/Favourites.jsx";
import Cart from "../components/Cart/Cart.jsx";
import CardList from "../components/CardList/CardList.jsx";
import Page404 from "../components/Page404/Page404.jsx";

const AppRoutes = ({
  dispatch,
  items,
  isFavourite,
  favouriteItem,
  setFavourites,
  cartItems,
  setCartItems,
  setisFavourite,
  toggleFavourite,
  handler,
  favourites,
}) => {
  return (
    <Switch>
      <Route path={"/"} exact>
        <CardList
          dispatch={dispatch}
          isCardShown={0}
          handler={handler}
          items={items}
        />
      </Route>
      <Route path={"/Cart"} exact>
        <Cart
          cartItems={cartItems}
          isCardShown={2}
          favouriteItem={favouriteItem}
          favourites={favourites}
          setCartItems={setCartItems}
          dispatch={dispatch}
        />
      </Route>
      <Route path={"/Favourites"} exact>
        <Favourites
          isCardShown={1}
          favouriteItem={favouriteItem}
          favourites={favourites}
          setFavourites={setFavourites}
          dispatch={dispatch}
        />
      </Route>
      <Route path={"*"} component={Page404}></Route>
    </Switch>
  );
};

export default AppRoutes;
