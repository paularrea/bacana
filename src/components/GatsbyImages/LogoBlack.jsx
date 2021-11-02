import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/effects/spin-right.css"

const LogoBlack = () => {
  return (
    <StaticImage
      src="../../images/icons/bacana-logo.png"
      style={{
        animationName: "spinRight",
        animationDuration: "5000ms",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        width: "25vw",
        height: "25vw",
        maxWidth:"150px",
        maxHeight:"150px",
      }}
      alt="Bacana white logo"
      placeholder="blurred"
      layout="fixed"
      imgStyle={{width:'100%', height:'100%'}}
    />
  )
}
export default LogoBlack
