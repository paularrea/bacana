import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Header from "../header/Header"
import { page } from "./layout.module.scss"
import AnimatedCursor from "../cursor/AnimatedCursor"
import MediaQuery from "react-responsive"
import "../../styles/App.scss"
import "../cursor/cursor.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../footer/Footer"
import ScrollRevealComponent from "../ScrollReveal/ScrollRevealComponent"

const Layout = ({ children }) => {
  const [show, setShow] = useState(false)

  // if (typeof window !== "undefined") {
  //   require("smooth-scroll")('a[href*="#"]')
  // }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 300)
    return () => clearTimeout(timeout)
  }, [show])

  const inContactPage = () => {
    const url = window.location.href
    return url.indexOf("contact") > -1
  }

  if (!show) return null

  return (
    <>
      <MediaQuery minWidth={900}>
        <AnimatedCursor />
      </MediaQuery>
      <Header />
      <ScrollRevealComponent>
        <main className={page}>{children}</main>
        {inContactPage() ? "" : <Footer />}
      </ScrollRevealComponent>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
