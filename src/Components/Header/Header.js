import React from "react";
import Profile from "../UI/Icons/Profile/Profile";
import Forum from "../UI/Icons/Forum/Forum";
import Logo from "../UI/Icons/Logo/Logo";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Profile fontSize="large" className="header__icons" />
      <Logo />
      <Forum className="header__icons" />
    </header>
  );
}

export default Header;
