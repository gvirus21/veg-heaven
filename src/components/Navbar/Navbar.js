import React from "react";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="NavContainer">
        <Logo />
        <HamburgerMenu />
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
