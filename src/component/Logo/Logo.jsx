import React from "react";
import { Link } from "react-router-dom";

import logo from '../../images/logo.webp';

const Logo = ({ onClick = () => {} }) => {
  return (
  <div className="logo">
    <Link onClick={onClick} to="/">
    <img src={logo} alt="oxxx" />
    </Link>
  </div>
  );
};

export default Logo;
