import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const StayncoLogo = () => {
  return (
    <StaticImage
      src="../../..//images/icons/staynco_logo.png"
      alt="Staynco logo"
      placeholder="blurred"
      layout="fixed"
      style={{ width: "200px", height: "67px" }}
      imgStyle={{ width: "100%", height: "100%" }}
    />
  )
}
export default StayncoLogo
