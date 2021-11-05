import React, { useState } from "react"
import { Link } from "gatsby"
import { burger_nav, active } from "../header.module.scss"
import { slide as Menu } from "react-burger-menu"
// import { AnchorLink } from "gatsby-plugin-anchor-links"

const Burger = props => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleStateChange = state => {
    setMenuOpen(state.isOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <Menu
      isOpen={menuOpen}
      onStateChange={state => handleStateChange(state)}
      {...props}
    >
      <nav className={burger_nav}>
        {/* <AnchorLink
          onClick={() => {
            closeMenu()
          }}
          onKeyDown={() => {
            closeMenu()
          }}
          tabIndex={0}
          activeClassName={active}
          activeClassName={active}
          stripHash
          to="/#projects"
        >
          Projects
        </AnchorLink> */}
        <Link activeClassName={active} to="/projects">
          Projects
        </Link>
        <Link activeClassName={active} to="/services">
          Services
        </Link>
        <Link activeClassName={active} to="/shop">
          Shop
        </Link>
        <Link activeClassName={active} to="/contact">
          Contact
        </Link>
      </nav>
    </Menu>
  )
}

export default Burger
