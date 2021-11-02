import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import LogoBlack from "../components/GatsbyImages/LogoBlack"
import {} from "../styles/home.module.scss"
import CarouselContainer from "../components/carousel/CarouselContainer"
import ClientsBanner from "../components/clients/ClientsBanner"
import HomeIntroText from "../components/home/HomeIntroText"
import ProjectsGrid from "../components/grid/ProjectsGrid"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <CarouselContainer link="projects/" />
      <HomeIntroText />
      <ProjectsGrid />
      <ClientsBanner />
    </Layout>
  )
}
export default Home
