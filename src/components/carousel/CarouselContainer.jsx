import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"
import { carousel_img, caption } from "./carousel.module.scss"
import data from "./projectsData"
import "./carousel.css"

const CarouselContainer = () => {
  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "carousel" }
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
    <Carousel touch wrap pause={false} controls={false}>
      {images.map(image => (
        <Carousel.Item
          className={carousel_img}
          interval={3000}
          key={image.node.id}
        >
          <Link to={image.node.base.split(".")[0]}>
            <Img
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base}
            />

            {data.map(project => {
              if (image.node.base.split(".")[0] === project.name) {
                return (
                  <Carousel.Caption>
                    <div className={caption}>
                      <h1>{project.title}</h1>
                      <p>{project.sub_title}</p>
                    </div>
                  </Carousel.Caption>
                )
              } else {
                return null
              }
            })}
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselContainer
