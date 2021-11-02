import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout/layout"
import { container, service_item } from "../styles/services.module.scss"
import text from "../data/text"

const Services = () => {
  const servicesList = text.services.map(service => {
    return (
      <div className={service_item}>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
      </div>
    )
  })
  return (
    <Layout>
      <Seo title="Services" />
      <div className={container}>{servicesList}</div>
    </Layout>
  )
}

export default Services
