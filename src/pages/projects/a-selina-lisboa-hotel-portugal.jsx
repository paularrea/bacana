import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout/layout"
import { text_container } from "../../styles/projects.module.scss"
import MasonryLayout from "../../components/masonry/MasonryLayout"
import projectsData from "../../data/projectsData"
import ScrollRevealComponent from "../../components/ScrollReveal/ScrollRevealComponent"

const LisbonProject = () => {
  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "projects/lisbon" }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            base
            publicURL
            childImageSharp {
              fluid {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `
  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery)

  const projectInfo = projectsData.filter(
    project => project.name === "a-selina-lisboa-hotel-portugal"
  )
  return (
    <Layout>
        <ScrollRevealComponent slideUp={true}>
        <div className={text_container}>
          <h2>{projectInfo[0].title}</h2>
          <h5>{projectInfo[0].sub_title}</h5>
          <p>{projectInfo[0].text}</p>
        </div>
        <MasonryLayout images={images} />
    </ScrollRevealComponent>
      </Layout>
  )
}

export default LisbonProject
