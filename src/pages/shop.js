import * as React from "react"
import CommingSoon from "../components/GatsbyImages/CommingSoon"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import {container} from "../styles/shop.module.scss"

const Shop = () => (
  <Layout>
    <Seo title="Shop" description='Comming Soon' />
    <div className={container}>
        <CommingSoon />
    </div>
  </Layout>
)

export default Shop
