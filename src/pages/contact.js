import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import LogoBlack from "../components/GatsbyImages/LogoBlack"
import {
  container,
  box,
  flex_box,
  abs_img,
} from "../styles/contact.module.scss"
import ScrollRevealComponent from "../components/ScrollReveal/ScrollRevealComponent"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
      <div className={container}>
        <section className={box} style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontWeight: 700 }}>Bacana Studio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sit
            magni, error adipisci totam ad blanditiis repellendus expedita iste
            eaque asperiores minus aliquid eius? Eum perspiciatis fugit aliquid
            dignissimos magnam?
          </p>
        </section>
        <section className={flex_box}>
          <div className={box}>
            <h2 style={{ fontWeight: 700 }}>Drop us a line</h2>
            <p>
              <a
                rel="noreferrer"
                target="_blank"
                href="mailto:info@bacanastudio.com"
              >
                info@bacanastudio.com
              </a>
            </p>
          </div>
          <div className={box}>
            <h2 style={{ fontWeight: 700 }}>Call us</h2>
            <p>
              <a href="tel:+351912677606">+351 912 677 606</a>
            </p>
          </div>
          <div className={box}>
            <h2 style={{ fontWeight: 700 }}>Follow us</h2>
            <p>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/studiobacana/"
              >
                @studiobacana
              </a>
            </p>
          </div>
        </section>
        <Link style={{ zIndex: 9999 }} className={abs_img} to="/">
          <LogoBlack />
        </Link>
      </div>
  </Layout>
)

export default Contact
