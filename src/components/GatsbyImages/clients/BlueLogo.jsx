import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const BlueLogo = () => {
  return (
    <StaticImage
      src="../../../images/icons/blue_logo.png"
      alt="Blue venao logo"
      placeholder="blurred"
      layout="fixed"
      style={{ width: "200px", height: "67px" }}
      imgStyle={{ width: "100%", height: "100%" }}
    />
  )
}
export default BlueLogo
