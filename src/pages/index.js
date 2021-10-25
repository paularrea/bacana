import * as React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import LogoBlack from "../components/GatsbyImages/LogoBlack"
import {
  container,
  abs_text,
  text,
  abs_img,
  container_separator,
} from "../styles/home.module.scss"
import BgHomeImg from "../components/home/bgHomeImg"
import CarouselContainer from "../components/carousel/CarouselContainer"
// import HomeVideo from "../components/video/HomeVideo"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <BgHomeImg>
        <div className={container}>
          {/* <section className={img_container}><HomeVideo /></section> */}
          <section className={container_separator}></section>
          <section className={text}>
            <h1>We are Bacana</h1>
          </section>
          <section className={abs_text}>
            <h1>
              Bacana Studio is a hospitality-oriented{" "}
              <Link to="/interior-design">Interior Design</Link> firm. Listening
              to people and understanding the needs, the environment and the
              communities behind every <Link to="/projects">project</Link> is
              what drives our creativity and through an insightful and strategic
              approach, we are able to always ensure our client’s purpose and
              ambitions are being met.
            </h1>
          </section>
          <Link style={{ zIndex: 9999 }} className={abs_img} to="/contact">
            <LogoBlack />
          </Link>
        </div>
      </BgHomeImg>
      <CarouselContainer link='projects/' />
    </Layout>
  )
}
export default Home
