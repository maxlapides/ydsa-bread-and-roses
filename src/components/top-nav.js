import React from "react"

import MenuLinks from "./menu-links"
import "./top-nav.scss"

const TopNav = ({ menuLinks }) => (
  <div className="top-nav">
    <MenuLinks menuLinks={menuLinks} />
  </div>
)

export default TopNav
