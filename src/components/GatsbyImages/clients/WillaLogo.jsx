import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const WillaLogo = () => {
  return (
    <StaticImage
      src="../../../images/icons/willa_logo.png"
      alt="Willa start living logo"
      placeholder="blurred"
      layout="fixed"
      style={{ width: "200px", height: "67px" }}
      imgStyle={{ width: "100%", height: "100%" }}
    />
  )
}
export default WillaLogo
