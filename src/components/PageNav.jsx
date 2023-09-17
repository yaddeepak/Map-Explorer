import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./PageNav.module.css";
import Logo from '../components/Logo'

const PageNav = () => {
  return (
    <nav className={Styles.nav}>
       <Logo/> 
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
