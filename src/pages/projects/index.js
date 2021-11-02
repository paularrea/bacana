import React, { useState, useEffect } from "react"
import Seo from "../../components/seo"
import MediaQuery from "react-responsive"
import { container } from "../../styles/projects.module.scss"
import CarouselContainer from "../../components/carousel/CarouselContainer"
import ProjectsGrid from "../../components/grid/ProjectsGrid"
import ProjectsHeader from "../../components/header/ProjectsHeader"
import AnimatedCursor from "../../components/cursor/AnimatedCursor"
import Footer from "../../components/footer/Footer"

const Projects = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 200)
    return () => clearTimeout(timeout)
  }, [show])

  return (
    <div className={container}>
      <MediaQuery minWidth={900}>
        <AnimatedCursor />
      </MediaQuery>
      <ProjectsHeader />
      {show && (
        <>
          <Seo title="Projects" />
          <CarouselContainer />
          <ProjectsGrid />
        </>
      )}
      <Footer/>
    </div>
  )
}

export default Projects
