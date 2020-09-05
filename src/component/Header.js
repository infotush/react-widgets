import React, { useState } from "react";
import Link from "./Link";

const Header = () => {
 

  return (
    <div className="ui four item menu">
      <Link className="item" href="/">
        Accordion
      </Link>
      <Link className="item" href="/search">
        Search
      </Link>
      <Link className="item" href="/dropdown">
        DropDown
      </Link>
      <Link className="item" href="/translate">
        Translate
      </Link>
    </div>
  );
};

export default Header;
