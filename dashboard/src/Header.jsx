import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

import SearchButton from "./searchbut";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        {/* <SearchButton className="icon" /> */}
        <h3 className="colorchg">Hello Shahrukh 👋,</h3>
      </div>
      <div className="header-right">
        <SearchButton />
      </div>
    </header>
  );
}

export default Header;
