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
      <Seo
        title="Home"
        description="We are an interior design and architecture company focusing on hospitality, workplaces and residential projects around the world. Listening to our clients and understanding their needs, the environment and the communities behind every project is what drives our creativity while strategically developing individual concepts around business models."
      />
      <div className={container}>
        <CarouselContainer link="projects/" />
        <HomeIntroText />
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
