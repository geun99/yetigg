import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="nav-left">
        <Link to="/" className="nav-main">
          YETI.GG
        </Link>
        <Link to="/monster">Monster</Link>
        <Link to="/item">Item</Link>
      </div>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.div`
  font-size: 1.5rem;
  font-weigth: bold;
  display: flex;
  justify-content: start;
  padding: 20px;
  background: black;

  a {
    text-decoration: none;
    padding-right: 20px;
    color: white;
    font-size: 1.2rem;
  }
`;

export default Navbar;
