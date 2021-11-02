import { Link } from "gatsby"
import React from "react"
import Burger from "./components/burger"
import MediaQuery from "react-responsive"
import { navbar_projects, active, abs_title } from "./header.module.scss"
import "./components/burger.css"

const ProjectsHeader = () => {
  return (
    <div className={navbar_projects}>
      <MediaQuery minWidth={870}>
        <Link to="/">BACANA STUDIO</Link>
        <nav>
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
      </MediaQuery>
      <MediaQuery maxWidth={870}>
        <Link className={abs_title} to="/">BACANA STUDIO</Link>
        <Burger />
      </MediaQuery>
    </div>
  )
}

export default ProjectsHeader
