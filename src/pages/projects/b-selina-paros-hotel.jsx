import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout/layout"
import projectsData from "../../data/projectsData"
import { text_container } from "../../styles/projects.module.scss"
import MasonryLayout from "../../components/masonry/MasonryLayout"

const ParosProject = () => {
  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "projects/paros" }
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
    project => project.name === "b-selina-paros-hotel"
  )
  return (
    <Layout>
      <div className={text_container}>
        <h2>{projectInfo[0].title}</h2>
        <h5>{projectInfo[0].sub_title}</h5>
        <p>{projectInfo[0].text}</p>
      </div>
      <MasonryLayout images={images} />
    </Layout>
  )
}

export default ParosProject
