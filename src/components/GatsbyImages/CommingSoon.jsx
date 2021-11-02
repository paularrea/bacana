import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/effects/flash.css"

const CommingSoon = () => {
  return (
    <StaticImage
      src="../../images/icons/comming-soon.png"
      alt="Bacana white logo"
      style={{
        WebkitAnimation: "flash linear 1s infinite",
        animation: "flash linear 1s infinite",
        width:'12vw', height:'2vw', minWidth:'300px', minHeight:'30px'
      }}
      placeholder="blurred"
      layout="fixed"
      imgStyle={{width:'100%', height:'100%'}}
    />
  )
}
export default CommingSoon
