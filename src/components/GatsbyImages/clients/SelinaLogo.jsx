import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const SelinaLogo = () => {
  return (
    <StaticImage
      src="../../../images/icons/selina_logo.png"
      alt="Selina logo"
      placeholder="blurred"
      layout="fixed"
      style={{width:'200px', height:'67px'}}
      imgStyle={{width:'100%', height:'100%'}}
    />
  )
}
export default SelinaLogo
