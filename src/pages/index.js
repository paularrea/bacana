import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import LogoBlack from "../components/GatsbyImages/LogoBlack"
import { Link } from "gatsby"
import { container, abs_img } from "../styles/home.module.scss"
import CarouselContainer from "../components/carousel/CarouselContainer"
// import ClientsBanner from "../components/clients/ClientsBanner"
import HomeIntroText from "../components/home/HomeIntroText"
import ProjectsGrid from "../components/grid/ProjectsGrid"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className={container}>
        <CarouselContainer link="projects/" />
        <HomeIntroText/>
        <ProjectsGrid link="projects/" />
        {/* <ClientsBanner /> */}
        <Link style={{ zIndex: 9999 }} className={abs_img} to="/services">
          <LogoBlack />
        </Link>
      </div>
    </Layout>
  )
}
export default Home
