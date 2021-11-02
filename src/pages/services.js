import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import LogoBlack from "../components/GatsbyImages/LogoBlack"
import {
  container,
  service_item,
  abs_img,
} from "../styles/services.module.scss"
import text from "../data/text"
import MediaQuery from "react-responsive"
import ScrollRevealComponent from "../components/ScrollReveal/ScrollRevealComponent"

const Services = () => {
  const servicesList = text.services.map(service => {
    return (
      <div className={service_item}>
        <MediaQuery minWidth={1025}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </MediaQuery>
        <MediaQuery maxWidth={1025}>
          <ScrollRevealComponent slideUp>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </ScrollRevealComponent>
        </MediaQuery>
      </div>
    )
  })
  return (
    <Layout>
      <Seo title="Services" />
      <div className={container}>
        {servicesList}
        <Link style={{ zIndex: 9999 }} className={abs_img} to="/contact">
          <LogoBlack />
        </Link>
      </div>
    </Layout>
  )
}

export default Services
