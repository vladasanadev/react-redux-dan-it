import React from 'react';
import style from "./style.css"
import {NavLink, Route, Switch} from "react-router-dom";

const Header = () => {
    return (
        <header>
        <nav>
            <ul className="nav">
                    <NavLink to={"/"} exact>Home</NavLink>
                    <NavLink to={"/Cart"} exact>Cart</NavLink>
                    <NavLink to={"/Favourites"} exact>Favourites</NavLink>
            </ul>
            </nav>
            </header>
    );
};

export default Header;