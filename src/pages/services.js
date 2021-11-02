import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout/layout"
import { container } from "../styles/services.module.scss"

const Services = () => {
  return (
    <Layout>
      <Seo title="Services" />
      <div className={container}>Services</div>
    </Layout>
  )
}

export default Services
