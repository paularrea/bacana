import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap"
import { carousel_img, caption } from "./carousel.module.scss"
import data from "../../data/projectsData"
import "./carousel.css"

const CarouselContainer = ({ link }) => {
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
              gatsbyImageData(
                quality: 100
                transformOptions: { cropFocus: CENTER, fit: COVER }
                webpOptions: { quality: 100 }
                layout: FULL_WIDTH
                placeholder: BLURRED
                blurredOptions: { width: 100 }
              )
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
    <section style={{ position: "relative", zIndex: 1 }}>
      <Carousel touch wrap pause={false} controls={false}>
        {images.map(image => (
          <Carousel.Item
            className={carousel_img}
            interval={5000}
            key={image.node.id}
          >
            <Link to={`${link ? link : ""}${image.node.base.split(".")[0]}`}>
              <GatsbyImage
                image={getImage(image.node.childImageSharp)}
                style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
                alt={image.node.base}
              />
              {data.map(project => {
                if (image.node.base.split(".")[0] === project.name) {
                  return (
                    <Carousel.Caption>
                      <div className={caption}>
                        <h1 style={{ color: project.text_color }}>
                          {project.title}
                        </h1>
                        <p style={{ color: project.text_color }}>
                          {project.sub_title}
                        </p>
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
    </section>
  )
}

export default CarouselContainer
