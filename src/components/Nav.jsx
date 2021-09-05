import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/" exact>
                <h1>Logo</h1>
            </NavLink>
            <ul className="navlinks">
                <NavLink to="/about">
                    <li>About</li>
                </NavLink>
                <NavLink to="/shop">
                    <li>Shop</li>
                </NavLink>
                <NavLink to="/login">
                    <li>Login</li>
                </NavLink>
                <button>Logout</button>
            </ul>
        </nav>
    );
};

export default Nav;
