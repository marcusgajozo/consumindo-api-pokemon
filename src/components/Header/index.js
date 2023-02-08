import React from "react";

import logo from "../../image/logo-pokemon.svg";
import { Menu } from "./style";

export default function Header() {
  return (
    <Menu>
      <a href="/"><img className="logo" src={logo} alt="logo pokemon" /></a>
    </Menu>
  );
}
