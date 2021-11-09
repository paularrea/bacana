import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { container, item, caption } from "./grid.module.scss"
import data from "../../data/projectsData"

const ProjectsGrid = ({ link }) => {
  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "grid" }
        }
      ) {
        edges {
          node {
            base
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

  return (
    <div id="projects" className={container}>
      <Grid>
        <Row>
          {images.map(image => (
            <Col
              style={{
                marginBottom: "1rem",
                display: "flex",
                jusifyContent: "center",
                alignItems: "flex-start",
              }}
              xl={4}
              md={6}
              sm={12}
              xs={12}
            >
              <div className={item}>
                <Link
                  to={`${link ? link : ""}${image.node.base.split(".")[0]}`}
                >
                  <Img
                    style={{ height: "100%", width: "100%" }}
                    imgStyle={{ objectFit: "cover" }}
                    fluid={image.node.childImageSharp.fluid}
                  />
                  {data.map(project => {
                    if (image.node.base.split(".")[0] === project.name) {
                      return (
                        <>
                          <div className={caption}>
                            <h2>{project.title}</h2>
                          </div>
                        </>
                      )
                    } else {
                      return null
                    }
                  })}
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  )
}

export default ProjectsGrid
