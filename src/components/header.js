import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

import Logo from "../images/logo-mark-white.svg"
import MenuLinks from "./menu-links"
import "./header.scss"

const Header = ({ menuLinks }) => (
  <Menu>
    <Link to="/" className="menu-logo-wrapper">
      <Logo className="menu-logo" />
    </Link>
    <MenuLinks menuLinks={menuLinks} />
  </Menu>
)

export default Header
