import React from "react"
import { Link } from "gatsby"
import { burger_nav,active } from "../header.module.scss"
import { slide as Menu } from "react-burger-menu"

const Burger = props => {
  return (
    <Menu {...props}>
      <nav className={burger_nav}>
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